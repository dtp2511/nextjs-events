import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummery from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAllert from "../../components/ui/error-alert";

const EventDetailPage = () => {
  const router = useRouter();
  const eventID = router.query.eventId;
  const event = getEventById(eventID);
  console.log(event);
  function renderEventDetail(event) {
    if (!event)
      return (
        <ErrorAllert>
          <p>No event found!</p>
        </ErrorAllert>
      );
    else
      return (
        <Fragment>
          <EventSummery title={event.title} />
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </Fragment>
      );
  }
  return renderEventDetail(event);
};

export default EventDetailPage;
