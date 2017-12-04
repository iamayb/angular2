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
var NewMessageComponent = (function () {
    function NewMessageComponent() {
    }
    NewMessageComponent = __decorate([
        core_1.Component({
            selector: 'newmessage',
            template: "<div class=\"component\">\n\n<h2>Write a new message. TO BE DONE.</h2>\n\n<form class=\"form-group\">\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon\">@</span>\n        <input type=\"text\" class=\"form-control\" placeholder=\"type a username\" ng-model=\"user\" aria-describedby=\"basic-addon\">\n    </div>\n    <div class=\"form-group\">\n        <br>\n        <textarea class=\"form-control\" rows=\"3\">Hi {{user}}, my name is Exemple, do you want to trade with me ?</textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    <button type=\"submit\" class=\"btn btn-warning\" onclick=\"window.history.back();\">Cancel</button>\n</form>\n<div>",
        }), 
        __metadata('design:paramtypes', [])
    ], NewMessageComponent);
    return NewMessageComponent;
}());
exports.NewMessageComponent = NewMessageComponent;
//# sourceMappingURL=newmessage.component.js.map
