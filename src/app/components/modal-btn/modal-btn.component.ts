import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-btn',
  templateUrl: './modal-btn.component.html',
  styleUrls: ['./modal-btn.component.css'],
  standalone: true,
})
export class ModalBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  
}
