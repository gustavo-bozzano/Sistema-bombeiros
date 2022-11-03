import { Component, OnInit } from '@angular/core';
import { IBombeiro } from 'src/interfaces/bombeiro.interface';
import { IGuarnicao } from 'src/interfaces/guarnicao.interface';
import { GuarnicaoService } from 'src/services/guarnicao.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'sistema-bombeiros';
    public guarnicoes: Array<IGuarnicao> = [];
    public equipe: Array<IBombeiro> = [];

    constructor(private guarnicaoService: GuarnicaoService, private toastr: ToastrService) {
    }
    
    ngOnInit(): void {
        this.equipe = [
            { chefeSocorro: true, cpf: '14412802942', militar: true, nascimento: '20/01/2004', nome: 'Ze', sexo: 'm' },
            { chefeSocorro: false, cpf: '43112804949', militar: true, nascimento: '02/09/1994', nome: 'Ze2', sexo: 'm' }
        ];
        this.guarnicaoService.getGuarnicoes().then(guarnicoes => {
            this.guarnicoes = guarnicoes;
        }).catch(err => {
            this.createErrorNotification(err)
        })
    }

    private createErrorNotification(message: string) {
		this.toastr.error(message, 'Erro', {
			progressBar: true,
			timeOut: 15000,
            enableHtml: true,
            positionClass:'toast-bottom-right' 
		});
		return;
	}
}
