// Facts taken from the existing accountrustsvcs.com site.
// Contact page (primary address). Service pages list 16733 84 Street NW;
// change ADDRESS here if that is the correct office.
export const site = {
  name: "AccounTrust Services Inc.",
  shortName: "AccounTrust",
  url: "https://www.accountrustsvcs.com",
  logo: "/logo.svg",
  phone: "587-501-2220",
  phoneE164: "+15875012220",
  email: "dsaleh@accountrustsvcs.com",
  address: {
    street: "4408 - 97 Street NW",
    city: "Edmonton",
    region: "AB",
    postalCode: "T6E 5R9",
    country: "CA",
  },
  bookingUrl: "https://www.accountrustsvcs.com/book",
  colors: {
    slate: "#3d5565",
    silver: "#afb9bc",
    odoo: "#714b67",
  },
} as const;
