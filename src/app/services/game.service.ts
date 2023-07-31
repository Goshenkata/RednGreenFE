import { Injectable } from '@angular/core';
import {Game} from "../models/Game";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SimpleMessage} from "../models/SimpleMessage";
import {GamePublish} from "../models/GamePublish";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private options = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  getPopular(): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:8080/games/popular')
  }

  delete(id: number | undefined):Observable<SimpleMessage> {
    return this.http.delete<SimpleMessage>('http://localhost:8080/games/' + id)
  }

  buy(id: number | undefined):Observable<SimpleMessage> {
    return this.http.post<SimpleMessage>('http://localhost:8080/games/buy/' + id, {});
  }

  publish(game: GamePublish):Observable<SimpleMessage> {
    return this.http.post<SimpleMessage>('http://localhost:8080/games/create', game, this.options)
  }
}
