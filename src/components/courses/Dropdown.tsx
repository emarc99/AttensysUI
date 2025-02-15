import React from "react"
interface CourseDropdownProps {
  handleCourseCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  selectedValue: string
  options: any
}
const Dropdown: React.FC<CourseDropdownProps> = ({
  options,
  selectedValue,
  handleCourseCategoryChange,
}) => {
  return (
    <div className="relative flex-auto h-full">
      <select
        id="courseCategory"
        name="courseCategory"
        value={selectedValue}
        onChange={handleCourseCategoryChange}
        required
        className="w-full h-full sm:w-[100%] px-4 py-2 border border-gray-300 rounded-xl appearance-none focus:outline-none pr-10"
      >
        {options.map((item: any, i: any) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}

export default Dropdown
