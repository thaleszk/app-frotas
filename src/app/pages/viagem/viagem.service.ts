import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IniciarViagemRequest {
  quilometragem: number;
  observacao?: string;
}

export interface Viagem {
  id: number;
  status: string;
  dataHoraInicio: string;
  quilometragemInicio: number;
  observacaoInicio?: string;
}

@Injectable({
  providedIn: 'root', // Torna o serviço disponível globalmente
})
export class ViagemService {
  private apiUrl = 'http://localhost:8080/api/viagens';

  constructor(private http: HttpClient) {}

  /**
   * Inicia uma viagem.
   * @param id ID da viagem ou do veículo (depende de como é modelado no backend)
   * @param dados Objeto contendo quilometragem e observação
   */
  iniciarViagem(id: number, dados: IniciarViagemRequest): Observable<Viagem> {
    return this.http.post<Viagem>(`${this.apiUrl}/${id}/iniciar`, dados);
  }

  /**
   * Busca o histórico de viagens do motorista logado.
   */
  listarViagens(): Observable<Viagem[]> {
    return this.http.get<Viagem[]>(`${this.apiUrl}`);
  }

  /**
   * Encerrar uma viagem (se fizer parte do escopo futuro).
   */
  encerrarViagem(id: number, dados: any): Observable<Viagem> {
    return this.http.post<Viagem>(`${this.apiUrl}/${id}/encerrar`, dados);
  }
}
