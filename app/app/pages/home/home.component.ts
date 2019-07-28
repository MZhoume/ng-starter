import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user?: User;

  constructor(private userService: UserService) {
    userService.user$.subscribe(u => (this.user = u));
  }

  public ngOnInit() {}
}
