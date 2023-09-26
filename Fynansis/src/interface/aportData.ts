export interface AportData {
  codAport: string;
  dataCompra: string;
  valorCompra: number;
  numCotas: number;
  deleteAporteFunc: (value: string) => void;
  detalheAporte?: boolean;
  disable?: boolean;
  callBack: () => any;
}
