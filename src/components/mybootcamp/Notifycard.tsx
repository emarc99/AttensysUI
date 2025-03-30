import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

interface Notification {
  type: string;
  bootcampId: string;
  timestamp: string;
  blockNumber: string;
}

const Notifycard = ({ notification }: { notification: Notification }) => {
  console.log(notification);

  const getNotificationContent = () => {
    switch (notification.type) {
      case "ORGANIZATION_APPROVED":
        return {
          icon: (
            <MdVerified className="h-[32px] w-[32px] flex-none text-green-600" />
          ),
          message: (
            <>
              Your organization has been{" "}
              <span className="text-green-600 font-medium">approved</span>. You
              can now create bootcamps and courses.
            </>
          ),
        };

      case "BOOTCAMP_REGISTRATION":
        return {
          icon: (
            <FaUserPlus className="h-[32px] w-[32px] flex-none text-[#A01B9B]" />
          ),
          message: (
            <>
              You have successfully registered for{" "}
              <span className="text-[#A01B9B] underline">
                Web3 Afrika bootcamp
              </span>
            </>
          ),
        };

      case "INSTRUCTOR_ADDED":
        return {
          icon: (
            <FaUserPlus className="h-[32px] w-[32px] flex-none text-blue-600" />
          ),
          message: (
            <>
              You have been added as an instructor to{" "}
              <span className="text-blue-600 underline">
                Web3 Afrika bootcamp
              </span>
            </>
          ),
        };

      case "INSTRUCTOR_REMOVED":
        return {
          icon: (
            <FaUserPlus className="h-[32px] w-[32px] flex-none text-red-600" />
          ),
          message: (
            <>
              You have been removed as an instructor from{" "}
              <span className="text-red-600 underline">
                Web3 Afrika bootcamp
              </span>
            </>
          ),
        };

      default:
        return {
          icon: (
            <GiBookshelf className="h-[32px] w-[32px] flex-none text-[#A01B9B]" />
          ),
          message: (
            <>
              New notification from{" "}
              <span className="text-[#A01B9B] underline">
                Web3 Afrika bootcamp
              </span>
            </>
          ),
        };
    }
  };

  const { icon, message } = getNotificationContent();

  return (
    <div className="h-[100px] px-4 border-b-[1px] border-b-[#CACBCB] flex space-x-3 items-center">
      {icon}
      <h1 className="text-[14px] font-light leading-[22px] text-[#333333]">
        {message}
      </h1>
    </div>
  );
};

export default Notifycard;
