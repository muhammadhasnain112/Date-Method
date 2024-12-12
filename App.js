function calculateAge() {
    let birthdate = prompt("Enter Your Birth Date In  // YY-MM-DD Format")
    let birth = new Date(birthdate);
    // console.log(birth);

    let newdate = new Date();
    // console.log(newdate);
    let days = newdate.getDate() - birth.getDate();
    let month = newdate.getMonth() - birth.getMonth();
    let year = newdate.getFullYear() - birth.getFullYear();

    document.getElementById("result").innerHTML = `
    <h1> You have been on Earth for:</h1>
    <h3> ${year} Years </h3>
    <h3> ${month} Months </h3>
    <h3> ${days} Days </h3>   `


}

