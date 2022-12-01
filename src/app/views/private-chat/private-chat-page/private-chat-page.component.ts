import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private-chat-page',
  templateUrl: './private-chat-page.component.html',
  styleUrls: ['./private-chat-page.component.scss']
})
export class PrivateChatPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.setPageTitle();
  }
  
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.scrollMessagestoBottom();
  }

  scrollMessagestoBottom() {
    const messages = document.getElementById('messages');
    
    if (messages)
      messages.scrollTo({top: messages.scrollHeight});
  }

  setPageTitle() {
    this.activatedRoute.snapshot.data['title'] = 'Pixer';
  }

}
