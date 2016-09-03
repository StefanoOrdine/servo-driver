const Cylon = require("cylon");

Cylon.robot({
  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    led: { driver: 'led', pin: 11 },
  },

  work: function (pi) {
    every((1).second(), pi.led.toggle);
  }
}).start();
