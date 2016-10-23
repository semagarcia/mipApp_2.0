import {Injectable} from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';
import { MipEntity } from './mipEntity';

@Injectable()
export class PermissionsService {

    public devices:MipEntity[] = [];

    public getPermissions():Promise<any>{
        return new Promise((resolve, reject)=>{
            bluetooth.hasCoarseLocationPermission()
            .then((granted)=>{
                if (granted){
                    resolve();
                } else {
                    bluetooth.requestCoarseLocationPermission()
                    .then(()=>{ resolve(); })
                    .catch(error => { reject(error); });
                }
            })
            .catch(error=>{ throw new Error(error); });
        });
    }

    public scanDevices():Promise<any>{
        return bluetooth.startScanning({
            serviceUUIDs: ['fff0'],
            seconds: 10,
            onDiscovered: (device)=>{
                let mipDevice:MipEntity = new MipEntity();
                mipDevice.name = device.name;
                mipDevice.UUID = device.UUID;

                this.devices.push(mipDevice);
            }
        });
    }
}