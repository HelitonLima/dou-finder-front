import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IPost } from 'src/app/models/post.model';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  public user!: IUser;
  public posts$ = this.socket.fromEvent<IPost[]>('posts');
  public msg = '';

  constructor(
    private socket: Socket,
    private authService: AuthService
  ) { 
    this.setUser();
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.socket.emit('get posts', null);
  }

  sendMessage() {
    const obj = {
      user: this.user,
      msg: this.msg
    }

    this.socket.emit('posts', obj);
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null)
      this.user = user;

    this.authService.getUser().subscribe(res => this.user = res);
  }

}
