


const getData = async (a) => {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=08836ccf667682ced57fa0ba475b7938`;

        let result = await fetch(url);
        let data = await result.json();



        let { temp, temp_max, temp_min, humidity, pressure } = data.main;
        const { country, sunrise, sunset } = data.sys;
        const city = data.name;
console.log("place",city,country);
        // Unix timestamp: 1691994764
        const unixTimestamp = data.dt;

        // Convert Unix timestamp to milliseconds
        const date = new Date(unixTimestamp * 1000);

        // Get day, month, year, hours, and minutes
        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear().toString().slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);

        // Format: dd/mm/yy hh:mm
        const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;

        console.log(formattedDateTime); // Output: 13/08/23 21:26

        const timezone = document.getElementById("timezone");

        timezone.innerHTML = formattedDateTime;



        // Unix timestamp: 1691973956
        const unixTimestampRise = sunrise;

        // Convert Unix timestamp to milliseconds
        const dateRise = new Date(unixTimestampRise * 1000);

        // Get hours and minutes
        const hoursRise = ("0" + dateRise.getHours()).slice(-2);
        const minutesRise = ("0" + dateRise.getMinutes()).slice(-2);

        // Format: hh:mm
        const formattedTimeRise = `${hoursRise}:${minutesRise}`;

        console.log(formattedTimeRise); // Output: 03:32

        const rise = document.getElementById("Sunrise");
        rise.innerHTML = formattedTimeRise;



        const unixTimestampSet = sunset;

        // Convert Unix timestamp to milliseconds
        const dateSet = new Date(unixTimestampSet * 1000);

        // Get hours and minutes
        const hoursSet = ("0" + dateSet.getHours()).slice(-2);
        const minutesSet = ("0" + dateSet.getMinutes()).slice(-2);

        // Format: hh:mm
        const formattedTimeSet = `${hoursSet}:${minutesSet}`;

        console.log(formattedTimeSet); // Output: 03:32

        const Set = document.getElementById("Sunset");
        Set.innerHTML = formattedTimeSet;




        const wea = data.weather[0].main;
        console.log(wea);
        const t = document.getElementById("temp");
        const con=document.getElementById("con");
        const det=document.getElementsByClassName("det");

        switch (wea) {
            case "Sunny":
                t.innerHTML = temp + " °c" + " " + wea + " " + '<i class="bi bi-brightness-high-fill">';
                con.style.backgroundImage="url('./files/sunny.gif')";

                break;
            case "Clouds":
                t.innerHTML = temp + " °c" + " " + wea + " " + '<i class="bi bi-cloud-lightning-rain-fill"></i>';
                con.style.backgroundImage="url('./files/thunder.gif')";
                

                break;
                case "Haze":
                t.innerHTML = temp + " °c" + " " + wea + " " + '<i class="bi bi-cloud-sun-fill"></i>';
                con.style.backgroundImage="url('./files/haze.gif')";
               

                break;

            default:
                t.innerHTML = temp + " °c" + " " + wea + " " + '<i class="bi bi-brightness-high-fill">';
              
                con.style.backgroundImage="url('./files/sunny.gif')";
                break;
        }






   

        const u_t = document.getElementById("u_temp");
        u_t.innerHTML = '<i class="bi bi-arrow-up-square-fill"></i>' + " " + temp_max;

        const l_t = document.getElementById("l_temp");
        l_t.innerHTML = '<i class="bi bi-arrow-down-square-fill"></i>' + " " + temp_min;

        const place = document.getElementById("place");
        place.innerHTML = city + "," + country;

        console.log(data.visibility);
        const vis = document.getElementById("Visibility");
        vis.innerHTML = data.visibility;

        const hum = document.getElementById("Humadity");
        hum.innerHTML = humidity;

        const pre = document.getElementById("Pressure");
        pre.innerHTML = pressure;



        const wind = document.getElementById("Wind");
        wind.innerHTML = data.wind.speed;
        // console.log(data.dt);
        console.log(data);
    } catch (error) {
        console.log("error", error);
    }
}

// const v=false;
// const con=document.getElementById("con");

// if(v){
//     con.style.backgroundImage
// }



function sub() {
    const value = document.getElementById("value");

    let v = value.value;
    console.log(v);
    getData(v);

    value.value = "";
}

const def=async ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=08836ccf667682ced57fa0ba475b7938`;
    let result = await fetch(url);
    let data = await result.json();
    let { temp, temp_max, temp_min, humidity, pressure } = data.main;
        const { country, sunrise, sunset } = data.sys;
        const city = data.name;
        const unixTimestamp = data.dt;
        const wea = data.weather[0].main;
        const wind=data.wind.speed;
        const vis=data.visibility;

        const arr=[temp,temp_max,temp_min,humidity,pressure,country,city,sunrise,sunset,unixTimestamp,wea,wind,vis];
        console.log(arr);

       

        // Convert Unix timestamp to milliseconds
        const date = new Date(unixTimestamp * 1000);

        // Get day, month, year, hours, and minutes
        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear().toString().slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);

        // Format: dd/mm/yy hh:mm
        const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;

        console.log(formattedDateTime); // Output: 13/08/23 21:26

        const timezone = document.getElementById("timezone");

        timezone.innerHTML = formattedDateTime;



        // Unix timestamp: 1691973956
        const unixTimestampRise = sunrise;

        // Convert Unix timestamp to milliseconds
        const dateRise = new Date(unixTimestampRise * 1000);

        // Get hours and minutes
        const hoursRise = ("0" + dateRise.getHours()).slice(-2);
        const minutesRise = ("0" + dateRise.getMinutes()).slice(-2);

        // Format: hh:mm
        const formattedTimeRise = `${hoursRise}:${minutesRise}`;

        console.log(formattedTimeRise); // Output: 03:32

        const rise = document.getElementById("Sunrise");
        rise.innerHTML = formattedTimeRise;



        const unixTimestampSet = sunset;

        // Convert Unix timestamp to milliseconds
        const dateSet = new Date(unixTimestampSet * 1000);

        // Get hours and minutes
        const hoursSet = ("0" + dateSet.getHours()).slice(-2);
        const minutesSet = ("0" + dateSet.getMinutes()).slice(-2);

        // Format: hh:mm
        const formattedTimeSet = `${hoursSet}:${minutesSet}`;

        console.log(formattedTimeSet); // Output: 03:32

        const Set = document.getElementById("Sunset");
        Set.innerHTML = formattedTimeSet;




        console.log(wea);
        const t = document.getElementById("temp");
        const con=document.getElementById("con");

        switch (wea) {
            case "Sunny":
                t.innerHTML = temp + " °c" + " " + wea + " " + '<i class="bi bi-brightness-high-fill">';
                con.style.backgroundImage="url('./files/sunny.gif')";

                break;
            case "Clouds":
                t.innerHTML = temp + " °c" + " " + wea + " " + '<i class="bi bi-cloud-lightning-rain-fill"></i>';
                con.style.backgroundImage="url('./files/thunder.gif')";
                

                break;
                case "Haze":
                t.innerHTML = temp + " °c" + " " + wea + " " + '<i class="bi bi-cloud-sun-fill"></i>';
                con.style.backgroundImage="url('./files/haze.gif')";
               

                break;

            default:
                t.innerHTML = temp + " °c" + " " + wea + " " + '<i class="bi bi-brightness-high-fill">';
              
                con.style.backgroundImage="url('./files/sunny.gif')";
                break;
        }


        const u_t = document.getElementById("u_temp");
        u_t.innerHTML = '<i class="bi bi-arrow-up-square-fill"></i>' + " " + temp_max;

        const l_t = document.getElementById("l_temp");
        l_t.innerHTML = '<i class="bi bi-arrow-down-square-fill"></i>' + " " + temp_min;

        const place = document.getElementById("place");
        place.innerHTML = city + "," + country;

        console.log(data.visibility);
        vis = document.getElementById("Visibility");
        vis.innerHTML = data.visibility;

        const hum = document.getElementById("Humadity");
        hum.innerHTML = humidity;

        const pre = document.getElementById("Pressure");
        pre.innerHTML = pressure;



        wind = document.getElementById("Wind");
        wind.innerHTML = data.wind.speed;
        // console.log(data.dt);
        console.log(data);
        
}







