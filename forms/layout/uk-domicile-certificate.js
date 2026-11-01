// Page images: District Pithoragarh "Permanent resident certificate" (स्थाई निवास प्रमाण-पत्र) application form, posted 19/05/2017, pages 1 and 2 of the official PDF (https://cdn.s3waas.gov.in/s347d1e990583c9c67424d369f3414728e/uploads/2018/02/2018031647-2.pdf).
// Page 1 is the applicant's application to the SDM, page 2 is the Patwari's report.
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["uk-domicile-certificate"] = {
  pages: ["forms/img/uk-domicile-certificate-1.jpg", "forms/img/uk-domicile-certificate-2.jpg"],
  spots: [
    [{ page: 0, x: 12, y: 11.6, w: 36, h: 8.0 }],   // "सेवा में, उपजिलाधिकारी महोदय" (addressed to the SDM)
    [{ page: 0, x: 13, y: 24.3, w: 67, h: 2.1 }],   // Applicant's name (item 1)
    [{ page: 0, x: 13, y: 26.4, w: 67, h: 1.7 }],   // Date and place of birth (item 2)
    [{ page: 0, x: 13, y: 28.1, w: 67, h: 3.2 }],   // Father's name and mother's name (items 3 and 4)
    [{ page: 0, x: 13, y: 31.3, w: 75, h: 3.4 }],   // Father's place of birth (items 5 and 6)
    [{ page: 0, x: 13, y: 35.4, w: 67, h: 2.2 }],   // Permanent address (item 7 a)
    [{ page: 0, x: 13, y: 37.6, w: 78, h: 6.2 }],   // Education details (item 7 b)
    [{ page: 0, x: 13, y: 43.8, w: 78, h: 5.9 }],   // Family property here (item 8)
    [{ page: 0, x: 13, y: 49.8, w: 79, h: 9.1 }],   // Parents' livelihood and government job (items 9 and 10)
    [{ page: 0, x: 13, y: 58.9, w: 78, h: 1.7 }],   // Reason for the certificate (item 11)
    [{ page: 0, x: 13, y: 72.6, w: 79, h: 9.5 }],   // Declaration (घोषणा)
    [{ page: 0, x: 13, y: 60.6, w: 23, h: 2.0 }, { page: 0, x: 78.5, y: 61.8, w: 12.5, h: 7.8 }, { page: 0, x: 13, y: 82.3, w: 24, h: 6.6 }, { page: 0, x: 68, y: 82.6, w: 12.5, h: 5.8 }],   // Date, place, signature and address
    [{ page: 1, x: 13, y: 9.4, w: 79, h: 73.2 }],   // Patwari's report (page 2, for office use)
  ]
};
