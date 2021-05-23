import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formSend: boolean = false;
  fileUrl: string = './assets/doc/Curso Tecnologia Educativa.pdf';

  constructor() { }

  ngOnInit(): void {
  }

  loginSesion(form) {
    if (form.valid) {
      let dataForm = form.value;
      console.log(dataForm);
      this.formSend = true;
    } else {
      console.log('no válido');
    }
  }

  showDoc() {
    window.open(this.fileUrl, '_blank');
  }

}