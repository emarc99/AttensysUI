import React, { useRef } from "react"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import animationData from "./../assets/meet.json"

export default function Animation() {
  const meetRef = useRef<LottieRefCurrentProps>(null)
  return (
    <div className="min-h-screen flex items-center justify-center lg:mx-48 ">
      <div className="relative">
        <Lottie
          lottieRef={meetRef}
          animationData={animationData}
          loop={false}
          onComplete={() => {
            meetRef.current?.goToAndPlay(35, true)
          }}
        />

        <div className="text-center space-y-4 bg-gradient-to-r from-blue-400 min-w-full min-h-48 absolute top-72">
          {/* <h1 className="text-2xl font-bond">AttenSys</h1> */}
        </div>
      </div>
    </div>
  )
}
