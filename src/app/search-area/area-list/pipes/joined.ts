import {Pipe, PipeTransform} from "@angular/core";
import {Landmark} from "../../../services/area.service";

@Pipe({name: 'joinLandmarks'})
export class JoinLandmarksPipe implements PipeTransform {

  transform(value: Landmark[]): string {
    return value.map(v => v.title).join(", ")
  }
}
