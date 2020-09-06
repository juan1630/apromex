import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { URLDEV } from '../../config/services.config'
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private _http : HttpClient
  ) { }

  agregarSociedad(body ) {
    
    let url = `${URLDEV}/registro/sociedad`;
   return this._http.post( url, body )
  }




}




