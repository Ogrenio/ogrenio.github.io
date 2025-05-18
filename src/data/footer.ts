import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Yapay zekâ destekli eğitim araçlarıyla güçlenen geleceğin öğrenme deneyimini sunuyoruz.",
  quickLinks: [
    {
      text: "Özellikler",
      url: "#features"
    },
    {
      text: "Örnek Etkinlikler",
      url: "#activities"
    },
    {
      text: "SSS",
      url: "#faq"
    }
  ],
  email: "ogrenioapp@gmail.com",
  telephone: "+90 (212) 555 01 23",
  socials: {
    twitter: "https://twitter.com/OgrenioApp",
    facebook: "https://facebook.com/OgrenioApp",
    linkedin: "https://www.linkedin.com/company/ogrenio",
    instagram: "https://www.instagram.com/ogrenioapp"
  }
};
