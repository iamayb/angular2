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
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'messages',
            template: "\n\t<div class=\"component\">\n\t<h2>Inbox. TO BE DONE.</h2>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t<li  class=\"active\"><a href>user1</a></li>\n\t\t\t\t<li ><a href>user2</a></li>\n\t\t\t\t<li ><a href>user3</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"well\">\n\t\t\t\t<p><b>User1:</b> Hey, u have no more carrots ? <span class=\"pull-right\"><em><small>2 hours ago.</small></em></span></p>\n\t\t\t\t<!--<p ng-show=\"message.length > 1\"><b>Me:</b> {{message}}<span class=\"pull-right\"><em><small>now.</small></em></span></p>-->\n\t\t\t\t<div class=\"input-group input-group-lg\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" ng-model=\"message\" placeholder=\"type your message here\">\n\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t<button class=\"btn btn-default\" type=\"button\">Send</button>\n\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map
