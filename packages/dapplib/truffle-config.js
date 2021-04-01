require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inner drink fortune strategy guard render remain uncover guess nature tail spell'; 
let testAccounts = [
"0x11a8dada960dcfbdfc9905f1360c6744e25dc18cf74843b3ecec0663f965af93",
"0x265f35116112ea5562df3733bbef1f7b58fb38d79868a16b335a2e8a144737a1",
"0xe7a9434cb9e0f5254949e2d53be9bac8683cf1abbdb575bfa7321752604a2e63",
"0x8bf7a28351a1776a16be116223259e15d6bc01478ee2fafd5938e7821f932eee",
"0xa085def4108ec6159c24500ce35d7a07e656214f35b42b5bc474e16763f82eb0",
"0x08f7dd31755b479830c5acdcc3f74a24a1b15edfd70b51ec618c4e04d001b974",
"0xf66f4144c77f3f7a83cd2af532dcb6c23148060ff06f3e57929e33dad3ff30ba",
"0x7895b0125ef96b7fb0c6d8a7467ca40b6e062461c2431bbcdc5f9b84d2cb07d5",
"0x23f96e6b9d6219bf6f86f60c3b0b5f719589f1049cd311bbf63a95a244fe087b",
"0xcf90ecae9a6337cf063ff1df23b4acfc38c4f6ae71980e71303fab1f081d5a6f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

