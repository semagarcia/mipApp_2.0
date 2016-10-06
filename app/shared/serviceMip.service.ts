import { Injectable } from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';

import { PermissionsService } from './permissionsMip.service';

const MIP_UUID:string='1C:05:43:5C:E3:54';

@Injectable()
export class ServiceMip {

    private _connection = null;
    private _hasPermisions = false;

    constructor (private _servicePerm:PermissionsService ){}


    private _connect(){
        
        let self = this;

        self._connection = new Promise ((resolve, reject) => {
           bluetooth.connect({
               UUID: MIP_UUID,
               onConnected: (mip) => {
                   console.log(`Value of BLE obj: ${JSON.stringify(mip)}`)
                   resolve();
               },
               onDisconnected: function () {
                   self._connection = null;
               }
           });
        });
    }

    private _doConnection(){

        if (this._hasPermisions){
            this._connect();
        } else {
            this._servicePerm.getPermissions()
            .then(()=>{
                this._hasPermisions=true;
                this._connect();
            })
            .catch(error=>{
                this._hasPermisions=false;
                throw new Error(error);
            });
        }
    }

    move (codeMove:number, codeSpeed:number){

        if (!this._connection){
            this._doConnection();
        }
    }

}