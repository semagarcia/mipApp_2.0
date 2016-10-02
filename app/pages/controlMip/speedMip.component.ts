import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mip-slider',
    templateUrl: 'pages/controlMip/speedMip.html'
})
export class SpeedMipComponent {

    @Output()
    slideChange = new EventEmitter();

    updateValue(value:number){
        console.log(`The value of the slider is: ${value}`);
        this.slideChange.emit(value);
    }
}