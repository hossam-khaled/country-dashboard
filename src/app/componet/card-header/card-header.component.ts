import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent implements OnInit {
  titles = ["Language","Continent", "Currency","capital"];
  defaultValue = [ "-", "-", "-", "-"];
  data:any[] = [];
  constructor( private countryServ: CountryService ) { 
    this.creatCart(this.defaultValue);
  }

  ngOnInit(): void {
    this.countryServ.country$.pipe(map(data=>
      ({
        language: data.language,
        region: data.region,
        currency: `${data.symbol} ${data.currency} `,
        capital: data.capital,
      })
    )).subscribe(data => {
      let arrData = Object.values(data);
      this.creatCart(arrData);
    })
  }

  creatCart(description:string[]){
    this.data = [];
    this.data = this.titles.map((title, i) =>({
      title:title,
      description: description[i]
    }))
  }
}
