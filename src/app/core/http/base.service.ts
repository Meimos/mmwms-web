import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Pagination } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: _HttpClient) {}

  /**
   * @title: get请求的基础类
   */
  fetchList(url: string, options?: any, pagination?: Pagination): any {
    const opts = Object.assign({}, pagination, options);
    url += (url.indexOf('?') < 0 ? '?' : '&') + this.serializeObj(opts);
    return this.http.get(url);
  }

  /**
   * @title:序列化get请求的参数
   */
  serializeObj(obj): string {
    let url = '';
    // tslint:disable-next-line:forin
    for (const k in obj) {
      const value = obj[k] !== undefined ? obj[k] : '';
      url += `&${k}=${encodeURIComponent(value)}`;
    }
    return url ? url.substring(1) : '';
  }

  // /**
  //  * @title: get请求的基础类
  //  */
  // saveOrUpdate<T extends BaseModel>(entity?: T, url?: string) {
  // }
}
