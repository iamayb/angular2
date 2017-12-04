"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.add = false;
        this.newmessage = false;
        this.backToItems = false;
        this.backToMessages = false;
        this.headerTitle = 'Login';
    }
    AppComponent.prototype.changeHeader = function (headerTitle, add, backToItems, newmessage, backToMessages) {
        this.headerTitle = headerTitle;
        this.add = add;
        this.backToItems = backToItems;
        this.newmessage = newmessage;
        this.backToMessages = backToMessages;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<div class=\"header\">\n\t\t\t<h1 id=\"mainTitle\">{{headerTitle}}</h1>\n\t\t\t<div *ngIf=\"add\"><a class=\"headerButton\" routerLink=\"/add\" routerLinkActive=\"active\" (click)=\"changeHeader('Add Item', false, true, false, false);\">+ Add</a></div>\n\t\t\t<div *ngIf=\"backToItems\"><a class=\"headerBackButton\" routerLink=\"/items\" routerLinkActive=\"active\" (click)=\"changeHeader('Items', true, false, false, false);\">Back</a></div>\n\t\t\t<div *ngIf=\"newmessage\"><a class=\"headerButton\" routerLink=\"/newmessage\" routerLinkActive=\"active\" (click)=\"changeHeader('Write Message', false, false, false, true);\">Write</a></div>\n\t\t\t<div *ngIf=\"backToMessages\"><a class=\"headerBackButton\" routerLink=\"/messages\" routerLinkActive=\"active\" (click)=\"changeHeader('Messages', false, false, true, false);\">Back</a></div>\n\t\t</div>\n\t\t<div class=\"navBar\">\n\t\t\t<ul id=\"navBarList\">\n\t\t\t\t<li id=\"navBarHome\"><a routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"changeHeader('Login', false, false, false, false);\">Home</a></li>\n\t\t\t\t<li id=\"navBarItems\"><a routerLink=\"/items\" routerLinkActive=\"active\" (click)=\"changeHeader('Items', true, false, false, false);\">Items</a></li>\n\t\t\t\t<li id=\"navBarSearch\"><a routerLink=\"/search\" routerLinkActive=\"active\" (click)=\"changeHeader('Search', false, false, false, false);\">Search</a></li>\n\t\t\t\t<li id=\"navBarMesages\"><a routerLink=\"/messages\" routerLinkActive=\"active\" (click)=\"changeHeader('Messages', false, false, true, false);\">Messages</a></li>\n\t\t\t\t<li id=\"navBarContracts\"><a routerLink=\"/contracts\" routerLinkActive=\"active\" (click)=\"changeHeader('Contracts', false, false, false, false);\">Contracts</a></li>\n\t\t\t\t<li id=\"navBarSettings\"><a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"changeHeader('Settings', false, false, false, false);\">Settings</a></li>\n\t\t\t\t<li id=\"navBarAccount\"><a routerLink=\"/account\" routerLinkActive=\"active\" (click)=\"changeHeader('Account', false, false, false, false);\">Account</a></li>\n\t\t\t\t<li id=\"navBarAbout\"><a routerLink=\"/about\" routerLinkActive=\"active\" (click)=\"changeHeader('About', false, false, false, false);\">About</a></li>\n\t\t\t\t<li id=\"navBarLogout\"><a routerLink=\"/logout\" routerLinkActive=\"active\" (click)=\"changeHeader('Logout', false, false, false, false);\">Logout</a></li>\n\t\t\t</ul> \n\t\t</div>\n\t\t<div class=\"content\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
