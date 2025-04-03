export interface Contratacao {
  modoDisputaId: number;
  amparoLegal: {
    codigo: number;
    descricao: string;
    nome: string;
  };
  dataAberturaProposta: string;
  dataEncerramentoProposta: string;
  srp: boolean;
  orgaoEntidade: {
    cnpj: string;
    razaoSocial: string;
    poderId: string;
    esferaId: string;
  };
  anoCompra: number;
  sequencialCompra: number;
  informacaoComplementar: string;
  processo: string;
  objetoCompra: string;
  linkSistemaOrigem: string;
  justificativaPresencial: string | null;
  unidadeSubRogada: string | null;
  orgaoSubRogado: string | null;
  valorTotalHomologado: number | null;
  dataInclusao: string;
  dataPublicacaoPncp: string;
  dataAtualizacao: string;
  numeroCompra: string;
  unidadeOrgao: {
    ufNome: string;
    ufSigla: string;
    municipioNome: string;
    codigoUnidade: string;
    nomeUnidade: string;
    codigoIbge: string;
  };
  modalidadeId: number;
  linkProcessoEletronico: string | null;
  dataAtualizacaoGlobal: string;
  numeroControlePNCP: string;
  tipoInstrumentoConvocatorioNome: string;
  tipoInstrumentoConvocatorioCodigo: number;
  valorTotalEstimado: number;
  modalidadeNome: string;
  modoDisputaNome: string;
  situacaoCompraId: number;
  situacaoCompraNome: string;
  usuarioNome: string;
}
