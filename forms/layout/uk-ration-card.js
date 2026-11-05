// Page images: Food, Civil Supplies & Consumer Affairs Department, Uttarakhand, "Ration Card Application Form"
// (राशन कार्ड जाँच / आवेदन पत्र), official PDF from fcs.uk.gov.in Downloads
// (https://cdnbbsr.s3waas.gov.in/s38bdb5058376143fa358981954e7626b8/uploads/2025/02/20250213639436570.pdf).
// Page 2 is printed sideways in the PDF and is shown here turned upright (rotated 90 degrees).
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page image.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["uk-ration-card"] = {
  pages: ["forms/img/uk-ration-card-1.jpg", "forms/img/uk-ration-card-2.jpg"],
  spots: [
    [{ page: 0, x: 74.61, y: 4.6, w: 20.16, h: 16.8 }],   // Photo and signature of head
    [{ page: 0, x: 3.68, y: 18.4, w: 70.58, h: 2.0 }],   // Application no. and date
    [{ page: 0, x: 3.68, y: 21.15, w: 51.13, h: 2.45 }, { page: 0, x: 57.99, y: 21.4, w: 36.21, h: 1.7 }],   // Card type and BPL ID
    [{ page: 0, x: 3.68, y: 23.8, w: 49.36, h: 4.3 }],   // Head of family name, father/husband name
    [{ page: 0, x: 57.99, y: 23.8, w: 36.21, h: 4.5 }],   // Existing ration card no., annual income
    [{ page: 0, x: 3.68, y: 28.9, w: 73.06, h: 2.4 }],   // Residential status
    [{ page: 0, x: 3.68, y: 32.4, w: 90.52, h: 4.7 }],   // Gas connection
    [{ page: 0, x: 3.18, y: 37.25, w: 91.02, h: 11.15 }],   // Current address and mobile
    [{ page: 0, x: 3.18, y: 48.5, w: 91.02, h: 8.6 }],   // Permanent address
    [{ page: 0, x: 3.18, y: 57.1, w: 91.02, h: 8.3 }],   // Old address (transfer)
    [{ page: 0, x: 3.18, y: 65.5, w: 91.02, h: 5.4 }],   // Attached proofs
    [{ page: 0, x: 3.18, y: 71.0, w: 91.02, h: 11.6 }],   // Affidavit and signature
    [{ page: 0, x: 3.18, y: 83.75, w: 91.02, h: 8.75 }],   // Receipt
    [{ page: 1, x: 18.25, y: 6.01, w: 66.15, h: 57.99 }],   // Family members table
    [{ page: 1, x: 84.4, y: 6.01, w: 12.2, h: 56.58 }],   // Head voter ID, PAN, bank
    [{ page: 1, x: 21.0, y: 64.14, w: 74.0, h: 31.33 }]    // Office use
  ]
};
