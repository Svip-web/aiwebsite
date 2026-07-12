"use client";

import { useEffect, useMemo, useState } from "react";

const heroImage = "/figma-assets/hero.png";
const arrowImage = "/figma-assets/arrow.png";

const galleryImages = [
  "/figma-assets/gallery-1.png",
  "/figma-assets/gallery-2.png",
  "/figma-assets/gallery-3.png",
  "/figma-assets/gallery-4.png",
  "/figma-assets/gallery-5.png",
  "/figma-assets/gallery-6.png",
];

const audienceImages = [
  "/figma-assets/audience-1.png",
  "/figma-assets/audience-2.png",
  "/figma-assets/audience-3.png",
  "/figma-assets/audience-4.png",
];

const benefits = [
  ["01", "Получай первые заказы", "уже во время обучения"],
  ["02", "Работай из любой точки мира", "и собирай портфолио на реальных задачах"],
  ["03", "Освой AI-профессию", "без технического опыта и долгого входа"],
  ["04", "Создавай контент", "который покупают бренды, эксперты и компании"],
];

const stats = [
  ["500$+", "первый доход"],
  ["3000€+", "потенциал в проектах"],
  ["3 урока", "практический старт"],
];

const skills = [
  "AI-фото для брендов",
  "Reels, сторис и визуалы",
  "Контент для экспертов",
  "Промпты и быстрый workflow",
  "Портфолио без опыта",
  "Первые офферы клиентам",
];

const audiences = [
  {
    title: "Для новичков без опыта",
    text: "Если вы хотите освоить востребованную AI-профессию и начать зарабатывать на создании контента для бизнеса и брендов.",
  },
  {
    title: "Для тех, кто хочет сменить профессию",
    text: "Если вы ищете современное направление с возможностью удалённой работы и доходом от 500€ до 3000€+.",
  },
  {
    title: "Для экспертов и фрилансеров",
    text: "Если хотите использовать AI для создания фото, Reels, сторис и контента быстрее, качественнее и выгоднее.",
  },
  {
    title: "Для тех, кто хочет работать на себя",
    text: "Получать клиентов из Европы, США и других стран, работая из любой точки мира.",
  },
];

const lessons = [
  ["Урок 1:", "Хто такі AI-креатори."],
  ["Урок 2:", "Хто і за що платить AI-креаторам."],
  ["Урок 3:", "Проєкти, які можна виконувати без досвіду."],
];

const steps = [
  "Поймёте, какие AI-услуги сейчас покупают бизнесы.",
  "Разберёте примеры работ, которые можно собрать с нуля.",
  "Получите понятный план выхода на первые заказы.",
];

function useCountdown() {
  const target = useMemo(() => Date.now() + 1000 * 60 * 60 * 12 + 1000 * 60 * 34, []);
  const [remaining, setRemaining] = useState(target - Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(Math.max(0, target - Date.now()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [target]);

  const hours = Math.floor(remaining / 1000 / 60 / 60);
  const minutes = Math.floor((remaining / 1000 / 60) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0"));
}

function CtaButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "cta cta--compact" : "cta"} href="#register">
      <span>Зарегистрироваться</span>
      <span className="cta__icon" aria-hidden="true">
        <img src={arrowImage} alt="" />
      </span>
    </a>
  );
}

export default function Home() {
  const [hours, minutes, seconds] = useCountdown();

  return (
    <main className="page-shell">
      <section className="hero section-lines">
        <div className="eyebrow">бесплатный онлайн мастер-класс</div>
        <p className="profession">Профессия 2026</p>
        <h1>
          <span>AI Smart Creator</span>
          <mark>с нуля</mark>
        </h1>
        <p className="hero__lead">
          Выйди на доход от <strong>500$ до 3000€+</strong>, создавая AI-контент
          для бизнесов, экспертов и брендов.
        </p>

        <div className="hero__grid">
          <div className="benefit-card">
            {benefits.map(([number, title, text]) => (
              <article key={number} className="benefit">
                <span>{number}</span>
                <p>
                  <strong>{title}</strong> {text}
                </p>
              </article>
            ))}
          </div>

          <div className="portrait-card">
            <img src={heroImage} alt="AI Smart Creator speaker" />
          </div>
        </div>

        <CtaButton />
      </section>

      <section className="stats-strip" aria-label="Ключевые цифры">
        {stats.map(([value, label]) => (
          <div key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section section-lines">
        <div className="section-heading">
          <p>После мастер-класса</p>
          <h2>Вы увидите, как зарабатывать на AI-контенте</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article key={skill} className={index % 2 === 0 ? "skill skill--pink" : "skill"}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{skill}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pink-section">
        <div className="section-heading">
          <p>Для кого</p>
          <h2>Этот мастер-класс?</h2>
        </div>
        <div className="audience-list">
          {audiences.map((item, index) => (
            <article className="audience-card" key={item.title}>
              <img src={audienceImages[index]} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio section-lines">
        <div className="section-heading">
          <p>Практика</p>
          <h2>Контент, который выглядит как работа для бренда</h2>
        </div>
        <div className="image-mosaic">
          {galleryImages.map((image, index) => (
            <img key={image} src={image} alt={`AI content example ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="section program">
        <div className="section-heading">
          <p>Программа</p>
          <h2>3 урока, чтобы старт был понятным</h2>
        </div>
        <div className="lesson-list">
          {lessons.map(([label, text], index) => (
            <article key={label} className="lesson-card">
              <div>
                <span>{label}</span>
                <p>{text}</p>
              </div>
              <div className="lesson-card__media">
                <img src={galleryImages[index]} alt="" />
                <b aria-hidden="true">lock</b>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section result section-lines">
        <div className="section-heading">
          <p>Что заберёте</p>
          <h2>План действий вместо хаоса</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="register" id="register">
        <div className="register__content">
          <p className="profession">Старт ближайшего потока</p>
          <h2>Займите место на бесплатном мастер-классе</h2>
          <p>
            Оставьте заявку и получите доступ к урокам, примерам AI-работ и
            пошаговому маршруту к первым заказам.
          </p>
          <CtaButton compact />
        </div>
        <div className="timer" aria-label="До конца регистрации">
          <div>
            <strong>{hours}</strong>
            <span>час</span>
          </div>
          <i>:</i>
          <div>
            <strong>{minutes}</strong>
            <span>мин</span>
          </div>
          <i>:</i>
          <div>
            <strong>{seconds}</strong>
            <span>сек</span>
          </div>
        </div>
      </section>
    </main>
  );
}
