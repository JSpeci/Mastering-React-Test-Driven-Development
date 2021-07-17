import React, { useState } from 'react';


const appointmentTimeOfDay = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
}

export const Appointment = ({ startsAt, customer }) => (
  <div>{customer.firstName}</div>
);

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(
    0
  );

  return (
    <div id="appointments-day-view">
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
      <ol>
        {
          appointments.map((app, i) => <li key={app.startsAt}>
            <button type="button"
              onClick={() => setSelectedAppointment(i)}
            >
              {
                appointmentTimeOfDay(app.startsAt)
              }
            </button>
          </li>)
        }
      </ol>
    </div>
  );
};