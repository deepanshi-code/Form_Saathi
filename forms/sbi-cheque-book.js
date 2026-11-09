// Checked against these official SBI documents (all on sbi.bank.in, read 09-11-2026):
// 1. "Policy on Multi City Cheques (Issuance, Collection & Dishonour)", Version 4.0, Issue Date 23.04.2026,
//    Banking Operations Department, Corporate Centre (PDF created 13-05-2026), linked on SBI's "Customer Service
//    Policies" page: sbi.bank.in/documents/53471/53742/301220231823-Policy+on+Multi+City+Cheques.pdf
//    Paras 6.1, 6.3, 6.4, 6.6, 6.8, 6.9 (who can get cheques, channels, leaves, dispatch, undelivered books),
//    7.4 and 7.5 (stop payment) and the clause on dishonour (no fresh cheque book after 4 dishonours in a year).
// 2. SBI "Service Charges updated as on 30.09.2025" (Annexure, PDF created 06-01-2026), linked as "Service Charges
//    Updated As On 30.09.2025" on SBI's "Revised Service Charges" page (last updated 30-10-2026): A.2 Issue of Multi
//    City Cheque books (Savings Bank) and B.1 Stop payment instruction.
// 3. SBI "Retail Internet Banking" FAQ page (sbi.bank.in/web/faq-s/retail-internet-banking, last updated 24-06-2025).
// 4. SBI YONO "Manage Cheque Book" page (sbi.bank.in/web/yono/manager-cheque-book, last updated 15-03-2025).
// 5. SBI "ATM Services" page (sbi.bank.in/web/personal-banking/information-services/kyc-guidelines/atm-services,
//    last updated 02-12-2025): Cheque Book Request and Stop Cheque.
// 6. SBI "SBI Quick - Missed Call Banking" page (.../kyc-guidelines/sbi-quick-missed-call-banking,
//    last updated 13-04-2026): one-time registration and Cheque Book Request (CHQREQ).
// 7. SBI "Contact Centre" page (sbi.bank.in/web/customer-care/contact-centre, last updated 16-09-2026):
//    IVR options 2.4 Cheque Book Request, 2.5 Cheque Book Dispatch Status, 2.7 Cheque Stop.
// SBI does not publish a paper cheque book requisition slip / request form on its website (searched the "Forms"
// pages and FAQs on sbi.bank.in); the policy says branch requests are made "at branch through CBS". So this guide
// describes the ways to ask for a cheque book instead of a paper form, and has no page images or layout.
// Anything not stated in these documents is left as "ask the branch". Only dated SBI charges are given.

