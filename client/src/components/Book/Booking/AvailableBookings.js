export const availableTimeSlots = [
    "8:00:00",
    "9:00:00",
    "10:00:00",
    "11:00:00",
    "12:00:00",
    "14:00:00",
    "15:00:00",
    "16:00:00",
    "17:00:00",
  ];

export default function getAvailableTimeSlots(value, bookings, setAvailableSelectedDayTimeSlots) {
    const date = value.clone().format("YYYY-MM-DD");
    const selectedDayBookings = bookings.filter(
      (booking) => booking.date === date
    );

    const availableSelectedDayTimeSlots = availableTimeSlots.filter(
      (timeSlot) => {
        for (var booking of selectedDayBookings) {
          if (booking.time === timeSlot) {
            return false;
          }
        }
        return true;
      }
    );
    setAvailableSelectedDayTimeSlots(availableSelectedDayTimeSlots);
}