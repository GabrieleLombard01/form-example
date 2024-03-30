import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [ReactiveFormsModule]
})
export class FormComponent implements OnInit {
  CFform!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.CFform = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      loc: ['', Validators.required],
      prov: ['', Validators.required],
      sex: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.CFform.valid) {
      const formValues = this.CFform.value;
      const { name, surname, loc, prov, sex, date } = formValues;
      this.saveData(name, surname, loc, prov, sex, date);
    } else {
      // Gestisci il caso in cui il form non sia valido
    }
  }

  saveData(name: string, surname: string, loc: string, prov: string, sex: string, date: string): void {
    const nameInitials = this.getNameInitials(name);
    const surnameInitials = this.getSurnameInitials(surname);
    const yearLastTwoDigits = this.getYearLastTwoDigits(date);
    const month = date.substring(5, 7);
    const monthLetter = this.getMonthLetter(month);
    const day = date.substring(8, 10);
    const lastChar = "N";

    let dayNumber = parseInt(day, 10);
    if (sex.toUpperCase() === 'F') {
      dayNumber += 40;
    }

    name = name.toUpperCase();
    surname = surname.toUpperCase();
    loc = loc.toUpperCase();
    prov = prov.toUpperCase();
    sex = sex.toUpperCase();

    const comuneCode = this.getComuneCode(loc);

    console.log("CF-> ", surnameInitials + nameInitials + yearLastTwoDigits + monthLetter + dayNumber + comuneCode + lastChar);
  }

  getSurnameInitials(surname: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = '';
    let vowelCount = 0;

    for (const char of surname.toLowerCase()) {
      if (!vowels.includes(char)) {
        consonants += char;
      } else {
        vowelCount++;
      }

      if (consonants.length === 3) {
        break;
      }
    }

    while (consonants.length < 3) {
      consonants += vowels[vowelCount % 5];
      vowelCount++;
    }

    return consonants.toUpperCase();
  }

  getNameInitials(name: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = '';
    let consonantCount = 0;

    for (const char of name.toLowerCase()) {
      if (!vowels.includes(char)) {
        consonantCount++;
        if (consonantCount === 1 || consonantCount === 3 || consonantCount === 4) {
          consonants += char;
        }
      }
      if (consonantCount === 4) {
        break;
      }
    }

    while (consonants.length < 3) {
      consonants += vowels.shift() || '';
    }

    return consonants.toUpperCase();
  }

  getYearLastTwoDigits(date: string): string {
    const year = date.substring(0, 4);
    const lastTwoDigits = year.slice(-2);
    return lastTwoDigits;
  }

  getMonthLetter(month: string): string {
    const monthMapping: { [key: string]: string } = {
      '01': 'A',
      '02': 'B',
      '03': 'C',
      '04': 'D',
      '05': 'E',
      '06': 'H',
      '07': 'L',
      '08': 'M',
      '09': 'P',
      '10': 'R',
      '11': 'S',
      '12': 'T'
    };

    return monthMapping[month];
  }

  getComuneCode(comune: string): string {
    const comuneMap: { [key: string]: string } = {
      'MILANO': 'F205',
      'ROMA': 'H501',
      'NAPOLI': 'F839',
      'TORINO': 'L219',
      'CHIVASSO': 'C665',
      'VERCELLI': 'L750',
      'PALMI': 'G288'
    };

    if (comuneMap.hasOwnProperty(comune)) {
      return comuneMap[comune];
    } else {
      return 'XXXX';
    }
  }
}
