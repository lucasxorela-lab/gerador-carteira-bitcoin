// Importa as bibliotecas
const bip39 = require('bip39');
const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1');

// Define a rede (testnet - para testes)
const network = bitcoin.networks.testnet;

// Gera um mnemônico (12 palavras)
const mnemonic = bip39.generateMnemonic();
console.log('================== GUARDE ISSO COM SEGURANÇA ==================');
console.log('Mnemônico (12 palavras):', mnemonic);
console.log('==============================================================');

// Converte o mnemônico para seed (buffer)
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Cria a raiz da carteira - VERSÃO CORRETA!
const root = bip32.BIP32Factory(ecc).fromSeed(seed, network);

// Caminho de derivação para endereço nativo segwit (bech32) na testnet
const path = "m/84'/1'/0'/0/0";
const child = root.derivePath(path);

// Gera o endereço
const { address } = bitcoin.payments.p2wpkh({ pubkey: child.publicKey, network });

// Mostra os resultados
console.log('\n=== DADOS DA CARTEIRA GERADA ===');
console.log('Endereço para receber Bitcoin (testnet):', address);
console.log('Chave privada (WIF - não compartilhe!):', child.toWIF());
console.log('===================================\n');