import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'verimatrix-coding-challenge';
  enteredNumber: number;
  isFormValid = true;

  convertToWords = '';
  numbersToWordsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.numbersToWordsForm = this.formBuilder.group({
      inputNumber: [
        '',
        [Validators.required, Validators.min(1), Validators.max(99999)]
      ]
    });

    this.numbersToWordsForm.statusChanges.subscribe((val) => {
        console.log(this.enteredNumber);
        if (val == 'VALID') {
            this.isFormValid = true;
        }

        if (val == 'INVALID' && this.enteredNumber != undefined) {
            console.log('in valid');
            this.isFormValid = false;
        }
    });

  }
  convertNumberToWords(amount) {
    if (amount != undefined) {
      console.log(amount);
      const words = new Array();
      words[0] = '';
      words[1] = 'One';
      words[2] = 'Two';
      words[3] = 'Three';
      words[4] = 'Four';
      words[5] = 'Five';
      words[6] = 'Six';
      words[7] = 'Seven';
      words[8] = 'Eight';
      words[9] = 'Nine';
      words[10] = 'Ten';
      words[11] = 'Eleven';
      words[12] = 'Twelve';
      words[13] = 'Thirteen';
      words[14] = 'Fourteen';
      words[15] = 'Fifteen';
      words[16] = 'Sixteen';
      words[17] = 'Seventeen';
      words[18] = 'Eighteen';
      words[19] = 'Nineteen';
      words[20] = 'Twenty';
      words[30] = 'Thirty';
      words[40] = 'Forty';
      words[50] = 'Fifty';
      words[60] = 'Sixty';
      words[70] = 'Seventy';
      words[80] = 'Eighty';
      words[90] = 'Ninety';
      amount = amount.toString();
      const atemp = amount.split('.');
      let number = atemp[0].split(',').join('');
      let n_length = number.length;
      let words_string = '';
      if (n_length <= 9) {
        let n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        let received_n_array = new Array();
        for (let i = 0; i < n_length; i++) {
          received_n_array[i] = number.substr(i, 1);
        }
        for (let i = 9 - n_length, j = 0; i < 9; i++, j++) {
          n_array[i] = received_n_array[j];
        }
        for (let i = 0, j = 1; i < 9; i++, j++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            if (n_array[i] == 1) {
              n_array[j] = 10 + parseInt(n_array[j].toString());
              n_array[i] = 0;
            }
          }
        }
        let value = 0;
        for (let i = 0; i < 9; i++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            value = n_array[i] * 10;
          } else {
            value = n_array[i];
          }
          if (value != 0) {
            words_string += words[value] + ' ';
          }
          if (
            (i == 5 && value != 0) ||
            (i == 4 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string += 'Thousand ';
          }
          if (
            i == 6 &&
            value != 0 &&
            n_array[i + 1] != 0 && n_array[i + 2] != 0
          ) {
            words_string += 'Hundred and ';
          } else if (i == 6 && value != 0) {
            words_string += 'Hundred ';
          }
        }
        words_string = words_string.split('  ').join(' ');
      }
      console.log(words_string);
      this.convertToWords = words_string;
      return words_string;
    }
  }
}
