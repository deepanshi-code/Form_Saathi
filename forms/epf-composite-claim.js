// Checked against EPFO's "Composite Claim Form (Aadhaar)" [Form No. 19 (PF Final Settlement) / 10C (Pension
// Withdrawal Benefits) / 31 (PF Non-Refundable Advance)] with its printed "Instruction for filling the Composite
// Claim Form (Aadhaar)" (3-page PDF Form_CCF_aadhar.pdf; the file itself was made on 28-01-2019 and was uploaded
// to EPFO's website file store on 06-02-2026:
// https://pmvbry-cdn.epfindia.gov.in/wp-content/uploads/2026/02/Form_CCF_aadhar.pdf). Also read:
//  - EPFO FAQ page (epfo.gov.in/faq-epfo/), answers on claims without employer attestation and on the waiting
//    period after resignation
//  - EPFO "FAQs on claim" PDF dated 04-04-2020 (covid_faq_claim_04042020.pdf on EPFO's file store), for how to
//    file the same claim online on the Unified Member Portal
//  - PIB press release of 13-10-2025 (Release ID 2178522) on the 238th CBT meeting: simplified partial
//    withdrawals, 25% minimum balance, 12-month waiting for premature final settlement, 36 months for pension
//    withdrawal; and PIB press release of 15-10-2025 (Release ID 2179689) explaining the same
//  - PIB press releases of 17-07-2026 (2285666) and 29-07-2026 (2291296), which state that the EPF Scheme, 2026
//    was notified vide G.S.R. 525(E) dated 29 June 2026
//  - For Form 15G/15H being replaced by Form 121 from 1 April 2026: the Income Tax e-Filing portal's Form
//    Mapping Guide (June 2026), as already used in this project's Form 121 guide
// Every statement below comes from those documents. If something is not stated in them, the guide says
// "ask your EPFO office" instead of guessing. No fees are given: the form and instructions mention none.

