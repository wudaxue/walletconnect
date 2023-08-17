import { Web3Modal } from '@web3modal/react'
import { ethereumClient, projectId } from '../const'
import { useAccount, useDisconnect } from 'wagmi'
import { useEffect, useState } from 'react'
import ConnectDialog from './Dialog'
import './index.scss'

const home = () => {
  const [connectOpen, setConnectOpen] = useState(false)
  const { address } = useAccount()

  useEffect(() => {
    if (address) {
      closeDialog()
    }
  }, [address])

  const { disconnect } = useDisconnect()
  const toDisconnect = () => disconnect()
  const toConnect = () => setConnectOpen(true)
  const closeDialog = () => setConnectOpen(false)

  return (
    <>
      {address}
      <div className="flex h-screen w-screen items-center justify-center">
        {address ? (
          <div
            className="flex h-[50px] w-[120px] cursor-pointer items-center justify-center rounded-2xl bg-green-500 text-white"
            onClick={toDisconnect}
          >
            DisConnect
          </div>
        ) : (
          <div
            className="flex h-[50px] w-[120px] cursor-pointer items-center justify-center rounded-2xl bg-green-500 text-white"
            onClick={toConnect}
          >
            Connect
          </div>
        )}
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </div>
      {connectOpen && <ConnectDialog closeDialog={closeDialog}></ConnectDialog>}
    </>
  )
}

export default home
