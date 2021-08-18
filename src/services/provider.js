import Wallet from './wallet'
import Market from './market'
import AssetContract from '../data/network/web3/contracts/assetContract'
import IPFSStorageNetwork from '../data/network/storage/ipfs/IPFSStorageNetwork'
import EthereumClient from '../data/network/web3/ethereum/ethereumClient'
import TheGraphAPIClient from '../data/network/graph/implementation/theGraphAPIClient'
import TheGraphAPIMapper from '../data/network/graph/implementation/theGraphAPIClientMapper'

const graphQLAPIClient = new TheGraphAPIClient(new TheGraphAPIMapper())
const ethereumClient = new EthereumClient()
const storageNetwork = new IPFSStorageNetwork()

class ServiceProvider {
  /**
   * Creates wallet service.
   * @returns {Wallet} Wallet service
   */
   static wallet() {
    return new Wallet(
      ethereumClient
    )
  }
  
  /**
   * Creates market service.
   * @returns {Market} Market service
   */
  static market() {
    return new Market(
      graphQLAPIClient,
      new AssetContract(ethereumClient),
      storageNetwork
    )
  }
}

export default ServiceProvider