import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countries:Country[]=[];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania']
  public selecterRegion?: Region;
  public initialValue: Region = '';

  constructor( private countriesService: CountriesService ){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.initialValue = this.countriesService.cacheStore.byRegion.region;
    this.searchByRegion(this.initialValue);
  }

  searchByRegion( region: Region ):void {
    this.selecterRegion = region;
    this.isLoading = true;
    this.countriesService.searchRegion( region )
    .subscribe( country => {
      this.countries = country;
      this.isLoading = false;
    })
  }
}
