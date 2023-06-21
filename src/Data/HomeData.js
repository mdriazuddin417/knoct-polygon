import {
  netflix,
  amazon,
  google,
  whatsapp,
  meta,
  apple,
  jira,
  slack,
  github,
} from "../assets/image.js";
export const identitesData = [
  {
    id: 1,
    name: "Netflix",
    icon: netflix,
    title: "NFOOA",
    lock: [1, 2, 3],
    date: "21 Dec 2021",
    require: false,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Netflix ",
    },
  },
  {
    id: 2,
    name: "Amazon",
    icon: amazon,
    title: "AZOOA",
    lock: [1, 2, 3],
    date: "16 Dec 2021",
    require: false,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Amazon",
    },
  },
  {
    id: 3,

    name: "Google",
    icon: google,
    title: "GLOA",
    lock: [1, 2, 3],
    date: "12 Dec 2021",
    require: true,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Google",
    },
  },
];
export const connections = [
  {
    id: 1,
    name: "Netflix",
    icon: netflix,
    title: "NFOOA",
    lock: [1, 2, 3],
    date: "21 Dec 2021",
    require: false,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Netflix ",
    },
  },
  {
    id: 2,
    name: "Amazon",
    icon: amazon,
    title: "AZOOA",
    lock: [1, 2, 3],
    date: "16 Dec 2021",
    require: false,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Amazon",
    },
  },
  {
    id: 3,

    name: "Google",
    icon: google,
    title: "GLOA",
    lock: [1, 2, 3],
    date: "12 Dec 2021",
    require: true,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Google",
    },
  },
  {
    id: 4,
    name: "Netflix",
    icon: netflix,
    title: "NFOOA",
    lock: [1, 2, 3],
    date: "21 Dec 2021",
    require: false,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Netflix ",
    },
  },
  {
    id: 5,
    name: "Amazon",
    icon: amazon,
    title: "AZOOA",
    lock: [1, 2, 3],
    date: "16 Dec 2021",
    require: false,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Amazon",
    },
  },
  {
    id: 6,

    name: "Google",
    icon: google,
    title: "GLOA",
    lock: [1, 2, 3],
    date: "12 Dec 2021",
    require: true,
    body: {
      details: "Name,Birth Date,Country,Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      authenticate: "Last exchaged on 15/11/12 via",
      app: "Google",
    },
  },
];
export const verificationData = [
  {
    id: 1,
    name: "Apple",
    title: "APO2A",
    icon: apple,
    date: "10 Dec 2021",
    verified: true,
    body: {
      detailsVerified: "Name,Birth Date,Country,Location,IP Address",
      detailsUnverified: "Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      lastVerified: "Last exchaged on 15/11/12 via",
      app: "Google",
    },
    allDetails: {
      detailsShared: {
        name: "Shana Warne",
        BirthDate: "4 Oct 1962",
        Country: "Australia",
      },
      record: {
        one: "This is one commusnication about exchanged",
        second: "This is second commusnication about update",
        third: "This is third commusnication about profile",
      },
      idProof: {
        adharCard: " 3023 2330 2332 1211",
        panCard: "DA121AE1",
      },
      sharedTo: {
        first: "ABC Company on 24 Jan",
        second: "XYZ Company on 28 Jan",
      },
      roleOfThePerson: {
        first: "Role one by company ABC",
        second: "Role 2 by company XYZ",
      },
      service: {
        first: "This is third commusnication about profile",
        second: "This is third commusnication about profile",
      },
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
      detailsUnverified: "Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      lastVerified: "Last exchaged on 15/11/12 via",
      app: "Whatsapp",
    },
    allDetails: {
      detailsShared: {
        name: "Shana Warne",
        BirthDate: "4 Oct 1962",
        Country: "Australia",
      },
      record: {
        one: "This is one commusnication about exchanged",
        second: "This is second commusnication about update",
        third: "This is third commusnication about profile",
      },
      idProof: {
        adharCard: " 3023 2330 2332 1211",
        panCard: "DA121AE1",
      },
      sharedTo: {
        first: "ABC Company on 24 Jan",
        second: "XYZ Company on 28 Jan",
      },
      roleOfThePerson: {
        first: "Role one by company ABC",
        second: "Role 2 by company XYZ",
      },
      service: {
        first: "This is third commusnication about profile",
        second: "This is third commusnication about profile",
      },
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
      detailsUnverified: "Location,IP Address",
      shared: "ABC Corp,CBZ Corp, Veda",
      lastVerified: "Last exchaged on 15/11/12 via",
      app: "Meta",
    },
    allDetails: {
      detailsShared: {
        name: "Shana Warne",
        BirthDate: "4 Oct 1962",
        Country: "Australia",
      },
      record: {
        one: "This is one commusnication about exchanged",
        second: "This is second commusnication about update",
        third: "This is third commusnication about profile",
      },
      idProof: {
        adharCard: " 3023 2330 2332 1211",
        panCard: "DA121AE1",
      },
      sharedTo: {
        first: "ABC Company on 24 Jan",
        second: "XYZ Company on 28 Jan",
      },
      roleOfThePerson: {
        first: "Role one by company ABC",
        second: "Role 2 by company XYZ",
      },
      service: {
        first: "This is third commusnication about profile",
        second: "This is third commusnication about profile",
      },
    },
  },
];

export const addIdentiteData = [
  {
    id: 1,
    name: "Slack",
    icon: slack,
  },
  {
    id: 2,
    name: "Jira",
    icon: jira,
  },
  {
    id: 3,
    name: "GitHub",
    icon: github,
  },
];
