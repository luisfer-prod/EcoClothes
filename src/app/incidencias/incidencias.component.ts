import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  codigoCli=null;

  texto = {
   descripcion:""
  }

  num= {
    nivel:0
  };

  constructor(private productosServicio: ProductosService) { }

  ngOnInit(): void {

    this.quitarSticky();
  }

  quitarSticky(){

    var navegador = document.getElementById("navegador");

    navegador.style.position='static';

    // top:10px;
    // position: sticky;
   }


  registrarReclamacion(){

    this.codigoCliente();

    console.log(typeof(this.num.nivel[0]));

    if (typeof(this.codigoCli)=='object' && this.codigoCli.length!=0) {

      // if (this.codigoCli['codigo'][0]!='') {

        this.productosServicio.registrarReclamacion(this.num.nivel[0],this.texto.descripcion).subscribe(datos => {
          this.codigoCli=null;
        });


      swal('Reclamación registrada. En breves momento comprobaremos su problema');

    } else {
      swal('No esta registrado como cliente en nuestra plataforma. Para realizar una reclamación, debe estar registrado');
        this.codigoCli=null;
    }
  }

  codigoCliente(){
    this.productosServicio.codigoCliente().subscribe(result => this.codigoCli = result);
  }

}
