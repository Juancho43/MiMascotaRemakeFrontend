import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navbar} from '@app/components/shared/navbar/navbar';
import {Footer} from '@app/components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'MiMascota';
}
