import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Mixel",
    desc: "Onlayn magazin uchun zamonaviy veb-sayt. React + Tailwind CSS yordamida ishlab chiqilgan.",
    img: "/loyihalar-Img/Mixel.png",
    tags: ["React", "Tailwind", "Responsive"],
    demo: "https://mexell.netlify.app/",
    github: "https://github.com/sardorbektursunaliyev1209-pixel/mixeel",
  },
  {
    title: "Ziynat",
    desc: "Ko'chmas mulk kompaniyasi uchun veb-sayt.",
    img: "/loyihalar-Img/Ziynat.png",
    tags: ["React", "Tailwind"],
    demo: "https://ziynat2.vercel.app/",
    github: "https://github.com/sardorbektursunaliyev1209-pixel/ziynat2",
  },
  {
    title: "Natura",
    desc: "Oziq-ovqat mahsulotlari uchun veb-sayt.",
    img: "/loyihalar-Img/Natura.png",
    tags: ["React", "JavaScript"],
    demo: "https://naturaaaa.netlify.app/",
    github: "https://github.com/sardorbektursunaliyev1209-pixel/Natura",
  },
  {
    title: "Maktab Hub",
    desc: "O'quv markaz uchun veb-sayt.",
    img: "/loyihalar-Img/Maktab.png",
    tags: ["React", "JavaScript"],
    demo: "https://Maktabhub-demo.vercel.app",
    github: null,
  },
  {
    title: "Exclusive",
    desc: "Onlayn magazin uchun veb-sayt.",
    img: "/loyihalar-Img/excusive.png",
    tags: ["React", "JavaScript"],
    demo: "https://exclusive-craft14.vercel.app/",
    github: "https://github.com/sardorbektursunaliyev1209-pixel/exclusive",
  },
  {
    title: "SMM Yordamchi",
    desc: "SMM mutaxassislari uchun mijozlar bilan ishlash ilovasi.",
    img: "/loyihalar-Img/SmmYordamchi.png",
    tags: ["Web ilova"],
    demo: "https://smm-yordamchi.base44.app/clients",
    github: null,
  },
];

function Projects() {
  return (
    <section
      id="portfolio"
      className="Project relative overflow-hidden bg-[linear-gradient(180deg,#0a2e18,#071f10)] py-16 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-[300px] w-[300px] rounded-full bg-green-500/20 blur-3xl md:h-[420px] md:w-[420px]"
        aria-hidden="true"
      ></div>

      <div className="container relative z-10 px-5 sm:px-10">
        {/* sarlavha */}
        <div className="mb-10 flex flex-col items-start gap-5 md:mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-green-400">
            Loyihalar
          </p>
          <h2 className="text-3xl font-bold leading-tight text-green-50 md:text-4xl">
            Mening oxirgi <span className="text-green-400">loyihalarim</span>
          </h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-green-400 to-green-700"></div>
          <p className="max-w-xl text-[15px] leading-7 text-gray-300">
            Bu bo'limda men yaratgan loyihalar bilan tanishishingiz mumkin. Har
            bir loyiha tajriba, o'rganish va rivojlanish natijasidir.
          </p>
        </div>

        {/* kartochkalar */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col gap-4 rounded-2xl border border-green-700/40 bg-green-900/30 p-4 transition duration-300 hover:-translate-y-1 hover:border-green-500/60 hover:bg-green-800/40"
            >
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src={p.img}
                  alt={p.title + " loyihasi"}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-green-400">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-green-600/30 bg-green-600/10 px-3 py-1 text-xs text-green-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-green-400 transition hover:text-white"
                  >
                    Demo ko'rish <span>→</span>
                  </a>

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-green-400"
                    >
                      <FaGithub size={19} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;