import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {
  titles = ["Country", "Population", "Flag"];
  defaultValue = ["-", "-"];
  isImg: boolean[] = [false, false, true];
  data: any[] = [];

  constructor(private countryServ: CountryService) {
    this.creatCard(this.defaultValue);
  }

  ngOnInit(): void {
    this.countryServ.country$.pipe(map(data => ({
      name: data.name,
      population: data.population,
      flag: data.flag
    })
    )).subscribe(data => {
      let arrData = Object.values(data);  
      this.creatCard(arrData);
    })
  }


  creatCard(arr: string[], isImg: boolean[] = this.isImg) {
    this.data = [];
    this.data = this.titles.map((x, i) => ({
      title: x,
      description: arr[i],
      isImg: isImg[i]
    }))
  }
}
