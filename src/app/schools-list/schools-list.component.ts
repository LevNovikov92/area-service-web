import {Component, OnInit} from '@angular/core';
import {School, SchoolService} from "../services/school.service";

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit {

  tableHeaders = ["title"]
  schools: School[] = []

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    console.log("onInit called")
    this.fetchSchools()
  }

  fetchSchools() {
    this.schoolService.getSchools()
      .subscribe(schools => {
        console.log("Data received")
        this.schools = schools
      })
  }
}
