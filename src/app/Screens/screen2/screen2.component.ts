import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import {ServiceService} from '../../Service/service.service';
@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  Usuarios:Usuario[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(data=>{this.Usuarios=data;});
  }

  deleteUsuario(id:number)
  {
    this.service.deleteUsuario(id).subscribe(data=>{this.ngOnInit(); });
  }
  updateUsuario(id:number)
  {
    this.router.navigate(["screen3",{id}]);
  }
}
