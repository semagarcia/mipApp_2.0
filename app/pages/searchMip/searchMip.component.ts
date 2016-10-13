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
        .then(()=>{console.log('[MIP-BLE] Permissions granted')})
        .catch((error)=>{
            console.log('[MIP-BLE] Permissions not granted');
            throw new Error(error);
        });
    }

    public search(activityIndicator){
        console.log('[MIP-BLE] Searching devices...');
        this._router.navigate(['/control']);
    }

    public deviceSelected(args){
        console.log ('[MIP-BLE] Device selected: ' + this.devices[args.index].name);
    }
}