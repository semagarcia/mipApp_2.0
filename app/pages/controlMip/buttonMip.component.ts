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
        this._service.move(this.actionCode, this.speed);
    }
}