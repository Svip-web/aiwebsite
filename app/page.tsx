"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const arrowImage = asset("figma-assets/arrow.png");
const heroImage = asset("figma-assets/hero-speaker.webp");

const lessonImages = [
  asset("figma-assets/bonus-video-strategy.webp"),
  asset("figma-assets/bonus-products-mockup.webp"),
  asset("figma-assets/bonus-ai-cheatsheet-mockup.webp"),
];

const lessonImagesUs = [
  asset("figma-assets/bonus-video-strategy-us.webp"),
  lessonImages[1],
  lessonImages[2],
];

const etsyProductSlides = Array.from(
  { length: 8 },
  (_, index) => asset(`figma-assets/etsy-market-${index + 1}.webp`),
);

const exampleSlides = Array.from(
  { length: 8 },
  (_, index) => asset(`figma-assets/etsy-upload-${index + 1}.webp`),
);

const animationStudentVideos = [
  {
    video: asset("figma-assets/animation-student-1.mp4"),
    poster: asset("figma-assets/animation-student-1.webp"),
    price: "$29",
  },
  {
    video: asset("figma-assets/animation-student-2.mp4"),
    poster: asset("figma-assets/animation-student-2.webp"),
    price: "$35",
  },
  {
    video: asset("figma-assets/animation-student-3.mp4"),
    poster: asset("figma-assets/animation-student-3.webp"),
    price: "$39",
  },
];

const animationHeroBenefits = [
  { icon: asset("figma-assets/benefit-fire.svg"), text: <><b>С полного нуля.</b></> },
  { icon: asset("figma-assets/benefit-wallet.svg"), text: <><b>Без дизайнерских навыков.</b></> },
  { icon: asset("figma-assets/benefit-heart.svg"), text: <><b>Без опыта.</b></> },
  { icon: asset("figma-assets/benefit-laptop.svg"), text: <><b>Без сложных программ.</b></> },
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
        С&nbsp;возможностью работать из <b>любой точки мира.</b>
      </>
    ),
  },
];

const audienceCards = [
  {
    image: asset("figma-assets/audience-independent-income-slavic.webp"),
    title: "Если вы хотите свой независимый доход",
    text: (
      <>И не хотите зависеть только от зарплаты мужа, начальника или одного источника дохода.</>
    ),
  },
  {
    image: asset("figma-assets/audience-mom-home-slavic.webp"),
    title: "Для мам с маленькими детьми",
    text: (
      <>Если у тебя мало свободного времени, но ты хочешь зарабатывать из дома и совмещать работу с семьёй.</>
    ),
  },
  {
    image: asset("figma-assets/audience-relocated-abroad-slavic.webp"),
    title: "Для тех, кто переехал за границу",
    text: (
      <>Не знаешь, как начать зарабатывать в новой стране? Создай онлайн-источник дохода, который не привязан к месту работы.</>
    ),
  },
  {
    image: asset("figma-assets/audience-offline-online-slavic.webp"),
    title: "Для тех, кто работает офлайн и хочет перейти в онлайн",
    text: (
      <>Хочешь работать удалённо, самостоятельно управлять своим временем и постепенно заменить офлайн-работу.</>
    ),
  },
  {
    image: asset("figma-assets/audience-career-change-slavic.webp"),
    title: "Для тех, кто хочет сменить профессию",
    text: <>Хочешь начать своё дело с нуля, освоить Etsy и создавать товары, которые можно продавать по всему миру.</>,
  },
  {
    image: asset("figma-assets/audience-etsy-shop-slavic.webp"),
    title: "Для тех, кто уже имеет Etsy-магазин",
    text: <>Но вы хотите находить более прибыльные товары, использовать AI и масштабировать продажи.</>,
  },
];

const goals = [
  {
    title: "Создать свой магазин на Etsy",
    text: "И начать продавать товары онлайн без собственного производства и склада",
  },
  {
    title: "Выйти на доход от 3000€+",
    text: "Продавая Print on Demand, цифровые товары, товары по дропшиппингу или развивая свой бренд на Etsy",
  },
  {
    title: "Начать зарабатывать без опыта",
    text: "Пошагово разобраться с Etsy, даже если ты никогда раньше не продавала онлайн",
  },
  {
    title: "Работать из любой точки мира",
    text: "Создавать и развивать свой магазин там, где тебе удобно — нужен только интернет",
  },
  {
    title: "Создавать товары с помощью AI",
    text: "Находить прибыльные идеи, создавать дизайны, фотографии и цифровые продукты намного быстрее",
  },
  {
    title: "Получить первые продажи уже во время обучения",
    text: "И понять, как превратить Etsy-магазин в стабильный источник дохода",
  },
];

