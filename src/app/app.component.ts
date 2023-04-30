import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'homepage', url: '/homepage', icon: 'home' },
    { title: 'MLBB Esports', url: '/mlbb', icon: 'game-controller' },
    { title: 'AboutUs', url: '/about-us', icon: 'people' },
    { title: 'Tournament details', url: '/tournament', icon: 'trophy' },
    { title: 'Registration', url: '/registration', icon: 'document-text' },
    { title: 'OurSponsers', url: '/our-sponsers', icon: 'wallet' },
    { title: 'Match Shedule', url: '/matchshedule', icon: 'receipt' },
    { title: 'Logout', url: '/auth', icon: 'log-out' },
 
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private menu:MenuController) {}
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
// <ion-icon name="log-out"></ion-icon>
// <ion-icon name="game-controller"></ion-icon>
// <ion-icon name="people-circle-outline"></ion-icon>
// <ion-icon name="document-text"></ion-icon>