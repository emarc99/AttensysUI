import React from "react"

const Notification = () => {
  const notifCategory = [
    {
      read: "Most recent",
      msg: [
        "You earned a certificate for [UI/UX Beginners Intro]. Download it now and showcase your skills!",
        "Your Certification for the completion of the  “Web Development on APTOS” course is ready.",
        "Your Certification for the completion of the  “Web Development on APTOS” course is ready.",
      ],
    },
    {
      read: "Earlier",
      msg: [
        "📅 Live Q&A in [Course Title] starts in 30 minutes! Join to get your questions answered in real time and connect with other learners.",
        "Your Certification for the completion of the  “Web Development on APTOS” course is ready.",
        "Your Certification for the completion of the  “Web Development on APTOS” course is ready.",
      ],
    },
  ]
  return (
    <div className="bg-white py-12">
      {/* header */}
      <div className="px-12 py-5">
        <h1 className="font-bold text-[#A01B9B]">Notifications (14)</h1>
      </div>

      {/* content */}
      <div className="py-5 border text-sm">
        {notifCategory.map((item, i) => (
          <div key={i} className="py-3">
            <h4 className="py-3 px-12 font-bold">{item.read}</h4>
            {item.msg.map((msgDisplay, i) => (
              <div className="py-3 px-12 border" key={i}>
                <p>
                  {msgDisplay}{" "}
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
