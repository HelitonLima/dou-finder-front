import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDuoUser, IMsg } from '../duo-page/duo-page.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() model!: IDuoUser;
  
  @Output() undoDuoEmitter: EventEmitter<null> = new EventEmitter();
  @Output() showPrivateChatEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  undoDuo() {
    this.undoDuoEmitter.emit();
  }

  showPrivateChat() {
    this.showPrivateChatEmitter.emit(this.model.userId);
  }

}
