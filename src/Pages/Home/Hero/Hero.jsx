import { FaGithub, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa6";

const rand = (min, max) => Math.random() * (max - min) + min;

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: rand(0, 100),
  size: rand(2, 5),
  duration: rand(10, 22),
  delay: -rand(0, 22),
}));

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  top: rand(0, 100),
  left: rand(0, 100),
  size: rand(1, 3),
  duration: rand(2, 5),
  delay: -rand(0, 5),
}));

function Hero() {
  const iconStyle =
    "cursor-pointer rounded-full border border-green-600/60 p-2.5 text-green-100 transition hover:border-green-500 hover:bg-green-600 hover:text-white";

  return (
    <>
      <div
        id="home"
        className="Hero relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,#0f3d1a,#050805)] pt-28 pb-16 lg:py-0"
      >
        {/* ORQA FON ANIMATSIYALARI */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="blob-anim absolute -left-20 top-10 h-[260px] w-[260px] rounded-full bg-green-600/20 blur-3xl md:h-[420px] md:w-[420px]"></div>
          <div
            className="blob-anim absolute -right-10 bottom-0 h-[300px] w-[300px] rounded-full bg-green-500/15 blur-3xl md:h-[480px] md:w-[480px]"
            style={{ animationDelay: "-8s", animationDuration: "26s" }}
          ></div>

          {stars.map((s) => (
            <span
              key={s.id}
              className="twinkle-anim absolute rounded-full bg-green-100"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: s.size,
                height: s.size,
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
              }}
            ></span>
          ))}

          {particles.map((p) => (
            <span
              key={p.id}
              className="rise-anim absolute -bottom-4 rounded-full bg-green-400/70"
              style={{
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            ></span>
          ))}
        </div>

        {/* ASOSIY KONTENT */}
        <div className="container relative z-10 flex w-full flex-col-reverse items-center justify-between gap-12 px-5 sm:px-10 lg:flex-row lg:gap-0">
          {/* chap: matn */}
          <div className="left flex w-full flex-col items-center gap-5 text-center text-white sm:gap-6 lg:w-[550px] lg:items-start lg:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-green-400">
              Salom, men Sardor
            </p>
            <h1 className="text-4xl font-bold text-green-50 sm:text-5xl lg:text-6xl">
              Veb dasturchi
            </h1>
            <p className="text-[15px] leading-7 text-gray-300">
              Men professional veb dasturchiman. Mening asosiy maqsadim
              veb-saytlar yaratish orqali mahalliy va xorijiy mijozlarga yordam
              berish va ularni mamnun qilish.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="https://github.com/sardorbektursunaliyev1209-pixel?tab=repositories">
              <FaGithub size={42} className={iconStyle} />
              </a>
              <FaYoutube size={42} className={iconStyle} />
              <FaTelegram size={42} className={iconStyle} />
              <FaInstagram size={42} className={iconStyle} />
            </div>

            <a
              href="/cv.pdf"
              download="Sardor-CV.pdf"
              className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-green-700 px-10 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_25px_rgba(22,163,74,0.35)] transition hover:scale-105 hover:from-green-400 hover:to-green-600"
            >
              CV yuklab olish
            </a>
          </div>

          {/* o'ng: rasm (telefonda tepada turadi) */}
          <div className="right flex w-full items-center justify-center lg:w-[550px]">
            <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
              <div className="ripple-anim absolute inset-0 rounded-full border border-green-600/30 bg-green-700/10"></div>
              <div
                className="ripple-anim absolute inset-0 rounded-full border border-green-600/30 bg-green-700/10"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="float-anim relative">
                <div className="rounded-full border border-green-700/40 bg-gradient-to-br from-green-800 to-green-950 p-3 shadow-[0_0_80px_rgba(22,163,74,0.18)] sm:p-5">
                  <div className="rounded-full border border-green-600/30 bg-green-950 p-2.5 sm:p-4">
                    <img
                      src="/heroimg.jpg"
                      alt="Profil rasmi"
                      className="h-[190px] w-[190px] rounded-full object-cover grayscale sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;