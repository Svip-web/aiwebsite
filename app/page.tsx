"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const arrowImage = asset("figma-assets/arrow.png");
const heroImage = asset("figma-assets/hero-main.png");

const lessonImages = [
  asset("figma-assets/lesson-1.png"),
  asset("figma-assets/lesson-2.png"),
  asset("figma-assets/lesson-3.png"),
];

const exampleSlides = [
  asset("figma-assets/gallery-4.png"),
  asset("figma-assets/gallery-5.png"),
  asset("figma-assets/gallery-3.png"),
];

const heroBenefits = [
  {
    icon: asset("figma-assets/benefit-fire.svg"),
    text: (
      <>
        <b>Без склада.</b>
      </>
    ),
  },
  {
    icon: asset("figma-assets/benefit-wallet.svg"),
    text: (
      <>
        <b>Без закупки товаров.</b>
      </>
    ),
  },
  {
    icon: asset("figma-assets/benefit-heart.svg"),
    text: (
      <>
        <b>Без сложного дизайна.</b>
      </>
    ),
  },
  {
    icon: asset("figma-assets/benefit-laptop.svg"),
    text: (
      <>
        С возможностью работать из <b>любой точки мира.</b>
      </>
    ),
  },
];

const audienceCards = [
  {
    image: asset("figma-assets/audience-1.png"),
    title: "Если вы хотите свой независимый доход",
    text: (
      <>И не хотите зависеть только от зарплаты мужа, начальника или одного источника дохода.</>
    ),
  },
  {
    image: asset("figma-assets/audience-2.png"),
    title: "Для мам с маленькими детьми",
    text: (
      <>Если у тебя мало свободного времени, но ты хочешь зарабатывать из дома и совмещать работу с семьёй.</>
    ),
  },
  {
    image: asset("figma-assets/audience-4.png"),
    title: "Для тех, кто переехал за границу",
    text: (
      <>Не знаешь, как начать зарабатывать в новой стране? Создай онлайн-источник дохода, который не привязан к месту работы.</>
    ),
  },
  {
    image: asset("figma-assets/gallery-3.png"),
    title: "Для тех, кто работает офлайн и хочет перейти в онлайн",
    text: (
      <>Хочешь работать удалённо, самостоятельно управлять своим временем и постепенно заменить офлайн-работу.</>
    ),
  },
  {
    image: asset("figma-assets/audience-1.png"),
    title: "Для тех, кто хочет сменить профессию",
    text: <>Хочешь начать своё дело с нуля, освоить Etsy и создавать товары, которые можно продавать по всему миру.</>,
  },
  {
    image: asset("figma-assets/audience-2.png"),
    title: "Для тех, кто уже имеет Etsy-магазин",
    text: <>Но вы хотите находить более прибыльные товары, использовать AI и масштабировать продажи.</>,
  },
];

const goals = [
  <><strong>Создать свой магазин на Etsy</strong><br />И начать продавать товары онлайн без собственного производства и склада</>,
  <><strong>Выйти на доход от 3000€+</strong><br />Продавая Print on Demand, цифровые товары, товары по дропшиппингу или развивая свой бренд на Etsy</>,
  <><strong>Начать зарабатывать без опыта</strong><br />Пошагово разобраться с Etsy, даже если ты никогда раньше не продавала онлайн</>,
  <><strong>Работать из любой точки мира</strong><br />Создавать и развивать свой магазин там, где тебе удобно — нужен только интернет</>,
  <><strong>Создавать товары с помощью AI</strong><br />Находить прибыльные идеи, создавать дизайны, фотографии и цифровые продукты намного быстрее</>,
  <><strong>Получить первые продажи уже во время обучения</strong><br />И понять, как превратить Etsy-магазин в стабильный источник дохода</>,
];

const hostFacts = [
  "10 лет практики на Etsy, начиная свой путь всего с 300€",
  "Более 5 000 000€ оборота на Etsy за 2025 год",
  "Более 500 учеников уже прошли обучение по системе Юлии",
  "Лучший кейс ученицы — $61 697 за один месяц",
  "Эксперт публикуется в NEW YORK WEEKLY и KIVO DAILY",
  "Регулярно участвует в подкастах, офлайн-конференциях и проводит собственные выпускные для учеников",
];

