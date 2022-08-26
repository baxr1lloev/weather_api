fetch('https://api.openweathermap.org/data/2.5/weather?q=Samarkand&appid=cd3ac7b25e0f6dbd4acdef658e8d082d')
       .then(function(resp) {return resp.json()})
       .then(function (data) {
        console.log(data);

        document.querySelector('.name').innerHTML = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').innerHTML = data.weather[0] ['description'];
        document.querySelector('.features').innerHTML = '<img src = "./favicon/cloudy-day.png">'
       })