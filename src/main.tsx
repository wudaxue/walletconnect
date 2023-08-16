import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.scss'
import { HashRouter } from 'react-router-dom'
import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from '@/pages/const'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <WagmiConfig config={wagmiConfig}>
    <HashRouter>
      <App />
    </HashRouter>
  </WagmiConfig>,
)
