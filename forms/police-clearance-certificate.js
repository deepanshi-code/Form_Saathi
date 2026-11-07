// Checked against these official Passport Seva (Ministry of External Affairs) sources on passportindia.gov.in,
// all read on 07-11-2026 (site "Last updated on: 06/11/2026"):
// 1. "Apply for Police Clearance Certificate" page (passportindia.gov.in/psp/ApplyPCC): register, login, the six
//    online steps (Passport Type, Applicant Details, Family Details, Address Details, Other Details,
//    Self Declaration), ARN, prior payment, appointment, 90-day rule.
// 2. Document Advisory "Document Required for PCC" (passportindia.gov.in/psp/docAdvisor/pccPassport), both answers,
//    and the "Proof of Address" list of acceptable documents (passportindia.gov.in/psp/ListDocuments).
// 3. FAQs, section "Issue of Police Clearance Certificate (PCC)" (passportindia.gov.in/psp/FaqServicesAvailable).
// 4. Fee: "Table 4: Fee List" in the Instruction Booklet V3.0 (PDF created 23-06-2026; fees revised from
//    1 July 2026 as per the site's notice) shows PCC Rs.750/-; booklet V2.9 showed Rs.500/-. The site's
//    Fee Calculator (Application Type "PCC") also showed Rs. 750 on 07-11-2026.
// 5. "Instructions for filling up the Police Clearance Certificate (PCC) Application Form", PCC_Application_Form_
//    Instructions_V2.0.pdf (PDF last modified 23-08-2011) — the column-wise guide for the paper PCC form.
//    The paper form itself (PCC_Application_Form_V1.0.pdf.zip, linked on the "Download and Print Application
//    Form" page) returned "404 Not Found" on 07-11-2026, so no page images or layout are made for this guide.
// Anything not stated in these documents is left as "ask at the Passport Seva Kendra / Passport Office".

