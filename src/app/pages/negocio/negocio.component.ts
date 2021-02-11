import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.scss']
})
export class NegocioComponent {

  cod: any;
  constructor(private router: ActivatedRoute) {
      router.params.subscribe(parametros => {
        this.cod = parametros[' id'];
        console.log(this.cod);
      });
  }

}
