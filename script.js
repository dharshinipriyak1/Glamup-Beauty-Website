// Booking form confirmation
document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");
  const successMessage = document.getElementById("successMessage");
  const newBookingBtn = document.getElementById("newBookingBtn");
   
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault(); 

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

      // email check
      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      // phone check
      if (phone.length < 10 || isNaN(phone)) {
        alert("⚠️ Please enter a valid phone number.");
        return;
      }

      // Show success msg
      document.getElementById("customerName").textContent = name;
      document.getElementById("bookedService").textContent = service;
      document.getElementById("bookedPhone").textContent = phone;
      
      // Hide form & show success msg
      bookingForm.style.display = "none";
      successMessage.style.display = "block";
    });
  }
});