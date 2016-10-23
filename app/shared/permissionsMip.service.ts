import {Injectable} from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';

@Injectable()
export class PermissionsService {

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
}