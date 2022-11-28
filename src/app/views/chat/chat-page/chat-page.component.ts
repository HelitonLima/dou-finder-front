import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  public posts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts = [
      {
        content: 'teste'
      }
    ]
  }

}
