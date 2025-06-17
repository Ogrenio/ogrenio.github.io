import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Öğrenio ile çocuğunuzun öğrenme yolculuğuna katılın",
  quickLinks: [
    {
      text: "Hizmet Şartları",
      url: "/terms-of-service",
    },
    {
      text: "Gizlilik Sözleşmesi",
      url: "/privacy-policy",
    },
    {
      text: "SSS",
      url: "/faq",
    },
  ],
  email: "ogrenioapp@gmail.com",
  telephone: "+90 850 123 45 67",
  socials: {
    twitter: "https://twitter.com/OgrenioApp",
    facebook: "https://facebook.com/OgrenioApp",
    linkedin: "https://www.linkedin.com/company/ogrenio",
    instagram: "https://www.instagram.com/ogrenioapp"
  }
};
