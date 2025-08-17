import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Productcard } from '../../shared/components/productcard/productcard';
import { FakestoreAPI } from '../../services/Fakestore-API/fakestore-api';
import { IProduct } from '../../shared/interfaces/iproduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [Productcard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit, OnDestroy {
  /* Dependency Injection */
  /* Inject Fakestore API */
  private readonly fakeStoreAPI = inject(FakestoreAPI);

  /* Properties */
  products: IProduct[] = [] as IProduct[];
  productsSubscription!: Subscription;

  /* Methods */
  /*-----------------------------------------------------------------------------
  # Description: A function to get the data of All Products got from Fakestore 
  # API on '/products' endpoint
  #------------------------------------------------------------------------------
  # @params:void
  #------------------------------------------------------------------------------
  # return type: void
  -----------------------------------------------------------------------------*/
  getAllProductsData(): void {
    this.productsSubscription = this.fakeStoreAPI.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (err) => {
        console.log(`%c ${err.message}`, 'color:red');
      },
    });
  }

  /* Component Lifecycle Hooks */
  ngOnInit(): void {
    /* Get All Products List on Products Component Initialization */
    this.getAllProductsData();
  }

  ngOnDestroy(): void {
    /* Unsubscribe for All Products Observable on Products Component Destruction */
    this.productsSubscription.unsubscribe();
  }
}
