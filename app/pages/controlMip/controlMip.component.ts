import {Component, OnInit} from "@angular/core";

@Component({
    selector: "mip-control",
    templateUrl: "pages/controlMip/controlMip.html",
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
}
