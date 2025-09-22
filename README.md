# 📘 Controle de Notas (TypeScript)

Este projeto é um **sistema de controle de notas no terminal**, desenvolvido em **TypeScript**.  
O programa permite que o usuário insira as notas de **4 semestres**, calcula a **média final** e informa se o aluno está **✅ Aprovado** ou **❌ Reprovado** (média mínima: **60**).

---

## 🚀 Como rodar o projeto

### 1. Instalar dependências
Na pasta do projeto, execute:
```bash
npm init -y
npm i -g typescript --save
npm i ts-node --save
npm i @types/prompt-sync
npm install prompt-sync
```

### 2. Compilar o código TypeScript
```bash
npx tsc
```

### 3. Rodar o programa
```bash
npx tsx main.ts
```

> ⚠️ Caso não tenha `ts-node` instalado, rode:
```bash
npm install -g ts-node typescript
```

---

## 📂 Estrutura do projeto

```
PROVACONTROLEDENOTA/
├── controledeNotas/
│   ├── controle.ts   # Classe Controle (lógica do sistema)
│   └── main.ts       # Programa principal (menu e interação no terminal)
├── node_modules/     # Dependências
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## 🖥️ Exemplo de execução

```
========= 📚 Menu =========
1️⃣  Lançar Notas
9️⃣  Sair 🚪
👉 Escolha uma opção: 1

✏️  Digite a nota 1: 70
✏️  Digite a nota 2: 55
✏️  Digite a nota 3: 80
✏️  Digite a nota 4: 60

====== 📊 Resultado ======
📝 Notas: 70, 55, 80, 60
📈 Média: 66.25
🎯 Situação: ✅ Aprovado
==========================
```

---

## 🎯 Funcionalidades
- Entrada de 4 notas (1 por semestre).
- Cálculo automático da média.
- Verificação de aprovação (média mínima **60**).
- Exibição de resultado formatado com ícones.

---

## 🔮 Melhorias Futuras
- Permitir cadastrar **mais semestres** (ex: 8 notas).
- Salvar histórico de alunos em arquivo `.json`.
- Gerenciar **múltiplos alunos**.

---

## 👨‍💻 Autor
Projeto desenvolvido por **Rafael A. Lorencato** como prática de **TypeScript**.
