import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
    public id:any;
    public name: any;
    public address: any;
    public city: any;
    public state: any;
    public zip: any;
    public country: any;
    public shipped: boolean = false;

    constructor(public cart: Cart){
    
    }

    clear(){
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}