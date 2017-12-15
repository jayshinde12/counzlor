import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private http: Http) {}

  wardmember = [];
  fetchData = function()
  {
    this.http.get("http://localhost:5555/wardmember").subscribe(
      (res: Response) =>{
        this.wardmember = res.json();
      }
    )
  }

  ngOnInit() {
    this.fetchData();
  }

}
