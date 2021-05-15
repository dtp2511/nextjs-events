import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import React from "react";

export default function HomePage() {
  const featuredEvents = React.useCallback(getFeaturedEvents(), []);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
