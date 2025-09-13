import React from "react";

const LocationMap = () => {
  return (
    <section className="mx-[-1.5rem] mt-20">
      <h2 className="text-4xl font-semibold text-center mb-6">Our Locations</h2>

      <div className="rounded shadow-lg overflow-hidden w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.4387220141!2d-74.11808625400556!3d40.70582545597056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0x7d69e1dbb4a2c81d!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1631042386464!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
