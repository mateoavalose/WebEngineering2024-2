import React, { useState, useEffect, useRef } from 'react';
import { DayPilot, DayPilotMonth } from "@daypilot/daypilot-lite-react";

export const MonthlyCalendar = () => {
    const [calendar, setCalendar] = useState(null);
    const [events, setEvents] = useState([]);
    const [startDate, setStartDate] = useState(DayPilot.Date.today().firstDayOfMonth());
  
    const config = {
      eventHeight: 30,
      headerHeight: 30,
      cellHeaderHeight: 25,
      onBeforeEventRender: args => {
        args.data.borderColor = "darker";
        if (args.data.backColor) {
          args.data.barColor = DayPilot.ColorUtil.lighter(args.data.backColor, 1);
        }
      },
      contextMenu: new DayPilot.Menu({
        items: [
          {
            text: "Delete",
            onClick: args => {
              const e = args.source;
              calendar.events.remove(e);
            }
          },
          {
            text: "-"
          },
          {
            text: "Blue",
            icon: "icon icon-blue",
            color: "#3d85c6",
            onClick: args => updateColor(args.source, args.item.color)
          },
          {
            text: "Green",
            icon: "icon icon-green",
            color: "#6aa84f",
            onClick: args => updateColor(args.source, args.item.color)
          },
          {
            text: "Yellow",
            icon: "icon icon-yellow",
            color: "#ecb823",
            onClick: args => updateColor(args.source, args.item.color)
          },
          {
            text: "Red",
            icon: "icon icon-red",
            color: "#d5663e",
            onClick: args => updateColor(args.source, args.item.color)
          },
          {
            text: "Auto",
            color: null,
            onClick: args => updateColor(args.source, args.item.color)
          },
  
        ]
      }),
      onTimeRangeSelected: async args => {
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
  
        if (!modal.result) {
          return;
        }
  
        calendar.clearSelection();
  
        calendar.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },
    };
  
    const updateColor = (e, color) =>{
      e.data.backColor = color;
      calendar.events.update(e);
    };
  
    useEffect(() => {
  
      const events =  [
        {
          id: 1,
          text: "Event 1",
          start: "2024-09-02",
          end: "2024-09-05",
          backColor: "#d5663e",
        },
        {
          id: 2,
          text: "Event 2",
          start: "2024-09-06",
          end: "2024-09-07",
          backColor: "#ecb823",
        },
        {
          id: 3,
          text: "Event 3",
          start: "2024-09-16",
          end: "2024-09-17",
          backColor: "#6aa84f",
        },
        {
          id: 4,
          text: "Event 4",
          start: "2024-09-20",
          end: "2024-09-22",
          backColor: "#3d85c6",
        },
        {
          id: 5,
          text: "Event 5",
          start: "2024-09-25",
          end: "2024-09-26"
        },
      ];
  
      setEvents(events);
    }, [calendar]);
  

  return (
    <div className="montlhyCalendar">
      <DayPilotMonth
        {...config}
        events={events}
        startDate={startDate}
        controlRef={setCalendar}
      />
    </div>
  );
};