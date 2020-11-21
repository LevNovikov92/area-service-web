import { Component, OnInit } from '@angular/core';
import {AreaData, AreaFilter, AreaService} from "../services/area.service";

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent implements OnInit {

  data: AreaData[] = []

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
  }

  onSearch(filter: AreaFilter) {
    SearchAreaComponent.formatFilter(filter)
    this.areaService.searchArea(filter)
      .subscribe(areas => this.data = areas)
  }

  private static formatFilter(filter: AreaFilter) {
    if (filter.landmarkKey == "") {
      filter.landmarkKey = null
    }

    if (filter.schoolType != null && filter.schoolType < 0) {
      filter.schoolType = null
    }
  }

}
