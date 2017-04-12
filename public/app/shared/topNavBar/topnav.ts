/// <reference path="./../../../jquery.d.ts"/>
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'topnav',
    templateUrl: "./topnav.html"
})

export class TopNavComponent {

ngOnInit() {
 $('#wrapper').addClass('toggled');
	$('#menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
      $('#overlay').fadeToggle( "slow", "swing" );
    });

    $('#overlay').click(function() {
      $('#overlay').fadeOut('slow');
      $('#wrapper').addClass('toggled');
    });
}


}


