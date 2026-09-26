import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDownLeft, ArrowLeft, ArrowUpLeft, Check, Globe2, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveBackground } from "@/components/WaveBackground";
import portrait from "@/assets/portrait.asset.json";
import reelo from "@/assets/reelo.asset.json";
import damascus from "@/assets/damascus.asset.json";
import germany from "@/assets/germany.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "حسين كيطون | رائد أعمال ومستشار نمو رقمي" },
      { name: "description", content: "تعرف على حسين كيطون، رائد أعمال تقني ومؤسس Reelo Agency وشريك مؤسس في Najiz Go، وخبرته في الحلول الرقمية والتسويق والتصوير الجوي." },
      { property: "og:title", content: "حسين كيطون | رائد أعمال ومستشار نمو رقمي" },
      { property: "og:description", content: "رحلة حسين كيطون في ريادة الأعمال والتقنية والتسويق الرقمي والتصوير الجوي، من دمشق إلى ألمانيا." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "الرئيسية", href: "#home" },
  { label: "من أنا", href: "#about" },
  { label: "المشاريع", href: "#projects" },
  { label: "المسيرة", href: "#journey" },
  { label: "التصوير الجوي", href: "#aerial" },
];

const stats = [
  { value: "+10", label: "سنوات من الخبرة" },
  { value: "03", label: "مشاريع ومؤسسات" },
  { value: "+250", label: "متدرباً في التصوير والبرمجة" },
  { value: "03", label: "لغات أتحدثها" },
];

const projects = [
  {
    number: "01",
    category: "البرمجة والتسويق الرقمي",
    name: "Reelo Agency",
    description: "وكالة إبداعية تجمع بين تطوير الحلول البرمجية والتسويق الرقمي والتصميم، مع اهتمام خاص بتأهيل المواهب الشابة.",
    image: reelo.url,
    alt: "بيئة العمل في وكالة ريلو",
    href: "https://reelo-agency.com/",
  },
  {
    number: "02",
    category: "التقنية والخدمات اللوجستية",
    name: "Najiz Go Express",
    description: "منصة لخدمات التوصيل السريع وحلول النقل الذكية، تعتمد على الأنظمة الرقمية لتنظيم الشحن والعمليات اللوجستية.",
    image: damascus.url,
    alt: "مشهد جوي لمدينة دمشق",
    href: "https://najizgo.com/",
  },
  {
    number: "03",
    category: "السياحة والخدمات الرقمية",
    name: "رحلاتي | Rehlati",
    description: "منصة رقمية لتنسيق الحجوزات والخدمات السياحية، صُممت لجعل تخطيط الرحلات واختيار الإقامة أكثر سهولة.",
    image: germany.url,
    alt: "منظر جوي لطريق بين الغابات في ألمانيا",
    href: "https://rehlati.sy/",
  },
];

