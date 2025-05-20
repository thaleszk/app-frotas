import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seus-agendamentos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './homepage-motorista.component.html',
  styleUrls: ['./homepage-motorista.component.css']
})
export class HomepageMotoristaComponent {
  agendamentos = [
    
    { dataInicio: new Date(), veiculo: 'Carro A', destino: 'Local 1', status: 'AGENDADO' },
    { dataInicio: new Date(), veiculo: 'Moto B', destino: 'Local 2', status: 'EM_USO' },
    { dataInicio: new Date(), veiculo: 'Van C', destino: 'Local 3', status: 'FINALIZADO' }
  ];
  modalAberto = false;

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  iniciarViagem(agendamento: any) {
    console.log('Iniciar viagem:', agendamento);
    // precisa implementar a logica de iniciar viagem
  }

  finalizarViagem(agendamento: any) {
    console.log('Finalizar viagem:', agendamento);
    // precisa implementar a logica de finalizar viagem
  }

  verDetalhes(agendamento: any) {
    console.log('Ver detalhes:', agendamento);
    // precisa implmentar a logica de detalhes
  }
}
