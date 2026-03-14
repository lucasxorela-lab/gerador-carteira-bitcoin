# Gerador de Carteiras Bitcoin - Desafio DIO

## 📋 Descrição
Projeto desenvolvido para o desafio de Smart Contracts da DIO (Bootcamp Binance).  
Gerador de carteiras Bitcoin que cria pares de chave pública/privada e endereços para receber e enviar criptomoedas.

## 🚀 Funcionalidades
- ✅ Geração de carteiras Bitcoin (testnet/mainnet)
- ✅ Criação de mnemônico BIP39 (12 palavras)
- ✅ Geração de endereço nativo segwit (bech32)
- ✅ Importação da carteira no Electrum
- ✅ Validação no explorador de blocos

## 🛠️ Tecnologias
- Node.js
- bip39, bip32, bitcoinjs-lib
- Electrum (carteira desktop)

## 📦 Como usar
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute: `node gerar.js`

## 🔑 Exemplo de saída

## 💻 Importação no Electrum
- Rede: testnet
- Tipo: Carteira padrão
- Semente: [12 palavras geradas]
- Caminho de derivação: m/84'/1'/0'/0

## 🔍 Validação no Block Explorer
[https://mempool.space/testnet/address/tb1qdwpvuvplpxaest83qtmvss7zvud23mm33hq3uj](https://mempool.space/testnet/address/tb1qdwpvuvplpxaest83qtmvss7zvud23mm33hq3uj)

## 📝 Observação
Devido a instabilidades nos faucets testnet, a transação de envio foi validada tecnicamente através da geração da carteira e importação no Electrum.

## 👨‍💻 Autor
Lucas Andrade
