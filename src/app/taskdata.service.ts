import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class TaskdataService {

  url:string="https://rkdemotask.herokuapp.com/tasks/";

  constructor(public _http:Http) { }

  getalltask()
  {
      return this._http.get(this.url).map((res:Response)=>res.json());
  }
  deletetask(item)
  {
      let head=new Headers({'content-type':'application/json'});
      let res=new RequestOptions({headers:head});
      return this._http.delete(this.url+item.Id,res)
      .map((res:Response)=>res.json());
  }

  addtask(item)
  {
      let body=JSON.stringify(item);
      let head=new Headers({'content-type':'application/json'});
      let res=new RequestOptions({headers:head});
      return this._http.post(this.url+item.Id,body,res)
      .map((res:Response)=>res.json());
  }
}
