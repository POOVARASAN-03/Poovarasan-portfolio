import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, MessageCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_message: formData.message,
      date: new Date().toLocaleString(),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setShowMessage(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowMessage(false), 4000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/POOVARASAN-03' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/poovarasan-g-6621592b1/' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-3"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5 order-2 md:order-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-all w-full sm:w-auto font-medium shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>

            {showMessage && (
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/30 p-3 rounded-xl">
                <MessageCircle size={18} />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>

          {/* Right side info */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-gray-700 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Info</h3>

              <div className="space-y-4">
                <a
                  href="mailto:poovarasang1212@gmail.com"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="p-2.5 bg-white dark:bg-gray-700 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <Mail size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm sm:text-base break-all">poovarasang1212@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="p-2.5 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm sm:text-base">Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-600"
                        aria-label={social.name}
                      >
                        <Icon size={20} className="text-gray-700 dark:text-gray-300" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm pt-2 leading-relaxed">
                Always open to creative ideas, collaborations & new opportunities 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
