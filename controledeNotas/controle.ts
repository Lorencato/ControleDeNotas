export class Controle {
  constructor(
    private _nota1: number,
    private _nota2: number,
    private _nota3: number,
    private _nota4: number,
    private _media: number
  ) {}

  public get pnota(): number {
    return this._nota1;
  }

  public set pnota(pnota: number) {
    this._nota1 = pnota;
  }

  public get snota(): number {
    return this._nota2;
  }

  public set snota(snota: number) {
    this._nota2 = snota;
  }

  public get rnota(): number {
    return this._nota3;
  }

  public set rnota(rnota: number) {
    this._nota3 = rnota;
  }

  public get xnota(): number {
    return this._nota4;
  }

  public set xnota(xnota: number) {
    this._nota4 = xnota;
  }

  public get media(): number {
    return this._media;
  }

  public set media(media: number) {
    this._media = media;
  }

  avaliacao(pnota: number, snota: number, rnota: number, xnota: number): void {
    this.media = (pnota + snota + rnota + xnota) / 4;
    if (this.media >= 60) {
      console.log("Aprovado");
    } else {
      console.log("Reprovado");
    }
  }
}
    