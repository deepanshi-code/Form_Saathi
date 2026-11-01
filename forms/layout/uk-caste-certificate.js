// Page images: District Almora "जाति प्रमाणपत्र हेतु आवेदन पत्र" (SC / ST certificate form, PDF dated 13-03-2018), its only page (https://cdn.s3waas.gov.in/s33a0772443a0739141292a5429b952fe6/uploads/2018/03/2018031695.pdf),
// then all 4 pages of the District Pithoragarh "OBC certificate" form set, PDF dated 16-03-2018 (https://cdn.s3waas.gov.in/s347d1e990583c9c67424d369f3414728e/uploads/2018/02/2018031676-2.pdf):
// Annexure 'ख' application (2 pages), the Patwari's inquiry report, and the creamy-layer inquiry report.
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["uk-caste-certificate"] = {
  pages: ["forms/img/uk-caste-certificate-1.jpg", "forms/img/uk-caste-certificate-2.jpg", "forms/img/uk-caste-certificate-3.jpg", "forms/img/uk-caste-certificate-4.jpg", "forms/img/uk-caste-certificate-5.jpg"],
  spots: [
    [{ page: 0, x: 8.82, y: 9.22, w: 60.78, h: 2.44 }, { page: 1, x: 5, y: 18.1, w: 44, h: 6.9 }],   // Where to apply and who issues it
    [{ page: 0, x: 8.82, y: 9.22, w: 60.78, h: 2.44 }, { page: 1, x: 5, y: 6.8, w: 84, h: 11.3 }],   // SC / ST or OBC: which form?
    [{ page: 0, x: 8.82, y: 13.23, w: 60.78, h: 2.56 }, { page: 1, x: 5, y: 29.5, w: 72, h: 4.0 }],   // Applicant's name
    [{ page: 0, x: 8.82, y: 15.8, w: 60.78, h: 5.13 }, { page: 1, x: 5, y: 49.3, w: 72, h: 5.5 }],   // Father's / husband's name and mother's name
    [{ page: 0, x: 8.82, y: 20.92, w: 60.78, h: 5.13 }, { page: 1, x: 5, y: 33.5, w: 72, h: 2.1 }],   // Gender, age / date of birth
    [{ page: 0, x: 8.82, y: 26.05, w: 60.78, h: 5.13 }, { page: 1, x: 5, y: 41, w: 51, h: 8.3 }],   // Caste and sub-caste
    [{ page: 0, x: 8.82, y: 31.17, w: 60.78, h: 15.38 }],   // Rural / urban, district, tehsil, Patwari area, village or town
    [{ page: 0, x: 8.82, y: 46.55, w: 60.78, h: 5.13 }, { page: 1, x: 5, y: 35.6, w: 73, h: 5.4 }],   // Address and mobile number
    [{ page: 1, x: 5, y: 54.8, w: 84, h: 43.0 }, { page: 2, x: 5, y: 6, w: 84, h: 65.9 }],   // OBC only: parents' / husband's status
    [{ page: 2, x: 8, y: 71.9, w: 79, h: 7.5 }],   // OBC only: creamy-layer declaration
    [{ page: 2, x: 8, y: 60.8, w: 67, h: 8.8 }, { page: 3, x: 12.5, y: 28.4, w: 77.0, h: 4.6 }],   // Documents to attach
    [{ page: 3, x: 12, y: 8.5, w: 78, h: 62.0 }, { page: 4, x: 11, y: 13.8, w: 73, h: 63.2 }],   // Patwari inquiry report (filled by the office)
    [{ page: 0, x: 38.56, y: 58.59, w: 16.34, h: 8.08 }, { page: 2, x: 9, y: 83, w: 73, h: 6.5 }],   // Signature, place and date
  ]
};
