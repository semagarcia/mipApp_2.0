import { Component, Input } from '@angular/core';
import { ServiceMip } from '../../shared/serviceMip.service';

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

    constructor(private _service:ServiceMip){}

    doAction() {
        console.log('[MIP-BLE] The user has performed an action!');
    }
}