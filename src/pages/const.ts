import { EthereumClient, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from 'wagmi'
import { arbitrum, optimism, mainnet, polygon } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const chains = [arbitrum, mainnet, polygon, optimism]
const projectId = '1f3490ab876707864073d7c68d829354'

const connectors = [
  new MetaMaskConnector(),
  new WalletConnectConnector({
    chains,
    options: {
      projectId: '1f3490ab876707864073d7c68d829354',
    },
  }),
  new CoinbaseWalletConnector({
    options: {
      appName: 'wagmi.sh',
      jsonRpcUrl: 'https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId',
    },
  }),
]

const { publicClient, webSocketPublicClient } = configureChains(chains, [w3mProvider({ projectId })])
console.log(publicClient, webSocketPublicClient, '================')
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)

export { wagmiConfig, ethereumClient, projectId, connectors }
