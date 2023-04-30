import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeopleService } from '../people.service';
import { People } from '../registration/registration.model';


@Component({
  selector: 'app-registered-people',
  templateUrl: './registered-people.page.html',
  styleUrls: ['./registered-people.page.scss'],
})
export class RegisteredPeoplePage implements OnInit {
  registeredpeople:People[ ];
  private peopleSub: Subscription; 
  isloading: boolean; 

  peopleIndex:number=0;
  constructor(private PeopleService:PeopleService,
    private router:Router) { }
    // peopleIndex:number=0;
    

  ngOnInit() {
        // this.registeredpeople = this.PeopleService.allpeople;
        // console.log(this.registeredpeople)
        // this.peopleSub = this.PeopleService.peoples.subscribe(places =>{
        //   this.registeredpeople = places;
        // });
        // this.PeopleService.fetchPeople().subscribe(()=>{
        //   this.isloading = false;
        // });
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

  ngOnDestroy(){
    if(this.peopleSub){
      this.peopleSub.unsubscribe();
     }
      
    }

}
