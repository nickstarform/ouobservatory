// Docs at http://simpleweatherjs.com
$(document).ready(function() {
    $.simpleWeather({
        woeid: '', //2357536
        location: 'NORMAN, OK',
        unit: 'f',
        success: function(weather) {
            html = '<div align="center" ><p class="hweather">'+weather.temp+'&deg;'+weather.units.temp+'</p></div>';
            //Don't forget to include the moment.js plugin.
            var timestamp = moment(weather.updated);
            html += '<div class="flex-container-schedule">'
            html += '<ul align="center"><li class="currently center"  style="width: 200px;">'+weather.currently+'</li>';
            html += '<li style="width: 200px;">'+weather.alt.temp+'&deg;C</li>';
            html += '<li style="width: 200px;">'+weather.wind.speed+' '+weather.units.speed+' '+weather.wind.direction+'</li></ul>';
            html += '</div>'
            html += '<p>3 Day Forcast</p>';
            html += '<div class="flex-container-schedule"><ul align="center">';
            for(var i=0;i<3;i++) {
                html += '<li style="width: 200px;">'+weather.forecast[i].day+': '+weather.forecast[i].high+'F</li>';
            }
            html += '</ul></div>'
            html += '<p>Weather updated: '+weather.updated+'</p>';
            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
});
