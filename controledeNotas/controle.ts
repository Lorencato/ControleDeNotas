export class Controle {
  private _notas: number[];

  constructor(notas: number[] = []) {
    this._notas = notas;
  }

  get notas(): number[] {
    return this._notas;
  }

  set notas(notas: number[]) {
    this._notas = notas;
  }

  get media(): number {
    if (this._notas.length === 0) return 0;
    return this._notas.reduce((acc, val) => acc + val, 0) / this._notas.length;
  }

  status(): string {
    return this.media >= 60 ? "✅ Aprovado" : "❌ Reprovado";
  }

  mostrarResultado(): void {
    console.log("\n====== Resultado ======");
    console.log("Notas:", this._notas.join(", "));
    console.log("Média:", this.media.toFixed(2));
    console.log("Situação:", this.status());
    console.log("=======================\n");
  }
}
