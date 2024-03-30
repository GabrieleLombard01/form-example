import { Component } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBtnComponent } from './components/modal-btn/modal-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModalComponent, ModalBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-example';
}
