import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudClase } from 'src/app/models/interfaces/peticion.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  arrUsuario: SolicitudClase[] = [];

  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsersService);

  async ngOnInit(): Promise<void> {
    
    this.activatedRoute.params.subscribe( async (params:any) => {
      try {
        let id = params.profesorId;
        
        this.arrUsuario = await this.usuariosService.getAlumnosByProfesorId(id);
        console.log(this.arrUsuario);
      } catch (error) {
        console.log(error)
        
      } 
    })
  }
}
