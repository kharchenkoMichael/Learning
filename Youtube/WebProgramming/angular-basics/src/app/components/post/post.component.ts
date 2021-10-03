import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewServiceService } from 'src/app/services/new-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  userName: string = "";
  response: any = null;

  constructor(private http: HttpClient, svc: NewServiceService) {
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }

}
