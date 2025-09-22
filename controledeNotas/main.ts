import prompt from "prompt-sync";
import { Controle } from "./controle";

let teclado = prompt();
let option: number = 0;
let control: Controle = new Controle();

while (option !== 9) {
  console.log("\n========= 📚 Menu =========");
  console.log("1️⃣  Lançar Notas");
  console.log("9️⃣  Sair 🚪");

  option = +teclado("👉 Escolha uma opção: ");

  switch (option) {
    case 1:
      let notas: number[] = [];
      for (let i = 1; i <= 4; i++) {
        notas.push(+teclado(`✏️  Digite a nota ${i}: `));
      }
      control.notas = notas;
      control.mostrarResultado();
      break;

    case 9:
      console.log("👋 Saindo do sistema...");
      break;

    default:
      console.log("⚠️  Opção inválida, tente novamente!");
  }
}
