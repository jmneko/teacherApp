import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  arrUsuario: IUser[] = [];
  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsersService);

  async ngOnInit(): Promise<void> {
    
    this.activatedRoute.params.subscribe( async (params:any) => {
      try {
        let id = params.profesorId;
        
        this.arrUsuario = await this.usuariosService.getAlumnosByProfesorId(id);
        console.log(this.arrUsuario)

      } catch (error) {
        console.log(error)
        
      }
      
    })

  
    
    
    
    
    
    
    
    
    /*try {
      const allUsuarios = await this.usuariosService.getAll();
      this.arrUsuario = allUsuarios.filter(usuario => usuario.rol === 'alumn');
      console.log(this.arrUsuario)
    } catch (error) {
    }
  }

  clasificarUsuarios(usuarios: Usuario[]): Usuario[] {
    const aceptados = usuarios.filter(usuario => usuario.activo === true);
    console.log()
    const solicitud = usuarios.filter(usuario => usuario.activo === false);

    return [...aceptados, ...solicitud];*/
  }

}
