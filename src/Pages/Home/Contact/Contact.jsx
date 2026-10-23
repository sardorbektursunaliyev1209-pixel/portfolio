import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaTelegram,
  FaLocationDot,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const contacts = [
    { icon: FaPhone, label: "Telefon", value: "+998 XX XXX XX XX", href: "tel:+998XXXXXXXXX" },
    { icon: FaEnvelope, label: "Email", value: "email@gmail.com", href: "mailto:email@gmail.com" },
    { icon: FaTelegram, label: "Telegram", value: "@username", href: "https://t.me/username" },
    { icon: FaLocationDot, label: "Manzil", value: "Shahar, O'zbekiston" },
  ];

  const socials = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/username" },
    { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/@username" },
    { icon: FaTelegram, label: "Telegram", href: "https://t.me/username" },
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/username" },
  ];

  const inputStyle =
    "w-full rounded-xl border border-green-700/40 bg-green-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-green-500 focus:bg-green-900/30";

  const cardStyle =
    "group flex items-center gap-4 rounded-2xl border border-green-700/40 bg-green-900/30 p-4 transition duration-300 hover:-translate-y-1 hover:border-green-500/60 hover:bg-green-800/40";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bu yerga keyin EmailJS / Formspree ulanadi
    console.log(form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section
        id="contact"
        className="Contact relative overflow-hidden bg-[linear-gradient(180deg,#071f10,#04140a)] py-16 text-white md:py-24"
      >
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-green-600/20 blur-3xl md:h-[420px] md:w-[420px]"
          aria-hidden="true"
        ></div>

        <div className="container relative z-10 px-5 sm:px-10">
          {/* sarlavha */}
          <div className="mb-10 flex flex-col items-center gap-5 text-center md:mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-green-400">
              Aloqa
            </p>
            <h2 className="text-3xl font-bold text-green-50 md:text-4xl">
              Keling, <span className="text-green-400">birga ishlaymiz</span>
            </h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-green-400 to-green-700"></div>
            <p className="max-w-xl text-[15px] leading-7 text-gray-300">
              Loyihangiz bormi yoki savolingiz bormi? Xabar qoldiring, imkon
              qadar tez javob beraman.
            </p>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
            {/* chap: ma'lumotlar */}
            <div className="left flex flex-col gap-4 sm:gap-5">
              {contacts.map((item) => {
                const content = (
                  <>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-green-600/40 bg-green-600/10 text-green-400 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                      <item.icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="truncate text-sm font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className={cardStyle}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className={cardStyle}>
                    {content}
                  </div>
                );
              })}

              <div className="mt-2 flex flex-wrap items-center gap-4">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-green-600/60 p-2.5 text-green-100 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
                  >
                    <item.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* o'ng: forma */}
            <form
              onSubmit={handleSubmit}
              className="right flex flex-col gap-5 rounded-2xl border border-green-700/40 bg-green-900/30 p-5 sm:p-8"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ismingiz"
                aria-label="Ismingiz"
                required
                className={inputStyle}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email manzilingiz"
                aria-label="Email manzilingiz"
                required
                className={inputStyle}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Xabaringiz"
                aria-label="Xabaringiz"
                rows={5}
                required
                className={inputStyle + " resize-none"}
              />

              <button
                type="submit"
                className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-green-700 px-10 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_25px_rgba(22,163,74,0.35)] transition hover:scale-105 hover:from-green-400 hover:to-green-600"
              >
                Xabar yuborish
              </button>
    {sent && (
                <p className="text-center text-sm text-green-400">
                  Xabaringiz qabul qilindi, rahmat!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;