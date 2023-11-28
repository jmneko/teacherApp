import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  miUsuario: IUser | any;

  activatedRoute = inject(ActivatedRoute);
  userService = inject(UsersService);

  ngOnInit() : void {

    /* Recuperacion de datos del usuario*/ 

    this.activatedRoute.params.subscribe((params: any) => {
      let id = params.usuarioId;
      this.userService.getById(id).subscribe(data => {
        this.miUsuario = data[0];
      })
    })
  }

}
