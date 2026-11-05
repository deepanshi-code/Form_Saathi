// Checked against these official documents:
//  - India Post, "Application Form For Opening of Post Office Savings Bank Account" (form code SB-AOF, "Application
//    for Opening of Account/Purchase of Certificate", 2 pages; PDF created 29-10-2020; listed on the indiapost.gov.in
//    Forms page with the date 16-08-2025); its scheme list and declarations include PPF,
//    https://www.indiapost.gov.in/api/documents/file/100a9s52rrrl01hcp05npx04p3a01eko0s5lh3hhl73a0qr09vcx3ifwm05mh2
//    (an earlier copy of the same form, PDF created 02-09-2020, is also on indiapost.gov.in)
//  - Ministry of Finance notification G.S.R. 915(E) dated 12-12-2019, the Public Provident Fund Scheme, 2019, with its
//    Form-1 (Gazette copy on indiapost.gov.in:
//    https://www.indiapost.gov.in/documents/offerings/schemesandservices/posb/PublicProvidentFundScheme2019English.pdf)
//  - Government Savings Promotion General Rules, 2018 (Gazette copy on indiapost.gov.in:
//    https://www.indiapost.gov.in/documents/offerings/schemesandservices/posb/GSPREnglish2018.pdf), rules 4, 5, 10 and 14
// The Scheme was amended later (for example the interest paragraph in 2020 and G.S.R. 831(E) of 07-11-2023); those
// amendment texts were not read, so this guide does not explain the parts they may change (interest, extension,
// premature closure) beyond saying "ask the post office". No interest rate is given.
// Every statement below comes from one of those documents. If something is not stated in them, the guide says
// "ask the post office" instead of guessing.

