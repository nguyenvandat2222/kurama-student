import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../../../../core/services/course.service';
import {CourseModel} from '../../../../core/models/course.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public chartType = 'bar';

  @Input() listCourse!: {course: string, status: boolean, score: number}[];
  courseList: CourseModel[] = [];
  public chartDatasets: Array<any> = [
    { data: [], label: 'điểm' }
  ];

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',

      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
      ],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    if (this.listCourse) {
      const course: string[] = [];
      const courseData: number[] = [];
      const courseName: string[] = [];
      let courseMap = new Map();
      this.listCourse.forEach(value => {
        course.push(value.course);
        courseMap.set(value.course, value.score);
      })
      this.courseService.getListCourseRegistered(course).subscribe(res => {
        res.forEach(value => {
          value.score = courseMap.get(value._id);
          this.courseList.push(value);
        });
        this.courseList.forEach(course => {
          courseData.push(course.score);
          courseName.push(course.name);
        })
        this.chartLabels = courseName;
        courseData.push(10)
        this.chartDatasets[0].data = courseData;

      })
    }
  }

}
