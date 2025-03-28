import { useEffect, useRef, useState } from "react";

interface OrganizationProfile {
  org_name: string;
}

interface BootCampCreated {
  bootcamp_name: string;
  org_name: string;
}

interface BootcampRegistration {
  bootcamp_id: string;
  org_address: string;
}

interface InstructorAddedToOrg {
  instructors: string[];
  org_name: string;
}

interface InstructorRemovedFromOrg {
  instructor_addr: string;
  org_owner: string;
}

interface RegistrationApproved {
  bootcamp_id: string;
  student_address: string;
}

interface RegistrationDeclined {
  bootcamp_id: string;
  student_address: string;
}

interface AdminTransferred {
  new_admin: string;
}

interface CourseCertClaimed {
  candidate: string;
}

interface CourseCreated {
  owner_: string;
  course_ipfs_uri: string[];
}

interface CourseReplaced {
  owner_: string;
  new_course_uri: string;
}

interface EventCreated {
  event_name: string[];
  event_organizer: string;
}

interface AttendanceMarked {
  attendee: string;
}

interface RegisteredForEvent {
  attendee: string;
}

interface RegistrationStatusChanged {
  registration_open: number;
}

interface OrganizationEvents {
  organizationProfiles?: OrganizationProfile[];
  bootCampCreateds?: BootCampCreated[];
  bootcampRegistrations?: BootcampRegistration[];
  instructorAddedToOrgs?: InstructorAddedToOrg[];
  instructorRemovedFromOrgs?: InstructorRemovedFromOrg[];
  registrationApproveds?: RegistrationApproved[];
  registrationDeclineds?: RegistrationDeclined[];
}

interface CourseEvents {
  adminTransferreds?: AdminTransferred[];
  courseCertClaimeds?: CourseCertClaimed[];
  courseCreateds?: CourseCreated[];
  courseReplaceds?: CourseReplaced[];
}

interface EventEvents {
  eventCreateds?: EventCreated[];
  adminOwnershipClaimeds?: any[];
  adminTransferreds?: any[];
  attendanceMarkeds?: AttendanceMarked[];
  registeredForEvents?: RegisteredForEvent[];
  registrationStatusChangeds?: RegistrationStatusChanged[];
}

interface EventData {
  organizations?: OrganizationEvents;
  courses?: CourseEvents;
  events?: EventEvents;
}

interface EventItem {
  id: string;
  message: string;
  timestamp: number;
}

