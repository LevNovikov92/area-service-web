import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {School} from "./school.service";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) {
  }

  searchArea(filter: AreaFilter): Observable<AreaData[]> {
    return this.http.post<AreaData[]>("http://localhost:8080/searchByFilter", filter, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
  }
}

export class AreaFilter {
  constructor(
    public schoolType: number | null,
    public minSafety: number | null,
    public landmarkKey: String | null
  ) {
  }
}

export class AreaData {
  constructor(
    public id: number,
    public title: String,
    public safetyScore: number,
    public landmarks: Landmark[],
    public schools: School[]
  ) {
  }
}

export class Landmark {
  constructor(
    public id: number,
    public title: String
  ) {
  }
}
