import { Injectable } from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';

import { PermissionsService } from './permissionsMip.service';

@Injectable()
export class ServiceMip {
    private _device:string;
    private _service:string = 'ffe5';
    private _characteristic:string = 'ffe9';

    constructor (){
        this._device='Mip device';
    }

    public connect(uuid:string):Promise<any>{
        console.log('[MIP-BLE] Connecting to UUID: ' + uuid);
        return new Promise ((resolve, reject) => {
           bluetooth.connect({
               UUID:uuid,
               onConnected: (device)=>{
                   console.log (`Device: ${JSON.stringify(device)}`);
                   this._device=uuid;
                   resolve();
               },
               onDisconnected: () =>{
                   console.log (`Disconected from device: ${this._device}`);
               }
           });
        });
    }

    public disconnect():Promise<any>{
        console.log(`[MIP-BLE] Disconnecting from ${this._device}...`);
        return null;
    }

    move(codeMove:number, codeSpeed:number){
        console.log(`[MIP-BLE] I'm moving me with code ${codeMove} and a value of ${codeSpeed} for speed`);
    }

}