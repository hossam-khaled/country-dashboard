import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  txtInput:FormControl;

  constructor( private countryServ: CountryService ) {
    this.txtInput = new FormControl('', Validators.minLength(3));
  }

  search() {
    if (this.txtInput.invalid || this.txtInput.value === "" ) return false;
      
    let name = this.txtInput.value;

    this.countryServ.getCountry(name).subscribe(
      data=> this.countryServ.setCountry(data),
      err => console.log(err)
    );
    
    this.txtInput.reset();
  }

}
