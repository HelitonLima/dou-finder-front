import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMsg } from '../duo-page/duo-page.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() model: IMsg = {
    icon: '',
    id: '',
    lastMessage: '',
    nickname: '',
    unreadMessage: 0
  };
  
  @Output() undoDuoEmitter: EventEmitter<null> = new EventEmitter();
  @Output() showPrivateChatEmitter: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  undoDuo() {
    this.undoDuoEmitter.emit();
  }

  showPrivateChat() {
    this.showPrivateChatEmitter.emit();
  }

}
