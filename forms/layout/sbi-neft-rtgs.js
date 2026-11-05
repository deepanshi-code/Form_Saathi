// Page images, cropped to the printed area: (1) front of SBI "Application for RTGS / NEFT Remittance" with counterfoil,
// (2) the "Conditions for Transfer" overleaf, from the official PDF
// https://sbi.bank.in/documents/70137/0/010725-RTGS+NEFT+REQUISITION+FORM.pdf (last modified 31-07-2024).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page image.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["sbi-neft-rtgs"] = {
  pages: ["forms/img/sbi-neft-rtgs-1.jpg", "forms/img/sbi-neft-rtgs-2.jpg"],
  spots: [
    [{ page: 0, x: 54.86, y: 5.85, w: 43.57, h: 4.09 }],   // NEFT/RTGS tick and Date
    [{ page: 0, x: 31.85, y: 10.53, w: 66.58, h: 3.16 }],   // Branch and Branch Code
    [{ page: 0, x: 26.52, y: 13.92, w: 71.91, h: 3.04 }],   // Please remit the sum of
    [{ page: 0, x: 26.52, y: 17.08, w: 71.91, h: 8.77 }],   // Debit account and mode
    [{ page: 0, x: 26.52, y: 26.2, w: 71.91, h: 2.92 }],   // Name of Beneficiary
    [{ page: 0, x: 26.52, y: 29.36, w: 71.91, h: 2.69 }],   // Beneficiary Bank & Branch
    [{ page: 0, x: 26.52, y: 31.93, w: 35.67, h: 4.21 }],   // IFSC
    [{ page: 0, x: 26.52, y: 36.14, w: 67.02, h: 9.12 }],   // Beneficiary account no
    [{ page: 0, x: 26.52, y: 47.37, w: 69.72, h: 6.78 }, { page: 0, x: 26.52, y: 76.37, w: 69.4, h: 7.02 }],   // LEI numbers
    [{ page: 0, x: 26.52, y: 54.39, w: 40.94, h: 14.27 }],   // Amounts in figures
    [{ page: 0, x: 26.52, y: 70.53, w: 72.54, h: 3.04 }],   // Total in words
    [{ page: 0, x: 26.52, y: 73.68, w: 72.54, h: 2.57 }],   // Name of Applicant
    [{ page: 0, x: 26.52, y: 83.51, w: 71.91, h: 5.73 }],   // Address, mobile, tel
    [{ page: 0, x: 57.87, y: 93.45, w: 40.69, h: 6.08 }, { page: 1, x: 1.0, y: 8.03, w: 97.7, h: 76.62 }, { page: 1, x: 41.0, y: 93.66, w: 23.0, h: 4.93 }],   // Signature and T&C
    [{ page: 0, x: 1.0, y: 2.11, w: 22.95, h: 74.74 }],   // Counterfoil
    [{ page: 0, x: 26.52, y: 89.47, w: 27.15, h: 7.02 }, { page: 0, x: 1.0, y: 77.19, w: 22.95, h: 5.85 }]    // Office use UTR
  ]
};
