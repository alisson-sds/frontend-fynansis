export interface InvestimentData {
  codInvest: string;
  tipo: string;
  sigla: string;
  instituicao: string;
  updateValue: (value: string) => void;
  deleteInvestimentFunc: (value: string) => void;
}
