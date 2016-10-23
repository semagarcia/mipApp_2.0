import {Component, OnInit} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ServiceMip } from "../../shared/serviceMip.service";

@Component({
    selector: "mip-control",
    templateUrl: "pages/controlMip/controlMip.html",
    styleUrls: ["pages/searchMip/searchMip.css"]
})
export class ControlMipComponent implements OnInit {
    
    public forwardImage:string;
    public forwardAction:number;

    public leftImage:string;
    public leftAction:number;

    public StopImage:string;
    public StopAction:number;

    public rightImage:string;
    public rightAction:number;

    public backImage:string;
    public backAction:number;

    public speed:number;

    constructor (private _router:RouterExtensions, private _mipService:ServiceMip){}

    ngOnInit(){
        this.forwardAction=113;
        this.forwardImage='~/resources/up.png';

        this.leftAction=115;
        this.leftImage='~/resources/left.png';

        this.StopAction=119;
        this.StopImage='~/resources/denied.png';

        this.rightAction=116;
        this.rightImage='~/resources/right.png';

        this.backAction=114;
        this.backImage='~/resources/down.png';
    }

    updateSpeed(event){
        this.speed = event;
    }

    close(){
        console.log("[MIP-BLE] Closing connection");
        let promise = this._mipService.disconnect();

        if (promise){
            promise.then(()=>{ console.log('Se cierra la conexion'); })
            .catch(error=>{ throw new Error(error); });
        }

        this._router.navigate(['/search'], {
            transition: {
                name:'fade',
                duration:2000,
                curve:'linear'
            }
        }); 
    }
}
