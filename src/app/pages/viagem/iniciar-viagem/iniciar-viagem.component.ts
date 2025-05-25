import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViagemService } from '../viagem.service';

@Component({
  selector: 'app-iniciar-viagem',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './iniciar-viagem.component.html',
})
export class IniciarViagemComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private viagemService: ViagemService,
    private router: Router
  ) {
    this.form = this.fb.group({
      quilometragem: [null, [Validators.required, Validators.min(0)]],
      observacoes: [''],
    });
  }

  iniciar() {
    if (this.form.invalid) return;

    const { quilometragem, observacoes } = this.form.value;

   this.viagemService.iniciarViagem(123, { quilometragem, observacoes })
      .subscribe({
        next: () => {
          alert('Viagem iniciada com sucesso!');
          this.router.navigate(['/homepage-motorista']); // redireciona após sucesso
        },
        error: () => {
          alert('Erro ao iniciar viagem.');
        }
      });
  }
}
