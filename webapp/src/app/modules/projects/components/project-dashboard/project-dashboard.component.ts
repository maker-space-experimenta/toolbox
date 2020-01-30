import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProjectsProject } from 'src/app/models/projects-project';
import { ProjectsTodo } from 'src/app/models/projects-todo';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

  Projects: Observable<ProjectsProject[]>;
  Todos: Observable<ProjectsTodo[]>;

  constructor() { }

  ngOnInit() {
    this.Projects = new BehaviorSubject<ProjectsProject[]>([
      {
        id: "",
        title: "Project 1",
        description: "this is a small smaple project with no todos",
        todos: []
      }, {
        id: "",
        title: "Project 2",
        description: "",
        todos: []
      }
    ]);

    this.Todos = new BehaviorSubject<ProjectsTodo[]>([
    ]);
  }

}
