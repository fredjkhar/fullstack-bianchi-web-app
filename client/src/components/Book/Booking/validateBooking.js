const validateBookingForm = (booking, checked) => {
  const { name, phone, time } = booking;
  if (name === "" || phone === "") {
    return "One or more fields are empty. Please fill in all fields.";
  }
  var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(!phone.match(phoneRegex)) {
    return "Invalid phone number. Please provide a valid phone number.";
  }
  if (time === "") {
    return "Please select a time slot"
  }
  if (!checked) {
    return "Please check the box below to confirm the time slot."
  }
  return false;
};

export default validateBookingForm;
