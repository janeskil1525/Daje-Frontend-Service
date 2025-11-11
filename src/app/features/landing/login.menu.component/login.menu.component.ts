
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-login-menu',
  imports: [CommonModule, ButtonModule, RouterModule],
  standalone: true,
  templateUrl: './login.menu.component.html',
  styleUrl: './login.menu.component.scss',
})
export class LoginMenuComponent {

}
