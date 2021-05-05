import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  temp:any;
  @ViewChild('idsvg', {static:true}) idsvg:ElementRef;

  constructor(private countryServ: CountryService) {}

  ngOnInit(): void {
    this.countryServ.country$.pipe(map(data=> data['alpha2Code'] )).subscribe(id => this.changeColor(id) );
  }

  changeColor(idCountry:string) {
    // 
    if (this.temp != null ) this.temp.style.fill = 'rgb(200 200 200)';
    let svgDoc =  this.idsvg.nativeElement.contentDocument;
    let country = svgDoc.querySelector('#' + idCountry);
    // console.log( country );
    country.style.fill = '#e63955';
    this.temp = country;
  }

}
