import { Component, OnInit } from '@angular/core';
import { MipEntity } from '../../shared/mipEntity';
import {SetupItemViewArgs} from "nativescript-angular/directives";
import * as bluetooth from 'nativescript-bluetooth';
import { PermissionsService } from '../../shared/permissionsMip.service';
import { ServiceMip } from '../../shared/serviceMip.service';
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector:'mip-search',
    templateUrl: 'pages/searchMip/searchMip.html',
    styleUrls: ['pages/searchMip/searchMip.css']
})
export class SearchMip implements OnInit {
    public devices:Array<MipEntity>;
   
    constructor(private _permService:PermissionsService, private _mipService:ServiceMip, private _router:RouterExtensions){}

    ngOnInit (){
        this.devices = [];
        this._permService.getPermissions()
        .then(()=>{console.log('Permissions granted')})
        .catch((error)=>{
            console.log('Permissions not granted');
            throw new Error(error);
        });
    }

    public search(activityIndicator){
        let self = this;
        self.devices=[];
        activityIndicator.busy=true;
        bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 10,
            onDiscovered: (device) => {
                let deviceFound:MipEntity = new MipEntity();
                deviceFound.name = device.name;
                deviceFound.UUID = device.UUID;
                self.devices.push(deviceFound);
            }
        })
        .then(()=>{
            console.log("Value of searching: " + activityIndicator.busy);
            if (activityIndicator.busy) {
                activityIndicator.busy= false;
                console.log ("Removing searching title: " + activityIndicator.busy);
            }

            console.log('Scanning compleate');
        })
        .catch(error=>{ 
             if (activityIndicator.busy) {
                activityIndicator.busy= false;
            }
            throw new Error(error); 
        });
    }

    public deviceSelected(args){
        console.log ('Device selected: ' + this.devices[args.index].name);
        this._mipService.connect(this.devices[args.index].UUID)
        .then(
            ()=>{ this._router.navigate(['/control'],{
                transition:{
                    name:'flip',
                    duration:2000,
                    curve:'linear'
                }
            })}
        )
        .catch(error=>{ throw new Error (error); });
    }
}