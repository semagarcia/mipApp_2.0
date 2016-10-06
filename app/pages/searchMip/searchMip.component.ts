import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MipEntity } from '../../shared/mipEntity';
import {SetupItemViewArgs} from "nativescript-angular/directives";
import * as bluetooth from 'nativescript-bluetooth';
import { PermissionsService } from '../../shared/permissionsMip.service';


@Component({
    selector:'mip-search',
    templateUrl: 'pages/searchMip/searchMip.html',
    styleUrls: ['pages/searchMip/searchMip.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchMip implements OnInit {
    public devices:Array<MipEntity>;

    constructor(private permService:PermissionsService){}

    ngOnInit (){
        this.devices = [];
        this.permService.getPermissions()
        .then(()=>{console.log('Permissions granted')})
        .catch((error)=>{
            console.log('Permissions not granted');
            throw new Error(error);
        });
    }

    public deviceSelected(args){
        console.log('###' + JSON.stringify(this.devices[args.index]));
        console.log ('Device selected: ' + this.devices[args.index].name);
    }
}