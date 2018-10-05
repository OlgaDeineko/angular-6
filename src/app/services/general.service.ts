import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IChartData} from '../interfaces/i-chart-data';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private httpClient: HttpClient) {
  }

  // API: GET
  public getData() {
    return this.httpClient
      .get(API_URL + '/result');
  }

  // API: POST
  public sendData(data: IChartData) {
    return this.httpClient
      .post(API_URL + '/result', data);
  }

}
