import { ARGENT_WEBWALLET_URL, CHAIN_ID, provider } from "@/constants"
import { walletStarknetkitLatestAtom } from "@/state/connectedWalletStarknetkitLatest"
import { Button,Flex,Box } from "@chakra-ui/react"
import { useSetAtom } from "jotai"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { connect } from "starknetkit-latest"

const ConnectButton: FC = () => {
  const setWallet = useSetAtom(walletStarknetkitLatestAtom)
  const navigate = useRouter()

  const connectFn = async () => {
    try {
      const { wallet } = await connect({
        provider,
        modalMode: "alwaysAsk",
        webWalletUrl: ARGENT_WEBWALLET_URL,
        argentMobileOptions: {
          dappName: "Attensys",
          url: window.location.hostname,
          chainId: CHAIN_ID,
          icons: [],
        },
      })

      setWallet(wallet)
    } catch (e) {
      console.error(e)
      alert((e as any).message)
    }
  }

  return (
   <div>
    <button
      onClick={connectFn}
      className="border-8 border-black mt-4 bg-black text-white"
    >
      Connect
    </button>

    </div>
  )
}

export { ConnectButton }