window.FORMS.push({
  id: "police-clearance-certificate",
  verified: false,
  source: {
    title: "Passport Seva: Apply for Police Clearance Certificate, Document Required for PCC and PCC FAQs (passportindia.gov.in, read 07-11-2026), with the PCC form instructions V2.0 (2011)",
    url: "https://www.passportindia.gov.in/psp/ApplyPCC"
  },
  caution: {
    en: "PCC is applied for online, and the online form can only be seen after you log in, so it could not be checked box by box. The step names, documents, FAQs and fee here come from the current Passport Seva pages. The details inside each step come from the official PCC form instructions, which are from 2011 and were written for the old paper form (that paper form's download link now gives an error). The online screens may ask things in a different way: follow what the portal shows, and ask at the Passport Seva Kendra or call 1800-258-1800 if unsure.",
    hi: "PCC के लिए ऑनलाइन आवेदन होता है, और ऑनलाइन फॉर्म लॉगिन करने के बाद ही दिखता है, इसलिए उसका हर खाना जाँचा नहीं जा सका। यहाँ steps के नाम, दस्तावेज़, FAQ और फ़ीस पासपोर्ट सेवा की आज की वेबसाइट से हैं। हर step के अंदर की जानकारी PCC फॉर्म के आधिकारिक निर्देशों से है, जो 2011 के हैं और पुराने काग़ज़ वाले फॉर्म के लिए लिखे गए थे (उस काग़ज़ी फॉर्म का डाउनलोड लिंक अब काम नहीं करता)। ऑनलाइन स्क्रीन पर सवाल थोड़े अलग हो सकते हैं: पोर्टल जो दिखाए वही भरें, और शक हो तो पासपोर्ट सेवा केंद्र में पूछें या 1800-258-1800 पर कॉल करें।"
  },
  lastChecked: "2026-11-07",

  category: { en: "International", hi: "विदेश" },
  name: { en: "Police Clearance Certificate (PCC) for Indian Passport Holders", hi: "पुलिस क्लीयरेंस सर्टिफ़िकेट (PCC), भारतीय पासपोर्ट धारकों के लिए" },
  about: {
    en: "A Police Clearance Certificate (PCC) is asked for by foreign governments when you apply for immigration, a work or residence permit, or a family visa. Passport Seva's FAQ says PCC \"is not exactly a Passport Service\", has no validity printed, and is \"generally considered valid for six months\". You need a valid Indian passport. You apply online on passportindia.gov.in (or the Passport Seva app), pay the fee, book an appointment, and visit the Passport Seva Kendra (PSK) or Post Office PSK with your original documents. One application gives a PCC for one country only. There is no age limit, and a minor can get a PCC if a foreign government asks for it. The fee shown on Passport Seva is Rs. 750 (from 1 July 2026). Use only passportindia.gov.in or the official Passport Seva app: the Ministry warns about fake websites that charge extra.",
    hi: "पुलिस क्लीयरेंस सर्टिफ़िकेट (PCC) विदेशी सरकारें तब माँगती हैं जब आप वहाँ बसने (immigration), काम या रहने के परमिट, या फ़ैमिली वीज़ा के लिए आवेदन करते हैं। पासपोर्ट सेवा के FAQ के अनुसार PCC असल में पासपोर्ट सेवा नहीं है, इस पर कोई वैधता नहीं लिखी होती, और आमतौर पर इसे छह महीने तक मान्य माना जाता है। इसके लिए आपके पास वैध भारतीय पासपोर्ट होना चाहिए। आवेदन passportindia.gov.in (या पासपोर्ट सेवा ऐप) पर ऑनलाइन होता है: फ़ीस भरें, अपॉइंटमेंट लें, और असली दस्तावेज़ लेकर पासपोर्ट सेवा केंद्र (PSK) या पोस्ट ऑफ़िस PSK जाएँ। एक आवेदन से सिर्फ़ एक देश के लिए PCC मिलता है। कोई उम्र सीमा नहीं है, और विदेशी सरकार माँगे तो नाबालिग को भी PCC मिल सकता है। पासपोर्ट सेवा पर फ़ीस ₹750 दिखाई गई है (1 जुलाई 2026 से)। सिर्फ़ passportindia.gov.in या पासपोर्ट सेवा का असली ऐप इस्तेमाल करें: मंत्रालय ने नकली वेबसाइटों से सावधान किया है जो ज़्यादा पैसे लेती हैं।"
  },

  fields: [
    {
      label: { en: "Register, log in, choose Passport Office, \"Apply for Police Clearance Certificate\"", hi: "रजिस्टर करें, लॉगिन करें, पासपोर्ट ऑफ़िस चुनें, \"Apply for Police Clearance Certificate\"" },
      quick: { en: "Register on passportindia.gov.in, log in, pick PCC and your RPO", hi: "passportindia.gov.in पर रजिस्टर, लॉगिन, PCC और अपना RPO चुनें" },
      meaning: {
        en: "Before the form, you create a Passport Seva login. Then you click \"Apply for Police Clearance Certificate\" and select your Regional Passport Office (RPO). After the RPO is selected, the instructions page for the steps loads.",
        hi: "फॉर्म से पहले पासपोर्ट सेवा पर लॉगिन बनाना होता है। फिर \"Apply for Police Clearance Certificate\" पर क्लिक करके अपना क्षेत्रीय पासपोर्ट कार्यालय (RPO) चुनते हैं। RPO चुनने के बाद steps वाला निर्देश पेज खुलता है।"
      },
      write: {
        en: "Click \"Register\" on the home page, then log in with that Login ID. The site does not explain how to pick the RPO; it is normally the office for your present address. If unsure, check the \"Passport Offices\" section of the site or call 1800-258-1800. You can save the application at any point and resume later.",
        hi: "होम पेज पर \"Register\" पर क्लिक करें, फिर उसी Login ID से लॉगिन करें। वेबसाइट यह नहीं बताती कि RPO कैसे चुनें; आमतौर पर यह आपके मौजूदा पते वाला कार्यालय होता है। पक्का न हो तो वेबसाइट का \"Passport Offices\" हिस्सा देखें या 1800-258-1800 पर कॉल करें। आवेदन को कभी भी सेव करके बाद में आगे भर सकते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Applying on a look-alike website instead of passportindia.gov.in", "Choosing \"Fresh/Re-issue of Passport\" instead of Police Clearance Certificate"],
        hi: ["passportindia.gov.in की जगह उससे मिलती-जुलती नकली वेबसाइट पर आवेदन करना", "Police Clearance Certificate की जगह \"Fresh/Re-issue of Passport\" चुन लेना"]
      }
    },
    {
      label: { en: "Step 01: Passport Type", hi: "Step 01: पासपोर्ट का प्रकार" },
      quick: { en: "Choose the type of passport you hold, as on screen", hi: "आपके पास जो पासपोर्ट है उसका प्रकार चुनें" },
      meaning: {
        en: "The first online step. Passport Seva lists it only by name (\"Passport Type\"); the official pages read do not explain the options.",
        hi: "ऑनलाइन फॉर्म का पहला step। पासपोर्ट सेवा ने इसका सिर्फ़ नाम (\"Passport Type\") बताया है; पढ़े गए आधिकारिक पेजों में इसके विकल्प नहीं समझाए गए।"
      },
      write: {
        en: "Pick the option that matches the passport you hold. Most people hold an Ordinary passport. If the options on screen are not clear, ask at the Passport Seva Kendra or the call centre.",
        hi: "जो पासपोर्ट आपके पास है, उससे मेल खाता विकल्प चुनें। ज़्यादातर लोगों के पास साधारण (Ordinary) पासपोर्ट होता है। स्क्रीन के विकल्प समझ न आएँ तो पासपोर्ट सेवा केंद्र या कॉल सेंटर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Guessing an option you don't understand instead of asking"],
        hi: ["बिना समझे कोई भी विकल्प चुन लेना, पूछना नहीं"]
      }
    },
    {
      label: { en: "Passport details and Country for which PCC is required", hi: "पासपोर्ट की जानकारी और जिस देश के लिए PCC चाहिए" },
      quick: { en: "Passport number, issue/expiry dates DD-MM-YYYY, place; one country", hi: "पासपोर्ट नंबर, जारी/समाप्ति तारीख़ DD-MM-YYYY, जगह; एक देश" },
      meaning: {
        en: "The PCC instructions ask for your passport number, date of issue, date of expiry and place of issue, and the country for which you need the PCC.",
        hi: "PCC के निर्देशों में आपका पासपोर्ट नंबर, जारी होने की तारीख़, समाप्ति की तारीख़, जारी होने की जगह, और जिस देश के लिए PCC चाहिए, यह सब माँगा गया है।"
      },
      write: {
        en: "Copy them from your passport. Write dates as DD-MM-YYYY. The FAQ says one application gives a PCC for one country only, so if two countries ask for a PCC, you need two applications. The 2011 instructions say the country is stamped on the passport in some cases.",
        hi: "ये जानकारी अपने पासपोर्ट से उतारें। तारीख़ DD-MM-YYYY में लिखें। FAQ के अनुसार एक आवेदन से सिर्फ़ एक देश का PCC मिलता है, इसलिए दो देश PCC माँगें तो दो आवेदन करने होंगे। 2011 के निर्देशों के अनुसार कुछ मामलों में यह देश पासपोर्ट पर मुहर से लिखा जाता है।"
      },
      documents: {
        en: ["Your passport in original, with a self-attested photocopy of its first two and last two pages, including the ECR/Non-ECR page and the page of observation (if any)"],
        hi: ["आपका असली पासपोर्ट, और उसके पहले दो व आख़िरी दो पेजों की ख़ुद सत्यापित (self-attested) फ़ोटोकॉपी, जिसमें ECR/Non-ECR पेज और observation वाला पेज (अगर हो) भी हो"]
      },
      mistakes: {
        en: ["Writing two countries in one application", "Mixing up the date of issue and the date of expiry"],
        hi: ["एक ही आवेदन में दो देश लिखना", "जारी होने की तारीख़ और समाप्ति की तारीख़ आपस में बदल देना"]
      }
    },
    {
      label: { en: "Step 02: Applicant Details (Given Name, Surname and other particulars)", hi: "Step 02: आवेदक की जानकारी (दिया गया नाम, उपनाम और बाक़ी विवरण)" },
      quick: { en: "Exactly as printed in your passport", hi: "बिल्कुल वैसा जैसा पासपोर्ट में छपा है" },
      meaning: {
        en: "Your name and personal details. The FAQ says the \"inherited personal particulars\" — Given Name, Parents' Name, Gender, Date of Birth and Place of Birth — printed in the passport and in the PCC must be the same.",
        hi: "आपका नाम और निजी जानकारी। FAQ के अनुसार पासपोर्ट में छपी और PCC में लिखी ये जानकारी एक जैसी होनी चाहिए: दिया गया नाम (Given Name), माता-पिता का नाम, लिंग, जन्म तिथि और जन्म स्थान।"
      },
      write: {
        en: "Write your name exactly as in the passport. The instructions' example: if the passport says Surname JAIN and Given Name PIYUSH KUMAR, write PIYUSH KUMAR as Given Name and JAIN as Surname. If any of these particulars has changed since your passport was issued, Passport Seva says you must first apply for re-issue of the passport with the new details; the PCC is processed only after that.",
        hi: "नाम बिल्कुल पासपोर्ट जैसा लिखें। निर्देशों का उदाहरण: अगर पासपोर्ट में Surname JAIN और Given Name PIYUSH KUMAR है, तो Given Name में PIYUSH KUMAR और Surname में JAIN लिखें। अगर पासपोर्ट बनने के बाद इनमें से कोई जानकारी बदली है, तो पासपोर्ट सेवा के अनुसार पहले नई जानकारी के साथ पासपोर्ट दोबारा जारी (re-issue) कराना होगा; उसके बाद ही PCC पर काम होगा।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing your name the way it appears on your degree or Aadhaar when it differs from the passport", "Applying for PCC when your date or place of birth needs correcting in the passport"],
        hi: ["पासपोर्ट से अलग होने पर भी नाम डिग्री या आधार जैसा लिख देना", "पासपोर्ट में जन्म तिथि या जन्म स्थान सुधारना बाक़ी हो, फिर भी PCC के लिए आवेदन करना"]
      }
    },
    {
      label: { en: "Step 03: Family Details (father, mother, legal guardian, spouse)", hi: "Step 03: परिवार की जानकारी (पिता, माता, क़ानूनी अभिभावक, पति/पत्नी)" },
      quick: { en: "Parents' names as in passport; spouse as in spouse's passport", hi: "माता-पिता के नाम पासपोर्ट जैसे; पति/पत्नी का नाम उनके पासपोर्ट जैसा" },
      meaning: {
        en: "Names of your family members as asked on the form. Parents' names are among the particulars that must match your passport.",
        hi: "फॉर्म में माँगे गए परिवार के लोगों के नाम। माता-पिता का नाम उन जानकारियों में है जो आपके पासपोर्ट से मेल खानी चाहिए।"
      },
      write: {
        en: "If your spouse has a passport, write the spouse's name as written in that passport. If you give a legal guardian, attach the court decree/order. If you married after your passport was issued, Passport Seva allows adding the spouse's name on the PCC application with a marriage certificate, without changing the passport.",
        hi: "अगर पति/पत्नी का पासपोर्ट है, तो उनका नाम वैसा ही लिखें जैसा उनके पासपोर्ट में है। अगर क़ानूनी अभिभावक का नाम दे रहे हैं, तो कोर्ट का आदेश (decree/order) लगाएँ। अगर पासपोर्ट बनने के बाद शादी हुई है, तो पासपोर्ट सेवा के अनुसार शादी का प्रमाणपत्र देकर PCC आवेदन में पति/पत्नी का नाम जोड़ सकते हैं, पासपोर्ट बदलने की ज़रूरत नहीं।"
      },
      documents: {
        en: ["Marriage certificate, if adding a spouse's name after marriage", "Court decree/order, if you give a legal guardian"],
        hi: ["शादी का प्रमाणपत्र, अगर शादी के बाद पति/पत्नी का नाम जोड़ रहे हैं", "कोर्ट का आदेश, अगर क़ानूनी अभिभावक का नाम दे रहे हैं"]
      },
      mistakes: {
        en: ["Parents' names spelt differently from the passport"],
        hi: ["माता-पिता के नाम की स्पेलिंग पासपोर्ट से अलग होना"]
      }
    },
    {
      label: { en: "Step 04: Address Details: present residential address and contact details", hi: "Step 04: पते की जानकारी: मौजूदा पता और संपर्क" },
      quick: { en: "Full present address with police station, PIN, mobile, email", hi: "पूरा मौजूदा पता, थाना, पिन, मोबाइल, ईमेल" },
      meaning: {
        en: "The address where you live now. The instructions ask for house number, street, village/town/city, district, police station, State/UT, country and PIN, plus mobile number, telephone and e-mail if any. Police verification is linked to this address.",
        hi: "जहाँ आप अभी रहते हैं उसका पता। निर्देशों में मकान नंबर, गली, गाँव/कस्बा/शहर, ज़िला, थाना, राज्य/केंद्र शासित प्रदेश, देश और पिन माँगा गया है, साथ में मोबाइल, टेलीफ़ोन और ईमेल (अगर हों)। पुलिस जाँच इसी पते से जुड़ी होती है।"
      },
      write: {
        en: "Write the complete address. The instructions warn of a heavy penalty for false information or hiding information about your present address. If your present address is different from the one in your passport, Passport Seva says you can submit a present address proof; you do not need to change the passport for this.",
        hi: "पूरा पता लिखें। निर्देशों में चेतावनी है कि मौजूदा पते के बारे में झूठी जानकारी देने या जानकारी छिपाने पर भारी जुर्माना लग सकता है। अगर मौजूदा पता पासपोर्ट वाले पते से अलग है, तो पासपोर्ट सेवा के अनुसार मौजूदा पते का प्रमाण दे सकते हैं; इसके लिए पासपोर्ट बदलवाने की ज़रूरत नहीं।"
      },
      documents: {
        en: [
          "If your address differs from the passport, one Proof of Present Address, such as: water bill; telephone (landline or post-paid mobile) bill; electricity bill; Income Tax Assessment Order; Voter ID (Election Commission Photo ID); proof of gas connection; employer's certificate on letterhead (public limited companies only, with seal); spouse's passport copy (if same address); Aadhaar; rent agreement; photo passbook of a running bank account (scheduled public/private sector Indian banks and regional rural banks only)",
          "For a minor: address proof in a parent's name can be given"
        ],
        hi: [
          "अगर पता पासपोर्ट से अलग है, तो मौजूदा पते का एक प्रमाण, जैसे: पानी का बिल; टेलीफ़ोन (लैंडलाइन या पोस्ट-पेड मोबाइल) बिल; बिजली का बिल; Income Tax Assessment Order; वोटर आईडी; गैस कनेक्शन का प्रमाण; नियोक्ता का लेटरहेड पर प्रमाणपत्र (सिर्फ़ पब्लिक लिमिटेड कंपनी, मुहर के साथ); पति/पत्नी के पासपोर्ट की कॉपी (अगर पता वही हो); आधार; किरायानामा; चालू बैंक खाते की फ़ोटो वाली पासबुक (सिर्फ़ शेड्यूल्ड सरकारी/निजी भारतीय बैंक और ग्रामीण बैंक)",
          "नाबालिग के लिए: माता-पिता के नाम का पते का प्रमाण दिया जा सकता है"
        ]
      },
      mistakes: {
        en: ["Giving your old passport address when you now live elsewhere", "Leaving out the police station"],
        hi: ["कहीं और रहते हुए भी पासपोर्ट वाला पुराना पता लिख देना", "थाने का नाम न लिखना"]
      }
    },
    {
      label: { en: "Is permanent address same as present address? / Permanent address", hi: "क्या स्थायी पता मौजूदा पते जैसा ही है? / स्थायी पता" },
      quick: { en: "Yes or No; if No, give the permanent address", hi: "Yes या No; No हो तो स्थायी पता लिखें" },
      meaning: {
        en: "Whether your permanent home address is the same as where you live now.",
        hi: "क्या आपका स्थायी (घर का) पता वही है जहाँ आप अभी रहते हैं।"
      },
      write: {
        en: "Choose Yes or No. Only if No, give the full permanent address (with police station and PIN) and the contact details of the person living there, as the instructions say.",
        hi: "Yes या No चुनें। सिर्फ़ No होने पर पूरा स्थायी पता (थाना और पिन के साथ) और वहाँ रहने वाले व्यक्ति का संपर्क दें, जैसा निर्देशों में लिखा है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Students in a hostel or PG choosing Yes when their permanent home is elsewhere"],
        hi: ["हॉस्टल या PG में रहने वाले छात्र, घर कहीं और होते हुए भी Yes चुन लेना"]
      }
    },
    {
      label: { en: "References in your village/town/city (two persons)", hi: "आपके गाँव/शहर के दो संदर्भ (reference) व्यक्ति" },
      quick: { en: "If asked: two local people who know you, with contacts", hi: "अगर माँगे: दो स्थानीय लोग जो आपको जानते हों, संपर्क के साथ" },
      meaning: {
        en: "The 2011 instructions ask for the name, full address and contact details of two persons in your village/town/city who know you and can be contacted during police verification. On the paper form this was needed only if your present address differs from your passport address.",
        hi: "2011 के निर्देशों में आपके गाँव/शहर के ऐसे दो लोगों का नाम, पूरा पता और संपर्क माँगा गया है जो आपको जानते हों और पुलिस जाँच के समय उनसे बात की जा सके। काग़ज़ी फॉर्म में यह तभी भरना था जब मौजूदा पता पासपोर्ट वाले पते से अलग हो।"
      },
      write: {
        en: "If the online form asks for references, give two people near your present address who know you, and tell them the police may contact them. Whether family members can be references is not stated; ask at the Passport Seva Kendra.",
        hi: "अगर ऑनलाइन फॉर्म reference माँगे, तो मौजूदा पते के पास के दो ऐसे लोग दें जो आपको जानते हों, और उन्हें बता दें कि पुलिस उनसे संपर्क कर सकती है। परिवार वाले reference बन सकते हैं या नहीं, यह नहीं लिखा; पासपोर्ट सेवा केंद्र में पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Giving a wrong or switched-off phone number for a reference"],
        hi: ["reference का ग़लत या बंद फ़ोन नंबर देना"]
      }
    },
    {
      label: { en: "Step 05: Other Details (criminal proceedings pending?)", hi: "Step 05: अन्य जानकारी (क्या कोई आपराधिक मामला चल रहा है?)" },
      quick: { en: "Answer Yes/No truthfully; attach court papers if Yes", hi: "सच-सच Yes/No; Yes हो तो कोर्ट के काग़ज़ लगाएँ" },
      meaning: {
        en: "The instructions ask whether any criminal proceedings are pending against you before a court in India.",
        hi: "निर्देशों में पूछा गया है कि क्या भारत की किसी अदालत में आपके ख़िलाफ़ कोई आपराधिक मामला चल रहा है।"
      },
      write: {
        en: "Answer truthfully. If Yes, attach the relevant documents. The instructions say incorrect or suppressed information leads to rejection and penal action under the Passports Act, 1967. Passport Seva's FAQ also has a separate section for applicants who are convicted or have a court case pending; read it or ask the Passport Office.",
        hi: "सच-सच जवाब दें। Yes हो तो संबंधित काग़ज़ लगाएँ। निर्देशों के अनुसार ग़लत जानकारी देने या छिपाने पर आवेदन ख़ारिज होगा और पासपोर्ट अधिनियम, 1967 के तहत सज़ा हो सकती है। पासपोर्ट सेवा के FAQ में सज़ा पाए या कोर्ट केस वाले आवेदकों के लिए अलग हिस्सा है; उसे पढ़ें या पासपोर्ट ऑफ़िस से पूछें।"
      },
      documents: { en: ["If Yes: relevant court documents"], hi: ["अगर Yes: संबंधित कोर्ट के काग़ज़"] },
      mistakes: {
        en: ["Answering No to hide a pending case: police verification can bring it out"],
        hi: ["चल रहा केस छिपाने के लिए No लिखना: पुलिस जाँच में यह सामने आ सकता है"]
      }
    },
    {
      label: { en: "Step 06: Self Declaration and Submit (ARN)", hi: "Step 06: स्व-घोषणा और सबमिट (ARN)" },
      quick: { en: "Check everything, accept declaration, submit; note your ARN", hi: "सब जाँचें, घोषणा स्वीकार करें, सबमिट करें; ARN नोट करें" },
      meaning: {
        en: "You declare the information is true. On submission a unique Application Reference Number (ARN) is generated.",
        hi: "आप घोषणा करते हैं कि जानकारी सही है। सबमिट करने पर एक ख़ास Application Reference Number (ARN) बनता है।"
      },
      write: {
        en: "Passport Seva says: \"Carefully validate the details before submitting the application. You will not be able to make changes to the application once it is submitted.\" On the old paper form, a parent or legal guardian signed the declaration for a minor; ask how this is done online for a minor.",
        hi: "पासपोर्ट सेवा कहती है: सबमिट करने से पहले सारी जानकारी ध्यान से जाँच लें; सबमिट होने के बाद आवेदन में बदलाव नहीं हो सकेगा। पुराने काग़ज़ी फॉर्म में नाबालिग की ओर से माता-पिता या क़ानूनी अभिभावक घोषणा पर हस्ताक्षर करते थे; नाबालिग के लिए ऑनलाइन यह कैसे होता है, पूछ लें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Submitting without re-checking: no edits are possible afterwards", "Not noting down the ARN"],
        hi: ["दोबारा जाँचे बिना सबमिट करना: बाद में बदलाव नहीं होगा", "ARN नोट न करना"]
      }
    },
    {
      label: { en: "Pay and Schedule Appointment (fee)", hi: "फ़ीस भरें और अपॉइंटमेंट लें" },
      quick: { en: "Pay Rs. 750 online, then book PSK/POPSK appointment", hi: "₹750 ऑनलाइन भरें, फिर PSK/POPSK का अपॉइंटमेंट लें" },
      meaning: {
        en: "After submitting, go to View > Pay and Schedule Appointment. Passport Seva says prior payment of the fee is mandatory for booking appointments at all Passport Seva Kendras.",
        hi: "सबमिट करने के बाद View > Pay and Schedule Appointment पर जाएँ। पासपोर्ट सेवा के अनुसार सभी पासपोर्ट सेवा केंद्रों में अपॉइंटमेंट के लिए पहले फ़ीस भरना ज़रूरी है।"
      },
      write: {
        en: "Select Online Payment, the Normal appointment quota (Tatkaal is only for Tatkaal applications), and your preferred PSK or Post Office PSK; the system shows the next available date. Fee: the Instruction Booklet V3.0 (fees revised from 1 July 2026) lists PCC at Rs. 750, with no Tatkaal fee (\"NA\"); the site's Fee Calculator also showed Rs. 750 on 7 November 2026. Check the Fee Calculator before paying. You can reschedule an appointment up to three times. After paying, you can print the application receipt, but an SMS with appointment details is also accepted.",
        hi: "Online Payment, Normal अपॉइंटमेंट कोटा (Tatkaal सिर्फ़ तत्काल आवेदनों के लिए है) और अपनी पसंद का PSK या पोस्ट ऑफ़िस PSK चुनें; सिस्टम अगली ख़ाली तारीख़ दिखाएगा। फ़ीस: Instruction Booklet V3.0 (1 जुलाई 2026 से बदली फ़ीस) में PCC की फ़ीस ₹750 है, तत्काल फ़ीस नहीं (\"NA\"); वेबसाइट के Fee Calculator पर भी 7 नवंबर 2026 को ₹750 दिखा। पैसे देने से पहले Fee Calculator ज़रूर देखें। अपॉइंटमेंट तीन बार तक बदल सकते हैं। पैसे देने के बाद रसीद प्रिंट कर सकते हैं, पर अपॉइंटमेंट वाला SMS भी मान्य है।"
      },
      changed: {
        en: "Fee changed on 1 July 2026: the booklet used until then (V2.9) listed PCC at Rs. 500; the current booklet (V3.0) lists Rs. 750. Older websites and videos may still show Rs. 500.",
        hi: "1 जुलाई 2026 को फ़ीस बदली: उससे पहले की बुकलेट (V2.9) में PCC की फ़ीस ₹500 थी; मौजूदा बुकलेट (V3.0) में ₹750 है। पुरानी वेबसाइटों और वीडियो में अभी भी ₹500 दिख सकता है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Paying an agent or a fake website extra money", "Going by the old Rs. 500 fee"],
        hi: ["एजेंट या नकली वेबसाइट को ज़्यादा पैसे देना", "पुरानी ₹500 वाली फ़ीस मान लेना"]
      }
    },
    {
      label: { en: "Visit the Passport Seva Kendra and getting the PCC", hi: "पासपोर्ट सेवा केंद्र जाना और PCC मिलना" },
      quick: { en: "Go on appointment date with passport and originals", hi: "अपॉइंटमेंट वाले दिन पासपोर्ट और असली काग़ज़ लेकर जाएँ" },
      meaning: {
        en: "You visit the PSK/RPO where the appointment is booked, with original documents. The FAQ says the PCC is automatically dispatched to your address after a clear police verification report is received.",
        hi: "जहाँ अपॉइंटमेंट लिया है उस PSK/RPO पर असली दस्तावेज़ों के साथ जाएँ। FAQ के अनुसार पुलिस जाँच की साफ़ रिपोर्ट आने के बाद PCC अपने-आप आपके पते पर भेज दिया जाता है।"
      },
      write: {
        en: "Carry your original passport and the other documents. If you do not visit the PSK within 90 days of submitting the online form, you must submit the application again. No fixed number of days for issue is given on the site. Since foreign governments generally treat a PCC as valid for about six months, plan the timing with your visa application.",
        hi: "असली पासपोर्ट और बाक़ी दस्तावेज़ साथ ले जाएँ। ऑनलाइन फॉर्म भरने के 90 दिन के अंदर PSK नहीं गए, तो आवेदन दोबारा भरना होगा। वेबसाइट पर PCC मिलने के तय दिन नहीं लिखे हैं। विदेशी सरकारें आमतौर पर PCC को लगभग छह महीने तक मान्य मानती हैं, इसलिए वीज़ा आवेदन के हिसाब से समय तय करें।"
      },
      documents: {
        en: ["Original passport, with self-attested photocopy of first two and last two pages (including ECR/Non-ECR and observation pages)", "Original of your present address proof, if your address differs from the passport"],
        hi: ["असली पासपोर्ट, और पहले दो व आख़िरी दो पेजों की self-attested फ़ोटोकॉपी (ECR/Non-ECR और observation पेज सहित)", "अगर पता पासपोर्ट से अलग है, तो मौजूदा पते के प्रमाण का असली"]
      },
      mistakes: {
        en: ["Applying too early, so the PCC is older than six months when the embassy sees it", "Missing the 90-day window after online submission"],
        hi: ["बहुत पहले आवेदन कर देना, जिससे दूतावास तक पहुँचते-पहुँचते PCC छह महीने से पुराना हो जाए", "ऑनलाइन सबमिट के बाद 90 दिन की सीमा निकल जाना"]
      }
    }
  ]
});
