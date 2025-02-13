import { Component } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  recognizedText: string = '';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      Tesseract.recognize(file as any, 'eng', {
        logger: (m: any) => console.log(m)
      }).then((result: { data: { text: string } }) => {
        this.recognizedText = result.data.text;
      });
    }
  }
}
