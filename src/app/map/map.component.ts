import { Component, inject, ElementRef  } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './map.component.html',
})

export class MapComponent {
  name: any;
  capital: string;
  region: string;
  incomeLevel: string;
  longitude: string;
  latitude: string ;
  data: any= [];
  dataPath: any= [];
  currCountryCode: string = '';
  private httpClient = inject(HttpClient);

  constructor(private elementRef: ElementRef) {
    this.name = '';
    this.capital = '';
    this.region = '';
    this.incomeLevel = '';
    this.longitude = '';
    this.latitude = '';}}
