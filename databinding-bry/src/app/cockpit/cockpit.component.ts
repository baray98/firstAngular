import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
   newServerName  = '';
   newServerContent = '';

   @Output("bluePrintCreated") bluePrintCreated = new EventEmitter<{name:string,content:string}>(); 
   @Output("serverCreated") serverCreated = new EventEmitter<{name:string,content:string}>();
   
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(
      {name:this.newServerName,
      content:this.newServerContent});
  }

  onAddBlueprint() {
     this.bluePrintCreated.emit(
       {name:this.newServerName,
      content:this.newServerContent});
  }
}
