// src/app/lib/circle-loader/circle-loader.component.ts
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-loader',
  templateUrl: './circle-loader.component.html',
  styleUrls: ['./circle-loader.component.css']
})
export class CircleLoaderComponent implements OnInit {

  @Input() color: string = '#7f58af'
  @Input() size: number = 64

  getStyle(): object {
      return { 
        'background-color': this.color, 
        width: `${this.size}px`, 
        height: `${this.size}px` 
      }
  }

  constructor() { }

  ngOnInit() {
  }

}
