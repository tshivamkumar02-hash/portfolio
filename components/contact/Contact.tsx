"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const sendEmail = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
      "service_lbp2cy8",
      "template_4nojke7",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "cdyFgM8NIeDBzxW6D"
    );

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    alert("Failed to send message");
  }

  setLoading(false);
};
  return (
    <section id="contact" className="py-24">
      <div className="container-custom">

        <div className="h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent mb-12"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>

          <p className="text-slate-400 mt-4">
            Open to Freelance Projects, Research Collaborations,
            Teaching Opportunities and Mentorship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-8
            "
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-cyan-400 font-semibold">
                  Email
                </p>

                <a
                  href="mailto:tshivamkumar.02@gmail.com"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  tshivamkumar.02@gmail.com
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Phone
                </p>

                <a
                  href="tel:+919572786630"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  +91 9572786630
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/919572786630"
                  target="_blank"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/shivamkumarthakur/"
                  target="_blank"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  View LinkedIn Profile
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  YouTube
                </p>

                <a
                  href="https://www.youtube.com/@SKTC_CLASSES"
                  target="_blank"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  SKTC Classes
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Location
                </p>

                <p className="text-slate-300">
                  Jharsuguda, Odisha, India
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}

          <div
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-8
            "
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              Send a Message
            </h3>

            <form
                onSubmit={sendEmail}
                className="mt-8 space-y-6"
                >

              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    name: e.target.value,
                    })
                }
                placeholder="Your Name"
                className="
                w-full
                bg-slate-800
                border
                border-slate-700
                rounded-lg
                p-4
                outline-none
                focus:border-cyan-400
                "
                />

              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    email: e.target.value,
                    })
                }
                placeholder="Your Email"
                className="
                w-full
                bg-slate-800
                border
                border-slate-700
                rounded-lg
                p-4
                outline-none
                focus:border-cyan-400
                "
                />

              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                    setFormData({
                    ...formData,
                    message: e.target.value,
                    })
                }
                placeholder="Your Message"
                className="
                w-full
                bg-slate-800
                border
                border-slate-700
                rounded-lg
                p-4
                outline-none
                focus:border-cyan-400
                "
                />

              <button
                type="submit"
                disabled={loading}
                className="
                bg-cyan-500
                text-black
                px-8
                py-3
                rounded-lg
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                "
                >
                {loading ? "Sending..." : "Send Message"}
                
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}