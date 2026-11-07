// Page images: Harmonised application form, Application for Schengen Visa (Annex I to Regulation (EC) No 810/2009,
// as replaced by Regulation (EU) 2023/2667), the 4-page PDF published by the European Commission (DG Migration and
// Home Affairs), PDF dated 06-02-2026:
// https://home-affairs.ec.europa.eu/document/download/5fe79baa-2d46-4b65-84ec-ea2e9b5ab1d6_en?filename=Visa%20Application%20Form.pdf
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["schengen-visa"] = {
  pages: ["forms/img/schengen-visa-1.jpg", "forms/img/schengen-visa-2.jpg", "forms/img/schengen-visa-3.jpg", "forms/img/schengen-visa-4.jpg"],
  spots: [
    [{ page: 0, x: 11.33, y: 42.2, w: 61.59, h: 7.6 }],   // 1-3 Surname, surname at birth, first names
    [{ page: 0, x: 11.33, y: 49.8, w: 61.59, h: 10.68 }],   // 4-7 Date, place, country of birth, nationality
    [{ page: 0, x: 11.33, y: 60.48, w: 61.59, h: 5.92 }],   // 8-9 Sex, civil status
    [{ page: 0, x: 11.33, y: 66.4, w: 61.59, h: 3.4 }],   // 10 Parental authority / legal guardian
    [{ page: 0, x: 11.33, y: 69.8, w: 61.59, h: 9.55 }],   // 11 National identity number
    [{ page: 1, x: 11.49, y: 10.65, w: 61.59, h: 13.88 }],   // 12-16 Travel document
    [{ page: 1, x: 11.49, y: 24.53, w: 61.59, h: 23.12 }],   // 17-18 EU/EEA/CH/UK family member
    [{ page: 1, x: 11.49, y: 47.65, w: 61.59, h: 10.93 }],   // 19-20 Home address, contact, residence elsewhere
    [{ page: 1, x: 11.49, y: 58.58, w: 61.59, h: 9.65 }],   // 21-22 Occupation, employer / school
    [{ page: 1, x: 11.49, y: 68.23, w: 61.59, h: 10.93 }],   // 23-24 Purpose of the journey
    [{ page: 1, x: 11.49, y: 79.16, w: 61.59, h: 16.51 }],   // 25-27 Destination, first entry, entries, dates
    [{ page: 2, x: 11.49, y: 7.37, w: 61.59, h: 20.22 }],   // 28-29 Earlier fingerprints, entry permit
    [{ page: 2, x: 11.49, y: 27.59, w: 61.59, h: 23.19 }],   // 30-31 Inviting person / hotel, inviting company
    [{ page: 2, x: 11.49, y: 50.78, w: 61.59, h: 19.81 }],   // 32 Cost of travelling and living
    [{ page: 2, x: 11.49, y: 70.59, w: 61.59, h: 11.61 }],   // 33 Person filling in the form
    [{ page: 3, x: 10.8, y: 10.2, w: 77.8, h: 70.49 }]    // Declarations, place and date, signature
  ]
};
