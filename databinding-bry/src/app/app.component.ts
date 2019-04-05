import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'databinding-bry';
  serverElements = [{type:'server',name :'the server',content:'the content'}];

  onAddServerAdded( ServerData: { name:string, content :string}) {
    this.serverElements.push({
      type: 'server',
      name: ServerData.name,
      content: ServerData.content
    });
  }

  onAddBlueprintAdded(ServerData: { name:string, content :string}) {
     this.serverElements.push({
      type: 'blueprint',
      name: ServerData.name,
      content: ServerData.content
    });
  }
}
