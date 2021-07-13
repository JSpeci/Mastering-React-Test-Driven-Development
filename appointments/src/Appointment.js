import React from 'react';


const appointmentTimeOfDay = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
}

export const Appointment = ({ startsAt,customer }) => (
  <div>{customer.firstName}</div>
);

export const AppointmentsDayView = ({ appointments }) => <div id="appointments-day-view">
  {appointments.length === 0 ? (
    <p>There are no appointments scheduled for today.</p>
  ) : (
    <Appointment {...appointments[0]} />
  )}
  <ol>
    {
      appointments.map(i => <li key={i.startsAt}>
        {
          appointmentTimeOfDay(i.startsAt)
        }
      </li>)
    }
  </ol>
</div>;