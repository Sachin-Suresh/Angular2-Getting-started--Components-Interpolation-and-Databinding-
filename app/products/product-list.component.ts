import { Component } from '@angular/core';

//import { IProduct } from './product';
//import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    //styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent {

    //-----------properties----

    pageTitle: string = 'Product List';
    //image width properties
    imageWidth:number=50;
    imageMargin:number=2;
    //Image show button properties;
    showImage:boolean = false;
    //Filterby property
    listFilter:string='cart';


    products: any[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];

    //---------custom functions-----------

    //Image button function
    toggleImage():void{
        this.showImage=!this.showImage;

    }

}
