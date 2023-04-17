import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;

  public showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.showModal = false;
  }
}