const practiceCards = [
  {
    image: asset("figma-assets/practice-invitation.png"),
    title: "01. Print on Demand",
    text: <>Разберём, как работает Print on Demand, почему эта модель актуальна сегодня и как зарабатывать на товарах с принтами <strong>без собственного склада, закупок и производства.</strong></>,
  },
  {
    image: asset("figma-assets/gallery-5.png"),
    title: "02. Цифровые товары",
    text: <>Покажем, что такое digital products, <strong>как их создавать с нуля, какие товары продавать и сколько на них можно зарабатывать.</strong></>,
  },
  {
    image: asset("figma-assets/gallery-3.png"),
    title: "03. Дропшиппинг",
    text: <>Разберём, как работает модель дропшиппинга на Etsy, <strong>что нужно для старта, какие товары можно продавать и сколько можно заработать.</strong></>,
  },
  {
    image: asset("figma-assets/practice-invitation.png"),
    title: "04. Искусственный интеллект для Etsy",
    text: <>Покажем, как с помощью AI <strong>находить прибыльные ниши и идеи, создавать товары, карточки, фотографии и продающие описания</strong>, а также значительно ускорять работу с магазином.</>,
  },
  {
    image: asset("figma-assets/gallery-5.png"),
    title: "05. Запуск собственного магазина",
    text: <>Пошагово разберём, <strong>как открыть и оформить Etsy-магазин, добавить первые товары и подготовить его к продажам.</strong></>,
  },
  {
    image: asset("figma-assets/gallery-3.png"),
    title: "06. Путь к первым продажам",
    text: <>Покажем, <strong>где искать прибыльные идеи, как тестировать товары</strong> и какие шаги пройти от запуска магазина до первых заказов.</>,
  },
];

const resultItems = [
  <>Поймёте, <strong>как работают разные модели заработка на Etsy</strong></>,
  <>Научитесь находить <strong>прибыльные ниши и товары</strong></>,
  <>Узнаете, <strong>как использовать AI для работы с Etsy</strong></>,
  <>Научитесь создавать <strong>цифровые товары, которые можно продавать снова и снова</strong></>,
  <>Получите пошаговый план выхода на <strong>доход от 3 000€ в месяц</strong></>,
];

const studentCases = [
  {
    name: "Ольга",
    meta: "Print on Demand · Литва",
    start: "Переехала в Литву, долго не могла найти работу и работала на складе.",
    middle: "Прошла обучение, освоила Print on Demand и работу с AI. Параллельно с основной работой развивала свой Etsy-магазин.",
    result: "За этот год вышла на доход 4500€ и уволилась со склада, полностью перейдя в Etsy.",
  },
  {
    name: "Катерина",
    meta: "Берлин · Дропшиппинг + Digital",
    start: "Делала маникюр на дому. Очень уставала и практически не оставалось времени на семью.",
    middle: "За второй месяц обучения заработала 2 000€ и освоила несколько моделей: начала с дропшиппинга, а затем добавила цифровые товары.",
    result: "Доход на 3-й месяц обучения — 5200€.",
  },
  {
    name: "Елена",
    meta: "Варшава · Print on Demand",
    start: "Переехала в Варшаву с дочкой в 2022 году. Не имела своего дохода, зависела от мужа.",
    middle: "По несколько часов занималась Etsy. Запустила магазин по модели Print on Demand и получила первые продажи уже в первый месяц.",
    result: "На 3-й месяц вышла на 3 000€ в месяц, полностью сосредоточилась на Etsy, увидев потенциал этой модели.",
  },
];

function CtaButton({ label = "Зарегистрироваться на бесплатный мастер-класс" }: { label?: string }) {
  return (
    <a className="cta" href="#final">
      <span>{label}</span>
      <span className="ctaIcon" aria-hidden="true">
        <img src={arrowImage} alt="" />
      </span>
    </a>
  );
}

function LessonCard({
  label,
  title,
  image,
  tall = false,
}: {
  label: string;
  title: ReactNode;
  image: string;
  tall?: boolean;
}) {
  return (
    <article className="lessonCard">
      <div>
        <span>{label}</span>
        <h3>{title}</h3>
      </div>
      <div className={tall ? "lockedPreview lockedPreview--tall" : "lockedPreview"}>
        <img src={image} alt="" />
      </div>
    </article>
  );
}

function ExampleSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const swipeStart = useRef<number | null>(null);
  const slideImage = useRef<HTMLImageElement | null>(null);
  const previousSlide = () => {
    setSlideDirection("previous");
    setActiveSlide((slide) => (slide - 1 + exampleSlides.length) % exampleSlides.length);
  };
  const nextSlide = () => {
    setSlideDirection("next");
    setActiveSlide((slide) => (slide + 1) % exampleSlides.length);
  };

  const finishSwipe = (endX: number) => {
    if (swipeStart.current === null) return;
    const distance = endX - swipeStart.current;
    swipeStart.current = null;
    const image = slideImage.current;

    if (Math.abs(distance) < 40) {
      if (image) {
        image.style.transition = "transform 220ms cubic-bezier(0.22, 0.8, 0.24, 1)";
        image.style.transform = "translateX(0)";
      }
      return;
    }

    if (image) {
      image.style.transition = "";
      image.style.transform = "translateX(0)";
    }
    if (distance > 0) previousSlide();
    else nextSlide();
  };

  return (
    <>
      <div
        className="videoBox"
        onPointerDown={(event) => {
          swipeStart.current = event.clientX;
          if (slideImage.current) slideImage.current.style.transition = "none";
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (swipeStart.current === null) return;
          const distance = Math.max(-110, Math.min(110, event.clientX - swipeStart.current));
          if (slideImage.current) slideImage.current.style.transform = `translateX(${distance}px)`;
        }}
        onPointerUp={(event) => finishSwipe(event.clientX)}
        onPointerCancel={() => {
          swipeStart.current = null;
          if (slideImage.current) {
            slideImage.current.style.transition = "transform 220ms cubic-bezier(0.22, 0.8, 0.24, 1)";
            slideImage.current.style.transform = "translateX(0)";
          }
        }}
      >
        <img
          ref={slideImage}
          key={`${activeSlide}-${slideDirection}`}
          className={`exampleSlide exampleSlide--${slideDirection}`}
          src={exampleSlides[activeSlide]}
          alt={`Пример товара для Etsy ${activeSlide + 1}`}
          draggable={false}
        />
        <button className="playButton" type="button" aria-label="Відтворити приклад">
          <img src={asset("figma-assets/play.svg")} alt="" />
        </button>
      </div>
      <div className="arrows">
        <button type="button" aria-label="Попередній приклад" onClick={previousSlide}><img src={asset("figma-assets/arrow-left.svg")} alt="" /></button>
        <button type="button" aria-label="Наступний приклад" onClick={nextSlide}><img src={asset("figma-assets/arrow-right.svg")} alt="" /></button>
      </div>
    </>
  );
}

function StudentSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const swipeStart = useRef<number | null>(null);
  const slide = useRef<HTMLDivElement | null>(null);
  const previousSlide = () => {
    setSlideDirection("previous");
    setActiveSlide((index) => (index - 1 + studentCases.length) % studentCases.length);
  };
  const nextSlide = () => {
    setSlideDirection("next");
    setActiveSlide((index) => (index + 1) % studentCases.length);
  };

  const finishSwipe = (endX: number) => {
    if (swipeStart.current === null) return;
    const distance = endX - swipeStart.current;
    swipeStart.current = null;
    const currentSlide = slide.current;

    if (Math.abs(distance) < 40) {
      if (currentSlide) {
        currentSlide.style.transition = "transform 220ms cubic-bezier(0.22, 0.8, 0.24, 1)";
        currentSlide.style.transform = "translateX(0)";
      }
      return;
    }

    if (currentSlide) {
      currentSlide.style.transition = "";
      currentSlide.style.transform = "translateX(0)";
    }
    if (distance > 0) previousSlide();
    else nextSlide();
  };

  return (
    <div className="studentSlider">
      <div
        className="studentViewport"
        onPointerDown={(event) => {
          swipeStart.current = event.clientX;
          if (slide.current) slide.current.style.transition = "none";
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (swipeStart.current === null) return;
          const distance = Math.max(-110, Math.min(110, event.clientX - swipeStart.current));
          if (slide.current) slide.current.style.transform = `translateX(${distance}px)`;
        }}
        onPointerUp={(event) => finishSwipe(event.clientX)}
        onPointerCancel={() => {
          swipeStart.current = null;
          if (slide.current) {
            slide.current.style.transition = "transform 220ms cubic-bezier(0.22, 0.8, 0.24, 1)";
            slide.current.style.transform = "translateX(0)";
          }
        }}
      >
        <div
          ref={slide}
          key={`${activeSlide}-${slideDirection}`}
          className={`studentCaseSlide studentSlide--${slideDirection}`}
        >
          <header>
            <strong>{studentCases[activeSlide].name}</strong>
            <span>{studentCases[activeSlide].meta}</span>
          </header>
          <div className="studentTimeline">
            <article><b>Точка А</b><p>{studentCases[activeSlide].start}</p></article>
            <article><b>Промежуточный этап</b><p>{studentCases[activeSlide].middle}</p></article>
            <article><b>Точка Б</b><p>{studentCases[activeSlide].result}</p></article>
          </div>
        </div>
      </div>
      <div className="studentArrows">
        <button type="button" aria-label="Попередній кейс" onClick={previousSlide}><img src={asset("figma-assets/arrow-left.svg")} alt="" /></button>
        <button type="button" aria-label="Наступний кейс" onClick={nextSlide}><img src={asset("figma-assets/arrow-right.svg")} alt="" /></button>
      </div>
    </div>
  );
}

