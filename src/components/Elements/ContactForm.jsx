export const ContactForm = () => {
  return (
<form className="container mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="inputForm peer" placeholder=" " required />
      <label htmlFor="floating_email" className="labelForm">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" className="inputForm peer" placeholder=" " required />
      <label htmlFor="floating_password" className="labelForm">Password</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" className="inputForm peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="labelForm">Confirm password</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="inputForm peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="labelForm">First name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="inputForm peer" placeholder=" " required />
        <label htmlFor="floating_last_name" className="labelForm">Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="inputForm peer" placeholder=" " required />
        <label htmlFor="floating_phone" className="labelForm">Phone number (123-456-7890)</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" className="inputForm peer" placeholder=" " required />
        <label htmlFor="floating_company" className="labelForm">Company (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" className="submitForm">Submit</button>
</form>

  );
};
