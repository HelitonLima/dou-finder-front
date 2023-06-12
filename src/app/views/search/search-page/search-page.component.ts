import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { DuoService } from 'src/app/services/duo.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public nickname = '';
  public roles: string[] = [];
  public champions: string[] = [];
  public championsSelected: string[] = [];
  public elos = [
    {
      value: 'IRON',
      desc: 'Ferro',
    },
    {
      value: 'BRONZE',
      desc: 'Bronze',
    },
    {
      value: 'SILVER',
      desc: 'Silver',
    },
    {
      value: 'GOLD',
      desc: 'Ouro',
    },
    {
      value: 'PLATINUM',
      desc: 'Platina',
    },
    {
      value: 'DIAMOND',
      desc: 'Diamante',
    },
    {
      value: 'MASTER',
      desc: 'Mestre',
    },
    {
      value: 'GRANDMASTER',
      desc: 'Graõ-Mestre',
    },
    {
      value: 'CHALLENGER',
      desc: 'Desafiante',
    },
  ];
  public selectedRoles: any[] = [];
  public selectedElos: any[] = [];
  public selectedChamps: any[] = [];

  public user!: IUser;
  public users: IUser[] = [];

  constructor(
    private authService: AuthService,
    private utilService: UtilService,
    private duoService: DuoService
  ) {
    this.setUser();
  }

  ngOnInit(): void {
    this.getRoles();
    this.getChampions();
  }

  getRoles() {
    this.utilService.getRoles().subscribe({
      next: (res) => {
        this.roles = res.values;
      },
    });
  }

  getChampions() {
    this.utilService.getChampions().subscribe({
      next: (res) => {
        this.champions = res;
        this.championsSelected = res;
      },
    });
  }

  onKey(value: any) {
    this.championsSelected = this.search(value.value);
  }

  search(value: string) {
    let filter = value.toLowerCase();

    return this.champions.filter((option) =>
      option.toLowerCase().startsWith(filter)
    );
  }

  setUser() {
    const user = this.authService.getUserLocalStorage();

    if (user != null) this.user = user;

    this.authService.getUser().subscribe((res) => (this.user = res));
  }

  submit() {
    if (!this.hasFilter) return;

    const model = {
      nickname: this.nickname,
      roles: this.selectedRoles,
      tiers: this.selectedElos,
      champions: this.selectedChamps,
      idUser: this.user.id
    };

    this.duoService.searchDuo(model).subscribe({
      next: (res) => {
        this.users = res;
      },
    });
  }

  hasFilter() {
    return (
      this.nickname != '' ||
      this.selectedChamps.length > 0 ||
      this.selectedElos.length > 0 ||
      this.selectedRoles.length > 0
    );
  }
}
