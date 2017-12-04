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
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n\t<div class=\"component\">\n\t<h1>Login</h1>\n\t<form>\n\t\t<div class=\"form-group\">\n\t\t<label class=\"log-col-1\">Server: </label><input class=\"log-col-2\" type=\"text\" name=\"server\" placeholder=\"http://localhost:8081\"></div>\n\t\t<div class=\"form-group\">\n\t\t<label class=\"log-col-1\">Login: </label><input class=\"log-col-2\" type=\"text\" name=\"login\"></div>\n\t\t<div class=\"form-group\">\n\t\t<label class=\"log-col-1\">Password: </label><input class=\"log-col-2\" type=\"text\" name=\"password\"></div>\n\t\t<div class=\"form-group log-lin-4\">\n\t\t<button class=\"btn btn-default\" type=\"submit\">Submit</button>\n\t\t<button class=\"btn btn-info\">Subscribe</button></div>\n\t</form>\n\t</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
