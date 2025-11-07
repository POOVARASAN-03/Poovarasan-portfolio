import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import emailjs from 'emailjs-com'; // ✅ Add this import
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Email sending function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    // This object matches the variables in your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_message: formData.message,
      date: new Date().toLocaleString(),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        console.log('✅ Email successfully sent!');
        setShowMessage(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowMessage(false), 3000);
      })
      .catch((error) => {
        console.error('❌ EmailJS Error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/POOVARASAN-03' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/poovarasan-g-6621592b1/' },
  ];

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto my-3"></div>
          <p className="text-gray-500">
            Have a project in mind or want to collaborate? Let’s talk!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ✅ Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
            >
              <Send size={18} /> Send Message
            </button>

            {showMessage && (
              <p className="text-green-600 font-medium mt-2">
                ✅ Message sent! I'll get back soon.
              </p>
            )}
          </form>

          {/* ✅ Right side info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Contact Info</h3>

            <a
              href="mailto:poovarasang1212@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
            >
              <Mail /> poovarasang1212@gmail.com
            </a>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 border rounded-lg hover:bg-gray-100 transition"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <p className="text-gray-500 text-sm">
              Always open to creative ideas, collaborations & new opportunities 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
