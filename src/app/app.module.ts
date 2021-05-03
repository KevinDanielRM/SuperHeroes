import { HeroesModule } from './heroes/heroes.module';
import { VillanosModule } from './villanos/villanos.module';
import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    VillanosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

