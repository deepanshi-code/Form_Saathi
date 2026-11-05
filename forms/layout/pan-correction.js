// Page images: pages 1 and 2 of the official "PAN CR-01 Request For Changes Or Correction in PAN Data [For an Individual]"
// (Protean, file "PAN CR individual_03Nov.pdf", modified 30-10-2026; https://tinpan.proteantech.in/downloads/pan/download/PAN%20CR%20individual_03Nov.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["pan-correction"] = {
  pages: ["forms/img/pan-correction-1.jpg", "forms/img/pan-correction-2.jpg"],
  spots: [
    [{ page: 0, x: 35.53, y: 8.56, w: 29.91, h: 8.06 }],   // PAN and Aadhaar Number
    [{ page: 0, x: 5.79, y: 2.67, w: 16.84, h: 15.31 }, { page: 0, x: 77.28, y: 2.67, w: 16.93, h: 15.31 }],   // Two photographs
    [{ page: 0, x: 12.3, y: 22.31, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 29.24, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 35.71, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 37.30, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 39.30, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 52.62, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 54.21, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 57.80, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 71.50, w: 3.1, h: 1.9 }, { page: 0, x: 12.3, y: 76.28, w: 3.1, h: 1.9 }],   // Tick boxes in the left margin
    [{ page: 0, x: 16.49, y: 22.44, w: 77.72, h: 6.45 }],   // 1A Name
    [{ page: 0, x: 16.49, y: 29.39, w: 77.72, h: 6.39 }],   // 1B Name as per Aadhaar
    [{ page: 0, x: 16.49, y: 35.9, w: 43.16, h: 1.49 }],   // 2 Gender
    [{ page: 0, x: 16.49, y: 37.45, w: 38.95, h: 1.49 }],   // 3 Date of Birth
    [{ page: 0, x: 16.49, y: 39.43, w: 77.72, h: 1.55 }, { page: 0, x: 8.77, y: 41.17, w: 85.44, h: 11.53 }],   // 4 Address
    [{ page: 0, x: 16.49, y: 52.82, w: 77.72, h: 4.59 }],   // 5 Passport Number, 6 TIN
    [{ page: 0, x: 16.49, y: 57.9, w: 77.72, h: 1.61 }, { page: 0, x: 8.77, y: 59.76, w: 85.44, h: 7.94 }],   // 7 Contact Details
    [{ page: 0, x: 16.49, y: 71.61, w: 77.72, h: 4.65 }],   // 8 Father's Name
    [{ page: 0, x: 16.49, y: 76.44, w: 77.72, h: 4.65 }],   // 9 Mother's Name
    [{ page: 0, x: 5.79, y: 81.46, w: 88.42, h: 1.74 }],   // 10 Parent name on PAN card
    [{ page: 0, x: 5.79, y: 85.86, w: 88.42, h: 7.75 }],   // 11 Documents submitted
    [{ page: 1, x: 6.14, y: 2.6, w: 88.25, h: 33.97 }]   // Verification and Declaration, signature
  ]
};
