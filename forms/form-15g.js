// Checked against "FORM NO. 121 [See rule 211] Declaration under section 393(6) for receipt of certain
// incomes without deduction of tax" (Part A, Declaration and printed Notes 1-14), as published by IDBI Bank
// (idbi.bank.in, PDF file dated 30-03-2026) and compared with the copies published by IndusInd Bank
// (file dated 04-04-2026) and HDFC Bank's deposits form centre (file dated 30-03-2026); the wording of
// Part A and the Notes is the same in all three. The Income Tax Department's own Form 121 page
// (incometaxindia.gov.in, "Form No. 121 (Earlier Form Nos. 15G & 15H)") could not be downloaded.
// Renumbering checked against the e-Filing portal's "Form Mapping Guide - Income-tax Act, 1961 to
// Income-tax Act, 2025" (incometax.gov.in, file dated 15-06-2026), which maps Form 121 to the old
// Forms 15G and 15H. Every statement below comes from those documents. If something is not stated
// in them, the guide says "ask your bank / post office" instead of guessing.

window.FORMS.push({
  id: "form-15g",
  verified: true,
  source: {
    title: "Form No. 121 (Rule 211, Income-tax Rules, 2026): Declaration under section 393(6) for receipt of certain incomes without deduction of tax (copy published by IDBI Bank, file dated 30-03-2026); renumbering per the e-Filing portal's Form Mapping Guide (15-06-2026)",
    url: "https://www.idbi.bank.in/pdf/Form-121.pdf"
  },
  caution: {
    en: "From 1 April 2026 the old Form 15G (and Form 15H for senior citizens) has been replaced by one form, Form No. 121, according to the Income Tax e-Filing portal's Form Mapping Guide (June 2026). The form text here was read from bank copies (IDBI, IndusInd, HDFC) because the Income Tax Department's own PDF could not be opened. The documents we read do not say whether a bank may still accept an old Form 15G, and they state no income limit in rupees. Ask your bank / post office which form they want and whether you qualify.",
    hi: "आयकर ई-फ़ाइलिंग पोर्टल की फ़ॉर्म मैपिंग गाइड (जून 2026) के अनुसार 1 अप्रैल 2026 से पुराने फॉर्म 15G (और वरिष्ठ नागरिकों के फॉर्म 15H) की जगह एक ही फॉर्म आ गया है: फॉर्म नंबर 121। यहाँ फॉर्म का पाठ बैंकों (IDBI, IndusInd, HDFC) की कॉपी से पढ़ा गया है, क्योंकि आयकर विभाग की अपनी PDF खुल नहीं पाई। हमने जो दस्तावेज़ पढ़े, उनमें यह नहीं लिखा कि बैंक अब भी पुराना फॉर्म 15G ले सकता है या नहीं, और न ही रुपये में कोई आय सीमा लिखी है। कौन-सा फॉर्म चाहिए और आप इसके योग्य हैं या नहीं, यह अपने बैंक / डाकघर से पूछें।"
  },
  lastChecked: "2026-11-01",

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "Form 121 (No TDS on Interest, earlier Form 15G)", hi: "फॉर्म 121 (ब्याज पर टीडीएस नहीं, पहले फॉर्म 15G)" },
  about: {
    en: "A self-declaration you give to your bank or post office so that it pays you interest without cutting tax from it. In it you declare that the tax on your estimated total income for the year will be nil. It is Form No. 121 under the Income-tax Rules, 2026, which replaced the old Forms 15G and 15H. You fill Part A and the Declaration; Part B is filled by the bank / post office. It can also be used for some other incomes, such as dividends or rent from a specified person (Note 5). A company or a firm cannot use it (Note 3).",
    hi: "यह एक स्व-घोषणा (self-declaration) है जो आप अपने बैंक या डाकघर को देते हैं, ताकि वह आपके ब्याज में से टैक्स काटे बिना पूरा ब्याज दे। इसमें आप घोषणा करते हैं कि साल की आपकी अनुमानित कुल आय पर टैक्स शून्य (nil) होगा। यह आयकर नियम, 2026 का फॉर्म नंबर 121 है, जिसने पुराने फॉर्म 15G और 15H की जगह ली है। आप भाग A (Part A) और घोषणा (Declaration) भरते हैं; भाग B बैंक / डाकघर भरता है। इसे कुछ और आय के लिए भी इस्तेमाल किया जा सकता है, जैसे डिविडेंड या किसी तय व्यक्ति से मिलने वाला किराया (नोट 5)। कोई कंपनी या फ़र्म इसे इस्तेमाल नहीं कर सकती (नोट 3)।"
  },

  fields: [
    {
      label: { en: "1. Name", hi: "1. नाम" },
      quick: { en: "Full first, middle and last name, no short forms", hi: "पहला, बीच का और आख़िरी नाम पूरा लिखें, छोटा रूप नहीं" },
      meaning: { en: "Your name, as the person giving the declaration (the \"declarant\").", hi: "आपका नाम, यानी घोषणा देने वाले व्यक्ति (\"declarant\") का नाम।" },
      write: {
        en: "Note 1 says: for an individual, give the first, middle and last name in full, without any abbreviations (short forms).",
        hi: "नोट 1 के अनुसार: व्यक्ति (individual) के लिए पहला, बीच का और आख़िरी नाम पूरा लिखें, बिना किसी छोटे रूप (abbreviation) के।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing initials like \"R.K.\" instead of the full name"],
        hi: ["पूरे नाम की जगह \"R.K.\" जैसे initials लिखना"]
      }
    },
    {
      label: { en: "2. Address", hi: "2. पता" },
      quick: { en: "Full address: flat, road, post office, area, district, state, PIN", hi: "पूरा पता: मकान, सड़क, डाकघर, इलाका, ज़िला, राज्य, पिन" },
      meaning: { en: "Your address.", hi: "आपका पता।" },
      write: {
        en: "Note 2 says the address must have all of these: Country/Region, Flat/Door/Building, Road/Street/Block/Sector, PIN/ZIP Code, Post Office, Area/Locality, District and State.",
        hi: "नोट 2 के अनुसार पते में ये सब होना चाहिए: देश/क्षेत्र, फ़्लैट/मकान/बिल्डिंग, सड़क/गली/ब्लॉक/सेक्टर, पिन कोड, डाकघर, इलाका, ज़िला और राज्य।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving out the Post Office, District or PIN code"],
        hi: ["डाकघर, ज़िला या पिन कोड छोड़ देना"]
      }
    },
    {
      label: { en: "3. Permanent Account Number (PAN)", hi: "3. स्थायी खाता संख्या (पैन)" },
      quick: { en: "Your 10-character PAN, exactly as on your PAN card", hi: "अपना 10 अक्षरों वाला पैन, बिल्कुल पैन कार्ड जैसा" },
      meaning: { en: "Your PAN. The same PAN is written again in the Declaration at the end.", hi: "आपका पैन। यही पैन आख़िर में घोषणा (Declaration) में दोबारा लिखा जाता है।" },
      write: {
        en: "Copy your PAN carefully from your PAN card. The form has no separate box for people without a PAN; if you do not have one, ask your bank / post office.",
        hi: "पैन कार्ड से अपना पैन ध्यान से लिखें। फॉर्म में बिना पैन वालों के लिए कोई अलग खाना नहीं है; अगर आपके पास पैन नहीं है, तो अपने बैंक / डाकघर से पूछें।"
      },
      documents: { en: ["Your PAN card (to copy the number correctly)"], hi: ["आपका पैन कार्ड (नंबर सही लिखने के लिए)"] },
      mistakes: {
        en: ["A wrong letter or digit in the PAN", "Writing a different PAN here and in the Declaration"],
        hi: ["पैन में कोई अक्षर या अंक ग़लत लिखना", "यहाँ और घोषणा में अलग-अलग पैन लिखना"]
      }
    },
    {
      label: { en: "4. Status", hi: "4. स्थिति (Status)" },
      quick: { en: "What kind of person you are; ask bank for exact word", hi: "आप किस तरह के व्यक्ति हैं; सही शब्द बैंक से पूछें" },
      meaning: {
        en: "What kind of \"person\" is giving the declaration. Note 3 says it can be given by an individual who is a resident, or by any other person that is not a company or a firm.",
        hi: "घोषणा देने वाला किस तरह का \"व्यक्ति\" है। नोट 3 के अनुसार इसे निवासी (resident) व्यक्ति दे सकता है, या कोई और व्यक्ति जो कंपनी या फ़र्म न हो।"
      },
      write: {
        en: "The form's notes do not list the exact words to write here. Ask your bank / post office what to write.",
        hi: "फॉर्म के नोट्स में यह नहीं बताया कि यहाँ ठीक कौन-सा शब्द लिखना है। क्या लिखें, यह अपने बैंक / डाकघर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Filling this form for a company or a firm (Note 3 does not allow it)"],
        hi: ["कंपनी या फ़र्म के लिए यह फॉर्म भरना (नोट 3 इसकी इजाज़त नहीं देता)"]
      }
    },
    {
      label: { en: "5 & 5(a). Residential status and age 60 or more", hi: "5 और 5(a). निवास की स्थिति और 60 साल या ज़्यादा उम्र" },
      quick: { en: "Resident / Non-resident / Not ordinarily resident; age 60+: Yes/No", hi: "Resident / Non-resident / Not ordinarily resident; 60+ उम्र: Yes/No" },
      meaning: {
        en: "Item 5: your residential status. Item 5(a): if you are a resident individual, whether your age is 60 years or more.",
        hi: "खाना 5: आपकी निवास की स्थिति। खाना 5(a): अगर आप निवासी व्यक्ति हैं, तो क्या आपकी उम्र 60 साल या उससे ज़्यादा है।"
      },
      write: {
        en: "Note 4: write one of (i) Resident, (ii) Non-resident, (iii) Resident but not ordinarily resident. In 5(a) write Yes or No. Some bank copies print it as \"60 years or more at any time during the tax year\". The form does not explain how to decide your residential status; if unsure, ask your bank / post office.",
        hi: "नोट 4: इनमें से एक लिखें: (i) Resident, (ii) Non-resident, (iii) Resident but not ordinarily resident। 5(a) में Yes या No लिखें। कुछ बैंकों की कॉपी में यह \"टैक्स वर्ष के दौरान किसी भी समय 60 साल या ज़्यादा\" छपा है। अपनी निवास स्थिति कैसे तय करें, यह फॉर्म में नहीं बताया; पक्का न हो तो अपने बैंक / डाकघर से पूछें।"
      },
      changed: {
        en: "Changed from 1 April 2026: earlier there were two forms, 15G (below 60) and 15H (senior citizens). The e-Filing portal's Form Mapping Guide shows both replaced by Form 121, so the form now simply asks your age in 5(a).",
        hi: "1 अप्रैल 2026 से बदला: पहले दो फॉर्म थे, 15G (60 साल से कम) और 15H (वरिष्ठ नागरिक)। ई-फ़ाइलिंग पोर्टल की फ़ॉर्म मैपिंग गाइड में दोनों की जगह फॉर्म 121 दिखाया गया है, इसलिए अब फॉर्म 5(a) में सिर्फ़ आपकी उम्र पूछता है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing more than one residential status", "Leaving 5(a) blank"],
        hi: ["एक से ज़्यादा निवास स्थिति लिखना", "5(a) खाली छोड़ना"]
      }
    },
    {
      label: { en: "6 & 7. Email id and Contact number", hi: "6 और 7. ईमेल आईडी और संपर्क नंबर" },
      quick: { en: "Your email; country code and phone number in two boxes", hi: "अपना ईमेल; देश का कोड और फ़ोन नंबर दो खानों में" },
      meaning: { en: "How you can be contacted.", hi: "आपसे संपर्क करने का तरीका।" },
      write: {
        en: "Write your email id. The contact number has two boxes; the bank copies label them Country Code and Number.",
        hi: "अपना ईमेल आईडी लिखें। संपर्क नंबर के दो खाने हैं; बैंकों की कॉपी में इन पर Country Code (देश का कोड) और Number लिखा है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the country code and number together in one box"],
        hi: ["देश का कोड और नंबर एक ही खाने में साथ लिख देना"]
      }
    },
    {
      label: { en: "8. Tax Year (for which declaration is made)", hi: "8. टैक्स वर्ष (जिसके लिए घोषणा दी जा रही है)" },
      quick: { en: "The tax year of this declaration; ask bank if unsure", hi: "इस घोषणा का टैक्स वर्ष; पक्का न हो तो बैंक से पूछें" },
      meaning: { en: "The year for which you want interest paid without tax being cut.", hi: "वह साल जिसके लिए आप चाहते हैं कि ब्याज में से टैक्स न कटे।" },
      write: {
        en: "Write the tax year. The same year goes in the blanks of the Declaration. IDBI Bank's copy has 2026-27 printed as the tax year in the bank's part (Part B). If you are unsure which year to write, ask your bank / post office.",
        hi: "टैक्स वर्ष लिखें। यही साल घोषणा (Declaration) की खाली जगहों में भी जाता है। IDBI बैंक की कॉपी में बैंक वाले हिस्से (भाग B) में टैक्स वर्ष 2026-27 छपा है। कौन-सा साल लिखें, पक्का न हो तो अपने बैंक / डाकघर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing a different year here and in the Declaration"],
        hi: ["यहाँ और घोषणा में अलग-अलग साल लिखना"]
      }
    },
    {
      label: { en: "9. Nature of income", hi: "9. आय का प्रकार" },
      quick: { en: "Type of income, e.g. interest from bank / post office deposit", hi: "आय का प्रकार, जैसे बैंक / डाकघर जमा पर ब्याज" },
      meaning: {
        en: "What kind of income this declaration is for. Note 5 lists the incomes it can be used for, including interest from a bank, a co-operative bank, or a post office deposit under a scheme notified by the Central Government.",
        hi: "यह घोषणा किस तरह की आय के लिए है। नोट 5 में वे आय लिखी हैं जिनके लिए यह फॉर्म चलता है, जिनमें बैंक, सहकारी बैंक या केंद्र सरकार की अधिसूचित योजना वाली डाकघर जमा पर मिलने वाला ब्याज भी है।"
      },
      write: {
        en: "Write the type of income. Other incomes in Note 5: provident fund balance paid to an employee, insurance commission, rent from a specified person, mutual fund units, life insurance policy payments, and dividends.",
        hi: "आय का प्रकार लिखें। नोट 5 में और आय भी हैं: कर्मचारी को मिलने वाला प्रोविडेंट फ़ंड का बकाया, बीमा कमीशन, किसी तय व्यक्ति से किराया, म्यूचुअल फ़ंड यूनिट, जीवन बीमा पॉलिसी का भुगतान, और डिविडेंड।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving it blank"],
        hi: ["खाना खाली छोड़ना"]
      }
    },
    {
      label: { en: "10. Estimated income for which declaration is made", hi: "10. अनुमानित आय जिसके लिए घोषणा दी जा रही है" },
      quick: { en: "Expected amount of this income (e.g. interest) in rupees", hi: "इस आय (जैसे ब्याज) की अनुमानित रकम रुपये में" },
      meaning: { en: "How much of this income (for example, interest from this bank) you expect to get in the year.", hi: "साल में इस आय (जैसे इस बैंक से ब्याज) की कितनी रकम मिलने की उम्मीद है।" },
      write: {
        en: "Write the amount in rupees (Note 14). If you don't know the expected interest, ask your bank / post office.",
        hi: "रकम रुपये में लिखें (नोट 14)। अनुमानित ब्याज कितना होगा, यह पता न हो तो अपने बैंक / डाकघर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the deposit amount instead of the income (interest) amount"],
        hi: ["आय (ब्याज) की जगह जमा की गई रकम लिख देना"]
      }
    },
    {
      label: { en: "11, 11(a) & 11(b). Other Form 121 filed this year", hi: "11, 11(a) और 11(b). इस साल भरे गए दूसरे फॉर्म 121" },
      quick: { en: "Yes/No; if Yes, number of earlier forms and their total income", hi: "Yes/No; Yes हो तो पहले के फॉर्म कितने और उनकी कुल आय" },
      meaning: {
        en: "Whether you have already given Form 121 elsewhere in the same tax year (for example, at another bank).",
        hi: "क्या आपने इसी टैक्स वर्ष में कहीं और (जैसे किसी दूसरे बैंक में) पहले भी फॉर्म 121 दिया है।"
      },
      write: {
        en: "In 11 write Yes or No. Note 6: if Yes, write in 11(a) how many such forms you filed earlier, and in 11(b) the total amount of income for which they were filed.",
        hi: "खाना 11 में Yes या No लिखें। नोट 6: अगर Yes है, तो 11(a) में लिखें कि पहले ऐसे कितने फॉर्म दिए, और 11(b) में वह कुल आय जिसके लिए वे फॉर्म दिए गए थे।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing No when you have already given the form at another bank or post office"],
        hi: ["दूसरे बैंक या डाकघर में फॉर्म दे चुके हों, फिर भी No लिखना"]
      }
    },
    {
      label: { en: "12. Aggregate amount of income for which declaration is made", hi: "12. कुल आय जिसके लिए घोषणा दी गई" },
      quick: { en: "Add item 10 and item 11(b)", hi: "खाना 10 और खाना 11(b) को जोड़ें" },
      meaning: { en: "The total income covered by this form plus your earlier Form 121s in the same tax year.", hi: "इस फॉर्म और इसी टैक्स वर्ष के पहले वाले फॉर्म 121 में दिखाई गई कुल आय।" },
      write: {
        en: "The form says: the sum of column 10 and 11(b). If you filed no earlier form, this is the same as item 10. Note 11: if you are below 60, the bank must not accept the form if this kind of income in the year is more than the maximum amount not chargeable to tax. The form does not give that amount; ask your bank / post office.",
        hi: "फॉर्म में लिखा है: खाना 10 और 11(b) का जोड़। अगर पहले कोई फॉर्म नहीं दिया, तो यह खाना 10 जितना ही होगा। नोट 11: अगर आपकी उम्र 60 से कम है, तो साल में इस तरह की आय टैक्स-मुक्त अधिकतम सीमा से ज़्यादा होने पर बैंक फॉर्म स्वीकार नहीं करेगा। फॉर्म में वह रकम नहीं दी गई; अपने बैंक / डाकघर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Forgetting to add the income from earlier forms (11(b))"],
        hi: ["पहले वाले फॉर्म की आय (11(b)) जोड़ना भूल जाना"]
      }
    },
    {
      label: { en: "13. Estimated total income of the tax year", hi: "13. टैक्स वर्ष की अनुमानित कुल आय" },
      quick: { en: "All your expected income this year, including item 12", hi: "इस साल की आपकी पूरी अनुमानित आय, खाना 12 समेत" },
      meaning: {
        en: "Your estimated total income for the whole tax year, including the income in item 12. Note 9: the bank is to accept the declaration where the tax on this total income will be nil.",
        hi: "पूरे टैक्स वर्ष की आपकी अनुमानित कुल आय, खाना 12 वाली आय समेत। नोट 9: जब इस कुल आय पर टैक्स शून्य (nil) होगा, तब बैंक घोषणा स्वीकार करेगा।"
      },
      write: {
        en: "Note 7: include this declaration's income and earlier declarations' income. Note 10: work it out after deductions under Chapter VIII of the Act, set-off of loss under \"Income from house property\", and the rebate under section 156. If you are unsure how to work this out, ask your bank / post office.",
        hi: "नोट 7: इस घोषणा की आय और पहले की घोषणाओं की आय भी जोड़ें। नोट 10: इसे अधिनियम के अध्याय VIII की छूट (deductions), \"मकान से आय\" (house property) के घाटे का समायोजन और धारा 156 की रिबेट घटाने के बाद निकालें। इसे कैसे निकालें, पक्का न हो तो अपने बैंक / डाकघर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing only the bank interest and leaving out your other income", "Giving the form when the tax on your total income will not be nil"],
        hi: ["सिर्फ़ बैंक का ब्याज लिखना और बाक़ी आय छोड़ देना", "कुल आय पर टैक्स शून्य न होने पर भी फॉर्म देना"]
      }
    },
    {
      label: { en: "14. Details of last ITR filed for previous two tax years", hi: "14. पिछले दो टैक्स वर्षों का आख़िरी आयकर रिटर्न (ITR)" },
      quick: { en: "For up to two years: tax year, acknowledgment number, return income", hi: "दो साल तक: टैक्स वर्ष, पावती (acknowledgment) नंबर, रिटर्न वाली आय" },
      meaning: { en: "Details of the income tax returns (ITR) you filed for the previous two tax years.", hi: "पिछले दो टैक्स वर्षों में भरे गए आपके आयकर रिटर्न (ITR) की जानकारी।" },
      write: {
        en: "The table has two rows. In each, write the Tax Year, the Acknowledgment Number and the Return Income. The form does not say what to write if you have never filed a return; ask your bank / post office.",
        hi: "तालिका में दो पंक्तियाँ हैं। हर पंक्ति में टैक्स वर्ष, पावती (Acknowledgment) नंबर और रिटर्न वाली आय (Return Income) लिखें। अगर आपने कभी रिटर्न नहीं भरा, तो क्या लिखें, यह फॉर्म में नहीं बताया; अपने बैंक / डाकघर से पूछें।"
      },
      documents: { en: ["Your ITR acknowledgment(s), if you filed returns"], hi: ["आपके ITR की पावती, अगर रिटर्न भरा है"] },
      mistakes: {
        en: ["Writing the wrong acknowledgment number"],
        hi: ["ग़लत पावती (acknowledgment) नंबर लिखना"]
      }
    },
    {
      label: { en: "Declaration, Place, Date and Signature", hi: "घोषणा, स्थान, तारीख़ और हस्ताक्षर" },
      quick: { en: "Your name, PAN, tax year in blanks; place, date, signature", hi: "खाली जगहों में नाम, पैन, टैक्स वर्ष; फिर स्थान, तारीख़, हस्ताक्षर" },
      meaning: {
        en: "Your promise that the details are true and that the tax on your estimated total income (item 13) will be nil. Point (iv), that item 12 is not more than the maximum amount not chargeable to tax, does not apply to a resident individual aged 60 or more.",
        hi: "आपका वादा कि सारी जानकारी सही है और आपकी अनुमानित कुल आय (खाना 13) पर टैक्स शून्य होगा। बिंदु (iv), कि खाना 12 की आय टैक्स-मुक्त अधिकतम सीमा से ज़्यादा नहीं है, 60 साल या ज़्यादा उम्र के निवासी व्यक्ति पर लागू नहीं होता।"
      },
      write: {
        en: "Fill your name and PAN in the first line and the tax year in points (iii) and (iv). Then write the Place and Date, sign as \"Signature of the Declarant\" and write your name. Note 12: check that everything is true before signing.",
        hi: "पहली पंक्ति में अपना नाम और पैन, और बिंदु (iii) व (iv) में टैक्स वर्ष लिखें। फिर स्थान (Place) और तारीख़ (Date) लिखें, \"Signature of the Declarant\" पर हस्ताक्षर करें और अपना नाम लिखें। नोट 12: हस्ताक्षर से पहले जाँच लें कि सब कुछ सही है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the tax year blanks in points (iii) and (iv) empty", "Signing a false declaration: Note 12 says this can lead to prosecution under section 482"],
        hi: ["बिंदु (iii) और (iv) में टैक्स वर्ष की जगह खाली छोड़ना", "ग़लत घोषणा पर हस्ताक्षर करना: नोट 12 के अनुसार इस पर धारा 482 के तहत मुक़दमा हो सकता है"]
      }
    }
  ]
});