window.FORMS.push({
  id: "ppf-account",
  verified: true,
  source: {
    title: "India Post SB-AOF Application for Opening of Account (PDF created 29-10-2020, on the indiapost.gov.in Forms page dated 16-08-2025), checked with the Public Provident Fund Scheme, 2019 (G.S.R. 915(E), 12-12-2019) and the Government Savings Promotion General Rules, 2018",
    url: "https://www.indiapost.gov.in/api/documents/file/100a9s52rrrl01hcp05npx04p3a01eko0s5lh3hhl73a0qr09vcx3ifwm05mh2"
  },
  caution: {
    en: "India Post uses one common account opening form (SB-AOF) for all its savings schemes, including PPF. The copy on its website was made in 2020; no newer version was found. The PPF Scheme read here is the 2019 Gazette text; it has been amended since (for example in 2020 and 2023), so ask the post office about the current rules for interest, extension and early closure. The interest rate is changed by the Government from time to time, so ask for the current rate. Banks that open PPF accounts use their own forms, which may look different.",
    hi: "इंडिया पोस्ट PPF समेत अपनी सभी बचत योजनाओं के लिए एक ही खाता खोलने का फॉर्म (SB-AOF) इस्तेमाल करता है। उसकी वेबसाइट पर मिली कॉपी 2020 में बनी है; इससे नया वर्ज़न नहीं मिला। यहाँ पढ़ी गई PPF योजना 2019 का गज़ट पाठ है; इसके बाद इसमें बदलाव हुए हैं (जैसे 2020 और 2023 में), इसलिए ब्याज, अवधि बढ़ाने और जल्दी बंद करने के मौजूदा नियम डाकघर से पूछें। ब्याज दर सरकार समय-समय पर बदलती है, इसलिए मौजूदा दर भी पूछ लें। जो बैंक PPF खाता खोलते हैं, उनके अपने फॉर्म होते हैं, जो अलग दिख सकते हैं।"
  },
  lastChecked: "2026-11-05",

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "PPF Account Opening (Post Office / Bank)", hi: "PPF (पब्लिक प्रोविडेंट फंड) खाता खोलना (डाकघर / बैंक)" },
  about: {
    en: "Public Provident Fund (PPF) is a Government small savings account. A resident Indian citizen can open one in their own name, and a guardian can open one on behalf of a minor. A person can have only one PPF account in their own name in any post office or bank, a minor can have only one (opened by any one guardian), and joint PPF accounts are not allowed. You open it with at least ₹500 and then deposit in multiples of ₹50, in one go or in instalments. You must deposit at least ₹500 and not more than ₹1,50,000 in a financial year; this ₹1,50,000 limit includes what you put in your own account and in a minor's account you opened. The account matures 15 years after the end of the financial year in which it was opened, and can then be extended in blocks of five years. At the post office it is opened on the common Account Opening Form (SB-AOF) with your photo, Aadhaar, PAN and ID/address proof. If you skip the minimum yearly deposit, the account becomes \"discontinued\" until revived.",
    hi: "PPF (पब्लिक प्रोविडेंट फंड) एक सरकारी छोटी बचत योजना का खाता है। भारत का निवासी नागरिक इसे अपने नाम पर खोल सकता है, और अभिभावक (गार्डियन) किसी नाबालिग की ओर से खोल सकता है। किसी भी डाकघर या बैंक में एक व्यक्ति के अपने नाम पर सिर्फ़ एक PPF खाता हो सकता है, नाबालिग के नाम पर भी सिर्फ़ एक (किसी एक अभिभावक द्वारा), और जॉइंट PPF खाता नहीं खुलता। खाता कम से कम ₹500 से खुलता है, फिर ₹50 के गुणकों में, एक बार में या किस्तों में जमा होता है। एक वित्त वर्ष में कम से कम ₹500 और ज़्यादा से ज़्यादा ₹1,50,000 जमा करना होता है; यह ₹1,50,000 की सीमा आपके अपने खाते और आपके खोले नाबालिग के खाते को मिलाकर है। जिस वित्त वर्ष में खाता खुला, उसके ख़त्म होने के 15 साल बाद खाता पूरा (मैच्योर) होता है, और फिर 5-5 साल के लिए बढ़ाया जा सकता है। डाकघर में यह साझा खाता खोलने के फॉर्म (SB-AOF) पर खुलता है, साथ में फ़ोटो, आधार, पैन और पहचान/पते का सबूत। किसी साल न्यूनतम जमा नहीं किया, तो खाता \"बंद (discontinued)\" माना जाता है, जब तक दोबारा चालू न कराएँ।"
  },

  fields: [
    {
      label: { en: "Paste photograph of applicant/s", hi: "आवेदक/आवेदकों की फ़ोटो चिपकाएँ" },
      quick: { en: "Paste your recent passport-size photo in the first box", hi: "पहले खाने में अपनी हाल की पासपोर्ट फ़ोटो चिपकाएँ" },
      meaning: {
        en: "Three boxes for photographs of the applicants. A PPF account has only one applicant: you, or the guardian for a minor's account.",
        hi: "आवेदकों की फ़ोटो के लिए तीन खाने। PPF खाते में सिर्फ़ एक आवेदक होता है: आप, या नाबालिग के खाते में अभिभावक।"
      },
      write: {
        en: "The General Rules ask for \"a recent passport size photograph\". Paste it in the first box and leave the other two empty. For a minor's account, ask the post office whose photo they need.",
        hi: "सामान्य नियमों में \"हाल की पासपोर्ट साइज़ फ़ोटो\" माँगी गई है। इसे पहले खाने में चिपकाएँ और बाकी दो खाने खाली छोड़ें। नाबालिग के खाते में किसकी फ़ोटो लगेगी, यह डाकघर से पूछें।"
      },
      documents: { en: ["Recent passport-size photograph"], hi: ["हाल की पासपोर्ट साइज़ फ़ोटो"] },
      mistakes: {
        en: ["Using an old photo", "Stapling the photo over other boxes of the form"],
        hi: ["पुरानी फ़ोटो लगाना", "फ़ोटो को फॉर्म के दूसरे खानों के ऊपर स्टेपल कर देना"]
      }
    },
    {
      label: { en: "To The Postmaster ... ; I/We ... (Applicant/guardian) hereby apply ... under ... scheme", hi: "सेवा में पोस्टमास्टर ... ; मैं/हम ... (आवेदक/अभिभावक) ... योजना में खाता खोलने के लिए आवेदन करते हैं" },
      quick: { en: "Post office name; your full name; write PPF as the scheme", hi: "डाकघर का नाम; अपना पूरा नाम; योजना में PPF लिखें" },
      meaning: {
        en: "The name of your post office, your name as the applicant (or the guardian's name for a minor's account), and the scheme. The scheme list on the form includes PPF.",
        hi: "आपके डाकघर का नाम, आवेदक के रूप में आपका नाम (नाबालिग के खाते में अभिभावक का नाम), और योजना। फॉर्म की योजनाओं की सूची में PPF भी है।"
      },
      write: {
        en: "Under \"The Postmaster\" write the post office's name and place. After \"I/We\" write your full name. In the scheme blank write \"PPF\". The form's instructions say to use CAPITAL LETTERS only and to tick the right boxes.",
        hi: "\"The Postmaster\" के नीचे डाकघर का नाम और जगह लिखें। \"I/We\" के बाद अपना पूरा नाम लिखें। योजना वाली खाली जगह में \"PPF\" लिखें। फॉर्म के निर्देशों के अनुसार सिर्फ़ बड़े (कैपिटल) अक्षरों में लिखें और सही खानों पर टिक करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the scheme name blank", "Writing in small letters"],
        hi: ["योजना का नाम खाली छोड़ना", "छोटे अक्षरों में लिखना"]
      }
    },
    {
      label: { en: "(i) Additional Facilities available (For Post Office Savings Account)", hi: "(i) अतिरिक्त सुविधाएँ (सिर्फ़ डाकघर बचत खाते के लिए)" },
      quick: { en: "Leave blank for PPF; these are for Savings Account", hi: "PPF के लिए खाली छोड़ें; ये बचत खाते के लिए हैं" },
      meaning: {
        en: "Tick boxes for cheque book, IPPB account, Aadhaar seeding, ATM card, internet and mobile banking, and PMSBY, PMJJBY and APY.",
        hi: "चेक बुक, IPPB खाता, आधार सीडिंग, एटीएम कार्ड, इंटरनेट और मोबाइल बैंकिंग, और PMSBY, PMJJBY व APY के टिक वाले खाने।"
      },
      write: {
        en: "The heading says these are \"For Post Office Savings Account\", so for PPF you normally leave this part empty. The form says separate prescribed forms are needed for these services; ask the post office if you want any of them on a Savings Account.",
        hi: "हेडिंग में लिखा है कि ये \"डाकघर बचत खाते के लिए\" हैं, इसलिए PPF के लिए यह हिस्सा आम तौर पर खाली छोड़ें। फॉर्म के अनुसार इन सेवाओं के लिए अलग तय फॉर्म लगते हैं; बचत खाते पर इनमें से कुछ चाहिए तो डाकघर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking cheque book or ATM card for a PPF account"],
        hi: ["PPF खाते के लिए चेक बुक या एटीएम कार्ड पर टिक कर देना"]
      }
    },
    {
      label: { en: "(ii) Account Holder Type and (iii) Account Type", hi: "(ii) खाताधारक का प्रकार और (iii) खाते का प्रकार" },
      quick: { en: "Tick \"Self\" (or \"Minor through Guardian\") and \"Single\"", hi: "\"Self\" (या \"Minor through Guardian\") और \"Single\" पर टिक करें" },
      meaning: {
        en: "Who holds the account (Self / Minor through Guardian / Person of unsound mind through guardian) and whether it is single or joint.",
        hi: "खाता किसका है (ख़ुद / अभिभावक के ज़रिए नाबालिग / अभिभावक के ज़रिए मानसिक रूप से अस्वस्थ व्यक्ति) और खाता अकेला है या जॉइंट।"
      },
      write: {
        en: "If you are 18 or older and opening for yourself, tick \"Self\". If a parent is opening it for a child, tick \"Minor through Guardian\". Always tick \"Single\": the PPF Scheme says a joint account shall not be opened.",
        hi: "अगर आप 18 या उससे ज़्यादा के हैं और अपने लिए खोल रहे हैं, तो \"Self\" पर टिक करें। अगर माता-पिता बच्चे के लिए खोल रहे हैं, तो \"Minor through Guardian\"। हमेशा \"Single\" पर टिक करें: PPF योजना के अनुसार जॉइंट खाता नहीं खुलता।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking Joint A or Joint B"],
        hi: ["Joint A या Joint B पर टिक कर देना"]
      }
    },
    {
      label: { en: "1. In case of account opened in the name of Minor: name, date of birth, gender, guardian, proof of age", hi: "1. नाबालिग के नाम पर खाता हो तो: नाम, जन्म तिथि, लिंग, अभिभावक, उम्र का प्रमाण" },
      quick: { en: "Only for a child's account; leave blank for your own", hi: "सिर्फ़ बच्चे के खाते के लिए; अपने खाते में खाली छोड़ें" },
      meaning: {
        en: "Details of the minor (name, date of birth in figures and words, gender), the guardian's name, relationship and whether the guardian is natural (such as a parent) or legal, and details of the minor's proof of age (with date of issue and issuing authority).",
        hi: "नाबालिग की जानकारी (नाम, जन्म तिथि अंकों और शब्दों में, लिंग), अभिभावक का नाम, रिश्ता और अभिभावक प्राकृतिक है (जैसे माता-पिता) या क़ानूनी, और नाबालिग की उम्र के प्रमाण का विवरण (जारी तारीख़ और जारी करने वाला)।"
      },
      write: {
        en: "Leave this table empty if you are opening the account in your own name. For a minor, fill all of it. The PPF Scheme says a guardian may open one account for each minor, but only one account can be opened in a minor's name by any guardian, so check that the other parent has not already opened one. The General Rules say proof of the minor's age is needed.",
        hi: "अगर खाता अपने नाम पर खोल रहे हैं तो यह टेबल खाली छोड़ें। नाबालिग के लिए पूरी भरें। PPF योजना के अनुसार अभिभावक हर नाबालिग के लिए एक खाता खोल सकता है, लेकिन किसी नाबालिग के नाम पर, किसी भी अभिभावक द्वारा, सिर्फ़ एक खाता खुल सकता है; इसलिए पक्का कर लें कि दूसरे माता-पिता ने पहले से न खोला हो। सामान्य नियमों के अनुसार नाबालिग की उम्र का प्रमाण चाहिए।"
      },
      documents: { en: ["Proof of the minor's age, such as a birth certificate (only for a minor's account)"], hi: ["नाबालिग की उम्र का प्रमाण, जैसे जन्म प्रमाण पत्र (सिर्फ़ नाबालिग के खाते में)"] },
      mistakes: {
        en: ["Filling this table for your own account", "Both parents opening separate PPF accounts for the same child"],
        hi: ["अपने खाते के लिए भी यह टेबल भर देना", "माता और पिता दोनों का एक ही बच्चे के लिए अलग-अलग PPF खाता खोल देना"]
      }
    },
    {
      label: { en: "2. I/We tender herewith Rs ... (in words) in cash/DD/Cheque ... as initial deposit", hi: "2. मैं/हम शुरुआती जमा के रूप में ₹ ... (शब्दों में) नकद/डीडी/चेक से दे रहे हैं" },
      quick: { en: "At least ₹500, in multiples of ₹50; figures and words", hi: "कम से कम ₹500, ₹50 के गुणकों में; अंकों और शब्दों में" },
      meaning: {
        en: "The first deposit you pay when opening the account, and how you pay it.",
        hi: "खाता खोलते समय पहली बार जमा की जाने वाली रक़म, और उसे कैसे दे रहे हैं।"
      },
      write: {
        en: "Write the amount in figures and in words, and the cheque or DD number and date if not paying cash. The Scheme says the minimum initial deposit is ₹500 and then any sum in multiples of ₹50, and the total in a financial year cannot be more than ₹1,50,000 (including deposits in a minor's account you opened). The General Rules say a cheque deposit counts from the date the cheque is realised, and a deposit needs a pay-in-slip.",
        hi: "रक़म अंकों और शब्दों में लिखें, और नकद नहीं दे रहे तो चेक या डीडी का नंबर और तारीख़। योजना के अनुसार शुरुआती जमा कम से कम ₹500 है, फिर ₹50 के गुणकों में कोई भी रक़म, और एक वित्त वर्ष में कुल ₹1,50,000 से ज़्यादा नहीं (आपके खोले नाबालिग के खाते को मिलाकर)। सामान्य नियमों के अनुसार चेक से जमा उस दिन से माना जाता है जिस दिन चेक का पैसा आ जाए, और जमा के साथ पे-इन-स्लिप लगती है।"
      },
      documents: { en: ["Cash, cheque or demand draft for the deposit", "Pay-in-slip"], hi: ["जमा के लिए नकद, चेक या डिमांड ड्राफ़्ट", "पे-इन-स्लिप"] },
      mistakes: {
        en: ["An amount not in multiples of ₹50, like ₹525", "Amount in words not matching the figures", "Going over ₹1,50,000 in a year across your and your child's accounts"],
        hi: ["₹50 के गुणक में न होने वाली रक़म, जैसे ₹525", "शब्दों और अंकों में अलग-अलग रक़म", "अपने और बच्चे के खाते को मिलाकर साल में ₹1,50,000 से ज़्यादा जमा करना"]
      }
    },
    {
      label: { en: "Particulars: Name of the Applicant/Guardian, Name of Husband/Father/Mother, Gender, Date of Birth (and in words)", hi: "विवरण: आवेदक/अभिभावक का नाम, पति/पिता/माता का नाम, लिंग, जन्म तिथि (शब्दों में भी)" },
      quick: { en: "Your details in the 1st Applicant column only", hi: "अपनी जानकारी सिर्फ़ पहले आवेदक वाले कॉलम में" },
      meaning: {
        en: "A table with columns for 1st, 2nd and 3rd Applicant. PPF has no joint account, so only the 1st Applicant column is used.",
        hi: "पहले, दूसरे और तीसरे आवेदक के कॉलम वाली टेबल। PPF में जॉइंट खाता नहीं होता, इसलिए सिर्फ़ पहले आवेदक वाला कॉलम भरा जाता है।"
      },
      write: {
        en: "In the 1st Applicant column write your name (or the guardian's, for a minor's account), your husband's/father's/mother's name, gender (M/F/O), and date of birth as DD/MM/YYYY and also in words (marked mandatory). Leave the 2nd and 3rd columns empty.",
        hi: "पहले आवेदक वाले कॉलम में अपना नाम (नाबालिग के खाते में अभिभावक का), पति/पिता/माता का नाम, लिंग (M/F/O), और जन्म तिथि DD/MM/YYYY में और शब्दों में भी (यह ज़रूरी लिखा है) लिखें। दूसरे और तीसरे कॉलम खाली छोड़ें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Skipping the date of birth in words", "Filling a second applicant"],
        hi: ["जन्म तिथि शब्दों में न लिखना", "दूसरे आवेदक का कॉलम भर देना"]
      }
    },
    {
      label: { en: "Aadhaar Number, PAN Number*, CIF ID (existing A/Cs holders)", hi: "आधार नंबर, पैन नंबर*, CIF ID (पहले से खाता हो तो)" },
      quick: { en: "Your Aadhaar and PAN; CIF ID only if already a customer", hi: "अपना आधार और पैन; CIF ID सिर्फ़ पुराने ग्राहक के लिए" },
      meaning: {
        en: "Your Aadhaar number and PAN, and the CIF ID (customer number) if you already have a post office account.",
        hi: "आपका आधार नंबर और पैन, और अगर डाकघर में पहले से खाता है तो CIF ID (ग्राहक नंबर)।"
      },
      write: {
        en: "The General Rules ask for the Aadhaar number (or proof of Aadhaar enrolment) and the PAN or Form 60. If PAN is not given at opening, it must be given within six months, or the account stops working until it is given. For a minor's account, the guardian's documents are given. Write the CIF ID only if you already have a post office account; it is on that account's passbook.",
        hi: "सामान्य नियमों में आधार नंबर (या आधार नामांकन का सबूत) और पैन या फॉर्म 60 माँगा गया है। खाता खोलते समय पैन न दिया हो, तो छह महीने में देना होता है, नहीं तो पैन देने तक खाता नहीं चलता। नाबालिग के खाते में अभिभावक के काग़ज़ दिए जाते हैं। CIF ID तभी लिखें जब डाकघर में पहले से खाता हो; यह उस खाते की पासबुक पर होता है।"
      },
      documents: { en: ["Aadhaar", "PAN card (or the no-PAN declaration the post office asks for)"], hi: ["आधार", "पैन कार्ड (या पैन न होने की वह घोषणा जो डाकघर माँगे)"] },
      mistakes: {
        en: ["A wrong digit in Aadhaar or PAN", "Forgetting to give PAN within six months"],
        hi: ["आधार या पैन में कोई अंक ग़लत लिखना", "छह महीने में पैन देना भूल जाना"]
      },
      changed: {
        en: "The General Rules (2018) say \"Form 60\" for people without PAN. Under the Income-tax Rules, 2026 (from 1 April 2026) this declaration is Form 97. Ask the post office which form to give.",
        hi: "सामान्य नियम (2018) में पैन न होने पर \"फॉर्म 60\" लिखा है। आयकर नियम, 2026 (1 अप्रैल 2026 से) में यह घोषणा फॉर्म 97 है। डाकघर से पूछें कि कौन-सा फॉर्म देना है।"
      }
    },
    {
      label: { en: "Present Address, Permanent Address, Telephone No./Mobile No.*, E-mail ID", hi: "वर्तमान पता, स्थायी पता, टेलीफ़ोन/मोबाइल नंबर*, ईमेल आईडी" },
      quick: { en: "Both addresses with PIN, your mobile number and email", hi: "दोनों पते पिन के साथ, अपना मोबाइल और ईमेल" },
      meaning: {
        en: "Where you live now and your permanent address (house, locality/village, post office, city, district, state, PIN code), plus phone and email.",
        hi: "आप अभी कहाँ रहते हैं और स्थायी पता (मकान, मोहल्ला/गाँव, डाकघर, शहर, ज़िला, राज्य, पिन कोड), साथ में फ़ोन और ईमेल।"
      },
      write: {
        en: "Write both addresses in full. Telephone/Mobile No. is marked * on the form. Write an email ID if you have one. The General Rules say that if your Aadhaar or PAN does not show your present address, you give another officially valid document with the present address.",
        hi: "दोनों पते पूरे लिखें। फॉर्म पर टेलीफ़ोन/मोबाइल नंबर के साथ * लगा है। ईमेल हो तो लिखें। सामान्य नियमों के अनुसार अगर आधार या पैन में आपका मौजूदा पता नहीं है, तो मौजूदा पते वाला कोई दूसरा मान्य दस्तावेज़ देना होता है।"
      },
      documents: { en: ["Address proof showing the present address"], hi: ["मौजूदा पते वाला पते का सबूत"] },
      mistakes: {
        en: ["Missing PIN code", "Giving a mobile number that is not in use"],
        hi: ["पिन कोड न लिखना", "ऐसा मोबाइल नंबर देना जो चालू नहीं है"]
      }
    },
    {
      label: { en: "ID Proof and Address Proof (Document No./Date of Issue/Issuing Authority)", hi: "पहचान का सबूत और पते का सबूत (दस्तावेज़ नंबर/जारी तारीख़/जारी करने वाला)" },
      quick: { en: "ID and address proof: number, issue date, issuing authority", hi: "पहचान और पते का सबूत: नंबर, जारी तारीख़, जारीकर्ता" },
      meaning: {
        en: "Details of your identity and address documents. The row \"For SCSS Account details of proof of age\" is only for the Senior Citizen Savings Scheme.",
        hi: "आपके पहचान और पते वाले काग़ज़ों का विवरण। \"For SCSS Account\" वाली लाइन सिर्फ़ वरिष्ठ नागरिक बचत योजना के लिए है।"
      },
      write: {
        en: "For each document write its number, date of issue and issuing authority. The form says that if Aadhaar or proof of Aadhaar enrolment is not given, a passport, driving licence, voter ID, NREGA job card signed by a State Government officer, or a letter from the National Population Register can be used. The instructions ask for self-attested copies. Leave the SCSS row empty.",
        hi: "हर काग़ज़ का नंबर, जारी तारीख़ और जारी करने वाला अधिकारी लिखें। फॉर्म के अनुसार आधार या आधार नामांकन का सबूत नहीं दिया, तो पासपोर्ट, ड्राइविंग लाइसेंस, वोटर आईडी, राज्य सरकार के अधिकारी के साइन वाला नरेगा जॉब कार्ड, या राष्ट्रीय जनसंख्या रजिस्टर (NPR) का पत्र चल सकता है। निर्देशों में ख़ुद सत्यापित (सेल्फ़-अटेस्टेड) कॉपी माँगी गई है। SCSS वाली लाइन खाली छोड़ें।"
      },
      documents: { en: ["Self-attested copy of ID proof", "Self-attested copy of address proof"], hi: ["पहचान सबूत की सेल्फ़-अटेस्टेड कॉपी", "पते के सबूत की सेल्फ़-अटेस्टेड कॉपी"] },
      mistakes: {
        en: ["Not signing the photocopies (self-attesting)", "Filling the SCSS row"],
        hi: ["फ़ोटोकॉपी पर साइन (सेल्फ़-अटेस्ट) न करना", "SCSS वाली लाइन भर देना"]
      }
    },
    {
      label: { en: "Specimen Signatures (1, 2, 3 and Name)", hi: "नमूना हस्ताक्षर (1, 2, 3 और नाम)" },
      quick: { en: "Sign three times in the first column, write your name", hi: "पहले कॉलम में तीन बार साइन करें, नाम लिखें" },
      meaning: {
        en: "Three sample signatures that the post office keeps to check your signature later.",
        hi: "तीन नमूना हस्ताक्षर, जिन्हें डाकघर आगे आपके साइन मिलाने के लिए रखता है।"
      },
      write: {
        en: "Sign on lines 1, 2 and 3 of the first column and write your name below. Sign the same way each time, because you will sign this way for deposits, loans and withdrawals later.",
        hi: "पहले कॉलम की लाइन 1, 2 और 3 पर साइन करें और नीचे अपना नाम लिखें। हर बार एक जैसा साइन करें, क्योंकि आगे जमा, लोन और निकासी के लिए यही साइन करना होगा।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Three different-looking signatures", "Signing in the 2nd or 3rd column"],
        hi: ["तीनों साइन अलग-अलग दिखना", "दूसरे या तीसरे कॉलम में साइन कर देना"]
      }
    },
    {
      label: { en: "3. Declarations: General (1)–(5)", hi: "3. घोषणाएँ: सामान्य (1)–(5)" },
      quick: { en: "Read points 1–3; fill agent and standing instruction only if used", hi: "बिंदु 1–3 पढ़ें; एजेंट और स्टैंडिंग इंस्ट्रक्शन ज़रूरत हो तभी" },
      meaning: {
        en: "(1) You will follow the scheme and the Government Savings Promotion Rules, 2018. (2) You (and the minor, if any) are resident citizens of India and will inform the post office if this changes. (3) For a minor's account, the guardian runs it until the child turns 18. (4) Agent details if an SAS/MPKBY agent helped you. (5) Any standing instruction.",
        hi: "(1) आप योजना और सरकारी बचत संवर्धन नियम, 2018 का पालन करेंगे। (2) आप (और नाबालिग, अगर है) भारत के निवासी नागरिक हैं और इसमें बदलाव होने पर डाकघर को बताएँगे। (3) नाबालिग के खाते में बच्चे के 18 साल होने तक अभिभावक खाता चलाएगा। (4) अगर किसी SAS/MPKBY एजेंट ने मदद की हो तो उसकी जानकारी। (5) कोई स्थायी निर्देश (स्टैंडिंग इंस्ट्रक्शन)।"
      },
      write: {
        en: "Points (1) to (3) are statements; read them. Fill (4) only if an agent opened the account for you. Fill (5) only if you want a standing instruction; ask the post office what is available for PPF. Skip the \"TD\" line, which is for Time Deposit. The General Rules say only a resident citizen of India can open an account, and if you later become an NRI the account can run only till maturity, without extension.",
        hi: "बिंदु (1) से (3) घोषणाएँ हैं; इन्हें पढ़ लें। (4) तभी भरें जब किसी एजेंट ने खाता खुलवाया हो। (5) तभी भरें जब स्टैंडिंग इंस्ट्रक्शन चाहिए; PPF के लिए क्या सुविधा है, डाकघर से पूछें। \"TD\" वाली लाइन छोड़ दें, वह टाइम डिपॉज़िट के लिए है। सामान्य नियमों के अनुसार खाता सिर्फ़ निवासी नागरिक खोल सकता है, और बाद में आप NRI बन जाएँ तो खाता सिर्फ़ मैच्योरिटी तक चलेगा, आगे नहीं बढ़ेगा।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking the TD box for PPF", "Not telling the post office after becoming an NRI"],
        hi: ["PPF के लिए TD वाले खाने पर टिक कर देना", "NRI बनने के बाद डाकघर को न बताना"]
      }
    },
    {
      label: { en: "PPF declaration tick box (1) and (2), Date and Signature or thumb impression of Applicant(s)/Guardian", hi: "PPF घोषणा का टिक खाना (1) और (2), तारीख़ और आवेदक/अभिभावक के हस्ताक्षर या अँगूठे का निशान" },
      quick: { en: "Tick PPF only if you have no other PPF account", hi: "PPF पर टिक तभी करें जब कोई दूसरा PPF खाता न हो" },
      meaning: {
        en: "By ticking PPF you declare (1) that no other PPF account has been opened in your name (or the minor's) in any post office or bank in India, and (2) that you will keep within the maximum deposit limit across your own and minors' accounts; a deposit above the ceiling is against the Scheme.",
        hi: "PPF पर टिक करके आप घोषणा करते हैं (1) कि भारत के किसी भी डाकघर या बैंक में आपके (या नाबालिग के) नाम पर कोई दूसरा PPF खाता नहीं खुला है, और (2) कि आप अपने और नाबालिगों के खातों को मिलाकर अधिकतम जमा सीमा में रहेंगे; सीमा से ज़्यादा जमा योजना के ख़िलाफ़ है।"
      },
      write: {
        en: "Tick the PPF box only if it is true. Do not tick SSA or MIS/SCSS and leave that table empty. Write the date and sign (or give a thumb impression) at \"Signature or thumb impression of Applicant(s)/Guardian\". If a parent opened a PPF account in your name when you were a minor, you already have one: the General Rules say that on becoming a major you submit a revised application with your documents to run it yourself, instead of opening a new one.",
        hi: "PPF वाले खाने पर टिक तभी करें जब यह सच हो। SSA या MIS/SCSS पर टिक न करें और वह टेबल खाली छोड़ें। \"Signature or thumb impression of Applicant(s)/Guardian\" पर तारीख़ लिखें और साइन करें (या अँगूठा लगाएँ)। अगर माता-पिता ने आपके बचपन में आपके नाम पर PPF खोला था, तो आपका खाता पहले से है: सामान्य नियमों के अनुसार बालिग होने पर आप नया खाता खोलने के बजाय अपने काग़ज़ों के साथ नया (संशोधित) आवेदन देकर उसे ख़ुद चलाते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Opening a second PPF account at a bank or another post office", "Opening a new PPF at 18 when parents already opened one in your name", "Forgetting the date"],
        hi: ["किसी बैंक या दूसरे डाकघर में दूसरा PPF खाता खोल देना", "माता-पिता ने आपके नाम पर पहले से PPF खोला हो, फिर भी 18 पर नया खोलना", "तारीख़ लिखना भूल जाना"]
      }
    },
    {
      label: { en: "4. Nomination (name, relationship, address, Aadhaar of nominee, date of birth if minor, share, nature of entitlement)", hi: "4. नॉमिनेशन (नाम, रिश्ता, पता, नॉमिनी का आधार, नाबालिग हो तो जन्म तिथि, हिस्सा, हक़ का प्रकार)" },
      quick: { en: "Up to four nominees, with share and trustee or owner", hi: "चार तक नॉमिनी, हिस्सा और ट्रस्टी या मालिक लिखें" },
      meaning: {
        en: "The people who will receive the money if you die. The table has: name and relationship, full address, Aadhaar number of nominee (optional), date of birth if the nominee is a minor, share of entitlement, and nature of entitlement (trustee or owner).",
        hi: "वे लोग जिन्हें आपकी मौत होने पर पैसा मिलेगा। टेबल में: नाम और रिश्ता, पूरा पता, नॉमिनी का आधार नंबर (वैकल्पिक), नॉमिनी नाबालिग हो तो जन्म तिथि, हिस्सा, और हक़ का प्रकार (ट्रस्टी या मालिक)।"
      },
      write: {
        en: "After \"I/We\" write your name, and write \"Public Provident Fund\" as the scheme. The General Rules say the nomination is made at the time of opening, for up to four individuals, with each one's percentage share and whether each receives as owner or as trustee for the legal heirs. For a minor's account, the guardian makes the nomination. The PPF Scheme says that if the account holder dies, the account is closed and the nominee or legal heir cannot continue it.",
        hi: "\"I/We\" के बाद अपना नाम लिखें, और योजना के नाम में \"Public Provident Fund\" लिखें। सामान्य नियमों के अनुसार नॉमिनेशन खाता खोलते समय होता है, चार व्यक्तियों तक, हर एक का प्रतिशत हिस्सा और यह कि वह मालिक के रूप में लेगा या क़ानूनी वारिसों के लिए ट्रस्टी के रूप में। नाबालिग के खाते में नॉमिनेशन अभिभावक करता है। PPF योजना के अनुसार खाताधारक की मौत होने पर खाता बंद हो जाता है, और नॉमिनी या वारिस इसे आगे नहीं चला सकते।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Shares that do not add up to 100%", "Leaving \"Trustee or owner\" blank", "More than four nominees"],
        hi: ["हिस्सों का जोड़ 100% न होना", "\"ट्रस्टी या मालिक\" खाली छोड़ना", "चार से ज़्यादा नॉमिनी लिखना"]
      }
    },
    {
      label: { en: "Appointee for minor nominee, witnesses (if illiterate), Place, Date, Signature", hi: "नाबालिग नॉमिनी के लिए प्रतिनिधि, गवाह (अनपढ़ हो तो), जगह, तारीख़, हस्ताक्षर" },
      quick: { en: "Appointee if a nominee is minor; then place, date, signature", hi: "नॉमिनी नाबालिग हो तो प्रतिनिधि; फिर जगह, तारीख़, साइन" },
      meaning: {
        en: "If a nominee is a minor, the person (Shri/Smt/Kumari ..., S/o, D/o, W/o ..., address) who will receive the money for that nominee. Then two witnesses if the applicant is illiterate, and the place, date and signature.",
        hi: "अगर कोई नॉमिनी नाबालिग है, तो वह व्यक्ति (श्री/श्रीमती/कुमारी ..., पुत्र/पुत्री/पत्नी ..., पता) जो उस नॉमिनी की ओर से पैसा लेगा। फिर आवेदक अनपढ़ हो तो दो गवाह, और जगह, तारीख़ और हस्ताक्षर।"
      },
      write: {
        en: "Write the serial number(s) of the minor nominee(s) and the appointee's name, relation and address. The witness lines are only \"In case, applicant(s) is/are illiterate\". Finally write the place and date and sign again at the bottom.",
        hi: "नाबालिग नॉमिनी का क्रम नंबर, और प्रतिनिधि का नाम, रिश्ता और पता लिखें। गवाह वाली लाइनें सिर्फ़ तब हैं जब आवेदक अनपढ़ हो। आख़िर में जगह और तारीख़ लिखें और नीचे फिर से साइन करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Not naming an appointee when a nominee is a child", "Forgetting the second signature at the bottom of page 2"],
        hi: ["नॉमिनी बच्चा होने पर भी प्रतिनिधि का नाम न देना", "पेज 2 के नीचे वाला दूसरा साइन भूल जाना"]
      }
    },
    {
      label: { en: "For Use of Post Office (top of page 1 and bottom of page 2)", hi: "डाकघर के उपयोग के लिए (पेज 1 के ऊपर और पेज 2 के नीचे)" },
      quick: { en: "Leave blank; the post office fills these", hi: "खाली छोड़ें; इन्हें डाकघर भरता है" },
      meaning: {
        en: "Boxes for the post office: Post Office, Tran-ID, SOL ID, Date of Maturity, Account Number and CIF-IDs at the top; approval, account number, nomination registration details and stamps at the end.",
        hi: "डाकघर के लिए खाने: ऊपर डाकघर, Tran-ID, SOL ID, मैच्योरिटी की तारीख़, खाता संख्या और CIF-ID; आख़िर में मंज़ूरी, खाता संख्या, नॉमिनेशन रजिस्ट्रेशन का विवरण और मुहरें।"
      },
      write: {
        en: "Do not write here. After the account is opened, check your passbook for the account number and name. The Scheme says the account can be closed after 15 years from the end of the year of opening (Form-3), or extended for five years at a time (Form-4) if you choose within one year of maturity; a loan or partial withdrawal is allowed only in certain years, and early closure only for certain reasons. Ask the post office for the current rules.",
        hi: "यहाँ कुछ न लिखें। खाता खुलने के बाद पासबुक में खाता संख्या और नाम जाँच लें। योजना के अनुसार खाता खुलने वाले वर्ष के अंत से 15 साल बाद बंद कराया जा सकता है (फॉर्म-3), या मैच्योरिटी के एक साल के अंदर चुनकर 5-5 साल के लिए बढ़ाया जा सकता है (फॉर्म-4); लोन या आंशिक निकासी कुछ ख़ास सालों में ही मिलती है, और जल्दी बंद करना सिर्फ़ कुछ कारणों से। मौजूदा नियम डाकघर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Filling the account number box yourself", "Not checking the passbook details before leaving"],
        hi: ["खाता संख्या वाला खाना ख़ुद भर देना", "डाकघर से निकलने से पहले पासबुक की जानकारी न जाँचना"]
      }
    }
  ]
});
