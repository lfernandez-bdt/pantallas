export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Portal Asegurados Ohio",
  description: "",
  mainNavTop: [
    {
      title: "Volver a la web",
      href: "https://www.ohionational.cl/",
      protected: false,
      icon: "arrowLeft"
    }
    ,
  ],
  mainNavLeft: [
    
  ],
  links: {},

  baseUrl: "http://localhost:3000/api/login",
}
