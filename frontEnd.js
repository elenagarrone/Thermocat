$(document).ready(function(){
  
  var thermocat = new Thermocat;

  function ThermocatView(element) {
    this.el = $(element);
    this.thermocat = new Thermocat;
    this.el.text(this.thermocat.temperature);
    this.bindTo('.increase', this.thermocat, this.thermocat.increaseTemperature);
    this.bindTo('.decrease', this.thermocat, this.thermocat.decreaseTemperature);
    this.bindTo('.reset', this.thermocat, this.thermocat.resetTemperature);
  };

  ThermocatView.prototype.bindTo = function(selector, obj, func) {
    $(selector).on('click', function(){
      $('h1').text(func.call(obj))
    });
  };

  ;

  $('h1').text(thermocat.temperature + '°C');

  $('h2.increase').on('click', function(){
    thermocat.increaseTemperature();
    $('h1').text(thermocat.temperature + '°C');
    $('#right_eye').css('background-color', 'yellow');
    if (thermocat.temperature >= 25) {
      $('#right_eye').css('background-color', 'red');
      $('#left_eye').css('background-color', 'red');
    };
    if (thermocat.temperature < 25) {
      $('#right_eye').css('background-color', 'yellow');
      $('#left_eye').css('background-color', 'yellow');
    };
    if (thermocat.temperature <= 18) {
      $('#right_eye').css('background-color', 'green');
      $('#left_eye').css('background-color', 'green');
    };

  });

  $('h2.decrease').on('click', function(){
    thermocat.decreaseTemperature();
    $('h1').text(thermocat.temperature + '°C');
    if (thermocat.temperature >= 25) {
      $('#right_eye').css('background-color', 'red');
      $('#left_eye').css('background-color', 'red');
    };
    if (thermocat.temperature < 25) {
      $('#right_eye').css('background-color', 'yellow');
      $('#left_eye').css('background-color', 'yellow');
    };
    if (thermocat.temperature <= 18) {
      $('#right_eye').css('background-color', 'green');
      $('#left_eye').css('background-color', 'green');
    };
  });

  $('h2.reset').on('click', function(){
    thermocat.resetTemperature();
    $('h1').text(thermocat.temperature + '°C');
    $('#right_eye').css('background-color', 'yellow');
    $('#left_eye').css('background-color', 'yellow');
  });

  $('h2.turnoffpowersave').on('click', function() {
    thermocat.turnOffPowerSave();
    $('h1').text(thermocat.temperature + '°C')
    $('h2.powersavestatus').text('Power save mode is off');
    $('#right_eye').css('background-color', 'yellow');
    $('#left_eye').css('background-color', 'yellow');
  });

  $('h2.turnonpowersave').on('click', function(){
    thermocat.turnOnPowerSave();
    $('h1').text(thermocat.temperature + '°C')
    $('h2.powersavestatus').text('Power save mode is on');
    $('#right_eye').css('background-color', 'yellow');
    $('#left_eye').css('background-color', 'yellow');
  });

});

