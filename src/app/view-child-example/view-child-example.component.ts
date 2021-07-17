import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-view-child-example',
  templateUrl: './view-child-example.component.html',
  styleUrls: ['./view-child-example.component.scss']
})
export class ViewChildExampleComponent implements OnInit, AfterViewInit {
// @ViewChild('message')msg:ElementRef;
@ViewChildren('message')msg:QueryList<any>;
@ViewChild('childview')childview:ViewchildChildComponent
  constructor() { }

  ngOnInit(): void {
     
  }
  ngAfterViewInit() {
    console.log(this.msg,'afterView');
    // this.msg.nativeElement.style.color='red'
    this.msg.first.nativeElement.style.color='red'
    this.msg.last.nativeElement.style.color='green'

  }
  inc(){
this.childview.increment();
  }
  dec(){
    this.childview.decrement();
  }

}
