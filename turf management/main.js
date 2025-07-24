  const modal = document.getElementById('bookingModal');
    const form = document.getElementById('bookingForm');

    function bookVenue(venueName) {
      document.getElementById('location').value = venueName;
      modal.style.display = 'block';
    }

    function closeModal() {
      modal.style.display = 'none';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const bookingData = {
        name: document.getElementById('userName').value,
        email: document.getElementById('email').value,
        date: document.getElementById('bookingDate').value,
        time: document.getElementById('bookingTime').value,
        venue: document.getElementById('location').value
      };

      console.log("Booking Confirmed:", bookingData);
      alert("Booking successful for " + bookingData.venue + "!");

      form.reset();
      closeModal();
    });

    
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal();
      }
    }