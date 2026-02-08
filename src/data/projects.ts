export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  coverImage?: string
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
    tags: [".NET"],

    coverImage: "/supremacy/supremacy1.png",
    gallery: ["/supremacy/supremacy1.png", "/supremacy/supremacy2.png", "/supremacy/supremacy3.png", "/supremacy/supremacy4.png", "/supremacy/supremacy5.png", "/supremacy/supremacy6.png"],

    links: {},
  },
]
