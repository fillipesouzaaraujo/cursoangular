import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  formSubmited = false;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      aceitoTermos: ['', [Validators.required]]
    });

  }

  ngOnInit() {
  }

  inscreverSe(): void {
    this.formSubmited = true;
    if (this.form.valid) {
      console.log('chamou!');
    }
  }
}
