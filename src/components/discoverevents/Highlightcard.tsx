import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { pinata } from "../../../utils/config";

// interface HighlightCardProp {
//   name: string;
//   time: string;
//   image: any;
//   onClick?: () => void;
// }

const Highlightcard = (props: any) => {
  const [logoImagesource, setLogoImage] = useState<string | StaticImport>("");
  const [isLoading, setIsLoading] = useState(true);
  const [eventName, setEventName] = useState("");
  const [startday, setstartday] = useState("");
  const [time, settime] = useState("");

  const obtainCIDdata = async (CID: string) => {
    try {
      //@ts-ignore
      const data = await pinata.gateways.get(CID);
      console.log("fetched CID event", data);
      //@ts-ignore
      const logoData: GetCIDResponse = await pinata.gateways.get(
        //@ts-ignore
        data?.data?.eventDesign,
      );
      const objectURL = URL.createObjectURL(logoData.data as Blob);

      // //@ts-ignore
      // const nftData: GetCIDResponse = await pinata.gateways.get(
      //   //@ts-ignore
      //   data?.data?.BootcampNftImage,
      // );
      // const logoObjectURL = URL.createObjectURL(nftData.data as Blob);
      setLogoImage(objectURL);
      //@ts-ignore
      setEventName(data?.data?.name);
      //@ts-ignore
      setstartday(data?.data?.startday);
      //@ts-ignore
      settime(data?.data?.starttime);
    } catch (error) {
      console.error("Error fetching IPFS content:", error);
      throw error;
    }
  };
  // console.log('checking props', props.uri_data)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await obtainCIDdata(props.uri_data);
      } catch (error) {
        console.error("Error loading bootcamp data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [props.uri_data]);

  if (isLoading) {
    return (
      <div className="relative rounded-2xl mx-auto overflow-hidden flex items-center justify-center min-h-[300px] bg-white">
        <LoadingSpinner size="md" colorVariant="primary" />
      </div>
    );
  }

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":").map(Number); // Convert "9:30" -> [9, 30]
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour; // Convert 24-hour to 12-hour format
    return `${formattedHour}:${minute} ${period}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    // Function to get ordinal suffix (st, nd, rd, th)
    const getOrdinalSuffix = (day: number) => {
      if (day >= 11 && day <= 13) return "th"; // Special case for 11-13
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getOrdinalSuffix(day)}, ${month} ${year}`;
  };

  return (
    <div className="cursor-pointer relative h-[380px] w-[75%] mx-auto sm:mx-0 my-12 sm:my-0 sm:w-[278px] rounded-2xl ">
      <Image
        onClick={props.onClick}
        src={logoImagesource}
        alt="eventimage"
        className="h-full w-full object-cover rounded-2xl"
        layout="fill"
      />
      <div className="absolute bottom-6 z-20 w-full text-center bg-[#1A1A1A99] py-3">
        <h1 className="text-[#FFFFFF] text-[13px] font-normal leading-[21px]">
          HIGHLIGHTED EVENT
        </h1>
        <h1 className="text-[#FFFFFF] text-[24px] font-bold leading-[39px]">
          {eventName}
        </h1>
        <h1 className="text-[#FFFFFF] text-[14px] font-semibold leading-[23px]">
          {formatDate(startday)} ({formatTime(time)})
        </h1>
      </div>
    </div>
  );
};

export default Highlightcard;