window.FORMS.push({
  id: "epf-composite-claim",
  verified: true,
  source: {
    title: "EPFO Composite Claim Form (Aadhaar), Form 19 / 10C / 31, with printed instructions (PDF made 28-01-2019, on EPFO's file store since 06-02-2026)",
    url: "https://pmvbry-cdn.epfindia.gov.in/wp-content/uploads/2026/02/Form_CCF_aadhar.pdf"
  },
  caution: {
    en: "This paper form is from 2019 and still uses the advance purposes and paragraph numbers (68B, 68J, 68K...) of the old EPF Scheme, 1952. Since then EPFO's Central Board (13 October 2025) decided to merge the 13 advance purposes into 3 categories, keep 25% of contributions as a minimum balance, and change the waiting time after leaving a job to 12 months for PF and 36 months for pension withdrawal. The Government has also notified the EPF Scheme, 2026 (G.S.R. 525(E), 29 June 2026). We could not read the new scheme's withdrawal rules, so this form may not match them. Most members now file this claim online on the EPFO Member Portal or UMANG with Aadhaar OTP. Before you submit the paper form, ask your EPFO office whether they still accept it and which rules apply.",
    hi: "यह काग़ज़ी फॉर्म 2019 का है और इसमें अग्रिम (एडवांस) के कारण और पैरा नंबर (68B, 68J, 68K...) पुरानी EPF योजना, 1952 के हैं। इसके बाद EPFO के केंद्रीय न्यासी बोर्ड ने 13 अक्टूबर 2025 को तय किया कि 13 कारणों को मिलाकर 3 श्रेणियाँ बनेंगी, योगदान का 25% हमेशा न्यूनतम बैलेंस के रूप में रहेगा, और नौकरी छोड़ने के बाद PF निकालने के लिए 12 महीने और पेंशन निकालने के लिए 36 महीने रुकना होगा। सरकार ने EPF योजना, 2026 (G.S.R. 525(E), 29 जून 2026) भी लागू कर दी है। हम नई योजना के निकासी नियम नहीं पढ़ पाए, इसलिए हो सकता है यह फॉर्म उनसे मेल न खाए। आजकल ज़्यादातर लोग यही दावा EPFO मेंबर पोर्टल या UMANG ऐप पर आधार OTP से ऑनलाइन करते हैं। काग़ज़ी फॉर्म जमा करने से पहले अपने EPFO दफ़्तर से पूछ लें कि वे इसे अभी लेते हैं या नहीं और कौन-से नियम लागू हैं।"
  },
  lastChecked: "2026-11-05",

  category: { en: "Government", hi: "सरकारी" },
  name: { en: "EPF Composite Claim Form (Aadhaar)", hi: "ईपीएफ संयुक्त दावा फॉर्म (आधार)" },
  about: {
    en: "One form of the Employees' Provident Fund Organisation (EPFO) that replaces three old claim forms: Form 19 (final PF settlement), Form 10C (pension withdrawal benefit) and Form 31 (PF non-refundable advance). You tick which claim you want. It is for members whose Form-11 (New) details, Aadhaar number and bank account details are on the UAN portal and whose UAN is activated. Such members can submit it directly to their EPFO office without the employer's attestation. EPFO's FAQ adds that the bank account and Aadhaar KYC must have been approved by the employer with a digital signature. Attach a cancelled cheque. No revenue stamp is needed. The same claim can also be filed online on the Unified Member Portal (Online Services, Claim) with an Aadhaar OTP.",
    hi: "यह कर्मचारी भविष्य निधि संगठन (EPFO) का एक फॉर्म है, जो तीन पुराने दावा फॉर्मों की जगह आया है: फॉर्म 19 (PF का अंतिम निपटान), फॉर्म 10C (पेंशन निकासी लाभ) और फॉर्म 31 (PF से नॉन-रिफंडेबल एडवांस)। आपको जो दावा चाहिए, उस पर टिक करना होता है। यह उन सदस्यों के लिए है जिनकी फॉर्म-11 (नया) की जानकारी, आधार नंबर और बैंक खाते का विवरण UAN पोर्टल पर है और जिनका UAN एक्टिवेट हो चुका है। ऐसे सदस्य इसे नियोक्ता (कंपनी) के सत्यापन के बिना सीधे अपने EPFO दफ़्तर में जमा कर सकते हैं। EPFO के FAQ के अनुसार बैंक खाते और आधार की KYC नियोक्ता ने डिजिटल सिग्नेचर से मंज़ूर की होनी चाहिए। साथ में एक कैंसल चेक लगाएँ। रेवेन्यू स्टैम्प की ज़रूरत नहीं है। यही दावा यूनिफ़ाइड मेंबर पोर्टल (Online Services, Claim) पर आधार OTP से ऑनलाइन भी किया जा सकता है।"
  },

  fields: [
    {
      label: { en: "Claim applied for (item 1)", hi: "किस चीज़ का दावा (खाना 1)" },
      quick: { en: "Tick final PF settlement, pension withdrawal, or PF advance", hi: "PF अंतिम निपटान, पेंशन निकासी या PF एडवांस पर टिक करें" },
      meaning: {
        en: "Three choices with brackets: (i) Final PF Settlement (Form 19), (ii) Pension Withdrawal Benefits (Form 10C), (iii) PF Non-Refundable Advance (Form 31).",
        hi: "तीन विकल्प, हर एक के आगे कोष्ठक: (i) PF का अंतिम निपटान (फॉर्म 19), (ii) पेंशन निकासी लाभ (फॉर्म 10C), (iii) PF से नॉन-रिफंडेबल एडवांस (फॉर्म 31)।"
      },
      write: {
        en: "Put a tick in the bracket of each claim you are making. The instructions say pension withdrawal benefit is \"only if the service is less than 10 years\". If you are still working and only need money for a purpose like illness or education, the advance (iii) is the one for you.",
        hi: "जो-जो दावा कर रहे हैं, उसके कोष्ठक में टिक लगाएँ। निर्देशों के अनुसार पेंशन निकासी लाभ सिर्फ़ तभी मिलता है जब नौकरी (सेवा) 10 साल से कम हो। अगर आप अभी नौकरी में हैं और सिर्फ़ बीमारी या पढ़ाई जैसे किसी काम के लिए पैसा चाहिए, तो आपके लिए एडवांस (iii) वाला विकल्प है।"
      },
      changed: {
        en: "Changed: on 13 October 2025 EPFO's Central Board decided that premature final PF settlement will need 12 months (earlier 2 months) and final pension withdrawal 36 months (earlier 2 months). The EPF Scheme, 2026 was notified on 29 June 2026. Ask your EPFO office how long you must wait after leaving your job.",
        hi: "बदलाव: 13 अक्टूबर 2025 को EPFO के केंद्रीय बोर्ड ने तय किया कि समय से पहले PF के अंतिम निपटान के लिए 12 महीने (पहले 2 महीने) और पेंशन की अंतिम निकासी के लिए 36 महीने (पहले 2 महीने) रुकना होगा। 29 जून 2026 को EPF योजना, 2026 लागू हुई। नौकरी छोड़ने के बाद कितना रुकना है, यह अपने EPFO दफ़्तर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking pension withdrawal when your service is 10 years or more", "Ticking final settlement while you are still in the job"],
        hi: ["10 साल या ज़्यादा नौकरी होने पर भी पेंशन निकासी पर टिक करना", "नौकरी में रहते हुए अंतिम निपटान पर टिक करना"]
      }
    },
    {
      label: { en: "Name of the member (item 2)", hi: "सदस्य का नाम (खाना 2)" },
      quick: { en: "Your full name in CAPITAL LETTERS, same as UAN", hi: "पूरा नाम बड़े अक्षरों में, UAN पोर्टल जैसा" },
      meaning: {
        en: "Your own name, as the PF member.",
        hi: "PF सदस्य के रूप में आपका अपना नाम।"
      },
      write: {
        en: "Write your name in CAPITAL LETTERS. In the declaration you certify that all data seeded in the UAN portal, including Aadhaar, is correct, so the name should match what is on the UAN portal and Aadhaar.",
        hi: "अपना नाम बड़े (कैपिटल) अक्षरों में लिखें। नीचे की घोषणा में आप लिखकर देते हैं कि UAN पोर्टल का सारा डेटा, आधार समेत, सही है, इसलिए नाम वही होना चाहिए जो UAN पोर्टल और आधार पर है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing a nickname or short form", "Name spelling different from Aadhaar and the UAN portal"],
        hi: ["उपनाम या छोटा नाम लिख देना", "नाम की स्पेलिंग आधार और UAN पोर्टल से अलग होना"]
      }
    },
    {
      label: { en: "Father's Name / Husband's Name (item 3)", hi: "पिता का नाम / पति का नाम (खाना 3)" },
      quick: { en: "Father's name in (a); husband's name in (b) if applicable", hi: "(क) में पिता का नाम; लागू हो तो (ख) में पति का नाम" },
      meaning: {
        en: "Two lines: (a) Father's Name and (b) Husband's Name.",
        hi: "दो लाइनें: (क) पिता का नाम और (ख) पति का नाम।"
      },
      write: {
        en: "Write the names clearly; the instructions only say \"Kindly write clearly\". If you are not sure whether to fill one line or both, ask your EPFO office.",
        hi: "नाम साफ़-साफ़ लिखें; निर्देशों में बस इतना लिखा है कि साफ़ लिखें। एक लाइन भरनी है या दोनों, इसमें शक हो तो अपने EPFO दफ़्तर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing unclearly so the name cannot be read"],
        hi: ["इतना गंदा लिखना कि नाम पढ़ा न जा सके"]
      }
    },
    {
      label: { en: "UAN and PF Account No. (item 4)", hi: "UAN और PF खाता संख्या (खाना 4)" },
      quick: { en: "12-digit UAN and your PF account number", hi: "12 अंकों का UAN और PF खाता नंबर" },
      meaning: {
        en: "(a) Universal Account Number (UAN), the 12-digit number that stays the same across jobs. (b) P.F. Account No. of this establishment.",
        hi: "(क) यूनिवर्सल अकाउंट नंबर (UAN), 12 अंकों का नंबर जो नौकरी बदलने पर भी वही रहता है। (ख) इस कंपनी (संस्थान) का PF खाता नंबर।"
      },
      write: {
        en: "The instructions say: \"Please mention the 12 digit Universal Account Number.\" Your UAN must already be activated for this form. If you do not know your PF account number, ask your employer.",
        hi: "निर्देशों के अनुसार 12 अंकों का UAN लिखें। इस फॉर्म के लिए आपका UAN पहले से एक्टिवेट होना चाहिए। PF खाता नंबर पता न हो तो अपने नियोक्ता से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the PF account number in the UAN line", "Using a UAN that is not activated"],
        hi: ["UAN वाली लाइन में PF खाता नंबर लिख देना", "ऐसा UAN लिखना जो एक्टिवेट नहीं है"]
      }
    },
    {
      label: { en: "Aadhaar Number (item 5)", hi: "आधार नंबर (खाना 5)" },
      quick: { en: "Your 12-digit Aadhaar, the one seeded with your UAN", hi: "12 अंकों का आधार, जो UAN से जुड़ा है" },
      meaning: {
        en: "Your Aadhaar number. This form is only for members whose Aadhaar is already on the UAN portal.",
        hi: "आपका आधार नंबर। यह फॉर्म सिर्फ़ उन सदस्यों के लिए है जिनका आधार पहले से UAN पोर्टल पर है।"
      },
      write: {
        en: "Write all 12 digits. EPFO's FAQ says that to claim without employer attestation, your Aadhaar and bank KYC must have been approved by the employer with a digital signature. If your Aadhaar is not seeded, ask your EPFO office which form to use.",
        hi: "पूरे 12 अंक लिखें। EPFO के FAQ के अनुसार नियोक्ता के सत्यापन के बिना दावा करने के लिए आपके आधार और बैंक की KYC नियोक्ता ने डिजिटल सिग्नेचर से मंज़ूर की होनी चाहिए। अगर आधार UAN से जुड़ा नहीं है, तो कौन-सा फॉर्म भरना है, यह अपने EPFO दफ़्तर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing a different Aadhaar from the one linked to the UAN", "Missing a digit"],
        hi: ["UAN से जुड़े आधार की जगह कोई दूसरा आधार नंबर लिखना", "कोई अंक छूट जाना"]
      }
    },
    {
      label: { en: "Date of joining the establishment (item 6)", hi: "संस्थान में नौकरी शुरू करने की तारीख़ (खाना 6)" },
      quick: { en: "Joining date as DD/MM/YYYY", hi: "नौकरी शुरू करने की तारीख़ DD/MM/YYYY में" },
      meaning: {
        en: "The date you joined the company (establishment) whose PF you are claiming.",
        hi: "जिस कंपनी (संस्थान) के PF का दावा कर रहे हैं, उसमें आप किस तारीख़ को जुड़े।"
      },
      write: {
        en: "The instructions ask for DD/MM/YYYY format, for example 01/07/2024. It should match the joining date in your PF records.",
        hi: "निर्देशों के अनुसार DD/MM/YYYY में लिखें, जैसे 01/07/2024। यह आपके PF रिकॉर्ड की तारीख़ से मेल खानी चाहिए।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the year in two digits", "Writing the date of your first job instead of this establishment"],
        hi: ["साल सिर्फ़ दो अंकों में लिखना", "इस संस्थान की जगह अपनी पहली नौकरी की तारीख़ लिखना"]
      }
    },
    {
      label: { en: "Purpose of PF Advance (item 7a, table i to xi)", hi: "PF एडवांस का कारण (खाना 7क, तालिका i से xi)" },
      quick: { en: "Advance only: tick one purpose in the table", hi: "सिर्फ़ एडवांस के लिए: तालिका में एक कारण पर टिक करें" },
      meaning: {
        en: "Only for the PF advance (Form 31). The table lists 11 purposes: (i) housing loan, site, house, flat, construction, addition or repayment of housing loan; (ii) lockout or closure of factory; (iii) unemployment; (iv) illness of member or family; (v) marriage of self, son, daughter, brother or sister; (vi) post-matriculation education of children; (vii) natural calamity; (viii) cut in electricity in the establishment; (ix) equipment for physically handicapped; (x) one year before retirement; (xi) investment in Varishtha Pension Bima Yojana.",
        hi: "सिर्फ़ PF एडवांस (फॉर्म 31) के लिए। तालिका में 11 कारण हैं: (i) होम लोन, ज़मीन, मकान, फ़्लैट, निर्माण, मकान में बदलाव या होम लोन चुकाना; (ii) फ़ैक्ट्री में तालाबंदी या बंद होना; (iii) बेरोज़गारी; (iv) सदस्य या परिवार की बीमारी; (v) अपनी, बेटे, बेटी, भाई या बहन की शादी; (vi) बच्चों की मैट्रिक के बाद की पढ़ाई; (vii) प्राकृतिक आपदा; (viii) संस्थान में बिजली कटौती; (ix) दिव्यांग के लिए उपकरण ख़रीदना; (x) रिटायरमेंट से एक साल पहले; (xi) वरिष्ठ पेंशन बीमा योजना में निवेश।"
      },
      write: {
        en: "Tick the one purpose that applies in the last column. The instructions say no document is required for any of these purposes, not even a marriage card. For (x) one year before retirement and (xi) Varishtha Pension Bima Yojana, up to 90% of the total PF balance can be taken. Signing the form also means you promise to use the money only for this purpose.",
        hi: "जो कारण लागू हो, आख़िरी कॉलम में उस पर टिक करें। निर्देशों के अनुसार इनमें से किसी भी कारण के लिए कोई काग़ज़ नहीं चाहिए, शादी का कार्ड भी नहीं। (x) रिटायरमेंट से एक साल पहले और (xi) वरिष्ठ पेंशन बीमा योजना में कुल PF बैलेंस का 90% तक निकाला जा सकता है। फॉर्म पर हस्ताक्षर करने का मतलब है कि आप पैसा सिर्फ़ इसी काम में लगाने का वादा करते हैं।"
      },
      changed: {
        en: "Changed: on 13 October 2025 EPFO's Central Board decided to merge these 13 advance provisions into three categories (Essential Needs: illness, education, marriage; Housing Needs; Special Circumstances), with a minimum of 12 months' service for all, up to 10 withdrawals for education and 5 for marriage, and 25% of contributions kept as a minimum balance. The paragraph numbers on this form are from the EPF Scheme, 1952; the EPF Scheme, 2026 was notified on 29 June 2026. Ask your EPFO office how to fill this item now.",
        hi: "बदलाव: 13 अक्टूबर 2025 को EPFO के केंद्रीय बोर्ड ने एडवांस के इन 13 प्रावधानों को तीन श्रेणियों में मिलाने का फ़ैसला किया (ज़रूरी ज़रूरतें: बीमारी, पढ़ाई, शादी; मकान की ज़रूरतें; ख़ास हालात)। सबके लिए कम से कम 12 महीने की नौकरी, पढ़ाई के लिए 10 बार और शादी के लिए 5 बार तक निकासी, और योगदान का 25% न्यूनतम बैलेंस के रूप में रखना होगा। इस फॉर्म के पैरा नंबर EPF योजना, 1952 के हैं; 29 जून 2026 को EPF योजना, 2026 लागू हुई। यह खाना अब कैसे भरें, अपने EPFO दफ़्तर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking more than one purpose", "Filling this item when you are claiming final settlement, not an advance"],
        hi: ["एक से ज़्यादा कारणों पर टिक करना", "एडवांस की जगह अंतिम निपटान का दावा करते हुए भी यह खाना भरना"]
      }
    },
    {
      label: { en: "Amount in Rs. (item 7b)", hi: "राशि रुपये में (खाना 7ख)" },
      quick: { en: "Advance only: amount you need, in rupees", hi: "सिर्फ़ एडवांस के लिए: कितने रुपये चाहिए" },
      meaning: {
        en: "The amount of PF advance you are asking for.",
        hi: "PF एडवांस में आप कितनी रक़म माँग रहे हैं।"
      },
      write: {
        en: "Write the amount in rupees on the line. The instructions ask for the \"Amount required\" but do not say the maximum for each purpose (except up to 90% for items x and xi). Check your balance in your e-passbook, and ask your EPFO office how much you are eligible for.",
        hi: "लाइन पर रुपये में रक़म लिखें। निर्देशों में \"ज़रूरी राशि\" लिखने को कहा है, पर हर कारण की अधिकतम सीमा नहीं दी (सिर्फ़ x और xi के लिए 90% तक)। अपना बैलेंस ई-पासबुक में देखें, और कितना मिल सकता है यह अपने EPFO दफ़्तर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the amount blank", "Asking for more than your balance allows"],
        hi: ["राशि खाली छोड़ना", "बैलेंस से ज़्यादा रक़म माँग लेना"]
      }
    },
    {
      label: { en: "Payee for housing advance through agency / loan / LIC (item 7c)", hi: "मकान के एडवांस में भुगतान किसे हो (खाना 7ग)" },
      quick: { en: "Housing via agency or loan/LIC: payee's name and address", hi: "एजेंसी या लोन/LIC से मकान: पाने वाले का नाम और पता" },
      meaning: {
        en: "Only if the advance is for a site, house or flat or construction through an \"agency\", or for repaying a housing loan or LIC. Then the money is paid in favour of that party, not you.",
        hi: "सिर्फ़ तब, जब एडवांस \"एजेंसी\" के ज़रिए ज़मीन, मकान, फ़्लैट या निर्माण के लिए हो, या होम लोन या LIC चुकाने के लिए हो। तब पैसा आपको नहीं, उस पक्ष को दिया जाता है।"
      },
      write: {
        en: "Write the name in whose favour the payment is to be made (\"in favour of\") and the payee's address, in the empty space below the printed text. For all other purposes leave it blank.",
        hi: "छपे हुए पाठ के नीचे खाली जगह में उसका नाम लिखें जिसके पक्ष में भुगतान होना है, और उसका पता लिखें। बाकी किसी कारण के लिए इसे खाली छोड़ दें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing your own name when the payment should go to the agency or lender", "Missing the payee's address"],
        hi: ["जब पैसा एजेंसी या लोन देने वाले को जाना हो, तब अपना नाम लिख देना", "पाने वाले का पता न लिखना"]
      }
    },
    {
      label: { en: "Date of leaving service (item 8)", hi: "नौकरी छोड़ने की तारीख़ (खाना 8)" },
      quick: { en: "Last working date as DD/MM/YYYY; skip for advance", hi: "नौकरी छोड़ने की तारीख़ DD/MM/YYYY; एडवांस में खाली" },
      meaning: {
        en: "The date you left this establishment. Needed for final settlement and pension withdrawal.",
        hi: "जिस तारीख़ को आपने यह संस्थान छोड़ा। अंतिम निपटान और पेंशन निकासी के लिए ज़रूरी।"
      },
      write: {
        en: "Write it in DD/MM/YYYY format. The form says it is \"not required if applying for PF Advance\".",
        hi: "DD/MM/YYYY में लिखें। फॉर्म में लिखा है कि PF एडवांस के लिए यह ज़रूरी नहीं है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Applying for final settlement before the waiting period after leaving is over", "Date different from the exit date your employer has entered"],
        hi: ["नौकरी छोड़ने के बाद का इंतज़ार पूरा होने से पहले अंतिम निपटान माँगना", "नियोक्ता की दर्ज की हुई छोड़ने की तारीख़ से अलग तारीख़ लिखना"]
      }
    },
    {
      label: { en: "PAN, and Form 15G/15H (item 9a)", hi: "पैन, और फॉर्म 15G/15H (खाना 9क)" },
      quick: { en: "PAN if service under 5 years; not needed for advance", hi: "5 साल से कम नौकरी हो तो पैन; एडवांस में नहीं" },
      meaning: {
        en: "Your Permanent Account Number (PAN). The form asks for it only when your service is less than 5 years, because income tax (TDS) can be cut on the final payment in that case.",
        hi: "आपका स्थायी खाता संख्या (पैन)। फॉर्म इसे सिर्फ़ तब माँगता है जब नौकरी 5 साल से कम हो, क्योंकि ऐसे में अंतिम भुगतान से आयकर (TDS) कट सकता है।"
      },
      write: {
        en: "Write your 10-character PAN if your total service is less than 5 years. The instructions say PAN is not required for a PF advance, and that service in previous establishments is also counted, so it is advisable to merge all PF accounts. The 2019 instructions say: TDS is cut if service is under 5 years (60 months); no TDS if the total balance is under Rs. 50,000; otherwise 10% with PAN and 34.608% without PAN. Attach two copies of Form 15G/15H if applicable. Tax rules may have changed since 2019, so ask your EPFO office.",
        hi: "अगर आपकी कुल नौकरी 5 साल से कम है, तो 10 अक्षरों का पैन लिखें। निर्देशों के अनुसार PF एडवांस के लिए पैन ज़रूरी नहीं है, और पिछली कंपनियों की नौकरी भी जोड़ी जाती है, इसलिए सभी PF खाते मिला लेना अच्छा है। 2019 के निर्देशों में लिखा है: 5 साल (60 महीने) से कम नौकरी पर TDS कटता है; कुल बैलेंस 50,000 रुपये से कम हो तो TDS नहीं कटता; नहीं तो पैन देने पर 10% और पैन न देने पर 34.608% कटता है। लागू हो तो फॉर्म 15G/15H की दो कॉपी लगाएँ। 2019 के बाद टैक्स नियम बदल सकते हैं, इसलिए अपने EPFO दफ़्तर से पूछें।"
      },
      changed: {
        en: "Changed: from 1 April 2026 Form 15G and Form 15H have been replaced by one form, Form No. 121, under the new Income-tax rules (Income Tax e-Filing portal's Form Mapping Guide). Ask your EPFO office whether they now want Form 121.",
        hi: "बदलाव: 1 अप्रैल 2026 से नए आयकर नियमों में फॉर्म 15G और 15H की जगह एक ही फॉर्म आ गया है, फॉर्म नंबर 121 (आयकर ई-फ़ाइलिंग पोर्टल की फ़ॉर्म मैपिंग गाइड)। अपने EPFO दफ़्तर से पूछें कि क्या वे अब फॉर्म 121 चाहते हैं।"
      },
      documents: {
        en: ["Your PAN (if service is less than 5 years)", "Two copies of Form 15G/15H (now Form 121), only if applicable"],
        hi: ["आपका पैन (अगर नौकरी 5 साल से कम है)", "फॉर्म 15G/15H (अब फॉर्म 121) की दो कॉपी, सिर्फ़ अगर लागू हो"]
      },
      mistakes: {
        en: ["Not giving PAN with less than 5 years' service, so more tax is cut", "Not merging old PF accounts, so your service looks shorter"],
        hi: ["5 साल से कम नौकरी पर पैन न देना, जिससे ज़्यादा टैक्स कटता है", "पुराने PF खाते न मिलाना, जिससे नौकरी कम दिखती है"]
      }
    },
    {
      label: { en: "Reason of leaving service (item 9b)", hi: "नौकरी छोड़ने का कारण (खाना 9ख)" },
      quick: { en: "Final settlement only: write why you left the job", hi: "सिर्फ़ अंतिम निपटान में: नौकरी छोड़ने का कारण लिखें" },
      meaning: {
        en: "Why you left the job. The instructions say this is only for PF final settlement.",
        hi: "आपने नौकरी क्यों छोड़ी। निर्देशों के अनुसार यह सिर्फ़ PF के अंतिम निपटान के लिए है।"
      },
      write: {
        en: "The reason may be one of: service terminated because of (a) ill health of the member, (b) contraction or discontinuation of the employer's business, or (c) other cause beyond the member's control; (d) personal reasons; marriage (for a female member); or permanent settlement abroad. Write the reason in the right-hand space.",
        hi: "कारण इनमें से कोई एक हो सकता है: नौकरी ख़त्म होना, (क) सदस्य की ख़राब सेहत, (ख) नियोक्ता का कारोबार घटने या बंद होने, या (ग) सदस्य के बस से बाहर किसी और कारण से; (घ) निजी कारण; शादी (महिला सदस्य के लिए); या हमेशा के लिए विदेश में बसना। कारण दाईं ओर की जगह में लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Filling this when you are only taking an advance", "Leaving it blank for a final settlement claim"],
        hi: ["सिर्फ़ एडवांस लेते हुए भी यह भरना", "अंतिम निपटान के दावे में इसे खाली छोड़ना"]
      }
    },
    {
      label: { en: "Full Postal address with PIN (item 10)", hi: "पत्र व्यवहार का पूरा पता, पिन सहित (खाना 10)" },
      quick: { en: "Your full postal address and PIN code", hi: "आपका पूरा डाक पता और पिन कोड" },
      meaning: {
        en: "The address where EPFO can write to you.",
        hi: "वह पता जहाँ EPFO आपको चिट्ठी भेज सके।"
      },
      write: {
        en: "Write your complete address and the 6-digit PIN on the \"Pin\" line. The instructions only say \"Kindly mention the address of the member\".",
        hi: "अपना पूरा पता लिखें और \"पिन\" वाली लाइन पर 6 अंकों का पिन कोड लिखें। निर्देशों में बस इतना लिखा है कि सदस्य का पता लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Forgetting the PIN code", "Giving an old address where you no longer live"],
        hi: ["पिन कोड लिखना भूल जाना", "पुराना पता देना जहाँ अब नहीं रहते"]
      }
    },
    {
      label: { en: "Declaration, cancelled cheque and Member's Signature", hi: "घोषणा, कैंसल चेक और सदस्य के हस्ताक्षर" },
      quick: { en: "Read, attach cancelled cheque, then sign", hi: "पढ़ें, कैंसल चेक लगाएँ, फिर हस्ताक्षर करें" },
      meaning: {
        en: "By signing you certify that the details are true, that you checked the data seeded in the UAN portal (Form-11 (New), bank account details and Aadhaar) and found it correct, and you ask EPFO to pay into the bank account on the UAN portal. You also accept that if the advance is used for a purpose other than the one in item 7, you must return the whole amount with penal interest.",
        hi: "हस्ताक्षर करके आप प्रमाणित करते हैं कि जानकारी सही है, आपने UAN पोर्टल का डेटा (फॉर्म-11 नया, बैंक खाते का विवरण और आधार) जाँच लिया है और सही पाया है, और EPFO से UAN पोर्टल वाले बैंक खाते में भुगतान करने को कहते हैं। आप यह भी मानते हैं कि अगर एडवांस खाना 7 के कारण के अलावा किसी और काम में लगाया, तो पूरी रक़म दंड-ब्याज के साथ लौटानी होगी।"
      },
      write: {
        en: "Attach a cancelled cheque showing your name, bank account number and IFS Code; the account must be the one on the UAN portal. Sign above \"Member's Signature\". No revenue stamp (Re. 1) is needed.",
        hi: "एक कैंसल चेक लगाएँ जिस पर आपका नाम, बैंक खाता नंबर और IFSC कोड छपा हो; यह वही खाता होना चाहिए जो UAN पोर्टल पर है। \"सदस्य के हस्ताक्षर\" के ऊपर हस्ताक्षर करें। 1 रुपये का रेवेन्यू स्टैम्प लगाने की ज़रूरत नहीं है।"
      },
      documents: {
        en: ["Cancelled cheque with your name, account number and IFS Code printed"],
        hi: ["कैंसल चेक, जिस पर आपका नाम, खाता नंबर और IFSC कोड छपा हो"]
      },
      mistakes: {
        en: ["Cheque of an account that is not the one on the UAN portal", "Cheque without your printed name", "Signing before checking your UAN portal details"],
        hi: ["ऐसे खाते का चेक जो UAN पोर्टल वाला खाता नहीं है", "ऐसा चेक जिस पर आपका नाम छपा न हो", "UAN पोर्टल का विवरण जाँचे बिना हस्ताक्षर कर देना"]
      }
    },
    {
      label: { en: "Mobile Number and E-mail (top right)", hi: "मोबाइल नंबर और ई-मेल (ऊपर दाईं ओर)" },
      quick: { en: "Your mobile number and e-mail ID", hi: "आपका मोबाइल नंबर और ई-मेल" },
      meaning: {
        en: "Your contact details, in the box and line at the top right of the form.",
        hi: "आपकी संपर्क जानकारी, फॉर्म के ऊपर दाईं ओर वाले डिब्बे और लाइन में।"
      },
      write: {
        en: "Write your mobile number in the box and your e-mail ID on the line. The form does not say whether they must match the UAN portal; if unsure, ask your EPFO office.",
        hi: "डिब्बे में मोबाइल नंबर और लाइन पर ई-मेल लिखें। फॉर्म में यह नहीं लिखा कि ये UAN पोर्टल वाले ही होने चाहिए या नहीं; शक हो तो अपने EPFO दफ़्तर से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Missing this box because it is at the very top of the form"],
        hi: ["फॉर्म में सबसे ऊपर होने की वजह से यह खाना छूट जाना"]
      }
    }
  ]
});
