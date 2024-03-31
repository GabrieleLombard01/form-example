import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-CF',
  templateUrl: './CF.component.html',
  styleUrls: ['./CF.component.css'],
  standalone: true
})
export class CFComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('cfText', {static: false}) cfText!: ElementRef;

  copyToClipboard() {
    const textToCopy = this.cfText.nativeElement.innerText;
    // Copia il testo negli appunti
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        window.alert('Testo copiato negli appunti');
      })
      .catch(err => {
        console.log('Errore durante la copia del testo negli appunti:', err);
      });
  }

}
