import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const fields = Array.from(form.current.elements).filter(
      (element) => element.tagName === "INPUT" || element.tagName === "TEXTAREA"
    );
    const isEmptyField = fields.some((field) => !field.value);

    if (isEmptyField) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true); // Set loading state

    emailjs
      .sendForm("service_8lyb538", "template_6iab0zc", form.current, "s9MPYjOB-3QtwMTmu")
      .then(
        (result) => {
          if (result.text === "OK") {
            form.current.reset();
            toast.success("Message sent successfully.");
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message.");
        }
      )
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="mt-4">
        <div className="mb-4">
          <input
            name="from_name"
            type="text"
            className="w-full px-4 py-2 rounded-md bg-primaryDark border-2 border-primaryDark focus:border-primaryLight text-gray-300 focus:outline-none focus:bg-primary"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <input
            name="from_email"
            type="email"
            className="w-full px-4 py-2 rounded-md bg-primaryDark border-2 border-primaryDark focus:border-primaryLight text-gray-300 focus:outline-none focus:bg-primary"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <input
            name="from_subject"
            type="text"
            className="w-full px-4 py-2 rounded-md bg-primaryDark border-2 border-primaryDark focus:border-primaryLight text-gray-300 focus:outline-none focus:bg-primary"
            placeholder="Subject"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            className="w-full px-4 py-2 rounded-md bg-primaryDark border-2 border-primaryDark focus:border-primaryLight text-gray-300 focus:outline-none focus:bg-primary"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`bg-primaryDark text-white px-4 py-2 rounded-md hover:bg-primaryLight focus:outline-none ${
            isLoading && "cursor-wait"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
