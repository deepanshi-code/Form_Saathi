// Page images: HDFC Bank Account Opening Form for Resident Individuals (form code 92589/02.04.2026_M070), pages 1,2,3,4 of the official PDF (https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/pdf/forms-centre/personal-banking/account-openings/Account%20Opening%20Form%20-%20For%20Individuals%20(%20for%20opening%20Regular%20Savings%20Account,%20Basic%20Savings%20Bank%20Deposit%20Account,%20Individual%20Current%20Account).pdf).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["hdfc-account-opening"] = {
  pages: ["forms/img/hdfc-account-opening-1.jpg", "forms/img/hdfc-account-opening-2.jpg", "forms/img/hdfc-account-opening-3.jpg", "forms/img/hdfc-account-opening-4.jpg"],
  spots: [
      [{ page: 0, x: 1.34, y: 8.08, w: 97.94, h: 3.56 }],   // "Please open my / our" (account type)
      [{ page: 0, x: 1.34, y: 32.19, w: 97.94, h: 2.02 }],   // (B) Operating instruction
      [{ page: 0, x: 1.34, y: 12.23, w: 97.94, h: 7.13 }],   // (A) Applicant name
      [{ page: 0, x: 1.34, y: 27.08, w: 34.94, h: 4.99 }],   // Date of birth * and age proof
      [{ page: 0, x: 36.29, y: 27.08, w: 63.0, h: 4.99 }],   // Gender * and Mother's maiden name *
      [{ page: 0, x: 1.34, y: 19.96, w: 57.45, h: 5.11 }],   // PAN No. * (or Form 97)
      [{ page: 0, x: 59.13, y: 19.6, w: 40.15, h: 5.46 }, { page: 0, x: 1.34, y: 25.06, w: 97.94, h: 2.14 }],   // Aadhaar card no. and "Link with A/C for DBT"
      [{ page: 0, x: 1.34, y: 39.79, w: 97.94, h: 22.21 }],   // (D) Mailing address and permanent address
      [{ page: 0, x: 1.34, y: 83.5, w: 97.94, h: 10.93 }],   // (E) Contact details: mobile * and email *
      [{ page: 1, x: 1.34, y: 3.56, w: 97.94, h: 16.87 }],   // (F) Customer profile: occupation, income, source of funds
      [{ page: 1, x: 1.34, y: 38.01, w: 97.94, h: 10.45 }],   // (G) Politically Exposed Person (PEP) declaration
      [{ page: 1, x: 1.34, y: 48.58, w: 97.94, h: 11.17 }, { page: 3, x: 1.34, y: 27.32, w: 97.94, h: 3.8 }],   // (H) Payment details and minimum balance
      [{ page: 2, x: 1.34, y: 25.54, w: 97.94, h: 19.84 }, { page: 2, x: 1.34, y: 62.36, w: 97.94, h: 7.48 }],   // (M) Nomination (DA1)
      [{ page: 3, x: 7.39, y: 31.12, w: 19.99, h: 15.56 }, { page: 3, x: 72.57, y: 31.12, w: 19.82, h: 15.56 }, { page: 3, x: 1.34, y: 47.04, w: 97.94, h: 9.03 }]   // Photograph and signature
  ]
};
