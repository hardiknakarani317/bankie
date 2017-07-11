import { Component, OnInit } from '@angular/core';
import { Ta } from "./ta";
//import { TaskdataService } from "../taskdata.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  num1:string="";
  id:string="";
  name:string="";

  arrtask:Ta[]=[
    new Ta('1','kishan'),
    new Ta('2','hardik'),
    new Ta('3','kardik'),
    new Ta('4','ha')
  ];


  constructor(
    // public _data:TaskdataService
    ) { }

  ngOnInit() {
    // this._data.getalltask().subscribe(
    //   (data:task[])=>{
    //     this.Ta[]=data;
    //   }
    // );
  }

  onadd(){
    // alert(this.id + this.name);
    this.arrtask.push(new Ta(this.id , this.name));
  }

  ondelete(item){ 
    // alert(item.name);
    
    this.arrtask.splice(this.arrtask.indexOf(item),1);
  }
}
