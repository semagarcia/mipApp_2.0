import { Component, Input } from '@angular/core';

@Component({
    selector: 'mip-button',
    templateUrl: 'pages/controlMip/buttonMip.html'
})
export class ButtonMipComponent {

    @Input()
    urlImage:string;

    @Input()
    actionCode:number;

    @Input()
    speed:number;

    doAction() {
        console.log(`MIP robot do action ${this.actionCode} at speed ${this.speed}`);
    }
}