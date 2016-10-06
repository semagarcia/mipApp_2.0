import { Injectable } from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';
import { Subscription } from 'rxjs/Subscription';

const MIP_UUID:string='1C:05:43:5C:E3:54';

@Injectable()
export class ServiceMip {

   private _connection = null;
    private _hasPermisions = false;

    private _getPermisions () {
        
        bluetooth.hasCoarseLocationPermission()
        .then(granted => {
            
            if (!granted){
                bluetooth.requestCoarseLocationPermission()
                .then( ()=> {
                    this._hasPermisions = true;
                    this._connect();
                })
                .catch( error => {
                    console.log(`Error getting the permisions: ${JSON.stringify(error)}`);
                });
            } else {
                this._hasPermisions= true;
                this._connect();
            }
        })
        .catch(error => {
            console.error(`Error checking the permisions: ${JSON.stringify(error)}`);
        });
    }


    private _connect(){
        console.log ('NNN Se abre la conexion');
        
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
            this._getPermisions();
        }
    }

    move (codeMove:number, codeSpeed:number){

        if (!this._connection){
            this._doConnection();
        }
    }

}