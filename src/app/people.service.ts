import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './registration/registration.model';
import { map, take, switchMap, tap} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface peopleData{
  name:string,
  email:string,
  contact:number,
  Member:string,
  tournament:string, 
  userId: string;
}
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private _peoples = new BehaviorSubject<People[]>([])
  allpeople: People[];
  get peoples(){
  return this._peoples.asObservable();
  peopleId: String
}
peopleId: String

  constructor(
    private http:HttpClient,
    ) { }

  addpeople(
    name:string,
    email:string,
    contact:number,
    Member:string,
    tournament:string,   
  ){
    console.log(name,email,contact,Member,tournament);

    let generatedId: string;
    const newPeople = new People(
      Math.random().toString(),
      name,
      email,
      contact,
      Member,
      tournament,
      'abc'
      
    );
    return this.http
    .post<{Name: string}>
    ("https://mlbb-e2ac6-default-rtdb.firebaseio.com/registered-People.json",  // .jons only present in firebase.
  {
    ...newPeople,
    id: null
  })
    .pipe(
      switchMap(resData =>{
        generatedId = resData.Name;
        return this.peoples;
      }),
      take(1),
      tap(people =>{
        newPeople.id = generatedId;
        this._peoples.next(people.concat(newPeople))
      })
    )
  }


  fetchPeople() {
    return this.http
      .get<{ [key: string]: peopleData }>(
        'https://mlbb-e2ac6-default-rtdb.firebaseio.com/registered-People.json'
      )
      .pipe(
        map(resData => {
          const places = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              places.push(
                new People(
                  key,
                  resData[key].name,
                  resData[key].email,
                  resData[key].contact,
                  resData[key].Member,
                  resData[key].tournament,
                  resData[key].userId
                )
              );
            }
          }
          return places;
          // return [];
        }),
        tap(people => {
          this._peoples.next(people);
        })
      )
  }
  cancelBooking(deleteid: string){
    return this.http
    .delete(
      `https://mlbb-e2ac6-default-rtdb.firebaseio.com/${deleteid}.json`
    )
    .pipe(
      switchMap(()=>{
        return this.peoples;
      }),
      take(1),
      tap(peoples =>{
        this._peoples.next(peoples.filter(b => b.id!== deleteid));
      })
    );
  }

   }

