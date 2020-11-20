import {Injectable} from '@angular/core';
import {School} from "../schools-list/schools-list.component";
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
    console.log("School service called")

    // const headers = new HttpHeaders();
    // headers.set("Access-Control-Allow-Origin", "*")
    return this.http.get<School[]>("http://localhost:8080/school", {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }
}
