export const languages = {
  en: "English",
  es: "Español",
  de: "Deutsch",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    nav: {
      howWeWork: "How We Work",
      services: "Services",
      engagement: "Engagement",
      team: "Team",
      contact: "Contact",
      cta: "Start a conversation",
    },
    meta: {
      title: "Cardo Ingenium — Software Architecture & Technical Product Advisory",
      description:
        "Cardo Ingenium — software architecture and technical product advisory, from delivery strategy to system design.",
    },
    hero: {
      tagline: "Software architecture & technical product advisory",
      h1: "Technical clarity, built to last.",
      sub: "Independent consultancy pairing technical product management with hands-on software architecture — for teams that need a system rethought, a delivery program unstuck, or a technical decision made with confidence.",
      ctaPrimary: "Start a conversation",
      ctaSecondary: "See what we advise on",
      stats: [
        { num: "30+", label: "combined years in IT" },
        { num: "2", label: "disciplines, one engagement" },
        { num: "13", label: "areas of advisory" },
      ],
    },
    audience: {
      eyebrow: "Who We Work With",
      h2: "Sized to the engagement, not the other way around.",
      sub: "The same combination of product judgment and architectural rigor, scoped to fit a two-person team or a program with a dozen stakeholders.",
      segments: [
        {
          title: "Small Teams",
          description:
            "Lean teams making architecture, product, or delivery decisions without the bandwidth to get an independent second opinion in-house.",
        },
        {
          title: "Startups",
          description:
            "Early-stage products where the technical, legal, and compliance choices made now determine how expensive change is later.",
        },
        {
          title: "Enterprises",
          description:
            "Established organizations that need independent judgment on a specific system, program, or acquisition — without expanding permanent headcount.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      h2: "A structured engagement, not a black box.",
      sub: "Every engagement follows the same four stages, regardless of which services it draws on.",
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "We start by understanding the problem, the current system, and the constraints you're actually operating under — before proposing anything.",
        },
        {
          number: "02",
          title: "Assess",
          description:
            "An independent evaluation across the areas that matter for the engagement — architecture, product, delivery process, or compliance risk.",
        },
        {
          number: "03",
          title: "Recommend",
          description:
            "A scoped, prioritized plan tied to your constraints — not a slide deck of generic best practices.",
        },
        {
          number: "04",
          title: "Support",
          description:
            "We stay engaged through implementation, or hand off with documentation your team can run with on its own.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      h2: "Where we advise.",
      sub: "Two disciplines, one engagement — product judgment and architectural rigor, applied together rather than handed off between separate consultants.",
      items: [
        {
          title: "Mobile Application Architecture",
          description:
            "Structuring iOS and Android codebases to scale past MVP — module boundaries, state management, and platform-specific trade-offs that get expensive to unwind once a team has grown around them.",
        },
        {
          title: "2D Game Engines",
          description:
            "Engine and framework selection for 2D titles, plus the architecture around it — asset pipelines, save systems, and performance budgets that hold up as scope grows.",
        },
        {
          title: "Legal & Regulatory Compliance",
          description:
            "App store policy, cookie and consent requirements, and data protection law — the technical and product work behind consent flows, privacy notices, and store review criteria, not just the paperwork.",
        },
        {
          title: "CRM Systems Development",
          description:
            "Design and development of CRM and customer-facing back-office systems — data models, configuration architecture, and the tooling that lets operational teams manage customer relationships safely.",
        },
        {
          title: "Live-Ops & Back-Office Tooling",
          description:
            "Operational tooling for live products — configuration systems, admin panels, and workflows that let live-ops teams ship changes without engineering in the loop, while keeping production safe.",
        },
        {
          title: "Technical Product Strategy & Delivery",
          description:
            "Roadmap definition, stakeholder alignment, and delivery management — turning ambiguous business goals into a scoped, sequenced plan, then running the agile process that gets it shipped.",
        },
        {
          title: "Project Management",
          description:
            "Running a defined initiative end to end — scope, timeline, budget, and risk tracked against a single set of deliverables, with a clear owner accountable for getting it over the line.",
        },
        {
          title: "Program Management",
          description:
            "Coordinating multiple interdependent projects and teams toward a shared outcome — sequencing, cross-team dependencies, and reporting up to stakeholders who need the whole picture.",
        },
        {
          title: "AI-Assisted Prototyping & Tooling",
          description:
            "Practical adoption of AI tools into product and engineering workflows — using AI to compress concept-to-prototype timelines, and judgment on which AI capability claims actually hold up in production.",
        },
        {
          title: "AI Agents & Automation Flows",
          description:
            "Designing and building AI agents and automation pipelines that handle real, recurring workflows — not demos — with the guardrails and error handling that production use requires.",
        },
        {
          title: "Personal & Team AI Assistants",
          description:
            "Assistants shaped around how a person or team actually works — wired into the tools and data they already use, rather than a generic chatbot bolted on top.",
        },
        {
          title: "Unified Repository & Contribution Workflows",
          description:
            "Repository and branching strategy, code review process, and CI/CD setup that let a growing team contribute to a shared codebase without stepping on each other.",
        },
        {
          title: "Technical Due Diligence",
          description:
            "Independent assessment of a codebase, architecture, or engineering organization — for investors, acquirers, or leadership teams inheriting a system they didn't build.",
        },
      ],
    },
    engagement: {
      eyebrow: "Engagement Models",
      h2: "Two ways to work with us.",
      sub: "Every engagement starts with a free discovery call to confirm scope and the right model — no obligation, no generic proposal.",
      models: [
        {
          title: "Scoped Project",
          description:
            "A defined deliverable — an architecture review, technical due diligence, a specific system design or migration plan — with scope and outcome agreed before work starts.",
          note: "Fixed scope and fee, agreed before any billing starts.",
        },
        {
          title: "Embedded Advisory",
          description:
            "Ongoing involvement in delivery, architecture decisions, or program management — as much or as little as the engagement needs, for as long as you need it.",
          note: "Reviewed monthly — not locked into a long contract.",
        },
      ],
    },
    team: {
      eyebrow: "Team",
      h2: "Who you'll work with.",
      sub: "A two-person practice, by design — every engagement gets both the product and architecture perspective directly, not filtered through account layers.",
      members: [
        {
          tag: "Product & Delivery",
          role: "Technical Product Manager",
          bio: "20+ years in IT spanning network engineering to delivery management at a global software company. Owns the product side of an engagement — scoping, stakeholder alignment, and delivery against acceptance criteria.",
          highlights: [
            "Owned a back-office CRM platform for a global gaming organization from initial build through its evolution into a distributed model adopted by 10+ independent studios",
            "Deep experience in live-ops and back-office tooling for customer-facing products",
            "Runs agile delivery and stakeholder alignment across cross-functional, multi-region teams",
            "Working fluency in data protection, GDPR, and platform compliance (Apple App Store / Google Play) from hands-on product-legal collaboration",
          ],
        },
        {
          tag: "Architecture & Engineering",
          role: "Software Architect",
          bio: "10+ years as a software architect and 20+ years writing production code, across a wide portfolio of technology stacks. Owns the technical side — system design, architectural trade-offs, and engineering feasibility.",
          highlights: [
            "Works across the toolset expected of a high-caliber software architect — broad by design, not narrowly specialized",
            "Strong grounding in mobile development, with range well beyond it",
            "Fluent in the internals of core mobile game engines",
            "Extensive experience integrating and evaluating third-party SDKs",
            "A specialist eye for performance and stability tuning",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      h2: "Common questions.",
      items: [
        {
          question: "How do engagements typically start?",
          answer:
            "With a free, no-obligation discovery call to understand the problem and confirm scope. If it's a fit, you get a written proposal with fixed scope and pricing before any billing starts.",
        },
        {
          question: "How is pricing structured?",
          answer:
            "One of two models: a fixed price for a scoped project with defined deliverables, or an hourly rate for embedded, ongoing advisory work. Which model fits — and the actual number — is worked out together on the discovery call, based on scope and depth of involvement.",
        },
        {
          question: "Do you sign NDAs, and can we see references or past clients?",
          answer:
            "Yes, NDAs are standard. We also operate under confidentiality obligations from our current employment, so we don't name clients, engagements, or specifics publicly without explicit permission — the same discretion we'd extend to you. We're happy to speak to relevant experience in more depth on a call.",
        },
        {
          question: "What size of engagement do you take on?",
          answer:
            'Anything from a single-day architecture review to a multi-month embedded advisory role. See "Who We Work With" above — we scope the engagement to the client, not the other way around.',
        },
        {
          question: "What if we only need one of the two disciplines?",
          answer:
            "That's fine — plenty of engagements only need product/delivery or only need architecture. You get direct access to whichever specialist fits, not a bundled package you don't need.",
        },
        {
          question: "Do you work remotely, or only in person?",
          answer: "Remote-first by default, with on-site work available where the engagement calls for it.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      h2: "Start a conversation.",
      sub: "Tell us about the problem you're trying to solve — a system that needs rethinking, a delivery program that's stalled, or a technical decision you want a second, independent opinion on.",
      emailBtn: "Email us",
      copyBtn: "Copy email",
      copiedText: "Copied!",
    },
    footer: {
      tagline: "Est. Advisory",
    },
  },
  es: {
    nav: {
      howWeWork: "Cómo Trabajamos",
      services: "Servicios",
      engagement: "Modalidades",
      team: "Equipo",
      contact: "Contacto",
      cta: "Iniciar una conversación",
    },
    meta: {
      title: "Cardo Ingenium — Asesoría en Arquitectura de Software y Producto Técnico",
      description:
        "Cardo Ingenium — asesoría en arquitectura de software y producto técnico, desde la estrategia de entrega hasta el diseño de sistemas.",
    },
    hero: {
      tagline: "Asesoría en arquitectura de software y producto técnico",
      h1: "Claridad técnica, hecha para durar.",
      sub: "Consultoría independiente que combina la gestión de producto técnico con arquitectura de software práctica — para equipos que necesitan repensar un sistema, desatascar un programa de entrega o tomar una decisión técnica con confianza.",
      ctaPrimary: "Iniciar una conversación",
      ctaSecondary: "Ver en qué asesoramos",
      stats: [
        { num: "30+", label: "años combinados en TI" },
        { num: "2", label: "disciplinas, un solo equipo" },
        { num: "13", label: "áreas de asesoría" },
      ],
    },
    audience: {
      eyebrow: "Con Quién Trabajamos",
      h2: "A la medida del proyecto, no al revés.",
      sub: "La misma combinación de criterio de producto y rigor arquitectónico, adaptada a un equipo de dos personas o a un programa con una docena de partes interesadas.",
      segments: [
        {
          title: "Equipos Pequeños",
          description:
            "Equipos ágiles que toman decisiones de arquitectura, producto o entrega sin la capacidad interna para obtener una segunda opinión independiente.",
        },
        {
          title: "Startups",
          description:
            "Productos en etapa inicial donde las decisiones técnicas, legales y de cumplimiento que se toman ahora determinan cuán costoso será el cambio más adelante.",
        },
        {
          title: "Empresas",
          description:
            "Organizaciones consolidadas que necesitan un criterio independiente sobre un sistema, programa o adquisición específicos — sin ampliar la plantilla permanente.",
        },
      ],
    },
    process: {
      eyebrow: "Cómo Trabajamos",
      h2: "Un proceso estructurado, no una caja negra.",
      sub: "Todo proyecto sigue las mismas cuatro etapas, sin importar qué servicios incluya.",
      steps: [
        {
          number: "01",
          title: "Descubrir",
          description:
            "Empezamos por entender el problema, el sistema actual y las restricciones reales bajo las que operas — antes de proponer nada.",
        },
        {
          number: "02",
          title: "Evaluar",
          description:
            "Una evaluación independiente de las áreas relevantes para el proyecto — arquitectura, producto, proceso de entrega o riesgo de cumplimiento.",
        },
        {
          number: "03",
          title: "Recomendar",
          description:
            "Un plan acotado y priorizado, ajustado a tus restricciones — no una presentación con buenas prácticas genéricas.",
        },
        {
          number: "04",
          title: "Acompañar",
          description:
            "Seguimos involucrados durante la implementación, o entregamos documentación que tu equipo puede ejecutar por su cuenta.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      h2: "En qué asesoramos.",
      sub: "Dos disciplinas, un solo proyecto — criterio de producto y rigor arquitectónico, aplicados juntos en lugar de repartidos entre consultores separados.",
      items: [
        {
          title: "Arquitectura de Aplicaciones Móviles",
          description:
            "Estructurar bases de código iOS y Android para escalar más allá del MVP — límites de módulos, gestión de estado y decisiones específicas de plataforma que se vuelven costosas de deshacer una vez que el equipo ha crecido en torno a ellas.",
        },
        {
          title: "Motores de Juegos 2D",
          description:
            "Selección de motor y framework para títulos 2D, además de la arquitectura que los rodea — pipelines de assets, sistemas de guardado y presupuestos de rendimiento que se sostienen a medida que crece el alcance.",
        },
        {
          title: "Cumplimiento Legal y Regulatorio",
          description:
            "Políticas de tiendas de aplicaciones, requisitos de cookies y consentimiento, y protección de datos — el trabajo técnico y de producto detrás de los flujos de consentimiento, avisos de privacidad y criterios de revisión de tiendas, no solo el papeleo.",
        },
        {
          title: "Desarrollo de Sistemas CRM",
          description:
            "Diseño y desarrollo de sistemas CRM y de back-office orientados al cliente — modelos de datos, arquitectura de configuración y las herramientas que permiten a los equipos operativos gestionar las relaciones con clientes de forma segura.",
        },
        {
          title: "Herramientas de Live-Ops y Back-Office",
          description:
            "Herramientas operativas para productos en producción — sistemas de configuración, paneles de administración y flujos de trabajo que permiten a los equipos de live-ops implementar cambios sin depender de ingeniería, manteniendo la producción segura.",
        },
        {
          title: "Estrategia de Producto Técnico y Entrega",
          description:
            "Definición de roadmap, alineación de partes interesadas y gestión de entrega — convertir objetivos de negocio ambiguos en un plan acotado y secuenciado, y luego llevar el proceso ágil que lo hace realidad.",
        },
        {
          title: "Gestión de Proyectos",
          description:
            "Llevar una iniciativa definida de principio a fin — alcance, cronograma, presupuesto y riesgo controlados frente a un conjunto único de entregables, con un responsable claro de que llegue a buen puerto.",
        },
        {
          title: "Gestión de Programas",
          description:
            "Coordinar múltiples proyectos y equipos interdependientes hacia un resultado compartido — secuenciación, dependencias entre equipos y reportes a las partes interesadas que necesitan la visión completa.",
        },
        {
          title: "Prototipado y Herramientas con IA",
          description:
            "Adopción práctica de herramientas de IA en los flujos de producto e ingeniería — usando IA para acelerar el paso de concepto a prototipo, y criterio sobre qué promesas de capacidad de IA realmente se sostienen en producción.",
        },
        {
          title: "Agentes de IA y Flujos de Automatización",
          description:
            "Diseño y construcción de agentes de IA y flujos de automatización que gestionan procesos reales y recurrentes — no demos — con las salvaguardas y el manejo de errores que exige el uso en producción.",
        },
        {
          title: "Asistentes de IA Personales y de Equipo",
          description:
            "Asistentes diseñados según cómo trabaja realmente una persona o un equipo — conectados a las herramientas y datos que ya usan, en lugar de un chatbot genérico añadido encima.",
        },
        {
          title: "Flujos de Repositorio y Contribución Unificados",
          description:
            "Estrategia de repositorio y ramas, proceso de revisión de código y configuración de CI/CD que permiten a un equipo en crecimiento contribuir a una base de código compartida sin pisarse entre sí.",
        },
        {
          title: "Due Diligence Técnica",
          description:
            "Evaluación independiente de una base de código, arquitectura u organización de ingeniería — para inversores, adquirentes o equipos directivos que heredan un sistema que no construyeron.",
        },
      ],
    },
    engagement: {
      eyebrow: "Modalidades de Colaboración",
      h2: "Dos formas de trabajar con nosotros.",
      sub: "Todo proyecto comienza con una llamada de descubrimiento gratuita para confirmar el alcance y la modalidad adecuada — sin compromiso, sin propuesta genérica.",
      models: [
        {
          title: "Proyecto Acotado",
          description:
            "Un entregable definido — una revisión de arquitectura, due diligence técnica, el diseño de un sistema específico o un plan de migración — con alcance y resultado acordados antes de empezar.",
          note: "Alcance y tarifa fijos, acordados antes de que empiece la facturación.",
        },
        {
          title: "Asesoría Integrada",
          description:
            "Participación continua en la entrega, decisiones de arquitectura o gestión de programas — tanto como necesite el proyecto, durante el tiempo que lo necesites.",
          note: "Se revisa mensualmente — sin ataduras a un contrato largo.",
        },
      ],
    },
    team: {
      eyebrow: "Equipo",
      h2: "Con quién vas a trabajar.",
      sub: "Una práctica de dos personas, por diseño — cada proyecto obtiene la perspectiva de producto y de arquitectura directamente, sin capas de gestión de cuentas de por medio.",
      members: [
        {
          tag: "Producto y Entrega",
          role: "Gerente de Producto Técnico",
          bio: "Más de 20 años en TI, desde ingeniería de redes hasta gestión de entrega en una empresa global de software. Se encarga del lado de producto del proyecto — definición de alcance, alineación de partes interesadas y entrega conforme a los criterios de aceptación.",
          highlights: [
            "Fue responsable de una plataforma CRM de back-office para una organización global de gaming, desde su construcción inicial hasta su evolución hacia un modelo distribuido adoptado por más de 10 estudios independientes",
            "Amplia experiencia en herramientas de live-ops y back-office para productos orientados al cliente",
            "Lidera la entrega ágil y la alineación de partes interesadas en equipos multifuncionales y multirregionales",
            "Conocimiento práctico de protección de datos, RGPD y cumplimiento de plataformas (Apple App Store / Google Play) a partir de la colaboración directa entre producto y legal",
          ],
        },
        {
          tag: "Arquitectura e Ingeniería",
          role: "Arquitecto de Software",
          bio: "Más de 10 años como arquitecto de software y más de 20 años escribiendo código en producción, en un amplio portafolio de stacks tecnológicos. Se encarga del lado técnico — diseño de sistemas, decisiones arquitectónicas y viabilidad de ingeniería.",
          highlights: [
            "Domina el conjunto de herramientas propio de un arquitecto de software de primer nivel — amplitud por diseño, no especialización estrecha",
            "Base sólida en desarrollo móvil, con alcance que va mucho más allá",
            "Domina el funcionamiento interno de los principales motores de juegos móviles",
            "Amplia experiencia integrando y evaluando SDKs de terceros",
            "Un ojo especializado en ajuste de rendimiento y estabilidad",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas Frecuentes",
      h2: "Preguntas habituales.",
      items: [
        {
          question: "¿Cómo suele comenzar un proyecto?",
          answer:
            "Con una llamada de descubrimiento gratuita y sin compromiso para entender el problema y confirmar el alcance. Si encaja, recibirás una propuesta escrita con alcance y precio fijos antes de que comience cualquier facturación.",
        },
        {
          question: "¿Cómo se estructuran los precios?",
          answer:
            "Con uno de dos modelos: un precio fijo para un proyecto acotado con entregables definidos, o una tarifa por hora para asesoría continua e integrada. Qué modelo encaja — y la cifra exacta — se define juntos en la llamada de descubrimiento, según el alcance y el nivel de implicación.",
        },
        {
          question: "¿Firman acuerdos de confidencialidad (NDA) y podemos ver referencias o clientes anteriores?",
          answer:
            "Sí, los NDA son habituales. Además, tenemos obligaciones de confidencialidad derivadas de nuestro empleo actual, por lo que no revelamos clientes, proyectos ni detalles públicamente sin permiso explícito — la misma discreción que ofreceríamos contigo. Con gusto hablamos de nuestra experiencia relevante con más profundidad en una llamada.",
        },
        {
          question: "¿Qué tamaño de proyecto aceptan?",
          answer:
            'Desde una revisión de arquitectura de un solo día hasta un rol de asesoría integrada de varios meses. Consulta "Con Quién Trabajamos" más arriba — adaptamos el proyecto al cliente, no al revés.',
        },
        {
          question: "¿Y si solo necesitamos una de las dos disciplinas?",
          answer:
            "No hay problema — muchos proyectos solo necesitan producto/entrega o solo arquitectura. Tienes acceso directo al especialista que corresponda, sin un paquete combinado que no necesitas.",
        },
        {
          question: "¿Trabajan de forma remota o solo presencial?",
          answer: "Remoto por defecto, con trabajo presencial disponible cuando el proyecto lo requiera.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      h2: "Iniciemos una conversación.",
      sub: "Cuéntanos el problema que quieres resolver — un sistema que necesita repensarse, un programa de entrega estancado o una decisión técnica sobre la que quieres una segunda opinión independiente.",
      emailBtn: "Escríbenos",
      copyBtn: "Copiar correo",
      copiedText: "¡Copiado!",
    },
    footer: {
      tagline: "Asesoría",
    },
  },
  de: {
    nav: {
      howWeWork: "Arbeitsweise",
      services: "Leistungen",
      engagement: "Zusammenarbeit",
      team: "Team",
      contact: "Kontakt",
      cta: "Gespräch beginnen",
    },
    meta: {
      title: "Cardo Ingenium — Softwarearchitektur- und Produktberatung",
      description:
        "Cardo Ingenium — Beratung zu Softwarearchitektur und technischem Produktmanagement, von der Delivery-Strategie bis zum Systemdesign.",
    },
    hero: {
      tagline: "Softwarearchitektur- und Produktberatung",
      h1: "Technische Klarheit, die Bestand hat.",
      sub: "Unabhängige Beratung, die technisches Produktmanagement mit praxisnaher Softwarearchitektur verbindet — für Teams, die ein System neu durchdenken, ein ins Stocken geratenes Delivery-Programm wieder in Gang bringen oder eine technische Entscheidung mit Zuversicht treffen müssen.",
      ctaPrimary: "Gespräch beginnen",
      ctaSecondary: "Unsere Leistungen ansehen",
      stats: [
        { num: "30+", label: "Jahre Erfahrung in der IT" },
        { num: "2", label: "Disziplinen, ein Team" },
        { num: "13", label: "Beratungsfelder" },
      ],
    },
    audience: {
      eyebrow: "Für Wen Wir Arbeiten",
      h2: "Zugeschnitten auf das Projekt, nicht umgekehrt.",
      sub: "Dieselbe Kombination aus Produktverständnis und architektonischer Sorgfalt — passend für ein Zweierteam oder ein Programm mit einem Dutzend Stakeholdern.",
      segments: [
        {
          title: "Kleine Teams",
          description:
            "Schlanke Teams, die Architektur-, Produkt- oder Delivery-Entscheidungen treffen, ohne intern die Kapazität für eine unabhängige Zweitmeinung zu haben.",
        },
        {
          title: "Startups",
          description:
            "Frühphasenprodukte, bei denen die heute getroffenen technischen, rechtlichen und Compliance-Entscheidungen bestimmen, wie teuer spätere Änderungen werden.",
        },
        {
          title: "Unternehmen",
          description:
            "Etablierte Organisationen, die eine unabhängige Einschätzung zu einem bestimmten System, Programm oder einer Übernahme benötigen — ohne dauerhaft neue Stellen zu schaffen.",
        },
      ],
    },
    process: {
      eyebrow: "Arbeitsweise",
      h2: "Ein strukturierter Prozess, keine Blackbox.",
      sub: "Jedes Projekt durchläuft dieselben vier Phasen — unabhängig davon, welche Leistungen es umfasst.",
      steps: [
        {
          number: "01",
          title: "Verstehen",
          description:
            "Wir beginnen damit, das Problem, das bestehende System und die tatsächlichen Rahmenbedingungen zu verstehen — bevor wir irgendetwas vorschlagen.",
        },
        {
          number: "02",
          title: "Bewerten",
          description:
            "Eine unabhängige Bewertung der relevanten Bereiche — Architektur, Produkt, Delivery-Prozess oder Compliance-Risiko.",
        },
        {
          number: "03",
          title: "Empfehlen",
          description:
            "Ein klar abgegrenzter, priorisierter Plan, der auf Ihre Rahmenbedingungen zugeschnitten ist — keine Präsentation mit generischen Best Practices.",
        },
        {
          number: "04",
          title: "Begleiten",
          description:
            "Wir bleiben während der Umsetzung eingebunden oder übergeben eine Dokumentation, mit der Ihr Team eigenständig weiterarbeiten kann.",
        },
      ],
    },
    services: {
      eyebrow: "Leistungen",
      h2: "Wozu wir beraten.",
      sub: "Zwei Disziplinen, ein Projekt — Produktverständnis und architektonische Sorgfalt, gemeinsam angewandt statt auf getrennte Berater verteilt.",
      items: [
        {
          title: "Mobile Anwendungsarchitektur",
          description:
            "Strukturierung von iOS- und Android-Codebasen über das MVP hinaus — Modulgrenzen, State Management und plattformspezifische Kompromisse, die teuer werden, sobald ein Team darum herum gewachsen ist.",
        },
        {
          title: "2D-Game-Engines",
          description:
            "Auswahl von Engine und Framework für 2D-Titel sowie die zugehörige Architektur — Asset-Pipelines, Speichersysteme und Performance-Budgets, die auch bei wachsendem Umfang tragfähig bleiben.",
        },
        {
          title: "Rechts- und Regulierungs-Compliance",
          description:
            "App-Store-Richtlinien, Cookie- und Einwilligungsanforderungen sowie Datenschutzrecht — die technische und produktseitige Arbeit hinter Consent-Flows, Datenschutzhinweisen und Store-Prüfkriterien, nicht nur die Papierarbeit.",
        },
        {
          title: "CRM-Systementwicklung",
          description:
            "Design und Entwicklung von CRM- und kundenorientierten Back-Office-Systemen — Datenmodelle, Konfigurationsarchitektur und die Tools, mit denen operative Teams Kundenbeziehungen sicher verwalten.",
        },
        {
          title: "Live-Ops- und Back-Office-Tooling",
          description:
            "Operatives Tooling für Live-Produkte — Konfigurationssysteme, Admin-Panels und Workflows, mit denen Live-Ops-Teams Änderungen ausrollen können, ohne die Entwicklung einzubeziehen, bei gleichzeitig sicherem Produktivbetrieb.",
        },
        {
          title: "Technische Produktstrategie & Delivery",
          description:
            "Roadmap-Definition, Stakeholder-Abstimmung und Delivery-Management — aus unklaren Geschäftszielen wird ein klar abgegrenzter, sequenzierter Plan, der anschließend im agilen Prozess umgesetzt wird.",
        },
        {
          title: "Projektmanagement",
          description:
            "Durchführung einer klar definierten Initiative von Anfang bis Ende — Umfang, Zeitplan, Budget und Risiko gegen einen festen Satz von Ergebnissen gesteuert, mit einem klaren Verantwortlichen für den erfolgreichen Abschluss.",
        },
        {
          title: "Programmmanagement",
          description:
            "Koordination mehrerer voneinander abhängiger Projekte und Teams auf ein gemeinsames Ergebnis hin — Sequenzierung, teamübergreifende Abhängigkeiten und Reporting an Stakeholder, die den Gesamtüberblick brauchen.",
        },
        {
          title: "KI-gestütztes Prototyping & Tooling",
          description:
            "Praxisnahe Einführung von KI-Tools in Produkt- und Engineering-Workflows — KI-Einsatz zur Verkürzung der Zeit von der Idee zum Prototyp und fundierte Einschätzung, welche KI-Versprechen sich im Produktivbetrieb tatsächlich bewähren.",
        },
        {
          title: "KI-Agenten & Automatisierungs-Workflows",
          description:
            "Konzeption und Entwicklung von KI-Agenten und Automatisierungs-Workflows für echte, wiederkehrende Prozesse — keine Demos — mit den Sicherheitsmechanismen und der Fehlerbehandlung, die der Produktivbetrieb erfordert.",
        },
        {
          title: "Persönliche KI-Assistenten & Team-Assistenten",
          description:
            "Assistenten, die sich daran orientieren, wie eine Person oder ein Team tatsächlich arbeitet — angebunden an die bereits genutzten Tools und Daten, statt ein aufgesetzter generischer Chatbot.",
        },
        {
          title: "Einheitliche Repository- & Contribution-Workflows",
          description:
            "Repository- und Branching-Strategie, Code-Review-Prozess und CI/CD-Setup, die es einem wachsenden Team ermöglichen, gemeinsam an einer Codebasis zu arbeiten, ohne sich gegenseitig zu behindern.",
        },
        {
          title: "Technische Due Diligence",
          description:
            "Unabhängige Bewertung einer Codebasis, Architektur oder Entwicklungsorganisation — für Investoren, Erwerber oder Führungsteams, die ein System übernehmen, das sie nicht selbst gebaut haben.",
        },
      ],
    },
    engagement: {
      eyebrow: "Formen der Zusammenarbeit",
      h2: "Zwei Wege, mit uns zu arbeiten.",
      sub: "Jedes Projekt beginnt mit einem kostenlosen Erstgespräch zur Klärung von Umfang und passendem Modell — unverbindlich, ohne generisches Angebot.",
      models: [
        {
          title: "Abgegrenztes Projekt",
          description:
            "Ein klar definiertes Ergebnis — eine Architekturprüfung, technische Due Diligence, der Entwurf eines bestimmten Systems oder ein Migrationsplan — mit vor Projektstart vereinbartem Umfang und Ergebnis.",
          note: "Fester Umfang und feste Vergütung, vereinbart bevor die Abrechnung beginnt.",
        },
        {
          title: "Eingebundene Beratung",
          description:
            "Laufende Mitwirkung bei Delivery, Architekturentscheidungen oder Programmmanagement — im benötigten Umfang, so lange wie nötig.",
          note: "Monatlich überprüft — keine Bindung an einen langfristigen Vertrag.",
        },
      ],
    },
    team: {
      eyebrow: "Team",
      h2: "Mit wem Sie zusammenarbeiten.",
      sub: "Eine Zwei-Personen-Praxis, bewusst so gestaltet — jedes Projekt erhält direkten Zugang zur Produkt- und zur Architektur-Perspektive, ohne Account-Management-Ebenen dazwischen.",
      members: [
        {
          tag: "Produkt & Delivery",
          role: "Technischer Produktmanager",
          bio: "Über 20 Jahre IT-Erfahrung, von Netzwerktechnik bis Delivery-Management in einem globalen Softwareunternehmen. Verantwortet die Produktseite des Projekts — Scoping, Stakeholder-Abstimmung und Delivery gemäß Abnahmekriterien.",
          highlights: [
            "Verantwortete eine Back-Office-CRM-Plattform für eine globale Gaming-Organisation vom initialen Aufbau bis zur Weiterentwicklung zu einem verteilten Modell, das von mehr als 10 unabhängigen Studios genutzt wird",
            "Umfassende Erfahrung mit Live-Ops- und Back-Office-Tooling für kundenorientierte Produkte",
            "Verantwortet agiles Delivery und Stakeholder-Abstimmung über funktions- und regionsübergreifende Teams hinweg",
            "Praxiskenntnisse in Datenschutz, DSGVO und Plattform-Compliance (Apple App Store / Google Play) aus direkter Zusammenarbeit zwischen Produkt und Recht",
          ],
        },
        {
          tag: "Architektur & Engineering",
          role: "Softwarearchitekt",
          bio: "Über 10 Jahre als Softwarearchitekt und über 20 Jahre Erfahrung in der Entwicklung produktiver Software, über ein breites Portfolio an Technologie-Stacks hinweg. Verantwortet die technische Seite — Systemdesign, architektonische Abwägungen und technische Machbarkeit.",
          highlights: [
            "Beherrscht das Werkzeugrepertoire eines erstklassigen Softwarearchitekten — bewusst breit aufgestellt, nicht eng spezialisiert",
            "Fundierte Grundlage in der mobilen Entwicklung, mit deutlich darüber hinausreichender Bandbreite",
            "Vertraut mit den internen Abläufen zentraler Mobile-Game-Engines",
            "Umfangreiche Erfahrung in der Integration und Bewertung von Dritt-SDKs",
            "Ein geschulter Blick für Performance- und Stabilitätsoptimierung",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Häufige Fragen",
      h2: "Häufig gestellte Fragen.",
      items: [
        {
          question: "Wie beginnt ein Projekt in der Regel?",
          answer:
            "Mit einem kostenlosen, unverbindlichen Erstgespräch, um das Problem zu verstehen und den Umfang festzulegen. Passt es, erhalten Sie ein schriftliches Angebot mit festem Umfang und Preis, bevor die Abrechnung beginnt.",
        },
        {
          question: "Wie ist die Preisgestaltung aufgebaut?",
          answer:
            "Nach einem von zwei Modellen: ein Festpreis für ein abgegrenztes Projekt mit definierten Ergebnissen, oder ein Stundensatz für laufende, eingebundene Beratung. Welches Modell passt — und die konkrete Zahl — wird gemeinsam im Erstgespräch anhand von Umfang und Beteiligungsgrad festgelegt.",
        },
        {
          question: "Unterzeichnen Sie NDAs, und können wir Referenzen oder frühere Kunden sehen?",
          answer:
            "Ja, NDAs sind Standard. Zudem unterliegen wir Vertraulichkeitspflichten aus unserem aktuellen Anstellungsverhältnis und nennen daher Kunden, Projekte oder Details nicht öffentlich ohne ausdrückliche Erlaubnis — dieselbe Diskretion, die wir auch Ihnen gegenüber wahren würden. Gerne sprechen wir in einem Gespräch ausführlicher über relevante Erfahrung.",
        },
        {
          question: "Welche Projektgrößen übernehmen Sie?",
          answer:
            'Von einer eintägigen Architekturprüfung bis zu einer mehrmonatigen eingebundenen Beratungsrolle. Siehe "Für Wen Wir Arbeiten" oben — wir passen das Projekt an den Kunden an, nicht umgekehrt.',
        },
        {
          question: "Was, wenn wir nur eine der beiden Disziplinen benötigen?",
          answer:
            "Kein Problem — viele Projekte brauchen nur Produkt/Delivery oder nur Architektur. Sie erhalten direkten Zugang zum passenden Spezialisten, ohne ein Paket, das Sie nicht benötigen.",
        },
        {
          question: "Arbeiten Sie remote oder nur vor Ort?",
          answer: "Standardmäßig remote, mit Vor-Ort-Einsätzen, wenn das Projekt es erfordert.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      h2: "Lassen Sie uns sprechen.",
      sub: "Erzählen Sie uns von dem Problem, das Sie lösen möchten — ein System, das neu durchdacht werden muss, ein ins Stocken geratenes Delivery-Programm oder eine technische Entscheidung, zu der Sie eine unabhängige Zweitmeinung möchten.",
      emailBtn: "E-Mail schreiben",
      copyBtn: "E-Mail kopieren",
      copiedText: "Kopiert!",
    },
    footer: {
      tagline: "Beratung",
    },
  },
} as const;
