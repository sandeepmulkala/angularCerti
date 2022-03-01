import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../services/weather.service';
import { StorageService } from '../services/storage.service';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  zipCodes: Array<string>;

  constructor(private storageService: StorageService, private appConstants: AppConstants, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.displayWeather();
  }

  displayWeather() {
    this.zipCodes = this.storageService.getItem(this.appConstants.ZIP_CODES);
  }

  getWeatherForZipCode = (newZipCode: string): void => {
    this.zipCodes = [...this.storageService.getItem(this.appConstants.ZIP_CODES)];
  }
}
