import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  //Url = "http://localhost:9001/usuarios";

  getUsuarios()
  {
    return this.http.get<Usuario[]>("https://example-demo-api-rest.herokuapp.com/usuarios");
  }
  getUsuario(id:number)
  {
    return this.http.get<Usuario>("https://example-demo-api-rest.herokuapp.com/usuario/"+id);
  }
  updateUsuario(usuario:Usuario)
  {
    return this.http.put<Usuario>("https://example-demo-api-rest.herokuapp.com/update",usuario);
  }
  createUsuario(usuario:Usuario)
  {
    return this.http.post<Usuario>("https://example-demo-api-rest.herokuapp.com/create",usuario);
  }
  deleteUsuario(id:number)
  {
    return this.http.delete<Usuario>("https://example-demo-api-rest.herokuapp.com/delete/"+id);
  }
}
