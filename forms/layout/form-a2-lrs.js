// Page images: SBI Form A2, Application for Remittance Abroad, pages 1-2 of the official PDF
// (https://sbi.bank.in/documents/21077/23246/130720-Form+A2.pdf/47d0f735-f308-d156-1def-06df31bd2427?t=1594645039124).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["form-a2-lrs"] = {
  pages: ["forms/img/form-a2-lrs-1.jpg", "forms/img/form-a2-lrs-2.jpg"],
  spots: [
    [{ page: 0, x: 43.4, y: 10.6, w: 39.0, h: 14.7 }],   // Bank header boxes
    [{ page: 0, x: 9.0, y: 25.4, w: 75.8, h: 3.6 }],    // Name of applicant
    [{ page: 0, x: 9.0, y: 28.8, w: 75.8, h: 1.9 }],    // PAN
    [{ page: 0, x: 9.0, y: 30.4, w: 75.8, h: 1.9 }],    // Address
    [{ page: 0, x: 9.0, y: 32.1, w: 76.4, h: 5.1 }],    // AD branch
    [{ page: 0, x: 9.0, y: 37.0, w: 75.6, h: 3.4 }],    // Account to debit
    [{ page: 0, x: 9.0, y: 40.3, w: 73.2, h: 3.4 }],    // a) draft
    [{ page: 0, x: 9.0, y: 43.5, w: 71.0, h: 6.8 }],    // b) direct remittance
    [{ page: 0, x: 9.0, y: 50.1, w: 73.0, h: 6.7 }],    // c), d), amount, strike-out note
    [{ page: 0, x: 8.5, y: 56.7, w: 73.0, h: 8.2 }],    // LRS purpose table
    [{ page: 0, x: 9.0, y: 66.1, w: 82.0, h: 8.6 }],    // Import of services country
    [{ page: 0, x: 9.0, y: 75.9, w: 82.4, h: 15.2 }],   // Declaration
    [{ page: 1, x: 9.0, y: 5.6, w: 78.4, h: 11.2 }],    // LRS remittances this year
    [{ page: 1, x: 9.0, y: 17.9, w: 25.5, h: 5.4 }],    // Signature, name, date
    [{ page: 1, x: 9.0, y: 24.4, w: 82.4, h: 21.8 }]    // AD certificate
  ]
};
