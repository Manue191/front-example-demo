import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {
  modelUsuario:Usuario;
  constructor(private service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getUsuario(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data=>{this.modelUsuario=data;});
  }
  updateUsuario(usuario:Usuario)
  {
    this.service.updateUsuario(usuario).subscribe(data=>{this.router.navigate(["screen2"]);});
  }

}
