import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {iProduct} from './product.model';
import {Observable} from 'rxjs';

@Injectable()

export class ProductService{

    /*private url = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private http:HttpClient){

    }

    getProducts(): Observable<iProduct[]>{
        return this.http.get<iProduct[]>(this.url);
    }*/

    getProducts(){
        return [
            {
                id: 1,
                name: "Almond Toe Court Shoes, Patent Black",
                category: "Womens Footwear",
                price: 99.00,
                stock: 5,
                starRating: 2.5,
                product_url: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png"
            },
            {
                id: 2,
                name: "Suede Shoes, Blue",
                category: "Womens Footwear",
                price: 42.00,
                stock: 4,
                starRating: 2.8,
                product_url: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
            },
            {
                id: 3,
                name: "Leather Driver Saddle Loafers, Tan",
                category: "Mens Footwear",
                price: 34.00,
                stock: 12,
                starRating: 3.1,
                product_url: ""
            },
            {
                id: 4,
                name: "Flip Flops, Red",
                category: "Mens Footwear",
                price: 19.00,
                stock: 6,
                starRating: 3.9,
                product_url:""
            },
            {
                id: 5,
                name: "Flip Flops, Blue",
                category: "Mens Footwear",
                price: 19.00,
                stock: 0,
                starRating: 2.5,
                product_url:""
            },
            {
                id: 6,
                name: "Gold Button Cardigan, Black",
                category: "Womens Casualwear",
                price: 167.00,
                stock: 6,
                starRating: 2.7,
                product_url:""
            },
            {
                id: 7,
                name: "Cotton Shorts, Medium Red",
                category: "Womens Casualwear",
                price: 30.00,
                stock: 5,
                starRating: 5,
                product_url:""
            },
            {
                id: 8,
                name: "Fine Stripe Short Sleeve￼Shirt, Grey",
                category: "Mens Casualwear",
                price: 49.99,
                stock: 9,
                starRating: 2.5,
                product_url:""
            },
            {
                id: 9,
                name: "Fine Stripe Short Sleeve￼Shirt, Green",
                category: "Mens Casualwear",
                price: 49.99,
                stock: 9,
                starRating: 2.5,
                product_url:""
            },
            {
                id: 10,
                name: "Sharkskin Waistcoat, Charcoal",
                category: "Mens Formalwear",
                price: 75.00,
                stock: 2,
                starRating: 2.5,
                product_url:""
            },
            {
                id: 11,
                name: "Lightweight Patch Pocket￼Blazer, Deer",
                category: "Mens Formalwear",
                price: 175.50,
                stock: 1,
                starRating: 4,
                product_url:""
            },
            {
                id: 12,
                name: "Bird Print Dress, Black",
                category: "Womens Formalwear",
                price: 270.00,
                stock: 10,
                starRating: 3,
                product_url:""
            },
            {
                id: 13,
                name: "Mid Twist Cut-Out Dress, Pink",
                category: "Womens Formalwear",
                price: 540.00,
                stock: 5,
                starRating: 2,
                product_url:""
            }
        ];
    }
}