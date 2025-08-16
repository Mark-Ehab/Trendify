import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Moviecard } from '../../shared/components/moviecard/moviecard';
import { TMDBAPI } from '../../services/TMDB-API/tmdb-api';
import { IShow } from '../../shared/interfaces/ishow';
import { Subscription } from 'rxjs';
import { IGenre } from '../../shared/interfaces/igenre';
import { Recommended } from '../recommended/recommended';

@Component({
  selector: 'app-shows',
  imports: [Moviecard, Recommended],
  templateUrl: './shows.html',
  styleUrl: './shows.css',
})
export class Shows implements OnInit, OnDestroy {
  /* Dependency Injection */
  /* Inject TMDB API Service */
  private readonly TMDB_API = inject(TMDBAPI);

  /* Properties */
  imgBase: string = 'https://image.tmdb.org/t/p/w500';
  trendingShows: IShow[] = [] as IShow[];
  private trendingShowsSubscription!: Subscription;
  officialGenresList: IGenre[] = [] as IGenre[];
  private officialGenresListSubscription!: Subscription;

  /* Methods */
  /*-----------------------------------------------------------------------------
  # Description: A function to get the data of Official Genres List got from TMDB 
  # API on 'genre/movie/list' endpoint
  #------------------------------------------------------------------------------
  # @params:void
  #------------------------------------------------------------------------------
  # return type: void
  -----------------------------------------------------------------------------*/
  getOfficialGenresListData(): void {
    this.officialGenresListSubscription =
      this.TMDB_API.getOfficialGenresList().subscribe({
        next: (response) => {
          this.officialGenresList = response.genres;
          console.log(response.genres);
        },
        error: (err) => console.log(`%c ${err.message}`, 'color:red'),
      });
  }
  /*-----------------------------------------------------------------------------
  # Description: A function to get the data of Trending Shows got from TMDB API 
  # on 'trending/all/day' endpoint
  #------------------------------------------------------------------------------
  # @params:void
  #------------------------------------------------------------------------------
  # return type: void
  -----------------------------------------------------------------------------*/
  getTrendingShowsData(): void {
    this.trendingShowsSubscription = this.TMDB_API.getTrendingShows().subscribe(
      {
        next: (response) => {
          this.trendingShows = response.results;
          console.log(response.results);
        },
        error: (err) => console.log(`%c ${err.message}`, 'color:red'),
      }
    );
  }
  /*-----------------------------------------------------------------------------
  # Description: A function to truncate floating point number represntation by a
  # specfic step
  #------------------------------------------------------------------------------
  # @params:void
  #------------------------------------------------------------------------------
  # return type: string
  -----------------------------------------------------------------------------*/
  truncFloatingPointNumber(num: number, step: number): string {
    return num.toFixed(step);
  }

  /* Component Lifecycle Hooks */
  ngOnInit(): void {
    /* Get Official Gnres List on Shows Component Initialization */
    this.getOfficialGenresListData();
    /* Get Trending Shows List on Shows Component Initialization */
    this.getTrendingShowsData();
  }
  ngOnDestroy(): void {
    /* Unsubscribe for Official Genres List Observable on Component Destruction */
    this.officialGenresListSubscription.unsubscribe();
    /* Unsubscribe for Trending Shows Observable on Component Destruction */
    this.trendingShowsSubscription.unsubscribe();
  }
}
