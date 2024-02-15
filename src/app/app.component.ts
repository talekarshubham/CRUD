import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CRUD';



  ngOnInit(): void {
    
  let arr =[1,2,3,4,5,6,7,8,9,10];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    
  }

  }

  
}
