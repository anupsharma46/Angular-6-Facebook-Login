import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import { RouterModule, Routes, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import {EmployeeDetailModel} from 'src/app/EmployeeDetailModel';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

     searchText:string;
     model: any = {};
     private apiUrl = "src/app/info.json";
     data:any = {};
     @ViewChild('myForm') formValues;

     key: string = 'name';
     reverse: boolean = false;

     sort(key){
        this.key = key;
        this.reverse = !this.reverse;
      }

   constructor(private http : Http){
   this.getInfo();
   this.getData();
   }

    ngOnInit() { }

   onSubmit() {
     let empmodel= new EmployeeDetailModel();
     empmodel.id=this.model.id;
     empmodel.name=this.model.name;
     empmodel.email=this.model.email;
     empmodel.colony=this.model.colony;
     empmodel.street=this.model.street;
     empmodel.city=this.model.city;
     empmodel.birthday=this.model.birthday;
     empmodel.gender=this.model.gender;
     console.log(empmodel);
     this.data.employee.push(empmodel);
     this.formValues.resetForm();
   }

     getData(){
      return this.http.get(this.apiUrl)
      .pipe(map((res:Response) => res.json()))
     }
     getInfo(){
       this.getData().subscribe(data => {
         this.data=data;
       })
     }
}
