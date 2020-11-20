import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private http: HttpClient
  ) {
  }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>("http://localhost:8080/school", {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  getSchoolTypes(): Observable<SchoolType[]> {
    return this.http.get<SchoolType[]>("http://localhost:8080/schoolType", {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }
}

export class School {

  title: string

  constructor(title: string) {
    this.title = title
  }

}

export class SchoolType {

  constructor(
    public id: number,
    public title: string
  ) {}
}
