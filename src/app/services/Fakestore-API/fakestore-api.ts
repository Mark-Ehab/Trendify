import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakestoreAPI {
  /***********Dependeny Injection***********/
  /* Inject HttpClient Service */
  private readonly httpClient = inject(HttpClient);

  /************Properties***********/
  private readonly fakestoreBaseURL: string = 'https://fakestoreapi.com';

  /************Methods***********/
  /*-----------------------------------------------------------------------------
  # Description: A function to get an obeservable<any> that holds the data of 
  # All Products got from Fakestore API on '/products' endpoint
  #------------------------------------------------------------------------------
  # @params:void
  #------------------------------------------------------------------------------
  # return type: Observable<any>
  -----------------------------------------------------------------------------*/
  getAllProducts(): Observable<any> {
    return this.httpClient.get(`${this.fakestoreBaseURL}/products`);
  }
}
