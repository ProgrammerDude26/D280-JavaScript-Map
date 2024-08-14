import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientXsrfModule} from "@angular/common/http";
import {MapComponent} from "./map/map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'D280JSProject';
}

