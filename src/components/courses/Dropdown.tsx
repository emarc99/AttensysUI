import React from "react"

const Dropdown = () => {
  return (
    <div className="flex-auto">
      <select
        name="cars"
        id="cars"
        className="w-[80%]  clg:w-[70%] lclg:w-[90%] p-2 border border-gray-300 rounded-xl"
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  )
}

export default Dropdown
