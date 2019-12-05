import { SimpleChanges,Component, OnInit, Input, Inject, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import {DOCUMENT} from '@angular/common'
const log= console.log

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild("canvas", {static:false}) canvas: ElementRef
  @Input() data: any
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    //this.renderBarChart()
  }

ngOnChanges(changes: SimpleChanges) {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add 'implements OnChanges' to the class.
  if(changes) {
    if(changes.data.firstChange === false) {
      this.renderBarChart()
    }
  }
  log(changes)
}

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.renderBarChart()    
  }

  renderBarChart() {
    var can //= this.document.getElementById("bar");
    can = this.canvas.nativeElement
    var wid = can.width;
    var hei = can.height;
    var context = can.getContext("2d");
    context.fillStyle = "#eeeeee";
    context.strokeStyle = "#999999";
    context.fillRect(0, 0, wid, hei);

    var CHART_PADDING = 20;
    context.font = "12pt Verdana, sans-serif";
    context.fillStyle = "#999999";
    context.moveTo(CHART_PADDING, CHART_PADDING);
    context.lineTo(CHART_PADDING, hei - CHART_PADDING);
    context.lineTo(wid - CHART_PADDING, hei - CHART_PADDING);
    var stepSize = (hei - CHART_PADDING * 2) / 10;
    for (var i = 0; i < 10; i++) {
        context.moveTo(CHART_PADDING, CHART_PADDING + i * stepSize);
        context.lineTo(CHART_PADDING * 1.3, CHART_PADDING + i *
            stepSize);
        context.fillText(10 - i, CHART_PADDING * 1.5, CHART_PADDING + i *
            stepSize + 6);
    }
    context.stroke();
    var elementWidth = (wid - CHART_PADDING * 2) / this.data.length;
    context.textAlign = "center";
    for (i = 0; i < this.data.length; i++) {
        context.fillStyle = this.data[i].style;
        context.fillRect(CHART_PADDING + elementWidth * i, hei -
            CHART_PADDING - this.data[i].value * stepSize, elementWidth, this.data[i].value * stepSize);
        context.fillStyle = "rgba(255, 255, 225, 0.8)";
        context.fillText(this.data[i].label, CHART_PADDING +
            elementWidth * (i + .5), hei - CHART_PADDING * 1.5);
    }
  }

}
