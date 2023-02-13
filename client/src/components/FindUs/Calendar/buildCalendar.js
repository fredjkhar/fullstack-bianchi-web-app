const buildCalendar = (value) => {
    const start_day = value.clone().startOf("month").startOf("week");
    const end_day = value.clone().endOf("month").endOf("week");

    const day = start_day.clone().subtract(1, "day");
    const calendar = [];
    while (day.isBefore(end_day, "day")) {
      calendar.push(
        Array(7)
          .fill(null)
          .map(() => day.add(1, "day").clone())
      );
    }
    return calendar;
};

export default buildCalendar;