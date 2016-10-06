import { Injectable } from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';

import { PermissionsService } from './permissionsMip.service';

@Injectable()
export class ServiceMip {

    private _connection = null;

    constructor (private _servicePerm:PermissionsService ){}


    public connect(uuid:string):Promise<any>{

        return new Promise ((resolve, reject) => {
           bluetooth.connect({
               UUID: uuid,
               onConnected: (mip) => {
                   console.log(`Value of BLE obj: ${JSON.stringify(mip)}`)
                   resolve();
               },
               onDisconnected: function () {
                  console.log('Disconected');
               }
           });
        });
    }

    move (codeMove:number, codeSpeed:number){

    }

}