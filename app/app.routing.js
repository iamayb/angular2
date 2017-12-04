"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var items_component_1 = require('./items.component');
var add_component_1 = require('./add.component');
var search_component_1 = require('./search.component');
var messages_component_1 = require('./messages.component');
var newmessage_component_1 = require('./newmessage.component');
var settings_component_1 = require('./settings.component');
var account_component_1 = require('./account.component');
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'items',
        component: items_component_1.ItemsComponent
    },
    {
        path: 'add',
        component: add_component_1.AddComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'messages',
        component: messages_component_1.MessagesComponent
    },
    {
        path: 'newmessage',
        component: newmessage_component_1.NewMessageComponent
    },
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent
    },
    {
        path: 'account',
        component: account_component_1.AccountComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
