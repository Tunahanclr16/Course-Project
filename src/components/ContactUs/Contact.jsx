import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeader from "../../ui/SectionHeader";

export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <SectionHeader
        title={"Contact Us"}
        description={
          "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-gray-500 mr-2" />
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-gray-500 mr-2" />
            <p>Email: info@example.com</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <p>Address: 123 Main Street, City, Country</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
