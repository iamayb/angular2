import { Component } from '@angular/core';
import { User } from './user';
import { Clique } from './clique';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
		<div class="header">
			<h1 id="mainTitle">{{headerTitle}}</h1>
			<div *ngIf="add"><a class="headerButton" routerLink="/add" routerLinkActive="active" (click)="changeHeader('Add Item', false, true, false, false);">+ Add</a></div>
			<div *ngIf="backToItems"><a class="headerBackButton" routerLink="/items" routerLinkActive="active" (click)="changeHeader('Items', true, false, false, false);">Back</a></div>
			<div *ngIf="newmessage"><a class="headerButton" routerLink="/newmessage" routerLinkActive="active" (click)="changeHeader('Write Message', false, false, false, true);">Write</a></div>
			<div *ngIf="backToMessages"><a class="headerBackButton" routerLink="/messages" routerLinkActive="active" (click)="changeHeader('Messages', false, false, true, false);">Back</a></div>
		</div>
		<div class="navBar">
			<ul id="navBarList">
				<li id="navBarHome"><a routerLink="/login" routerLinkActive="active" (click)="changeHeader('Login', false, false, false, false);">Home</a></li>
				<li id="navBarItems"><a routerLink="/items" routerLinkActive="active" (click)="changeHeader('Items', true, false, false, false);">Items</a></li>
				<li id="navBarSearch"><a routerLink="/search" routerLinkActive="active" (click)="changeHeader('Search', false, false, false, false);">Search</a></li>
				<li id="navBarMesages"><a routerLink="/messages" routerLinkActive="active" (click)="changeHeader('Messages', false, false, true, false);">Messages</a></li>
				<li id="navBarContracts"><a routerLink="/contracts" routerLinkActive="active" (click)="changeHeader('Contracts', false, false, false, false);">Contracts</a></li>
				<li id="navBarSettings"><a routerLink="/settings" routerLinkActive="active" (click)="changeHeader('Settings', false, false, false, false);">Settings</a></li>
				<li id="navBarAccount"><a routerLink="/account" routerLinkActive="active" (click)="changeHeader('Account', false, false, false, false);">Account</a></li>
				<li id="navBarAbout"><a routerLink="/about" routerLinkActive="active" (click)="changeHeader('About', false, false, false, false);">About</a></li>
				<li id="navBarLogout"><a routerLink="/logout" routerLinkActive="active" (click)="changeHeader('Logout', false, false, false, false);">Logout</a></li>
			</ul> 
		</div>
		<div class="content">
			<router-outlet></router-outlet>
		</div>
	`
  
})

export class AppComponent {

        add:boolean = false;
        newmessage:boolean = false;
	backToItems:boolean = false;
	backToMessages:boolean = false;

	headerTitle : string = 'Login';	

	changeHeader(headerTitle : string, add: boolean, backToItems: boolean, newmessage : boolean, backToMessages : boolean) {
		this.headerTitle = headerTitle;
		this.add = add;
		this.backToItems = backToItems;
		this.newmessage = newmessage;
		this.backToMessages = backToMessages;
	}
}
