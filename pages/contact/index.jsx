//animation
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";

//icon
import { HiArrowRight } from "react-icons/hi2";
import { useState } from "react";
import { contactAPI } from "../../utils/api";

const contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    company: '',
    budget: 'Not specified',
    timeline: 'Not specified'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await contactAPI.submit(formData);
      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          company: '',
          budget: 'Not specified',
          timeline: 'Not specified'
        });
      }
    } catch (error) {
      setError(error.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-container padding-container py-12 xl:py-28">
      <div className="flex flex-col gap-6">
        {/* title */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="pb-12 text-center uppercase"
        >
          <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
            Contact U<span className="text-secondary">s</span>
            <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
              Get in touch
            </span>
          </h3>
        </motion.div>
        {/* Success Message */}
        {success && (
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center max-w-[33rem] mx-auto mb-4"
          >
            Message sent successfully! We will get back to you soon.
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center max-w-[33rem] mx-auto mb-4"
          >
            {error}
          </motion.div>
        )}

        {/* form */}
        <motion.form
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col gap-4 w-full mx-auto max-w-[33rem]"
        >
          <div className="flex gap-2 w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter Your Name"
              className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none w-1/2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter Your Email"
              className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none w-1/2"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Enter Your Subject"
            className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            cols="10"
            rows="8"
            placeholder="Enter Your Message"
            className="regular-14 placeholder:text-gray-50 rounded-xl px-4 py-1 bg-tertiary outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="p-2 bg-secondary rounded-full flexCenter gap-2 w-[11rem] medium-14 hover:animate-pulse disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}{" "}
            <span>
              <HiArrowRight />
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default contact;
