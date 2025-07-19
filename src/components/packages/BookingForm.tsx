import React, { useState } from "react";
import emailjs from "emailjs-com";

interface BookingFormProps {
  packageName: string | null;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ packageName, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!packageName) return null;

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Optional: phone number validation if not empty
    if (formData.phone.trim() && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // message optional, no validation here

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error on input change
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const templateParams = {
      package_name: packageName,
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Booking request sent!");
          onClose();
        },
        (error: unknown) => {
          alert(`Failed to send booking request. Please try again. ${error}`);
          setIsSubmitting(false);
        }
      );
  };

  const whatsappNumber = "1234567890"; // Your WhatsApp number with country code
  const whatsappMessage = encodeURIComponent(
    `Hi, I would like to book the package: ${packageName}. Please provide more details.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <form
        onSubmit={sendEmail}
        className="bg-white p-6 rounded-lg max-w-md w-full space-y-4"
        noValidate
      >
        <h2 className="text-xl font-bold mb-4">Book: {packageName}</h2>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              errors.name ? "border-red-500" : "border-neutral-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              errors.email ? "border-red-500" : "border-neutral-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              errors.phone ? "border-red-500" : "border-neutral-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Additional message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={3}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Booking"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="mb-2 text-neutral-700">Or</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
           Book from WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
