// Checked against these official Passport Seva (Ministry of External Affairs) documents and pages:
// 1. "Instructions for Filling of Passport Application Form and Supplementary Form", Instruction Booklet V3.0
//    (21 pages, in use from 1 July 2026): https://www.passportindia.gov.in/AppOnlineProject/pdf/ApplicationformInstructionBooklet-V3.0.pdf
//    Used for: Column 1.2 / 1.3 (re-issue reasons), Table 2 (II) "Re-issue of Passport" cases, Table 3 documents,
//    Table 4 fee list, Annexure F (lost/damaged) and Annexure J (joint photo declaration).
// 2. Passport Seva portal, "Process to apply for Fresh / Reissue Ordinary Passport": https://www.passportindia.gov.in/psp/Apply
// 3. Passport Seva Document Advisor, "Document Required for Re-issue of Passport": https://www.passportindia.gov.in/psp/docAdvisor/reissuePassport
// 4. Passport Seva Fee Calculator (Passport > Reissue > 18 years and above), checked 7 Nov 2026: https://www.passportindia.gov.in/psp/FeeCalculator
// 5. Passport Seva "Process to apply for Tatkaal Passport" (ineligible categories, undertaking): https://www.passportindia.gov.in/psp/TatkaalPassports
// 6. Passport Seva ePassport FAQ: https://services1.passportindia.gov.in/psp/FaqEPassport
// The application is filled online on passportindia.gov.in, so this guide has no page images.
// Column numbers are the booklet's column numbers. Where these sources do not answer something,
// the guide says "ask at the Passport Seva Kendra" instead of guessing.

