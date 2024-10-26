"use client"
import { walletStarknetkitLatestAtom } from "@/state/connectedWalletStarknetkitLatest"
import {
  connectorAtom,
  connectorDataAtom,
  walletStarknetkitNextAtom,
} from "@/state/connectedWalletStarknetkitNext"
import { useSetAtom } from "jotai"
import { RESET } from "jotai/utils"
import { useEffect } from "react"
import { useAtom } from "jotai"
import { connect, disconnect } from "starknetkit"
import { ARGENT_WEBWALLET_URL, CHAIN_ID, provider } from "@/constants"
import { useSendTransaction, useAccount, useBlockNumber } from '@starknet-react/core';
import { BlockNumber, Contract, RpcProvider, Account } from "starknet";
import {attensysEventAbi} from '@/deployments/abi'
import {attensysEventAddress} from '@/deployments/contracts'



export default function Mockevent() {
  const setWalletLatest = useSetAtom(walletStarknetkitLatestAtom)
  const setWalletNext = useSetAtom(walletStarknetkitNextAtom)
  const setConnectorData = useSetAtom(connectorDataAtom)
  const setConnector = useSetAtom(connectorAtom)
  const [wallet, setWallet] = useAtom(walletStarknetkitLatestAtom)


  const eventContract = new Contract(attensysEventAbi, attensysEventAddress, provider);



  useEffect(() => {
    setWalletLatest(RESET)
    setWalletNext(RESET)
    setConnectorData(RESET)
    setConnector(RESET)
  }, [])

  const handleCreateEvent = async () => {
    eventContract.connect(wallet?.account);
    const myCall = eventContract.populate('create_event', ["0x05a679d1e0d9f67370d8c3250388afec2da1deaf895b51841e017a3eb7bfd154", "kennyevent", "kennynft","knt",23,100,1,"https://dummy_uri.com/your_id"]);
    const res = await eventContract.create_event(myCall.calldata);
    await provider.waitForTransaction(res.transaction_hash);
    console.log("transaction hash:", res.transaction_hash)

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
        console.log("connected wallet info", connectedWallet);
      } catch (e) {
        console.error(e)
        alert((e as any).message)
      }
    }

    if (!wallet) {
      autoConnect()
    }
  }, [wallet])

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
      <h1 className="text-3xl font-bold underline text-red-700" >mock event interaction here</h1>
      <div className="text-sm bg-gray-200 px-4 py-2 text-black">
            Connected: {wallet?.account?.address}
      </div>
    </div>
    <button onClick={handleCreateEvent}>
        Create event button
    </button>
    </div>
 
  )
}