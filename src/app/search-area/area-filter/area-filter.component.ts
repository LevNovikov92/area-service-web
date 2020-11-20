import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchoolService, SchoolType} from "../../services/school.service";
import {AreaFilter} from "../../services/area.service";

@Component({
  selector: 'app-area-filter',
  templateUrl: './area-filter.component.html',
  styleUrls: ['./area-filter.component.css']
})
export class AreaFilterComponent implements OnInit {

  @Output() searcher = new EventEmitter<AreaFilter>()

  schoolTypes: SchoolType[] = []

  filter = new AreaFilter(null, null, null)

  constructor(
    private schoolService: SchoolService
  ) { }

  ngOnInit(): void {
    this.schoolService.getSchoolTypes()
      .subscribe(types => this.schoolTypes = types)
  }

  onClick() {
    this.searcher.emit(this.filter)
  }


}
