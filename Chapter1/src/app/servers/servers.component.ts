import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  createServerStatus = 'No server was created';
  serverName = 'New Server';
  serverCreated = false;
  servers = ['test server','production server'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.createServerStatus = "New Server was created " + this.serverName;
  }
  onUpdateServerName (event:Event){
     this.serverName = (<HTMLInputElement>event.target).value;
  }
}
