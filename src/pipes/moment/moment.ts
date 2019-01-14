import { Pipe, PipeTransform } from "@angular/core";
import moment from "moment";

/**
 * Generated class for the MomentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "moment"
})
export class MomentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, args) {
    args = args || "";

    let dates = new Date(value);

    var lidate = `${dates.getFullYear()}-${dates.getMonth() +
      1}-${dates.getDate()} ${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}`;
    return lidate;
  }
}
