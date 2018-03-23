import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';

@Injectable()
export class MoovieProvider {

  
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');

  }
  
  getLatestMovies(page = 1) {
    return this.http.get(API_CONFIG.baseUrl + `/movie/popular?page=${page}&` + API_CONFIG.apiKey);
  }

  getDetailsMovie(id: number) {
    return this.http.get(API_CONFIG.baseUrl + `/movie/${id}?` + API_CONFIG.apiKey);
  }
}
