export enum Chain {
  POLYGON,
  MAINNET,
  MUMBAI
}
interface ExampleConfig {
  chain: Chain
  rpc: {
    polygon: string
    mainnet: string
    mumbai:string
  }
}
export const CurrentConfig: ExampleConfig = {
  chain: Chain.MUMBAI,
  rpc: {
    polygon: '',
    mainnet: 'https://mainnet.infura.io/v3/4bf032f2d38a4ed6bb975b80d6340847',
    mumbai:'https://polygon-mumbai.infura.io/v3/Z6Z5I2CN4VJ2N1ZVUPFSJFS8MXX8ZRR2W1'
  },
}
