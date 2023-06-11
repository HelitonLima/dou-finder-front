import { Component, Input, OnInit } from '@angular/core';
import { INotification } from 'src/app/models/notification.model';
import { IPost } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: IPost;

  public showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.showModal = false;
  }
}
