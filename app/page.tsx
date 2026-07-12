const arrowImage = "/figma-assets/arrow.png";
const heroImage = "/figma-assets/hero.png";

const lessonImages = [
  "/figma-assets/gallery-1.png",
  "/figma-assets/audience-2.png",
  "/figma-assets/hero.png",
];

const faceImages = [
  "/figma-assets/hero.png",
  "/figma-assets/audience-1.png",
  "/figma-assets/audience-3.png",
  "/figma-assets/audience-4.png",
  "/figma-assets/gallery-6.png",
];

const audienceCards = [
  {
    image: "/figma-assets/audience-1.png",
    title: "Для новичков без опыта",
    text: "Если вы хотите освоить востребованную AI-профессию и начать зарабатывать на создании контента для бизнеса и брендов.",
  },
  {
    image: "/figma-assets/audience-2.png",
    title: "Для тех, кто хочет сменить профессию",
    text: "Если вы ищете современное направление с возможностью удалённой работы и доходом от 500€ до 3000€+.",
  },
  {
    image: "/figma-assets/audience-4.png",
    title: "Для экспертов и фрилансеров",
    text: "Если хотите использовать AI для создания фото, Reels, сторис и контента быстрее, качественнее и выгоднее.",
  },
  {
    image: "/figma-assets/gallery-3.png",
    title: "Для тех, кто хочет работать на себя",
    text: "Получать клиентов из Европы, США и других стран, работая из любой точки мира.",
  },
];

const goals = [
  "Создавать AI-контент для брендов и экспертов за считанные минуты",
  "Освоить профессию AI Smart Creator и выйти на доход от 500€ до 3000€+",
  "Чтобы твои работы покупали бизнесы, блогеры и бренды",
  "Создавать фото, Reels, сторис и контент без команды и больших затрат",
  "Получить первых клиентов и заказы уже во время обучения",
  "Продавать не картинки, а готовые контент-пакеты для бизнеса",
  "Работать из любой точки мира и строить удалённую карьеру",
  "Освоить одну из самых востребованных AI-профессий 2026 года",
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
    image: "/figma-assets/gallery-4.png",
    title: "Создание AI-фото для брендов",
    text: "Для кого: бренды, эксперты, магазины",
  },
  {
    image: "/figma-assets/gallery-5.png",
    title: "AI-фотосессии без студии",
    text: "Для кого: личный бренд, блогеры, бизнес",
  },
  {
    image: "/figma-assets/gallery-3.png",
    title: "Контент для социальных сетей",
    text: "Для кого: эксперты, компании, локальный бизнес",
  },
];

const resultItems = [
  ["Поймёте,", "как работает профессия AI Smart Creator"],
  ["Узнаете,", "какие AI-услуги сегодня покупают бизнесы и бренды"],
  ["Разберётесь,", "где искать первых клиентов и получать заказы"],
  ["Увидите,", "как создавать контент, за который готовы платить"],
  ["Получите", "пошаговый план выхода на доход от 500€ до 3000€+"],
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
}: {
  label: string;
  title: string;
  image: string;
}) {
  return (
    <article className="lessonCard">
      <div>
        <span>{label}</span>
        <h3>{title}</h3>
      </div>
      <div className="lockedPreview">
        <img src={image} alt="" />
        <b aria-hidden="true">lock</b>
      </div>
    </article>
  );
}

