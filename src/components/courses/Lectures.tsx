import React from "react"
import Image from "next/image"

const Lectures = ({ lectures }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="py-12">
        {lectures.map((item, id) => (
          <div key={id} className="flex py-3">
            <Image src={item.img} alt="hero" />

            <div className="mx-10 mb-5-">
              <h4 className="font-bold my-5">
                {item.title}
                <span className="text-[#5801A9] ml-12">
                  ({item.timing} mins)
                </span>{" "}
              </h4>

              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-12">
        <div className="py-3">
          <p>
            This course provides a foundational understanding of web
            development. You'll learn essential skills in HTML and CSS, enabling
            you to create and style your own web pages. No prior experience is
            necessary!
          </p>
        </div>

        <div className="py-5">
          <h4 className="font-bold">Student Requirements</h4>

          <ul className="list-disc">
            <li>A computer with internet access</li>
            <li>Basic computer skills</li>
            <li>Willingness to learn and experiment</li>
          </ul>
        </div>

        <div className="py-5">
          <h4 className="font-bold"> Target Audience</h4>

          <ul className="list-disc">
            <li>Beginners interested in web development</li>
            <li>Aspiring web developers looking to start their journey</li>
            <li>Anyone wanting to create their own websites</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Lectures
