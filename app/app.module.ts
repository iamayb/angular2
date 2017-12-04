import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing }  from './app.routing';

import { AppComponent }   from './app.component';
import { LoginComponent} from './login.component';
import { ItemsComponent } from './items.component';
import { AddComponent } from './add.component';
import { SearchComponent } from './search.component';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './newmessage.component';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, LoginComponent, ItemsComponent, AddComponent, SearchComponent, MessagesComponent, NewMessageComponent, SettingsComponent, AccountComponent],
  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
