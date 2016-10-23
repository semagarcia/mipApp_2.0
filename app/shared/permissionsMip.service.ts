import {Injectable} from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';

@Injectable()
export class PermissionsService {

    public getPermissions():Promise<any>{
        return new Promise((resolve, reject)=>{
            resolve('The app has permissions to use the bluetooth');
        });
    }
}