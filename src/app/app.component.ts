import { Component } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBtnComponent } from './components/modal-btn/modal-btn.component';
import { CFComponent } from './components/CF/CF.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModalComponent, ModalBtnComponent, CFComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-example';
}