window.FORMS.push({
  id: "sbi-cheque-book",
  verified: false,
  source: {
    title: "SBI Policy on Multi City Cheques, Version 4.0 (issued 23.04.2026), SBI Service Charges updated as on 30.09.2025, and SBI's YONO, Internet Banking, ATM, SBI Quick and Contact Centre pages (read 09-11-2026)",
    url: "https://sbi.bank.in/web/customer-care/customer-service-policies"
  },
  caution: {
    en: "SBI does not publish a paper cheque book request form on its website, so there is no form to check box by box here. At the branch, ask the staff for their request slip and fill what it asks. The steps below come from SBI's own policy (April 2026) and SBI's pages for YONO, internet banking, ATM, SMS and the contact centre. Charges are from SBI's list \"updated as on 30.09.2025\"; ask the branch if they have changed.",
    hi: "SBI अपनी वेबसाइट पर चेक बुक माँगने का कोई काग़ज़ी फॉर्म नहीं देता, इसलिए यहाँ खाने-खाने जाँचने के लिए कोई फॉर्म नहीं है। ब्रांच में स्टाफ़ से उनकी रिक्वेस्ट स्लिप माँगें और उसमें जो पूछा हो वह भरें। नीचे के तरीक़े SBI की अपनी नीति (अप्रैल 2026) और YONO, इंटरनेट बैंकिंग, ATM, SMS और कॉन्टैक्ट सेंटर वाले SBI पेजों से लिए गए हैं। चार्ज SBI की \"30.09.2025 तक अपडेट\" सूची से हैं; बदले हों तो ब्रांच से पूछ लें।"
  },
  lastChecked: "2026-11-09",

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "SBI Cheque Book Request (New Cheque Book)", hi: "एसबीआई चेक बुक के लिए आवेदन (नई चेक बुक)" },
  about: {
    en: "How to ask State Bank of India for a new cheque book. SBI's policy says a cheque book can be requested at the branch, through Internet Banking (OnlineSBI), YONO, SBI Quick (SMS) and the Contact Centre; SBI's ATM page also offers a Cheque Book Request. SBI issues Multi City (CTS-2010) cheques, payable at par at all its branches. The cheque book is sent by post to your last recorded address (or the address given while requesting), and SBI sends an SMS when the request is recorded, when it is dispatched (with a tracking number from India Post), and when it is delivered. So before you ask, make sure your address and mobile number are correct in the bank's records. A savings account gets its first 10 cheque leaves free in a financial year (charges as on 30.09.2025). If a cheque or the whole cheque book is lost, ask SBI at once to stop payment of those cheques.",
    hi: "भारतीय स्टेट बैंक (SBI) से नई चेक बुक कैसे माँगें। SBI की नीति के अनुसार चेक बुक ब्रांच से, इंटरनेट बैंकिंग (OnlineSBI), YONO, SBI Quick (SMS) और कॉन्टैक्ट सेंटर से माँगी जा सकती है; SBI के ATM पेज पर भी Cheque Book Request की सुविधा है। SBI मल्टी सिटी (CTS-2010) चेक देता है, जो SBI की सभी ब्रांचों में बराबर चलते हैं। चेक बुक डाक से आपके बैंक में दर्ज आख़िरी पते पर (या माँगते समय दिए पते पर) भेजी जाती है, और SBI तीन बार SMS भेजता है: रिक्वेस्ट दर्ज होने पर, भेजने पर (इंडिया पोस्ट के ट्रैकिंग नंबर के साथ), और डिलीवरी होने पर। इसलिए माँगने से पहले देख लें कि बैंक में आपका पता और मोबाइल नंबर सही है। बचत खाते में एक वित्तीय वर्ष में पहले 10 चेक पन्ने मुफ़्त हैं (30.09.2025 तक के चार्ज)। कोई चेक या पूरी चेक बुक खो जाए, तो तुरंत SBI से उन चेकों का भुगतान रुकवाएँ (stop payment)।"
  },

  fields: [
    {
      label: { en: "Before you ask: who can get a cheque book", hi: "माँगने से पहले: चेक बुक किसे मिलती है" },
      quick: { en: "Cheque account, registered mobile number, KYC complete, correct address", hi: "चेक वाला खाता, रजिस्टर्ड मोबाइल, पूरी KYC, सही पता" },
      meaning: {
        en: "SBI's policy lists the conditions for getting Multi City cheques: a cheque-operated account, a valid mobile number registered with the bank, satisfactory conduct of the account, and a fully KYC-compliant account.",
        hi: "SBI की नीति में मल्टी सिटी चेक पाने की शर्तें लिखी हैं: चेक से चलने वाला खाता, बैंक में दर्ज सही मोबाइल नंबर, खाते का ठीक से चलना, और खाते की पूरी KYC।"
      },
      write: {
        en: "If your KYC is due, update it first. Check that your mobile number and postal address in the bank's records are current, because the cheque book is posted to that address and the SMS updates go to that number. The policy also says that if cheques or NACH (auto-debit) payments from your account bounce for lack of money 4 times in a financial year, no fresh cheque book is issued through any channel. Whether your type of account comes with a cheque facility: ask the branch.",
        hi: "KYC बाक़ी हो तो पहले वह अपडेट करवाएँ। देख लें कि बैंक में आपका मोबाइल नंबर और डाक का पता अभी वाला है, क्योंकि चेक बुक उसी पते पर डाक से आती है और SMS उसी नंबर पर आते हैं। नीति के अनुसार अगर एक वित्तीय वर्ष में पैसे कम होने से आपके खाते के चेक या NACH (ऑटो-डेबिट) 4 बार बाउंस हुए हों, तो किसी भी तरीक़े से नई चेक बुक नहीं मिलती। आपके खाते के प्रकार में चेक की सुविधा है या नहीं, यह ब्रांच से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Requesting while the registered address is old", "Pending KYC on the account"],
        hi: ["बैंक में पुराना पता होते हुए चेक बुक माँगना", "खाते की KYC बाक़ी रहना"]
      }
    },
    {
      label: { en: "Number of leaves, and Bearer or Order cheques", hi: "कितने पन्ने, और बेयरर या ऑर्डर चेक" },
      quick: { en: "Savings account: 10 or 25 leaves; bearer by default", hi: "बचत खाता: 10 या 25 पन्ने; आम तौर पर बेयरर चेक" },
      meaning: {
        en: "SBI's policy sets the cheque book sizes: savings account (personal customers) 10 or 25 leaves, current account 25, 50 or 100 leaves, and an emergency cheque book of 5 or 10 leaves. For most savings accounts \"Bearer\" cheques are issued by default; \"Order\" cheques are issued by default to HNIs/NRIs, trusts, societies and government, and anyone else with a savings account can specially ask for Order cheques.",
        hi: "SBI की नीति में चेक बुक के साइज़ तय हैं: बचत खाता (आम ग्राहक) 10 या 25 पन्ने, चालू खाता 25, 50 या 100 पन्ने, और इमरजेंसी चेक बुक 5 या 10 पन्नों की। ज़्यादातर बचत खातों में अपने-आप \"Bearer\" चेक मिलते हैं; HNI/NRI, ट्रस्ट, सोसाइटी और सरकारी खातों को अपने-आप \"Order\" चेक मिलते हैं, और बाक़ी बचत खाते वाले भी ख़ास तौर पर Order चेक माँग सकते हैं।"
      },
      write: {
        en: "Choose 10 or 25 leaves for a savings account. A bearer cheque can be cashed by whoever holds it; an order cheque is paid only to the named person, so if you want that, ask for Order cheques while requesting. The official pages do not say where each online channel shows these choices; pick what the screen offers, or ask the branch.",
        hi: "बचत खाते के लिए 10 या 25 पन्ने चुनें। बेयरर चेक को जिसके हाथ में चेक है वह भुना सकता है; ऑर्डर चेक का पैसा सिर्फ़ उसी व्यक्ति को मिलता है जिसका नाम लिखा है, इसलिए वैसा चाहिए तो माँगते समय Order चेक माँगें। आधिकारिक पेजों में यह नहीं लिखा कि हर ऑनलाइन तरीक़े में ये विकल्प कहाँ दिखते हैं; स्क्रीन पर जो विकल्प आए वह चुनें, या ब्रांच से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Asking for a bigger book than you need, when extra leaves are charged"],
        hi: ["ज़रूरत से बड़ी चेक बुक माँगना, जबकि ज़्यादा पन्नों का चार्ज लगता है"]
      }
    },
    {
      label: { en: "At the branch (including emergency cheque book)", hi: "ब्रांच में (इमरजेंसी चेक बुक समेत)" },
      quick: { en: "Ask branch staff for request slip; give account number, sign", hi: "स्टाफ़ से रिक्वेस्ट स्लिप लें; खाता नंबर लिखें, साइन करें" },
      meaning: {
        en: "You can ask at your branch; SBI's policy says the branch records the request in its core banking system (CBS). Branches are told to keep 5- and 10-leaf cheque books in stock for customers' emergency needs, with charges at the applicable rate.",
        hi: "आप अपनी ब्रांच में जाकर माँग सकते हैं; SBI की नीति के अनुसार ब्रांच यह रिक्वेस्ट अपने कोर बैंकिंग सिस्टम (CBS) में दर्ज करती है। ब्रांचों को ग्राहकों की इमरजेंसी के लिए 5 और 10 पन्नों की चेक बुक रखने को कहा गया है, जिसका चार्ज लागू दर से लगता है।"
      },
      write: {
        en: "SBI does not publish its branch request slip online, so ask the staff which slip or letter they want and fill it in. Write your account number exactly as in your passbook and sign the way your signature is recorded with the bank. If you need cheques the same day, ask for an emergency cheque book. If your address has changed, tell the branch: they can update it with an officially valid document (OVD).",
        hi: "SBI ब्रांच वाली रिक्वेस्ट स्लिप ऑनलाइन नहीं देता, इसलिए स्टाफ़ से पूछें कि कौन-सी स्लिप या चिट्ठी चाहिए और उसे भरें। खाता नंबर ठीक पासबुक जैसा लिखें और वैसे ही साइन करें जैसे बैंक में आपके साइन दर्ज हैं। उसी दिन चेक चाहिए तो इमरजेंसी चेक बुक माँगें। पता बदल गया हो तो ब्रांच को बताएँ: वे आधिकारिक पहचान दस्तावेज़ (OVD) से पता अपडेट कर सकते हैं।"
      },
      documents: { en: ["Passbook (for the account number)", "Proof of new address (OVD), only if your address has changed"], hi: ["पासबुक (खाता नंबर के लिए)", "नए पते का प्रमाण (OVD), सिर्फ़ अगर पता बदला है"] },
      mistakes: {
        en: ["Signature different from the one in the bank's records", "Wrong digit in the account number"],
        hi: ["बैंक के रिकॉर्ड से अलग साइन करना", "खाता नंबर में कोई अंक ग़लत लिखना"]
      }
    },
    {
      label: { en: "Internet Banking (OnlineSBI)", hi: "इंटरनेट बैंकिंग (OnlineSBI)" },
      quick: { en: "Request & Enquiries > Cheque Book Services > Cheque book request", hi: "Request & Enquiries > Cheque Book Services > Cheque book request" },
      meaning: {
        en: "SBI's Internet Banking FAQ says: go to the Cheque Book Services option under the Request & Enquiries tab, select the cheque book request option, enter the required details and submit.",
        hi: "SBI के इंटरनेट बैंकिंग FAQ के अनुसार: Request & Enquiries टैब में Cheque Book Services पर जाएँ, cheque book request चुनें, माँगी गई जानकारी भरें और सबमिट करें।"
      },
      write: {
        en: "Log in only on SBI's official internet banking site. Choose the account, the number of leaves and the delivery address the screen offers, and submit. SBI's policy says that if the request is made through internet banking, you may have to accept the condition about cheque bounces (no fresh cheque book after 4 bounces in a year) before final submission.",
        hi: "सिर्फ़ SBI की असली इंटरनेट बैंकिंग साइट पर लॉगिन करें। स्क्रीन पर जो दिखे उसमें खाता, पन्नों की संख्या और डिलीवरी का पता चुनें, और सबमिट करें। SBI की नीति के अनुसार इंटरनेट बैंकिंग से माँगने पर आख़िरी सबमिट से पहले चेक बाउंस वाली शर्त (साल में 4 बार बाउंस हुआ तो नई चेक बुक नहीं) मानने को कहा जा सकता है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Logging in through a link received in SMS or email", "Not checking the delivery address shown"],
        hi: ["SMS या ईमेल में आए लिंक से लॉगिन करना", "दिखाया गया डिलीवरी पता न जाँचना"]
      }
    },
    {
      label: { en: "YONO app", hi: "YONO ऐप" },
      quick: { en: "Manage Cheque Book > Request for a new Cheque Book", hi: "Manage Cheque Book > नई चेक बुक की रिक्वेस्ट" },
      meaning: {
        en: "SBI's YONO page says that under \"Manage Cheque Book\" you can request a new cheque book, check the cheque book dispatch status, stop payment of a cheque you issued, revoke a stop request, enquire the clearing status of a cheque, and use Positive Pay.",
        hi: "SBI के YONO पेज के अनुसार \"Manage Cheque Book\" में आप नई चेक बुक माँग सकते हैं, चेक बुक भेजे जाने का स्टेटस देख सकते हैं, अपने दिए चेक का भुगतान रुकवा सकते हैं, स्टॉप रिक्वेस्ट वापस ले सकते हैं, चेक क्लियरिंग का स्टेटस देख सकते हैं, और Positive Pay इस्तेमाल कर सकते हैं।"
      },
      write: {
        en: "Use the official YONO SBI app. Open Manage Cheque Book, choose to request a new cheque book, and follow the screens. Later, use \"Check the Cheque Book Dispatch Status\" in the same place to track it.",
        hi: "SBI का असली YONO SBI ऐप इस्तेमाल करें। Manage Cheque Book खोलें, नई चेक बुक की रिक्वेस्ट चुनें, और स्क्रीन के हिसाब से आगे बढ़ें। बाद में उसी जगह \"Check the Cheque Book Dispatch Status\" से उसे ट्रैक करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Installing a look-alike app instead of YONO SBI"],
        hi: ["YONO SBI की जगह उससे मिलता-जुलता नकली ऐप डाल लेना"]
      }
    },
    {
      label: { en: "SBI ATM (with your SBI debit card)", hi: "SBI ATM (अपने SBI डेबिट कार्ड से)" },
      quick: { en: "At an SBI ATM choose Cheque Book Request", hi: "SBI ATM में Cheque Book Request चुनें" },
      meaning: {
        en: "SBI's ATM page lists Cheque Book Request among the services for SBI debit card holders: \"Order your cheque book without visiting the branch or filling in any transaction slips.\" It adds that the cheque book will be delivered at the address registered in the branch.",
        hi: "SBI के ATM पेज पर SBI डेबिट कार्ड वालों के लिए Cheque Book Request की सुविधा लिखी है: ब्रांच गए बिना और कोई स्लिप भरे बिना चेक बुक मँगाएँ। साथ में लिखा है कि चेक बुक ब्रांच में दर्ज पते पर ही आएगी।"
      },
      write: {
        en: "Insert your SBI debit card at an SBI ATM and pick Cheque Book Request from the services menu. The ATM page tells you to update your registered address at the branch first, because the ATM cannot send it anywhere else. Never let anyone at the ATM help you with your card or PIN.",
        hi: "SBI ATM में अपना SBI डेबिट कार्ड डालें और सेवाओं की सूची में Cheque Book Request चुनें। ATM पेज कहता है कि पहले ब्रांच में अपना पता अपडेट करवा लें, क्योंकि ATM से चेक बुक किसी दूसरे पते पर नहीं भेजी जा सकती। ATM पर कार्ड या PIN के लिए किसी अनजान की मदद न लें।"
      },
      documents: { en: ["Your SBI debit card"], hi: ["आपका SBI डेबिट कार्ड"] },
      mistakes: {
        en: ["Ordering from the ATM when the registered address is old"],
        hi: ["बैंक में पुराना पता होते हुए ATM से चेक बुक मँगाना"]
      }
    },
    {
      label: { en: "SMS (SBI Quick): CHQREQ", hi: "SMS (SBI Quick): CHQREQ" },
      quick: { en: "From registered mobile, SMS CHQREQ to 917208933145, then send consent", hi: "रजिस्टर्ड मोबाइल से CHQREQ भेजें 917208933145 पर, फिर सहमति SMS" },
      meaning: {
        en: "SBI Quick is SBI's SMS and missed-call service. It works only from the mobile number registered for that account, after a one-time registration: SMS \"REG <account number>\" to 07208933148. For a cheque book, SBI's page says: send \"CHQREQ\" to 917208933145; you will get an SMS back; then send the consent SMS \"CHQACC<the 6-digit number in that SMS>\" within 2 hours.",
        hi: "SBI Quick, SBI की SMS और मिस्ड-कॉल सेवा है। यह सिर्फ़ उस खाते में दर्ज मोबाइल नंबर से चलती है, और पहले एक बार रजिस्ट्रेशन करना होता है: \"REG <खाता नंबर>\" लिखकर 07208933148 पर SMS करें। चेक बुक के लिए SBI का पेज कहता है: \"CHQREQ\" लिखकर 917208933145 पर भेजें; आपको जवाब में SMS आएगा; फिर 2 घंटे के अंदर सहमति SMS \"CHQACC<उस SMS में आया 6 अंकों का नंबर>\" भेजें।"
      },
      write: {
        en: "Type CHQREQ and send it to 917208933145. When the reply comes, send CHQACC followed by the 6-digit number from the reply, within 2 hours. SBI's page shows 917208933145 for the consent in one place and 09223588888 in another, so send the consent to the number the reply SMS asks for; if unsure, call 1800 1234.",
        hi: "CHQREQ लिखकर 917208933145 पर भेजें। जवाब आने पर 2 घंटे के अंदर CHQACC के बाद उस जवाब वाला 6 अंकों का नंबर लिखकर भेजें। SBI के पेज पर सहमति SMS का नंबर एक जगह 917208933145 और दूसरी जगह 09223588888 लिखा है, इसलिए सहमति उसी नंबर पर भेजें जो जवाब वाला SMS बताए; पक्का न हो तो 1800 1234 पर कॉल करें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Sending from a mobile number not registered with the account", "Sending the consent SMS after 2 hours"],
        hi: ["खाते में दर्ज न हुए मोबाइल नंबर से SMS भेजना", "2 घंटे के बाद सहमति SMS भेजना"]
      }
    },
    {
      label: { en: "Phone: SBI Contact Centre 1800 1234", hi: "फ़ोन: SBI कॉन्टैक्ट सेंटर 1800 1234" },
      quick: { en: "Call 1800 1234, choose language, press 2, then 4", hi: "1800 1234 पर कॉल, भाषा चुनें, 2 दबाएँ, फिर 4" },
      meaning: {
        en: "SBI's Contact Centre page gives the steps: call the toll-free number 1800 1234 from your mobile, choose your language, press 2 for \"ATM Card & Chequebook Related services\", then press 4 for \"Cheque Book issuance\", and enter the last 4 digits of your account number if asked. It says the cheque book will be issued and delivered at your registered address.",
        hi: "SBI के कॉन्टैक्ट सेंटर पेज पर तरीक़ा दिया है: अपने मोबाइल से टोल-फ़्री नंबर 1800 1234 पर कॉल करें, भाषा चुनें, \"ATM Card & Chequebook Related services\" के लिए 2 दबाएँ, फिर \"Cheque Book issuance\" के लिए 4 दबाएँ, और पूछा जाए तो खाता नंबर के आख़िरी 4 अंक डालें। पेज के अनुसार चेक बुक जारी होकर आपके रजिस्टर्ड पते पर आएगी।"
      },
      write: {
        en: "Call from your registered mobile. Keep your account number ready. SBI's page also lists 1800 2100 as a toll-free number. Never tell your PIN, password or OTP to anyone on a call; dial the number yourself instead of calling back a number that called you.",
        hi: "अपने रजिस्टर्ड मोबाइल से कॉल करें। खाता नंबर पास रखें। SBI के पेज पर 1800 2100 भी टोल-फ़्री नंबर के रूप में दिया है। कॉल पर किसी को अपना PIN, पासवर्ड या OTP कभी न बताएँ; जिस नंबर से आपको कॉल आया उस पर वापस कॉल करने की जगह ख़ुद यह नंबर मिलाएँ।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Sharing OTP or PIN with a caller who says he is from the bank"],
        hi: ["बैंक का बनकर कॉल करने वाले को OTP या PIN बता देना"]
      }
    },
    {
      label: { en: "Charges (savings account, as on 30.09.2025)", hi: "चार्ज (बचत खाता, 30.09.2025 तक)" },
      quick: { en: "First 10 leaves free each year; then ₹40/₹75 + GST", hi: "हर साल पहले 10 पन्ने मुफ़्त; फिर ₹40/₹75 + GST" },
      meaning: {
        en: "SBI's \"Service Charges updated as on 30.09.2025\" for Multi City cheque books in savings accounts: first 10 cheque leaves free in a financial year; after that a 10-leaf book is ₹40 + GST and a 25-leaf book ₹75 + GST. Emergency cheque book: ₹50 + GST for 10 leaves or part. Senior citizens: free. Salary package accounts (including SBI Rishtey): free, except bulk requests (more than 25 leaves at once or in a month), charged ₹75 + GST per 25-leaf book.",
        hi: "SBI के \"30.09.2025 तक अपडेट\" सर्विस चार्ज के अनुसार बचत खाते की मल्टी सिटी चेक बुक: एक वित्तीय वर्ष में पहले 10 चेक पन्ने मुफ़्त; उसके बाद 10 पन्नों की बुक ₹40 + GST और 25 पन्नों की ₹75 + GST। इमरजेंसी चेक बुक: 10 पन्ने या उससे कम के लिए ₹50 + GST। वरिष्ठ नागरिक: मुफ़्त। सैलरी पैकेज खाते (SBI Rishtey समेत): मुफ़्त, सिवाय ज़्यादा माँगने के (एक बार में या एक महीने में 25 से ज़्यादा पन्ने), जिस पर 25 पन्नों की बुक का ₹75 + GST।"
      },
      write: {
        en: "Nothing to write; the charge is taken from your account. SBI's policy says charges are \"as per prevailing charges revised from time to time\", so check the current amount on SBI's \"Revised Service Charges\" page or ask the branch. For current accounts, basic savings (BSBD) and Jan Dhan accounts, ask the branch.",
        hi: "कुछ लिखना नहीं है; चार्ज आपके खाते से कटता है। SBI की नीति कहती है कि चार्ज समय-समय पर बदलते रहते हैं, इसलिए आज की रक़म SBI के \"Revised Service Charges\" पेज पर देखें या ब्रांच से पूछें। चालू खाता, बेसिक सेविंग्स (BSBD) और जन धन खाते के लिए ब्रांच से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Not keeping enough balance for the charge", "Assuming every cheque book is free"],
        hi: ["चार्ज के लिए खाते में पैसे न रखना", "यह मान लेना कि हर चेक बुक मुफ़्त है"]
      }
    },
    {
      label: { en: "Delivery and tracking", hi: "डिलीवरी और ट्रैकिंग" },
      quick: { en: "Posted to registered address; track via SMS, YONO or 1800 1234", hi: "रजिस्टर्ड पते पर डाक से; SMS, YONO या 1800 1234 से ट्रैक करें" },
      meaning: {
        en: "SBI's policy: the cheque book is dispatched to your last recorded address or the address mentioned while requesting. You get an SMS three times on your registered mobile: when the request (indent) is recorded, at dispatch with the Air Waybill tracking number from the Department of Posts, and on delivery. If it cannot be delivered, it goes back to your home branch and is deactivated.",
        hi: "SBI की नीति: चेक बुक आपके बैंक में दर्ज आख़िरी पते पर या माँगते समय दिए पते पर भेजी जाती है। आपके रजिस्टर्ड मोबाइल पर तीन बार SMS आता है: रिक्वेस्ट (इंडेंट) दर्ज होने पर, भेजने पर डाक विभाग के ट्रैकिंग (Air Waybill) नंबर के साथ, और डिलीवरी होने पर। डिलीवर न हो पाए तो वह आपकी होम ब्रांच में वापस जाती है और बंद (deactivate) कर दी जाती है।"
      },
      write: {
        en: "Track with the number in the SMS, in YONO (Check the Cheque Book Dispatch Status), or by calling 1800 1234 and pressing 2, then 5. If it came back undelivered, the home branch keeps it and should contact you; you collect it after proper identification and the branch activates it. SBI's policy says an undelivered cheque book not handed over within 2 months is destroyed, so go to the branch soon. The official pages do not give a delivery time; ask the branch if it is late.",
        hi: "SMS में आए नंबर से, YONO में (Check the Cheque Book Dispatch Status), या 1800 1234 पर कॉल करके 2 और फिर 5 दबाकर ट्रैक करें। अगर वह डिलीवर हुए बिना लौट गई, तो होम ब्रांच उसे रखती है और आपसे संपर्क करती है; पहचान दिखाकर आप उसे ले सकते हैं और ब्रांच उसे चालू करती है। SBI की नीति के अनुसार 2 महीने में न ली गई लौटी चेक बुक नष्ट कर दी जाती है, इसलिए जल्दी ब्रांच जाएँ। आधिकारिक पेजों में डिलीवरी का समय नहीं लिखा; देर हो तो ब्रांच से पूछें।"
      },
      documents: { en: ["Identity proof, if you collect a returned cheque book from the branch"], hi: ["पहचान पत्र, अगर लौटी हुई चेक बुक ब्रांच से ले रहे हैं"] },
      mistakes: {
        en: ["Ignoring the dispatch SMS", "Not collecting a returned cheque book within 2 months"],
        hi: ["भेजे जाने वाले SMS पर ध्यान न देना", "लौटी हुई चेक बुक 2 महीने में न लेना"]
      }
    },
    {
      label: { en: "Lost cheque or cheque book: stop payment", hi: "चेक या चेक बुक खो जाए: भुगतान रुकवाएँ (stop payment)" },
      quick: { en: "Stop payment at once: branch, YONO, internet banking, ATM, 1800 1234", hi: "तुरंत stop payment: ब्रांच में लिखकर, YONO, इंटरनेट बैंकिंग, ATM, 1800 1234" },
      meaning: {
        en: "SBI's policy says account holders can ask the bank in writing to register stop payment for cheques issued or lost by them, as long as the cheque has not already been paid. It can also be done online through internet banking, YONO or YONO Lite (with transaction rights). SBI's ATM page offers \"Stop Cheque\", and the Contact Centre lets you stop one cheque or a range by phone.",
        hi: "SBI की नीति के अनुसार खाताधारक बैंक को लिखकर अपने दिए हुए या खोए हुए चेकों का भुगतान रुकवा (stop payment) सकता है, बशर्ते चेक का पैसा पहले ही न दिया जा चुका हो। यह इंटरनेट बैंकिंग, YONO या YONO Lite (लेन-देन की अनुमति के साथ) से ऑनलाइन भी हो सकता है। SBI के ATM पर \"Stop Cheque\" की सुविधा है, और कॉन्टैक्ट सेंटर पर फ़ोन से एक चेक या कई चेकों की सीरीज़ रुकवा सकते हैं।"
      },
      write: {
        en: "Act immediately. By phone: call 1800 1234, choose language, press 2, then 7, enter the last 4 digits of the account number if asked, then the 6-digit cheque number or the range of cheque numbers; a confirmation comes on your registered mobile. For a whole lost book, give the full range of unused cheque numbers. Charge as on 30.09.2025: ₹100 + GST per cheque, at most ₹500 + GST per instance. Cheques you wrote wrongly and destroyed can be reported to the bank and recorded as stopped with no charge. If you think a cheque was misused, also tell the branch.",
        hi: "तुरंत कदम उठाएँ। फ़ोन से: 1800 1234 पर कॉल करें, भाषा चुनें, 2 और फिर 7 दबाएँ, पूछा जाए तो खाता नंबर के आख़िरी 4 अंक डालें, फिर 6 अंकों का चेक नंबर या चेक नंबरों की सीरीज़ डालें; पुष्टि का SMS रजिस्टर्ड मोबाइल पर आएगा। पूरी चेक बुक खोई हो तो बचे हुए सभी चेकों की नंबर-सीरीज़ दें। 30.09.2025 तक का चार्ज: हर चेक ₹100 + GST, एक बार में ज़्यादा से ज़्यादा ₹500 + GST। जो चेक आपने ग़लत लिखकर फाड़ दिए हों, उनकी जानकारी बैंक को देने पर वे बिना चार्ज के रुके हुए दर्ज होते हैं। अगर लगे कि किसी चेक का ग़लत इस्तेमाल हुआ है, तो ब्रांच को भी बताएँ।"
      },
      documents: { en: ["Numbers of the cheques to be stopped"], hi: ["रुकवाने वाले चेकों के नंबर"] },
      mistakes: {
        en: ["Waiting before reporting a lost cheque book", "Stopping only one cheque when the whole book is lost"],
        hi: ["खोई चेक बुक की ख़बर देने में देर करना", "पूरी चेक बुक खोने पर सिर्फ़ एक चेक रुकवाना"]
      }
    }
  ]
});
