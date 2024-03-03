import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CrudServiceService } from 'src/app/Service/crud-service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  loginForm: FormGroup;
  users: any
  constructor(private formBuilder: FormBuilder, private crudservice: CrudServiceService,private router:Router) {
    this.loginForm = this.formBuilder.group({
      id: [null],
      username: ['', Validators.required,],
      number: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getuserdata();
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    // console.log(this.loginForm.get('username')?.invalid ,this.loginForm.get('username')?.dirty || this.loginForm.get('username')?.touched);

    if (this.loginForm.valid) {
      // console.log(this.loginForm);
      if (this.loginForm.value.id) {
        this.crudservice.updateData(this.loginForm.value.id,this.loginForm.value).subscribe((res) => {
          // console.log(res);
        })
      } else {
        this.crudservice.postData(this.loginForm.value).subscribe((res) => {
          // console.log(res);
        })
      }
      this.loginForm.reset();

      this.getuserdata();
      // this.router.navigate(['/crud-table']);
    }

  }
  getuserdata() {
    this.crudservice.getData().subscribe((res) => {
      // console.log(res);
      this.users = res
    })
  }
 
}
