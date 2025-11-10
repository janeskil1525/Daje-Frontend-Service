import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from '../presentation.component/presentation.component';
import { PricingComponent } from '../pricing.component/pricing.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PresentationComponent, PricingComponent],
  styleUrl: './home.scss',
  templateUrl: './home.html',
  standalone: true,
})
export class Home {

}
