import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public getUserDetails(data: Array<Object>): Object {
    delete data[0]['request_clin_note_content'];
    const result: Object = data[0];
    return result;
  }


  public getKeyValue(JSON): Array<Object> {
    const result: Array<Object> = new Array<Object>();
    // tslint:disable-next-line:forin
    for (const key in JSON) {
      // console.log(JSON[key]['content']);
      result.push({
        key: key,
        value: JSON[key],
        domainName: JSON[key][0]['content']
      });
    }
    return result;
  }

  public getTableContent(data): Array<any> {
    const result: Array<any> = new Array<any>();
    // tslint:disable-next-line:forin
    for (const key of data) {
      result.push({
        mainHeader: key['concept_code'],
        content: this.getInnerContent(key['request_clin_note_content']['topics'][0]['sections']),
        filePath: key['file_path']
      });
    }
    console.log(this.getKeyValue(_.groupBy(result, 'mainHeader')));
    return this.getKeyValue(_.groupBy(result, 'mainHeader'));
  }

  public getInnerContent(sections): Array<Object> {
    const result: Array<any> = new Array<any>();
    // tslint:disable-next-line:forin
    for (const section of sections) {
      // console.log(section);
      result.push({
        domainName: section['domainName'],
        domainCode: section['domainCode'],
        selected: section['selected'],
        type: section['type']
      });
    }
    return result;
  }
}
