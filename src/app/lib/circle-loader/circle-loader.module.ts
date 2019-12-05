import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleLoaderComponent } from './circle-loader.component';



@NgModule({
  declarations: [CircleLoaderComponent],
  imports: [
    CommonModule
  ],
    exports: [CircleLoaderComponent]
})
export class CircleLoaderModule { }
