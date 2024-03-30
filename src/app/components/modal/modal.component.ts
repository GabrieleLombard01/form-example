import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [FormComponent]
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

}
