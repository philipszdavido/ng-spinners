import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CircleLoaderModule } from './lib/circle-loader/circle-loader.module'
import { SpinnerLoaderModule } from './lib/spinner-loader/spinner-loader.module'
import { BarChartModule } from "./components/bar-chart/bar-chart.module"

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SpinnerLoaderModule,
    CircleLoaderModule,
    BarChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
$ ng g m lib/circle-loader
CREATE src/app/lib/circle-loader/circle-loader.module.ts (198 bytes)

*/