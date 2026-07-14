"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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

const studentSlides = [
  asset("figma-assets/student-1.png"),
  asset("figma-assets/student-2.png"),
  asset("figma-assets/student-3.png"),
  asset("figma-assets/student-4.png"),
  asset("figma-assets/student-5.png"),
  asset("figma-assets/student-6.png"),
];

const heroBenefits = [
  {
    icon: asset("figma-assets/benefit-fire.svg"),
    text: (
      <>
        <b>Получай первые заказы</b> уже во время обучения
      </>
    ),
  },
  {
    icon: asset("figma-assets/benefit-laptop.svg"),
    text: (
      <>
        Работай из <b>любой точки мира</b>
      </>
    ),
  },
  {
    icon: asset("figma-assets/benefit-heart.svg"),
    text: (
      <>
        Освой современную <b>AI-профессию</b> без технического опыта
      </>
    ),
  },
  {
    icon: asset("figma-assets/benefit-wallet.svg"),
    text: (
      <>
        Твои работы <b>будут покупать</b> компании и эксперты
      </>
    ),
  },
];

const audienceCards = [
  {
    image: asset("figma-assets/audience-1.png"),
    title: "Для новичков без опыта",
    text: (
      <><strong>Если вы хотите освоить востребованную AI-профессию</strong> и начать зарабатывать на создании контента для бизнеса и брендов.</>
    ),
  },
  {
    image: asset("figma-assets/audience-2.png"),
    title: "Для тех, кто хочет сменить профессию",
    text: (
      <>Если вы ищете современное направление с возможностью удалённой работы и доходом от <strong>500€ до 3000€+.</strong></>
    ),
  },
  {
    image: asset("figma-assets/audience-4.png"),
    title: "Для экспертов и фрилансеров",
    text: (
      <>Если хотите использовать AI для создания фото, Reels, сторис и контента <strong>быстрее, качественнее и выгоднее.</strong></>
    ),
  },
  {
    image: asset("figma-assets/gallery-3.png"),
    title: "Для тех, кто хочет работать на себя",
    text: (
      <><strong>Получать клиентов из Европы, США и других стран,</strong> работая из любой точки мира.</>
    ),
  },
];

const goals = [
  <>Создавать <strong>AI-контент</strong> для брендов и экспертов за считанные минуты</>,
  <>Освоить профессию AI Smart Creator и выйти на доход <strong>от 500€ до 3000€+</strong></>,
  <>Чтобы <strong>твои работы покупали</strong> бизнесы, блогеры и бренды</>,
  <>Создавать фото, Reels, сторис и контент без команды и больших затрат</>,
  <>Получить первых клиентов и заказы <strong>уже во время обучения</strong></>,
  <>Продавать не картинки, а <strong>готовые контент-пакеты</strong> для бизнеса</>,
  <>Работать из <strong>любой точки мира</strong> и строить удалённую карьеру</>,
  <>Освоить <strong>одну из самых востребованных</strong> AI-профессий 2026 года</>,
];

const hostFacts = [
  "Эксперт по AI, Instagram и личному бренду",
  "Выросла в Instagram до 80 000+ подписчиков примерно за полгода",
  "Провела обучение для более чем 900 учеников",
  "Выступаю на оффлайн конференциях",
  "Основательница агентства Filipenko.ai - создание SMART контента для соцсетей",
  "Знаю все про соцсети, алгоритмы, контент и ИИ",
];

const practiceCards = [
  {
    image: asset("figma-assets/practice-invitation.png"),
    title: "Создание AI-фото для брендов",
    text: <>Для кого: <strong>бренды, эксперты, магазины</strong></>,
  },
  {
    image: asset("figma-assets/gallery-5.png"),
    title: "AI-фотосессии без студии",
    text: <>Для кого: <strong>личный бренд, блогеры, бизнес</strong></>,
  },
  {
    image: asset("figma-assets/gallery-3.png"),
    title: "Контент для социальных сетей",
    text: <>Для кого: <strong>эксперты, компании, локальный бизнес</strong></>,
  },
];