const createHostFacts = (isUsMarket: boolean) => [
  <><strong>10 лет практики на Etsy</strong>, начиная свой путь всего с {isUsMarket ? "300$" : "300€"}</>,
  <>Более <strong>{isUsMarket ? "5 000 000$" : "5 000 000€"} оборота на Etsy</strong> за 2025 год</>,
  <>Более <strong>500 учеников</strong> уже прошли обучение по системе Юлии</>,
  <>Лучший кейс ученицы — <strong>$61 697 за один месяц</strong></>,
  <>Эксперт публикуется в <strong>NEW YORK WEEKLY и KIVO DAILY</strong></>,
  <>Регулярно участвует в подкастах, офлайн-конференциях и <strong>проводит собственные выпускные для учеников</strong></>,
];

const practiceCards = [
  {
    image: asset("figma-assets/practice-pod-products.webp"),
    title: "01. Print on Demand",
    text: <>Разберём, как работает Print on Demand, почему эта модель актуальна сегодня и как зарабатывать на товарах с принтами <strong>без собственного склада, закупок и производства.</strong></>,
  },
  {
    image: asset("figma-assets/practice-digital-products.webp"),
    title: "02. Цифровые товары",
    text: <>Покажем, что такое digital products, <strong>как их создавать с нуля, какие товары продавать и сколько на них можно зарабатывать.</strong></>,
  },
  {
    image: asset("figma-assets/practice-dropshipping-products.webp"),
    title: "03. Дропшиппинг",
    text: <>Разберём, как работает модель дропшиппинга на Etsy, <strong>что нужно для старта, какие товары можно продавать и сколько можно заработать.</strong></>,
  },
  {
    image: asset("figma-assets/practice-ai-products.webp"),
    title: "04. Искусственный интеллект для Etsy",
    text: <>Покажем, как с помощью AI <strong>находить прибыльные ниши и идеи, создавать товары, карточки, фотографии и продающие описания</strong>, а также значительно ускорять работу с магазином.</>,
  },
  {
    image: asset("figma-assets/practice-shop-launch.webp"),
    title: "05. Запуск собственного магазина",
    text: <>Пошагово разберём, <strong>как открыть и оформить Etsy-магазин, добавить первые товары и подготовить его к продажам.</strong></>,
  },
  {
    image: asset("figma-assets/practice-first-sales-products.webp"),
    title: "06. Путь к первым продажам",
    text: <>Покажем, <strong>где искать прибыльные идеи, как тестировать товары</strong> и какие шаги пройти от запуска магазина до первых заказов.</>,
  },
];

const createResultItems = (isUsMarket: boolean) => [
  <>Поймёте, <strong>как работают разные модели заработка на Etsy</strong></>,
  <>Научитесь находить <strong>прибыльные ниши и товары</strong></>,
  <>Узнаете, <strong>как использовать AI для работы с Etsy</strong></>,
  <>Научитесь создавать <strong>цифровые товары, которые можно продавать снова и снова</strong></>,
  <>Получите пошаговый план выхода на <strong>доход от {isUsMarket ? "3 000$" : "3 000€"} в месяц</strong></>,
];

const studentCases = [
  {
    name: "Ольга",
    meta: "PRINT ON DEMAND · Литва",
    start: "Переехала в Литву, долго не могла найти работу и работала на складе.",
    middle: "Прошла обучение, освоила Print on Demand и работу с AI. Параллельно с основной работой развивала свой Etsy-магазин.",
    result: "За этот год вышла на доход 4500€ и уволилась со склада, полностью перейдя в Etsy.",
  },
  {
    name: "Катерина",
    meta: "БЕРЛИН · ДРОПШИППИНГ + DIGITAL",
    start: "Делала маникюр на дому. Очень уставала и практически не оставалось времени на семью.",
    middle: "За второй месяц обучения заработала 2 000€. и освоила несколько моделей: начала с дропшиппинга, а затем добавила цифровые товары.",
    result: "Доход на 3-й месяц обучения — 5200€.",
  },
  {
    name: "Елена",
    meta: "ВАРШАВА · PRINT ON DEMAND",
    start: "Переехала в Варшаву с дочкой в 2022 году. Не имела своего дохода, зависела от мужа",
    middle: "По несколько часов занималась Etsy. Запустила магазин по модели Print on Demand и получила первые продажи уже в первый месяц.",
    result: "На 3-й месяц вышла на 3 000€ в месяц, полностью сосредоточилась на Etsy, увидев потенциал этой модели.",
  },
];

