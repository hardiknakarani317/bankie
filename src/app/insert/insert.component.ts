import { Component, OnInit } from '@angular/core';
import { TaskdataService } from "../taskdata.service";
import { Insert } from "./insert";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  arrlist:Insert[]=[];
  constructor(public _data:TaskdataService) { }


  ngOnInit() {
    this._data.getalltask().subscribe(
      (data:Insert[])=>{
        this.arrlist=data;
      }
    );

  }

  ondelete(item){
  this._data.deletetask(item).subscribe(
      (data:any)=>{this.arrlist.splice(this.arrlist.indexOf(item),1);} 
  );
  }

  id:string='';
  title:string='';
  status:string='';
  addtask(){
    this._data.addtask(new Insert(this.id,this.title,this.status)).subscribe(
      (data:any)=>{this.arrlist.push(new Insert(this.id,this.title,this.status));}
    );
  }

}
