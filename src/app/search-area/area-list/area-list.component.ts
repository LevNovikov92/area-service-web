import {Component, Input, OnInit} from '@angular/core';
import {AreaData} from "../../services/area.service";

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {

  @Input() data: AreaData[] = []
  tableHeaders = ["title"]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
