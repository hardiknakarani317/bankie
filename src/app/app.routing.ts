import { Routes,RouterModule } from "@angular/router";
import { TaskComponent } from "./task/task.component";
import { DemoComponent } from "./demo/demo.component";

const arr:Routes=[
    {path:'',redirectTo:'/alltask',pathMatch:'full'},
    {path:'alltask', component:TaskComponent},
    {path:'demo', component:DemoComponent}
];

export const routing =RouterModule.forRoot(arr);