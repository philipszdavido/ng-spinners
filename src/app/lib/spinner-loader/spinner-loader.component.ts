import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.css']
})
export class SpinnerLoaderComponent implements OnInit {
  @Input() color: string = '#7f58af'

  constructor() { }

  ngOnInit() {
  }

}
