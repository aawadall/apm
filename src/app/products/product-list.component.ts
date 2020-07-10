import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from '../product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent 
                implements OnInit {
    
    pageTitle: string = 'Products List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;


    _listFilter: string;
    errorMessage: any;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts= this.listFilter ? 
        this.performFilter(this.listFilter) : this.products;
        
        
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductService) {
        
     
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    toggleImage(): void {
        
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        // this.products = this._productService.getProducts();
        this._productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        
    }

    onNotify(message: string): void {
        console.log(message);
        
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;

    }
}