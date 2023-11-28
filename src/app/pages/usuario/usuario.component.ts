import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/interfaces/user.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  @Input() miUsuario: IUser | any;

}
