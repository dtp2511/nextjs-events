import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;

  function renderEventItems(items) {
    return (
      <ul className={classes.list}>
        {items.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </ul>
    );
  }
  return renderEventItems(items);
};

export default React.memo(EventList);
