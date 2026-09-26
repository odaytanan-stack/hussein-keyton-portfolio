import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDownLeft, ArrowLeft, ArrowUpLeft, Check, Globe2, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveBackground } from "@/components/WaveBackground";
import { portfolioCopy, type Language } from "@/lib/portfolio-copy";
import portrait from "@/assets/portrait.asset.json";
import reelo from "@/assets/reelo.asset.json";
import damascus from "@/assets/damascus.asset.json";
import germany from "@/assets/germany.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "حسين كيطون | Hussein Keyton" },
    { name: "description", content: "الموقع الشخصي لحسين كيطون، رائد أعمال تقني ومستشار نمو رقمي. Hussein Keyton's portfolio, ventures and journey." },
    { property: "og:title", content: "حسين كيطون | Hussein Keyton" },
    { property: "og:description", content: "Entrepreneurship, technology, digital growth and aerial photography — ريادة الأعمال والتقنية والنمو الرقمي والتصوير الجوي." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const navAnchors = ["#home", "#about", "#projects", "#journey", "#aerial"];
const statValues = ["+10", "03", "+250", "03"];
const projectDetails = [
  { number: "01", image: reelo.url, href: "https://reelo-agency.com/" },
  { number: "02", image: damascus.url, href: "https://najizgo.com/" },
  { number: "03", image: germany.url, href: "https://rehlati.sy/" },
];
const milestoneYears = ["2009", "2018", "2021", "2023 — 2024"];
const galleryImages = [damascus.url, germany.url, reelo.url];

function useReveal(language: Language) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) { elements.forEach((element) => element.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("ar");
  const t = portfolioCopy[language];
  useReveal(language);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved === "ar" || saved === "en") setLanguage(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = language === "ar" ? "حسين كيطون | رائد أعمال ومستشار نمو رقمي" : "Hussein Keyton | Tech Entrepreneur & Digital Growth Consultant";
  }, [language]);
  function switchLanguage(next: Language) {
    setLanguage(next); window.localStorage.setItem("portfolio-language", next); setMenuOpen(false);
  }

  return <div className="site-shell" dir={language === "ar" ? "rtl" : "ltr"}>
    <section className="hero" id="home"><WaveBackground />
      <header className="site-header"><div className="container-wide nav-inner">
        <a href="#home" className="brand" aria-label={t.brandLabel} onClick={() => setMenuOpen(false)}><span className="brand-mark">{language === "ar" ? "ح" : "H"}</span><span className="brand-name">{t.name}</span></a>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label={t.menuLabel}>
          {navAnchors.map((href, index) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{t.nav[index]}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>{t.contact}</a>
        </nav>
        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label="Language / اللغة"><Button type="button" variant="ghost" size="sm" className={language === "ar" ? "active" : ""} aria-pressed={language === "ar"} onClick={() => switchLanguage("ar")}>عربي</Button><span aria-hidden="true">/</span><Button type="button" variant="ghost" size="sm" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => switchLanguage("en")}>EN</Button></div>
          <a className="nav-cta" href="#contact">{t.letsTalk} <ArrowUpLeft size={13} /></a>
          <Button type="button" variant="ghost" size="icon" className="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? t.closeMenu : t.openMenu} aria-expanded={menuOpen}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</Button>
        </div>
      </div></header>
      <div className="container-wide hero-main">
        <div className="hero-copy"><span className="eyebrow">{t.eyebrow}</span><h1>{t.name}</h1><p className="hero-role">{t.role}</p><p className="hero-description">{t.heroDescription}</p>
          <div className="hero-buttons"><a className="hero-button" href="#projects">{t.explore} <ArrowDownLeft size={16} /></a><a className="hero-button outline" href="#contact">{t.contact} <ArrowUpLeft size={16} /></a></div>
          <div className="hero-meta"><span><MapPin size={14} /> {t.locationsShort}</span><span><Globe2 size={14} /> {t.languages}</span></div>
        </div>
        <div className="hero-visual"><div className="portrait-frame"><img src={portrait.url} alt={t.portraitAlt} fetchPriority="high" /></div><div className="portrait-label"><strong>{t.name}</strong><span>{t.portraitRole}</span></div></div>
      </div>
    </section>
    <div className="stats-band"><div className="container-wide stats-grid">{statValues.map((value, index) => <div className="stat" key={index}><span className="stat-number">{value}</span><span className="stat-label">{t.stats[index]}</span></div>)}</div></div>
    <section className="section" id="about"><div className="container-wide about-grid">
      <div className="about-copy reveal"><p className="section-kicker">{t.aboutKicker}</p><h2 className="section-title">{t.aboutTitle}</h2><p>{t.aboutP1}</p><p>{t.aboutP2}</p><div className="about-points">{t.aboutPoints.map((point) => <div className="about-point" key={point}><Check size={17} /> {point}</div>)}</div></div>
      <div className="about-image reveal"><img src={reelo.url} alt={t.aboutImageAlt} loading="lazy" /><span className="about-image-caption">{t.aboutCaption}</span></div>
    </div></section>
    <section className="section projects-section" id="projects"><div className="container-wide">
      <div className="section-header reveal"><div><p className="section-kicker">{t.projectsKicker}</p><h2 className="section-title">{t.projectsTitle}</h2><p className="section-intro">{t.projectsIntro}</p></div><span className="section-index">{t.projectsIndex}</span></div>
      <div className="projects-grid">{projectDetails.map((project, index) => <article className="project-card reveal" key={project.number}><div className="project-image"><img src={project.image} alt={t.projects[index]?.alt} loading="lazy" /><span className="project-number">{project.number} / 03</span></div><div className="project-body"><p className="project-type">{t.projects[index]?.category}</p><h3 dir="auto">{t.projects[index]?.name}</h3><p>{t.projects[index]?.description}</p><a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">{t.visit} <ArrowUpLeft size={15} /></a></div></article>)}</div>
    </div></section>
    <section className="section" id="journey"><div className="container-wide"><div className="section-header reveal"><div><p className="section-kicker">{t.journeyKicker}</p><h2 className="section-title">{t.journeyTitle}</h2><p className="section-intro">{t.journeyIntro}</p></div><span className="section-index">{t.journeyIndex}</span></div><div className="timeline">{milestoneYears.map((year, index) => <div className="timeline-item reveal" key={year}><div className="timeline-year">{year}</div><h3>{t.milestones[index]?.title}</h3><p>{t.milestones[index]?.text}</p></div>)}</div></div></section>
    <section className="section visual-section" id="aerial"><div className="container-wide"><div className="section-header reveal"><div><p className="section-kicker">{t.aerialKicker}</p><h2 className="section-title">{t.aerialTitle}</h2><p className="section-intro">{t.aerialIntro}</p></div><span className="section-index">{t.aerialIndex}</span></div><div className="gallery-grid reveal">{galleryImages.map((image, index) => <div className="gallery-item" key={image}><img src={image} alt={t.gallery[index]?.alt} loading="lazy" /><div className="gallery-caption"><small>{t.gallery[index]?.small}</small>{t.gallery[index]?.title}</div></div>)}</div></div></section>
    <section className="section contact-section" id="contact"><div className="container-wide contact-grid"><div className="reveal"><p className="section-kicker">{t.contactKicker}</p><h2 className="section-title">{t.contactTitle}</h2><p className="contact-lead">{t.contactLead}</p><div className="hero-buttons"><a className="hero-button" href="mailto:info@reelo-agency.com">{t.emailMe} <ArrowLeft size={16} /></a></div></div><div className="contact-details reveal"><a className="contact-row" href="mailto:info@reelo-agency.com"><span className="contact-icon"><Mail size={19} /></span><span><small>{t.emailLabel}</small><strong>info@reelo-agency.com</strong></span></a><a className="contact-row" href="tel:0936460111"><span className="contact-icon"><Phone size={19} /></span><span><small>{t.phoneLabel}</small><strong>0936460111</strong></span></a><div className="contact-row"><span className="contact-icon"><MapPin size={19} /></span><span><small>{t.locationLabel}</small><strong>{t.locations}</strong></span></div></div></div></section>
    <footer className="footer"><div className="container-wide footer-inner"><span className="footer-name">{t.name}.</span><span>{t.footerTag}</span><a href="#home">{t.backToTop}</a></div></footer>
  </div>;
}
