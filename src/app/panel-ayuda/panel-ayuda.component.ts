import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-panel-ayuda',
  templateUrl: './panel-ayuda.component.html',
  styleUrls: ['./panel-ayuda.component.css']
})
export class PanelAyudaComponent implements OnInit {

  constructor(private productosServicio: ProductosService) { }

  ngOnInit(): void {
  }

  esconderPanel(){

    var panel = document.getElementById("panel");

    panel.style.display = "none";
    panel.style.visibility = "hidden";
  }

  descargaPdf(){
    this.productosServicio.descargaPdf().subscribe(datos => {
      // if (datos['resultado']=='OK') {
      //   // sweetAlert("Dcoumento pdf descargado");
      // }
    });;
  }
}
