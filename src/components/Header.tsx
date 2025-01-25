"use client"
import React, { useEffect, useState } from "react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Input,
} from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "@/assets/Logo.svg"
import Image from "next/image"
import { ConnectButton } from "./connect/ConnectButton"
import { walletStarknetkitLatestAtom } from "@/state/connectedWalletStarknetkitLatest"
import {
  connectorAtom,
  connectorDataAtom,
  walletStarknetkitNextAtom,
} from "@/state/connectedWalletStarknetkitNext"
import { RESET } from "jotai/utils"
import { DisconnectButton } from "./DisconnectButton"
import { connect, disconnect } from "starknetkit"
import Coursedropdown from "./courses/Coursedropdown"
import {
  coursestatusAtom,
  bootcampdropdownstatus,
} from "@/state/connectedWalletStarknetkitNext"
import { useAtom, useSetAtom } from "jotai"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { handleSubmit } from "@/utils/helpers"
import Bootcampdropdown from "./bootcamp/Bootcampdropdown"

const navigation = [
  { name: "Courses", href: "#", current: false },
  { name: "Events", href: "#", current: false },
  { name: "Bootcamps", href: "#", current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

const Header = () => {
  const router = useRouter()
  const setWalletLatest = useSetAtom(walletStarknetkitLatestAtom)
  const setWalletNext = useSetAtom(walletStarknetkitNextAtom)
  const setConnectorData = useSetAtom(connectorDataAtom)
  const setConnector = useSetAtom(connectorAtom)
  const [wallet, setWallet] = useAtom(walletStarknetkitLatestAtom)
  const [searchValue, setSearchValue] = useState("")
  const [coursestatus, setcourseStatus] = useAtom(coursestatusAtom)
  const [bootcampdropstat, setbootcampdropstat] = useAtom(
    bootcampdropdownstatus,
  )

  const handleChange = (event: { target: { value: any } }) => {
    setSearchValue(event.target.value)
  }

  const handleTabClick = (arg: string) => {
    // Reset other dropdowns
    if (arg === "Courses") {
      setcourseStatus(!coursestatus)
      setbootcampdropstat(false)
    } else if (arg === "Events") {
      setcourseStatus(false)
      setbootcampdropstat(false)
      router.push("/Events/events")
    } else if (arg === "Bootcamps") {
      setcourseStatus(false)
      setbootcampdropstat(!bootcampdropstat)
    }
  }

  useEffect(() => {
    setWalletLatest(RESET)
    setWalletNext(RESET)
    setConnectorData(RESET)
    setConnector(RESET)
  }, [])

  return (
    <Disclosure as="nav" className="bg-white relative z-20 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                {/* Mobile Menu Button */}
                <div className="flex items-center sm:hidden  mr-12">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" color="#333333"/>
                    ) : (
                      <Bars3Icon className="block h-6 w-6 text-[#2D3A4B]" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-between w-full">
                <Link href="/" className="flex-shrink-0">
                  <Image alt="Your Company" src={Logo} className="h-8 w-auto" />
                </Link>
 
              </div>
                
              {/* search icon */}
              <div className="flex items-center sm:hidden ml-8">
              <img 
  alt="Search icon" 
  src="/Vector.svg" 
  className="h-8 w-auto text-[#555555]" 
/>
              </div>
             
              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative">
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white text-[#333333]"
                            : "text-[#333333] hover:bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                        )}
                        onClick={() => handleTabClick(item.name)}
                      >
                        {item.name}
                        {item.name !== "Events" && (
                          <span className="text-[10px] ml-1">
                            {item.current ? "▲" : "▼"}
                          </span>
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wallet Connection */}
              <div className="hidden sm:flex sm:items-center">
                {wallet ? (
                  <DisconnectButton
                    disconnectFn={disconnect}
                    resetFn={() => {
                      setWallet(RESET)
                    }}
                  />
                ) : (
                  <ConnectButton />
                )}
              </div>
            </div>

            {/* Desktop Dropdowns */}
            <div className="hidden sm:block">
              {coursestatus && <Coursedropdown />}
              {bootcampdropstat && <Bootcampdropdown />}
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Navigation Links */}
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-[#9B51E0]"
                      : "text-[#333333] hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  onClick={() => handleTabClick(item.name)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {/* Mobile Dropdowns */}
              {/* {coursestatus && <Coursedropdown />} */}
              {/* {bootcampdropstat && <Bootcampdropdown />} */}

              {/* Mobile Wallet Connection */}
              <div className="pt-4 pb-3 border-t border-gray-700">
                {wallet ? (
                  <DisconnectButton
                    disconnectFn={disconnect}
                    resetFn={() => {
                      setWallet(RESET)
                    }}
                  />
                ) : (
                  <ConnectButton />
                )}
              </div>
            
            
              {/* Mobile Search */}
              {/* <div className="px-2 pt-2">
                <form onSubmit={(e) => handleSubmit(e, searchValue, router)}>
                  <Input
                    name="search by address"
                    type="text"
                    placeholder="Search by address"
                    value={searchValue}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
                  />
                </form>
              </div> */}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default Header