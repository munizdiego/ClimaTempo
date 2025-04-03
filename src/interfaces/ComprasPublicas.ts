export interface Parametros {
  dataInicial: string;
  dataFinal: string;
  codigoModalidadeContratacao: number;
  uf: string;
  codigoMunicipioIbge?: number;
  cnpj?: string;
  idUsuario?: string;
  pagina: number;
  tamanhoPagina: number;
}

export interface ParametroFiltrado {

  dataInicial: string;
  dataFinal: string;
  codigoModalidadeContratacao: number;
  uf: string;
  codigoMunicipioIbge?: number;
  cnpj?: string;
  idUsuario?: string;
  pagina: number;
}

