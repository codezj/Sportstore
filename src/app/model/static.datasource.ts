import { Injectable } from "@angular/core"
import { Product } from "./product.model"
import {Observable, from } from "rxjs";
import { Order } from "./order.model";
import { Cart } from "./cart.model";
import {HttpClient} from "@angular/common/http"


const PROTOCOL = "http"
const PORT = 3500

@Injectable()
export class StaticDataSource {
    // private products: Product[] = [
    //     new Product(1, "Product 1", "Category 1", "Product 1 (Catogory 1)",100),
    //     new Product(2, "Product 2", "Category 1", "Product 2 (Catogory 1)",100),
    //     new Product(3, "Product 3", "Category 1", "Product 3 (Catogory 1)",100),
    //     new Product(4, "Product 4", "Category 1", "Product 4 (Catogory 1)",100),
    //     new Product(5, "Product 5", "Category 1", "Product 5 (Catogory 1)",100),
    //     new Product(6, "Product 6", "Category 2", "Product 6 (Catogory 2)",100),
    //     new Product(7, "Product 7", "Category 2", "Product 7 (Catogory 2)",100),
    //     new Product(8, "Product 8", "Category 2", "Product 8 (Catogory 2)",100),
    //     new Product(9, "Product 9", "Category 2", "Product 9 (Catogory 2)",100),
    //     new Product(10, "Product 10", "Category 2", "Product 10 (Catogory 2)",100),
    //     new Product(11, "Product 11", "Category 3", "Product 10 (Catogory 3)",100),
    //     new Product(12, "Product 12", "Category 3", "Product 10 (Catogory 3)",100),
    //     new Product(13, "Product 13", "Category 3", "Product 10 (Catogory 3)",100),
    //     new Product(14, "Product 14", "Category 3", "Product 10 (Catogory 3)",100),
    //     new Product(15, "Product 15", "Category 3", "Product 10 (Catogory 3)",100),
    // ];

    baseUrl: any;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`
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
}