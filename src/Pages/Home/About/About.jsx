import {
  FaUser,
  FaCalendarDays,
  FaEnvelope,
  FaLocationDot,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa6";

function About() {
  const info = [
    { icon: FaUser, label: "Ism", value: "Sardorbek" },
    { icon: FaCalendarDays, label: "Tajriba", value: "1 yil" },
    { icon: FaEnvelope, label: "Email", value: "email@gmail.com" },
    { icon: FaLocationDot, label: "Manzil", value: "Shahar, O'zbekiston" },
    { icon: FaGlobe, label: "Bandlik", value: "Ishga ochiq" },
    { icon: FaPaperPlane, label: "Frilans", value: "Mavjud" },
  ];

  return (
    <>
      <section
        id="about"
        className="About relative overflow-hidden bg-[#071f10] py-16 text-white md:py-24"
      >
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-green-600/20 blur-3xl md:h-[420px] md:w-[420px]"
          aria-hidden="true"
        ></div>

        <div className="container relative z-10 grid items-center gap-10 px-5 sm:px-10 md:grid-cols-2 md:gap-16">
          {/* chap: matn */}
          <div className="left flex flex-col items-start gap-5">
            <p className="text-sm font-bold uppercase tracking-widest text-green-400">
              Men haqimda
            </p>

            <h2 className="text-3xl font-bold leading-tight text-green-50 md:text-4xl">
              Men <span className="text-green-400">raqamli tajribalar</span>{" "}
              yaratishni yaxshi ko'radigan dasturchiman.
            </h2>

            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-green-400 to-green-700"></div>

            <p className="text-[15px] leading-7 text-gray-300">
              Men zamonaviy, tez ishlaydigan veb-saytlar yaratishga
              ixtisoslashganman. Toza dizayn va qulay interfeysga e'tibor
              beraman, g'oyalarni real mahsulotga aylantiraman.
            </p>
          </div>

          {/* o'ng: ma'lumot kartochkalari */}
          <div className="right grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {info.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-4 rounded-2xl border border-green-700/40 bg-green-900/30 p-4 transition duration-300 hover:-translate-y-1 hover:border-green-500/60 hover:bg-green-800/40"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-green-600/40 bg-green-600/10 text-green-400 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <item.icon size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="truncate text-sm font-medium text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;