import React from "react"
import check from "@/assets/check.svg"
import Image from "next/image"
import option from "@/assets/option.svg"
import copy_addr from "@/assets/copy_addr.svg"
import copy from "copy-to-clipboard"

interface TableListProp {
  timestamp: string
  address: string
  status: string
  category: string
}

const TableList: React.FC<TableListProp> = (props) => {
  // copy to clipboard
  const handleCopy = () => {
    copy(props.address)
  }

  return (
    <tbody>
      <tr className="h-[56px] text-[14px] font-normal text-[#5801A9] bg-[#F2F1F1] leading-[19.79px] text-center px-4 my-10 rounded-2xl border overflow-hidden">
        <td className="px-4 py-2">{props.timestamp}</td>
        <td className="px-4 py-2 text-[14px] font-normal text-[#5801A9] leading-[19.79px]">
          <div className="flex items-center justify-around">
            {props.address}
            <Image
              src={copy_addr}
              alt="copy"
              onClick={handleCopy}
              className="cursor-pointer"
            />
          </div>
        </td>
        <td className="px-4 py-2 text-[14px] font-normal text-[#5801A9] leading-[19.79px]">
          <h1 className="h-[30px] flex justify-center items-center  text-[#115E2C] text-center rounded-lg bg-[#C4FFA2]">
            {props.status}
          </h1>
        </td>
        <td className="px-4 py-2 text-[14px] font-normal text-[#5801A9] leading-[19.79px]">
          {props.category}
        </td>
      </tr>
    </tbody>
  )
}

export default TableList
