import { apple, whatsapp, meta } from "../assets/image";
export const walletData = [
  {
    id: 1,
    name: "Apple",
    title: "APO2A",
    icon: apple,
    date: "10 Dec 2021",
    verified: true,
    body: {
      detailsVerified: "Name,Birth Date,Country,Location,IP Address",
      updateRequire: "Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      lastVerified: "Last exchaged on 15/11/12 via",
      app: "Google",
    },
  },
  {
    id: 2,
    name: "Whatsapp",
    title: "AZOOA",
    icon: whatsapp,
    date: "09 Dec 2021",
    verified: false,
    body: {
      detailsVerified: "Name,Birth Date,Country,Location,IP Address",
      updateRequire: "Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      lastVerified: "Last exchaged on 15/11/12 via",
      app: "Whatsapp",
    },
  },
  {
    id: 3,
    name: "Meta",
    title: "AZOOA",
    icon: meta,
    date: "08 Dec 2021",
    verified: false,
    body: {
      detailsVerified: "Name,Birth Date,Country,Location,IP Address",
      updateRequire: "Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      lastVerified: "Last exchaged on 15/11/12 via",
      app: "Meta",
    },
  },
];
