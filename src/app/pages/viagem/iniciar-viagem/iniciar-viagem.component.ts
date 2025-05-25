import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViagemService, IniciarViagemRequest } from '../viagem.service';

@Component({
  selector: 'app-iniciar-viagem',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './iniciar-viagem.component.html',
})
export class IniciarViagemComponent {
  form: FormGroup;
  sucesso = false;
  erro = '';

  constructor(private fb: FormBuilder, private viagemService: ViagemService) {
    this.form = this.fb.group({
      quilometragem: [null, [Validators.required, Validators.min(0)]],
      observacao: [''],
    });
  }

  iniciarViagem() {
    if (this.form.invalid) {
      this.erro = 'Preencha a quilometragem corretamente.';
      return;
    }
    this.erro = '';
    const dados: IniciarViagemRequest = this.form.value;

    // Aqui substitua 1 pelo ID do veículo/motorista conforme seu modelo
    this.viagemService.iniciarViagem(1, dados).subscribe({
      next: (res) => {
        this.sucesso = true;
        this.form.reset();
      },
      error: (e) => {
        this.erro = 'Erro ao iniciar viagem. Tente novamente.';
        this.sucesso = false;
      },
    });
  }
}
