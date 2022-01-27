import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Service/service.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {

  modelUsuario = new Usuario();
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  createUsuario(usuario:Usuario)
  {
    this.service.createUsuario(usuario).subscribe(data=>{this.router.navigate(["screen2"]);});
  }

}
