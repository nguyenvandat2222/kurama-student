import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public chartType = 'doughnut';

  @Input() count!: number;
  public chartDatasets: Array<any> = [
    { data: [0, 400], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Đã học', 'Toàn bộ'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#90ed7d', '#defad9'],
      hoverBackgroundColor: ['#90ed7d', '#defad9'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

  ngOnInit(): void {
    this.chartDatasets[0].data = [this.count, 400 - this.count];
  }

}
