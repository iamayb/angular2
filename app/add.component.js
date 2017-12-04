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
var AddComponent = (function () {
    function AddComponent() {
    }
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add',
            template: "\n\t<div class=\"component\">\n\t\t<h2 [hidden]=\"\">Add a new item</h2>\n\n\t\t<form class=\"form-horizontal\" ng-submit=\"submit()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"title\" class=\"col-sm-2 control-label\">Title</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t  <input type=\"hidden\" id=\"id\" ng-model=\"form.id\">\n\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"\" ng-model=\"form.title\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"description\" class=\"col-sm-2 control-label\">Description</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"\" ng-model=\"form.description\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\t\t\t\t  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t\t\t\t  <button class=\"btn btn-warning\" onclick=\"window.history.back()\">Cancel</button>\n\t\t\t\t  <!--<button class=\"btn btn-danger\" ng-click=\"delete()\" ng-show=\"{{action === 'edit'}}\">Delete</button>-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t</div>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map
