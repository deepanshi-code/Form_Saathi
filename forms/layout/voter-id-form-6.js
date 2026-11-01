// Page images: ECI Form-6, Application Form for New Voters (English, PDF last modified 28-10-2025), pages 1, 2 of the official PDF (https://voters.eci.gov.in/formspdf/Form_6_English.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["voter-id-form-6"] = {
  pages: ["forms/img/voter-id-form-6-1.jpg", "forms/img/voter-id-form-6-2.jpg"],
  spots: [
    [{ page: 0, x: 2.12, y: 12.12, w: 94.61, h: 8.08 }],   // Assembly / Parliamentary Constituency
    [{ page: 0, x: 79.41, y: 24.24, w: 15.36, h: 12.48 }],   // Photograph
    [{ page: 0, x: 2.12, y: 22.1, w: 76.31, h: 21.62 }],   // Name (item 1)
    [{ page: 0, x: 2.12, y: 44.08, w: 93.46, h: 12.48 }],   // Name of one relative (item 2)
    [{ page: 0, x: 2.12, y: 57.98, w: 79.58, h: 6.89 }],   // Mobile number and email (items 3 and 4)
    [{ page: 0, x: 2.12, y: 64.87, w: 75.49, h: 6.42 }],   // Aadhaar details (item 5)
    [{ page: 0, x: 2.12, y: 71.64, w: 64.87, h: 2.26 }],   // Gender (item 6)
    [{ page: 0, x: 2.12, y: 74.02, w: 93.46, h: 13.54 }],   // Date of birth and age proof (item 7)
    [{ page: 0, x: 2.12, y: 87.56, w: 92.97, h: 8.67 }, { page: 1, x: 2.12, y: 6.18, w: 93.46, h: 18.18 }],   // Present ordinary residence and address proof (item 8)
    [{ page: 1, x: 2.12, y: 25.43, w: 94.28, h: 6.3 }],   // Disability (item 9, optional)
    [{ page: 1, x: 2.12, y: 32.08, w: 94.61, h: 7.84 }],   // Family member already on the voter list (item 10)
    [{ page: 1, x: 2.12, y: 40.63, w: 94.28, h: 23.52 }],   // Declaration
    [{ page: 1, x: 2.12, y: 64.16, w: 94.28, h: 3.33 }],   // Signature / left-hand thumb impression, date and place
    [{ page: 1, x: 2.12, y: 83.52, w: 94.61, h: 10.46 }]    // Acknowledgement / receipt
  ]
};
