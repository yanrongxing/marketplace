import * as https from 'https'
import * as url from 'url'
import * as fs from 'fs'
import * as path from 'path'

const configJson = require('./addresses.json')

enum Network {
  MAINNET = 'mainnet',
  ROPSTEN = 'ropsten',
  MATIC = 'matic',
  LOCAL = 'local'
}
enum ContractName {
  MANAToken="MANAToken",
  Marketplace="Marketplace",
  ERC721Bid="ERC721Bid",
  ERC721="ERC721",
  ERC1155="ERC1155",
  FundChannelUpgrades="FundChannelUpgrades"
}
type ContractsResponse = Record<Network, Record<ContractName, string>>

const startBlockByNetwork: Record<Network, Record<ContractName, number>> = {
  [Network.MAINNET]: {
    MANAToken: 28461793,
    Marketplace: 29023822,
    ERC721Bid: 29024107,
    ERC721: 28461800,
    ERC1155: 28501376,
    FundChannelUpgrades: 28461788,
  }, 
  [Network.ROPSTEN]: {
    MANAToken: 28461793,
    Marketplace: 29023822,
    ERC721Bid: 29024107,
    ERC721: 28461800,
    ERC1155: 28501376,
    FundChannelUpgrades: 28461788,
  },
  [Network.MATIC]: {
    MANAToken: 28461793,
    Marketplace: 29023822,
    ERC721Bid: 29024107,
    ERC721: 28461800,
    ERC1155: 28501376,
    FundChannelUpgrades: 28461800,
  },
  [Network.LOCAL]: {
    MANAToken: 0,
    Marketplace: 0,
    ERC721Bid: 0,
    ERC721: 0,
    ERC1155: 0,
    FundChannelUpgrades: 0,
  }
  
}

const contractNameToProxy: Record<string, ContractName> = {
  MANAToken: ContractName.MANAToken,
  Marketplace: ContractName.Marketplace,
  ERC721Bid: ContractName.ERC721Bid,
  ERC721: ContractName.ERC721,
  ERC1155: ContractName.ERC1155,
  FundChannelUpgrades: ContractName.FundChannelUpgrades
  
}

// TODO: Handle ctrl+C
async function build() {
  const network = getNetwork()
  const basePath = path.resolve(__dirname, '../')
 
  const ethereum = new Ethereum(network)
  await ethereum.fetchContracts()

  const template = new TemplateFile(ethereum)

  await Promise.all([
    template.write(
      `${basePath}/src/data/.addresses.ts`,
      `${basePath}/src/data/addresses.ts`
    ),
    template.write(`${basePath}/.subgraph.yaml`, `${basePath}/subgraph.yaml`)
  ])
}

// ------------------------------------------------------------------
// Parser -----------------------------------------------------------

class TemplateFile {
  constructor(public ethereum: Ethereum) {}

  async write(src: string, destination: string) {
    const contents = await readFile(src)

    try {
      const newContents = new Parser(contents, this.ethereum).parse()

      await writeFile(destination, newContents)
    } catch (error) {
      await deleteFile(destination)
      throw error
    }
  }
}

class Ethereum {
  network: Network

  contractAddresses: Record<ContractName, string>
  startBlocks: Record<ContractName, number>

  constructor(network: Network) {
    this.network = network
    this.startBlocks = startBlockByNetwork[network]
  }

  async fetchContracts() {
    console.log("fetchContracts start");
    // const contractsByNetwork: ContractsResponse = await fetch(
    //   'https://raw.githubusercontent.com/yanrongxing/marketplace/master/indexer/scripts/addresses.json'
    // )
    const contractsByNetwork: ContractsResponse = configJson;
    this.contractAddresses = contractsByNetwork[this.network]
    console.log("fetchContracts end");
  }

  getAddress(contractName: string) {
    return (
      this.contractAddresses[this.getProxyContractName(contractName)] ||
      this.getDefaultAddress()
    )
  }

  getStartBlock(contractName: string) {
    return (
      this.startBlocks[this.getProxyContractName(contractName)] ||
      this.getDefaultStartBlock()
    )
  }

  private getProxyContractName(contractName: string) {
    return contractNameToProxy[contractName] || contractName
  }

  private getDefaultAddress() {
    return '0x0000000000000000000000000000000000000000'
  }

  private getDefaultStartBlock() {
    return 0
  }
}

class Parser {
  constructor(public text: string, public ethereum: Ethereum) {}

  parse() {
    let newText = this.replaceNetworks(this.text)
    newText = this.replaceAddresses(newText)
    newText = this.replaceStartBlocks(newText)
    return newText
  }

  replaceAddresses(text = this.text) {
    for (const placeholder of this.getPlaceholders('address')) {
      const contractName = this.getPlaceholderValue(placeholder)
      const address = this.ethereum.getAddress(contractName)
      text = text.replace(placeholder, address)
    }
    return text
  }

  replaceStartBlocks(text = this.text) {
    for (const placeholder of this.getPlaceholders('startBlock')) {
      const contractName = this.getPlaceholderValue(placeholder)
      const startBlock = this.ethereum.getStartBlock(contractName)
      text = text.replace(placeholder, startBlock.toString())
    }
    return text
  }

  replaceNetworks(text = this.text) {
    return text.replace(/{{network}}/g, this.ethereum.network)
  }

  getPlaceholders(name: string, text = this.text) {
    const regexp = new RegExp(`{{${name}\:[a-zA-Z0-9]+}}`, 'g')
    return text.match(regexp) || []
  }

  getPlaceholderValue(placeholder: string) {
    // Example: {{operator:value}}
    const [_, value] = placeholder.replace(/{|}/g, '').split(':')
    return value
  }
}

// ------------------------------------------------------------------
// HTTPS ------------------------------------------------------------

async function fetch(uri: string, method = 'GET'): Promise<any> {
  const { protocol, hostname, path } = url.parse(uri)

  if (protocol !== 'https:') {
    throw new Error('Only https is supported')
  }

  const options = {
    hostname,
    method,
    port: 443,
    path,
    proxy:'http://127.0.0.1:8889'
  }
  console.log(options);
  return new Promise(function(resolve, reject) {
    const req = https.request(options, function(res) {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`Invalid request: ${res.statusCode}`))
      }

      let body = []
      res.on('data', chunk => body.push(chunk))

      res.on('end', () => {
        try {
          body = JSON.parse(Buffer.concat(body).toString())
          resolve(body)
        } catch (e) {
          reject(e)
        }
      })
    })

    req.on('error', err => reject(err))
    req.end()
  })
}

// ------------------------------------------------------------------
// File -------------------------------------------------------------

async function readFile(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) =>
      err ? reject(err) : resolve(data)
    )
  })
}

async function deleteFile(path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      resolve()
    }
    fs.unlink(path, err => (err ? reject(err) : resolve()))
  })
}

async function writeFile(path: string, data: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf-8', err => (err ? reject(err) : resolve()))
  })
}

// ------------------------------------------------------------------
// Args -------------------------------------------------------------

function getNetwork() {
  let network: Network = process.env.ETHEREUM_NETWORK as Network

  if (!network) {
    for (let i = 0; i < process.argv.length; i++) {
      if (process.argv[i] === '--network') {
        network = process.argv[i + 1] as Network
        break
      }
    }
  }
  console.log(network)
  console.log(Object.values(Network))

  if (!network || !Object.values(Network).includes(network)) {
    throw new Error(
      "Supply a valid network using --network. Use `npm run build -- --network mainnet` if you're using npm"
    )
  }
  return network
}

build().then(() => console.log('All done'))
