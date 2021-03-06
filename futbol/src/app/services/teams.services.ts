import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { Team } from '../model/Team';

@Injectable ( {
    providedIn: 'root'
})

export class TeamsService {
    // private teamsUrl = 'api/table';  // URL to web api   
     



    constructor (private http: HttpClient, private router: Router, private route: ActivatedRoute) {


    }


    

    public getTeams (): Observable<Team []> {
      const httpOptions = {
        headers: new HttpHeaders ({
          'Authorization': `Bearer ${localStorage.getItem('auth')}`
        })
      }
       return this.http.get<Team []>(`${environment.apiUrl}/teams`,httpOptions).pipe(map(items => items.sort(this.sortByName)))
        //return this.http.get<Team []>(this.teamsUrl).pipe(map(items => items.sort(this.sortByName)))  //conection to the url simulated API
       .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
       );
    }

    public getTeamsCards (array): Observable<Team []> {
      const httpOptions = {
        headers: new HttpHeaders ({
          'Authorization': `Bearer ${localStorage.getItem('auth')}`
        })
      }
       return this.http.get<Team []>(`${environment.apiUrl}/teams`, httpOptions)
       //return this.http.get<Team []>(this.teamsUrl)  //conection to the url simulated API
       .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
       );
    }

    public getConsult() {
      const httpOptions = {
        headers: new HttpHeaders ({
          'Authorization': `Bearer ${localStorage.getItem('auth')}`
        })
      }
      return this.http.get(`${environment.apiUrl}/teams`, httpOptions);
    }
  
  sortByName(a,b) {
  if (a.position < b.position)
    return -1;
  if (a.position > b.position)
    return 1;
  return 0;
}

public searchTeamId (id): Observable<Team> { 
  const httpOptions = {
        headers: new HttpHeaders ({
          'Authorization': `Bearer ${localStorage.getItem('auth')}`
        })
      }

      return this.http.get<Team>(`${environment.apiUrl}/teams/${id}`, httpOptions)
  //     return this.http.get<Team>(`${this.teamsUrl}/${id}`)
      //  .pipe(
      //      catchError((err) => {
      //          alert('There was an error.');
      //          return of(err);
      //       })
      //  );
}



public updateTeams (team: Team): Observable<Team> {
  // console.log(team);
  const httpOptions = {
        headers: new HttpHeaders ({
          'Authorization': `Bearer ${localStorage.getItem('auth')}`
        })
      }
    return this.http.put<Team>(`${environment.apiUrl}/teams/`, team, httpOptions)
 //   return this.http.put<Team>(`${this.teamsUrl}/${team.id}`, team)
  .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
      );
}

}