const milestones = [
  { year: "2009", title: "بداية جديدة في ألمانيا", text: "الانتقال من دمشق إلى ألمانيا، وبداية مسار من التعلم والاندماج وبناء الخبرة." },
  { year: "2018", title: "الدراسة والتخصص", text: "دراسة إدارة الأعمال في هامبورغ وتوسيع المعرفة بالتسويق والإنتاج البصري." },
  { year: "2021", title: "تأسيس Reelo Agency", text: "إطلاق وكالة ريلو للعمل في البرمجة والتسويق والتصميم وتدريب المواهب." },
  { year: "2023 — 2024", title: "توسيع آفاق الأعمال", text: "المشاركة في تأسيس ناجز غو، ثم إطلاق منصة رحلاتي للخدمات السياحية." },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  return (
    <div className="site-shell" dir="rtl">
      <section className="hero" id="home">
        <WaveBackground />
        <header className="site-header">
          <div className="container-wide nav-inner">
            <a href="#home" className="brand" aria-label="حسين كيطون، العودة إلى الرئيسية" onClick={() => setMenuOpen(false)}>
              <span className="brand-mark">ح</span>
              <span className="brand-name">حسين كيطون</span>
            </a>
            <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="التنقل الرئيسي">
              {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
              <a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معي</a>
            </nav>
            <div className="nav-actions">
              <a className="nav-cta" href="#contact">لنتحدث <ArrowUpLeft size={13} /></a>
              <Button type="button" variant="ghost" size="icon" className="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen}>
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </div>
          </div>
        </header>

        <div className="container-wide hero-main">
          <div className="hero-copy">
            <span className="eyebrow">رائد أعمال تقني ومستشار نمو رقمي</span>
            <h1>حسين كيطون</h1>
            <p className="hero-role">أفكار طموحة. أثر حقيقي.</p>
            <p className="hero-description">أبني جسوراً بين التقنية والأعمال والإبداع. من تطوير الحلول الرقمية واستراتيجيات النمو، إلى قيادة مشاريع ريادية توصل الأفكار إلى واقع ملموس.</p>
            <div className="hero-buttons">
              <a className="hero-button" href="#projects">استكشف أعمالي <ArrowDownLeft size={16} /></a>
              <a className="hero-button outline" href="#contact">تواصل معي <ArrowUpLeft size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> دمشق · ميونخ</span>
              <span><Globe2 size={14} /> عربي · Deutsch · English</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src={portrait.url} alt="صورة حسين كيطون" fetchPriority="high" /></div>
            <div className="portrait-label"><strong>حسين كيطون</strong><span>مؤسس ورائد أعمال</span></div>
          </div>
        </div>
      </section>

      <div className="stats-band">
        <div className="container-wide stats-grid">
          {stats.map((stat) => <div className="stat" key={stat.label}><span className="stat-number">{stat.value}</span><span className="stat-label">{stat.label}</span></div>)}
        </div>
      </div>

      <section className="section" id="about">
        <div className="container-wide about-grid">
          <div className="about-copy reveal">
            <p className="section-kicker">01 / نبذة عني</p>
            <h2 className="section-title">من دمشق إلى العالم، برؤية تتجاوز الحدود.</h2>
            <p>ولدت في دمشق وانتقلت إلى ألمانيا في سن مبكرة. جمعت رحلتي بين الدراسة والخبرة العملية وريادة الأعمال، لأعمل اليوم على بناء مشاريع رقمية تجمع بين التفكير الاستراتيجي والتنفيذ المبتكر.</p>
            <p>أؤمن أن قيمة التكنولوجيا الحقيقية تظهر عندما تفتح فرصاً جديدة للناس والشركات. لذلك أركز على تطوير الحلول، وتنمية الفرق، ومشاركة المعرفة مع الجيل القادم.</p>
            <div className="about-points">
              <div className="about-point"><Check size={17} /> مؤسس وكالة Reelo Agency</div>
              <div className="about-point"><Check size={17} /> شريك مؤسس في Najiz Go</div>
              <div className="about-point"><Check size={17} /> مدرب تصوير جوي محترف</div>
              <div className="about-point"><Check size={17} /> خبرة في الأسواق الأوروبية والعربية</div>
            </div>
          </div>
          <div className="about-image reveal"><img src={reelo.url} alt="مساحة العمل الإبداعية في وكالة ريلو" loading="lazy" /><span className="about-image-caption">التقنية، الإبداع، والإنسان في قلب كل مشروع.</span></div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container-wide">
          <div className="section-header reveal"><div><p className="section-kicker">02 / المشاريع</p><h2 className="section-title">مشاريع أبني بها المستقبل.</h2><p className="section-intro">أعمال متعددة المجالات تجمعها رؤية واحدة: استخدام التقنية لصنع تجارب وخدمات أفضل.</p></div><span className="section-index">SELECTED WORK / 03</span></div>
          <div className="projects-grid">
            {projects.map((project) => <article className="project-card reveal" key={project.number}>
              <div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /><span className="project-number">{project.number} / 03</span></div>
              <div className="project-body"><p className="project-type">{project.category}</p><h3 dir="auto">{project.name}</h3><p>{project.description}</p><a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">زيارة الموقع <ArrowUpLeft size={15} /></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section" id="journey">
        <div className="container-wide">
          <div className="section-header reveal"><div><p className="section-kicker">03 / المسيرة</p><h2 className="section-title">محطات صنعت الرحلة.</h2><p className="section-intro">كل مرحلة كانت فرصة للتعلم والتطور، من البدايات الأولى إلى بناء مؤسسات تخدم قطاعات مختلفة.</p></div><span className="section-index">THE JOURNEY</span></div>
          <div className="timeline">{milestones.map((item) => <div className="timeline-item reveal" key={item.year}><div className="timeline-year">{item.year}</div><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
        </div>
      </section>

      <section className="section visual-section" id="aerial">
        <div className="container-wide">
          <div className="section-header reveal"><div><p className="section-kicker">04 / منظور آخر</p><h2 className="section-title">العالم من زاوية مختلفة.</h2><p className="section-intro">التصوير الجوي مساحة ألتقي فيها التقنية بالفن. أعمل على تدريب المصورين وإنتاج مشاهد جوية تحكي قصص الأماكن.</p></div><span className="section-index">AERIAL STORIES</span></div>
          <div className="gallery-grid reveal">
            <div className="gallery-item"><img src={damascus.url} alt="لقطة جوية لمدينة دمشق" loading="lazy" /><div className="gallery-caption"><small>01 / سوريا</small>دمشق من الأعلى</div></div>
            <div className="gallery-item"><img src={germany.url} alt="منظر جوي للطبيعة الألمانية" loading="lazy" /><div className="gallery-caption"><small>02 / ألمانيا</small>الطبيعة من منظور آخر</div></div>
            <div className="gallery-item"><img src={reelo.url} alt="استوديو ريلو للإنتاج البصري" loading="lazy" /><div className="gallery-caption"><small>03 / الإنتاج البصري</small>خلف كل صورة فكرة</div></div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container-wide contact-grid">
          <div className="reveal"><p className="section-kicker">05 / تواصل معي</p><h2 className="section-title">لنصنع شيئاً ذا قيمة معاً.</h2><p className="contact-lead">هل لديك فكرة أو مشروع أو فرصة للتعاون؟ يسعدني أن أسمع منك ونناقش كيف يمكن تحويلها إلى أثر حقيقي.</p><div className="hero-buttons"><a className="hero-button" href="mailto:info@reelo-agency.com">راسلني الآن <ArrowLeft size={16} /></a></div></div>
          <div className="contact-details reveal">
            <a className="contact-row" href="mailto:info@reelo-agency.com"><span className="contact-icon"><Mail size={19} /></span><span><small>البريد الإلكتروني</small><strong>info@reelo-agency.com</strong></span></a>
            <a className="contact-row" href="tel:0936460111"><span className="contact-icon"><Phone size={19} /></span><span><small>رقم التواصل</small><strong>0936460111</strong></span></a>
            <div className="contact-row"><span className="contact-icon"><MapPin size={19} /></span><span><small>المواقع</small><strong>دمشق، سوريا · ميونخ، ألمانيا</strong></span></div>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="container-wide footer-inner"><span className="footer-name">حسين كيطون.</span><span>ريادة أعمال · تقنية · إبداع</span><a href="#home">العودة للأعلى ↑</a></div></footer>
    </div>
  );
}