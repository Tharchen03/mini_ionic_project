import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-our-sponsers',
  templateUrl: './our-sponsers.page.html',
  styleUrls: ['./our-sponsers.page.scss'],
})
export class OurSponsersPage implements OnInit {
  constructor(private alertController:AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Contact-Info',
      subHeader: 'Inorder to contact',
      message: 'mailto:sherabten098@gmail.com!',
      buttons: [
        {
        text: 'cancel',
        role: 'sdf',
      },
      {
        text: 'ok',
        role: 'jhgdskj',
       
      }
    ],
    });
    await alert.present();
  }
  ngOnInit() {   
  }
}
