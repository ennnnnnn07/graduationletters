function checkPassword(form, correctPassword, redirectPage) {
    const userPassword = form.password.value; 

    if (userPassword === correctPassword) {
        window.location.href = redirectPage; 
        return false; 
    } else {
        alert("bro who are you"); 
        return false;
    }
}