function CtaButton({
  label = "Зарегистрироваться на бесплатный мастер-класс",
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) {
  return (
    <button className="cta" type="button" onClick={onClick}>
      <span>{label}</span>
      <span className="ctaIcon" aria-hidden="true">
        <img src={arrowImage} alt="" />
      </span>
    </button>
  );
}

function LessonCard({
  label,
  title,
  subtitle,
  image,
  tall = false,
}: {
  label: string;
  title: ReactNode;
  subtitle: ReactNode;
  image: string;
  tall?: boolean;
}) {
  return (
    <article className="lessonCard">
      <div className={tall ? "lockedPreview lockedPreview--tall" : "lockedPreview"}>
        <img src={image} alt="" />
      </div>
      <div className="lessonCopy">
        <span className="lessonBadge">{label}</span>
        <h3>{title}</h3>
        <p className="lessonSubtitle">{subtitle}</p>
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
        className="exampleMedia"
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
      </div>
      <div className="arrows">
        <button type="button" aria-label="Попередній приклад" onClick={previousSlide}><img src={asset("figma-assets/arrow-left.svg")} alt="" /></button>
        <button type="button" aria-label="Наступний приклад" onClick={nextSlide}><img src={asset("figma-assets/arrow-right.svg")} alt="" /></button>
      </div>
    </>
  );
}

function EtsyProductsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const viewport = useRef<HTMLDivElement | null>(null);
  const slideCount = etsyProductSlides.length;

  const goToSlide = (index: number) => {
    const nextIndex = (index + slideCount) % slideCount;
    setActiveSlide(nextIndex);
    viewport.current?.scrollTo({
      left: nextIndex * viewport.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="etsyProductsSlider">
      <div
        ref={viewport}
        className="etsyProductsViewport"
        onScroll={(event) => {
          const width = event.currentTarget.clientWidth;
          if (width > 0) setActiveSlide(Math.round(event.currentTarget.scrollLeft / width));
        }}
      >
        {etsyProductSlides.map((image, index) => (
          <div className="etsyProductsSlide" key={index}>
            <img
              className="etsyProducts"
              src={image}
              alt={`Пример товаров учеников на Etsy ${index + 1}`}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="etsyProductsDots" aria-hidden="true">
        {etsyProductSlides.map((_, index) => <i className={activeSlide === index ? "isActive" : ""} key={index} />)}
      </div>
      <div className="arrows">
        <button type="button" aria-label="Предыдущие товары" onClick={() => goToSlide(activeSlide - 1)}><img src={asset("figma-assets/arrow-left.svg")} alt="" /></button>
        <button type="button" aria-label="Следующие товары" onClick={() => goToSlide(activeSlide + 1)}><img src={asset("figma-assets/arrow-right.svg")} alt="" /></button>
      </div>
    </div>
  );
}

function AnimationSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const previousSlide = () => setActiveSlide((index) => (index - 1 + animationStudentVideos.length) % animationStudentVideos.length);
  const nextSlide = () => setActiveSlide((index) => (index + 1) % animationStudentVideos.length);

  return (
    <div className="animationSlider">
      <div className="animationVideoFrame">
        <video
          key={animationStudentVideos[activeSlide].video}
          src={animationStudentVideos[activeSlide].video}
          poster={animationStudentVideos[activeSlide].poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={(event) => void event.currentTarget.play().catch(() => undefined)}
          aria-label={`AI-анимация ученика ${activeSlide + 1}`}
        />
      </div>
      <div className="etsyProductsDots" aria-hidden="true">
        {animationStudentVideos.map((_, index) => <i className={activeSlide === index ? "isActive" : ""} key={index} />)}
      </div>
      <div className="arrows">
        <button type="button" aria-label="Предыдущая анимация" onClick={previousSlide}><img src={asset("figma-assets/arrow-left.svg")} alt="" /></button>
        <button type="button" aria-label="Следующая анимация" onClick={nextSlide}><img src={asset("figma-assets/arrow-right.svg")} alt="" /></button>
      </div>
    </div>
  );
}

function StudentSlider({ cases }: { cases: typeof studentCases }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const swipeStart = useRef<number | null>(null);
  const slide = useRef<HTMLDivElement | null>(null);
  const previousSlide = () => {
    setSlideDirection("previous");
    setActiveSlide((index) => (index - 1 + cases.length) % cases.length);
  };
  const nextSlide = () => {
    setSlideDirection("next");
    setActiveSlide((index) => (index + 1) % cases.length);
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
            <strong>{cases[activeSlide].name}</strong>
            <span>{cases[activeSlide].meta}</span>
          </header>
          <div className="studentTimeline">
            <article><b>Точка А</b><p>{cases[activeSlide].start}</p></article>
            <article><b>Промежуточный этап</b><p>{cases[activeSlide].middle}</p></article>
            <article><b>Точка Б</b><p>{cases[activeSlide].result}</p></article>
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
      setRemainingSeconds((seconds) => (seconds <= 1 ? 5 * 60 + 50 : seconds - 1));
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

function PhoneInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const hiddenInput = hiddenInputRef.current;
    if (!input || !hiddenInput) return;

    let active = true;
    const phonePicker = intlTelInput(input, {
      initialCountry: "auto",
      preferredCountries: ["ua"],
      excludeCountries: ["ru", "by"],
      separateDialCode: true,
      formatOnDisplay: true,
      autoPlaceholder: "aggressive",
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
      geoIpLookup: (setCountry) => {
        fetch("https://ipinfo.io/json")
          .then((response) => response.json())
          .then((location: { country?: string }) => setCountry(location.country?.toLowerCase() || "ua"))
          .catch(() => setCountry("ua"));
      },
    });

    const updatePattern = () => {
      if (!input.placeholder) return;
      input.pattern = input.placeholder.replace(/[0-9]/g, "\\d");
    };

    const syncFullNumber = () => {
      const nationalNumber = input.value.replace(/\D/g, "");
      const dialCode = phonePicker.getSelectedCountryData().dialCode;
      hiddenInput.value = nationalNumber && dialCode ? `+${dialCode}${nationalNumber}` : "";
    };

    const applyCountryMask = () => {
      const digits = input.value.replace(/\D/g, "");
      const template = input.placeholder;
      let digitIndex = 0;
      let formatted = "";

      for (const character of template) {
        if (/[0-9]/.test(character)) {
          if (digitIndex >= digits.length) break;
          formatted += digits[digitIndex];
          digitIndex += 1;
        } else if (digitIndex > 0 && digitIndex < digits.length) {
          formatted += character;
        }
      }

      input.value = formatted;
      syncFullNumber();
    };

    const handleCountryChange = () => {
      input.value = "";
      hiddenInput.value = "";
      window.setTimeout(updatePattern, 0);
    };

    input.addEventListener("input", applyCountryMask);
    input.addEventListener("countrychange", handleCountryChange);
    phonePicker.promise.then(() => {
      if (active) updatePattern();
    });

    return () => {
      active = false;
      input.removeEventListener("input", applyCountryMask);
      input.removeEventListener("countrychange", handleCountryChange);
      phonePicker.destroy();
    };
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        name="phone_intlTelInput"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        required
      />
      <input ref={hiddenInputRef} name="phone" type="hidden" />
    </>
  );
}

function RegistrationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => document.querySelector<HTMLInputElement>("#registration-name")?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const closeModal = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modalBackdrop" onMouseDown={(event) => event.target === event.currentTarget && closeModal()}>
      <div className="registrationModal" role="dialog" aria-modal="true" aria-labelledby="registration-title">
        <button className="modalClose" type="button" onClick={closeModal} aria-label="Закрыть форму" title="Закрыть">
          ×
        </button>

        {submitted ? (
          <div className="modalSuccess" role="status">
            <span aria-hidden="true">✓</span>
            <h2>Спасибо!</h2>
            <p>Форма заполнена. Мы свяжемся с вами и отправим доступ к мастер-классу.</p>
            <button type="button" onClick={closeModal}>Закрыть</button>
          </div>
        ) : (
          <>
            <p className="modalEyebrow">Бесплатный онлайн мастер-класс</p>
            <h2 id="registration-title">Зарегистрируйтесь и получите 3 бонуса</h2>
            <p className="modalIntro">Оставьте контакты, чтобы получить доступ к мастер-классу и полезным материалам.</p>
            <form name="smartsender" data-name="smartsender">
              <label>
                <span>Имя</span>
                <input id="registration-name" name="name" type="text" autoComplete="name" placeholder="Ваше имя" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" placeholder="name@example.com" required />
              </label>
              <label>
                <span>Телефон</span>
                <PhoneInput />
              </label>
              <button className="modalSubmit" type="submit">Зарегистрироваться и получить бонусы</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function FloatingCta({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const pageCtas = Array.from(document.querySelectorAll<HTMLElement>(".cta:not(.floatingCta)"));
    const visibility = new Map<Element, boolean>(pageCtas.map((cta) => [cta, false]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting));
      setIsVisible(!Array.from(visibility.values()).some(Boolean));
    });

    pageCtas.forEach((cta) => observer.observe(cta));
    if (pageCtas.length === 0) setIsVisible(true);

    return () => observer.disconnect();
  }, []);

  return (
    <button
      className={`cta floatingCta${isVisible ? " floatingCta--visible" : ""}`}
      type="button"
      onClick={onClick}
      aria-label="Зарегистрироваться и получить бонусы"
    >
      <span>Зарегистрироваться и получить бонусы</span>
      <span className="ctaIcon" aria-hidden="true">
        <img src={arrowImage} alt="" />
      </span>
    </button>
  );
}

export default function Home() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const isAnimation =
    typeof document !== "undefined" &&
    (document.documentElement.dataset.market === "animation" || /\/animation\/?$/.test(window.location.pathname));
  const isUsMarket =
    typeof document !== "undefined" &&
    (document.documentElement.dataset.market === "us" || /\/us\/?$/.test(window.location.pathname));
  const usesDollars = isUsMarket || isAnimation;
  const marketLessonImages = usesDollars ? lessonImagesUs : lessonImages;
  const marketGoals = usesDollars
    ? goals.map((goal, index) => index === 1 ? { ...goal, title: "Выйти на доход от 3000$+" } : goal)
    : goals;
  const marketHostFacts = createHostFacts(usesDollars);
  const marketResultItems = createResultItems(usesDollars);
  const marketStudentCases = usesDollars
    ? studentCases.map((studentCase) => ({
        ...studentCase,
        middle: studentCase.middle.replaceAll("€", "$"),
        result: studentCase.result.replaceAll("€", "$"),
      }))
    : studentCases;
  const marketPracticeCards = isAnimation
    ? practiceCards.map((card, index) => index === 5 ? {
        ...card,
        image: asset("figma-assets/animation-live-poster.webp"),
        title: "06. Создадим свою AI-анимацию",
        text: <>Прямо в эфире покажем поэтапно, как с помощью искусственного интеллекта и наших программ <strong>создавать AI-анимации с нуля.</strong></>,
      } : card)
    : practiceCards;

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
    <main className={`page${isAnimation ? " page--animation" : ""}`}>
      <section className="hero bgGrid">
        <div className="topPill">
          <i />
          бесплатный онлайн мастер-класс
        </div>
        <p className="quarterCallout">
          <strong>Q4</strong> — самый прибыльный сезон года
        </p>
        <p className="profession">{isAnimation ? "Как создавать AI-анимации" : "Как создавать принты и цифровые товары"}</p>
        <h1>с помощью искусственного интеллекта</h1>
        <p className="heroLead">
          <b>и выйти на доход</b>
        </p>
        <div className="zeroTitle">
          <img className="turnArrow" src={asset("figma-assets/arrow-turn.svg")} alt="" aria-hidden="true" />
          <strong>от {usesDollars ? "$5 000" : "3000€"} в месяц</strong>
        </div>

        <div className="heroContent">
          <div className="heroBenefits">
            {(isAnimation ? animationHeroBenefits : heroBenefits).map((benefit) => (
              <p key={benefit.icon}>
                <img src={benefit.icon} alt="" aria-hidden="true" />
                <span>{benefit.text}</span>
              </p>
            ))}
          </div>
          <div className={`heroPhoto${isAnimation ? " heroPhoto--animation" : ""}`}>
            <img
              src={heroImage}
              alt={isAnimation ? "Мастер-класс по созданию AI-анимаций" : "Принты и цифровые товары с помощью искусственного интеллекта"}
              width={382}
              height={536}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
            {isAnimation && (
              <div className="heroVideoRail" aria-label="Примеры AI-анимаций учеников">
                <div className="heroVideoTrack">
                  {[...animationStudentVideos, ...animationStudentVideos].map((item, index) => (
                    <div className="heroVideoTile" key={`${item.video}-${index}`}>
                      <img src={item.poster} alt="" aria-hidden="true" />
                      <video
                        src={item.video}
                        poster={item.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        onCanPlay={(event) => {
                          event.currentTarget.classList.add("isReady");
                          void event.currentTarget.play().catch(() => undefined);
                        }}
                        aria-label={`Пример AI-анимации ${(index % animationStudentVideos.length) + 1}`}
                      />
                      <span className="heroVideoPrice">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <CtaButton onClick={() => setIsRegistrationOpen(true)} />
      </section>

      <section className="bonus pinkPanel">
        <img className="giftIcon" src={asset("figma-assets/gift-icon.svg")} alt="" aria-hidden="true" />
        <p className="pinkText">Первые 100 участников мастер-класса</p>
        <h2>
          Получат
          <span className="bonusTitleLine"><b>3</b> бонуса</span>
        </h2>
        <div className="lessons">
          <LessonCard
            label="Видео-бонус №1"
            title="Пошаговая стратегия"
            subtitle={<>как я заработала <strong>{usesDollars ? "100.000$" : "100.000€"} всего за 60 дней</strong> на сезонном товаре с помощью ИИ</>}
            image={marketLessonImages[0]}
          />
          <LessonCard
            label="Бонус №2"
            title="Список товаров"
            subtitle={<>которые можно запустить прямо сейчас и получить <strong>первые заказы уже через 14 дней</strong> (идеально перед 4 кварталом)</>}
            image={marketLessonImages[1]}
          />
          <LessonCard
            label="Бонус №3"
            title="Шпаргалка по искусственному интеллекту."
            subtitle={<>Все мои <strong>ТОП наработки в одном PDF</strong></>}
            image={marketLessonImages[2]}
            tall
          />
        </div>
        <CtaButton label="Забрать бонусы" onClick={() => setIsRegistrationOpen(true)} />
      </section>

      <section className="brands bgGrid">
        <h2>На каких {isAnimation ? "анимациях" : "товарах"} уже <span>зарабатывают</span> наши ученики?</h2>
        <p>Реальные {isAnimation ? "анимации" : "товары и ниши"}, которые наши ученики <strong>уже продают на Etsy прямо сейчас</strong></p>
        {isAnimation ? <AnimationSlider /> : <EtsyProductsSlider />}
      </section>

      <section className="goals bgGrid">
        <h2><span>Регистрируйся</span><br /><span className="goalsTitleLine">на мастер-класс</span></h2>
        <p className="limePill">если хочешь:</p>
        <div className="goalGrid">
          {marketGoals.map((goal, index) => (
            <article key={goal.title}>
              <i>
                <img src={asset(`figma-assets/goal-${index + 1}.svg`)} alt="" aria-hidden="true" />
              </i>
              <h3>{goal.title}</h3>
              <p>{goal.text}</p>
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
        <CtaButton label="Зарегистрироваться" onClick={() => setIsRegistrationOpen(true)} />
      </section>

      <section className="host bgGrid">
        <h2>Кто проводит</h2>
        <p className="limePill">мастер-класс?</p>
        <div className="hostPhoto">
          <img src={asset("figma-assets/host-julia.webp")} alt="Юлия Гроссу" />
          <span>Юлия Гроссу</span>
        </div>
        <div className="checkList">
          {marketHostFacts.map((fact, index) => (
            <p key={index}>
              <img src={asset("figma-assets/check.svg")} alt="" />
              <span>{fact}</span>
            </p>
          ))}
        </div>
        <CtaButton label="Зарегистрироваться на мастер-класс" onClick={() => setIsRegistrationOpen(true)} />
      </section>

      <section className="practice bgGrid">
        <h2>Что вас ждёт</h2>
        <p className="limePill">на мастер-классе?</p>
        <div className="practiceList">
          {marketPracticeCards.map((card, index) => (
            <article
              key={card.title}
              style={{
                "--stack-offset": `${18 + index * 10}px`,
                "--stack-layer": index + 1,
              } as CSSProperties}
            >
              <img src={card.image} alt="" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="examples pinkPanel">
        {isAnimation ? (
          <>
            <h2>Этот AI-мультфильм</h2>
            <p className="animationLiveLead">мы создадим прямо на эфире</p>
            <div className="animationLiveVideo">
              <video
                src={asset("figma-assets/animation-live-cartoon.mp4")}
                poster={asset("figma-assets/animation-live-poster.webp")}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onCanPlay={(event) => void event.currentTarget.play().catch(() => undefined)}
                aria-label="AI-мультфильм, который создадим в прямом эфире"
              />
            </div>
          </>
        ) : (
          <>
            <h2>Товары, которые вы научитесь создавать</h2>
            <ExampleSlider />
            <p className="examplesCaption">
              <span>Листайте примеры и посмотрите,</span>
              <strong>на каких товарах и нишах</strong>
              <span>зарабатывают наши ученики на Etsy.</span>
            </p>
          </>
        )}
      </section>

      <section className="results bgGrid">
        <h2>Результаты</h2>
        <p className="limePill">после мастер-класса</p>
        <div
          className="paper"
          style={{ "--typewriter-image": `url(${asset("figma-assets/results-typewriter.png")})` } as CSSProperties}
        >
          {marketResultItems.map((item, index) => (
            <p key={index}><i>{String(index + 1).padStart(2, "0")}.</i><span>{item}</span></p>
          ))}
        </div>
      </section>

      <section className="students pinkPanel">
        <h2>Студенты</h2>
        <p className="limePill">те, кто начал свой путь в Etsy,</p>
        <p className="limePill">придя на наш мастер-класс</p>
        <StudentSlider cases={marketStudentCases} />
      </section>

      <section className="final bgGrid" id="final">
        <p className="profession">Бесплатный онлайн мастер-класс</p>
        <h2>
          <span>Как создавать</span>
          {isAnimation ? <span>AI-анимации</span> : <><span>принты и</span><span>цифровые товары</span></>}
        </h2>
        <p className="heroLead"><b>с помощью искусственного интеллекта и выйти на доход</b></p>
        <div className="zeroTitle">
          <img className="turnArrow" src={asset("figma-assets/arrow-turn.svg")} alt="" aria-hidden="true" />
          <strong>от {usesDollars ? "$5 000" : "3000€"} в месяц</strong>
        </div>
        <img className="giftIcon" src={asset("figma-assets/gift-icon.svg")} alt="" aria-hidden="true" />
        <p className="pinkText">Первые 100 участников мастер-класса</p>
        <h3>Получат 3 бонуса</h3>
        <CountdownTimer />
        <div className="finalLessons">
          <div className="lessons">
            <LessonCard
              label="Видео-бонус №1"
              title="Пошаговая стратегия"
              subtitle={<>как я заработала <strong>{usesDollars ? "100.000$" : "100.000€"} всего за 60 дней</strong> на сезонном товаре с помощью ИИ</>}
              image={marketLessonImages[0]}
            />
            <LessonCard
              label="Бонус №2"
              title="Список товаров"
              subtitle={<>которые можно запустить прямо сейчас и получить <strong>первые заказы уже через 14 дней</strong> (идеально перед 4 кварталом)</>}
              image={marketLessonImages[1]}
            />
            <LessonCard
              label="Бонус №3"
              title="Шпаргалка по искусственному интеллекту."
              subtitle={<>Все мои <strong>ТОП наработки в одном PDF</strong></>}
              image={marketLessonImages[2]}
              tall
            />
          </div>
        </div>
        <CtaButton onClick={() => setIsRegistrationOpen(true)} />
      </section>
      <FloatingCta onClick={() => setIsRegistrationOpen(true)} />
      <RegistrationModal open={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </main>
  );
}
