import React from "react"
import { notifCategory } from "@/constants/data"
import Image from "next/image"

const Notification = () => {
  return (
    <div className="bg-white py-12 my-0 sm:my-12 mx-2 rounded-xl border-2">
      {/* header */}
      <div className="px-12 py-5">
        <h1 className="font-bold text-lg text-[#A01B9B]">Notifications (14)</h1>
      </div>

      {/* content */}
      <div className="py-5 border text-sm">
        {notifCategory.map((item, i) => (
          <div key={i} className="py-3">
            <h4 className="py-3 px-12 font-bold">{item.read}</h4>
            {item.msgs.map((msgDisplay, j) => (
              <div className="py-3 px-12 border flex items-center" key={j}>
                <Image src={msgDisplay.icon} alt="name" />
                <p className="ml-3">
                  {msgDisplay.msg}
                  <span className="text-[#A01B9B]">Click to preview</span>{" "}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notification
