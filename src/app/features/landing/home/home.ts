import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from '../presentation.component/presentation.component';
import { PricingComponent } from '../pricing.component/pricing.component';
import { LoginMenuComponent } from '../login.menu.component/login.menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, PresentationComponent, PricingComponent, LoginMenuComponent],
  styleUrl: './home.scss',
  templateUrl: './home.html',
  standalone: true,
})
export class Home {

}
