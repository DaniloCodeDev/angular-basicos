import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.modulo';
//import { HeroeComponent } from './heroes/horoe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorModule } from './contador/contador.modulo';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
    //HeroeComponent,
    //ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
