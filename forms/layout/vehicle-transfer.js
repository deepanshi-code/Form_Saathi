// Page images: (1) Form 29 "Notice of Transfer of Ownership of a Motor Vehicle" [Rule 55(1)], parivahan.gov.in
// (https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-29.pdf); (2) and (3) Form 30 "Application for
// Intimation and Transfer of Ownership of Motor Vehicle" [Rule 55(2) and (3)], pages 1-2
// (https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-30.pdf). Both PDFs made 03-04-2023.
// One row of spots per field, in the same order as the form's `fields`. Positions in % of the page.
window.LAYOUT = window.LAYOUT || {};
window.LAYOUT["vehicle-transfer"] = {
  pages: ["forms/img/vehicle-transfer-1.jpg", "forms/img/vehicle-transfer-2.jpg", "forms/img/vehicle-transfer-3.jpg"],
  spots: [
    [{ page: 0, x: 11.13, y: 21.20, w: 80.61, h: 5.53 }],   // 1 Form 29: To the Registering Authority (buyer's area)
    [{ page: 0, x: 11.13, y: 26.92, w: 81.04, h: 1.72 }, { page: 0, x: 11.13, y: 28.64, w: 7.30, h: 1.66 }],   // 2 Form 29: Seller's name, place and date of sale
    [{ page: 0, x: 18.43, y: 28.64, w: 73.74, h: 1.66 }, { page: 0, x: 11.13, y: 30.30, w: 75.83, h: 1.66 }],   // 3 Form 29: Vehicle number, make, chassis and engine number
    [{ page: 0, x: 86.96, y: 30.30, w: 5.22, h: 1.66 }, { page: 0, x: 11.13, y: 31.96, w: 81.04, h: 1.66 }, { page: 0, x: 11.13, y: 33.62, w: 41.65, h: 1.66 }],   // 4 Form 29: Buyer's name, relation and address
    [{ page: 0, x: 52.78, y: 33.62, w: 34.17, h: 1.66 }, { page: 0, x: 11.13, y: 35.28, w: 41.04, h: 1.66 }, { page: 0, x: 11.13, y: 45.61, w: 23.65, h: 3.87 }],   // 5 Form 29: Financier (hire-purchase/lease/hypothecation) and consent
    [{ page: 0, x: 11.13, y: 37.06, w: 81.04, h: 8.30 }, { page: 0, x: 11.13, y: 49.91, w: 81.04, h: 3.56 }],   // 6 Form 29: Declarations, date and seller's signature
    [{ page: 0, x: 11.13, y: 54.21, w: 81.04, h: 9.28 }],   // 7 Form 29: Buyer's acknowledgement and copy to seller's RTO
    [{ page: 0, x: 11.13, y: 63.68, w: 81.48, h: 11.19 }, { page: 0, x: 11.13, y: 76.71, w: 51.48, h: 5.53 }],   // 8 Form 29: Office endorsement and return to seller
    [{ page: 1, x: 11.13, y: 26.92, w: 81.04, h: 12.11 }],   // 9 Form 30 Part I: To the Registering Authority, seller's name and address
    [{ page: 1, x: 11.13, y: 39.21, w: 81.04, h: 8.60 }],   // 10 Form 30 Part I: Sale declaration
    [{ page: 1, x: 11.13, y: 48.06, w: 81.91, h: 17.09 }],   // 11 Form 30 Part I: RC not suspended, NOC, date and signature
    [{ page: 1, x: 11.13, y: 65.64, w: 81.48, h: 7.19 }],   // 12 Form 30 Part II: Buyer's name, age, mobile and address
    [{ page: 1, x: 11.13, y: 73.02, w: 81.04, h: 3.69 }],   // 13 Form 30 Part II: Nominee
    [{ page: 1, x: 11.13, y: 76.83, w: 81.04, h: 18.32 }],   // 14 Form 30 Part II: Purchase declaration, date and signature
    [{ page: 2, x: 11.13, y: 9.22, w: 81.04, h: 16.78 }, { page: 2, x: 11.13, y: 51.51, w: 81.04, h: 5.96 }],   // 15 Form 30: Consent of the financier and specimen signatures
    [{ page: 2, x: 11.13, y: 26.12, w: 82.78, h: 18.25 }]    // 16 Form 30: Office endorsement
  ]
};
