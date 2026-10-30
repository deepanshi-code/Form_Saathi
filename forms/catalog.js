// Short names and icons for the home page cards. Kept separate from the form files
// so the verified form content never has to change for a design tweak.
window.CATALOG = {
  "sbi-account-opening":     { icon: "bank",        short: { en: "SBI account",          hi: "एसबीआई खाता" } },
  "pnb-account-opening":     { icon: "bank",        short: { en: "PNB account",          hi: "पीएनबी खाता" } },
  "bob-account-opening":     { icon: "bank",        short: { en: "Bank of Baroda account", hi: "बैंक ऑफ़ बड़ौदा खाता" } },
  "hdfc-account-opening":    { icon: "bank",        short: { en: "HDFC Bank account",    hi: "एचडीएफसी बैंक खाता" } },
  "post-office-savings":     { icon: "post",        short: { en: "Post Office savings",  hi: "डाकघर बचत खाता" } },
  "pmjdy-account":           { icon: "bank",        short: { en: "Jan Dhan account",     hi: "जन धन खाता" } },
  "pan-application":         { icon: "card",        short: { en: "PAN card",             hi: "पैन कार्ड" } },
  "aadhaar-update":          { icon: "fingerprint", short: { en: "Aadhaar",              hi: "आधार" } },
  "voter-id-form-6":         { icon: "ballot",      short: { en: "New voter ID",         hi: "नया वोटर आईडी" } },
  "voter-id-form-8":         { icon: "ballot",      short: { en: "Voter ID change",      hi: "वोटर आईडी में बदलाव" } },
  "learner-licence":         { icon: "car",         short: { en: "Learner's licence",    hi: "लर्नर लाइसेंस" } },
  "passport-fresh":          { icon: "passport",    short: { en: "Passport",             hi: "पासपोर्ट" } },
  "uk-income-certificate":   { icon: "certificate", short: { en: "Income certificate",   hi: "आय प्रमाण पत्र" } },
  "uk-caste-certificate":    { icon: "certificate", short: { en: "Caste certificate",    hi: "जाति प्रमाण पत्र" } },
  "uk-domicile-certificate": { icon: "home",        short: { en: "Residence certificate", hi: "स्थायी निवास प्रमाण पत्र" } },
  "nsp-scholarship":         { icon: "cap",         short: { en: "Scholarship (NSP)",    hi: "छात्रवृत्ति (NSP)" } },
  "pm-vidyalaxmi-loan":      { icon: "rupee",       short: { en: "Education loan",       hi: "शिक्षा ऋण" } },
  "ugc-anti-ragging":        { icon: "shield",      short: { en: "Anti-ragging",         hi: "एंटी-रैगिंग" } }
};

// Filter chips on the home page. A chip can cover more than one form category.
window.CHIPS = [
  { key: "all",         label: { en: "All",         hi: "सभी" } },
  { key: "bank",        label: { en: "Bank",        hi: "बैंक" },       categories: ["Bank"] },
  { key: "gov",         label: { en: "Government",  hi: "सरकारी" },     categories: ["Government"] },
  { key: "students",    label: { en: "Students",    hi: "छात्र" },      categories: ["Scholarship", "College"] },
  { key: "uttarakhand", label: { en: "Uttarakhand", hi: "उत्तराखंड" },  categories: ["Uttarakhand"] }
];
