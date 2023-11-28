import { Component, inject } from '@angular/core';
import { IUser } from 'src/app/models/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  arrUsuario: IUser[] = [];
  usuariosService = inject(UsersService);

  async ngOnInit(): Promise<void> {
    
    
    try {
      const profesorId = 2;

      const alumnos = await this.usuariosService.getAlumnosByProfesorId(profesorId);

      this.arrUsuario = alumnos;
      console.log(this.arrUsuario)
    } catch (error) {
      console.log(error);
    }
  
    
    
    
    
    
    
    
    
    
    
    
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
