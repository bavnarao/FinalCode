/// <reference path="./jquery.d.ts"/>
import { Component } from '@angular/core';


@Component({
  selector: 'app',
  templateUrl: "./app/app.component.html",
})
export class AppComponent  { name = 'Angular';
hide(){
   $('#overlay').fadeOut('slow');
   if($('#wrapper').hasClass("toggled") !== true) {
      $('#wrapper').addClass('toggled');
    } else {
      $('#wrapper').removeClass('toggled');
    }
}
 }
