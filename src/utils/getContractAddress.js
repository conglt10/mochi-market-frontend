const contractAddress = {
  //BSC Mainnet
  56: {
    AddressesProvider: '0xc6732Eb8A138052D9e3DFEB66cB0175C94f7e970',
    NftList: '0xC8224F5511fae865793B4235b1aA02011637e742',
    Vault: '0xDa5F1f8d32C094a6c0fc21319bA2E5a64265C429',
    SellOrderList: '0x4786999b7Ebb24876B2bD4705ecc89ECeebDa559',
    Market: '0xc6A8101003d7d2ce14BD344e3df23E4AAfd77899',
    CreativeStudio: '0xa5dD241c1A9A9826fB8E78c7db4dc8fdD3043b66',
    ExchangeOrderList: '0x37ca1D6c7479F3Eb9d6d10309e6f0C611E6bE48F',
    Mochi: '0x3bF0FD7176204A80021C1BD17807144714E31148',
    NFTCampaign: '0x823437B58dB6390AE6F9bCee696788F854618c40',
  },
  //BSC Testnet
  97: {
    AddressesProvider: '0x5C647762C403D9Ab2972e5114f5bC9C8205b7166',
    CreativeStudio: '0xA52cf219D9BE74aC29F3b59720d75C1f9F8E75cA',
    ExchangeOrderList: '0x4784e5919048B5dc32a2EA619f331f6cfBb9F03F',
    Market: '0xa95C4f44563Ed6Be2e38cbDDE5B0F612A3c1B61E',
    NftList: '0xF1ab1060c8EfEa02dc52D482ae0Ac736dEaEd242',
    SellOrderList: '0xE4e32e39E8C7055272e405972e3E3C7AA92101eb',
    Vault: '0xd6Fb9c20f17719f2200d76554ba3ee395c128844',
    SeedifyNFT: '0xfA66C3001E0B3f9c6c203f5bBE483D121B28Ae6D',
    NFTCampaign: '0x23442A5094aC64f1B54D07a199e79738f56bdbfE',
    MochiERC721NFT: '0x1c055E151C01f7565Badbbfd23930DbC8f8A58e7',
    MochiERC1155NFT: '0xE5D9d75C1Af5cF57F1185703A44ea12277Dfd449',
  },
};

export const getContractAddress = (_chainId) => {
  return contractAddress[_chainId];
};
