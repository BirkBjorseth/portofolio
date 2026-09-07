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
    title: "Lager- og logistikksystem",

    description:
      "Internt system laget til Vinjes Transport som " +
      "digitaliserer hele driftsflyten – fra bokslager og " +
      "kundebase til byflytte-planlegging og langtransport. " +
      "Erstattet Excel- og papirbaserte prosesser." +
      "\n\n" +
      "Sentrale moduler: visuelt bokslager med 3D-grid (side, " +
      "rekke, dybde, nivå) og drag-and-drop, kundebase med " +
      "soft-delete og historikk, befaringer med PDF-eksport, " +
      "byflytte-planlegger med tildeling av ansatte og " +
      "kjøretøy, og en kjøretøy-flåte der EU-kontroll synkes " +
      "automatisk fra Vegvesen." +
      "\n\n" +
      "Langtransport-modulen håndterer legg-basert split-" +
      "tildeling (opplasting og levering kan stå på hvert sitt " +
      "vogntog), avledet status, kubikk- og kapasitetssporing " +
      "med overbooking-varsler, og delegering av enkeltfaser " +
      "til by-avdelingen. Audit-logg på tvers av alle domener." +
      "\n\n" +
      "Real-time-synk via SignalR, race-safe booking med " +
      "PostgreSQL Serializable-transaksjoner, og rolle-basert " +
      "tilgangsstyring.",

    cardDescription:
      "Internt lagerstyrings- og logistikksystem laget til " +
      "Vinjes Transport. Bokslager med 3D-grid, kunder, " +
      "befaring, byflytte- og langtransport-planlegging og " +
      "kjøretøy – med real-time-synk og race-safe booking.",

    tags: ["ASP.NET Core", "React", "TypeScript"],
    extraTags: ["PostgreSQL"],

    coverImage: "/vinjes/vvinjes1.png",
    gallery: ["/vinjes/vvinjes1.png", "/vinjes/vvinjes2.png", "/vinjes/vvinjes3.png", "/vinjes/vvinjes4.png", "/vinjes/vvinjes5.png"],

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
