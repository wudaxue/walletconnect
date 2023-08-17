import { useConnect } from 'wagmi'
import { MouseEventHandler } from 'react'
import { Button } from 'antd'

const ConnectDialog = (props: { closeDialog: MouseEventHandler<HTMLImageElement> | undefined }) => {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const toConnect = async (connector: any) => {
    connect({ connector })
  }

  return (
    <div className="connect-dialog flex items-center justify-center">
      <div className="connect-content rounded-3xl bg-[#454545]">
        <div className="connect-header relative text-center">
          <span>Connect Wallet</span>
          <img src="./close.png" className="close-btn absolute cursor-pointer" onClickCapture={props.closeDialog} />
        </div>
        {connectors.map((connector) => (
          <Button
            key={connector.name}
            onClickCapture={() => {
              props.closeDialog
              toConnect(connector)
            }}
            className="connector-item flex cursor-pointer items-center justify-center rounded-full border border-[#EEEEEE]"
            loading={isLoading}
            disabled={isLoading}
          >
            <img src={`./${connector.id}.png`} className="mr-3" />
            {connector.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ConnectDialog
