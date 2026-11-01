// Page images: (1) Know Your Customer (KYC) Form, Form KYC Version 3 - 2014-IOC/BPC/HPC, page 1 of the official PDF (https://pmuy.gov.in/docs/KYC.pdf);
// (2) HPCL Format for Declaration for a new LPG connection (https://www.hindustanpetroleum.com/images/pdf/Declaration_for_NC.pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["lpg-kyc"] = {
  pages: ["forms/img/lpg-kyc-1.jpg", "forms/img/lpg-kyc-2.jpg"],
  spots: [
    [{ page: 0, x: 80.85, y: 0.48, w: 17.98, h: 15.08 }],   // Photograph
    [{ page: 0, x: 13.11, y: 7.36, w: 58.83, h: 11.04 }],   // Name (1a)
    [{ page: 0, x: 2.69, y: 19.24, w: 56.14, h: 2.73 }],   // Gas Consumer Number (1b)
    [{ page: 0, x: 59.33, y: 18.88, w: 39.67, h: 4.28 }],   // Date of Birth (1c)
    [{ page: 0, x: 2.69, y: 23.28, w: 92.95, h: 4.75 }],   // Close Relative (1d)
    [{ page: 0, x: 2.02, y: 29.57, w: 41.01, h: 2.26 }],   // Proof of Address category code
    [{ page: 0, x: 2.02, y: 31.83, w: 93.45, h: 10.21 }],   // Address for LPG connection
    [{ page: 0, x: 2.02, y: 41.92, w: 93.45, h: 4.28 }],   // Phone and email
    [{ page: 0, x: 2.02, y: 46.55, w: 94.96, h: 7.6 }],   // Proof of Identity (3a)
    [{ page: 0, x: 2.02, y: 54.15, w: 94.96, h: 5.7 }, { page: 1, x: 7.39, y: 32.78, w: 81.01, h: 9.86 }],   // Ration card details (3b) and declaration point 4
    [{ page: 0, x: 3.7, y: 61.04, w: 93.28, h: 12.71 }],   // KYC declaration, name and signature
    [{ page: 0, x: 3.7, y: 73.87, w: 94.96, h: 25.18 }],   // Distributor section and acknowledgement
    [{ page: 1, x: 7.39, y: 3.33, w: 81.01, h: 22.68 }, { page: 1, x: 6.72, y: 78.15, w: 81.68, h: 10.1 }],   // New-connection declaration: details, points 1-2, signature
    [{ page: 1, x: 7.39, y: 26.13, w: 81.01, h: 6.53 }, { page: 1, x: 7.39, y: 42.64, w: 81.01, h: 33.61 }]    // Declaration point 3 (household) and points 5-11
  ]
};
