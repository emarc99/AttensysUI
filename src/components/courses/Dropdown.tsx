import React from "react"

const Dropdown = (props: any) => {
  return (
    <div className="flex-auto">
      <select
        name="cars"
        id="cars"
        className="w-[100%] sm:w-[80%] p-2 border border-gray-300 rounded-xl"
      >
        {
          props.options.map((item:any, i:any) => (
            <option  value={item} key={i}>{item}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown
