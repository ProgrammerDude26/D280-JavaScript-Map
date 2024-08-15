import { Component, inject, ElementRef  } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CommonModule } from "@angular/common";

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
    this.latitude = '';
  }

private ngAfterViewInit() {
    const svgElement = this.elementRef.nativeElement.querySelector('svg');
    svgElement.querySelectorAll('path').forEach((path: SVGPathElement) => {
      path.addEventListener('click', () => {
        this.handleClick(path.id);
   });
 });
}

private displayInfo(infoFromApi: any){
  this.name = infoFromApi[1][0].name;
  this.capital = infoFromApi[1][0].capitalCity;
  this.region = infoFromApi[1][0].region.value;
  this.incomeLevel = infoFromApi[1][0].incomeLevel.value;
  this.longitude = infoFromApi[1][0].longitude;
  this.longitude = infoFromApi[1][0].latitude;
}

  private handleClick(id: string) {

  }
}
