import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

afiliados: any[] = [];


constructor(private http: HttpClient) {
this.cargar_afiliados();
}


cargar_afiliados(){
  this.http.get('https://negocios-e8494-default-rtdb.firebaseio.com/afiliados.json')
  .subscribe( (resp: any) => {
    this.afiliados = resp;
    console.log(this.afiliados);
  });
}



}