function CountdownTimer() {
  const [remainingSeconds, setRemainingSeconds] = useState(5 * 60 + 50);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;
  const format = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="timer" aria-live="polite" aria-label="Зворотний таймер">
      <div className="timerDigits">
        <span>{format(hours)}</span><b>:</b><span>{format(minutes)}</span><b>:</b><span>{format(seconds)}</span>
      </div>
      <div className="timerLabels"><span>год</span><span>хв</span><span>сек</span></div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".page > section:not(.hero)"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => {
      section.classList.add("scrollReveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page">
      <section className="hero bgGrid">
        <div className="topPill">
          <i />
          бесплатный онлайн мастер-класс
        </div>
        <p className="profession">Как создавать принты и цифровые товары</p>
        <h1>с помощью искусственного интеллекта</h1>
        <p className="heroLead">
          <b>и выйти на доход</b>
        </p>
        <div className="zeroTitle">
          <img className="turnArrow" src={asset("figma-assets/arrow-turn.svg")} alt="" aria-hidden="true" />
          <strong>от 3000€ в месяц</strong>
        </div>

        <div className="heroContent">
          <div className="heroBenefits">
            {heroBenefits.map((benefit) => (
              <p key={benefit.icon}>
                <img src={benefit.icon} alt="" aria-hidden="true" />
                <span>{benefit.text}</span>
              </p>
            ))}
          </div>
          <div className="heroPhoto">
            <img
              src={heroImage}
              alt="Принты и цифровые товары с помощью искусственного интеллекта"
              width={382}
              height={536}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </div>
        </div>
        <CtaButton />
      </section>

      <section className="bonus pinkPanel">
        <img className="giftIcon" src={asset("figma-assets/gift-icon.svg")} alt="" aria-hidden="true" />
        <p className="pinkText">Первые 100 участников мастер-класса</p>
        <h2>Получат 3 бонуса</h2>
        <p className="bonusLead">
          Заберите материалы, которые помогут быстрее запустить первые товары
        </p>
        <div className="lessons">
          <LessonCard
            label="Видео-бонус №1"
            title={<>Пошаговая стратегия как я заработала <strong>100.000€ всего за 60 дней</strong> на сезонном товаре с помощью ИИ</>}
            image={lessonImages[0]}
          />
          <LessonCard
            label="Бонус №2"
            title={<>Список товаров, которые можно запустить прямо сейчас и получить <strong>первые заказы уже через 14 дней</strong> (идеально перед 4 кварталом)</>}
            image={lessonImages[1]}
          />
          <LessonCard
            label="Бонус №3"
            title={<>Шпаргалка по искусственному интеллекту. <strong>Все мои ТОП наработки в одном PDF</strong></>}
            image={lessonImages[2]}
            tall
          />
        </div>
        <div className="people">
          <img className="faces" src={asset("figma-assets/people-group.png")} alt="" aria-hidden="true" />
          <p>Первые 100 участников получат все 3 бонуса.</p>
        </div>
        <CtaButton label="Забрать бонусы" />
      </section>

      <section className="brands bgGrid">
        <h2>На каких товарах уже зарабатывают наши ученики?</h2>
        <p>Реальные товары и ниши, которые наши ученики уже продают на Etsy прямо сейчас</p>
        <img className="etsyProducts" src={asset("figma-assets/etsy-products.png")} alt="Примеры товаров учеников на Etsy" />
      </section>

      <section className="goals bgGrid">
        <h2><span>Регистрируйся</span> на мастер-класс</h2>
        <p className="limePill">если хочешь:</p>
        <div className="goalGrid">
          {goals.map((goal, index) => (
            <article key={index}>
              <i>
                <img src={asset(`figma-assets/goal-${index + 1}.svg`)} alt="" aria-hidden="true" />
              </i>
              <p>{goal}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="audience pinkPanel">
        <h2>Для кого</h2>
        <p className="limePill">этот мастер-класс?</p>
        <div className="audienceList">
          {audienceCards.map((card) => (
            <article className="audienceCard" key={card.title}>
              <img src={card.image} alt="" />
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
        <CtaButton />
      </section>

      <section className="host bgGrid">
        <h2>Кто проводит</h2>
        <p className="limePill">мастер-класс:</p>
        <div className="hostPhoto">
          <img src={asset("figma-assets/gallery-1.png")} alt="Юлия Гроссу" />
          <span>Юлия Гроссу</span>
        </div>
        <div className="checkList">
          {hostFacts.map((fact) => (
            <p key={fact}><img src={asset("figma-assets/check.svg")} alt="" />{fact}</p>
          ))}
        </div>
        <CtaButton />
      </section>

      <section className="practice bgGrid">
        <p className="limePill">на мастер-классе</p>
        <h2>Что вас ждёт?</h2>
        <div className="practiceList">
          {practiceCards.map((card) => (
            <article key={card.title}>
              <img src={card.image} alt="" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <CtaButton />
      </section>

      <section className="examples pinkPanel">
        <h2>Товары, которые вы научитесь создавать</h2>
        <p className="limePill">с помощью AI</p>
        <ExampleSlider />
        <p>Листайте примеры и посмотрите, на каких товарах и нишах зарабатывают наши ученики на Etsy.</p>
      </section>

      <section className="results bgGrid">
        <h2>Результаты</h2>
        <p className="limePill">после мастер-класса</p>
        <div
          className="paper"
          style={{ "--typewriter-image": `url(${asset("figma-assets/results-typewriter.png")})` } as CSSProperties}
        >
          {resultItems.map((item, index) => (
            <p key={index}><i>✓</i><span>{item}</span></p>
          ))}
        </div>
      </section>

      <section className="students pinkPanel">
        <h2>Студенты</h2>
        <p className="limePill">те, кто начал свой путь в Etsy,</p>
        <p className="limePill">придя на наш мастер-класс</p>
        <StudentSlider />
      </section>

      <section className="final bgGrid" id="final">
        <p className="profession">Бесплатный онлайн мастер-класс</p>
        <h2>Как создавать принты и цифровые товары</h2>
        <p className="heroLead"><b>с помощью искусственного интеллекта и выйти на доход</b></p>
        <div className="zeroTitle">
          <img className="turnArrow" src={asset("figma-assets/arrow-turn.svg")} alt="" aria-hidden="true" />
          <strong>от 3000€ в месяц</strong>
        </div>
        <img className="giftIcon" src={asset("figma-assets/gift-icon.svg")} alt="" aria-hidden="true" />
        <p className="pinkText">Первые 100 участников</p>
        <h3>Получат 3 бонуса</h3>
        <p className="bonusLead">
          Полезные материалы для быстрого запуска Etsy-магазина
        </p>
        <CountdownTimer />
        <div className="finalLessons">
          <div className="lessons">
            <LessonCard
              label="Видео-бонус №1"
              title={<>Стратегия заработка <strong>100 000€ за 60 дней</strong></>}
              image={lessonImages[0]}
            />
            <LessonCard
              label="Бонус №2"
              title={<>Список товаров для <strong>быстрого запуска</strong></>}
              image={lessonImages[1]}
            />
            <LessonCard
              label="Бонус №3"
              title={<>Шпаргалка по AI <strong>в одном PDF</strong></>}
              image={lessonImages[2]}
              tall
            />
          </div>
        </div>
        <div className="people">
          <img className="faces" src={asset("figma-assets/people-group.png")} alt="" aria-hidden="true" />
          <p>Заберите бонусы и начните свой путь на Etsy.</p>
        </div>
        <CtaButton />
      </section>
    </main>
  );
}
