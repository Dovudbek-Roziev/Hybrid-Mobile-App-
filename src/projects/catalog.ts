import { originalProjects, type GuidedProject } from './original-projects';
import { foundationProjects } from './guides/foundations';
import { deliveryProjects } from './guides/delivery';

export type ProjectGuide = GuidedProject & {
  steps: string[];
  code: string;
  testing: string;
  security: string;
  deployment: string;
};

export const projects: readonly ProjectGuide[] = [...foundationProjects, ...deliveryProjects];

const activeIds = new Set(projects.map((project) => project.id));
export const previousProjects = originalProjects.filter((project) => !activeIds.has(project.id));