window.FORMS.push({
  id: "passport-reissue",
  verified: true,
  source: {
    title: "Passport Seva: Instruction Booklet V3.0 (from 1 July 2026), Re-issue Document Advisor and Fee Calculator on passportindia.gov.in",
    url: "https://www.passportindia.gov.in/AppOnlineProject/pdf/ApplicationformInstructionBooklet-V3.0.pdf"
  },
  caution: {
    en: "Passport fees were revised from 1 July 2026; older websites and videos show old fees. Apply only on passportindia.gov.in or the official Passport Seva app: the Ministry warns about fake look-alike sites that charge extra. ePassports (with a chip and a small gold symbol on the cover) are being rolled out office by office; your current passport stays valid until its expiry date, and you do not have to replace it just to get an ePassport.",
    hi: "पासपोर्ट फ़ीस 1 जुलाई 2026 से बदल गई है; पुरानी वेबसाइटों और वीडियो में पुरानी फ़ीस दिखती है। आवेदन सिर्फ़ passportindia.gov.in या आधिकारिक Passport Seva ऐप पर करें: मंत्रालय ने नकली मिलती-जुलती वेबसाइटों से सावधान किया है जो ज़्यादा पैसे लेती हैं। ई-पासपोर्ट (चिप वाला, कवर पर छोटा सुनहरा निशान) एक-एक पासपोर्ट ऑफ़िस में शुरू हो रहा है; आपका मौजूदा पासपोर्ट अपनी समाप्ति तिथि तक वैध रहेगा, सिर्फ़ ई-पासपोर्ट के लिए उसे बदलवाना ज़रूरी नहीं।"
  },
  lastChecked: "2026-11-07",

  category: { en: "International", hi: "विदेश" },
  name: { en: "Passport Re-issue (Renewal)", hi: "पासपोर्ट री-इश्यू (नवीनीकरण)" },
  about: {
    en: "Re-issue means getting a new passport in place of the one you already have: because it has expired or is about to, its pages are full, you want to change details in it (for example your surname or address after marriage), or it is damaged or lost. You fill the same Passport Application Form online on passportindia.gov.in, then pay, book an appointment and visit a Passport Seva Kendra (PSK) or Post Office PSK with your old passport and documents. Re-issue is not accepted at District Passport Cells, Speed Post Centres or CSCs. What you write is printed in the new passport, so check every spelling. Giving false information is an offence under Section 12 of the Passports Act, 1967.",
    hi: "री-इश्यू यानी पुराने पासपोर्ट की जगह नया पासपोर्ट लेना: क्योंकि वह ख़त्म हो गया है या होने वाला है, उसके पेज भर गए हैं, आपको उसमें कोई जानकारी बदलवानी है (जैसे शादी के बाद उपनाम या पता), या वह ख़राब हो गया या खो गया है। इसके लिए passportindia.gov.in पर वही पासपोर्ट आवेदन फॉर्म ऑनलाइन भरते हैं, फिर फ़ीस भरकर अपॉइंटमेंट लेते हैं और पुराने पासपोर्ट व दस्तावेज़ों के साथ पासपोर्ट सेवा केंद्र (PSK) या डाकघर PSK जाते हैं। री-इश्यू के आवेदन ज़िला पासपोर्ट सेल, स्पीड पोस्ट केंद्र या CSC पर नहीं लिए जाते। जो लिखेंगे वही नए पासपोर्ट पर छपेगा, इसलिए हर स्पेलिंग जाँचें। गलत जानकारी देना पासपोर्ट अधिनियम, 1967 की धारा 12 के तहत अपराध है।"
  },

  fields: [
    {
      label: { en: "Applying for: Re-issue, and the reason (Column 1.1, 1.2)", hi: "आवेदन किसके लिए: री-इश्यू, और उसका कारण (खाना 1.1, 1.2)" },
      quick: { en: "Choose Re-issue, then every reason that applies (expiry, pages, change...)", hi: "Re-issue चुनें, फिर जो भी कारण लागू हों (समाप्ति, पेज, बदलाव...)" },
      meaning: {
        en: "Re-issue is for anyone who already holds or held an Indian passport. The reasons on the portal are: validity due to expire, validity expired, exhaustion of pages, renewal of a short validity passport, lost/stolen passport, damaged passport, and change in existing personal particulars. You can pick more than one.",
        hi: "री-इश्यू उनके लिए है जिनके पास पहले से भारतीय पासपोर्ट है या था। पोर्टल पर कारण हैं: वैधता ख़त्म होने वाली है, वैधता ख़त्म हो गई, पेज भर गए, कम अवधि वाले पासपोर्ट (SVP) का नवीनीकरण, पासपोर्ट खोया/चोरी हुआ, पासपोर्ट ख़राब हुआ, और मौजूदा जानकारी में बदलाव। एक से ज़्यादा कारण चुन सकते हैं।"
      },
      write: {
        en: "Choose \"Re-issue of Passport\" and every reason that fits. The booklet says if your passport expired less than 3 years ago (or is about to expire), fresh police verification is not needed, provided your earlier police report was clear and there is no adverse entry. If it expired more than 3 years ago, choose \"Validity Expired\" anyway; police verification may then be needed. In most re-issue cases the booklet says no police verification or only post-issue verification is needed, except a lost passport or a complete change of name.",
        hi: "\"Re-issue of Passport\" चुनें और जो भी कारण लागू हों, सब चुनें। बुकलेट के अनुसार अगर पासपोर्ट 3 साल से कम पहले ख़त्म हुआ है (या होने वाला है), तो नई पुलिस जाँच नहीं होती, बशर्ते पिछली पुलिस रिपोर्ट साफ़ हो और सिस्टम में कोई प्रतिकूल प्रविष्टि न हो। अगर 3 साल से ज़्यादा पहले ख़त्म हुआ है, तब भी \"Validity Expired\" ही चुनें; तब पुलिस जाँच हो सकती है। बुकलेट के अनुसार ज़्यादातर री-इश्यू में पुलिस जाँच नहीं होती या पासपोर्ट मिलने के बाद होती है; खोए पासपोर्ट और पूरा नाम बदलने के मामले इसके अपवाद हैं।"
      },
      documents: {
        en: ["Old passport in original, with self-attested photocopies of its first two and last two pages, the ECR/Non-ECR page, any observation page, and the validity extension page if it was a short validity passport (Document No. 5)"],
        hi: ["पुराना पासपोर्ट ओरिजिनल, साथ में उसके पहले दो और आख़िरी दो पेज, ECR/Non-ECR वाला पेज, कोई टिप्पणी (observation) वाला पेज, और कम अवधि वाले पासपोर्ट में वैधता बढ़ाने वाला पेज, इन सबकी स्व-सत्यापित फ़ोटोकॉपी (दस्तावेज़ संख्या 5)"]
      },
      mistakes: {
        en: ["Choosing \"Fresh Passport\" when you already had a passport", "Choosing only \"Expiry\" when you also want to change your address or name", "Going to a CSC or Speed Post Centre for re-issue (only fresh applications are taken there)"],
        hi: ["पहले पासपोर्ट होते हुए भी \"Fresh Passport\" चुनना", "पता या नाम भी बदलवाना हो पर सिर्फ़ \"Expiry\" चुनना", "री-इश्यू के लिए CSC या स्पीड पोस्ट केंद्र जाना (वहाँ सिर्फ़ नए पासपोर्ट के आवेदन लिए जाते हैं)"]
      }
    },
    {
      label: { en: "Change in existing personal particulars (Column 1.3)", hi: "मौजूदा जानकारी में बदलाव (खाना 1.3)" },
      quick: { en: "Mark what changes; bring that change's proof, e.g. marriage certificate", hi: "जो बदलना है उस पर निशान; उस बदलाव का सबूत लाएँ, जैसे विवाह प्रमाणपत्र" },
      meaning: {
        en: "If the new passport should show something different from the old one, mark the reason here. Booklet Table 2 lists cases such as: change of surname after marriage, addition or deletion of spouse name, minor spelling change, major change of name, change of address, date or place of birth, father's/mother's name, appearance, signature, sex, and ECR deletion.",
        hi: "अगर नए पासपोर्ट में पुराने से कुछ अलग छपना है, तो उसका कारण यहाँ चुनें। बुकलेट की तालिका 2 में ऐसे मामले हैं: शादी के बाद उपनाम बदलना, पति/पत्नी का नाम जोड़ना या हटाना, स्पेलिंग का छोटा बदलाव, नाम में बड़ा बदलाव, पता, जन्म तिथि या जन्म स्थान, पिता/माता का नाम, रूप (appearance), हस्ताक्षर, लिंग, और ECR हटवाना।"
      },
      write: {
        en: "Mark only the changes you really need and bring the proof for each. Small spelling fix that does not change how the name sounds: old passport only (Document 5). Major change of name: also two newspaper clippings or the Gazette notification (Document 13) and at least two public/school documents in the new name (Document 55); no Tatkaal. Change of date of birth: proof of date of birth (Document 2); the booklet says a court order is needed if the change is more than 2 years or documents conflict. Change of address: proof of the new address. ECR deletion: proof of a Non-ECR category (Document 3). For any other case, check the Document Advisor on the portal or ask at the PSK.",
        hi: "सिर्फ़ वही बदलाव चुनें जो सच में ज़रूरी हों, और हर एक का सबूत लाएँ। ऐसा छोटा स्पेलिंग सुधार जिससे नाम की आवाज़ न बदले: सिर्फ़ पुराना पासपोर्ट (दस्तावेज़ 5)। नाम में बड़ा बदलाव: साथ में दो अख़बारों की कटिंग या गज़ट अधिसूचना (दस्तावेज़ 13) और नए नाम वाले कम से कम दो सरकारी/स्कूल दस्तावेज़ (दस्तावेज़ 55); इसमें तत्काल नहीं। जन्म तिथि बदलना: जन्म तिथि का सबूत (दस्तावेज़ 2); बुकलेट के अनुसार बदलाव 2 साल से ज़्यादा हो या दस्तावेज़ आपस में मेल न खाएँ तो अदालत का आदेश चाहिए। पता बदलना: नए पते का सबूत। ECR हटवाना: Non-ECR श्रेणी का सबूत (दस्तावेज़ 3)। बाकी मामलों के लिए पोर्टल का Document Advisor देखें या PSK में पूछें।"
      },
      documents: {
        en: [
          "Surname change or adding spouse name after marriage: marriage certificate from the Registrar of Marriage (Document 14) OR Joint Photo Declaration signed by husband and wife (Annexure J)",
          "Deleting spouse name after divorce: Divorce Order/Decree",
          "Remarriage: divorce decree or death certificate for the first spouse, plus remarriage certificate or Annexure J",
          "The portal says a full change of name after marriage (not just surname) follows the normal name-change procedure"
        ],
        hi: [
          "शादी के बाद उपनाम बदलना या पति/पत्नी का नाम जोड़ना: विवाह रजिस्ट्रार का विवाह प्रमाणपत्र (दस्तावेज़ 14) या पति-पत्नी दोनों के हस्ताक्षर वाली संयुक्त फ़ोटो घोषणा (Annexure J)",
          "तलाक़ के बाद पति/पत्नी का नाम हटाना: तलाक़ का आदेश/डिक्री",
          "दूसरी शादी: पहले पति/पत्नी के लिए तलाक़ डिक्री या मृत्यु प्रमाणपत्र, साथ में दूसरी शादी का प्रमाणपत्र या Annexure J",
          "पोर्टल के अनुसार शादी के बाद पूरा नाम बदलना (सिर्फ़ उपनाम नहीं) सामान्य नाम-बदलाव की प्रक्रिया से होगा"
        ]
      },
      mistakes: {
        en: ["Treating a full name change after marriage like a simple surname change", "Choosing Tatkaal for a change of name, date/place of birth, parent's or spouse's name, sex, appearance or signature (not allowed)"],
        hi: ["शादी के बाद पूरा नाम बदलने को सिर्फ़ उपनाम बदलना समझ लेना", "नाम, जन्म तिथि/स्थान, माता-पिता या पति/पत्नी के नाम, लिंग, रूप या हस्ताक्षर बदलवाने में तत्काल चुनना (इनकी अनुमति नहीं)"]
      }
    },
    {
      label: { en: "Type of application: Normal or Tatkaal (Column 1.4)", hi: "आवेदन का प्रकार: सामान्य या तत्काल (खाना 1.4)" },
      quick: { en: "Normal unless urgent; Tatkaal costs Rs 2,500 more, not for all", hi: "जल्दी न हो तो Normal; तत्काल ₹2,500 ज़्यादा, और सबके लिए नहीं" },
      meaning: {
        en: "Tatkaal is the faster scheme. No proof of urgency is needed, but the fee is higher, police verification is done after issue, and extra identity documents are needed.",
        hi: "तत्काल जल्दी पासपोर्ट पाने की योजना है। जल्दी का कोई सबूत नहीं चाहिए, पर फ़ीस ज़्यादा है, पुलिस जाँच पासपोर्ट जारी होने के बाद होती है, और पहचान के अतिरिक्त दस्तावेज़ लगते हैं।"
      },
      write: {
        en: "Choose Normal unless you need the passport urgently. For re-issue, the portal says Tatkaal is NOT available for: any change in name, lost/stolen passport, passport damaged beyond recognition, renewal of a short validity passport, change in sex, appearance or signature, change of date or place of birth, change of father/mother/spouse name, present address outside the RPO's area, and pending criminal court cases. Tatkaal applicants must sign the \"Undertaking for Tatkaal Scheme\" (on the portal) and bring it to the appointment. A Tatkaal appointment can be rescheduled only once.",
        hi: "जल्दी न हो तो Normal चुनें। पोर्टल के अनुसार री-इश्यू में तत्काल इन मामलों में नहीं मिलता: नाम में कोई भी बदलाव, खोया/चोरी हुआ पासपोर्ट, पहचान से बाहर ख़राब पासपोर्ट, कम अवधि वाले पासपोर्ट का नवीनीकरण, लिंग, रूप या हस्ताक्षर बदलना, जन्म तिथि या जन्म स्थान बदलना, पिता/माता/पति-पत्नी का नाम बदलना, मौजूदा पता RPO के क्षेत्र से बाहर होना, और अदालत में आपराधिक मामला चलना। तत्काल वालों को पोर्टल पर दिया \"Undertaking for Tatkaal Scheme\" भरकर, हस्ताक्षर करके अपॉइंटमेंट पर लाना होता है। तत्काल अपॉइंटमेंट सिर्फ़ एक बार बदला जा सकता है।"
      },
      documents: {
        en: ["Tatkaal, age 18 and above: any three of: Aadhaar (PVC card, full original letter or digitally signed e-Aadhaar; small cut-out cards printed by others are not accepted); PAN card; student photo ID; birth certificate; ration card; last passport issued (re-issue only); Voter ID; driving licence of your state; bank/Kisan/Post Office passbook with photo and latest entry; SC/ST/OBC certificate; arms licence; pension documents; service photo ID", "Signed \"Undertaking for Tatkaal Scheme\""],
        hi: ["तत्काल, 18 साल या उससे ऊपर: इनमें से कोई तीन: आधार (PVC कार्ड, पूरा असली आधार पत्र या डिजिटल हस्ताक्षर वाला ई-आधार; दूसरों के छापे छोटे कटे कार्ड नहीं चलेंगे); पैन कार्ड; छात्र फ़ोटो पहचान पत्र; जन्म प्रमाणपत्र; राशन कार्ड; पिछला पासपोर्ट (सिर्फ़ री-इश्यू में); वोटर आईडी; अपने राज्य का ड्राइविंग लाइसेंस; फ़ोटो और ताज़ा एंट्री वाली बैंक/किसान/डाकघर पासबुक; SC/ST/OBC प्रमाणपत्र; शस्त्र लाइसेंस; पेंशन के दस्तावेज़; सर्विस फ़ोटो पहचान पत्र", "हस्ताक्षर किया हुआ \"Undertaking for Tatkaal Scheme\""]
      },
      mistakes: {
        en: ["Picking Tatkaal for a case that is not allowed under Tatkaal", "Forgetting the signed Tatkaal undertaking"],
        hi: ["ऐसे मामले में तत्काल चुनना जिसमें उसकी अनुमति नहीं", "तत्काल का हस्ताक्षर किया हुआ undertaking लाना भूल जाना"]
      }
    },
    {
      label: { en: "Passport booklet pages and fee (Column 1.5)", hi: "पासपोर्ट बुकलेट के पेज और फ़ीस (खाना 1.5)" },
      quick: { en: "36 pages Rs 2,500 or 60 pages Rs 3,500 (adult, Normal)", hi: "36 पेज ₹2,500 या 60 पेज ₹3,500 (वयस्क, सामान्य)" },
      meaning: {
        en: "How many pages you want in the new passport. More pages give more room for visas and stamps. The fee depends on the pages, the reason for re-issue and Normal/Tatkaal.",
        hi: "नए पासपोर्ट में कितने पेज चाहिए। ज़्यादा पेज में वीज़ा और मुहरों के लिए ज़्यादा जगह होती है। फ़ीस पेज, री-इश्यू के कारण और सामान्य/तत्काल पर निर्भर करती है।"
      },
      write: {
        en: "The official Fee Calculator (checked 7 Nov 2026, adult re-issue, 10-year validity) gives: expiry, pages exhausted, or change of particulars/ECR deletion: 36 pages Rs 2,500, 60 pages Rs 3,500. Lost or damaged passport: 36 pages Rs 5,000, 60 pages Rs 6,000. Tatkaal adds Rs 2,500 to any of these (for example Rs 5,000 for 36 pages on expiry). The fee is paid online before booking the appointment. The 10% discount for children up to 8 and people above 60 is for fresh passports only, not re-issue.",
        hi: "आधिकारिक फ़ीस कैलकुलेटर (7 नवंबर 2026 को देखा गया, वयस्क री-इश्यू, 10 साल वैधता) के अनुसार: समाप्ति, पेज भरना, या जानकारी बदलना/ECR हटवाना: 36 पेज ₹2,500, 60 पेज ₹3,500। खोया या ख़राब पासपोर्ट: 36 पेज ₹5,000, 60 पेज ₹6,000। तत्काल में इनमें से किसी पर भी ₹2,500 और जुड़ते हैं (जैसे समाप्ति पर 36 पेज के ₹5,000)। फ़ीस अपॉइंटमेंट बुक करने से पहले ऑनलाइन भरनी होती है। 8 साल तक के बच्चों और 60 से ऊपर वालों की 10% छूट सिर्फ़ नए पासपोर्ट पर है, री-इश्यू पर नहीं।"
      },
      changed: {
        en: "Changed from 1 July 2026: the old booklet (V2.9) listed Rs 1,500 for 36 pages, Rs 2,000 for 60 pages and Rs 2,000 extra for Tatkaal; the current booklet (V3.0) and the Fee Calculator show Rs 2,500, Rs 3,500 and Rs 2,500. Check the Fee Calculator on passportindia.gov.in before paying.",
        hi: "1 जुलाई 2026 से बदला: पुरानी बुकलेट (V2.9) में 36 पेज के ₹1,500, 60 पेज के ₹2,000 और तत्काल के ₹2,000 अलग से थे; मौजूदा बुकलेट (V3.0) और फ़ीस कैलकुलेटर में ₹2,500, ₹3,500 और ₹2,500 हैं। पैसे देने से पहले passportindia.gov.in पर फ़ीस कैलकुलेटर ज़रूर देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Going by pre-July 2026 fee figures", "Expecting the senior citizen 10% discount on a re-issue"],
        hi: ["जुलाई 2026 से पहले की फ़ीस मान लेना", "री-इश्यू पर वरिष्ठ नागरिक वाली 10% छूट की उम्मीद करना"]
      }
    },
    {
      label: { en: "Your name, other names, name change (Column 2.1–2.3)", hi: "आपका नाम, दूसरे नाम, नाम बदलना (खाना 2.1–2.3)" },
      quick: { en: "Name as wanted in new passport, full words; declare any change", hi: "नए पासपोर्ट में जैसा नाम चाहिए, पूरे शब्दों में; हर बदलाव बताएँ" },
      meaning: {
        en: "Surname is your family name; Given Name is the rest. 2.2 asks about an alias. 2.3 asks whether you ever changed your name, even slightly, including a woman changing her surname after marriage.",
        hi: "Surname यानी परिवार का नाम; Given Name यानी बाकी नाम। 2.2 दूसरे नाम (alias) के बारे में पूछता है। 2.3 पूछता है कि क्या आपने कभी नाम बदला, थोड़ा-सा भी, जिसमें शादी के बाद महिला का उपनाम बदलना भी शामिल है।"
      },
      write: {
        en: "Write your name as you want it in the new passport, in full words: no initials and no titles like Doctor or Major. If you do not use a surname, leave Surname blank. If the name differs from your old passport in any way, answer Yes to 2.3, give the old name in the previous-name details, and mark the change in Column 1.3 with its proof.",
        hi: "नाम वैसा लिखें जैसा नए पासपोर्ट में चाहिए, पूरे शब्दों में: शुरुआती अक्षर (initials) नहीं और डॉक्टर या मेजर जैसी उपाधि नहीं। उपनाम नहीं लगाते तो Surname खाली छोड़ें। अगर नाम पुराने पासपोर्ट से किसी भी तरह अलग है, तो 2.3 में Yes करें, पुराना नाम पिछले नाम (previous name) वाली जानकारी में लिखें, और खाना 1.3 में बदलाव चुनकर उसका सबूत लगाएँ।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Changing the spelling without declaring it as a change", "Writing initials instead of the full name", "Answering No to 2.3 after a surname change at marriage"],
        hi: ["स्पेलिंग बदल देना पर उसे बदलाव के रूप में न बताना", "पूरे नाम की जगह initials लिखना", "शादी पर उपनाम बदलने के बाद भी 2.3 में No करना"]
      }
    },
    {
      label: { en: "Date and place of birth (Column 2.4, 2.5)", hi: "जन्म तिथि और जन्म स्थान (खाना 2.4, 2.5)" },
      quick: { en: "Same as old passport unless correcting it with proof", hi: "पुराने पासपोर्ट जैसा ही, जब तक सबूत के साथ सुधार न करवा रहे हों" },
      meaning: {
        en: "Your date of birth (DD-MM-YYYY) and place of birth. Born in India: village/town, district and State. Born abroad: only the country.",
        hi: "आपकी जन्म तिथि (DD-MM-YYYY) और जन्म स्थान। भारत में जन्म: गाँव/शहर, ज़िला और राज्य। विदेश में जन्म: सिर्फ़ देश।"
      },
      write: {
        en: "Enter the same details as in your old passport. If you want to correct them, mark the change in Column 1.3. For a date of birth correction, bring a proof of date of birth (Document 2); the booklet says a First Class Judicial Magistrate / Sub-Divisional Magistrate civil court order is needed if the change is more than 2 years or your documents conflict. For a place of birth change, bring an affidavit giving the reason and proof of place of birth; a court order is needed if the State or country changes. Neither can be done under Tatkaal.",
        hi: "वही जानकारी भरें जो पुराने पासपोर्ट में है। सुधार करवाना है तो खाना 1.3 में बदलाव चुनें। जन्म तिथि सुधारने के लिए जन्म तिथि का सबूत (दस्तावेज़ 2) लाएँ; बुकलेट के अनुसार बदलाव 2 साल से ज़्यादा हो या दस्तावेज़ आपस में मेल न खाएँ, तो प्रथम श्रेणी न्यायिक मजिस्ट्रेट / उप-मंडल मजिस्ट्रेट सिविल कोर्ट का आदेश चाहिए। जन्म स्थान बदलने के लिए कारण बताने वाला हलफ़नामा और जन्म स्थान का सबूत लाएँ; राज्य या देश बदलता हो तो अदालत का आदेश चाहिए। इन दोनों में तत्काल नहीं मिलता।"
      },
      documents: {
        en: ["Only if correcting date of birth: one proof of date of birth, e.g. birth certificate from the Registrar of Births and Deaths, or school leaving/matriculation certificate"],
        hi: ["सिर्फ़ जन्म तिथि सुधारने पर: जन्म तिथि का एक सबूत, जैसे जन्म-मृत्यु रजिस्ट्रार का जन्म प्रमाणपत्र, या स्कूल छोड़ने/मैट्रिक का प्रमाणपत्र"]
      },
      mistakes: {
        en: ["Entering a date that differs from the old passport without asking for a correction", "Writing the month before the day"],
        hi: ["सुधार माँगे बिना पुराने पासपोर्ट से अलग तारीख़ भर देना", "दिन से पहले महीना लिखना"]
      }
    },
    {
      label: { en: "Non-ECR status and ECR deletion (Column 2.14, 2.15)", hi: "Non-ECR स्थिति और ECR हटवाना (खाना 2.14, 2.15)" },
      quick: { en: "Yes only if you have proof, e.g. 10th pass certificate", hi: "Yes तभी, जब सबूत हो, जैसे 10वीं पास का प्रमाणपत्र" },
      meaning: {
        en: "If your passport shows \"ECR\" (Emigration Check Required), you need clearance from the Protector of Emigrants before going to work in 18 listed countries (such as UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Malaysia). Non-ECR is not printed on the passport.",
        hi: "अगर पासपोर्ट पर \"ECR\" (इमिग्रेशन जाँच ज़रूरी) छपा है, तो 18 तय देशों (जैसे यूएई, सऊदी अरब, क़तर, कुवैत, ओमान, बहरीन, मलेशिया) में नौकरी के लिए जाने से पहले प्रोटेक्टर ऑफ़ इमिग्रेंट्स की मंज़ूरी चाहिए। Non-ECR पासपोर्ट पर नहीं छपता।"
      },
      write: {
        en: "Choose your highest qualification. Answer Yes to Non-ECR only if you fall in a listed category and can prove it: for example matriculation (10th) pass or above, age above 50, income-tax payer (not NIL returns), professional degree, recognised diploma, or stayed abroad more than 3 years in total. The booklet says children who had a short validity passport must give Non-ECR proof at re-issue after turning 18, or ECR will be stamped. The portal's Document Advisor lists Non-ECR proof as mandatory when you answer Yes. To remove ECR from your passport, choose ECR deletion as the change.",
        hi: "अपनी सबसे ऊँची पढ़ाई चुनें। Non-ECR में Yes तभी करें जब आप किसी तय श्रेणी में आते हों और सबूत दे सकें: जैसे मैट्रिक (10वीं) या उससे ज़्यादा पास, 50 साल से ज़्यादा उम्र, आयकर देने वाले (NIL रिटर्न नहीं), प्रोफ़ेशनल डिग्री, मान्य डिप्लोमा, या कुल मिलाकर 3 साल से ज़्यादा विदेश में रहे हों। बुकलेट के अनुसार जिन बच्चों के पास कम अवधि वाला पासपोर्ट था, उन्हें 18 के बाद री-इश्यू में Non-ECR का सबूत देना होगा, वरना ECR लग जाएगा। पोर्टल का Document Advisor Yes चुनने पर Non-ECR सबूत को ज़रूरी बताता है। पासपोर्ट से ECR हटवाना हो तो बदलाव में ECR deletion चुनें।"
      },
      documents: {
        en: ["Proof of your Non-ECR category (Document 3), e.g. 10th pass certificate or higher"],
        hi: ["अपनी Non-ECR श्रेणी का सबूत (दस्तावेज़ 3), जैसे 10वीं या उससे ऊपर पास होने का प्रमाणपत्र"]
      },
      mistakes: {
        en: ["Answering Yes without bringing proof", "Turning 18 and renewing a minor's passport without Non-ECR proof"],
        hi: ["सबूत लाए बिना Yes करना", "18 के बाद नाबालिग वाला पासपोर्ट Non-ECR सबूत के बिना री-इश्यू करवाना"]
      }
    },
    {
      label: { en: "Family details and spouse name (Column 3)", hi: "परिवार की जानकारी और पति/पत्नी का नाम (खाना 3)" },
      quick: { en: "Parents' names; spouse's name exactly as in spouse's passport", hi: "माता-पिता के नाम; पति/पत्नी का नाम उनके पासपोर्ट जैसा ही" },
      meaning: {
        en: "Names of your father, mother, legal guardian (if any) and spouse.",
        hi: "आपके पिता, माता, क़ानूनी अभिभावक (अगर हों) और पति/पत्नी के नाम।"
      },
      write: {
        en: "The booklet says: if your spouse has a passport, write the spouse's name as written in that passport. If you are adding a spouse name for the first time, mark \"Addition of spouse name\" in Column 1.3. A court decree/order is needed for a legal guardian. Changing a father's or mother's name is a separate change that needs proof and is not allowed under Tatkaal.",
        hi: "बुकलेट के अनुसार: अगर पति/पत्नी के पास पासपोर्ट है, तो उनका नाम वैसा ही लिखें जैसा उनके पासपोर्ट में है। पहली बार पति/पत्नी का नाम जोड़ रहे हैं तो खाना 1.3 में \"Addition of spouse name\" चुनें। क़ानूनी अभिभावक के लिए अदालत का आदेश/डिक्री चाहिए। पिता या माता का नाम बदलना अलग बदलाव है, जिसमें सबूत लगता है और तत्काल नहीं मिलता।"
      },
      documents: {
        en: ["Adding spouse name: marriage certificate (Document 14) or Joint Photo Declaration (Annexure J)", "Changing father's/mother's name: parent's passport with the changed name, or proof such as service record, pension order or property papers showing the parent changed the name"],
        hi: ["पति/पत्नी का नाम जोड़ना: विवाह प्रमाणपत्र (दस्तावेज़ 14) या संयुक्त फ़ोटो घोषणा (Annexure J)", "पिता/माता का नाम बदलना: बदले नाम वाला माता/पिता का पासपोर्ट, या सर्विस रिकॉर्ड, पेंशन आदेश, संपत्ति के कागज़ जैसा सबूत कि उन्होंने नाम बदला था"]
      },
      mistakes: {
        en: ["Spelling the spouse's name differently from the spouse's passport"],
        hi: ["पति/पत्नी का नाम उनके पासपोर्ट से अलग स्पेलिंग में लिखना"]
      }
    },
    {
      label: { en: "Present address and Passport Office (Column 4)", hi: "मौजूदा पता और पासपोर्ट ऑफ़िस (खाना 4)" },
      quick: { en: "Real current address; proof only if different from old passport", hi: "अभी का असली पता; सबूत तभी, जब पुराने पासपोर्ट से अलग हो" },
      meaning: {
        en: "Where you live now. Your Regional Passport Office (RPO) is chosen on the portal based on where you live.",
        hi: "आप अभी कहाँ रहते हैं। पोर्टल पर क्षेत्रीय पासपोर्ट ऑफ़िस (RPO) आपके रहने की जगह के हिसाब से चुना जाता है।"
      },
      write: {
        en: "Write your real present address; the booklet warns of a heavy penalty for false or hidden address details. Proof of address is needed only if it is different from the old passport; then also mark \"Change in current address\" in Column 1.3. The portal says if you want to re-issue from a different RPO than the one that issued your passport, create a new login ID (you can use the same email ID) and select that Passport Office.",
        hi: "अपना असली मौजूदा पता लिखें; बुकलेट चेतावनी देती है कि पते की गलत या छिपाई जानकारी पर भारी जुर्माना है। पते का सबूत तभी चाहिए जब पता पुराने पासपोर्ट से अलग हो; तब खाना 1.3 में \"Change in current address\" भी चुनें। पोर्टल के अनुसार अगर पासपोर्ट जारी करने वाले RPO से अलग RPO से री-इश्यू करवाना है, तो नया लॉगिन ID बनाएँ (वही ईमेल ID चल जाएगी) और वह पासपोर्ट ऑफ़िस चुनें।"
      },
      documents: {
        en: ["Only if address changed, one proof of present address: water, electricity, gas or telephone (landline/postpaid) bill; Aadhaar or e-Aadhaar; Voter ID; rent agreement; Income Tax Assessment Order; photo passbook of a running bank account (scheduled public/private Indian bank or RRB); spouse's passport (if same address); public limited company employer letter"],
        hi: ["सिर्फ़ पता बदला हो तो, मौजूदा पते का एक सबूत: पानी, बिजली, गैस या टेलीफ़ोन (लैंडलाइन/पोस्टपेड) बिल; आधार या ई-आधार; वोटर आईडी; किराया अनुबंध; आयकर निर्धारण आदेश; चालू बैंक खाते की फ़ोटो वाली पासबुक (सूचीबद्ध सरकारी/निजी भारतीय बैंक या RRB); पति/पत्नी का पासपोर्ट (अगर पता एक हो); पब्लिक लिमिटेड कंपनी का नियोक्ता पत्र"]
      },
      mistakes: {
        en: ["Keeping the old address in the form after moving", "Using the old login for a different RPO instead of creating a new one"],
        hi: ["घर बदलने के बाद भी फॉर्म में पुराना पता रखना", "अलग RPO के लिए नया लॉगिन बनाने की जगह पुराना ही इस्तेमाल करना"]
      }
    },
    {
      label: { en: "Emergency contact (Column 5)", hi: "आपातकालीन संपर्क (खाना 5)" },
      quick: { en: "Someone to contact in an emergency; unsure? Ask at PSK", hi: "आपात स्थिति में संपर्क वाला व्यक्ति; शक हो तो PSK में पूछें" },
      meaning: {
        en: "Details of a person who can be contacted in an emergency.",
        hi: "ऐसे व्यक्ति की जानकारी जिससे आपात स्थिति में संपर्क किया जा सके।"
      },
      write: {
        en: "The booklet calls this column \"Self Explanatory\" and gives no rules on whom to name. If unsure, ask at the Passport Seva Kendra.",
        hi: "बुकलेट इस खाने को सिर्फ़ \"Self Explanatory\" कहती है और किसका नाम दें, इसका कोई नियम नहीं बताती। शक हो तो पासपोर्ट सेवा केंद्र में पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "Previous passport details (Column 6.1)", hi: "पिछले पासपोर्ट की जानकारी (खाना 6.1)" },
      quick: { en: "Copy number and dates exactly from your latest passport", hi: "अपने आख़िरी पासपोर्ट से नंबर और तारीख़ें बिल्कुल वैसी ही लिखें" },
      meaning: {
        en: "For re-issue, the booklet says details of your latest held, existing, lost or damaged passport must be given here (on the portal this is the \"Previous Passport\" step).",
        hi: "बुकलेट के अनुसार री-इश्यू में आपके आख़िरी, मौजूदा, खोए या ख़राब पासपोर्ट की जानकारी यहाँ देनी ज़रूरी है (पोर्टल पर यह \"Previous Passport\" वाला चरण है)।"
      },
      write: {
        en: "Copy the details from the photo page of your latest passport carefully. If it is lost and you do not remember the details, you can attach a photocopy of its first two and last two pages if you have one (Document 29). Answer the other questions in Column 6 truthfully.",
        hi: "अपने आख़िरी पासपोर्ट के फ़ोटो वाले पेज से जानकारी ध्यान से उतारें। अगर पासपोर्ट खो गया है, तो उसके पहले दो और आख़िरी दो पेज की फ़ोटोकॉपी हो तो लगा सकते हैं (दस्तावेज़ 29)। खाना 6 के बाकी सवालों के सच्चे जवाब दें।"
      },
      documents: {
        en: ["Old passport in original with self-attested photocopies of the pages listed in Document 5"],
        hi: ["पुराना पासपोर्ट ओरिजिनल, दस्तावेज़ 5 में बताए पेजों की स्व-सत्यापित फ़ोटोकॉपी के साथ"]
      },
      mistakes: {
        en: ["Giving the details of an older passport instead of the latest one", "Typing the passport number wrong"],
        hi: ["आख़िरी की जगह उससे पुराने पासपोर्ट की जानकारी देना", "पासपोर्ट नंबर गलत लिखना"]
      }
    },
    {
      label: { en: "Lost, stolen or damaged passport", hi: "खोया, चोरी हुआ या ख़राब पासपोर्ट" },
      quick: { en: "Police report and Annexure F affidavit; Rs 5,000 for 36 pages", hi: "पुलिस रिपोर्ट और Annexure F हलफ़नामा; 36 पेज के ₹5,000" },
      meaning: {
        en: "If your passport is lost or stolen, the booklet says report it at once to the nearest police station and to the Passport Office (or Indian Mission, if abroad). A damaged passport is either damaged but recognisable (number readable, name legible, photo intact) or damaged beyond recognition.",
        hi: "बुकलेट के अनुसार पासपोर्ट खोने या चोरी होने पर तुरंत नज़दीकी थाने और पासपोर्ट ऑफ़िस (विदेश में हों तो भारतीय दूतावास) को बताएँ। ख़राब पासपोर्ट दो तरह का है: ख़राब पर पहचान में आने लायक (नंबर पढ़ा जाए, नाम साफ़ हो, फ़ोटो सही हो) या पहचान से बाहर ख़राब।"
      },
      write: {
        en: "Lost, stolen or damaged beyond recognition: bring the documents below; Tatkaal is not allowed, and the booklet says police verification is usually needed. Damaged but recognisable: old passport, proof of date of birth, and the Annexure F affidavit (and proof of address if it changed); Tatkaal is allowed. The Annexure F affidavit asks how, when and where the passport was lost or damaged, the FIR and police station, earlier losses, travel on that passport, and residence abroad. The booklet calls a duplicate passport a complex case taking about 30 days.",
        hi: "खोया, चोरी हुआ या पहचान से बाहर ख़राब: नीचे लिखे दस्तावेज़ लाएँ; तत्काल नहीं मिलता, और बुकलेट के अनुसार आमतौर पर पुलिस जाँच होती है। ख़राब पर पहचान लायक: पुराना पासपोर्ट, जन्म तिथि का सबूत, और Annexure F हलफ़नामा (पता बदला हो तो उसका सबूत भी); इसमें तत्काल मिल सकता है। Annexure F हलफ़नामे में पूछा जाता है कि पासपोर्ट कैसे, कब, कहाँ खोया या ख़राब हुआ, FIR किस थाने में हुई, पहले कितने पासपोर्ट खोए, उस पासपोर्ट पर यात्रा की या नहीं, और विदेश में रहने की जानकारी। बुकलेट डुप्लिकेट पासपोर्ट को जटिल मामला मानती है, जिसमें लगभग 30 दिन लगते हैं।"
      },
      documents: {
        en: ["Lost/stolen/damaged beyond recognition: proof of present address (Document 1), proof of date of birth (Document 2), police report in original (Document 28), photocopy of the old passport's first two and last two pages if available (Document 29), affidavit as per Annexure F (Document 49), plus other documents as for a fresh passport in your case"],
        hi: ["खोया/चोरी/पहचान से बाहर ख़राब: मौजूदा पते का सबूत (दस्तावेज़ 1), जन्म तिथि का सबूत (दस्तावेज़ 2), ओरिजिनल पुलिस रिपोर्ट (दस्तावेज़ 28), पुराने पासपोर्ट के पहले दो और आख़िरी दो पेज की फ़ोटोकॉपी अगर हो (दस्तावेज़ 29), Annexure F के अनुसार हलफ़नामा (दस्तावेज़ 49), साथ में आपके मामले में नए पासपोर्ट जैसे बाकी दस्तावेज़"]
      },
      mistakes: {
        en: ["Not reporting the loss to the police and Passport Office quickly (the holder is responsible for misuse)", "Choosing Tatkaal for a lost passport", "Paying the ordinary re-issue fee instead of the lost/damaged fee"],
        hi: ["पासपोर्ट खोने की ख़बर पुलिस और पासपोर्ट ऑफ़िस को जल्दी न देना (दुरुपयोग की ज़िम्मेदारी धारक की होती है)", "खोए पासपोर्ट के लिए तत्काल चुनना", "खोए/ख़राब वाली फ़ीस की जगह सामान्य री-इश्यू फ़ीस भरना"]
      }
    },
    {
      label: { en: "Other details: court cases (Column 7)", hi: "अन्य जानकारी: अदालती मामले (खाना 7)" },
      quick: { en: "Answer truthfully; pending case needs the court's travel permission", hi: "सच्चा जवाब दें; केस चल रहा हो तो अदालत की यात्रा अनुमति लगाएँ" },
      meaning: {
        en: "Questions about you, including criminal cases.",
        hi: "आपके बारे में सवाल, जिनमें आपराधिक मामलों के सवाल भी हैं।"
      },
      write: {
        en: "Answer every question truthfully; hiding information is an offence. If a criminal case is pending against you in any court, you must attach the court's written permission to travel abroad; the booklet says a short validity passport, normally for one year, is then issued. Such cases cannot use Tatkaal.",
        hi: "हर सवाल का सच्चा जवाब दें; जानकारी छिपाना अपराध है। अगर किसी अदालत में आप पर आपराधिक मामला चल रहा है, तो विदेश जाने की अदालत की लिखित अनुमति लगानी होगी; बुकलेट के अनुसार तब आमतौर पर एक साल का कम अवधि वाला पासपोर्ट मिलता है। ऐसे मामलों में तत्काल नहीं मिलता।"
      },
      documents: {
        en: ["If a criminal case is pending: the court's written permission to travel abroad"],
        hi: ["अगर आपराधिक मामला चल रहा है: विदेश जाने के लिए अदालत की लिखित अनुमति"]
      },
      mistakes: {
        en: ["Answering No to hide a pending case"],
        hi: ["चल रहे मामले को छिपाने के लिए No लिखना"]
      }
    },
    {
      label: { en: "Submit, pay, book appointment and visit the PSK", hi: "जमा करें, फ़ीस भरें, अपॉइंटमेंट लें और PSK जाएँ" },
      quick: { en: "Check preview, submit, pay online, then bring originals and photocopies", hi: "प्रीव्यू जाँचें, जमा करें, ऑनलाइन फ़ीस भरें, फिर ओरिजिनल व फ़ोटोकॉपी लाएँ" },
      meaning: {
        en: "After the last step the portal shows a passport preview. When you submit, you get an Application Reference Number (ARN). Payment must be made before an appointment can be booked.",
        hi: "आख़िरी चरण के बाद पोर्टल पासपोर्ट का प्रीव्यू दिखाता है। जमा करने पर एक Application Reference Number (ARN) मिलता है। अपॉइंटमेंट बुक करने से पहले फ़ीस भरना ज़रूरी है।"
      },
      write: {
        en: "Check the preview carefully: the portal says you cannot change the application after submitting. Then use \"Pay and Schedule Appointment\", choose Normal or Tatkaal quota and a PSK/POPSK, and pay online. Normal appointments can be rescheduled three times, Tatkaal once. If you do not visit the PSK within 90 days of submitting online, you must submit again. No photo is needed at a PSK/POPSK. Bring originals and one set of self-attested photocopies; originals are returned after checking.",
        hi: "प्रीव्यू ध्यान से जाँचें: पोर्टल के अनुसार जमा करने के बाद आवेदन में बदलाव नहीं हो सकता। फिर \"Pay and Schedule Appointment\" से Normal या Tatkaal कोटा और PSK/POPSK चुनें, और ऑनलाइन फ़ीस भरें। सामान्य अपॉइंटमेंट तीन बार और तत्काल एक बार बदला जा सकता है। ऑनलाइन जमा करने के 90 दिन के अंदर PSK नहीं गए तो फिर से आवेदन करना होगा। PSK/POPSK पर फ़ोटो नहीं चाहिए। ओरिजिनल दस्तावेज़ और उनकी स्व-सत्यापित फ़ोटोकॉपी का एक सेट लाएँ; जाँच के बाद ओरिजिनल लौटा दिए जाते हैं।"
      },
      documents: {
        en: ["Appointment confirmation", "Old passport (original) and the documents for your re-issue reason, with one set of self-attested photocopies"],
        hi: ["अपॉइंटमेंट की पुष्टि", "पुराना पासपोर्ट (ओरिजिनल) और आपके री-इश्यू कारण के दस्तावेज़, स्व-सत्यापित फ़ोटोकॉपी के एक सेट के साथ"]
      },
      mistakes: {
        en: ["Submitting without checking the preview", "Leaving the old passport at home", "Missing the 90-day window after online submission"],
        hi: ["प्रीव्यू जाँचे बिना जमा कर देना", "पुराना पासपोर्ट घर पर भूल जाना", "ऑनलाइन जमा करने के बाद 90 दिन की समय-सीमा निकल जाने देना"]
      }
    }
  ]
});
