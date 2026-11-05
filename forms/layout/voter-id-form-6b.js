// Page image: ECI Form-6B, Letter of Information of Aadhaar number for the purpose of electoral roll authentication (English, PDF dated 12-08-2022), page 1 of the official PDF (https://voters.eci.gov.in/formspdf/Form_6B_English.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["voter-id-form-6b"] = {
  pages: ["forms/img/voter-id-form-6b-1.jpg"],
  spots: [
    [{ page: 0, x: 5.44, y: 15.38, w: 89.3, h: 2.29 }],   // Name of elector (top line)
    [{ page: 0, x: 5.44, y: 17.98, w: 89.3, h: 2.23 }],   // Assembly / Parliamentary Constituency
    [{ page: 0, x: 5.44, y: 20.58, w: 61.93, h: 2.6 }],   // EPIC number
    [{ page: 0, x: 8.33, y: 29.01, w: 75.0, h: 3.22 }],   // Option (i): Aadhaar number
    [{ page: 0, x: 8.33, y: 33.97, w: 81.14, h: 4.22 }],   // Option (ii): I don't have an Aadhaar number
    [{ page: 0, x: 12.72, y: 40.61, w: 76.75, h: 40.48 }],   // Alternative document (tick any one)
    [{ page: 0, x: 52.46, y: 83.2, w: 42.11, h: 2.48 }],   // Signature of the elector
    [{ page: 0, x: 50.88, y: 86.05, w: 43.68, h: 4.96 }],   // Name and e-mail ID / mobile number of the elector
    [{ page: 0, x: 5.44, y: 91.63, w: 27.19, h: 5.39 }]    // Place and date
  ]
};
