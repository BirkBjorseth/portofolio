export type Project = {
  slug: string
  title: string
  description: string
  cardDescription?: string
  tags: string[]
  /** Vises kun på detaljsiden, i tillegg til `tags`. */
  extraTags?: string[]
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

    description: `
    Festival-nettside utviklet som skoleprosjekt, bygget i ASP.NET MVC med roller, adminpanel og checkout via Stripe.

    Løsningen er inspirert av nettsiden til Reverze og Supremacy, med eget design og implementasjon. Alt innhold kan administreres dynamisk, og systemet inkluderer også en tilhørende mobilapp for scanning og validering av billetter.`,

    cardDescription: `
    Festival-nettside utviklet som skoleprosjekt, bygget i ASP.NET MVC med roller, adminpanel og checkout via Stripe.

    Løsningen er inspirert av nettsiden til Reverze og Supremacy, med eget design og implementasjon. Alt innhold kan administreres dynamisk, og systemet inkluderer også en tilhørende mobilapp for scanning og validering av billetter.`,

    tags: ["ASP.NET Core", "Stripe"],

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
      "Internt produksjonssystem som digitaliserer hele " +
      "driftsflyten hos Vinjes Transport – fra bokslager og " +
      "kundebase til byflytte-planlegging og langtransport-" +
      "logistikk. Erstattet Excel- og papirbaserte prosesser." +
      "\n\n" +
      "Sentrale moduler: visuelt bokslager med 3D-grid (side, " +
      "rekke, dybde, nivå) og drag-and-drop, kundebase med " +
      "soft-delete og historikk, befaringer med PDF-eksport, " +
      "byflytte-planlegger med tildeling av ansatte og " +
      "kjøretøy, langtransport-modul med split-tildeling per " +
      "legg, og audit-logg på tvers av alle domener." +
      "\n\n" +
      "Real-time-synk via SignalR, race-safe booking med " +
      "PostgreSQL Serializable-transaksjoner, og rolle-basert " +
      "tilgangsstyring.",

    cardDescription:
      "Internt produksjonssystem som digitaliserer hele " +
      "driftsflyten hos Vinjes Transport – fra bokslager og " +
      "kundebase til byflytte-planlegging og langtransport-" +
      "logistikk. Erstattet Excel- og papirbaserte prosesser." +
      "\n\n" +
      "Sentrale moduler: visuelt bokslager med 3D-grid (side, " +
      "rekke, dybde, nivå) og drag-and-drop, kundebase med " +
      "soft-delete og historikk, befaringer med PDF-eksport, " +
      "byflytte-planlegger med tildeling av ansatte og " +
      "kjøretøy, langtransport-modul med split-tildeling per " +
      "legg, og audit-logg på tvers av alle domener." +
      "\n\n" +
      "Real-time-synk via SignalR, race-safe booking med " +
      "PostgreSQL Serializable-transaksjoner, og rolle-basert " +
      "tilgangsstyring.",

    tags: ["ASP.NET Core", "React", "TypeScript"],
    extraTags: ["PostgreSQL"],

    coverImage: "/vinjes/vvinjes1.png",
    gallery: ["/vinjes/vvinjes1.png", "/vinjes/vvinjes2.png", "/vinjes/vvinjes3.png", "/vinjes/vvinjes4.png"],

    links: {},
  },

  {
    slug: "Sportsbetting-app",
    title: "Sportsbetting-app",
    kind: "mobile",

    description: `
    Mobilspill for sportsbetting basert på ekte fotballkamper, men uten bruk av ekte penger.

    Appen henter kamper og odds fra eksterne API-er og lar brukere plassere spill med virtuelle coins. Brukere mottar startbalanse ved registrering, kan følge åpne bets og får automatisk oppdatert saldo når kampene er ferdigspilt.

    Applikasjonen er bygget i React Native, og bruker Supabase til autentisering, database og backend-logikk. Det er også implementert frivillig kjøp av virtuelle coins via Stripe.`,

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

  {
    slug: "Eksamensoving",
    title: "Eksamensøving",
    kind: "web",

    description: `quiz-app laget for å pugge til eksamen.

Brukeren kan starte en quiz, få resultat i prosent og karakter, og kan vise fasit med markering av riktige og valgte svar.`,

    cardDescription: `quiz-app for eksamenspugging. Viser resultat i prosent/karakter og kan vise fasit med markering av riktige og valgte svar.`,

    tags: ["React", "TypeScript"],

    coverImage: "/eksamen/eksamen1.png",
    gallery: ["/eksamen/eksamen1.png", "/eksamen/eksamen2.png", "/eksamen/eksamen3.png", "/eksamen/eksamen4.png", "/eksamen/eksamen5.png"],

    links: {
      live: "https://eksamensoving.vercel.app/",
    },
  },
]
