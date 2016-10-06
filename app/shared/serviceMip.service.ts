import { Injectable } from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';

import { PermissionsService } from './permissionsMip.service';

@Injectable()
export class ServiceMip {
    private _device:string;
    private _service:string = 'ffe5';
    private _characteristic:string = 'ffe9';

    constructor (private _servicePerm:PermissionsService ){}


    public connect(uuid:string):Promise<any>{

        return new Promise ((resolve, reject) => {
           bluetooth.connect({
               UUID: uuid,
               onConnected: (mip) => {
                   console.log(`Value of BLE obj: ${JSON.stringify(mip)}`)
                   this._device = uuid;
                   resolve();
               },
               onDisconnected: function () {
                  console.log('Disconected');
               }
           });
        });
    }

    public disconnect():Promise<any>{
        let result:Promise<any>=null;

        if (this._device){
           result = bluetooth.disconnect({ UUID: this._device}); 
        } else {
            console.log('There is not device connected');
        }

        return result;
    }

    move (codeMove:number, codeSpeed:number){
        let bluetoothMessage:any;
        let move:string= '0x0' + new Number(codeMove).toString(16);
        let speed:string=(codeSpeed)?'0x0' + new Number(codeSpeed).toString(16):'';
        let distance:string='0x0' + new Number(3000).toString(16);

        let valueWrite:string = move + ',' + speed + ',' + distance;

        if (this._device){
            bluetoothMessage = {
                peripheralUUID: this._device,
                serviceUUID: this._service,
                characteristicUUID: this._characteristic,
                value: valueWrite
            }

            bluetooth.write(bluetoothMessage);
        } else {
            console.log('There is not device connected');
        }
    }

}