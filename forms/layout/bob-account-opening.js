// Page images: Bank of Baroda "Account Opening Form for Resident Individual" (F. No.-401, Part I & II with Form DA-1), English pages 11, 12, 13 and 14 of the scanned official PDF (https://bankofbaroda.bank.in/-/media/project/bob/countrywebsites/india/content/download-forms/personal/aof-individual-hindi-english-combined-02-16.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["bob-account-opening"] = {
  pages: ["forms/img/bob-account-opening-1.jpg", "forms/img/bob-account-opening-2.jpg", "forms/img/bob-account-opening-3.jpg", "forms/img/bob-account-opening-4.jpg"],
  spots: [
    [{ page: 0, x: 2.5, y: 17.0, w: 56.0, h: 2.4 }, { page: 2, x: 2.5, y: 19.5, w: 94.5, h: 3.2 }],   // Account type (Part I top, Part II section 1)
    [{ page: 0, x: 2.5, y: 23.4, w: 94.5, h: 5.3 }],   // Name and Maiden Name
    [{ page: 0, x: 2.5, y: 28.7, w: 94.5, h: 1.9 }, { page: 0, x: 68.5, y: 30.5, w: 28.5, h: 1.95 }],   // Date of Birth, Gender, Marital Status
    [{ page: 0, x: 2.5, y: 30.5, w: 24.0, h: 2.95 }, { page: 0, x: 14.5, y: 32.55, w: 82.5, h: 1.9 }],   // Father / Mother / Spouse
    [{ page: 0, x: 13.5, y: 34.5, w: 64.5, h: 1.9 }, { page: 0, x: 19.5, y: 36.4, w: 75.0, h: 2.0 }],   // Type of Customers and Illiterate
    [{ page: 0, x: 2.5, y: 45.5, w: 94.5, h: 13.0 }],   // Occupation Type and Annual Income
    [{ page: 0, x: 2.5, y: 69.4, w: 94.5, h: 3.7 }],   // Politically exposed person and Country of Tax Residence
    [{ page: 0, x: 2.5, y: 73.2, w: 94.5, h: 1.9 }],   // PAN (or Form 60)
    [{ page: 0, x: 2.5, y: 77.6, w: 94.5, h: 3.4 }],   // Mobile No. and Email ID
    [{ page: 0, x: 2.5, y: 83.4, w: 94.5, h: 9.9 }, { page: 1, x: 3.0, y: 51.9, w: 93.5, h: 5.6 }],   // 3. Proof of Identity/Address and 7. Aadhaar consent
    [{ page: 1, x: 2.5, y: 4.7, w: 94.5, h: 43.7 }],   // Address details (sections 4, 5 and 6)
    [{ page: 2, x: 2.5, y: 27.3, w: 94.5, h: 27.0 }],   // Services Required (Part II, section 3)
    [{ page: 3, x: 2.5, y: 2.0, w: 94.8, h: 45.2 }],   // Nomination (Form DA-1)
    [{ page: 1, x: 3.5, y: 57.7, w: 17.5, h: 10.5 }, { page: 1, x: 21.5, y: 57.7, w: 75.5, h: 10.5 }, { page: 3, x: 2.9, y: 70.2, w: 94.3, h: 5.6 }],   // Photograph and Signature / Thumb Impression
  ]
};
