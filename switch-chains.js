const chainParams = {
  'avalancheCTest' : {
  chainId: '0xA869',
  chainName: 'Avalanche Testnet C-Chain',
  nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
  },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://testnet.snowtrace.io/']
},
'mumbai' : {
  chainId: '0x13881',
  chainName: 'Polygon Mumbai Testnet',
  nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
  },
  rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
  blockExplorerUrls: ['https://mumbai.polygonscan.com/']
}
}

// Get metamask on the right network
const switchToChain = (chainName) => {
  window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [chainParams[chainName]]
        }
      )
}

let desiredChain = 'mumbai'
switchToChain(desiredChain)
