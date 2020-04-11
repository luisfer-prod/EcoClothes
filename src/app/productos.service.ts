import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


    url='http://localhost/eco_clothes/'; // disponer url de su servidor que tiene las páginas PHP

    constructor(private http: HttpClient) { }

    recuperarTodos() {
      return this.http.get(`${this.url}recuperartodos.php`);
    }

    recuperarClientes() {
      return this.http.get(`${this.url}recuperarClientes.php`);
    }

    alta(articulo) {
      return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));
    }

    baja(codigo:number) {
      return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
    }

    seleccionar(codigo:number) {
      return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
    }

    modificacion(articulo) {
      return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
    }

    registro(cliente) {
      return this.http.post(`${this.url}registro.php`, JSON.stringify(cliente));
    }

    sesion() {
      return this.http.get(`${this.url}sesion.php`);
    }

    cerrarSesion(){
      return this.http.get(`${this.url}cerrarSesion.php`);
    }

    registrarCodigo(codigo:number){
      return this.http.get(`${this.url}registrarCodigo.php?codigo='${codigo}'`);
    }
}

