// Page image: District Almora (almora.nic.in) "आय प्रमाण पत्र के लिए आवेदन पत्र" (Income Certificate application form), PDF dated 13-03-2018,
// its only page (https://cdn.s3waas.gov.in/s33a0772443a0739141292a5429b952fe6/uploads/2018/03/2018031686.pdf), blank lower part cropped.
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page image.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["uk-income-certificate"] = {
  pages: ["forms/img/uk-income-certificate-1.jpg"],
  spots: [
    [{ page: 0, x: 8.82, y: 3.78, w: 75.08, h: 4.51 }],   // Where and how to apply
    [{ page: 0, x: 8.82, y: 11.02, w: 75.08, h: 4.51 }],   // Applicant's name
    [{ page: 0, x: 8.82, y: 15.53, w: 75.08, h: 9.02 }],   // Father's / husband's name and mother's name
    [{ page: 0, x: 8.82, y: 24.56, w: 75.08, h: 4.51 }],   // Gender
    [{ page: 0, x: 8.82, y: 29.07, w: 75.08, h: 9.0 }],   // Monthly income in figures and words
    [{ page: 0, x: 8.82, y: 38.07, w: 75.08, h: 27.04 }],   // Rural / urban, district, tehsil, Patwari area, village, municipal area
    [{ page: 0, x: 8.82, y: 65.11, w: 75.08, h: 9.02 }],   // Address and mobile number
    [{ page: 0, x: 53.1, y: 82.0, w: 17.16, h: 14.89 }],   // Signature, place and date
    [{ page: 0, x: 8.82, y: 3.78, w: 75.08, h: 4.51 }],   // Documents to upload
    [{ page: 0, x: 8.82, y: 3.78, w: 75.08, h: 4.51 }]   // Fee, what happens next, track and download
  ]
};
