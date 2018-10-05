export interface IChartData {
  barChartLabels: string[];
  barChartData: IBarChartData[];
}

export interface IBarChartData {
  data: number[];
  label: string;
}
