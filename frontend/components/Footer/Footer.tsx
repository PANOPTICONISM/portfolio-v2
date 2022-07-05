import styles from "./Form.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { forwardRef } from "react";
interface PropsType {}

const Footer = forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  const [state, handleSubmit] = useForm("mpzkjgrq");
  const currentYear = new Date().getFullYear();

  return (
    <>
      {state.succeeded ? (
        <section id="hire_me" ref={ref}>
          <h1>Let's get started</h1>
          <p className={styles.submit_message}>
            Thank you! Your message has been received.
          </p>
        </section>
      ) : (
        <section className={styles.hire_me} id="hire_me" ref={ref}>
          <h1>Let's get started</h1>
          <p>
            Send me a detailed message below and I'll get back to you as soon as
            possible.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
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
                <label htmlFor="subject">Choose a package</label>
                <select name="subject" id="subject" defaultValue="" required>
                  <option value="" disabled>
                    Pick an option
                  </option>
                  <option value="Basic package">Basic package</option>
                  <option value="Professional package">
                    Professional package
                  </option>
                  <option value="Premium package">Premium package</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </fieldset>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} cols={50} required />
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
      )}
      <footer className={styles.footer}>
        <img src="/logo.svg" alt="panopticonism-logo" />
        <span>© 2021 - {currentYear} PANOPTICONISM. ALL RIGHTS RESERVED.</span>
      </footer>
    </>
  );
});

Footer.displayName = "Footer";
export default Footer;
