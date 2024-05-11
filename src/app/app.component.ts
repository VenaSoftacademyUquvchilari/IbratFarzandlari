import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from './main/main.component';
import { AfzaliklarComponent } from './afzaliklar/afzaliklar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, MainComponent, AfzaliklarComponent]
})
export class AppComponent {
  title = 'vazifa';
}
