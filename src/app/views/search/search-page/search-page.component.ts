import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public playRoles = [
    { value: 'top' },
    { value: 'jungle' },
    { value: 'mid' },
    { value: 'adc' },
    { value: 'sup' }
  ];
  public elos = [
    { value: 'Ferro' },
    { value: 'Bronze' },
    { value: 'Prata' },
    { value: 'Ouro' },
    { value: 'Platina' },
    { value: 'Diamante' },
    { value: 'Mestre' },
    { value: 'Grão-Mestre' },
    { value: 'Desafiante' },
  ];
  public champs = [
    { value: 'Aatrox' },
    { value: 'Annie' },
  ];
  public selectedRoles: any = [];
  public selectedElos: any = [];
  public selectedChamps: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
