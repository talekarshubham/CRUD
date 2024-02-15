import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  postData(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.apiUrl + '/posts', data,);
  }
  getData(): Observable<any> {
    // console.log(data);
    return this.http.get(this.apiUrl + '/posts');
  }
  deletData(id:number): Observable<any> {
    // console.log(data);
    let url=this.apiUrl + `/posts/${id}`
    return this.http.delete(url);
  }
  updateData(id:number,data:any): Observable<any> {
    console.log(data);
    let url=this.apiUrl + `/posts/${id}`
    return this.http.put(url,data);
  }
}
