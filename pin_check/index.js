/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false */

function validate(pin) {
    // must contain numbers 4 digits long
    const pattern4 = /^\d{4}$/;

    // must contain numbers 6 digits long
    const pattern6 = /^\d{6}$/;

    // another way to do this in one shot regex
    const pattern = /^(\d{4}|\d{6})$/;

    

    return pattern.test(pin);
}

console.log(validate('12347'));
