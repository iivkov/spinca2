import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'spinca2-ang';

  name : string = "Ivan";
  buttonDisabled : boolean = false;
  inputText : string = "pp";
  polje = [1, 2, 3, 4, 5];

  varijablaIzAppKomponente : string = "aa";

  polje2 = [
    {
      id:1,
      opis: "ssd",
      pojam: "tz"
    },
    {
      id:2,
      opis: "455",
      pojam: "hj"
    }
  ];

  constructor(){
    this.name = "drugo ime"
  }

  typing(){
    console.log("tipkam");
  }

  buttonClick() {
    this.buttonDisabled = !this.buttonDisabled;
  }

  eventIzKomponente(e: any){
    console.log(e);
  }

  clickNaKomponentu(){
    console.log('click event na komponenti ');
  }

}
