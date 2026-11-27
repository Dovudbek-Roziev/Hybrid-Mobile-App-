import { lessons } from '../curriculum';
import { exercises } from '../english';
import { completedEnglish, completedLessons, getDailyTasks, loadProfile, quizAttempts } from '../storage';
import { activityDays, studyData } from '../database/learning';
import { localDay, streaks } from '../utils/calendar';

export async function dashboardData() {
  const [profile, lessonsDone, englishDone, tasks, attempts, study, days] = await Promise.all([
    loadProfile(), completedLessons(), completedEnglish(), getDailyTasks(localDay()), quizAttempts(), studyData(), activityDays(),
  ]);
  const completed = new Set(lessonsDone);
  const practiced = new Set(englishDone);
  return {
    profile, tasks, next: lessons.find(lesson => !completed.has(lesson.id)),
    lessonCount: lessons.filter(lesson => completed.has(lesson.id)).length,
    englishCount: exercises.filter(exercise => practiced.has(exercise.id)).length,
    studyMinutes: Math.floor(study.days.reduce((sum, row) => sum + row.seconds, 0) / 60),
    streak: streaks([...days, ...study.days.map(row => row.day), ...study.tasks.map(row => row.day)]),
    quizTaken: attempts.some(row => row.quizId === 'js-week-1'),
  };
}
