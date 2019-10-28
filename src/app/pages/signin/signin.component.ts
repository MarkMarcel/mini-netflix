import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseUi from 'firebaseui';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  successAuthListener = (authResult, redirectUrl) : boolean => {
    this.dbService.auth.next(true);
    this.ngZone.run( () =>
      this.router.navigate(['']))
    return true;
  }

   private uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: this.successAuthListener,
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  constructor(
    private dbService:DbService,
    private router:Router,
    private ngZone:NgZone) 
    { }

  ngOnInit() {
    var ui = new firebaseUi.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container',this.uiConfig);
  }

}
