import OutlineBtn from "@/components/buttons/OutlineBtn";
import ReusableInput from "@/components/shared/ReusableInput";
import ReusableTextArea from "@/components/shared/ReusableTextArea";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-7/12 p-6">
      <form>
        <ReusableInput id="email" label="Email" type="email" required />
        <ReusableInput id="name" label="Name" type="text" required />
        <ReusableTextArea id="message" label="Your Message" required />
        <OutlineBtn text="Submit" className="bg-dGreen" />
      </form>
    </div>
  );
};

export default ContactForm;
