// Checked against these official Government of Uttarakhand documents:
// 1. "आय प्रमाण पत्र के लिए आवेदन पत्र" (Income Certificate application form), District Almora website almora.nic.in
//    (Forms, page 3), PDF dated 13-03-2018, 1 page, text PDF:
//    https://cdn.s3waas.gov.in/s33a0772443a0739141292a5429b952fe6/uploads/2018/03/2018031686.pdf
// 2. Almora district service page "Income Certificate" (last updated 18-01-2020), which points to the state
//    e-District portal and to Tehsil offices and CSC centres.
// 3. The e-Services "Apuni Sarkar" portal (eservices.uk.gov.in), checked on 05-11-2026: the "Income Certificate"
//    service details card (Revenue Department, Revenue Certificates: CSC/EDC fee, timeline, required and optional
//    documents, officer flow) and the portal's FAQs page.
// Every statement below comes from one of those documents. The current online form behind the portal login could
// not be opened, and no official page says whose income is counted, which ID or address proofs are accepted, or how
// long the certificate is valid, so the guide says "ask at your Tehsil / CSC centre" for those points.

window.FORMS.push({
  id: "uk-income-certificate",
  verified: true,
  source: {
    title: "District Almora (almora.nic.in): Income Certificate application form (आय प्रमाण पत्र के लिए आवेदन पत्र), PDF dated 13-03-2018; also the Income Certificate service card on eservices.uk.gov.in (Apuni Sarkar)",
    url: "https://cdn.s3waas.gov.in/s33a0772443a0739141292a5429b952fe6/uploads/2018/03/2018031686.pdf"
  },
  lastChecked: "2026-11-05",
  caution: {
    en: "The official paper form we could find is from 2018 (District Almora website). Today most people apply on the Apuni Sarkar portal, whose online form could not be checked, so some boxes may look different. Confirm at your Tehsil or CSC centre.",
    hi: "हमें जो आधिकारिक काग़ज़ी फॉर्म मिला, वह 2018 का है (अल्मोड़ा ज़िले की वेबसाइट)। आजकल ज़्यादातर लोग अपणि सरकार पोर्टल पर आवेदन करते हैं, जिसका ऑनलाइन फॉर्म जाँचा नहीं जा सका, इसलिए कुछ खाने अलग दिख सकते हैं। अपनी तहसील या CSC केंद्र पर पुष्टि करें।"
  },

  category: { en: "Uttarakhand", hi: "उत्तराखंड" },
  name: { en: "Income Certificate (Uttarakhand)", hi: "आय प्रमाण पत्र (उत्तराखंड)" },
  about: {
    en: "The Income Certificate is a Revenue Department service in Uttarakhand. You apply on the state's Apuni Sarkar portal (eservices.uk.gov.in), at a CSC centre or at your Tehsil office. The portal's service card shows a CSC/EDC fee of ₹40 and an estimated completion time of 15 days; the application goes from the Tehsildar to the Patwari and back to the Tehsildar. This guide follows the one-page paper form published on the Almora district website in 2018, plus the steps and documents listed on the portal. For anything else, ask at your Tehsil / CSC centre or call the CM Helpline 1905.",
    hi: "आय प्रमाण पत्र उत्तराखंड के राजस्व विभाग की सेवा है। आवेदन राज्य के अपणि सरकार पोर्टल (eservices.uk.gov.in) पर, CSC केंद्र पर या अपनी तहसील में होता है। पोर्टल पर इस सेवा का CSC/EDC शुल्क ₹40 और अनुमानित समय 15 दिन लिखा है; आवेदन तहसीलदार से पटवारी के पास और फिर तहसीलदार के पास जाता है। यह गाइड 2018 में अल्मोड़ा ज़िले की वेबसाइट पर डाले गए एक पन्ने के काग़ज़ी फॉर्म, और पोर्टल पर लिखे चरणों व दस्तावेज़ों पर आधारित है। बाक़ी बातों के लिए अपनी तहसील / CSC केंद्र पर पूछें या सीएम हेल्पलाइन 1905 पर कॉल करें।"
  },

  fields: [
    {
      label: { en: "Where and how to apply", hi: "कहाँ और कैसे आवेदन करें" },
      quick: { en: "Apply on eservices.uk.gov.in, a CSC, or your Tehsil office", hi: "eservices.uk.gov.in पर, CSC केंद्र पर या अपनी तहसील में आवेदन करें" },
      meaning: {
        en: "The portal lists the service as \"Income Certificate\" (Revenue Department, Revenue Certificates). The Almora district page links to the state e-District portal and names \"Tehsil Office and CSC Centers\" as places to apply.",
        hi: "पोर्टल पर यह सेवा \"Income Certificate\" (आय प्रमाण पत्र) नाम से है (राजस्व विभाग, राजस्व प्रमाण पत्र)। अल्मोड़ा ज़िले की वेबसाइट राज्य के ई-डिस्ट्रिक्ट पोर्टल का लिंक देती है और आवेदन के लिए तहसील कार्यालय और CSC केंद्र बताती है।"
      },
      write: {
        en: "Online: open eservices.uk.gov.in, search \"Income\" and click Apply Now, which opens the login page. The portal FAQ says a new user should select new user, register and create an account; if you forget the password, click forgot password and enter your email ID. Keep your user ID and password private. Whether the Tehsil still accepts this paper form is not stated, so ask there.",
        hi: "ऑनलाइन: eservices.uk.gov.in खोलें, \"Income\" खोजें और Apply Now दबाएँ, जिससे लॉगिन पेज खुलता है। पोर्टल के FAQ के अनुसार नए उपयोगकर्ता को new user चुनकर रजिस्टर करना और खाता बनाना होता है; पासवर्ड भूल जाएँ तो forgot password दबाकर अपना ईमेल डालें। यूज़र आईडी और पासवर्ड किसी को न बताएँ। तहसील में यह काग़ज़ी फॉर्म अब भी लिया जाता है या नहीं, यह नहीं लिखा, इसलिए वहीं पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Applying on a private website that looks like the government portal", "Sharing your portal password with an agent or shopkeeper"],
        hi: ["सरकारी पोर्टल जैसी दिखने वाली किसी निजी वेबसाइट पर आवेदन करना", "अपना पोर्टल पासवर्ड किसी एजेंट या दुकानदार को बता देना"]
      }
    },
    {
      label: { en: "Applicant's name (नाम आवेदक)", hi: "आवेदक का नाम" },
      quick: { en: "Your full name, as on your ID proof", hi: "अपना पूरा नाम, जैसा पहचान पत्र में है" },
      meaning: {
        en: "The name of the person who is applying, that is, whose income certificate is needed.",
        hi: "आवेदन करने वाले व्यक्ति का नाम, यानी जिसका आय प्रमाण पत्र बनना है।"
      },
      write: {
        en: "Write your full name with the same spelling as on the ID proof you will upload, so the certificate matches your other documents.",
        hi: "अपना पूरा नाम उसी स्पेलिंग में लिखें जो आपके पहचान पत्र में है, जिसे आप अपलोड करेंगे, ताकि प्रमाण पत्र बाक़ी काग़ज़ों से मेल खाए।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Using a nickname or a spelling different from the ID proof"],
        hi: ["घर का नाम या पहचान पत्र से अलग स्पेलिंग लिखना"]
      }
    },
    {
      label: { en: "Father's / husband's name and mother's name", hi: "पिता / पति का नाम और माता का नाम" },
      quick: { en: "Father's (or husband's) full name, then mother's full name", hi: "पिता (या पति) का पूरा नाम, फिर माता का पूरा नाम" },
      meaning: {
        en: "The form has one row \"पिता/पति का नाम\" (father's / husband's name) and one row \"माता का नाम\" (mother's name).",
        hi: "फॉर्म में एक खाना \"पिता/पति का नाम\" और एक खाना \"माता का नाम\" है।"
      },
      write: {
        en: "In the first row write your father's name, or your husband's name if you are a married woman and want to give it. Write your mother's name in the next row. Use the same spellings as in the family's documents.",
        hi: "पहले खाने में पिता का नाम लिखें, या शादीशुदा महिला हों और चाहें तो पति का नाम। अगले खाने में माता का नाम लिखें। स्पेलिंग वही रखें जो परिवार के काग़ज़ों में है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the mother's name blank"],
        hi: ["माता का नाम ख़ाली छोड़ देना"]
      }
    },
    {
      label: { en: "Gender (लिंग आवेदक)", hi: "आवेदक का लिंग" },
      quick: { en: "Applicant's gender", hi: "आवेदक का लिंग" },
      meaning: {
        en: "The applicant's gender. On the form this box is shaded grey, like the other boxes where you pick from a fixed list; the choices are not printed on the form.",
        hi: "आवेदक का लिंग। फॉर्म में यह खाना स्लेटी रंग का है, जैसे बाक़ी वे खाने जिनमें तय सूची से चुनना होता है; विकल्प फॉर्म पर छपे नहीं हैं।"
      },
      write: {
        en: "Write or select your gender as on your ID proof.",
        hi: "अपना लिंग वैसा ही लिखें या चुनें जैसा पहचान पत्र में है।"
      },
      documents: { en: [], hi: [] },
      mistakes: { en: [], hi: [] }
    },
    {
      label: { en: "Monthly income in figures and in words", hi: "मासिक आय अंकों में और शब्दों में" },
      quick: { en: "Monthly income in numbers, then the same amount in words", hi: "मासिक आय अंकों में, फिर वही रक़म शब्दों में" },
      meaning: {
        en: "The form asks for \"मासिक आय\" (monthly income), once in figures (अंकों में) and once in words (शब्दों में). It does not say whether this is only the applicant's income or the whole family's, or which kinds of income to include.",
        hi: "फॉर्म में \"मासिक आय\" एक बार अंकों में और एक बार शब्दों में माँगी गई है। इसमें यह नहीं लिखा कि यह सिर्फ़ आवेदक की आय है या पूरे परिवार की, या कौन-कौन सी आय जोड़नी है।"
      },
      write: {
        en: "Note that it asks for monthly, not yearly, income. Ask at your Tehsil / CSC centre whose income to include before you fill it. Make sure the figures and the words show the same amount, and write only true figures; the Patwari checks the application.",
        hi: "ध्यान दें कि यहाँ मासिक आय माँगी गई है, सालाना नहीं। भरने से पहले तहसील / CSC केंद्र पर पूछ लें कि किसकी आय जोड़नी है। अंकों और शब्दों में एक ही रक़म हो, और सिर्फ़ सही आँकड़े लिखें; आवेदन की जाँच पटवारी करते हैं।"
      },
      documents: {
        en: ["Pay slip, if there is a salary (optional on the portal)"],
        hi: ["वेतन पर्ची, अगर वेतन मिलता है (पोर्टल पर वैकल्पिक)"]
      },
      mistakes: {
        en: ["Writing yearly income in the monthly box", "Figures and words showing different amounts", "Guessing whose income to include instead of asking"],
        hi: ["मासिक खाने में सालाना आय लिख देना", "अंकों और शब्दों में अलग-अलग रक़म लिखना", "किसकी आय जोड़नी है, यह पूछे बिना अंदाज़ा लगाना"]
      }
    },
    {
      label: { en: "Rural / urban, district, tehsil, Patwari area, village, municipal area", hi: "ग्रामीण / शहरी, ज़िला, तहसील, पटवारी क्षेत्र, गाँव, नगर पालिका क्षेत्र" },
      quick: { en: "Choose rural or urban, then district, tehsil and your area", hi: "ग्रामीण या शहरी चुनें, फिर ज़िला, तहसील और अपना क्षेत्र" },
      meaning: {
        en: "Rows on the form: ग्रामीण/शहरी (rural / urban), जिला (district), तहसील (tehsil), पटवारी क्षेत्र (Patwari area), ग्राम (village) and नगर पालिका क्षेत्र (municipal area). The rural / urban, Patwari area and village boxes are shaded grey.",
        hi: "फॉर्म के खाने: ग्रामीण/शहरी, जिला, तहसील, पटवारी क्षेत्र, ग्राम और नगर पालिका क्षेत्र। ग्रामीण/शहरी, पटवारी क्षेत्र और ग्राम वाले खाने स्लेटी रंग के हैं।"
      },
      write: {
        en: "Write your district and tehsil. If you live in a village, give the Patwari area and the village. If you live in a town, give the municipal area. If you do not know your Patwari area, ask at the Tehsil. The form does not say whether to leave the rural rows blank for an urban address, so ask there too.",
        hi: "अपना ज़िला और तहसील लिखें। गाँव में रहते हैं तो पटवारी क्षेत्र और गाँव लिखें। शहर में रहते हैं तो नगर पालिका क्षेत्र लिखें। अपना पटवारी क्षेत्र न पता हो तो तहसील में पूछें। शहरी पते में गाँव वाले खाने ख़ाली छोड़ने हैं या नहीं, यह फॉर्म में नहीं लिखा, यह भी वहीं पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Choosing the tehsil where you work instead of where you live"],
        hi: ["जहाँ रहते हैं उसकी जगह जहाँ काम करते हैं उस तहसील का नाम लिखना"]
      }
    },
    {
      label: { en: "Address and mobile number", hi: "पता और मोबाइल नंबर" },
      quick: { en: "Full address as on address proof; a mobile number you use", hi: "पता वैसा ही जैसा निवास प्रमाण में है; वह मोबाइल नंबर जो आप चलाते हैं" },
      meaning: {
        en: "The form's last two rows are पता (address) and मोबाईल नम्बर (mobile number). The portal FAQ says you get an SMS after each step of the application.",
        hi: "फॉर्म के आख़िरी दो खाने पता और मोबाइल नंबर हैं। पोर्टल के FAQ के अनुसार आवेदन के हर चरण के बाद SMS आता है।"
      },
      write: {
        en: "Write the full address as on the address proof you will upload. Give a mobile number you use, so you get the SMS updates.",
        hi: "पूरा पता वैसा ही लिखें जैसा आपके निवास प्रमाण में है, जिसे आप अपलोड करेंगे। ऐसा मोबाइल नंबर दें जो आप इस्तेमाल करते हैं, ताकि SMS मिलते रहें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Giving an address that does not match your address proof", "Giving a mobile number you don't use, so you miss the SMS updates"],
        hi: ["ऐसा पता लिखना जो निवास प्रमाण से मेल नहीं खाता", "ऐसा मोबाइल नंबर देना जो आप इस्तेमाल नहीं करते, जिससे SMS छूट जाएँ"]
      }
    },
    {
      label: { en: "Signature, place and date", hi: "हस्ताक्षर, स्थान और दिनांक" },
      quick: { en: "Sign yourself; write the place and today's date", hi: "ख़ुद हस्ताक्षर करें; स्थान और आज की तारीख़ लिखें" },
      meaning: {
        en: "Below the table: आवेदक के हस्ताक्षर (applicant's signature), स्थान (place) and दिनांक (date).",
        hi: "तालिका के नीचे: आवेदक के हस्ताक्षर, स्थान और दिनांक।"
      },
      write: {
        en: "Sign the form yourself after checking every row. Write the place where you sign and the date.",
        hi: "हर खाना जाँचने के बाद फॉर्म पर ख़ुद हस्ताक्षर करें। जहाँ हस्ताक्षर कर रहे हैं वह जगह और तारीख़ लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Letting someone else sign for you", "Signing a blank form"],
        hi: ["किसी और से अपनी जगह हस्ताक्षर करवाना", "ख़ाली फॉर्म पर हस्ताक्षर कर देना"]
      }
    },
    {
      label: { en: "Documents to upload", hi: "अपलोड करने वाले दस्तावेज़" },
      quick: { en: "Photo, ID, address proof, ration card / family register, self-declaration", hi: "फ़ोटो, पहचान पत्र, निवास प्रमाण, राशन कार्ड / परिवार रजिस्टर, स्व-घोषणा पत्र" },
      meaning: {
        en: "The portal's Required Documents are: Applicant Photo, Id Proof, Address Proof, Ration Card/Copy Of Family Register, and Self Declaration Form. Optional Documents: Pay Slip and Ration Card.",
        hi: "पोर्टल पर आवश्यक दस्तावेज़ हैं: आवेदक की फ़ोटो, पहचान पत्र, निवास का प्रमाण, राशन कार्ड/परिवार रजिस्टर की नकल, और स्व-घोषणा पत्र। वैकल्पिक दस्तावेज़: वेतन पर्ची और राशन कार्ड।"
      },
      write: {
        en: "Upload a clear, recent photo of the applicant and clear scans of the rest. The portal does not say which ID or address proofs are accepted, the photo size, where to get a copy of the family register, or the format of the self-declaration, so ask at your Tehsil / CSC centre. Sign the self-declaration yourself after reading it.",
        hi: "आवेदक की साफ़ और हाल की फ़ोटो और बाक़ी काग़ज़ों के साफ़ स्कैन अपलोड करें। कौन-से पहचान पत्र या निवास प्रमाण मान्य हैं, फ़ोटो का साइज़, परिवार रजिस्टर की नकल कहाँ से मिलेगी, और स्व-घोषणा पत्र का प्रारूप, यह पोर्टल पर नहीं लिखा, इसलिए तहसील / CSC केंद्र पर पूछें। स्व-घोषणा पत्र पढ़कर ख़ुद हस्ताक्षर करें।"
      },
      documents: {
        en: ["Applicant photo", "ID proof", "Address proof", "Ration card, or copy of family register", "Self-declaration form, signed", "Pay slip, if any (optional)"],
        hi: ["आवेदक की फ़ोटो", "पहचान पत्र", "निवास का प्रमाण", "राशन कार्ड, या परिवार रजिस्टर की नकल", "हस्ताक्षर किया हुआ स्व-घोषणा पत्र", "वेतन पर्ची, अगर हो (वैकल्पिक)"]
      },
      mistakes: {
        en: ["Uploading a blurry or cut-off scan", "Skipping the ration card / family register because ration card also appears as optional", "Using a self-declaration format copied from a private website or another state"],
        hi: ["धुंधला या कटा हुआ स्कैन अपलोड करना", "राशन कार्ड वैकल्पिक में भी दिखता है, यह सोचकर राशन कार्ड / परिवार रजिस्टर छोड़ देना", "किसी निजी वेबसाइट या दूसरे राज्य का स्व-घोषणा प्रारूप इस्तेमाल करना"]
      }
    },
    {
      label: { en: "Fee, what happens next, track and download", hi: "शुल्क, आगे क्या होता है, स्थिति और डाउनलोड" },
      quick: { en: "Check the fee shown; keep your application number for tracking", hi: "दिखाई गई फ़ीस देखें; आवेदन नंबर संभालकर रखें" },
      meaning: {
        en: "The service card shows \"CSC/EDC Fee: ₹40\"; the portal FAQ separately says you pay ₹30 in addition to the department's charges. Payment: credit card, debit card, UPI or net banking. Officer flow: 1 Applicant (application submitted), 2 Tehsildar, 3 Patwari, 4 Tehsildar, 5 Certificate issued / rejected. Estimated completion: 15 days.",
        hi: "सेवा विवरण में \"CSC/EDC शुल्क: ₹40\" लिखा है; पोर्टल के FAQ में अलग से लिखा है कि विभाग की तय फ़ीस के अलावा ₹30 देने होते हैं। भुगतान: क्रेडिट कार्ड, डेबिट कार्ड, UPI या नेट बैंकिंग। अधिकारी प्रवाह: 1 आवेदक (आवेदन जमा), 2 तहसीलदार, 3 पटवारी, 4 तहसीलदार, 5 प्रमाण पत्र जारी / अस्वीकृत। अनुमानित समय: 15 दिन।"
      },
      write: {
        en: "The exact total is not clear from the portal, so check the amount on the payment screen or ask at the CSC before paying, and keep the receipt. Keep your application number: use \"Application Status\" on the portal's main page to track it, download the certificate (the FAQ says there is no limit on downloads), and use \"Verify Certificate\" to check it. How long the certificate stays valid is not stated, so ask at your Tehsil or the office that asked for it. Helpline: CM Helpline 1905.",
        hi: "कुल रक़म पोर्टल से साफ़ नहीं है, इसलिए भुगतान से पहले पेमेंट पेज पर रक़म देखें या CSC पर पूछें, और रसीद रखें। आवेदन नंबर संभालकर रखें: पोर्टल के मुख्य पेज पर \"Application Status\" से स्थिति देखें, प्रमाण पत्र डाउनलोड करें (FAQ के अनुसार डाउनलोड की कोई सीमा नहीं), और \"Verify Certificate\" से उसे जाँचें। प्रमाण पत्र कितने समय तक मान्य है, यह नहीं लिखा, इसलिए तहसील में या उस दफ़्तर से पूछें जिसने यह माँगा है। हेल्पलाइन: सीएम हेल्पलाइन 1905।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Paying an agent more than the amount shown, without a receipt", "Paying someone to download a certificate you can download yourself"],
        hi: ["बिना रसीद के किसी एजेंट को दिखाई गई रक़म से ज़्यादा पैसे देना", "जो प्रमाण पत्र आप ख़ुद डाउनलोड कर सकते हैं, उसके लिए किसी को पैसे देना"]
      }
    }
  ]
});
