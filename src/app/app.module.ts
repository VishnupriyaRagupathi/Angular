import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';
import { myUpperCasePipe } from './products/myUpperCase.pipe';
import { myLowerCasePipe } from './products/myLowerCase.pipe';
import { myCasePipe } from './products/myCasePipe.pipe';
import { myDiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/productSearch.pipe';
import { starComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './notFound.component';
import { ProductDetailsComponent } from './products/product-detail.component';


@NgModule ({
    //declare all modules
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'id', component: ProductDetailsComponent},
            {path: 'orders', component: OrdersComponent},
            {path: 'movies', component: MoviesComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ])
    ],
    //declare all components and pipes
    declarations: [
        AppComponent,
        BookComponent, 
        ProductComponent,
        myUpperCasePipe,
        myLowerCasePipe,
        myCasePipe,
        myDiscountPipe,
        ProductSearchPipe,
        starComponent,
        HomeComponent,
        OrdersComponent,
        MoviesComponent,
        NotFoundComponent,
        ProductDetailsComponent
    ],
    //only first component
    bootstrap: [
        AppComponent
    ],
    //all services
    providers: [
        ProductService
    ]
})

export class AppModule {

}