export default function Home() {
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
          <span aria-hidden="true">↳</span>
          <strong>с нуля</strong>
        </div>
        <p className="heroLead">
          <b>Выйди на доход от 500$ до 3000€+,</b> создавая AI-контент для
          бизнесов, экспертов и брендов
        </p>

        <div className="heroContent">
          <div className="heroBenefits">
            <p><b>Получай первые заказы</b> уже во время обучения</p>
            <p>Работай из <b>любой точки мира</b></p>
            <p>Освой современную <b>AI-профессию</b> без технического опыта</p>
            <p>Твои работы <b>будут покупать</b> компании и эксперты</p>
          </div>
          <div className="heroPhoto">
            <img src={heroImage} alt="AI Smart Creator" />
          </div>
        </div>
        <CtaButton />
      </section>

      <section className="bonus pinkPanel">
        <div className="giftIcon">▣</div>
        <p className="pinkText">Первые 100 зарегистрировавшихся</p>
        <h2>Получат бонус</h2>
        <p className="bonusLead">
          <b>3 бесплатных видео</b> о том, как начать зарабатывать на AI-контенте
        </p>
        <div className="lessons">
          <LessonCard label="Урок 1:" title="Хто такі AI-креатори." image={lessonImages[0]} />
          <LessonCard label="Урок 2:" title="Хто і за що платить AI-креаторам." image={lessonImages[1]} />
          <LessonCard label="Урок 3:" title="Проекти, які можна виконувати без досвіду." image={lessonImages[2]} />
        </div>
        <div className="people">
          <div className="faces">
            {faceImages.map((image, index) => (
              <img key={`${image}-${index}`} src={image} alt="" />
            ))}
            <span>+</span>
          </div>
          <p>Уже более 2500 человек прошли мастер-класс.</p>
        </div>
        <CtaButton />
      </section>

      <section className="brands bgGrid">
        <h2>Бизнесы и эксперты</h2>
        <p>которые уже заказывают AI-контент</p>
        <div className="brandGrid">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} />
          ))}
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
          {goals.map((goal) => (
            <article key={goal}>
              <i />
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
          <img src="/figma-assets/gallery-1.png" alt="Юлия Филипенко" />
          <span>Юлия Филипенко</span>
        </div>
        <div className="checkList">
          {hostFacts.map((fact) => (
            <p key={fact}><i>✓</i>{fact}</p>
          ))}
        </div>
        <CtaButton />
      </section>

      <section className="partners pinkPanel">
        <h2>А также<br />я официальный партнёр</h2>
        <p className="limePill">ведущих нейросетей</p>
        <div className="logoGrid">
          <article>Higgsfield</article>
          <article>Midjourney</article>
          <article>flow.ai</article>
          <article>KlingAI</article>
          <article>invideoAI</article>
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
        <div className="videoBox"><span>▶</span></div>
        <div className="arrows"><button>←</button><button>→</button></div>
        <p>Листайте примеры и посмотрите, какой контент создают AI Smart Creator'ы для брендов, экспертов и бизнеса.</p>
      </section>

      <section className="results bgGrid">
        <h2>Результаты</h2>
        <p className="limePill">после мастер-класса</p>
        <div className="paper">
          {resultItems.map(([lead, text]) => (
            <p key={text}><i>✓</i><span><b>{lead}</b> {text}</span></p>
          ))}
        </div>
      </section>

      <section className="students pinkPanel">
        <h2>Студенты</h2>
        <p className="limePill">те, кто начал свой путь</p>
        <p className="limePill">в AI с нашего мастер-класса</p>
        <article className="studentCard">
          <p>Анна специализируется на товарных фотосетах</p>
          <div className="studentHead">
            <img src="/figma-assets/gallery-6.png" alt="" />
            <b>Анна Зотова, предметная съёмка</b>
          </div>
          <div className="timeline">
            <p>Работала онлайн личным ассистентом за копейки</p>
            <p>Изучила искусственный интеллект у меня на курсе</p>
            <p>За этот год вышла на 16 тысяч евро, сейчас работают вместе с мужем</p>
          </div>
        </article>
      </section>

      <section className="final bgGrid" id="final">
        <p className="profession">Опануй професію 2026</p>
        <h2>AI Smart Creator</h2>
        <div className="zeroTitle">
          <span aria-hidden="true">↳</span>
          <strong>с нуля</strong>
        </div>
        <p className="heroLead">
          <b>Выйди на доход от 500$ до 3000€+,</b> создавая AI-контент для
          бизнесов, экспертов и брендов
        </p>
        <div className="giftIcon">▣</div>
        <p className="pinkText">Первые 100 зарегистрировавшихся</p>
        <h3>Получат бонус</h3>
        <p className="bonusLead">
          <b>3 бесплатных видео</b> о том, как начать зарабатывать на AI-контенте
        </p>
        <div className="timer">00:05:50</div>
        <div className="lessons">
          <LessonCard label="Урок 1:" title="Хто такі AI-креатори." image={lessonImages[0]} />
          <LessonCard label="Урок 2:" title="Хто і за що платить AI-креаторам." image={lessonImages[1]} />
          <LessonCard label="Урок 3:" title="Проекти, які можна виконувати без досвіду." image={lessonImages[2]} />
        </div>
        <div className="people">
          <div className="faces">
            {faceImages.map((image, index) => (
              <img key={`${image}-final-${index}`} src={image} alt="" />
            ))}
            <span>+</span>
          </div>
          <p>Уже более 2500 человек прошли мастер-класс.</p>
        </div>
        <CtaButton />
      </section>
    </main>
  );
}
