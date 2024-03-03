import { Component, Input, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/Service/crud-service.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
// @input loginForm:any
export class CrudTableComponent implements OnInit {
  @Input() loginForm: any;
  @Input() users: any;
  // users:any
  constructor(private crudservice: CrudServiceService){
    
  }
ngOnInit(): void {
}
  deleteItem(user: any) {
    console.log(user);
    this.crudservice.deletData(user.id).subscribe((res) => {
      // console.log(res);
    })
  }
  editItem(user: any) {
    // console.log(user);
    // console.log(this.loginForm.controls);
    this.loginForm.controls['username'].setValue(user.username)
    this.loginForm.controls['id'].setValue(user.id)
    this.loginForm.controls['number'].setValue(user.number)
  }
}
