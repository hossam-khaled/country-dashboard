import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listCountries: any[] = [];

  constructor(private countryServ: CountryService) { }

  ngOnInit(): void {
    this.countryServ.country$.pipe(map(data => data.borders))
    .subscribe(data => this.listCountries =data );
  }

}
