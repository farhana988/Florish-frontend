import { contactDetails, socialLinks } from "@/data/contactData";

const ContactInfo = () => {
  return (
    <div
      className="w-full lg:w-5/12 text-white p-8 py-16 rounded-lg shadow-lg relative"
      style={{
        backgroundImage: "url('/contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
      <h3 className="text-3xl font-semibold mb-4 relative z-10">
        Contact Information
      </h3>
      <p className="mb-4 relative z-10">
        Have questions about our plants? Reach out and we&apos;ll get back to
        you within 24 hours!
      </p>

      {contactDetails.map((contact, index) => (
        <div
          className="flex items-center gap-2 mb-4 text-lg relative z-10"
          key={index}
        >
          <a href={contact.link} className="flex items-center gap-2">
            {contact.icon}
            <span>{contact.text}</span>
          </a>
        </div>
      ))}

      <div className="flex gap-10 relative z-10 mt-10">
        {socialLinks.map((social, index) => (
          <a
            href={social.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
