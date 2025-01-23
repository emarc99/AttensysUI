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
import { ChevronRightIcon, BellIcon } from "@heroicons/react/24/outline"
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"
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
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mobileSearch, setMobileSearch] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [courseDropdown, setCourseDropdown] = useAtom(coursestatusAtom)
  const [bootcampDropdown, setBootcampDropdown] = useAtom(
    bootcampdropdownstatus,
  )
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSearchInput = (event: { target: { value: any } }) => {
    setSearchValue(event.target.value)
  }

  const handleDesktopRightMenuTab = (arg: string) => {
    if (arg == "Courses") {
      setBootcampDropdown(false)
      setCourseDropdown(!courseDropdown)
    } else if (arg == "Events") {
      setCourseDropdown(false)
      setBootcampDropdown(false)
      router.push("/Events/events")
    } else if (arg == "Bootcamps") {
      setCourseDropdown(false)
      setBootcampDropdown(!bootcampDropdown)
    }
  }

  useEffect(() => {
    setWalletLatest(RESET)
    setWalletNext(RESET)
    setConnectorData(RESET)
    setConnector(RESET)
  }, [])

  return (
    <>
      <Disclosure
        as="nav"
        className={`${courseDropdown || bootcampDropdown ? "bg-[#FFFFFF] opacity-80 backdrop-blur-sm" : "bg-[#FFFFFF]"} w-full overflow-hidden mx-auto`}
      >
        {/* pt-1 relative z-20 overflow-hidden w-[100%] clg:overflow-hidden clg:w-[98%] lclg:w-[100%] lclg:overflow-hidden ipad:w-[100%] ipad:overflow-hidden mx-auto */}
        <div className="flex px-4 xl:px-8 2xl:px-24 mx-auto relative h-20 items-center justify-start w-full">
          {/*  clg:w-[55%] lclg:w-[46%] lclg:mx-auto clg:mx-auto space-x-6 clg:space-x-6 lclg:space-x-6  md:hidden sm:hidden */}
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center justify-start z-[1]">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <XMarkIcon className="size-5 sm:size-6 md:size-7 text-gray-800" />
              ) : (
                <Bars3Icon className="size-5 sm:size-6 md:size-7 text-gray-800" />
              )}
            </button>
          </div>
          {/* Logo & Use Explorer & Search */}
          <div className="flex flex-none items-center justify-center mx-auto absolute inset-0 -z-[0] lg:mx-0 lg:relative lg:justify-start space-x-0">
            <Link
              href="/"
              className="cursor-pointer w-auto pr-0 lg:pr-6 xl:pr-8"
            >
              <Image
                alt="Logo"
                src={Logo}
                className="h-6 sm:h-8 lg:h-6 xl:h-7 2xl:h-8 w-full"
              />
            </Link>
            <a
              href="/Explorer"
              className="font-medium hidden lg:flex justify-center text-[#333] text-sm xl:text-md lg:pr-6 xl:pr-8"
            >
              Use our explorer
            </a>
            <form
              className="relative hidden lg:flex w-[250px] xl:w-[320px] bg-white border-[0.50px] border-gray-200 rounded-full"
              onSubmit={(e) => handleSubmit(e, searchValue, router)}
            >
              {!searchValue && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 xl:h-5 xl:w-5 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              )}
              <Input
                name="search"
                type="text"
                placeholder="Explore organizations, categories"
                value={searchValue}
                onChange={handleSearchInput}
                className="pl-10 w-full py-2 border-[0.50px] border-gray-200 rounded-full focus:outline-none focus:ring-[1px] focus:ring-[#9B51E0] focus:border-[#9B51E0] text-xs xl:text-sm text-gray-800 placeholder-gray-600"
              />
            </form>
          </div>

          <div className="ml-auto flex items-center justify-end space-x-4">
            {/* Nav menu */}
            <div className="hidden lg:flex items-center justify-end space-x-1 xl:sppace-x-2 2xl:space-x-4">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-white text-[#333333] flex flex-row items-center justify-start space-x-1"
                      : "text-[#333333] hover:bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] hover:text-white",
                    "rounded-md px-2 py-1.5 cursor-pointer flex flex-row items-center justify-start space-x-1",
                  )}
                  onClick={(e) => handleDesktopRightMenuTab(item.name)}
                >
                  <span className="text-sm xl:text-md font-medium">
                    {item.name}
                  </span>
                  {index !== 1 && (
                    <span className="text-[9px]">
                      {item.current ? "▲" : "▼"}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Connect Wallet */}
            <div className="hidden lg:flex flex-none">
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
            </div>
            {/* Search Button */}
            <div className="flex lg:hidden items-center justify-end z-[1]">
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setMobileSearch(!mobileSearch)}
              >
                <MagnifyingGlassIcon className="size-5 sm:size-6 md:size-7 text-gray-800" />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}

        {mobileMenu && (
          <div
            className={`lg:hidden w-full bg-[#f8f1ff] z-[99999] fixed inset-0 top-0 h-max min-h-full max-h-max flex items-start space-y-4 flex-col justify-start py-8 px-6 md:px-8`}
          >
            <div className="flex flex-col space-y-6 items-start justify-start w-full">
              <div className="flex items-center justify-between space-x-4 w-full">
                {/* Mobile Logo */}
                <Link href="/" className="cursor-pointer w-auto">
                  <Image alt="Logo" src={Logo} className="h-8 w-full" />
                </Link>
                {/* Mobile Close Nav */}
                <button
                  type="button"
                  onClick={() => setMobileMenu(false)}
                  className="ml-auto flex items-center justify-end w-fit flex-none"
                >
                  <XMarkIcon className="size-6 md:size-8 text-[#9B51E0]" />
                </button>
              </div>
              {/* Mobile Dropdown Search */}
              <form
                className="relative flex w-full bg-white border border-[#9B51E0]/35 rounded-full"
                onSubmit={(e) => handleSubmit(e, searchValue, router)}
              >
                {!searchValue && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 h-4 w-4 xl:h-5 xl:w-5 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                )}
                <Input
                  name="search"
                  type="text"
                  placeholder="Explore organizations, categories"
                  value={searchValue}
                  onChange={handleSearchInput}
                  className={`${searchValue ? "pl-4" : "pl-14"} w-full py-3 border-1 border-[#9B51E0]/25 rounded-full outline-none text-xs sm:text-md text-gray-800 placeholder-gray-600`}
                />
              </form>
              <div className="w-full flex items-end justify-end ml-auto">
                <a
                  href="/Explorer"
                  className="font-normal flex justify-center text-[#9B51E0] text-sm underline underline-offset-4"
                >
                  Use our explorer
                </a>
              </div>
              <ul className="w-full flex flex-col space-y-4 items-start justify-start py-8">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenu(false)
                    setBootcampDropdown(false)
                    setCourseDropdown(!courseDropdown)
                  }}
                  className="w-full flex flex-row space-x-4 items-center justify-between"
                >
                  <span className="font-normal text-[#9B51E0] text-lg hover:text-xl">
                    Courses
                  </span>
                  <ChevronRightIcon className="size-6 text-[#9B51E0]" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenu(false)
                    setCourseDropdown(false)
                    setBootcampDropdown(false)
                    router.push("/Events/events")
                  }}
                  className="font-normal text-[#9B51E0] text-lg hover:text-xl"
                >
                  Events
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenu(false)
                    setCourseDropdown(false)
                    setBootcampDropdown(!bootcampDropdown)
                  }}
                  className="w-full flex flex-row space-x-4 items-center justify-between"
                >
                  <span className="font-normal text-[#9B51E0] text-lg hover:text-xl">
                    Bootcamps
                  </span>
                  <ChevronRightIcon className="size-6 text-[#9B51E0]" />
                </button>
              </ul>

              {/* Connect Wallet */}
              <div className="items-end ml-auto justify-end flex flex-none">
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
              </div>
            </div>
          </div>
        )}

        {/* mobile search */}
        {mobileSearch && (
          <div className="z-[1] w-full bg-white absolute inset-0 top-0 h-20 shadow-2xl flex items-center justify-start space-x-4 px-4">
            <div className="flex flex-row items-center justify-start w-full">
              <Input
                name="search"
                type="search"
                placeholder="Explore organizations, categories"
                value={searchValue}
                onChange={handleSearchInput}
                className="w-full py-2 px-4 outline-none text-md text-gray-800 placeholder-gray-600"
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileSearch(false)}
              className="ml-auto flex items-center justify-end w-fit flex-none"
            >
              <XMarkIcon className="size-5 sm:size-6 md:size-7 text-gray-600" />
            </button>
          </div>
        )}
        {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
          </DisclosureButton>
        </div> 

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium",
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel> */}
      </Disclosure>
    </>
  )
}

export default Header
