import {Component, input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {SizePipe} from '@core/pipes/size-pipe-pipe';
import {GenderPipe} from '@core/pipes/gender-pipe';
import {Animal} from '@model/model/animal';

@Component({
  selector: 'app-animal-data',
  imports: [
    DatePipe,
    SizePipe,
    GenderPipe
  ],
  templateUrl: './animal-data.html',
  styleUrl: './animal-data.scss'
})
export class AnimalData {
  animal = input.required<Animal>();

}
