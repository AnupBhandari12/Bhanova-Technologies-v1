"use client";

import { useState } from "react";
import { hotelRooms } from "@/data/smartlink-demo-content";
import styles from "./ProfileExperiences.module.css";

export function BookingPreview() {
  const [room, setRoom] = useState(hotelRooms[0].name);
  const [nights, setNights] = useState("1 night");
  const [preview, setPreview] = useState(null);
  function showPreview(event) {
    event.preventDefault();
    setPreview({ room, nights });
  }
  return (
    <form className={styles.booking} onSubmit={showPreview}>
      <label htmlFor="booking-room">Choose a room</label>
      <select
        id="booking-room"
        value={room}
        onChange={(event) => {
          setRoom(event.target.value);
          setPreview(null);
        }}
      >
        {hotelRooms.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
      <label htmlFor="booking-nights">Length of stay</label>
      <select
        id="booking-nights"
        value={nights}
        onChange={(event) => {
          setNights(event.target.value);
          setPreview(null);
        }}
      >
        <option>1 night</option>
        <option>2 nights</option>
        <option>3 nights</option>
        <option>4+ nights</option>
      </select>
      <p>
        This is an enquiry preview, not live room availability. No personal details are
        collected.
      </p>
      <button type="submit">Preview enquiry</button>
      {preview && (
        <div className={styles.confirmation} role="status">
          <strong>Your sample enquiry</strong>
          <span>
            {preview.room} · {preview.nights}
          </span>
          <p>
            No room has been booked and no message has been sent. A live profile can
            connect to your booking provider or business WhatsApp.
          </p>
        </div>
      )}
    </form>
  );
}
