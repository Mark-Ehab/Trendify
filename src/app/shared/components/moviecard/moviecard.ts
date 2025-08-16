import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from '../../interfaces/igenre';

@Component({
  selector: 'moviecard',
  imports: [],
  templateUrl: './moviecard.html',
  styleUrl: './moviecard.css',
})
export class Moviecard implements OnInit {
  /* Properties */
  @Input({ required: true }) title!: string;
  @Input({ required: true }) overview!: string;
  @Input({ required: true }) imgSrc!: string;
  @Input({ required: true }) releaseDate!: string;
  @Input({ required: true }) rate!: string;
  @Input({ required: true }) genreIdList!: number[];
  @Input({ required: true }) genreList!: IGenre[];
  genreNameList!: string[];

  /* Methods */
  /*-----------------------------------------------------------------------------
  # Description: A function to get genres names list from genres id list for each 
  # show then append it to trendingShows
  #------------------------------------------------------------------------------
  # @params:void
  #------------------------------------------------------------------------------
  # return type: void
  -----------------------------------------------------------------------------*/
  private getGenresNamesListForEachShow(
    genresIdList: number[],
    genresList: IGenre[]
  ): string[] {
    let result: string[] = [];
    for (
      let counter1 = 0;
      counter1 < genresIdList.length && counter1 < 2;
      counter1++
    ) {
      for (let counter2 = 0; counter2 < genresList.length; counter2++) {
        if (genresIdList[counter1] == genresList[counter2].id) {
          result.push(genresList[counter2].name);
          break;
        }
      }
    }
    return result;
  }

  /* Component Lifecycle Hooks */
  ngOnInit(): void {
    /* Get Genres Names List on Component Initialization */
    this.genreNameList = this.getGenresNamesListForEachShow(
      this.genreIdList,
      this.genreList
    );
  }
}
