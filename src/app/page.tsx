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
import { useEffect } from "react"
import { DisconnectButton } from "@/components/DisconnectButton"
import { useAtom } from "jotai"
import { connect, disconnect } from "starknetkit-latest"
import { ARGENT_WEBWALLET_URL, CHAIN_ID, provider } from "@/constants"
import { AccountSection } from "@/components/AccountSection"



export default function Home() {
  const setWalletLatest = useSetAtom(walletStarknetkitLatestAtom)
  const setWalletNext = useSetAtom(walletStarknetkitNextAtom)
  const setConnectorData = useSetAtom(connectorDataAtom)
  const setConnector = useSetAtom(connectorAtom)

  const [wallet, setWallet] = useAtom(walletStarknetkitLatestAtom)


  useEffect(() => {
    setWalletLatest(RESET)
    setWalletNext(RESET)
    setConnectorData(RESET)
    setConnector(RESET)
  }, [])

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
      {wallet ? (
          <>
            <DisconnectButton
              disconnectFn={disconnect}
              resetFn={() => {
                setWallet(RESET);
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
      <h1 className="text-3xl font-bold underline text-red-700" >Style test</h1>
    </div>
    </div>
 
  )
}
