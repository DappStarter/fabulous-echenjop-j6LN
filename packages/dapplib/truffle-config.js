require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain property half clock once teach'; 
let testAccounts = [
"0xff58112ad96ad3ad09d04ad5f269391120815ec78afae8ec6e142d77e61b0875",
"0x48d6f86cbc788396e83c04668c6885b07a2c7be7b2581d954ca5433f98b15d84",
"0x8e5cdc7d4fb8c676b9e94162732921603d55b634790a0bbc8072ea8136a376d9",
"0x14608ac5f12df98053e72d2f701ca302f61ba82c54f403624f697e1f3272f52a",
"0xf9707ed3aa3065f5610798eb16926221d24c10ed7be168a337c8db8e89d282ad",
"0x43d8db4f9363da6e35e1d24a1b57b04135c89bfa9c0944a3294afa5011a16bde",
"0x2402ecf2771d3cc326fe2527428a320c43b7525b867f80540fe307c8224bf382",
"0x10c614b21c51fb41c21ee70efe10ffbed05c875d976a9196036b6fb343a576a1",
"0xf5d6a273c20cb8a00d43c634ecd96ed898a524f1dfbeeb5b9727e497f4046194",
"0xef638d2e480f23917f0d5ce06f2a626f41992dea9904e68c92aee6a9aeaa986b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


