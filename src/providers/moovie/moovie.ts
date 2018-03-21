import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');

  }
  
  getLatestMovies() {
    return this.http.get('');
  }

}
