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
    <h3> You have been on Earth for :</h3>
    <h5> ${year} Years </h5>
    <h5> ${month} Months </h5>
    <h5> ${totaldays} Days </h5> 
    <h5> ${totalmins} Minutes </h5>
    <h5> ${totalsec} Seconds  `


}