const resultItems = [
  <>Поймёте, <strong>как работает профессия</strong> AI Smart Creator</>,
  <>Узнаете, <strong>какие AI-услуги сегодня покупают бизнесы</strong> и бренды</>,
  <>Разберётесь, <strong>где искать первых клиентов</strong> и получать заказы</>,
  <>Увидите, как создавать контент, <strong>за который готовы платить</strong></>,
  <>Получите пошаговый план выхода на <strong>доход от 500€ до 3000€+</strong></>,
];

function CtaButton() {
  return (
    <a className="cta" href="#final">
      <span>Зарегистрироваться</span>
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
          alt={`Приклад AI-контенту ${activeSlide + 1}`}
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
  const [activeSlide, setActiveSlide] = useState(2);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const swipeStart = useRef<number | null>(null);
  const slideImage = useRef<HTMLImageElement | null>(null);
  const previousSlide = () => {
    setSlideDirection("previous");
    setActiveSlide((slide) => (slide - 1 + studentSlides.length) % studentSlides.length);
  };
  const nextSlide = () => {
    setSlideDirection("next");
    setActiveSlide((slide) => (slide + 1) % studentSlides.length);
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
    <div className="studentSlider">
      <div
        className="studentViewport"
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
          className={`studentSlide studentSlide--${slideDirection}`}
          src={studentSlides[activeSlide]}
          alt={`Кейс учениці ${activeSlide + 1}`}
          draggable={false}
        />
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
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".page > section"));
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
        <p className="profession">Профессия 2026</p>
        <h1>AI Smart Creator</h1>
        <div className="zeroTitle">
          <img className="turnArrow" src={asset("figma-assets/arrow-turn.svg")} alt="" aria-hidden="true" />
          <strong>с нуля</strong>
        </div>
        <p className="heroLead">
          <b>Выйди на доход от 500$ до 3000€+,</b> создавая AI-контент для
          бизнесов, экспертов и брендов
        </p>

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
            <img src={heroImage} alt="AI Smart Creator" />
          </div>
        </div>
        <CtaButton />
      </section>

      <section className="bonus pinkPanel">
        <img className="giftIcon" src={asset("figma-assets/gift-icon.svg")} alt="" aria-hidden="true" />
        <p className="pinkText">Первые 100 зарегистрировавшихся</p>
        <h2>Получат бонус</h2>
        <p className="bonusLead">
          <b>3 бесплатных видео</b> о том, как начать зарабатывать на AI-контенте
        </p>
        <div className="lessons">
          <LessonCard
            label="Урок 1:"
            title={<>Хто такі <strong>AI-креатори.</strong></>}
            image={lessonImages[0]}
          />
          <LessonCard
            label="Урок 2:"
            title={<>Хто і за що <strong>платить AI-креаторам.</strong></>}
            image={lessonImages[1]}
          />
          <LessonCard
            label="Урок 3:"
            title={<>Проекти, які можна <strong>виконувати без досвіду.</strong></>}
            image={lessonImages[2]}
            tall
          />
        </div>
        <div className="people">
          <img className="faces" src={asset("figma-assets/people-group.png")} alt="" aria-hidden="true" />
          <p>Уже более 2500 человек прошли мастер-класс.</p>
        </div>
        <CtaButton />
      </section>

      <section className="brands bgGrid">
        <h2>Бизнесы и эксперты</h2>
        <p>которые уже заказывают AI-контент</p>
        <div className="brandMarquee" aria-label="Бизнесы и эксперты">
          <div className="brandTrack">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="brandSlot" key={`top-${index}`} />
            ))}
          </div>
          <div className="brandTrack brandTrack--reverse">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="brandSlot" key={`bottom-${index}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="pay pinkPanel">
        <h2>За что платят AI-креаторам</h2>
        <div className="payRows">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="payRow" key={index}>
              <article>
                <span>Заказ</span>
              </article>
              <i>→</i>
              <article>
                <span>Результат</span>
                <b>+230$</b>
              </article>
            </div>
          ))}
        </div>
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
      </section>

      <section className="host bgGrid">
        <h2>Кто проводит</h2>
        <p className="limePill">мастер-класс:</p>
        <div className="hostPhoto">
          <img src={asset("figma-assets/gallery-1.png")} alt="Юлия Филипенко" />
          <span>Юлия Филипенко</span>
        </div>
        <div className="checkList">
          {hostFacts.map((fact) => (
            <p key={fact}><img src={asset("figma-assets/check.svg")} alt="" />{fact}</p>
          ))}
        </div>
        <CtaButton />
      </section>

      <section className="partners pinkPanel">
        <h2>А также<br />я официальный партнёр</h2>
        <p className="limePill">ведущих нейросетей</p>
        <div className="logoGrid">
          <img src={asset("figma-assets/partner-logos.png")} alt="Higgsfield, Midjourney, flow.ai, KlingAI та invideoAI" />
        </div>
        <p>Higgsfield, Midjourney, Flow, Kling, Invideo</p>
      </section>

      <section className="practice bgGrid">
        <p className="limePill">на мастер-классе</p>
        <h2>Вас ждёт практика</h2>
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
        <h2>Примеры AI-контента который</h2>
        <p className="limePill">вы научитесь создавать</p>
        <ExampleSlider />
        <p>Листайте примеры и посмотрите, какой контент создают AI Smart Creator'ы для брендов, экспертов и бизнеса.</p>
      </section>

      <section className="results bgGrid">
        <h2>Результаты</h2>
        <p className="limePill">после мастер-класса</p>
        <div className="paper">
          {resultItems.map((item, index) => (
            <p key={index}><i>✓</i><span>{item}</span></p>
          ))}
        </div>
      </section>

      <section className="students pinkPanel">
        <h2>Студенты</h2>
        <p className="limePill">те, кто начал свой путь</p>
        <p className="limePill">в AI с нашего мастер-класса</p>
        <StudentSlider />
      </section>

      <section className="final bgGrid" id="final">
        <p className="profession">Опануй професію 2026</p>
        <h2>AI Smart Creator</h2>
        <div className="zeroTitle">
          <img className="turnArrow" src={asset("figma-assets/arrow-turn.svg")} alt="" aria-hidden="true" />
          <strong>с нуля</strong>
        </div>
        <p className="heroLead">
          <b>Выйди на доход от 500$ до 3000€+,</b> создавая AI-контент для
          бизнесов, экспертов и брендов
        </p>
        <img className="giftIcon" src={asset("figma-assets/gift-icon.svg")} alt="" aria-hidden="true" />
        <p className="pinkText">Первые 100 зарегистрировавшихся</p>
        <h3>Получат бонус</h3>
        <p className="bonusLead">
          <b>3 бесплатных видео</b> о том, как начать зарабатывать на AI-контенте
        </p>
        <CountdownTimer />
        <div className="finalLessons">
          <div className="lessons">
            <LessonCard
              label="Урок 1:"
              title={<>Хто такі <strong>AI-креатори.</strong></>}
              image={lessonImages[0]}
            />
            <LessonCard
              label="Урок 2:"
              title={<>Хто і за що <strong>платить AI-креаторам.</strong></>}
              image={lessonImages[1]}
            />
            <LessonCard
              label="Урок 3:"
              title={<>Проекти, які можна <strong>виконувати без досвіду.</strong></>}
              image={lessonImages[2]}
              tall
            />
          </div>
        </div>
        <div className="people">
          <img className="faces" src={asset("figma-assets/people-group.png")} alt="" aria-hidden="true" />
          <p>Уже более 2500 человек прошли мастер-класс.</p>
        </div>
        <CtaButton />
      </section>
    </main>
  );
}
