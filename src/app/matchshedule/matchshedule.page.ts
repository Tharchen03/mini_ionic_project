import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { People } from '../registration/registration.model';
import { switchMap, take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IonItemSliding,LoadingController } from '@ionic/angular';

// interface ItemSlidingCustomEvent extends CustomEvent {
//   target: HTMLIonItemSlidingElement;
// }
@Component({
  selector: 'app-matchshedule',
  templateUrl: './matchshedule.page.html',
  styleUrls: ['./matchshedule.page.scss'],
})
export class MatchshedulePage implements OnInit {
  registeredpeople:People[ ];
  private _peoples = new BehaviorSubject<People[]>([])
  allpeople: People[];
  loadingCtrl: any;
  get peoples(){
  return this._peoples.asObservable();
  peopleId: String
}
public time = [
  { time: '10:00 pm', icon: 'alarm'},

  { time: '01:00 am', icon: 'alarm'},
];
  private peopleSub: Subscription; 
  isloading: boolean; 
  peopleIndex:number=0;
  constructor(private PeopleService:PeopleService,
    private router:Router,
    private http:HttpClient) { }
  ngOnInit() {
    this.isloading=true
    this.peopleSub = this.PeopleService.peoples.subscribe(peoples=>{
      this.registeredpeople = peoples;
      console.log(this.registeredpeople);     
    });
  this.PeopleService.fetchPeople().subscribe(()=>{
      this.isloading = false;
    });
    this.peopleIndex= 0;
  }
  onCancelBooking(bookingId:string,SlidingBooking:IonItemSliding){
    SlidingBooking.close();
    // this.router.navigate(['/','places','bookings',bookingId]);
    // console.log(bookingId,SlidingBooking);
    this.loadingCtrl.create({message : 'cancelling...'}).then(loadingEl =>{
      loadingEl.present();
      this.PeopleService.cancelBooking(bookingId).subscribe(()=>{
        loadingEl.dismiss();
      });
    });
  }

}
