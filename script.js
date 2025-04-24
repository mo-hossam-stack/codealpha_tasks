// Function to calculate the age
function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // JS months are 0-indexed
    const year = parseInt(document.getElementById("year").value);
    const result = document.getElementById("result");
  
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      result.innerText = "Please enter a valid date.";
      return;
    }
  
    const birthDate = new Date(year, month, day);
    const today = new Date();
  
    if (birthDate > today) {
      result.innerText = "Birth date cannot be in the future!";
      return;
    }
  
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
  
    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  
    result.innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  }
  