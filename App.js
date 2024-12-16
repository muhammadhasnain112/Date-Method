function calculateAge() {
    let biethday = document.getElementById("date").value
    let birth = new Date(biethday);


    let newdate = new Date();
    // console.log(newdate);
    let days = newdate.getDate() - birth.getDate();
    let month = newdate.getMonth() - birth.getMonth();
    let year = newdate.getFullYear() - birth.getFullYear();

    let totalmins = Math.floor((newdate - birth) / (1000 * 60))
    let totaldays = Math.floor((newdate - birth) / (1000 * 60 * 60 * 24));
    let totalsec = Math.floor((newdate - birth) / (1000));

    document.getElementById("result").innerHTML = `
    <h1> You have been on Earth for:</h1>
    <h3> ${year} Years </h3>
    <h3> ${month} Months </h3>
    <h3> ${totaldays} Days </h3> 
    <h3> ${totalmins} Minutes
    <h3> ${totalsec} Seconds  `


}

