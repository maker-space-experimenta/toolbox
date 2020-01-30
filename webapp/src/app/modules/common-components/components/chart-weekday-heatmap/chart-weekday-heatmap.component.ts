import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PaperScope, Project, Path, Point, Color, Size, Rectangle, PointText } from 'paper';

@Component({
  selector: 'app-chart-weekday-heatmap',
  templateUrl: './chart-weekday-heatmap.component.html',
  styleUrls: ['./chart-weekday-heatmap.component.scss']
})
export class ChartWeekdayHeatmapComponent implements OnInit {

  dataMax: number = 0;

  data: any = [
    { label: "Montag",      data: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 5, 5, 5, 5, 5, 4, 3, 2] },
    { label: "Dienstag",    data: [3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 25, 25, 27, 30, 25, 13, 10, 10] },
    { label: "Mittwoch",    data: [3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 15, 19, 25, 30, 25, 13, 10, 10] },
    { label: "Donnerstag",  data: [3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 15, 19, 25, 30, 25, 13, 10, 10] },
    { label: "Freitag",     data: [3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 15, 19, 25, 30, 30, 20, 15, 10] },
    { label: "Samstag",     data: [3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 15, 19, 25, 30, 25, 13, 10, 10] },
    { label: "Sonntag",     data: [3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 7, 15, 10, 10, 10, 10, 9, 6, 4] },
  ]

  constructor() { }

  ngOnInit() {
    var topLeft = new Point(10, 10);
    var rectSize = new Size(20, 20);

    const project1 = new Project('canvas');

    this.data.forEach(m => {
      if (Math.max(...m.data) > this.dataMax) {
        this.dataMax = Math.max(...m.data);
      }
    });

    this.renderXAxisLabels(10, 99);
    this.renderLabels(30, 10, this.data);
    this.renderDots(20, 100, this.data);

    console.log(this.dataMax);
  }

  formatHour(h: number) {
    let t = h.toString();

    if (t.length < 2) {
      t = '0' + t;
    }

    return t;
  }

  renderXAxisLabels(top: number, left: number) {
    for (let i  = 0; i < 23; i++) {
      const square = new PointText({
        point: [left + (20 * i), top],
        content: this.formatHour(i + 1),
        fillColor: 'black',
        fontFamily: 'Courier New',
        fontSize: 12
    });
    }
  }

  renderLabels(top:number, left:number,week: any) {
    this.data.forEach((day, indexDay) => {
        const square = new PointText({
          point: [left, top + (20 * indexDay)],
          content: day.label,
          fillColor: 'black',
          fontFamily: 'Courier New',
          fontSize: 12
      });
    });
  }

  renderDots(top:number, left:number, week: any) {
    this.data.forEach((day, indexDay) => {
      day.data.forEach((hour, indexHour) => {
        const square = new Path.Rectangle({
          point: [left + 20 * indexHour, top + 20 * indexDay],
          size: [12, 12],
          strokeColor: 'rgba(0,0,0,0.4)',
          fillColor: 'rgba(0,150,0,' + (hour / this.dataMax) + ')',
        });
      })
    });
  }

}
