import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {IBarChartData, IChartData} from '../../interfaces/i-chart-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018'
  ];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: IBarChartData[] = [
    {data: [0], label: ''},
    {data: [0], label: ''}
  ];

  public result: string;

  constructor(private generalService: GeneralService) {
  }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public getData(): void {
    this.generalService.getData().subscribe((data: IChartData) => {
      this.result = JSON.stringify(data);
      this.barChartData = data.barChartData;
      this.barChartLabels = data.barChartLabels;
      this.barChartLegend = true;
    });
  }

  public sendData(): void {
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;

    let newData = {
      'barChartLabels': this.barChartLabels,
      'barChartData': clone
    };

    this.generalService.sendData(newData).subscribe((res: IChartData) => {
      this.result = JSON.stringify(res);
      this.barChartData = res.barChartData;
      this.barChartLabels = res.barChartLabels;
      this.barChartLegend = true;
    });
  }
}
