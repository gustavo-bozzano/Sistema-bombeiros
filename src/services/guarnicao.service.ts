import { Injectable } from '@angular/core';
import { IBombeiro } from 'src/interfaces/bombeiro.interface';
import { IGuarnicao } from 'src/interfaces/guarnicao.interface';

@Injectable({
    providedIn: 'root'
})
export class GuarnicaoService {
    constructor() { }

    public setGuarnicao(guarnicao: IGuarnicao) {
        // TODO validacao
        localStorage.setItem(guarnicao.callsign, JSON.stringify(guarnicao));
    }

    // public getGuarnicao(callsign: string): Promise<IGuarnicao>{

    // }

    public getGuarnicoes(): Promise<Array<IGuarnicao>> { //mockado
        let bombeiro: Array<IBombeiro> = [
            { chefeSocorro: true, cpf: '13112802942', militar: true, nascimento: '20/09/2004', nome: 'Ze', sexo: 'm' },
            { chefeSocorro: true, cpf: '43112804949', militar: true, nascimento: '02/09/1994', nome: 'Ze2', sexo: 'm' }
        ]
        let guarnicoes: Array<IGuarnicao> = [
            { callsign: 'ABTR-001', veiculo: 'mercedes', descricao: 'teste', equipe: bombeiro, status: 'J10' },
            { callsign: 'ABTR-002', veiculo: 'volvo', descricao: 'teste', equipe: bombeiro, status: 'J11' }
        ];

        return new Promise((resolve) => {
            resolve(guarnicoes);
        })
    }
}
