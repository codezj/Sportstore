import { Injectable } from "@angular/core"
import { Product } from "./product.model"
import {Observable, from } from "rxjs";
import { Order } from "./order.model";
import { Cart } from "./cart.model";
import {HttpClient} from "@angular/common/http"
import { map } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

const PROTOCOL = "http"
const PORT = 3500

@Injectable()
export class RestDataSource {
  

    baseUrl: any;
    auth_token: any;

    constructor(private http: HttpClient) {
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`
        this.baseUrl = "/api/"
    }

    getProducts(): Observable<Product[]>{

        return this.http.get<Product[]>(this.baseUrl+"products");

        // return from([this.products])
    }

    saveOrder(order: Order): Observable<Order>{

        return this.http.post<Order>(this.baseUrl+"orders",order)
        // console.log(JSON.stringify(order));
        // return from([order])

    }

    authenticate(user: any, pass: any): Observable<boolean>{
        console.log(user,pass);
        
        return this.http.post<any>(this.baseUrl+"login", {name: user, password: pass})
                .pipe(map(response => {
                    this.auth_token = response.success ? response.token : null;
                    return response.success;
                }));
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + "products",product);
    }
    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,product);
    }
    deleteProduct(id: Number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`);
    }
    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + "orders");
    }
    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl}/orders/${order.id}`,order);
    }
    deleteOrder(id: Number): Observable<Order> {
        return this.http.delete<Order>(`${this.baseUrl}orders/${id}`);
    }



    private getOptions(){
        return {
            headers: new HttpHeaders({
                "Authorizatoin": `Bear<${this.auth_token}`
            })
        }
    }
}