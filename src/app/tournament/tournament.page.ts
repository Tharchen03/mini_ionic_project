import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {
  public tournamentdetails = [
    { prizepull:75000,
      title: 'Mcl Season1', 
      Date:'2022-01-07',
      url: '#tex',
      description: 'mcl season1 Esports often takes the form of organized, multiplayer video game competitions, particularly between professional players, individually or as teams. Although organized competitions have long been a part of video game culture, these were largely between amateurs until the late 2000s, when participation is a very must key la  ',
    },
    {
      prizepull:750000,
      Date:'2022-07-07',
       title: 'Mcl Season2', 
       url: '#tex',
       description: 'mcl season2 Esports often takes the form of organized, multiplayer video game competitions, particularly between professional players, individually or as teams. Although organized competitions have long been a part of video game culture, these were largely between amateurs until the late 2000s, when participation is a very must key la   ',
  },
  {
    prizepull:75000000,
    title: 'Mcl Meason3', 
    Date:'2023-01-07',
    url: '#tex',
    description: 'mcl season3 Esports often takes the form of organized, multiplayer video game competitions, particularly between professional players, individually or as teams. Although organized competitions have long been a part of video game culture, these were largely between amateurs until the late 2000s, when participation  is a very must key la   ',

}, ]
 constructor() { }
  ngOnInit() {
  }
}
