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
    slug: "supremacy",
    title: "Supremacy",

    description: "bla bla bla",

    cardDescription: "bla bla bla",

    tags: ["ASP.NET Core", "C#"],

    coverImage: "/supremacy/supremacy1.png",
    gallery: ["/supremacy/supremacy1.png", "/supremacy/supremacy2.png", "/supremacy/supremacy3.png", "/supremacy/supremacy4.png", "/supremacy/supremacy5.png", "/supremacy/supremacy6.png"],

    links: {},
  },

  {
    slug: "lagerstyringssystem",
    title: "lagerstyringssystem",

    description: "bla bla bla",

    cardDescription: "bla bla bla",

    tags: ["ASP.NET Core", "React", "TypeScript"],

    coverImage: "/vinjes/vinjes1.png",
    gallery: ["/vinjes/vinjes1.png", "/vinjes/vinjes2.png", "/vinjes/vinjes3.png", "/vinjes/vinjes4.png", "/vinjes/vinjes5.png"],

    links: {},
  },

  {
    slug: "sportsbetting-app",
    title: "sportsbetting-app",
    kind: "mobile",

    description: "Mobilapp for sportsbetting med virtuelle coins.",

    cardDescription: "Mobilapp for sportsbetting med virtuelle coins.",

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
