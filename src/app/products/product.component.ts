import {Component, OnInit} from '@angular/core';
import { iProduct } from './product.model';
import {ProductService} from './product.service';


@Component({
    templateUrl: './product.component.html',
    styles: ['thead{color:tomato}','.online{background-color:wheat}'],
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{
    title: String = "***Product Listing***";
    showImage: Boolean = false;
    userInput: String = '';
    imageSize: number = 50;
    serverStatus: String;
    products: iProduct[];

    constructor(private productService: ProductService){
       this.serverStatus = Math.random > 0.5 ? 'Offline' : 'Offline';
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    getColor(){
        return this.serverStatus ==='Online' ? 'green' : 'red';
    }
    onDataReceived(message:string): void{
        this.title = "***Product Listing***" + message;
    }
    ngOnInit(): void{
        this.products = this.productService.getProducts();
        //this.productService.getProducts()
        //.subscribe((data) => this.products = data);
    }
}