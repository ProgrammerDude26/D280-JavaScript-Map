import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientXsrfModule} from "@angular/common/http"; //imported what IntelliJIDEA recommended but its greyed out?
import {MapComponent} from "./map/map.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'D280JSProject';
}

