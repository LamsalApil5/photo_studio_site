import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import seoData from "../data/seoData";
import Seo from "../components/Seo";

const ContactPage: React.FC = () => {
  const { title, description, keywords, image, url } = seoData.contact;

  return (
    <>
      <Seo {...{ title, description, keywords, image, url }} />
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Reach out to discuss your photography or videography needs. We'd
              love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-neutral-200 relative">
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108273.52754587925!2d83.9896186390464!3d28.052266500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995bb96612a90b7%3A0x688cd371ddb4368f!2sMoti%20Digital%20Studio!5e1!3m2!1sen!2snp!4v1752932628182!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
