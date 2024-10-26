"use client"

import { ConnectButton } from "@/components/connect/ConnectButton"
import { walletStarknetkitLatestAtom } from "@/state/connectedWalletStarknetkitLatest"
import {
  connectorAtom,
  connectorDataAtom,
  walletStarknetkitNextAtom,
} from "@/state/connectedWalletStarknetkitNext"
import { Button, Flex, Heading } from "@chakra-ui/react"
import { useSetAtom } from "jotai"
import { RESET } from "jotai/utils"
import { useEffect, useMemo, useRef, useState } from "react"
import { DisconnectButton } from "@/components/DisconnectButton"
import { useAtom } from "jotai"
import { connect, disconnect } from "starknetkit-latest"
import { ARGENT_WEBWALLET_URL, CHAIN_ID, provider } from "@/constants"
import { AccountSection } from "@/components/AccountSection"
import {
  useAccount,
  useReadContract,
  useContract,
  useSendTransaction,
} from "@starknet-react/core"
import { attensysOrgAddress } from "./../deployments/contracts"
import { attensysOrgAbi } from "./../deployments/abi"
import { RpcProvider, Contract, Account, ec, json } from "starknet"

export default function Home() {
  const setWalletLatest = useSetAtom(walletStarknetkitLatestAtom)
  const setWalletNext = useSetAtom(walletStarknetkitNextAtom)
  const setConnectorData = useSetAtom(connectorDataAtom)
  const setConnector = useSetAtom(connectorAtom)

  const [wallet, setWallet] = useAtom(walletStarknetkitLatestAtom)
  const [inputValue, setInputValue] = useState("")

  const { address } = useAccount()
  console.log("The address is", address)

  // get address
  const readOrgInfo = () => {
    return inputValue
  }

  const {
    data: readOrgData,
    error: errOrg,
    isSuccess,
  } = useReadContract({
    abi: attensysOrgAbi,
    functionName: "get_org_info",
    address: attensysOrgAddress,
    args: [inputValue],
    watch: true,
  })
  // console.log(readOrgData)

  const { contract } = useContract({
    abi: attensysOrgAbi,
    address: attensysOrgAddress,
  })
  // const calls = useMemo(() => {
  //   if (!wallet?.selectedAddress || !attensysOrgAddress) return [];
  //   return contract.populateTransaction["create_org_profile"]("Web3Bridge", "W3BNFT", "WeB","http://w3bnft.com", {low: 1, high: 0})
  // }, [attensysOrgAddress, wallet?.selectedAddress])

  // const { send, sendAsync, error } = useSendTransaction({
  //   calls:
  //     contract && wallet?.selectedAddress
  //       ? [
  //           contract.populate("create_org_profile", [
  //             "Web3Bridge",
  //             "W3BNFT",
  //             "WeB",
  //             "http://w3bnft.com",
  //           ]),
  //         ]
  //       : undefined,
  // })

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(readOrgInfo())
  }
  // 0x20a812538930c18f269768d07f5a177698d8eb65935b832b45ec05b8d98aa69

  const handleOnChange = (event: any) => {
    setInputValue(event.target.value)
  }

  // useEffect(() => {
  //   setWalletLatest(RESET)
  //   setWalletNext(RESET)
  //   setConnectorData(RESET)
  //   setConnector(RESET)
  // }, [])

  //initialize provider with a Sepolia Testnet node

  const registerOrg = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      console.log(contract)
      await contract.create_org_profile(
        "Web3Bridge",
        "W3BNFT",
        "WeB",
        "http://w3bnft.com",
      )
      // console.log(sendAsync)
      // sendAsync();

      // const provider = new RpcProvider({ nodeUrl: "http://127.0.0.1:5050/rpc" })
      // // Connect the deployed Test contract in devnet Testnet
      // // read abi of Test contract
      // const { abi: testAbi } = await provider.getClassAt(attensysOrgAddress)
      // if (testAbi === undefined) {
      //   throw new Error("no abi.")
      // }
      // const myOrgContract = new Contract(testAbi, attensysOrgAddress, provider)

      // // Interaction with the contract with call
      // const bal1 = await myOrgContract.get_org_info(attensysOrgAddress)
      // console.log("Initial balance =", bal1)

      // // myOrgContract.connect(wallet)

      // let org_name = "web3"
      // let token_uri = "https://dummy_uri.com"
      // let nft_name = "cairo"
      // let nft_symb = "CAO"

      // await myOrgContract.create_org_profile(
      //   org_name,
      //   token_uri,
      //   nft_name,
      //   nft_symb,
      // )
      // // Interaction with the contract with call
      // const profile = await myOrgContract.get_org_info(wallet)
      // console.log("Caller profile =", profile)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const autoConnect = async () => {
      try {
        const { wallet: connectedWallet } = await connect({
          provider,
          modalMode: "neverAsk",
          webWalletUrl: ARGENT_WEBWALLET_URL,
          argentMobileOptions: {
            dappName: "Attensys",
            url: window.location.hostname,
            chainId: CHAIN_ID,
            icons: [],
          },
        })
        setWallet(connectedWallet)
      } catch (e) {
        console.error(e)
        alert((e as any).message)
      }
    }

    if (!wallet) {
      autoConnect()
    }
  }, [wallet, inputValue])

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("wallet_disconnected", async () => {
        setWallet(RESET)
      })
    }
  }, [])

  return (
    <div>
      <div>
        {wallet ? (
          <>
            <DisconnectButton
              disconnectFn={disconnect}
              resetFn={() => {
                setWallet(RESET)
              }}
            />
          </>
        ) : (
          <ConnectButton />
        )}
        <AccountSection
          address={wallet?.account?.address}
          chainId={wallet?.chainId}
        />
        <h1 className="text-3xl font-bold underline text-red-700">
          Style test
        </h1>
        <br />

        <div className="px-4 py-3x border-4 m-7">
          <h1 className="my-5 font-bold">Register organization</h1>
          <div className="flex flex-row mb-4">
            <form>
              <div className=" mb-4">
                <div className="flow flow-row">
                  <label>
                    Organization Name:
                    <input
                      className="px-4 py-3x border-4 my-5"
                      type="input"
                      value={inputValue}
                      onChange={handleOnChange}
                    />
                  </label>
                  <label>
                    NFT Name:
                    <input
                      className="px-4 py-3x border-4 my-5"
                      type="input"
                      value={inputValue}
                      onChange={handleOnChange}
                    />
                  </label>
                  <label>
                    NFT Symbol:
                    <input
                      className="px-4 py-3x border-4 my-5"
                      type="input"
                      value={inputValue}
                      onChange={handleOnChange}
                    />
                  </label>
                  <label>
                    NFT URL:
                    <input
                      className="px-4 py-3x border-4 my-5"
                      type="input"
                      value={inputValue}
                      onChange={handleOnChange}
                    />
                  </label>
                </div>

                <hr />
                <div className="block">
                  <button
                    className={`${wallet?.selectedAddress ? "bg-blue-500 hover:bg-blue-700" : "bg-red-500"}  text-white font-bold py-2 px-4 rounded my-5`}
                    onClick={registerOrg}
                    disabled={!wallet?.selectedAddress}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="px-4 py-3x border-4 m-7">
          <h1 className="my-5 font-bold">Read organization information</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-row mb-4">
              <input
                className="px-4 py-3x border-4 my-5"
                type="input"
                value={inputValue}
                onChange={handleOnChange}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
                type="submit"
              >
                Get
              </button>
            </div>
          </form>

          {isSuccess ? (
            <div className="px-4 py-3x border-1">
              <p>Searched address: {inputValue}</p>
              <p>address_of_org: {readOrgData?.address_of_org}</p>
              <p>nft_address: {readOrgData?.nft_address}</p>
              <p>number_of_all_classes: {readOrgData?.number_of_all_classes}</p>
              <p>number_of_instructors: {readOrgData?.number_of_instructors}</p>
              <p>number_of_students: {readOrgData?.number_of_students}</p>
              <p>org_name: {readOrgData?.org_name}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  )
}
