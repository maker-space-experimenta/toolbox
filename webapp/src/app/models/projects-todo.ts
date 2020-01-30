import { ProjectsProject } from './projects-project';

export class ProjectsTodo {
    
    id: string;
    title: string;
    description: string;

    parent: string;
    history_next: string;

    project_id: string;
    project: ProjectsProject
}
