App = {

  // Get current time and format
  getTime: function () {
    var date = new Date();
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });
  },

  init: function () {
    /* CLOCK */
    document.getElementById('clock').innerHTML = App.getTime();
    setInterval(() => {
      document.getElementById('clock').innerHTML = App.getTime();
    }, 30000);
  }
};

window.onload = App.init();
