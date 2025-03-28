"use client";
import React, { useEffect } from "react";
import Coursedropdown from "@/components/courses/Coursedropdown";
import { useAtom } from "jotai";
import {
  coursestatusAtom,
  bootcampdropdownstatus,
} from "@/state/connectedWalletStarknetkitNext";
import ExplorePage from "@/components/explorer/ExplorePage";
import Bootcampdropdown from "@/components/bootcamp/Bootcampdropdown";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { gql, request } from "graphql-request";

const orgquery = gql`
  {
    organizationProfiles {
      org_name
    }
    bootCampCreateds {
      bootcamp_name
      org_name
    }
    bootcampRegistrations {
      bootcamp_id
      org_address
    }
    instructorAddedToOrgs {
      instructors
      org_name
    }
    instructorRemovedFromOrgs {
      instructor_addr
      org_owner
    }
    registrationApproveds {
      bootcamp_id
      student_address
    }
    registrationDeclineds {
      bootcamp_id
      student_address
    }
  }
`;
const coursequery = gql`
  {
    adminTransferreds {
      new_admin
    }
    courseCertClaimeds {
      candidate
    }
    courseCreateds {
      owner_
      course_ipfs_uri
    }
    courseReplaceds {
      owner_
      new_course_uri
    }
  }
`;
const eventquery = gql`
  {
    eventCreateds {
      event_name
      event_organizer
    }
    adminOwnershipClaimeds {
      new_admin
    }
    adminTransferreds {
      new_admin
    }
    attendanceMarkeds {
      attendee
    }
    registeredForEvents {
      attendee
    }
    registrationStatusChangeds {
      registration_open
    }
  }
`;
const orgurl =
  "https://api.studio.thegraph.com/query/107628/orgsubgraph/version/latest";
const headers = { Authorization: "Bearer {api-key}" };

const courseurl =
  "https://api.studio.thegraph.com/query/107628/coursesubgraph/version/latest";

const eventurl =
  "https://api.studio.thegraph.com/query/107628/eventsubgraph/version/latest";

const Index = () => {
  const [status, setStatus] = useAtom(coursestatusAtom);
  const [bootcampdropstat, setbootcampdropstat] = useAtom(
    bootcampdropdownstatus,
  );
  const queryClient = new QueryClient();
  const otherqueryClient = new QueryClient();
  const eventqueryClient = new QueryClient();

  const handlesub = async () => {
    await queryClient.prefetchQuery({
      queryKey: ["data"],
      async queryFn() {
        return await request(orgurl, orgquery, {}, headers);
      },
    });
  };

  const handleothersub = async () => {
    await otherqueryClient.prefetchQuery({
      queryKey: ["data"],
      async queryFn() {
        return await request(courseurl, coursequery, {}, headers);
      },
    });
  };
  const handleeventsub = async () => {
    await eventqueryClient.prefetchQuery({
      queryKey: ["data"],
      async queryFn() {
        return await request(eventurl, eventquery, {}, headers);
      },
    });
  };
  const handlePageClick = () => {
    setbootcampdropstat(false);
    setStatus(false);
  };

  useEffect(() => {
    handlesub();
    handleothersub();
    handleeventsub();
  }, [queryClient, otherqueryClient, eventqueryClient]);

  return (
    <div onClick={handlePageClick}>
      {status && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm "></div>
      )}
      {bootcampdropstat && (
        <div className="fixed inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      )}
      <div onClick={(e) => e.stopPropagation()}>
        <Coursedropdown />
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <Bootcampdropdown />
      </div>
      <HydrationBoundary state={dehydrate(eventqueryClient)}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HydrationBoundary state={dehydrate(otherqueryClient)}>
            <ExplorePage />
          </HydrationBoundary>
        </HydrationBoundary>
      </HydrationBoundary>
    </div>
  );
};

export default Index;
