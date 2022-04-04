import "./form.css";
import { useForm, ValidationError } from "@formspree/react";
import { images } from "../../images";

const Footer = () => {
  const [state, handleSubmit] = useForm("xnqwzlnb");
  const currentYear = new Date().getFullYear();
  if (state.succeeded) {
    return (
      <section id="hire_me">
        <h1>Let's get started</h1>
        <p className="submit_message">
          Thank you! Your message has been received.
        </p>
        <footer>
          <img src={images.Logo} alt="panopticonism-logo" />
          <span>
            © 2021 - {currentYear} PANOPTICONISM. ALL RIGHTS RESERVED.
          </span>
        </footer>
      </section>
    );
  }
  return (
    <>
      <section id="hire_me">
        <h1>Let's get started</h1>
        <p>
          Send me a detailed message below and I'll get back to you as soon as
          possible.
        </p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="full-name">Full name</label>
              <input id="full-name" type="text" name="name" required />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="company">Company's name</label>
              <input id="company" type="company" name="company" required />
              <ValidationError
                prefix="company"
                field="company"
                errors={state.errors}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="email">Phone-number</label>
              <input id="phone" type="tel" name="phone" required />
              <ValidationError prefix="Tel" field="tel" errors={state.errors} />
            </div>
          </fieldset>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" cols="50" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send message
          </button>
        </form>
      </section>
      <footer>
        <img src={images.Logo} alt="panopticonism-logo" />
        <span>© 2021 - {currentYear} PANOPTICONISM. ALL RIGHTS RESERVED.</span>
      </footer>
    </>
  );
};

export default Footer;