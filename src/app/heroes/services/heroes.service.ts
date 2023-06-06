import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { environments } from "../../../environments/environments";
import { Hero } from "../interfaces/hero.interface";

@Injectable({ providedIn: 'root'})
export class HeroesService{

  private baseUrl = environments.baseUrl;

  constructor(private http: HttpClient) {
  }

  getHeroes():Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl}/heroes` );
  }

  getHeroById( id: string ): Observable<Hero | undefined> {

    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id}`)
      .pipe(
        catchError( () => of(undefined) )
      );
  }

  getSuggestions( q: string ): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ q }&_limit=6`);
  }

}
