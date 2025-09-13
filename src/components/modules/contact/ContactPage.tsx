import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import LocationMap from "./LocationMap";

const ContactPage = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold text-center mb-6">
        We&apos;d Love To Hear From You!
      </h2>
      <p className="text-center mb-16 md:w-8/12 mx-auto opacity-70">
        We offer a wide variety of beautiful, healthy plants for all your
        gardening needs. Whether you are a seasoned plant parent or just
        starting out, we have the perfect green companion for your home or
        garden. Explore our collection today and bring nature into your space!
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 rounded-lg shadow-lg">
        <ContactInfo />
        <ContactForm />
      </div>
      <LocationMap />
    </>
  );
};

export default ContactPage;
