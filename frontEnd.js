$(document).ready(function(){
  
  var thermocat = new Thermocat;

  $('h1').text(thermocat.temperature + '°C');

  $('h2.increase').on('click', function(){
    thermocat.increaseTemperature();
    $('h1').text(thermocat.temperature + '°C');
  });

  $('h2.decrease').on('click', function(){
    thermocat.decreaseTemperature();
    $('h1').text(thermocat.temperature + '°C');
  });

  $('h2.reset').on('click', function(){
    thermocat.resetTemperature();
    $('h1').text(thermocat.temperature + '°C');
  });

  $('h2.turnoffpowersave').on('click', function() {
    thermocat.turnOffPowerSave();
    $('h1').text(thermocat.temperature + '°C')
    $('h2.powersavestatus').text('Power save mode is off');
  });

  $('h2.turnonpowersave').on('click', function(){
    thermocat.turnOnPowerSave();
    $('h1').text(thermocat.temperature + '°C')
    $('h2.powersavestatus').text('Power save mode is on');
  });

});

