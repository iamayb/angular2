import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from'@angular/router';

import { LoginComponent} from './login.component';
import { ItemsComponent } from './items.component';
import { AddComponent } from './add.component';
import { SearchComponent} from './search.component';
import { MessagesComponent} from './messages.component';
import { NewMessageComponent} from './newmessage.component';
import { SettingsComponent} from './settings.component';
import { AccountComponent} from './account.component';

const appRoutes: Routes = [ 
	
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'items',
		component: ItemsComponent
	},
        {
		path: 'add',
		component: AddComponent
	},
	{
		path: 'search',
		component: SearchComponent
	},
	{
		path: 'messages',
		component: MessagesComponent
	},
        {
		path: 'newmessage',
		component: NewMessageComponent
	},
	{
		path: 'settings',
		component: SettingsComponent
	},
	{
		path: 'account',
		component: AccountComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
