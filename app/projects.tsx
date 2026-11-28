import { useRef, useState } from 'react';
import { CodeBlock } from '../src/components/CodeBlock';
import { Button, Card, Label, LoadState, Meter, Screen } from '../src/components/ui';
import { projectEntries, setMilestone } from '../src/database/learning';
import { useLocalData } from '../src/hooks/useLocalData';
import { previousProjects, projects } from '../src/projects/catalog';
import type { GuidedProject } from '../src/projects/original-projects';
import { useTheme } from '../src/theme';

function ProjectListCard({ project, completed, onOpen }: {
  project: GuidedProject;
  completed: number;
  onOpen: () => void;
}) {
  const { t } = useTheme();
  const total = project.milestones.length;
  return (
    <Card>
      <Label kind="heading">{project.month}. {project.title}</Label>
      <Label>{project.stack}</Label>
      <Label>{completed} / {total}</Label>
      <Meter value={completed} total={total} />
      <Button onPress={onOpen}>{t('Open project', 'Loyihani ochish')}</Button>
    </Card>
  );
}

function ProjectListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <Label kind="heading">{title}</Label>
      {items.map((item, index) => <Label key={item}>{index + 1}. {item}</Label>)}
    </Card>
  );
}

export default function Projects() {
  const { t } = useTheme();
  const progress = useLocalData(projectEntries);
  const [selected, setSelected] = useState<string | null>(null);
  const [showPrevious, setShowPrevious] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const lock = useRef(false);
  const done = new Set((progress.data ?? []).map(({ id, milestone }) => id + ':' + milestone));
  const count = (project: GuidedProject) =>
    project.milestones.filter(({ id }) => done.has(project.id + ':' + id)).length;
  const guide = projects.find(({ id }) => id === selected);
  const project = guide ?? previousProjects.find(({ id }) => id === selected);

  async function toggle(id: string, milestone: string) {
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setError('');
    try {
      await setMilestone(id, milestone, !done.has(id + ':' + milestone));
      progress.retry();
    } catch (error) {
      setError(String(error));
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }

  return (
    <Screen title={t('Guided Projects', 'Amaliy loyihalar')} back>
      <LoadState {...progress} />
      {!!error && <Label>{error}</Label>}
      {project ? (
        <>
          <Button onPress={() => setSelected(null)}>{t('All projects', 'Barcha loyihalar')}</Button>
          <Card>
            <Label kind="title">{project.title}</Label>
            <Label kind="heading">{t('Goal', 'Maqsad')}</Label>
            <Label>{project.brief}</Label>
            <Label kind="heading">{t('Technology stack', 'Texnologiyalar')}</Label>
            <Label>{project.stack}</Label>
            <Label kind="heading">{t('Architecture', 'Arxitektura')}</Label>
            <Label>{project.architecture}</Label>
            <Label>{t('Progress', 'Progress')} {count(project)} / {project.milestones.length}</Label>
            <Meter value={count(project)} total={project.milestones.length} />
          </Card>
          <ProjectListSection title={t('Technical requirements', 'Texnik talablar')} items={project.requirements} />
          {guide && (
            <>
              <ProjectListSection title={t('Step-by-step guide', 'Bosqichma-bosqich qo‘llanma')} items={guide.steps} />
              <Card>
                <Label kind="heading">{t('Code example', 'Kod namunasi')}</Label>
                <CodeBlock code={guide.code} />
              </Card>
              <Card>
                <Label kind="heading">{t('Testing', 'Sinov')}</Label>
                <Label>{guide.testing}</Label>
                <Label kind="heading">{t('Security', 'Xavfsizlik')}</Label>
                <Label>{guide.security}</Label>
                <Label kind="heading">{t('Deployment', 'Joylashtirish')}</Label>
                <Label>{guide.deployment}</Label>
              </Card>
            </>
          )}
          <ProjectListSection title={t('Acceptance checklist', 'Qabul qilish ro‘yxati')} items={project.acceptance} />
          <Card>
            <Label kind="heading">{t('Milestones', 'Bosqichlar')}</Label>
            {project.milestones.map((milestone) => {
              const completed = done.has(project.id + ':' + milestone.id);
              return (
                <Button
                  key={milestone.id}
                  disabled={busy || progress.loading || !!progress.error}
                  chosen={completed}
                  onPress={() => void toggle(project.id, milestone.id)}
                >
                  {completed ? '✓ ' : '◌ '}{milestone.title}
                </Button>
              );
            })}
          </Card>
          <ProjectListSection title={t('Review criteria', 'Baholash mezonlari')} items={project.rubric} />
        </>
      ) : (
        <>
          <Card>
            <Label kind="heading">{t('Completed projects', 'Tugallangan loyihalar')}</Label>
            <Label>{projects.filter((project) => count(project) === project.milestones.length).length} / {projects.length}</Label>
            <Meter
              value={projects.reduce((total, project) => total + count(project), 0)}
              total={projects.reduce((total, project) => total + project.milestones.length, 0)}
            />
          </Card>
          {projects.map((project) => (
            <ProjectListCard key={project.id} project={project} completed={count(project)} onOpen={() => setSelected(project.id)} />
          ))}
          <Button chosen={showPrevious} onPress={() => setShowPrevious(!showPrevious)}>
            {showPrevious ? t('Hide previous projects', 'Oldingi loyihalarni yopish') : t('Show previous projects', 'Oldingi loyihalarni ko‘rish')}
          </Button>
          {showPrevious && previousProjects.map((project) => (
            <ProjectListCard key={project.id} project={project} completed={count(project)} onOpen={() => setSelected(project.id)} />
          ))}
        </>
      )}
    </Screen>
  );
}
