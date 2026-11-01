// Checked against the common LPG "Know Your Customer (KYC) Form" of the public-sector oil companies,
// printed code "Form KYC Version 3 - 2014-IOC/BPC/HPC", with its overleaf "Instructions for Filling KYC
// Form" (PDF on pmuy.gov.in, created 03-09-2014); HPCL's "Format for Declaration (To be submitted by
// persons desirous of New LPG Connection or connection against Termination Voucher)" linked as
// "Declaration to Avail New Connection" on hindustanpetroleum.com (scanned PDF dated 31-03-2015); and
// the "How to get a New Connection?" and KYC answers on HPCL's FAQ page (hindustanpetroleum.com/pages/faq).
// The PMUY "UJJWALA KYC Application" (Version 5.0, pmuy.gov.in) was read only to mention that it exists.
// Every statement below comes from those documents. If something is not stated in them, the guide
// says "ask your LPG distributor" instead of guessing. No prices or subsidy amounts are given,
// because the official pages read do not date them.

window.FORMS.push({
  id: "lpg-kyc",
  verified: true,
  source: {
    title: "Know Your Customer (KYC) Form for LPG, Form KYC Version 3 - 2014-IOC/BPC/HPC (pmuy.gov.in, PDF dated 03-09-2014), with HPCL's Declaration to Avail New Connection",
    url: "https://pmuy.gov.in/docs/KYC.pdf"
  },
  caution: {
    en: "The latest common KYC form found on official websites is Version 3 from 2014, and the new-connection declaration is a 2015 scan from HP Gas. No newer version was found. Before you fill it, ask your LPG distributor whether they still use this form and the same declaration.",
    hi: "आधिकारिक वेबसाइटों पर मिला सबसे नया साझा केवाईसी फॉर्म 2014 का वर्ज़न 3 है, और नए कनेक्शन वाली घोषणा एचपी गैस की 2015 की स्कैन कॉपी है। इससे नया वर्ज़न नहीं मिला। भरने से पहले अपने एलपीजी डिस्ट्रीब्यूटर से पूछ लें कि क्या वे अभी भी यही फॉर्म और यही घोषणा लेते हैं।"
  },
  lastChecked: "2026-11-01",

  category: { en: "Government", hi: "सरकारी" },
  name: { en: "LPG Gas Connection KYC Form", hi: "एलपीजी गैस कनेक्शन केवाईसी फॉर्म" },
  about: {
    en: "This is the common KYC (Know Your Customer) form of Indian Oil (Indane), Bharat Petroleum (Bharat Gas) and Hindustan Petroleum (HP Gas). You fill it to get a new domestic LPG connection, along with copies of one proof of identity and one proof of address. Fill it in black ink, in BLOCK (capital) letters. Fields marked * are mandatory. HP Gas says the KYC form is available free at your distributor. As per the LPG Control Order, only ONE LPG connection is allowed per household. HP Gas also gives a separate declaration for new connections, explained in the last two fields here. Under Pradhan Mantri Ujjwala Yojana (PMUY) there is a different \"UJJWALA KYC Application\" for women from BPL households; this guide does not cover it.",
    hi: "यह इंडियन ऑयल (इंडेन), भारत पेट्रोलियम (भारत गैस) और हिंदुस्तान पेट्रोलियम (एचपी गैस) का साझा केवाईसी (अपने ग्राहक को जानें) फॉर्म है। नया घरेलू एलपीजी कनेक्शन लेने के लिए इसे भरकर, एक पहचान प्रमाण और एक पते के प्रमाण की कॉपी के साथ जमा करते हैं। फॉर्म काली स्याही से, बड़े (कैपिटल) अक्षरों में भरें। * वाले खाने ज़रूरी हैं। एचपी गैस के अनुसार केवाईसी फॉर्म डिस्ट्रीब्यूटर के पास मुफ़्त मिलता है। एलपीजी कंट्रोल ऑर्डर के अनुसार एक घर में सिर्फ़ एक एलपीजी कनेक्शन हो सकता है। एचपी गैस नए कनेक्शन के लिए एक अलग घोषणा पत्र भी देती है, जो यहाँ आख़िरी दो खानों में समझाया गया है। प्रधानमंत्री उज्ज्वला योजना (PMUY) में बीपीएल परिवारों की महिलाओं के लिए अलग \"उज्ज्वला केवाईसी आवेदन\" होता है; यह गाइड उसके बारे में नहीं है।"
  },

  fields: [
    {
      label: { en: "Photograph (\"Paste your photo here\")", hi: "फ़ोटो (\"यहाँ अपनी फ़ोटो चिपकाएँ\")" },
      quick: { en: "Paste your photo; ask distributor about size", hi: "अपनी फ़ोटो चिपकाएँ; साइज़ डिस्ट्रीब्यूटर से पूछें" },
      meaning: {
        en: "The box at the top right is for your photograph.",
        hi: "ऊपर दाईं ओर वाला खाना आपकी फ़ोटो के लिए है।"
      },
      write: {
        en: "Paste your own photo in the box. The form does not say the photo size, colour or background, so ask your LPG distributor.",
        hi: "खाने में अपनी फ़ोटो चिपकाएँ। फॉर्म में फ़ोटो का साइज़, रंग या बैकग्राउंड नहीं लिखा है, इसलिए अपने एलपीजी डिस्ट्रीब्यूटर से पूछें।"
      },
      documents: { en: ["Your photograph"], hi: ["आपकी फ़ोटो"] },
      mistakes: {
        en: ["Pasting a photo of another family member instead of the applicant"],
        hi: ["आवेदक की जगह परिवार के किसी दूसरे सदस्य की फ़ोटो चिपका देना"]
      }
    },
    {
      label: { en: "Name * (1a: Mr./Mrs./Ms., First, Middle, Last name)", hi: "नाम * (1क: श्री/श्रीमती/सुश्री, पहला, बीच का, आख़िरी नाम)" },
      quick: { en: "Title and name in CAPITALS, exactly as on photo ID", hi: "पहचान पत्र जैसा ही नाम और संबोधन, बड़े अक्षरों में" },
      meaning: {
        en: "Your title (Mr./Mrs./Ms.) and your name, split into First Name, Middle Name and Last Name. One letter per box.",
        hi: "आपका संबोधन (श्री/श्रीमती/सुश्री) और नाम, जो पहला नाम, बीच का नाम और आख़िरी नाम में बँटा है। हर डिब्बे में एक अक्षर।"
      },
      write: {
        en: "The instructions say the name must be entered \"as given in Photo ID Proof\". Title, First Name and Last Name are marked * (mandatory); Middle Name is not.",
        hi: "निर्देशों के अनुसार नाम वैसा ही लिखना है जैसा फ़ोटो वाले पहचान प्रमाण में है। संबोधन, पहला नाम और आख़िरी नाम * (ज़रूरी) हैं; बीच का नाम ज़रूरी नहीं है।"
      },
      documents: { en: ["Your photo ID proof (the same one you give as POI)"], hi: ["आपका फ़ोटो वाला पहचान प्रमाण (वही जो POI में दे रहे हैं)"] },
      mistakes: {
        en: ["Spelling the name differently from the photo ID", "Writing in small letters instead of BLOCK letters"],
        hi: ["पहचान पत्र से अलग स्पेलिंग में नाम लिखना", "बड़े अक्षरों की जगह छोटे अक्षरों में लिखना"]
      }
    },
    {
      label: { en: "Gas Consumer Number (1b)", hi: "गैस उपभोक्ता नंबर (1ख)" },
      quick: { en: "Only for existing IOC/BPC/HPC users; new applicants ask distributor", hi: "सिर्फ़ पुराने ग्राहकों के लिए; नए आवेदक डिस्ट्रीब्यूटर से पूछें" },
      meaning: {
        en: "The consumer number of an LPG connection you already have from Indian Oil, Bharat Petroleum or Hindustan Petroleum.",
        hi: "इंडियन ऑयल, भारत पेट्रोलियम या हिंदुस्तान पेट्रोलियम से पहले से चल रहे एलपीजी कनेक्शन का उपभोक्ता नंबर।"
      },
      write: {
        en: "The box has a * on the form, but the instructions say it is \"Mandatory for consumers already using LPG from IOC/BPC/HPC\". The same KYC form is used by existing customers too. If you are applying for your first connection, ask your LPG distributor what to write here.",
        hi: "फॉर्म पर इस खाने के साथ * लगा है, लेकिन निर्देशों के अनुसार यह उन्हीं के लिए ज़रूरी है जो पहले से IOC/BPC/HPC की एलपीजी इस्तेमाल कर रहे हैं। यही केवाईसी फॉर्म पुराने ग्राहक भी भरते हैं। अगर आप पहला कनेक्शन ले रहे हैं, तो यहाँ क्या लिखें, यह अपने एलपीजी डिस्ट्रीब्यूटर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing a family member's consumer number as if it were your own"],
        hi: ["परिवार के किसी सदस्य का उपभोक्ता नंबर अपना समझकर लिख देना"]
      }
    },
    {
      label: { en: "Date of Birth * (1c)", hi: "जन्म तिथि * (1ग)" },
      quick: { en: "Date of birth as DD MM YYYY; must be 18+", hi: "जन्म तिथि DD MM YYYY में; उम्र 18+ होनी चाहिए" },
      meaning: {
        en: "Your date of birth, in eight boxes: day (DD), month (MM) and year (YYYY).",
        hi: "आपकी जन्म तिथि, आठ डिब्बों में: दिन (DD), महीना (MM) और साल (YYYY)।"
      },
      write: {
        en: "Write it as DD MM YYYY, for example 05 08 2007. The new-connection declaration says an LPG connection \"cannot be provided to a person under 18 years of age\". Which document is accepted as age proof is not stated, so ask your LPG distributor.",
        hi: "DD MM YYYY के रूप में लिखें, जैसे 05 08 2007। नए कनेक्शन वाली घोषणा में लिखा है कि 18 साल से कम उम्र के व्यक्ति को एलपीजी कनेक्शन नहीं दिया जा सकता। उम्र के सबूत के लिए कौन-सा काग़ज़ चलेगा, यह नहीं लिखा, इसलिए अपने एलपीजी डिस्ट्रीब्यूटर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the year in two digits only", "Applying before turning 18"],
        hi: ["साल सिर्फ़ दो अंकों में लिखना", "18 साल पूरे होने से पहले आवेदन करना"]
      }
    },
    {
      label: { en: "Close Relative * (1d: Father's / Spouse Name, Mother's name)", hi: "नज़दीकी रिश्तेदार * (1घ: पिता / पति-पत्नी का नाम, माता का नाम)" },
      quick: { en: "Father's or spouse's name, strike off the other; mother's name", hi: "पिता या पति/पत्नी का नाम, दूसरा काटें; माता का नाम" },
      meaning: {
        en: "Two rows: \"Father's / Spouse Name\" and \"Mother's name\". Both are marked * on the form.",
        hi: "दो लाइनें: \"पिता / पति-पत्नी का नाम\" और \"माता का नाम\"। फॉर्म पर दोनों के साथ * लगा है।"
      },
      write: {
        en: "In the first row write your father's or your spouse's name. The instructions say \"Father or Spouse name is mandatory\" and to strike off whichever is not applicable. Write your mother's name in the second row.",
        hi: "पहली लाइन में अपने पिता का या पति/पत्नी का नाम लिखें। निर्देशों के अनुसार पिता या पति/पत्नी का नाम ज़रूरी है, और जो लागू न हो उसे काट देना है। दूसरी लाइन में अपनी माता का नाम लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Not striking off \"Father's\" or \"Spouse\" (whichever does not apply)", "Leaving the mother's name blank"],
        hi: ["\"पिता\" या \"पति/पत्नी\" में से जो लागू न हो उसे न काटना", "माता का नाम खाली छोड़ना"]
      }
    },
    {
      label: { en: "Proof of Address (POA) category Code * (section 2)", hi: "पते का प्रमाण (POA) कैटेगरी कोड * (भाग 2)" },
      quick: { en: "Write your address proof's code, e.g. Aadhaar = POA01", hi: "पते के प्रमाण का कोड लिखें, जैसे आधार = POA01" },
      meaning: {
        en: "Each accepted address proof has a code on the back page of the form. You write the code of the document you attach.",
        hi: "फॉर्म के पिछले पन्ने पर हर मान्य पते के प्रमाण का एक कोड दिया है। जो काग़ज़ आप लगा रहे हैं, उसका कोड लिखना है।"
      },
      write: {
        en: "Fill the two boxes after \"POA\" with the number of your document. The list: Aadhaar (UID) POA01, Driving License POA02, Lease agreement POA03, Voter ID POA04, Telephone/Electricity/Water bill POA05, Passport POA06, Self-declaration attested by a Gazetted officer POA07, Ration Card POA08, Flat allotment/possession letter POA09, House registration document POA10, LIC Policy POA11, Bank/Credit Card Statement POA12. Attach a copy of at least one, and carry the original: the distributor will verify it.",
        hi: "\"POA\" के बाद वाले दो डिब्बों में अपने काग़ज़ का नंबर लिखें। सूची: आधार (UID) POA01, ड्राइविंग लाइसेंस POA02, किरायानामा (लीज़ एग्रीमेंट) POA03, वोटर आईडी POA04, टेलीफ़ोन/बिजली/पानी का बिल POA05, पासपोर्ट POA06, गज़ेटेड अधिकारी से सत्यापित स्व-घोषणा POA07, राशन कार्ड POA08, फ़्लैट आवंटन/कब्ज़ा पत्र POA09, मकान रजिस्ट्री का काग़ज़ POA10, एलआईसी पॉलिसी POA11, बैंक/क्रेडिट कार्ड स्टेटमेंट POA12। कम से कम एक की कॉपी लगाएँ और असली साथ ले जाएँ: डिस्ट्रीब्यूटर उसे जाँचेंगे।"
      },
      documents: {
        en: ["Copy of one address proof from the POA01 to POA12 list", "The original of the same document, for verification"],
        hi: ["POA01 से POA12 की सूची में से एक पते के प्रमाण की कॉपी", "जाँच के लिए उसी काग़ज़ का असली"]
      },
      mistakes: {
        en: ["Writing the document name instead of its code", "Writing a code for a different document than the one attached"],
        hi: ["कोड की जगह काग़ज़ का नाम लिख देना", "लगाए गए काग़ज़ की जगह किसी दूसरे काग़ज़ का कोड लिखना"]
      }
    },
    {
      label: { en: "Address for LPG connection * (house, floor, building, street, city, PIN, district, state)", hi: "एलपीजी कनेक्शन का पता * (मकान, मंज़िल, बिल्डिंग, सड़क, शहर, पिन, ज़िला, राज्य)" },
      quick: { en: "Connection address exactly as written in your address proof", hi: "कनेक्शन का पता, बिल्कुल पते के प्रमाण जैसा" },
      meaning: {
        en: "The address where the LPG connection will be. Mandatory: House/Flat #, Name; Floor No; City/Town/Village; Pin Code; District; State. Housing Complex/Building, Land Mark and Street/Road Name are not marked *.",
        hi: "वह पता जहाँ एलपीजी कनेक्शन लगेगा। ज़रूरी: मकान/फ़्लैट नंबर, नाम; मंज़िल नंबर; शहर/कस्बा/गाँव; पिन कोड; ज़िला; राज्य। हाउसिंग कॉम्प्लेक्स/बिल्डिंग, लैंडमार्क और सड़क का नाम * वाले नहीं हैं।"
      },
      write: {
        en: "The instructions say the address must be entered \"exactly as it appears in the POA\". In the new-connection declaration you also confirm the connection will be used at this address for domestic cooking only, and that you will inform your distributor in writing, in advance, if you change residence.",
        hi: "निर्देशों के अनुसार पता बिल्कुल वैसा ही लिखना है जैसा पते के प्रमाण (POA) में है। नए कनेक्शन की घोषणा में आप यह भी मानते हैं कि कनेक्शन इसी पते पर सिर्फ़ घरेलू खाना पकाने के लिए इस्तेमाल होगा, और घर बदलने पर पहले से डिस्ट्रीब्यूटर को लिखकर बताएँगे।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing a different address from the one on your address proof", "Leaving Floor No blank (it is marked *)"],
        hi: ["पते के प्रमाण से अलग पता लिखना", "मंज़िल नंबर खाली छोड़ना (यह * वाला है)"]
      }
    },
    {
      label: { en: "Phone # * (Mobile No, Landline #) and Email id", hi: "फ़ोन नंबर * (मोबाइल, लैंडलाइन) और ईमेल" },
      quick: { en: "Mobile number; landline and email if you have them", hi: "मोबाइल नंबर; लैंडलाइन और ईमेल हों तो" },
      meaning: {
        en: "Your contact details. \"Phone #\" is marked * (mandatory), with boxes for Mobile No and Landline #. Email id is not marked *.",
        hi: "आपसे संपर्क की जानकारी। \"फ़ोन नंबर\" * (ज़रूरी) है, जिसमें मोबाइल और लैंडलाइन के डिब्बे हैं। ईमेल * वाला नहीं है।"
      },
      write: {
        en: "Write a phone number in the boxes, one digit per box, and your email if you have one. Whether a mobile number is compulsory, or a landline alone is enough, is not stated, so ask your LPG distributor.",
        hi: "डिब्बों में फ़ोन नंबर लिखें, हर डिब्बे में एक अंक, और ईमेल हो तो वह भी। मोबाइल नंबर ज़रूरी है या सिर्फ़ लैंडलाइन भी चलेगा, यह नहीं लिखा, इसलिए अपने एलपीजी डिस्ट्रीब्यूटर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the phone number blank (it is marked *)"],
        hi: ["फ़ोन नंबर खाली छोड़ना (यह * वाला है)"]
      }
    },
    {
      label: { en: "Proof of Identity (POI): Category Code * and Card Number * (3a)", hi: "पहचान का प्रमाण (POI): कैटेगरी कोड * और कार्ड नंबर * (3क)" },
      quick: { en: "ID proof code (e.g. Aadhaar = POI01) and its card number", hi: "पहचान प्रमाण का कोड (जैसे आधार = POI01) और उसका नंबर" },
      meaning: {
        en: "The code of the identity document you attach, and that document's number.",
        hi: "जो पहचान का काग़ज़ आप लगा रहे हैं उसका कोड, और उस काग़ज़ का नंबर।"
      },
      write: {
        en: "Fill the boxes after \"POI\" with the number from this list: Aadhaar Number (UID/EID) POI01, Passport Number POI02, PAN Card Number POI03, Voter ID Card POI04, ID card issued by Central/State POI05, Driving License POI06. Then write that card's number. Attach a copy of at least one, and show the original to the distributor for verification.",
        hi: "\"POI\" के बाद वाले डिब्बों में इस सूची से नंबर लिखें: आधार नंबर (UID/EID) POI01, पासपोर्ट नंबर POI02, पैन कार्ड नंबर POI03, वोटर आईडी कार्ड POI04, केंद्र/राज्य सरकार का पहचान पत्र POI05, ड्राइविंग लाइसेंस POI06। फिर उस कार्ड का नंबर लिखें। कम से कम एक की कॉपी लगाएँ और जाँच के लिए असली डिस्ट्रीब्यूटर को दिखाएँ।"
      },
      documents: {
        en: ["Copy of one identity proof from the POI01 to POI06 list", "The original of the same document, for verification"],
        hi: ["POI01 से POI06 की सूची में से एक पहचान प्रमाण की कॉपी", "जाँच के लिए उसी काग़ज़ का असली"]
      },
      mistakes: {
        en: ["Card number not matching the document whose code you wrote", "Name on the ID spelt differently from item 1a"],
        hi: ["कार्ड नंबर उस काग़ज़ से मेल न खाना जिसका कोड लिखा है", "पहचान पत्र पर नाम की स्पेलिंग खाना 1क से अलग होना"]
      }
    },
    {
      label: { en: "Ration Card Details if Available (3b: State of Issue, Ration Card Number)", hi: "राशन कार्ड की जानकारी, अगर हो (3ख: जारी करने वाला राज्य, राशन कार्ड नंबर)" },
      quick: { en: "Ration card's state and number, if you have one", hi: "राशन कार्ड हो तो उसका राज्य और नंबर" },
      meaning: {
        en: "If you have a ration card, the State that issued it and its number. On the KYC form this part says \"if Available\".",
        hi: "अगर आपका राशन कार्ड है, तो उसे जारी करने वाला राज्य और उसका नंबर। केवाईसी फॉर्म पर इस हिस्से में \"अगर हो\" लिखा है।"
      },
      write: {
        en: "Write the State and the card number. In point 4 of the new-connection declaration you either enclose a copy of a ration card that includes your name, or state that nobody in your household has a ration card and that you will show it to the distributor when one is issued. Delete the option that does not apply. HP Gas notes that in certain States/UTs, new connections are released only against a ration card; ask your LPG distributor if this applies in your State.",
        hi: "राज्य और कार्ड नंबर लिखें। नए कनेक्शन की घोषणा के बिंदु 4 में आप या तो ऐसे राशन कार्ड की कॉपी लगाते हैं जिसमें आपका नाम है, या लिखते हैं कि आपके घर में किसी का राशन कार्ड नहीं है और बनने पर डिस्ट्रीब्यूटर को दिखाएँगे। जो लागू न हो उसे काट दें। एचपी गैस के अनुसार कुछ राज्यों/केंद्र शासित प्रदेशों में नया कनेक्शन सिर्फ़ राशन कार्ड दिखाने पर मिलता है; आपके राज्य में ऐसा है या नहीं, अपने एलपीजी डिस्ट्रीब्यूटर से पूछें।"
      },
      documents: { en: ["Copy of your ration card (if you have one) that includes your name"], hi: ["आपके राशन कार्ड की कॉपी (अगर है), जिसमें आपका नाम हो"] },
      mistakes: {
        en: ["In declaration point 4, not deleting the option that does not apply"],
        hi: ["घोषणा के बिंदु 4 में, जो विकल्प लागू न हो उसे न काटना"]
      }
    },
    {
      label: { en: "Declaration and Name & Signature *, Date (KYC form)", hi: "घोषणा और नाम व हस्ताक्षर *, तारीख़ (केवाईसी फॉर्म)" },
      quick: { en: "Read the declaration, then write name, sign and date", hi: "घोषणा पढ़ें, फिर नाम लिखकर हस्ताक्षर करें और तारीख़ डालें" },
      meaning: {
        en: "You declare that the information is true and correct. If anything is found incorrect or incomplete, or Government LPG rules are violated, IOC/BPC/HPC can stop supplying cylinders, forfeit your security deposit, levy penal charges and may take legal action.",
        hi: "आप घोषणा करते हैं कि दी गई जानकारी सही है। अगर कुछ ग़लत या अधूरा निकला, या एलपीजी के सरकारी नियम टूटे, तो IOC/BPC/HPC सिलेंडर देना बंद कर सकती हैं, आपकी सिक्योरिटी डिपॉज़िट ज़ब्त कर सकती हैं, जुर्माना लगा सकती हैं और क़ानूनी कार्रवाई कर सकती हैं।"
      },
      write: {
        en: "Write your name and sign below the declaration (marked *), and write the date. Whether a thumb impression is accepted instead of a signature is not stated, so ask your LPG distributor.",
        hi: "घोषणा के नीचे अपना नाम लिखें और हस्ताक्षर करें (यह * वाला है), और तारीख़ लिखें। हस्ताक्षर की जगह अंगूठे का निशान चलेगा या नहीं, यह नहीं लिखा, इसलिए अपने एलपीजी डिस्ट्रीब्यूटर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Signing without reading what you are declaring", "Forgetting the date"],
        hi: ["बिना पढ़े घोषणा पर हस्ताक्षर कर देना", "तारीख़ लिखना भूल जाना"]
      }
    },
    {
      label: { en: "To be filled by Dealer/Distributor, and Acknowledgement (tear-off)", hi: "डीलर/डिस्ट्रीब्यूटर द्वारा भरा जाने वाला हिस्सा, और पावती (फाड़ने वाली पर्ची)" },
      quick: { en: "Distributor fills this; keep the signed and sealed acknowledgement", hi: "यह डिस्ट्रीब्यूटर भरेंगे; मुहर लगी पावती संभालकर रखें" },
      meaning: {
        en: "The distributor confirms they checked your photocopies against the originals, writes the Consumer Number (if allotted), signs and dates. Below the \"Tear Off\" line is an Acknowledgement that they received your KYC form with POI and POA copies, with your name, consumer number (if applicable), date, and the distributor's signature and seal.",
        hi: "डिस्ट्रीब्यूटर पुष्टि करते हैं कि उन्होंने आपकी फ़ोटोकॉपी असली काग़ज़ों से मिलाई, उपभोक्ता नंबर (अगर मिला हो) लिखते हैं, और हस्ताक्षर व तारीख़ डालते हैं। \"Tear Off\" लाइन के नीचे पावती है कि उन्हें आपका केवाईसी फॉर्म, POI और POA की कॉपी के साथ मिला, जिसमें आपका नाम, उपभोक्ता नंबर (अगर हो), तारीख़, और डिस्ट्रीब्यूटर के हस्ताक्षर व मुहर होते हैं।"
      },
      write: {
        en: "Don't write here. Take your original documents along so they can be verified, and ask for the torn-off acknowledgement with the distributor's signature and seal.",
        hi: "यहाँ कुछ न लिखें। असली काग़ज़ साथ ले जाएँ ताकि जाँच हो सके, और डिस्ट्रीब्यूटर के हस्ताक्षर व मुहर वाली फाड़ी गई पावती ज़रूर माँगें।"
      },
      documents: { en: ["Originals of your POI and POA documents"], hi: ["POI और POA काग़ज़ों के असली"] },
      mistakes: {
        en: ["Leaving without the signed and sealed acknowledgement", "Not carrying the originals for verification"],
        hi: ["हस्ताक्षर और मुहर वाली पावती लिए बिना लौट आना", "जाँच के लिए असली काग़ज़ साथ न ले जाना"]
      }
    },
    {
      label: { en: "Declaration for New Connection: your details, citizenship, date of birth, signature", hi: "नए कनेक्शन की घोषणा: आपकी जानकारी, नागरिकता, जन्म तिथि, हस्ताक्षर" },
      quick: { en: "Name, relation, age, address; tick citizenship; DOB; sign, date, place", hi: "नाम, रिश्ता, उम्र, पता; नागरिकता पर टिक; जन्म तिथि; हस्ताक्षर, तारीख़, जगह" },
      meaning: {
        en: "A separate one-page declaration \"To be submitted by persons desirous of New LPG Connection\", published by HP Gas with its KYC form. You write \"I ... son/daughter/wife of ... Age ... years, resident of ...\", tick your category in point 1, and write your date of birth in point 2.",
        hi: "एक अलग एक पन्ने की घोषणा, जो नया एलपीजी कनेक्शन चाहने वालों को जमा करनी होती है। एचपी गैस इसे अपने केवाईसी फॉर्म के साथ देती है। इसमें आप लिखते हैं \"मैं ... पुत्र/पुत्री/पत्नी ... उम्र ... साल, निवासी ...\", बिंदु 1 में अपनी श्रेणी पर टिक करते हैं, और बिंदु 2 में जन्म तिथि लिखते हैं।"
      },
      write: {
        en: "Point 1: tick one of Indian citizen / Non Resident Indian / staff of foreign nationality serving in India / foreign national residing in India under valid visa / person returning to India on transfer of residence / PIO. The form says \"Only Indian citizens are eligible for subsidized LPG\". Point 2: your date of birth (no connection under 18). At the bottom, write the date and place, sign, and write your name. For Indane or Bharat Gas, ask your LPG distributor whether they use the same declaration.",
        hi: "बिंदु 1: इनमें से एक पर टिक करें: भारतीय नागरिक / अनिवासी भारतीय (NRI) / भारत में काम कर रहे विदेशी स्टाफ़ / वैध वीज़ा पर भारत में रह रहे विदेशी / निवास बदलकर भारत लौट रहे व्यक्ति / PIO। फॉर्म में लिखा है कि सब्सिडी वाली एलपीजी सिर्फ़ भारतीय नागरिकों के लिए है। बिंदु 2: आपकी जन्म तिथि (18 से कम उम्र पर कनेक्शन नहीं)। नीचे तारीख़ और जगह लिखें, हस्ताक्षर करें और नाम लिखें। इंडेन या भारत गैस के लिए अपने एलपीजी डिस्ट्रीब्यूटर से पूछें कि क्या वे यही घोषणा लेते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Not ticking any category in point 1", "Date of birth different from the KYC form", "Forgetting the place below the signature"],
        hi: ["बिंदु 1 में किसी श्रेणी पर टिक न करना", "जन्म तिथि केवाईसी फॉर्म से अलग लिखना", "हस्ताक्षर के पास जगह लिखना भूल जाना"]
      }
    },
    {
      label: { en: "Declaration point 3: no one in the household already has an LPG / PNG connection (and points 5–11)", hi: "घोषणा का बिंदु 3: घर में किसी के पास पहले से एलपीजी / पीएनजी कनेक्शन नहीं है (और बिंदु 5–11)" },
      quick: { en: "Confirm no household member has LPG or piped gas", hi: "पक्का करें कि घर में किसी के पास एलपीजी या पाइप गैस नहीं" },
      meaning: {
        en: "In point 3 you declare that neither you nor any other member of your household has an LPG connection from the public-sector oil companies or a piped natural gas connection for domestic use. \"Household\" here means husband, wife, unmarried children and dependent parents living together in one dwelling with a common kitchen.",
        hi: "बिंदु 3 में आप घोषणा करते हैं कि न आपके पास और न आपके घर के किसी दूसरे सदस्य के पास सरकारी तेल कंपनियों का एलपीजी कनेक्शन या घरेलू पाइप्ड नेचुरल गैस (PNG) कनेक्शन है। यहाँ \"घर\" का मतलब है पति, पत्नी, अविवाहित बच्चे और आश्रित माता-पिता, जो एक ही घर में एक ही रसोई के साथ रहते हैं।"
      },
      write: {
        en: "Sign only if this is true. The form adds that households with piped natural gas are not entitled to subsidized LPG. You also promise: not to keep any other LP gas installation in the same kitchen (point 7); to use a second cylinder, if issued, in the same kitchen (point 8); and you accept that the connection will be checked for duplicates in your and your household's names with all government oil companies (point 10). If anything is found untrue, the oil company can stop supply, terminate the connection, seize the equipment or forfeit the security deposit (point 11).",
        hi: "हस्ताक्षर तभी करें जब यह सच हो। फॉर्म में यह भी लिखा है कि जिन घरों में पाइप्ड नेचुरल गैस है, उन्हें सब्सिडी वाली एलपीजी नहीं मिलती। आप यह भी वादा करते हैं: उसी रसोई में कोई दूसरा एलपी गैस इंस्टॉलेशन नहीं रखेंगे (बिंदु 7); दूसरा सिलेंडर मिले तो उसी रसोई में इस्तेमाल करेंगे (बिंदु 8); और मानते हैं कि आपके और घर वालों के नाम पर सभी सरकारी तेल कंपनियों में दूसरे कनेक्शन की जाँच (डी-डुप्लीकेशन) होगी (बिंदु 10)। कुछ भी झूठ निकला तो तेल कंपनी सप्लाई रोक सकती है, कनेक्शन ख़त्म कर सकती है, सामान ज़ब्त कर सकती है या सिक्योरिटी डिपॉज़िट ज़ब्त कर सकती है (बिंदु 11)।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Applying when a parent or spouse living with you already has a connection", "Forgetting about a piped gas (PNG) connection at home"],
        hi: ["साथ रहने वाले माता-पिता या पति/पत्नी के पास पहले से कनेक्शन होते हुए भी आवेदन करना", "घर में पाइप गैस (PNG) कनेक्शन होने की बात भूल जाना"]
      }
    }
  ]
});
