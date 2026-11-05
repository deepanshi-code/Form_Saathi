// Checked against these official documents:
// 1. SBI "Application for RTGS / NEFT Remittance" (Annexure 1, with counterfoil and "Conditions for Transfer"
//    overleaf), PDF "010725-RTGS NEFT REQUISITION FORM.pdf" on sbi.bank.in (PDF created 13-05-2024, last
//    modified 31-07-2024), linked as the branch form in Q12 of SBI's "FAQ - RTGS/NEFT" page
//    (sbi.bank.in/web/faq-s/faq-rtgs-neft, last updated 01-08-2024).
// 2. SBI "RTGS/NEFT" page (sbi.bank.in/web/personal-banking/rtgs-neft, last updated 02-12-2025): 24x7,
//    RTGS from Rs. 2 lakh, no minimum or maximum for NEFT.
// 3. RBI FAQs on NEFT (rbi.org.in/Scripts/FAQView.aspx?Id=60, updated as on 02-09-2024) and on RTGS
//    (rbi.org.in/Scripts/FAQView.aspx?Id=65, updated as on 14-10-2026).
// 4. RBI circular RBI/2024-25/99 dated 30-12-2024, "Introduction of beneficiary bank account name look-up
//    facility for RTGS and NEFT Systems" (to be offered by banks no later than 1 April 2025).
// Every statement below comes from those documents. SBI's own charges are not given, because the official
// SBI pages read do not state the date from which they apply; only RBI's dated upper limits are mentioned.
// Anything not stated in these documents is left as "ask the branch".

