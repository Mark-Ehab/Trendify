import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TMDBAPI {
  /***********Dependeny Injection***********/
  /* Inject HttpClient Service */
  private readonly httpClient = inject(HttpClient);

  /************Properties***********/
  private readonly tmdbBaseUrl: string = 'https://api.themoviedb.org/3';
  private readonly apiKey: string = '48d62e7452a1f1a5e6018217ac27c50a';
  private readonly language: string = 'en-US';

  /************Methods***********/
  /*-----------------------------------------------------------------------------
  # Description: A function to get an obeservable<any> that holds the data of 
  # Trending Shows got from TMDB API on 'trending/all/day' endpoint
  #------------------------------------------------------------------------------
  # @params:void
  #------------------------------------------------------------------------------
  # return type: Observable<any>
  -----------------------------------------------------------------------------*/
  getTrendingShows(): Observable<any> {
    return this.httpClient.get(
      `${this.tmdbBaseUrl}/trending/all/day?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  /*-----------------------------------------------------------------------------
  # Description: A function to get an obeservable<any> that holds the data of 
  # Official Genres List got from TMDB API on 'genre/movie/list' endpoint
  #------------------------------------------------------------------------------
  # @params:void
  #------------------------------------------------------------------------------
  # return type: Observable<any>
  -----------------------------------------------------------------------------*/
  getOfficialGenresList(): Observable<any> {
    return this.httpClient.get(
      `${this.tmdbBaseUrl}/genre/movie/list?api_key=${this.apiKey}&language=${this.language}`
    );
  }
}
