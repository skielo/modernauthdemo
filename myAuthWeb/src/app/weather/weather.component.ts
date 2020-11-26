import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherCards: Array<Weather>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(`${environment.httpUrl}/weatherforecast`)
                  .subscribe((response: Array<Weather>) =>{
                    this.weatherCards = response;
                  });
  }

}
