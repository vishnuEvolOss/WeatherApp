import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatherData?:WeatherData;
  cityName:string='Wellington'

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this,this.getWeatherData(this.cityName);
    this.cityName='';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response)=>
      this.weatherData=response
    })
  }
}