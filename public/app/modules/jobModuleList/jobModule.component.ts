/// <reference path="./../../../jquery.d.ts"/>
import {Component} from '@angular/core';
@Component({
    selector:'jobModule-list',
	 moduleId: module.id,
    templateUrl: "./jobModule.component.html"
})
export class JobModuleComponent{
    ngOnInit() {
		$('.slb-dashboard .info').css({"margin-top": "17px","margin-left": "27px"});
    }
}