import { IBombeiro } from "./bombeiro.interface";

export interface IGuarnicao {
    veiculo: string | undefined;
    callsign: string;
    equipe: Array<IBombeiro> | undefined;
    descricao: string | undefined;
    status: string | undefined;
}