function updateClock() {
    // Get the current date
    currentTime = new Date();
    
    // Extract hour, minute and seconds from the date
    currentHours = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentSeconds = currentTime.getSeconds();

    // Pad 0 if hour or minute or second is less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;

    // Convert railway clock to AM/PM clock
    currentHours = (currentHours> 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? currentHours = 12 : currentHours;
    
     // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHours < 12) ? 'AM' : 'PM';
    
    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHours + ':' + currentMinutes + ':' + currentSeconds + ' ' + timeOfDay
    
    // Insert the time string inside the DOM
    document.getElementById('clock').innerHTML = currentTimeStr;
}


