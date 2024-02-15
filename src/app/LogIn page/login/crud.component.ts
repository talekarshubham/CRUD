import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudServiceService } from 'src/app/Service/crud-service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  loginForm: FormGroup;
  users: any
  constructor(private formBuilder: FormBuilder, private crudservice: CrudServiceService) {
    this.loginForm = this.formBuilder.group({
      id: [null],
      username: ['', Validators.required,],
      number: ['', Validators.required],
    });
  }

  ngOnInit() {

    this.getuserdata();
    const abc=10;
    setTimeout(()=>{
      console.log(abc);
      
    },3000)
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    // console.log(this.loginForm.get('username')?.invalid ,this.loginForm.get('username')?.dirty || this.loginForm.get('username')?.touched);

    if (this.loginForm.valid) {
      console.log(this.loginForm);
      if (this.loginForm.value.id) {
        this.crudservice.updateData(this.loginForm.value.id,this.loginForm.value).subscribe((res) => {
          console.log(res);
        })
      } else {
        this.crudservice.postData(this.loginForm.value).subscribe((res) => {
          console.log(res);
        })
      }
      this.loginForm.reset();

      this.getuserdata();
    }

  }
  getuserdata() {
    this.crudservice.getData().subscribe((res) => {
      console.log(res);
      this.users = res
    })
  }
  deleteItem(user: any) {
    console.log(user);
    this.crudservice.deletData(user.id).subscribe((res) => {
      console.log(res);
    })

    this.getuserdata();
  }
  editItem(user: any) {
    // console.log(user);
    // console.log(this.loginForm.controls);
    this.loginForm.controls['username'].setValue(user.username)
    this.loginForm.controls['id'].setValue(user.id)
    this.loginForm.controls['number'].setValue(user.number)
  }
}
