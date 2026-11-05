// Page image: page 1 of EPFO's Composite Claim Form (Aadhaar), Form 19 / 10C / 31
// (https://pmvbry-cdn.epfindia.gov.in/wp-content/uploads/2026/02/Form_CCF_aadhar.pdf). Pages 2-3 are instructions only.
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["epf-composite-claim"] = {
  pages: ["forms/img/epf-composite-claim-1.jpg"],
  spots: [
    [{ page: 0, x: 4.97, y: 18.9, w: 90.02, h: 2.94 }],   // Claim applied for (1)
    [{ page: 0, x: 4.97, y: 21.88, w: 90.02, h: 2.14 }],   // Name of the member (2)
    [{ page: 0, x: 4.97, y: 24.08, w: 90.02, h: 2.42 }],   // Father's / Husband's name (3)
    [{ page: 0, x: 4.97, y: 26.55, w: 90.02, h: 2.42 }],   // UAN and PF account no. (4)
    [{ page: 0, x: 4.97, y: 29.02, w: 90.02, h: 1.49 }],   // Aadhaar number (5)
    [{ page: 0, x: 4.97, y: 30.56, w: 90.02, h: 1.56 }],   // Date of joining (6)
    [{ page: 0, x: 4.97, y: 32.16, w: 46.27, h: 2.76 }, { page: 0, x: 51.63, y: 32.34, w: 41.83, h: 31.91 }],   // Purpose of PF advance (7a, table)
    [{ page: 0, x: 8.25, y: 35.71, w: 42.99, h: 2.18 }],   // Amount (7b)
    [{ page: 0, x: 8.25, y: 38.1, w: 42.99, h: 26.16 }],   // Payee for housing advance (7c)
    [{ page: 0, x: 4.97, y: 64.31, w: 90.02, h: 2.14 }],   // Date of leaving service (8)
    [{ page: 0, x: 4.97, y: 66.5, w: 90.02, h: 4.53 }],   // PAN and Form 15G/15H (9a)
    [{ page: 0, x: 4.97, y: 71.03, w: 90.02, h: 8.19 }],   // Reason of leaving service (9b)
    [{ page: 0, x: 4.97, y: 79.28, w: 90.02, h: 5.31 }],   // Full postal address and PIN (10)
    [{ page: 0, x: 1.63, y: 85.02, w: 97.06, h: 12.7 }],   // Declaration, cheque, signature
    [{ page: 0, x: 60.29, y: 4.32, w: 38.28, h: 3.53 }]    // Mobile number and e-mail
  ]
};
