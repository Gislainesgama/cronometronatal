document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.querySelector('.countdown');
    
    function updateCountdown() {
      const christmasDate = new Date('December 25, 2023 00:00:00 GMT');
      const currentDate = new Date();
      const timeDifference = christmasDate - currentDate;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = days + 'd';
      document.getElementById('hours').textContent = hours + 'h';
      document.getElementById('minutes').textContent = minutes + 'm';
      document.getElementById('seconds').textContent = seconds + 's';
    }
  
    setInterval(updateCountdown, 1000);
    updateCountdown(); 
  });

  
  
  
