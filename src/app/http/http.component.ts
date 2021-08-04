import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  constructor(private http: HttpService) {}

  users: any;

  ngOnInit() {
    this.http.getDataMethod().subscribe((data: Response) => {
      console.log(data);
      this.users = data;
    });
  }
}
