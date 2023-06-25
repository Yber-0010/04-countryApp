import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  public modali?:number|boolean;

  @Input()
  public countries: Country[] = []
  modal(i:number):void{
    this.modali = i;
  }
  cerrarModal():void{
    this.modali = false;
  }
}
