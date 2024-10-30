import {
  lastTxErrorAtom,
  lastTxHashAtom,
  lastTxStatusAtom,
} from "@/state/transactionState"
import {
  starknetReactVersionAtom,
  starknetkitVersionAtom,
} from "@/state/versionState"
import { useSetAtom } from "jotai"
import { RESET } from "jotai/utils"
import { useRouter } from "next/navigation"
import { FC } from "react"

interface DisconnectButtonProps {
  disconnectFn: () => void
  resetFn?: () => void
}

const DisconnectButton: FC<DisconnectButtonProps> = ({
  disconnectFn,
  resetFn,
}) => {
  const navigate = useRouter()
  const setLastTxHash = useSetAtom(lastTxHashAtom)
  const setLastTxStatus = useSetAtom(lastTxStatusAtom)
  const setLastTxError = useSetAtom(lastTxErrorAtom)
  const setStarknetkitVersion = useSetAtom(starknetkitVersionAtom)
  const setStarknetReactVersion = useSetAtom(starknetReactVersionAtom)

  return (
    <div>
        <button
          onClick={() => {
            disconnectFn()
            resetFn?.()
            setLastTxHash(RESET)
            setLastTxStatus(RESET)
            setLastTxError(RESET)
            setStarknetkitVersion(RESET)
            setStarknetReactVersion(RESET)
            navigate.push("/")
          }}
          className="border-8 border-black mt-4 bg-black text-white"
        >
          Disconnect
        </button>
    </div>
  )
}

export { DisconnectButton }
