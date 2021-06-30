export default function validate({ firstname, lastname, email, password }) {
  let errors = {
    firstname: [],
    lastname: [],
    email: [],
    password: [],
  };
  function testForError(errorsField, message, condition) {
    if (condition) errorsField = [...errorsField, message];
    else errorsField = errorsField.filter((error) => error !== message);
    return errorsField;
  }

  const emailRegexString = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordDigitRegexString = /^(?=.*\d).{8,}$/gm;
  const passwordCharacterRegexString = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  const firstnameError = testForError(
    errors.firstname,
    "Enter a First Name",
    firstname.length === 0
  );
  const lastnameError = testForError(
    errors.firstname,
    "Enter a Last Name",
    lastname.length === 0
  );

  const emailError1 = testForError(
    errors.email,
    "Email Address is Required",
    !email
  );
  const emailError2 = testForError(
    errors.email,
    "Enter a valid email address",
    !emailRegexString.test(email)
  );

  const passwordError1 = testForError(
    errors.password,
    "Enter atleast one digit password",
    !passwordDigitRegexString.test(password)
  );
  const passwordError2 = testForError(
    errors.password,
    "Enter atleast one uppercase & lowercase character ",
    !passwordCharacterRegexString.test(password)
  );
  const passwordError3 = testForError(
    errors.password,
    "Password length should be more than equal to 8",
    !(password.length >= 8)
  );
  errors.firstname = [...firstnameError];
  errors.lastname = [...lastnameError];
  errors.email = [...emailError1, ...emailError2];
  errors.password = [...passwordError1, ...passwordError2, ...passwordError3];

  return errors;
}
