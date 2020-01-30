import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import * as moment from 'moment';
import { data as ChartData } from './data';

@Component({
  selector: 'app-chart-visitors',
  templateUrl: './chart-visitors.component.html',
  styleUrls: ['./chart-visitors.component.scss']
})
export class ChartVisitorsComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;
  chart: Chart;
  config: any;

  constructor() { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    let data = {
      labels: this.generateLabels(),
      datasets: [
        {
          label: 'Code for Heilbronn',
          backgroundColor: 'rgba(0, 101, 171, 0.5)',
          borderColor: 'rgba(0, 101, 171, 1)',
          data: ChartData.cfhn,
          yAxisID: 'y-axis-1',
        },
        {
          label: 'Makers',
          backgroundColor: 'rgba(0, 149, 211, 0.5)',
          borderColor: 'rgba(0, 149, 211, 1)',
          data: ChartData.general,
          yAxisID: 'y-axis-1',
        },

        {
          label: 'Average',
          backgroundColor: 'rgba(0, 99, 132, 0.1)',
          borderColor: 'rgba(0,0,0, 0.3)',
          data: ChartData.averageMonth,
          yAxisID: 'y-axis-1',
          type: "line"
        },
      ]
    };

    let options = {
      responsive: true,
      hoverMode: 'index',
      maintainAspectRatio: false,
      stacked: true,
      elements: {
        line: {
          tension: 0 // disables bezier curves
        },
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [{
          id: 'x-axis-1',
          type: 'time',
          time: {
            unit: 'month'
          }
        }],

        yAxes: [{
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'left',
          id: 'y-axis-1',
        }],
      }
    };

    this.config = {
      type: 'bar',
      data: data,
      options: options
    };

    this.chart = new Chart(this.ctx, this.config);
  }

  generateLabels(): any[] {

    let startYear: number = moment().year();

    var labels: any[] = [
    ];

    for (let month = 0; month < 12; month++) {
      labels = labels.concat(this.generateLabelsMonth(startYear, month));
    }

    return labels;
  }

  generateLabelsMonth(year: number, month: number): any[] {
    var labels: any[] = [];
    let daysInMonth = moment().year(year).month(month).daysInMonth();
    for (let day = 0; day < daysInMonth; day++) {
      labels.push(moment().year(year).month(month).date(day).toDate());
    }

    return labels;
  }


}
