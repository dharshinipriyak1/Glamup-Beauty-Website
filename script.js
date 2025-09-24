// Booking form validation & confirmation
document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");
   
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent refresh

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let service = document.getElementById("service").value;
      let date = document.getElementById("date").value;
      let time = document.getElementById("time").value;

      if (name === "" || email === "" || phone === "" || service === "" || date === "" || time === "") {
        alert("⚠️ Please fill in all fields!");
        return;
      }

      // Simple email check
      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      // Simple phone check
      if (phone.length < 10 || isNaN(phone)) {
        alert("⚠️ Please enter a valid phone number.");
        return;
      }

      // successful booking
      if (Submit){
alert(" ✅Booking Successful! We will contact you soon.");
     return; }
bookingForm.reset();

    });
  }
});

