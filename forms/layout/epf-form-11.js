// Page image: EPFO "New Form No.-11 - Declaration Form", page 1 of the official PDF on EPFO's Downloads page
// (https://www.epfo.gov.in/downloads/ -> https://pmvbry-cdn.epfindia.gov.in/wp-content/uploads/2025/07/Form11Revised.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["epf-form-11"] = {
  pages: ["forms/img/epf-form-11-1.jpg"],
  spots: [
    [{ page: 0, x: 4.1, y: 10.15, w: 84.6, h: 3.6 }],   // 1 Name of the member
    [{ page: 0, x: 4.1, y: 13.75, w: 84.6, h: 3.9 }],   // 2 Father's / Spouse's name
    [{ page: 0, x: 4.1, y: 17.65, w: 84.6, h: 5.4 }],   // 3-5 Date of birth, gender, marital status
    [{ page: 0, x: 4.1, y: 23.05, w: 84.6, h: 3.1 }],   // 6 Email and mobile
    [{ page: 0, x: 4.1, y: 26.15, w: 84.6, h: 2.55 }],   // 7 Earlier EPF member
    [{ page: 0, x: 4.1, y: 28.7, w: 84.6, h: 1.85 }],   // 8 Earlier EPS member
    [{ page: 0, x: 4.1, y: 30.55, w: 84.6, h: 11.9 }],   // 9 Previous employment details
    [{ page: 0, x: 4.1, y: 42.45, w: 84.6, h: 8.0 }],   // 10 International worker
    [{ page: 0, x: 4.1, y: 50.45, w: 84.6, h: 4.3 }],   // 11a Bank account and IFSC
    [{ page: 0, x: 4.1, y: 54.75, w: 84.6, h: 3.65 }],   // 11b-c Aadhaar and PAN
    [{ page: 0, x: 5.0, y: 58.75, w: 86.5, h: 13.25 }],   // Undertaking, date, place, signature
    [{ page: 0, x: 7.5, y: 72.25, w: 84.5, h: 25.8 }]    // Declaration by present employer
  ]
};
