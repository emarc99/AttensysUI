import React from "react"
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack"
import Dropdown from "../Dropdown"
import Image from "next/image"
import free from "@/assets/free.svg"
import paid from "@/assets/paid.svg"

const MainFormView4 = () => {
  const pricing = [
    {
      sym: free,
      cost: "Free",
      desc: "Offer your course for free and reach a wide audience.",
    },
    {
      sym: paid,
      cost: "Paid",
      desc: "Set a price that reflects the value of your content",
    },
  ]

  return (
    <div>
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0]">
        <p className="text-sm text-white text-center py-2">
          Your course creation progress saves automatically, but feel free to
          also save your progress manually
        </p>
      </div>

      <div className="min-w-full w-[100%] ">
        <div className="flex justify-between py-2 my-5 border-t border-b border-[#d1d1d1] px-5 items-center">
          <div className="flex items-center">
            <div className="px-8 border-r border-blue-100">
              <IoMdArrowBack />
            </div>
            <p className="text-[#4A90E2] text-xl font-bold">
              Pricing & Discount
            </p>
          </div>

          <button className="bg-[#C5D322] text-[#2d3a4b] px-7 py-3 rounded text-white">
            Save progress
          </button>
          {/* background: #C5D322; */}
        </div>

        <div className="ml-24 mr-96 mt-12">
          <form action="CourseSetup5">
            <div className="my-12">
              <label htmlFor="" className="font-bold">
                Course Pricing
              </label>
              <p className="text-sm my-2">
                {`Set a price for your course that reflects the value of the content you’re offering.Pricing your course 
appropriately can help attract the right audience while providing a fair return on your effort.`}
              </p>
              <div className="flex my-12">
                {pricing.map((item, id) => (
                  <div
                    key={id}
                    className="border border-3 border-black mr-12 px-5 py-10 rounded-xl"
                  >
                    <div className="flex ">
                      <Image src={item.sym} alt={item.cost} />
                      <div className="text-sm">
                        <p className="font-bold">{item.cost}</p>
                        <p>{item.desc} </p>
                      </div>

                      <div className="p-1 rounded-xl bg-white border-4 border-black"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-12">
              <label htmlFor="" className="font-bold">
                Promo and Discount
              </label>
              <p>
                Promotional pricing is a great way to create urgency and
                increase the visibility of your course, helping you reach a
                wider audience while rewarding early sign-ups.
              </p>
              <div className="flex py-4">
                <input
                  type="text"
                  placeholder="Create Promo Code"
                  className="rounded flex-1 mr-4 bg-white text-[#2d3a4b] border-[#c0c0c0] border-2 py-2 pl-10"
                />
                <button className="rounded bg-white text-[#2d3a4b] border-[#d0d5dd] border-2  py-3 px-6 text-white">
                  + Add Promo Code
                </button>
              </div>
            </div>

            <div className="my-12">
              <div className="mt-12 mb-24">
                <button
                  className="rounded bg-[#4A90E2] px-48 py-3 text-white"
                  type="submit"
                >
                  Save and Proceed
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainFormView4
