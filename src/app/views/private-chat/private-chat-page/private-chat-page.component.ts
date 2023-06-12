import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChat, IChatMessage } from 'src/app/models/chat.model';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-private-chat-page',
  templateUrl: './private-chat-page.component.html',
  styleUrls: ['./private-chat-page.component.scss']
})
export class PrivateChatPageComponent implements OnInit {

  public id: string | null = null;
  public user!: IUser;
  public userDuo!: IUser;
  public chat$ = this.chatService.chat$;
  public getChat$ = this.chatService.getChat$;
  public messages: IChatMessage[] = [];
  public msg = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private chatService: ChatService
    ) {
      const id = this.activatedRoute.snapshot.params['id'];

      this.setPageTitle('chat')
      
      if (id) {
        this.id = id;
        this.getDuoUser();
      }

      this.setUser();
  }
  
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.scrollMessagestoBottom();
    this.watchChat();
    this.watchGetChat();
  }

  watchGetChat() {
    this.getChat$.subscribe({
      next: () => {
        const users = [this.user.id as string, this.userDuo.id as string];
        
        this.chatService.getChat(users);
      }
    })
  }

  watchChat() {
    this.chat$.subscribe({
      next: (res: IChat) => {
        this.messages = res.messages;
      }
    })
  }

  getDuoUser() {
    this.authService.getUserById(this.id as string).subscribe({
      next: (res) => {
        const users = [this.user.id as string, res.user.id as string];

        this.userDuo = res.user;
        this.setPageTitle(res.user.nickname);

        this.chatService.createChat(users);
      }
    })
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null)
      this.user = user;

    this.authService.getUser().subscribe(res => this.user = res);
  }

  scrollMessagestoBottom() {
    const messages = document.getElementById('messages');
    
    if (messages)
      messages.scrollTo({top: messages.scrollHeight});
  }

  setPageTitle(title: string) {
    this.activatedRoute.snapshot.data['title'] = title;
  }

  sendMsg() {
    const msg: IChatMessage = {
      message: this.msg,
      reciverIdUser: this.userDuo.id as string,
      senderIdUser: this.user.id as string
    }

    this.chatService.sendMsg(msg);

    this.msg = '';
  }

}
