import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/people.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
form:FormGroup;
  constructor(private PeopleService:PeopleService,
    private loadingCtrl:LoadingController,
    private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      contact: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      Member: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      tournament: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),

    })
  }
  createpeople(){
    console.log(this.form.value);
    if (!this.form.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'Create registered People...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople(
      this.form.value.name,
      this.form.value.email,
      this.form.value.contact, 
      this.form.value.Member,
      this.form.value.tournament,  


      
    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form.reset();
      this.router.navigate(['/registered-people']);
    });

});

  }

}