const EventFeed = ({ data }: { data: EventData }) => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const feedRef = useRef<HTMLDivElement>(null);
  const previousDataRef = useRef<EventData | null>(null);

  const isNewItem = <T extends keyof EventData>(
    type: T,
    field: keyof (T extends "organizations"
      ? OrganizationEvents
      : T extends "courses"
        ? CourseEvents
        : EventEvents),
    item: any,
  ): boolean => {
    const currentTypeData = previousDataRef.current?.[type] as
      | (T extends "organizations"
          ? OrganizationEvents
          : T extends "courses"
            ? CourseEvents
            : EventEvents)
      | undefined;

    if (!currentTypeData) return true;

    const fieldData = currentTypeData[field as keyof typeof currentTypeData] as
      | any[]
      | undefined;
    if (!fieldData) return true;

    return !fieldData.some(
      (prevItem) => JSON.stringify(prevItem) === JSON.stringify(item),
    );
  };

  useEffect(() => {
    if (!data) return;

    const newEvents: EventItem[] = [];
    const now = Date.now();

    // Process organization events
    if (data.organizations) {
      data.organizations.organizationProfiles?.forEach((org) => {
        if (isNewItem("organizations", "organizationProfiles", org)) {
          newEvents.push({
            id: `${org.org_name}-profile-${now}`,
            message: `${org.org_name} created a profile`,
            timestamp: now,
          });
        }
      });

      data.organizations.bootCampCreateds?.forEach((bootcamp) => {
        if (isNewItem("organizations", "bootCampCreateds", bootcamp)) {
          newEvents.push({
            id: `${bootcamp.bootcamp_name}-created-${now}`,
            message: `${bootcamp.org_name} created a bootcamp: ${bootcamp.bootcamp_name}`,
            timestamp: now,
          });
        }
      });

      data.organizations.bootcampRegistrations?.forEach((reg) => {
        if (isNewItem("organizations", "bootcampRegistrations", reg)) {
          newEvents.push({
            id: `${reg.bootcamp_id}-reg-${now}`,
            message: `${truncateAddress(reg.org_address)} got a new registration for bootcamp with id ${reg.bootcamp_id}`,
            timestamp: now,
          });
        }
      });

      data.organizations.instructorAddedToOrgs?.forEach((instructor) => {
        if (isNewItem("organizations", "instructorAddedToOrgs", instructor)) {
          newEvents.push({
            id: `${instructor.org_name}-instructor-add-${now}`,
            message: `${instructor.org_name} added instructors`,
            timestamp: now,
          });
        }
      });

      data.organizations.instructorRemovedFromOrgs?.forEach((instructor) => {
        if (
          isNewItem("organizations", "instructorRemovedFromOrgs", instructor)
        ) {
          newEvents.push({
            id: `${instructor.org_owner}-instructor-remove-${now}`,
            message: `${truncateAddress(instructor.org_owner)} removed an instructor`,
            timestamp: now,
          });
        }
      });

      data.organizations.registrationApproveds?.forEach((approval) => {
        if (isNewItem("organizations", "registrationApproveds", approval)) {
          newEvents.push({
            id: `${approval.bootcamp_id}-approval-${now}`,
            message: `${truncateAddress(approval.student_address)} was approved for bootcamp with id ${approval.bootcamp_id}`,
            timestamp: now,
          });
        }
      });

      data.organizations.registrationDeclineds?.forEach((declined) => {
        if (isNewItem("organizations", "registrationDeclineds", declined)) {
          newEvents.push({
            id: `${declined.bootcamp_id}-declined-${now}`,
            message: `${truncateAddress(declined.student_address)} was declined for bootcamp with id ${declined.bootcamp_id}`,
            timestamp: now,
          });
        }
      });
    }

    // Process course events
    if (data.courses) {
      data.courses.adminTransferreds?.forEach((transfer) => {
        if (isNewItem("courses", "adminTransferreds", transfer)) {
          newEvents.push({
            id: `${transfer.new_admin}-admin-${now}`,
            message: `${truncateAddress(transfer.new_admin)} became an admin`,
            timestamp: now,
          });
        }
      });

      data.courses.courseCertClaimeds?.forEach((cert) => {
        if (isNewItem("courses", "courseCertClaimeds", cert)) {
          newEvents.push({
            id: `${cert.candidate}-cert-${now}`,
            message: `${truncateAddress(cert.candidate)} claimed a course`,
            timestamp: now,
          });
        }
      });

      data.courses.courseCreateds?.forEach((course) => {
        if (isNewItem("courses", "courseCreateds", course)) {
          newEvents.push({
            id: `${course.owner_}-create-${now}`,
            message: `${truncateAddress(course.owner_)} created a course`,
            timestamp: now,
          });
        }
      });

      data.courses.courseReplaceds?.forEach((course) => {
        if (isNewItem("courses", "courseReplaceds", course)) {
          newEvents.push({
            id: `${course.owner_}-update-${now}`,
            message: `${truncateAddress(course.owner_)} updated a course`,
            timestamp: now,
          });
        }
      });
    }

    // Process event-related events
    if (data.events) {
      data.events.eventCreateds?.forEach((event) => {
        if (isNewItem("events", "eventCreateds", event)) {
          newEvents.push({
            id: `${event.event_name[0]}-created-${now}`,
            message: `${truncateAddress(event.event_organizer)} created event: ${event.event_name[0]}`,
            timestamp: now,
          });
        }
      });

      data.events.attendanceMarkeds?.forEach((attendance) => {
        if (isNewItem("events", "attendanceMarkeds", attendance)) {
          newEvents.push({
            id: `${attendance.attendee}-attended-${now}`,
            message: `${truncateAddress(attendance.attendee)} attended an event`,
            timestamp: now,
          });
        }
      });

      data.events.registeredForEvents?.forEach((registration) => {
        if (isNewItem("events", "registeredForEvents", registration)) {
          newEvents.push({
            id: `${registration.attendee}-registered-${now}`,
            message: `${truncateAddress(registration.attendee)} registered for an event`,
            timestamp: now,
          });
        }
      });

      data.events.registrationStatusChangeds?.forEach((statusChange) => {
        if (isNewItem("events", "registrationStatusChangeds", statusChange)) {
          newEvents.push({
            id: `status-change-${now}`,
            message: `Registration status was updated for an event`,
            timestamp: now,
          });
        }
      });
    }

    if (newEvents.length > 0) {
      setEvents((prev) => [...newEvents, ...prev]);
    }

    previousDataRef.current = data;
  }, [data]);

  useEffect(() => {
    if (feedRef.current && events.length > 0) {
      feedRef.current.scrollTop = 0;
    }
  }, [events]);

  const truncateAddress = (address: string) => {
    if (!address) return "Unknown";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="w-[90%] mx-auto p-4">
      <div
        ref={feedRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-y-auto h-[800px] p-4 space-y-3"
      >
        {events.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No recent activity
          </p>
        ) : (
          events.map((event, index) => (
            <div
              key={index}
              className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md border-l-4 border-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <p className="text-gray-800 dark:text-gray-200">
                {event.message}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {new Date(event.timestamp).toLocaleTimeString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventFeed;
