import { Component } from '@angular/core';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {

  gohome(){
    const cardnum = (document.getElementById('cardnum') as HTMLInputElement).value.toString();
    const valid= (document.getElementById('valid') as HTMLInputElement).value.toString();
    const cv= (document.getElementById('cv') as HTMLInputElement).value.toString();
    const name= (document.getElementById('name') as HTMLInputElement).value.toString();
    const mail= (document.getElementById('mail') as HTMLInputElement).value.toString();

    if  (! cardnum || ! valid || ! cv || ! name || ! mail) {
     alert("Please fill out all the fields in the form.") ;
    }
    else {     document.write("Redirecting to 'verify' page...");
              window.location.href="jdyd"  }     }



}
