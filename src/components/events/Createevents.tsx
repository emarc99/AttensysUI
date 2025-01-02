import { Button } from "@headlessui/react"
import React from "react"
import ticket from "@/assets/ticket.svg"
import Image from "next/image"
import { createorexplore } from "@/state/connectedWalletStarknetkitNext"
import { useAtom } from "jotai"
import discover from "@/assets/discover.svg"
import { useRouter } from "next/navigation"

const Createevents = () => {
  const [CreateorExplorestat] = useAtom(createorexplore)
  const router = useRouter()

  const handlerouting = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    event.preventDefault()
    if (!CreateorExplorestat) {
      router.push("/Events/createevent")
    } else {
      router.push("/Discoverevent")
    }
  }

  return (
    <div
      className={`bg-[url('/hero_asset.png')] h-[389px] w-[90%] mx-auto rounded-xl flex items-center`}
    >
      <div className="w-[80%] mx-auto h-[250px]">
        <h1 className="text-[30.19px] font-bold text-[#FFFFFF] leading-[39px] w-[450px]">
          Create{" "}
          <span className="bg-gradient-to-r from-[#9B51E0] via-[#9B51E0] to-[#4A90E2] text-transparent bg-clip-text">
            events,
          </span>
          <br />
          send out invitations, and effortlessly track attendance
        </h1>
        <p className="text-[17px] text-[#FFFFFF] leading-[22px] font-light py-4 w-[571px]">
          Simplifying certificate issuance, attendance tracking, and online
          course management for schools, organizations, and event managers.
        </p>
        <Button className="hidden lg:flex rounded-lg bg-gradient-to-r from-[#9B51E0] to-[#4A90E2] py-2 px-4 lg:h-[50px] items-center lg:w-[230px] text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 justify-center">
          <div className="flex space-x-4 items-center font-semibold text-[16px]">
            {CreateorExplorestat ? (
              <Image src={discover} alt="discover" className="mr-2" />
            ) : (
              <Image src={ticket} alt="ticket" className="mr-2" />
            )}
          </div>
          <div onClick={handlerouting}>
            {CreateorExplorestat ? "Discover More Events" : "Create an Event"}
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Createevents
