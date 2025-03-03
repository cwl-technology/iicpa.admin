"use client";

import { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container-full">
        <section className="content">
          <div className="card bg-primary-light">
            <div className="card-header">
              <h4 className="card-title">Calender</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9">
              <div className="card">
                <div className="card-body">
                  <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    events={[
                      { title: "LUNCH", date: "2024-02-14", className: "bg-success" },
                      { title: "GO HOME", date: "2024-02-15", className: "bg-primary" },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <Link href="/due-dates/create">
                <button className="btn btn-danger" id="btn-new-event">
                  Create New Event
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Page;