window.FORMS.push({
  id: "sbi-neft-rtgs",
  verified: true,
  source: {
    title: "SBI Application for RTGS / NEFT Remittance (RTGS NEFT Requisition Form, Annexure 1), PDF last modified 31-07-2024, linked from SBI's RTGS/NEFT FAQ",
    url: "https://sbi.bank.in/documents/70137/0/010725-RTGS+NEFT+REQUISITION+FORM.pdf/27138bee-16e3-80de-5dd5-44631470819a?t=1722421918493"
  },
  caution: {
    en: "The newest SBI branch form found online is from July 2024. It does not mention the beneficiary name check that RBI asked all banks to offer, free, from 1 April 2025, or how SBI charges today. Ask the branch for the current form, the charge, and to check the beneficiary's name before you sign.",
    hi: "ऑनलाइन मिला SBI का सबसे नया ब्रांच फॉर्म जुलाई 2024 का है। इसमें उस नाम-जाँच (name look-up) का ज़िक्र नहीं है जो RBI ने 1 अप्रैल 2025 से सभी बैंकों को मुफ़्त देने को कहा है, और न ही आज के चार्ज का। ब्रांच से मौजूदा फॉर्म और चार्ज पूछें, और साइन करने से पहले पैसे पाने वाले का नाम जँचवा लें।"
  },
  lastChecked: "2026-11-05",

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "SBI NEFT / RTGS Form (Send Money from Branch)", hi: "एसबीआई NEFT / RTGS फॉर्म (ब्रांच से पैसे भेजना)" },
  about: {
    en: "State Bank of India's paper form to send money from the branch to an account in any bank through NEFT or RTGS. The left part is a counterfoil (your receipt), the right part is the application, and the conditions are printed overleaf. RBI says both NEFT and RTGS work 24x7, all days of the year. RTGS is for Rs. 2,00,000 and above with no upper limit; SBI says NEFT has no minimum or maximum. The money is credited only on the basis of the account number you write, so that number must be correct. RBI says NEFT money should reach the account within two hours of the batch, and RTGS money within 30 minutes. You can also send NEFT/RTGS through internet or mobile banking; this guide covers only the paper form.",
    hi: "यह भारतीय स्टेट बैंक का काग़ज़ वाला फॉर्म है, जिससे ब्रांच जाकर NEFT या RTGS से किसी भी बैंक के खाते में पैसे भेजे जाते हैं। बायाँ हिस्सा काउंटरफ़ॉइल (आपकी रसीद) है, दायाँ हिस्सा आवेदन है, और शर्तें पीछे छपी हैं। RBI के अनुसार NEFT और RTGS दोनों साल के सभी दिन 24x7 चलते हैं। RTGS ₹2,00,000 या उससे ज़्यादा के लिए है, ऊपर कोई सीमा नहीं; SBI के अनुसार NEFT में कोई न्यूनतम या अधिकतम सीमा नहीं है। पैसा सिर्फ़ आपके लिखे खाता नंबर के आधार पर जमा होता है, इसलिए नंबर बिल्कुल सही होना चाहिए। RBI के अनुसार NEFT का पैसा बैच के दो घंटे के अंदर और RTGS का पैसा 30 मिनट के अंदर खाते में आ जाना चाहिए। NEFT/RTGS इंटरनेट या मोबाइल बैंकिंग से भी भेज सकते हैं; यह गाइड सिर्फ़ काग़ज़ वाले फॉर्म के बारे में है।"
  },

  fields: [
    {
      label: { en: "NEFT / RTGS (tick one) and Date", hi: "NEFT / RTGS (एक पर टिक) और तारीख़" },
      quick: { en: "Tick NEFT or RTGS (RTGS only from ₹2 lakh); write date", hi: "NEFT या RTGS पर टिक करें (RTGS ₹2 लाख से); तारीख़ लिखें" },
      meaning: {
        en: "Two tick boxes at the top to choose the way the money goes, and the date of your application.",
        hi: "ऊपर दो टिक वाले डिब्बे, जिनसे आप चुनते हैं कि पैसा किस तरीक़े से जाएगा, और आवेदन की तारीख़।"
      },
      write: {
        en: "Tick only one box. RBI says the minimum for RTGS is Rs. 2,00,000 with no maximum, and that NEFT has no RBI limit; SBI says NEFT has no minimum or maximum. RTGS money is sent one by one in real time; NEFT goes in half-hourly batches. Write today's date next to \"Date\".",
        hi: "सिर्फ़ एक डिब्बे पर टिक करें। RBI के अनुसार RTGS में कम से कम ₹2,00,000 भेजने होते हैं, ऊपर कोई सीमा नहीं, और NEFT पर RBI की कोई सीमा नहीं; SBI के अनुसार NEFT में कोई न्यूनतम या अधिकतम सीमा नहीं है। RTGS में पैसा उसी समय एक-एक करके जाता है; NEFT आधे-आधे घंटे के बैच में जाता है। \"Date\" के आगे आज की तारीख़ लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Ticking RTGS for less than ₹2,00,000", "Ticking both boxes"],
        hi: ["₹2,00,000 से कम रक़म के लिए RTGS पर टिक करना", "दोनों डिब्बों पर टिक कर देना"]
      }
    },
    {
      label: { en: "Branch and Branch Code", hi: "ब्रांच और ब्रांच कोड" },
      quick: { en: "Name of this SBI branch; ask staff for branch code", hi: "इस SBI ब्रांच का नाम; ब्रांच कोड स्टाफ़ से पूछें" },
      meaning: {
        en: "The SBI branch where you are giving the form, and that branch's code.",
        hi: "SBI की वह ब्रांच जहाँ आप फॉर्म दे रहे हैं, और उस ब्रांच का कोड।"
      },
      write: {
        en: "Write the name of the SBI branch where you hand in the form. If you don't know the branch code, ask the branch staff. This is the SBI branch, not the beneficiary's branch.",
        hi: "जिस SBI ब्रांच में फॉर्म जमा कर रहे हैं, उसका नाम लिखें। ब्रांच कोड पता न हो तो ब्रांच के स्टाफ़ से पूछें। यह SBI की ब्रांच है, पैसे पाने वाले की ब्रांच नहीं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the beneficiary's bank branch here"],
        hi: ["यहाँ पैसे पाने वाले के बैंक की ब्रांच लिख देना"]
      }
    },
    {
      label: { en: "Please remit the sum of ₹ ... (₹ in words ... only)", hi: "कृपया ₹ ... की राशि भेजें (₹ शब्दों में ... मात्र)" },
      quick: { en: "Amount to send in figures, then in words ending \"only\"", hi: "भेजी जाने वाली रक़म अंकों में, फिर शब्दों में \"only\" तक" },
      meaning: {
        en: "The amount you want the beneficiary to receive, first in figures and then in words inside the brackets.",
        hi: "जितनी रक़म पैसे पाने वाले को पहुँचानी है, पहले अंकों में और फिर ब्रैकेट में शब्दों में।"
      },
      write: {
        en: "Write the amount to be sent, e.g. 25,000, and then in words, e.g. Twenty Five Thousand only. The bank's charge is added separately further down (Remittance Charge and Total).",
        hi: "भेजी जाने वाली रक़म लिखें, जैसे 25,000, और फिर शब्दों में, जैसे Twenty Five Thousand only। बैंक का चार्ज नीचे अलग से जुड़ता है (Remittance Charge और Total में)।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Amount in figures and in words not matching", "Adding the charge into this amount"],
        hi: ["अंकों और शब्दों में लिखी रक़म का अलग-अलग होना", "इसी रक़म में चार्ज भी जोड़ देना"]
      }
    },
    {
      label: { en: "By debiting my/our account No. ... by way of Transfer / Cash / Cheque (Cheque No., dated)", hi: "मेरे/हमारे खाता नंबर ... से नामे करके, ट्रांसफ़र / नकद / चेक से (चेक नंबर, तारीख़)" },
      quick: { en: "Your SBI account number; cheque number and date if paying by cheque", hi: "आपका SBI खाता नंबर; चेक से दे रहे हों तो चेक नंबर और तारीख़" },
      meaning: {
        en: "How you pay SBI for this transfer. The form gives three ways: (i) Transfer from your account (only NEFT), (ii) Cash (only NEFT), (iii) Cheque (NEFT/RTGS). The next line says your account is debited for the total amount including SBI's charges.",
        hi: "इस ट्रांसफ़र के लिए आप SBI को पैसे कैसे दे रहे हैं। फॉर्म में तीन तरीक़े हैं: (i) आपके खाते से ट्रांसफ़र (सिर्फ़ NEFT), (ii) नकद (सिर्फ़ NEFT), (iii) चेक (NEFT/RTGS)। अगली लाइन के अनुसार आपके खाते से कुल रक़म, SBI के चार्ज समेत, कटेगी।"
      },
      write: {
        en: "Write your SBI account number. If you pay by cheque, write the cheque number and its date. The form allows Transfer and Cash only for NEFT and Cheque for both, so for RTGS ask the branch how they want it paid. RBI says a person without an account can send NEFT by depositing cash, but only up to ₹50,000 per transaction, and must give extra details like address and phone number.",
        hi: "अपना SBI खाता नंबर लिखें। चेक से दे रहे हों तो चेक नंबर और उसकी तारीख़ लिखें। फॉर्म के अनुसार ट्रांसफ़र और नकद सिर्फ़ NEFT के लिए हैं और चेक दोनों के लिए, इसलिए RTGS के लिए ब्रांच से पूछें कि पैसे किस तरह देने हैं। RBI के अनुसार जिसका खाता नहीं है, वह नकद जमा करके NEFT भेज सकता है, पर एक बार में ज़्यादा से ज़्यादा ₹50,000, और उसे पता और फ़ोन नंबर जैसी जानकारी भी देनी होती है।"
      },
      documents: { en: ["Signed cheque, if you pay by cheque"], hi: ["साइन किया हुआ चेक, अगर चेक से दे रहे हैं"] },
      mistakes: {
        en: ["Not enough balance for the amount plus charges", "Choosing cash for an RTGS transfer"],
        hi: ["रक़म और चार्ज दोनों के लिए खाते में पूरा बैलेंस न होना", "RTGS के लिए नकद चुन लेना"]
      }
    },
    {
      label: { en: "Name of Beneficiary", hi: "पैसे पाने वाले का नाम (Name of Beneficiary)" },
      quick: { en: "Account holder's name exactly as in their bank", hi: "खाताधारक का नाम, जैसा उसके बैंक में है" },
      meaning: {
        en: "The name of the person or firm who will receive the money, as their bank account is in that name.",
        hi: "उस व्यक्ति या फ़र्म का नाम जिसे पैसा मिलेगा, जैसा उसके बैंक खाते में दर्ज है।"
      },
      write: {
        en: "Write the account holder's full name. RBI says the credit is given only on the basis of the account number, not the name, so a correct name alone does not protect you if the number is wrong. Ask the branch to check the name with the beneficiary account name look-up before the money is sent.",
        hi: "खाताधारक का पूरा नाम लिखें। RBI के अनुसार पैसा सिर्फ़ खाता नंबर देखकर जमा होता है, नाम देखकर नहीं, इसलिए नंबर गलत हो तो सिर्फ़ सही नाम से बचाव नहीं होता। पैसा भेजने से पहले ब्रांच से कहें कि नाम-जाँच (name look-up) से नाम मिलवा लें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing a nickname instead of the account holder's name", "Not asking for the name check"],
        hi: ["खाताधारक के असली नाम की जगह घर का नाम लिखना", "नाम-जाँच के लिए न कहना"]
      },
      changed: {
        en: "RBI's circular of 30 December 2024 asked banks to offer a free \"beneficiary account name look-up\" for RTGS and NEFT no later than 1 April 2025, also for people sending money at a branch. From the account number and IFSC, it shows the name in the beneficiary bank's records. If the name cannot be shown, you may still go ahead at your own choice.",
        hi: "RBI के 30 दिसंबर 2024 के सर्कुलर में बैंकों से कहा गया कि वे 1 अप्रैल 2025 तक RTGS और NEFT के लिए मुफ़्त \"नाम-जाँच\" (beneficiary account name look-up) दें, ब्रांच से पैसे भेजने वालों को भी। खाता नंबर और IFSC डालने पर यह दिखाता है कि पाने वाले बैंक के रिकॉर्ड में खाता किस नाम से है। नाम न दिखे, तो आगे बढ़ना या न बढ़ना आपकी मर्ज़ी है।"
      }
    },
    {
      label: { en: "Beneficiary Bank & Branch", hi: "पैसे पाने वाले का बैंक और ब्रांच" },
      quick: { en: "Receiver's bank name and branch name", hi: "पाने वाले के बैंक और ब्रांच का नाम" },
      meaning: {
        en: "The bank and the branch where the beneficiary's account is.",
        hi: "वह बैंक और ब्रांच जहाँ पैसे पाने वाले का खाता है।"
      },
      write: {
        en: "Write the bank name and the branch name, for example the town or area. Take them from the beneficiary's passbook or cancelled cheque if you have it.",
        hi: "बैंक का नाम और ब्रांच का नाम (जैसे शहर या इलाक़ा) लिखें। अगर पास हो, तो पाने वाले की पासबुक या कैंसिल चेक से देखकर लिखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing only the bank name without the branch"],
        hi: ["सिर्फ़ बैंक का नाम लिखना, ब्रांच नहीं"]
      }
    },
    {
      label: { en: "IFSC Code (11 boxes)", hi: "IFSC कोड (11 डिब्बे)" },
      quick: { en: "11-character IFSC of the receiver's branch; 5th is zero", hi: "पाने वाले की ब्रांच का 11 अक्षरों का IFSC; पाँचवाँ शून्य" },
      meaning: {
        en: "The IFSC (Indian Financial System Code) of the beneficiary's branch. RBI says it has 11 characters: the first 4 letters show the bank, the 5th is always 0 (zero), and the last 6 show the branch.",
        hi: "पैसे पाने वाले की ब्रांच का IFSC (इंडियन फ़ाइनेंशियल सिस्टम कोड)। RBI के अनुसार इसमें 11 अक्षर होते हैं: पहले 4 अक्षर बैंक बताते हैं, पाँचवाँ हमेशा 0 (शून्य) होता है, और आख़िरी 6 ब्रांच बताते हैं।"
      },
      write: {
        en: "One character per box, copied from the beneficiary's passbook, cheque or bank. RBI's NEFT FAQ lists the receiving branch IFSC among the details the sender must give.",
        hi: "हर डिब्बे में एक अक्षर, पाने वाले की पासबुक, चेक या बैंक से देखकर। RBI की NEFT FAQ में पाने वाली ब्रांच का IFSC उन बातों में है जो भेजने वाले को देनी ज़रूरी हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the letter O instead of the number 0 in the 5th place", "Using the IFSC of a different branch of the same bank"],
        hi: ["पाँचवीं जगह 0 (शून्य) की जगह अंग्रेज़ी का O लिखना", "उसी बैंक की किसी दूसरी ब्रांच का IFSC लिख देना"]
      }
    },
    {
      label: { en: "Beneficiary Account Number and (Re-write) Beneficiary Account Number", hi: "पैसे पाने वाले का खाता नंबर और दोबारा लिखा खाता नंबर" },
      quick: { en: "Receiver's account number twice; both rows must match exactly", hi: "पाने वाले का खाता नंबर दो बार; दोनों एक जैसे हों" },
      meaning: {
        en: "The beneficiary's account number, written twice so that mistakes can be caught.",
        hi: "पैसे पाने वाले का खाता नंबर, दो बार, ताकि ग़लती पकड़ी जा सके।"
      },
      write: {
        en: "Write one digit per box in both rows. Condition 1 overleaf says the bank relies only on the account number and it is your responsibility to give the correct number. RBI also says the credit is given solely based on the account number. Check it digit by digit with the beneficiary.",
        hi: "दोनों लाइनों में हर डिब्बे में एक अंक लिखें। पीछे की शर्त 1 के अनुसार बैंक सिर्फ़ खाता नंबर पर भरोसा करता है और सही नंबर देना आपकी ज़िम्मेदारी है। RBI भी कहता है कि पैसा सिर्फ़ खाता नंबर के आधार पर जमा होता है। पाने वाले के साथ एक-एक अंक मिलाकर देखें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["The two rows not matching", "Missing or extra digit"],
        hi: ["दोनों लाइनों के नंबर अलग होना", "कोई अंक छूट जाना या ज़्यादा लिख देना"]
      }
    },
    {
      label: { en: "Beneficiary LEI Number * and Sender LEI Number *", hi: "पाने वाले का LEI नंबर * और भेजने वाले का LEI नंबर *" },
      quick: { en: "Individuals: leave blank; firms need it for ₹50 crore+", hi: "आम व्यक्ति: खाली छोड़ें; ₹50 करोड़+ पर कंपनियों के लिए" },
      meaning: {
        en: "LEI is the Legal Entity Identifier, a code for companies and other entities. The form asks for it for remittances of ₹50 crore and above.",
        hi: "LEI यानी लीगल एंटिटी आइडेंटिफ़ायर, जो कंपनियों और दूसरी संस्थाओं का कोड होता है। फॉर्म ₹50 करोड़ या उससे ज़्यादा की रक़म पर इसे माँगता है।"
      },
      write: {
        en: "Condition 11 says LEI is mandatory for non-individual entities other than Government Departments, for both sender and beneficiary, for transactions of ₹50 crore and above. If you are an individual sending money, these rows do not apply; ask the branch if unsure.",
        hi: "शर्त 11 के अनुसार ₹50 करोड़ या उससे ज़्यादा के लेन-देन में, सरकारी विभागों को छोड़कर, व्यक्ति के अलावा बाक़ी संस्थाओं (कंपनी, फ़र्म आदि) के लिए भेजने और पाने वाले दोनों का LEI ज़रूरी है। अगर आप एक आम व्यक्ति के रूप में पैसे भेज रहे हैं, तो ये लाइनें आप पर लागू नहीं होतीं; पक्का न हो तो ब्रांच से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing Aadhaar or PAN in the LEI boxes"],
        hi: ["LEI वाले डिब्बों में Aadhaar या PAN लिख देना"]
      }
    },
    {
      label: { en: "Remittance Amount (in figures), Remittance Charge, Total (including charges)", hi: "भेजी जाने वाली रक़म (अंकों में), चार्ज, कुल (चार्ज सहित)" },
      quick: { en: "Amount, SBI's charge (ask branch), and their total, in rupees.paise", hi: "रक़म, SBI का चार्ज (ब्रांच से पूछें), और कुल, रुपये.पैसे में" },
      meaning: {
        en: "Three rows of boxes in rupees and paise: the amount being sent, the bank's charge for it, and the total of the two.",
        hi: "रुपये और पैसे के डिब्बों की तीन लाइनें: भेजी जाने वाली रक़म, उस पर बैंक का चार्ज, और दोनों का जोड़।"
      },
      write: {
        en: "Write the same amount as at the top in the first row. Ask the branch for SBI's charge and write it in the second row, then add the two in the third row. RBI's FAQs give only upper limits for what banks may charge for branch transfers: NEFT up to ₹2.50 (up to ₹10,000), ₹5 (above ₹10,000 to ₹1 lakh), ₹15 (above ₹1 lakh to ₹2 lakh) and ₹25 (above ₹2 lakh), plus GST; RTGS up to ₹25 (₹2 lakh to ₹5 lakh) and ₹50 (above ₹5 lakh), excluding tax. RBI also says savings account holders are not charged for NEFT done online (from 1 January 2020).",
        hi: "पहली लाइन में वही रक़म लिखें जो ऊपर लिखी है। SBI का चार्ज ब्रांच से पूछकर दूसरी लाइन में लिखें, फिर तीसरी लाइन में दोनों का जोड़। RBI की FAQ में सिर्फ़ ऊपरी सीमा दी गई है कि बैंक ब्रांच से भेजने पर ज़्यादा से ज़्यादा कितना ले सकते हैं: NEFT में ₹10,000 तक ₹2.50, ₹10,000 से ₹1 लाख तक ₹5, ₹1 लाख से ₹2 लाख तक ₹15 और ₹2 लाख से ऊपर ₹25, साथ में GST; RTGS में ₹2 लाख से ₹5 लाख तक ₹25 और ₹5 लाख से ऊपर ₹50, टैक्स अलग। RBI के अनुसार बचत खाते वालों से ऑनलाइन NEFT पर कोई चार्ज नहीं लिया जाता (1 जनवरी 2020 से)।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Adding the total wrongly", "Leaving the paise boxes empty instead of writing 00"],
        hi: ["कुल का जोड़ ग़लत करना", "पैसे वाले डिब्बे खाली छोड़ना, 00 न लिखना"]
      }
    },
    {
      label: { en: "Total Amount (including charges) (in words)", hi: "कुल रक़म (चार्ज सहित) शब्दों में" },
      quick: { en: "The total with charges, in words, ending \"only\"", hi: "चार्ज समेत कुल रक़म शब्दों में, \"only\" तक" },
      meaning: {
        en: "The total from the row above (amount plus charge), written in words.",
        hi: "ऊपर वाली कुल रक़म (रक़म + चार्ज), शब्दों में।"
      },
      write: {
        en: "Write the total in words, ending with \"only\", so that it matches the Total in figures.",
        hi: "कुल रक़म शब्दों में लिखें, आख़िर में \"only\" लगाकर, ताकि यह अंकों वाले Total से मेल खाए।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the amount without charges here", "Words and figures not matching"],
        hi: ["यहाँ चार्ज के बिना वाली रक़म लिख देना", "शब्दों और अंकों में फ़र्क़ होना"]
      }
    },
    {
      label: { en: "Name of Applicant", hi: "आवेदक का नाम" },
      quick: { en: "Your name as in your SBI account", hi: "आपका नाम, जैसा SBI खाते में है" },
      meaning: {
        en: "The name of the person sending the money (the remitter).",
        hi: "पैसे भेजने वाले व्यक्ति (आप) का नाम।"
      },
      write: {
        en: "Write your full name. If the money is debited from your account, write it as the account is in your name; ask the branch if unsure. RBI's FAQs list the sender's name among the details to be given.",
        hi: "अपना पूरा नाम लिखें। अगर पैसा आपके खाते से कट रहा है, तो नाम वैसा लिखें जैसा खाते में है; पक्का न हो तो ब्रांच से पूछें। RBI की FAQ में भेजने वाले का नाम ज़रूरी जानकारी में गिना गया है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the beneficiary's name here"],
        hi: ["यहाँ पैसे पाने वाले का नाम लिख देना"]
      }
    },
    {
      label: { en: "Address, Mobile No., Tel No.", hi: "पता, मोबाइल नंबर, टेलीफ़ोन नंबर" },
      quick: { en: "Your full address and your own mobile number", hi: "आपका पूरा पता और अपना मोबाइल नंबर" },
      meaning: {
        en: "Your (the sender's) address and phone numbers.",
        hi: "आपका (भेजने वाले का) पता और फ़ोन नंबर।"
      },
      write: {
        en: "Write your full address and a mobile number that you use. SBI's FAQ lists the sender's name, address and mobile number or email among the details needed. RBI says a walk-in customer sending NEFT with cash must give details like full address and telephone number. Tel No. (landline) only if you have one.",
        hi: "अपना पूरा पता और वह मोबाइल नंबर लिखें जो आप इस्तेमाल करते हैं। SBI की FAQ में भेजने वाले का नाम, पता और मोबाइल नंबर या ईमेल ज़रूरी जानकारी में है। RBI के अनुसार बिना खाते के नकद से NEFT भेजने वाले को पूरा पता और फ़ोन नंबर जैसी जानकारी देनी होती है। Tel No. (लैंडलाइन) तभी लिखें जब हो।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Giving someone else's mobile number"],
        hi: ["किसी और का मोबाइल नंबर लिख देना"]
      }
    },
    {
      label: { en: "Signature of Customer(s) / Applicant(s) and Conditions for Transfer (overleaf)", hi: "ग्राहक / आवेदक के हस्ताक्षर और पीछे की शर्तें" },
      quick: { en: "Read the conditions overleaf, then sign on both sides", hi: "पीछे की शर्तें पढ़ें, फिर दोनों तरफ़ साइन करें" },
      meaning: {
        en: "On the front you sign below \"I have read and understood the T&C printed overleaf\". The back has 12 \"Conditions for Transfer\" and another signature line.",
        hi: "आगे की तरफ़ \"मैंने पीछे छपी शर्तें पढ़ और समझ ली हैं\" के नीचे साइन करते हैं। पीछे 12 \"शर्तें\" हैं और साइन की एक और लाइन है।"
      },
      write: {
        en: "Sign on the front and below the conditions overleaf. Important conditions: you are responsible for the correct account number (1); you have checked the details and will compensate for losses from your errors (2); the transfer is for legitimate personal or business needs (3); you must have enough funds (4); applications received after business hours are sent on the next working day (8); SBI is not responsible for delays or wrong credit caused by incorrect information from you (9); the bank may recover charges for remittances returned due to faulty information (10).",
        hi: "आगे की तरफ़ और पीछे शर्तों के नीचे साइन करें। ज़रूरी शर्तें: सही खाता नंबर देना आपकी ज़िम्मेदारी है (1); आपने जानकारी जाँच ली है और आपकी ग़लती से हुए नुक़सान की भरपाई आप करेंगे (2); पैसा सही निजी या कारोबारी ज़रूरत के लिए भेजा जा रहा है (3); खाते में पूरे पैसे होने चाहिए (4); कामकाज के समय के बाद मिले आवेदन अगले कामकाजी दिन भेजे जाएँगे (8); आपकी दी गई ग़लत जानकारी से हुई देरी या ग़लत खाते में गए पैसे के लिए SBI ज़िम्मेदार नहीं (9); ग़लत जानकारी की वजह से पैसा वापस आए तो बैंक चार्ज ले सकता है (10)।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Signing only on the front", "Signature different from the one in the bank's records"],
        hi: ["सिर्फ़ आगे की तरफ़ साइन करना", "बैंक के रिकॉर्ड से अलग हस्ताक्षर करना"]
      }
    },
    {
      label: { en: "Counterfoil (left part: your receipt)", hi: "काउंटरफ़ॉइल (बायाँ हिस्सा: आपकी रसीद)" },
      quick: { en: "Copy the same details; keep it after the bank stamps", hi: "वही जानकारी दोबारा लिखें; बैंक से लेकर संभालें" },
      meaning: {
        en: "The small part on the left with Branch, Date, Received ₹, From, mode of payment, Cheque No., favoring, Beneficiary A/c No. (and re-write), IFSC Code, Beneficiary Bank & Branch, Amount, Bank's Charges, Total and the total in words.",
        hi: "बाईं ओर का छोटा हिस्सा, जिसमें ब्रांच, तारीख़, प्राप्त ₹, किससे (From), भुगतान का तरीक़ा, चेक नंबर, किसके नाम (favoring), पाने वाले का खाता नंबर (और दोबारा), IFSC, पाने वाले का बैंक और ब्रांच, रक़म, बैंक चार्ज, कुल और कुल शब्दों में है।"
      },
      write: {
        en: "Fill it with the same details as the main form (\"From\" is your name). The form does not say who tears it off; ask the branch to give it back to you and keep it, because it has space for the UTR number.",
        hi: "इसमें वही जानकारी भरें जो मुख्य फॉर्म में है (\"From\" में आपका नाम)। फॉर्म में यह नहीं लिखा कि इसे कौन अलग करेगा; ब्रांच से कहें कि यह हिस्सा आपको वापस दें और इसे संभालकर रखें, क्योंकि इसमें UTR नंबर लिखने की जगह है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the counterfoil blank", "Account number on the counterfoil different from the main form"],
        hi: ["काउंटरफ़ॉइल खाली छोड़ देना", "काउंटरफ़ॉइल का खाता नंबर मुख्य फॉर्म से अलग होना"]
      }
    },
    {
      label: { en: "UTR No & Date (for office use)", hi: "UTR नंबर और तारीख़ (बैंक के लिए)" },
      quick: { en: "Leave blank; bank fills the UTR number", hi: "खाली छोड़ें; UTR नंबर बैंक भरेगा" },
      meaning: {
        en: "Boxes for the bank, on the main form and at the bottom of the counterfoil, for the UTR (the reference number of the transfer) and the Branch Manager's signature.",
        hi: "मुख्य फॉर्म पर और काउंटरफ़ॉइल के नीचे बैंक के लिए जगह, जहाँ UTR (ट्रांसफ़र का रेफ़रेंस नंबर) और ब्रांच मैनेजर के हस्ताक्षर आते हैं।"
      },
      write: {
        en: "Do not write anything here. When you get the counterfoil back, check that the UTR number is written on it; it helps if you need to follow up. If there is a problem, RBI says to complain first to your bank; if not resolved in 30 days you can complain at cms.rbi.org.in.",
        hi: "यहाँ कुछ न लिखें। काउंटरफ़ॉइल वापस मिले तो देखें कि उस पर UTR नंबर लिखा है; बाद में पूछताछ में यह काम आता है। कोई दिक़्क़त हो तो RBI के अनुसार पहले अपने बैंक में शिकायत करें; 30 दिन में हल न हो तो cms.rbi.org.in पर शिकायत कर सकते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the branch without a UTR number on the counterfoil"],
        hi: ["काउंटरफ़ॉइल पर UTR नंबर लिखवाए बिना ब्रांच से निकल जाना"]
      }
    }
  ]
});
