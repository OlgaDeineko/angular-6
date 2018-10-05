import {inject, TestBed} from '@angular/core/testing';
import {HttpClientModule, HttpEvent, HttpEventType} from '@angular/common/http';
import {GeneralService} from './general.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';

const API_URL = environment.apiUrl;

describe('GeneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        HttpClientTestingModule],
      providers: [GeneralService]
    });
  });

  it('should be created', inject([GeneralService], (service: GeneralService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'should get data',
    inject(
      [HttpTestingController, GeneralService],
      (httpMock: HttpTestingController, dataService: GeneralService) => {
        const mockData = {
          'barChartLabels': [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
          ],
          'barChartData': [
            {
              'data': [
                16,
                59,
                80,
                95.09235882756523,
                56,
                64.15796667132507,
                40
              ],
              'label': 'Test 1'
            },
            {
              'data': [
                65,
                59,
                80,
                81,
                56,
                55,
                40
              ],
              'label': 'Test 2'
            }
          ]
        };

        dataService.getData().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockData);
          }
        });

        const mockReq = httpMock.expectOne(API_URL + '/result');

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockData);

        httpMock.verify();
      }
    )
  );
});
