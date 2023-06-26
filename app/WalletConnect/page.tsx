'use client'
import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

import { ConnectionOptions } from '../libs/components/ConnectionOptions'
import { ConnectionType, switchNetwork } from '../libs/connections'
import { CHAIN_INFO, INPUT_CHAIN_URL } from '../libs/constants'

const FallbackComponent = ({ error }: FallbackProps) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <p>Please reload the application</p>
    </div>
  )
}
// Listen for new blocks and update the wallet
const useOnBlockUpdated = (callback: (blockNumber: number) => void) => {
  const { provider } = useWeb3React()
  useEffect(() => {
    if (!provider) {
      return
    }
    const subscription = provider.on('block', callback)
    return () => {
      subscription.removeAllListeners()
    }
  })
}

export function WalletConnect (props:any) {
  const { chainId, account, isActive } = useWeb3React()
  const [blockNumber, setBlockNumber] = useState<number>(0)
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(null)
  // Listen for new blocks and update the wallet
  useOnBlockUpdated((blockNumber: number) => {
    setBlockNumber(blockNumber)
  })
  useEffect(() => {
    
  }, [])
  
 
  return (
    <div>
 
<div className=" fixed top-96 right-96 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 shadow-xl rounded-b-3xl z-50 text-white">
  <div className='p-6 text-center'>
  <ErrorBoundary FallbackComponent={FallbackComponent}>
        {INPUT_CHAIN_URL === '' && <h2 className="error">Please set your RPC URL in config.ts</h2>}
        <h3 className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white'>{`Block Number: ${blockNumber + 1}`}</h3>
        <ConnectionOptions
          activeConnectionType={connectionType}
          isConnectionActive={isActive}
          onActivate={setConnectionType}
          onDeactivate={setConnectionType}
        />
        <h3 className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white' >{`ChainId: ${chainId}`}</h3>
        <span>Connected Wallet</span>
        <h3 className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white'>{ `${account}`}</h3>
        {Object.keys(CHAIN_INFO).map((chainId) => (
          <div  key={chainId}>
            <button className='hover:shadow-lg ease-linear transition-all duration-150 mx-2 text-white bg-green-500 px-2 py-3  rounded-full  hover:text-green-500 hover:bg-white' onClick={() => switchNetwork(parseInt(chainId), connectionType)}>
              {`Switch to ${CHAIN_INFO[chainId].label}`}
            </button>
          </div>
        ))}
      </ErrorBoundary>
  </div>
      
    </div>
    
    </div>
   
    
    
  )
}

export default WalletConnect;
