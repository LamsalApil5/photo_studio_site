import React, { useState } from "react";
import { Phone, Calendar, Info } from "lucide-react";

const whatsappNumber = "1234567890"; // replace with your number

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          eventType: "",
          message: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
        Get in Touch
      </h2>

      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 mt-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="font-medium">Thank you for your message!</p>
            <p className="text-sm">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          <p className="font-medium">
            There was an error sending your message.
          </p>
          <p className="text-sm">Please try again or contact us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="eventDate"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Event Date
            </label>
            <div className="relative">
              <Calendar
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
              />
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="eventType"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Type of Service
            </label>
            <div className="relative">
              <Info
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
              />
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select a service</option>
                <option value="wedding">
                  Wedding Photography and Videography
                </option>
                <option value="maternity">Maternity Session</option>
                <option value="family">Family Portraits</option>
                <option value="event">Event Coverage</option>
                <option value="commercial">Commercial Photography</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-neutral-400"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 mb-1"
            >
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${
            isSubmitting
              ? "bg-[#F6891E] cursor-not-allowed"
              : "bg-[#F6891E] hover:bg-[#b2702f]"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* WhatsApp Button below form and success message */}
      <div className="mt-8 text-center">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2"
          >
            <path d="M20.52 3.48A11.75 11.75 0 0012 0C5.37 0 0 5.37 0 12a11.71 11.71 0 001.6 6L0 24l6-1.6A11.73 11.73 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zm-8.52 17.4a9.41 9.41 0 01-5.04-1.45l-.36-.22-3.2.85.85-3.2-.23-.37A9.4 9.4 0 013.6 12c0-5.2 4.22-9.42 9.4-9.42a9.29 9.29 0 016.6 2.73 9.22 9.22 0 012.73 6.64 9.39 9.39 0 01-9.39 9.43zm5.23-7.15l-1.28-.62a.75.75 0 00-.7.04c-.37.21-.75.5-1.05.74a4.05 4.05 0 01-1.9-1.9c.24-.3.53-.68.74-1.04a.75.75 0 00.03-.71l-.62-1.27a.76.76 0 00-1-.37 6.06 6.06 0 00-2.2.66 2.71 2.71 0 00-1.19 1.45 4.74 4.74 0 00-.8 2.62 7.36 7.36 0 004.5 4.51 4.74 4.74 0 002.62-.8 2.67 2.67 0 001.44-1.2 6.05 6.05 0 00.66-2.2.75.75 0 00-.37-1z" />
          </svg>
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
