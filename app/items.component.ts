import { Component } from '@angular/core';
import { Clique } from './clique';
import { AddComponent } from './add.component';

@Component({
  selector: 'items',
  template: 
	`
		<p id="itemsTitle">{{itemsTitle}}</p>
	`
  
})

export class ItemsComponent {
	itemsTitle = 'My Items';
	cl : Clique;
}
