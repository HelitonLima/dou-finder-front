import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public user = {
    icon: '/assets/images/2015_Master_Poro.png'
  };
  public icons: string[] = [
    '/assets/images/2015_Master_Poro.png',
    '/assets/images/2016_Master_Poro.png',
    '/assets/images/2017_Master_Poro.png',
    '/assets/images/2015_Poro.png',
    '/assets/images/2016_Poro.png',
    '/assets/images/2017_Poro.png',
  ];
  public playRoles = [
    {
      value: 'Top'
    },
    {
      value: 'Jungle'
    },
    {
      value: 'Mid'
    },
    {
      value: 'ADC'
    },
    {
      value: 'Sup'
    }
  ];
  public selectedRoles: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeIcon(icon: string) {
    this.user.icon = icon;
  }

  removeSelectedRole(role: any) {
    this.selectedRoles = this.selectedRoles.filter((s: any) => s != role);
  }

}
