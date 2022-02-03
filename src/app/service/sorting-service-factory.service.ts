import { Injectable } from '@angular/core';
import {Sorter} from "./sorter";
import {Algorithm} from "../model/algorithm";
import {BubbleSortService} from "./bubbleSort/bubble-sort.service";
import {SelectionSortService} from "./selectionSort/selection-sort.service";
import {InsertionSortService} from "./insertionSort/insertion-sort.service";
import {MergeSortService} from "./mergeSort/merge-sort.service";

@Injectable({
  providedIn: 'root'
})
export class SortingServiceFactoryService {

  constructor(private bubbleSortService: BubbleSortService,
              private selectionSortService : SelectionSortService,
              private mergeSortService : MergeSortService,
              private insertionSortService : InsertionSortService) { }

  getSorter(algorithm: Algorithm) : Sorter {
    switch (algorithm) {
      case Algorithm.BUBBLE_SORT : {
        return new BubbleSortService();
      }
      case Algorithm.SELECTION_SORT : {
        return this.selectionSortService
      }
      case Algorithm.MERGE_SORT : {
        return this.mergeSortService
      }
      case Algorithm.INSERTION_SORT : {
        return this.insertionSortService
      }
    }
  }
}
