// Page images of the official forms, and where each box sits on them.
// Kept apart from the verified form text, so the guides never change for a layout tweak.
// Positions are percentages of the page: x/y = top-left corner, w/h = size.
// One entry per field, in the same order as the form's `fields`.
// Page images were rendered from the official PDF linked as each form's `source`.
// Other forms add themselves from their own files in forms/layout/ (one file per form),
// loaded only when that form is opened. List every such form here.
window.LAYOUT_FILES = ["voter-id-form-6", "voter-id-form-8", "aadhaar-update", "learner-licence", "sbi-account-opening", "pnb-account-opening", "hdfc-account-opening", "post-office-savings", "bob-account-opening", "pmjdy-account", "uk-caste-certificate", "uk-domicile-certificate", "canara-account-opening", "birth-registration", "lpg-kyc", "form-15g", "driving-licence", "epf-composite-claim", "pan-correction", "death-registration", "bank-nomination-da1", "sukanya-samriddhi"];
window.LAYOUT = window.LAYOUT || {};
Object.assign(window.LAYOUT, {
  "pan-application": {
    pages: ["forms/img/pan-application-1.jpg", "forms/img/pan-application-2.jpg"],
    spots: [
      [{ page: 0, x: 5.55, y: 21.26, w: 89.41, h: 6.89 }],   // 1A Name
      [{ page: 0, x: 5.55, y: 28.15, w: 89.41, h: 6.41 }],   // 1B Name as per Aadhaar
      [{ page: 0, x: 5.55, y: 36.1, w: 89.41, h: 1.66 }],    // 3 Date of birth
      [{ page: 0, x: 5.55, y: 37.77, w: 89.41, h: 1.78 }],   // 4 Aadhaar
      [{ page: 0, x: 5.55, y: 39.67, w: 89.41, h: 23.28 }, { page: 1, x: 5.55, y: 48.81, w: 89.41, h: 2.38 }], // 5, 6 & 22 Addresses
      [{ page: 0, x: 5.55, y: 62.95, w: 89.41, h: 4.51 }],   // 7 & 8 Residential status, passport
      [{ page: 0, x: 5.55, y: 69.48, w: 89.41, h: 7.24 }],   // 10 Contact details
      [{ page: 0, x: 5.55, y: 76.84, w: 89.41, h: 6.53 }],   // 11 Source of income
      [{ page: 0, x: 5.55, y: 85.39, w: 89.41, h: 7.48 }, { page: 1, x: 5.55, y: 2.26, w: 89.41, h: 7.36 }], // 12-15 Parents
      [{ page: 1, x: 5.55, y: 11.88, w: 89.41, h: 4.51 }],   // 16 AO code
      [{ page: 1, x: 5.55, y: 19.0, w: 89.41, h: 28.03 }],   // 17-21 Representative assessee
      [{ page: 1, x: 5.55, y: 53.68, w: 89.41, h: 4.39 }],   // 23 Proof documents
      [{ page: 0, x: 7.56, y: 2.61, w: 16.97, h: 15.32 }, { page: 0, x: 74.29, y: 2.61, w: 17.14, h: 15.32 }], // Photographs
      [{ page: 0, x: 7.56, y: 2.61, w: 16.97, h: 15.32 }, { page: 1, x: 53.45, y: 77.2, w: 38.15, h: 11.88 }]  // Signature
    ]
  }
});
