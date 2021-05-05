import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './componet/input/input.component';
import { CardHeaderComponent } from './componet/card-header/card-header.component';
import { CardMainComponent } from './componet/card-main/card-main.component';
import { MapComponent } from './componet/map/map.component';
import { FooterComponent } from './componet/footer/footer.component';
import { ItemComponent } from './componet/item/item.component';
import { ListComponent } from './componet/list/list.component';

// http
import { HttpClientModule } from '@angular/common/http';

// form
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CardHeaderComponent,
    CardMainComponent,
    MapComponent,
    FooterComponent,
    ItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
