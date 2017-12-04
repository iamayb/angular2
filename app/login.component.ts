import { Component } from '@angular/core';
import { User } from './user';
@Component({
selector: 'login',
template: `
	<div class="component">
	<h1>Login</h1>
	<form>
		<div class="form-group">
		<label class="log-col-1">Server: </label><input class="log-col-2" type="text" name="server" placeholder="http://localhost:8081"></div>
		<div class="form-group">
		<label class="log-col-1">Login: </label><input class="log-col-2" type="text" name="login"></div>
		<div class="form-group">
		<label class="log-col-1">Password: </label><input class="log-col-2" type="text" name="password"></div>
		<div class="form-group log-lin-4">
		<button class="btn btn-default" type="submit">Submit</button>
		<button class="btn btn-info">Subscribe</button></div>
	</form>
	</div>
`

})

export class LoginComponent {
	
}
