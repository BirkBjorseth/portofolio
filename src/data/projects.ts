export type Project = {
  slug: string
  title: string
  description: string
  cardDescription?: string
  tags: string[]
  coverImage?: string
  kind?: "web" | "mobile"
  links?: {
    live?: string
    repo?: string
  }
  gallery?: string[]
}

export const projects: Project[] = [
  {
    slug: "Supremacy",
    title: "Supremacy",

    description:
      "Festival-nettside bygget i ASP.NET MVC med roller, adminpanel og full Stripe-basert checkout. Alt innhold kan administreres dynamisk, med tilhørende mobilapp for scanning og validering av billetter.",

    cardDescription:
      "Festival-nettside bygget i ASP.NET MVC med roller, adminpanel og full Stripe-basert checkout. Alt innhold kan administreres dynamisk, med tilhørende mobilapp for scanning og validering av billetter.",

    tags: ["ASP.NET Core", "C#"],

    coverImage: "/supremacy/supremacy1.png",
    gallery: [
      "/supremacy/supremacy1.png",
      "/supremacy/supremacy2.png",
      "/supremacy/supremacy3.png",
      "/supremacy/supremacy4.png",
      "/supremacy/supremacy7.png",
      "/supremacy/supremacy8.png",
      "/supremacy/supremacy5.png",
      "/supremacy/supremacy6.png",
    ],

    links: {},
  },

  {
    slug: "Lagerstyringssystem",
    title: "Lagerstyringssystem",

    description:
      "Visuelt bokslagerstyringssystem som modellerer fysisk plassering av bokser med side, rekke, dybde og nivå. Systemet støtter drag-and-drop for flytting, booking av bokser til kunder og håndhever fysiske begrensninger, som at bokser ikke kan flyttes hvis noe står over dem.",

    cardDescription:
      "Visuelt bokslagerstyringssystem som modellerer fysisk plassering av bokser med side, rekke, dybde og nivå. Systemet støtter drag-and-drop for flytting, booking av bokser til kunder og håndhever fysiske begrensninger, som at bokser ikke kan flyttes hvis noe står over dem.",

    tags: ["ASP.NET Core", "React", "TypeScript"],

    coverImage: "/vinjes/vinjes1.png",
    gallery: ["/vinjes/vinjes1.png", "/vinjes/vinjes2.png", "/vinjes/vinjes3.png", "/vinjes/vinjes4.png"],

    links: {},
  },

  {
    slug: "Sportsbetting-app",
    title: "Sportsbetting-app",
    kind: "mobile",

    description: `
    Mobilspill for sportsbetting basert på ekte fotballkamper, men uten bruk av ekte penger.

    Appen henter kamper og odds fra eksterne API-er og lar brukere plassere spill med
    virtuelle coins. Brukere mottar startbalanse ved registrering, kan følge åpne bets
    og får automatisk oppdatert saldo når kampene er ferdigspilt.

    Applikasjonen er bygget i React Native, og bruker Supabase
    til autentisering, database og backend-logikk. Det er også implementert frivillig
    kjøp av virtuelle coins via Stripe.
    `,

    cardDescription: "Mobilspill for sportsbetting.",

    tags: ["React Native", "TypeScript", "Expo", "Supabase"],

    coverImage: "/betting/hovedside.png",
    gallery: [
      "/betting/hovedside.png",
      "/betting/placebet.png",
      "/betting/bets.png",
      "/betting/betdetails.png",
      "/betting/bethistory.png",
      "/betting/kjopshistorikk.png",
      "/betting/stripe1.png",
      "/betting/account.png",
      "/betting/settings.png",
      "/betting/mail.png",
    ],

    links: {},
  },
]
