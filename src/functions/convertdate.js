export function getDay(inputDate) {
    // Create a date object from the input string
    const dateObj = new Date(inputDate);
    const day = dateObj.getDate();
    // Format the final string
    return `${day}`;
}

export function getMonth(inputDate) {
    // Create a date object from the input string
    const dateObj = new Date(inputDate);
    const months = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    const month = months[dateObj.getMonth()];
    // Format the final string
    return `${month}`;
}

export function getDayOfWeek(inputDate) {
    // Create a date object from the input string
    const dateObj = new Date(inputDate);
    // Array of weekday names
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    // Get the day of the week, day of the month, and full year
    const dayOfWeek = daysOfWeek[dateObj.getDay()];
    // Format the final string
    return `${dayOfWeek}`;
}



export function convertTimeTo12HourFormat(time) {
    // Split the input time into hours and minutes
    const [hours, minutes] = time.split(':').map(Number);

    // Determine whether it's AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12; // If hours % 12 is 0, it should be 12

    // Format the result
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}
