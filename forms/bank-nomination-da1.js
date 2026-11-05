// Checked against these official documents:
//  - State Bank of India, "Annexure-I Nomination Form: Form for Nomination, Cancellation of Nomination and Variation of
//    Nomination in respect of the Bank Deposits, Articles in Safe Custody and Safety Lockers" (4 pages, PDF created
//    01-11-2025), https://sbi.bank.in/documents/16012/22770835/Revised+Nomination+Form.pdf
//  - Ministry of Finance (Department of Financial Services) notification G.S.R. 790(E) dated 27-10-2025, the Banking
//    Companies (Nomination) Rules, 2025, with the annexed Nomination Form (Gazette of India, Extraordinary, Part II
//    Sec. 3(i), pages 6-10; copy read at https://thc.nic.in/Central%20Governmental%20Rules/Banking%20Companies%20(Nomination)%20Rules,%202025.pdf)
//  - PIB, Ministry of Finance release ID 2181734 of 23-10-2025, "Key Provisions relating to Nomination under the
//    Banking Laws (Amendment) Act, 2025 to come into effect from 1st November 2025" (sections 10-13 in force from
//    01-11-2025 by Gazette notification S.O. 4789(E) dated 22-10-2025; Act notified 15-04-2025)
//  - Reserve Bank of India (Nomination Facility in Deposit Accounts, Safe Deposit Lockers and Articles kept in Safe
//    Custody with the Banks) Directions, 2025, RBI/2025-26/95 DOR.MCS.REC.59/01.01.003/2025-26 dated 28-10-2025
//    (rbi.org.in/Scripts/NotificationUser.aspx?Id=12919)
//  - SBI "Request for Nomination (Form DA-1) in NRE/NRO/FCNR (B) account" (PDF dated 23-02-2018,
//    sbi.bank.in/documents/21077/23246/NRI_7.pdf), read only to describe the old one-nominee DA1 form.
// Every statement below comes from those documents. If something is not stated in them, the guide says
// "ask your bank branch" instead of guessing. No fees are mentioned because none of these documents states any.

window.FORMS.push({
  id: "bank-nomination-da1",
  verified: true,
  source: {
    title: "SBI Annexure-I Nomination Form under the Banking Companies (Nomination) Rules, 2025 (sbi.bank.in, PDF dated 01-11-2025), checked with the Rules (G.S.R. 790(E), 27-10-2025) and RBI Directions of 28-10-2025",
    url: "https://sbi.bank.in/documents/16012/22770835/Revised+Nomination+Form.pdf"
  },
  caution: {
    en: "Form DA1 has been replaced. From 1 November 2025 the Banking Companies (Nomination) Rules, 2025 (Gazette notification G.S.R. 790(E) of 27 October 2025) replaced the 1985 Rules under which Form DA1 was used, and brought in a new \"Nomination Form\" that allows up to four nominees. This guide follows SBI's copy of the new form. Each bank prints its own version, and the Rules let a bank translate it, so the layout at your bank may look a little different. If a branch gives you an old DA1 form, ask for the new nomination form instead.",
    hi: "फॉर्म DA1 अब बदल गया है। 1 नवंबर 2025 से बैंकिंग कंपनी (नामांकन) नियम, 2025 (गज़ट अधिसूचना G.S.R. 790(E), 27 अक्टूबर 2025) ने 1985 के उन नियमों की जगह ले ली है जिनके तहत फॉर्म DA1 चलता था, और एक नया \"नॉमिनेशन फॉर्म\" आया है जिसमें चार तक नॉमिनी रखे जा सकते हैं। यह गाइड SBI के नए फॉर्म पर आधारित है। हर बैंक अपना फॉर्म छापता है और नियम बैंक को अनुवाद करने की छूट देते हैं, इसलिए आपके बैंक का फॉर्म थोड़ा अलग दिख सकता है। अगर ब्रांच पुराना DA1 फॉर्म दे, तो नया नॉमिनेशन फॉर्म माँगें।"
  },
  lastChecked: "2026-11-05",

  category: { en: "Bank", hi: "बैंक" },
  name: { en: "Bank Nomination Form (new form replacing DA1)", hi: "बैंक नॉमिनेशन फॉर्म (DA1 की जगह नया फॉर्म)" },
  about: {
    en: "A nomination tells the bank who should receive the money in your deposit account (savings, current, fixed deposit and so on) after your death. The same form is also used for safety lockers and articles kept in safe custody, and to cancel or change an earlier nomination. Since 1 November 2025 you can name up to four people (individuals only). For deposits you choose either successive nomination (one nominee after another, in order) or simultaneous nomination (all nominees at once, each with a fixed percentage adding up to 100%). For lockers and safe custody, only successive nomination is allowed. RBI's Directions say the bank must explain nomination when you open an account, but cannot refuse or delay your account only because you do not want to nominate; it will then take a written declaration from you. You can also make or change a nomination at any time while the account is open. If your bank offers e-nomination (internet or mobile banking), you can do it online instead of on paper.",
    hi: "नॉमिनेशन से बैंक को पता चलता है कि आपकी मौत के बाद आपके डिपॉज़िट खाते (सेविंग्स, करंट, फ़िक्स्ड डिपॉज़िट वगैरह) का पैसा किसे मिलेगा। यही फॉर्म लॉकर और बैंक में सुरक्षित रखी चीज़ों (सेफ़ कस्टडी) के लिए भी है, और पुराना नॉमिनेशन रद्द करने या बदलने के लिए भी। 1 नवंबर 2025 से आप चार लोगों (सिर्फ़ व्यक्ति) तक को नॉमिनी बना सकते हैं। डिपॉज़िट के लिए आप चुनते हैं: क्रमवार (सक्सेसिव) नॉमिनेशन, यानी एक के बाद एक, या एक साथ (साइमल्टेनियस) नॉमिनेशन, यानी सबको एक साथ, हर एक का तय प्रतिशत, कुल 100%। लॉकर और सेफ़ कस्टडी में सिर्फ़ क्रमवार नॉमिनेशन होता है। RBI के निर्देशों के अनुसार खाता खोलते समय बैंक को नॉमिनेशन समझाना होता है, लेकिन सिर्फ़ नॉमिनेशन न करने की वजह से बैंक खाता खोलने से मना या देर नहीं कर सकता; तब वह आपसे लिखित घोषणा लेगा। खाता चालू रहते आप कभी भी नॉमिनेशन कर या बदल सकते हैं। अगर आपका बैंक ई-नॉमिनेशन (इंटरनेट या मोबाइल बैंकिंग) देता है, तो कागज़ की जगह ऑनलाइन भी कर सकते हैं।"
  },

  fields: [
    {
      label: { en: "Bank Name, Branch and Branch Code", hi: "बैंक का नाम, ब्रांच और ब्रांच कोड" },
      quick: { en: "Your bank's name, your branch and its branch code", hi: "बैंक का नाम, आपकी ब्रांच और उसका ब्रांच कोड" },
      meaning: {
        en: "The bank and branch where your account, locker or safe custody article is kept.",
        hi: "वह बैंक और ब्रांच जहाँ आपका खाता, लॉकर या सेफ़ कस्टडी का सामान है।"
      },
      write: {
        en: "Write the bank's name, the branch name and the branch code. The branch code is usually printed on your passbook or account statement; if you cannot find it, ask the branch.",
        hi: "बैंक का नाम, ब्रांच का नाम और ब्रांच कोड लिखें। ब्रांच कोड आम तौर पर पासबुक या खाते के स्टेटमेंट पर छपा होता है; न मिले तो ब्रांच से पूछ लें।"
      },
      documents: { en: ["Passbook or account statement (to copy the branch details)"], hi: ["पासबुक या खाते का स्टेटमेंट (ब्रांच की जानकारी देखने के लिए)"] },
      mistakes: {
        en: ["Writing a different branch from the one where the account is held"],
        hi: ["जिस ब्रांच में खाता है उसकी जगह कोई दूसरी ब्रांच लिख देना"]
      }
    },
    {
      label: { en: "1. Name of Depositor / Individual leaving article in safe custody / Hirer of a locker (i)–(iv)", hi: "1. जमाकर्ता / सेफ़ कस्टडी में सामान रखने वाले / लॉकर किराए पर लेने वाले का नाम (i)–(iv)" },
      quick: { en: "Every account holder's name, one per line; strike out what doesn't apply", hi: "हर खाताधारक का नाम, एक लाइन में एक; जो लागू न हो उसे काटें" },
      meaning: {
        en: "The names of the people who own the account (or hire the locker). There are four lines because a joint account can have more than one holder. The heading and the line \"Nomination form is in respect of bank deposit/article in safe custody/locker\" are marked *, which means strike out whichever is not relevant.",
        hi: "उन लोगों के नाम जिनका खाता है (या जिन्होंने लॉकर लिया है)। चार लाइनें इसलिए हैं क्योंकि जॉइंट खाते में एक से ज़्यादा खाताधारक हो सकते हैं। हेडिंग और \"यह नॉमिनेशन फॉर्म बैंक डिपॉज़िट/सेफ़ कस्टडी/लॉकर के लिए है\" वाली लाइन पर * लगा है, यानी जो लागू न हो उसे काट देना है।"
      },
      write: {
        en: "For a bank account, strike out \"article in safe custody/locker\" and the locker words, keeping \"bank deposit\" and \"Depositor\". Write each holder's name on its own line, as in the bank's records. The Rules say a nomination for a joint deposit is made by all the depositors together, and a cancellation or change is valid only if all of them make it. If the account is in a minor's name, the person lawfully entitled to act for the minor fills and signs the form.",
        hi: "बैंक खाते के लिए \"सेफ़ कस्टडी/लॉकर\" वाले शब्द काट दें और \"बैंक डिपॉज़िट\" व \"जमाकर्ता\" रहने दें। हर खाताधारक का नाम अलग लाइन में, बैंक के रिकॉर्ड जैसा ही लिखें। नियमों के अनुसार जॉइंट खाते का नॉमिनेशन सभी जमाकर्ता मिलकर करते हैं, और उसे रद्द करना या बदलना तभी मान्य है जब सभी करें। अगर खाता किसी नाबालिग के नाम है, तो नाबालिग की ओर से काम करने का क़ानूनी हक़ रखने वाला व्यक्ति फॉर्म भरता और साइन करता है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing only one name for a joint account", "Not striking out the words that do not apply"],
        hi: ["जॉइंट खाते में सिर्फ़ एक नाम लिखना", "जो शब्द लागू नहीं होते उन्हें न काटना"]
      }
    },
    {
      label: { en: "Account Number / Locker Number, Nature of deposit, Additional details", hi: "खाता संख्या / लॉकर नंबर, डिपॉज़िट का प्रकार, अतिरिक्त जानकारी" },
      quick: { en: "Account number and type, e.g. savings or fixed deposit", hi: "खाता संख्या और प्रकार, जैसे सेविंग्स या एफ़डी" },
      meaning: {
        en: "A table with three columns: the account number (or locker / safe custody number), the nature of the deposit (or articles, or locker), and any additional details. It has several rows, so you can list more than one account.",
        hi: "तीन कॉलम वाली टेबल: खाता संख्या (या लॉकर / सेफ़ कस्टडी नंबर), डिपॉज़िट का प्रकार (या सामान, या लॉकर का प्रकार), और कोई अतिरिक्त जानकारी। इसमें कई लाइनें हैं, ताकि आप एक से ज़्यादा खाते लिख सकें।"
      },
      write: {
        en: "Write each account number and its type (for example savings account or fixed deposit) on a separate row. The instructions say the nomination applies to all the accounts, lockers or articles listed, unless you say otherwise. What to put under \"Additional details\" is not explained, so ask your branch if you are unsure.",
        hi: "हर खाता संख्या और उसका प्रकार (जैसे सेविंग्स खाता या फ़िक्स्ड डिपॉज़िट) अलग लाइन में लिखें। निर्देशों के अनुसार नॉमिनेशन यहाँ लिखे सभी खातों, लॉकरों या सामान पर लागू होता है, जब तक आप अलग से न बताएँ। \"अतिरिक्त जानकारी\" में क्या लिखना है, यह नहीं समझाया गया, इसलिए शक हो तो ब्रांच से पूछें।"
      },
      documents: { en: ["Passbook, statement or deposit receipt with the account number"], hi: ["खाता संख्या वाली पासबुक, स्टेटमेंट या डिपॉज़िट रसीद"] },
      mistakes: {
        en: ["A wrong digit in the account number", "Forgetting a fixed deposit you also want covered"],
        hi: ["खाता संख्या में कोई अंक ग़लत लिखना", "जिस एफ़डी के लिए भी नॉमिनेशन चाहिए उसे लिखना भूल जाना"]
      }
    },
    {
      label: { en: "2. Nomination Details: Name of Nominee (B) and Address (C)", hi: "2. नॉमिनेशन की जानकारी: नॉमिनी का नाम (B) और पता (C)" },
      quick: { en: "Full name and address of up to four nominees", hi: "चार तक नॉमिनी का पूरा नाम और पता" },
      meaning: {
        en: "The people who will receive the deposit, the locker contents or the articles after your death. Rows (i) to (iv) are for the first to fourth nominee.",
        hi: "वे लोग जिन्हें आपकी मौत के बाद डिपॉज़िट, लॉकर का सामान या सेफ़ कस्टडी का सामान मिलेगा। लाइन (i) से (iv) पहले से चौथे नॉमिनी के लिए हैं।"
      },
      write: {
        en: "Write each nominee's full name and address in a separate row. Nominees must be individuals, not more than four. The Rules say that if more than four are written by mistake, only the first four are recognised, and the order of priority is the order in which names appear in column (B). So write the names in the order you want.",
        hi: "हर नॉमिनी का पूरा नाम और पता अलग लाइन में लिखें। नॉमिनी सिर्फ़ व्यक्ति हो सकते हैं, और चार से ज़्यादा नहीं। नियमों के अनुसार अगर ग़लती से चार से ज़्यादा नाम लिख दिए, तो सिर्फ़ पहले चार माने जाएँगे, और प्राथमिकता का क्रम वही होगा जिस क्रम में कॉलम (B) में नाम लिखे हैं। इसलिए नाम उसी क्रम में लिखें जो आप चाहते हैं।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Naming a company, trust or other organisation instead of a person", "Writing more than four nominees", "Using nicknames instead of full names"],
        hi: ["व्यक्ति की जगह किसी कंपनी, ट्रस्ट या संस्था को नॉमिनी बनाना", "चार से ज़्यादा नॉमिनी लिखना", "पूरे नाम की जगह घर का नाम लिखना"]
      }
    },
    {
      label: { en: "Email/Mobile number (D), Relationship with bank customer (E), Age (F)", hi: "ईमेल/मोबाइल नंबर (D), खाताधारक से रिश्ता (E), उम्र (F)" },
      quick: { en: "Nominee's phone/email if any, relationship, and age", hi: "नॉमिनी का फ़ोन/ईमेल (हो तो), रिश्ता और उम्र" },
      meaning: {
        en: "Contact details of each nominee, how the nominee is related to you, and the nominee's age.",
        hi: "हर नॉमिनी का संपर्क, वह आपका क्या लगता है, और नॉमिनी की उम्र।"
      },
      write: {
        en: "Column (D): the nominee's email or mobile number, \"if any\". Column (E): the relationship, for example mother or brother; the form says \"if any\". Column (F): the nominee's age. If a nominee is a minor (under 18), also fill the Guardian Details in section 4.",
        hi: "कॉलम (D): नॉमिनी का ईमेल या मोबाइल नंबर, \"अगर हो\"। कॉलम (E): रिश्ता, जैसे माँ या भाई; फॉर्म पर \"अगर हो\" लिखा है। कॉलम (F): नॉमिनी की उम्र। अगर कोई नॉमिनी नाबालिग (18 से कम) है, तो भाग 4 में अभिभावक (गार्डियन) की जानकारी भी भरें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Leaving the age blank", "Not filling section 4 when a nominee is a child"],
        hi: ["उम्र खाली छोड़ना", "नॉमिनी बच्चा होने पर भी भाग 4 न भरना"]
      }
    },
    {
      label: { en: "Choose: successive or simultaneous nomination (Care and Note below the table)", hi: "चुनें: क्रमवार या एक साथ नॉमिनेशन (टेबल के नीचे \"Care\" और \"Note\")" },
      quick: { en: "Decide: one-after-another (column G) or shared percentages (column H)", hi: "तय करें: एक के बाद एक (कॉलम G) या प्रतिशत में बँटवारा (कॉलम H)" },
      meaning: {
        en: "Simultaneous nomination: up to four nominees share the deposit, each with a defined percentage, totalling 100%. Successive nomination: up to four nominees in order of priority; a nominee lower in the order gets it only after the death of the nominees higher in the order.",
        hi: "एक साथ (साइमल्टेनियस) नॉमिनेशन: चार तक नॉमिनी डिपॉज़िट बाँटते हैं, हर एक का तय प्रतिशत, कुल 100%। क्रमवार (सक्सेसिव) नॉमिनेशन: चार तक नॉमिनी प्राथमिकता के क्रम में; नीचे वाले नॉमिनी को तभी मिलता है जब ऊपर वाले नॉमिनी जीवित न हों।"
      },
      write: {
        en: "Note (iv) says that for deposits only one of column (G) or column (H) is to be filled, so decide first. There is no separate box; your choice shows by which column you fill. For lockers and safe custody articles only successive nomination is allowed and column (H) is not filled. RBI's Directions add that in simultaneous nomination, if one nominee dies before receiving the money, the nomination fails only for that nominee's share, which the bank then settles as for an account without a nominee.",
        hi: "नोट (iv) के अनुसार डिपॉज़िट के लिए कॉलम (G) या कॉलम (H) में से सिर्फ़ एक भरना है, इसलिए पहले तय कर लें। इसके लिए अलग खाना नहीं है; आप कौन-सा कॉलम भरते हैं, उसी से पता चलता है। लॉकर और सेफ़ कस्टडी में सिर्फ़ क्रमवार नॉमिनेशन होता है और कॉलम (H) नहीं भरा जाता। RBI के निर्देशों के अनुसार एक साथ नॉमिनेशन में अगर कोई नॉमिनी पैसा मिलने से पहले गुज़र जाए, तो सिर्फ़ उसके हिस्से का नॉमिनेशन बेकार होता है, और बैंक उस हिस्से को बिना-नॉमिनी वाले खाते की तरह निपटाता है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Filling both column (G) and column (H)", "Choosing shares (column H) for a locker"],
        hi: ["कॉलम (G) और (H) दोनों भर देना", "लॉकर के लिए प्रतिशत (कॉलम H) भर देना"]
      },
      changed: {
        en: "Changed: since 1 November 2025 (Banking Laws (Amendment) Act, 2025 and the Banking Companies (Nomination) Rules, 2025), you can name up to four nominees, successively or simultaneously. The old Form DA1 under the 1985 Rules asked for one nominee (\"the following person\").",
        hi: "बदलाव: 1 नवंबर 2025 से (बैंकिंग क़ानून (संशोधन) अधिनियम, 2025 और बैंकिंग कंपनी (नामांकन) नियम, 2025) आप चार तक नॉमिनी, क्रमवार या एक साथ, रख सकते हैं। 1985 के नियमों वाले पुराने फॉर्म DA1 में एक ही नॉमिनी का नाम लिया जाता था।"
      }
    },
    {
      label: { en: "Order of priority in case of successive nomination (G)", hi: "क्रमवार नॉमिनेशन में प्राथमिकता का क्रम (G)" },
      quick: { en: "Already printed First to Fourth; use only for successive nomination", hi: "पहला से चौथा पहले से छपा है; सिर्फ़ क्रमवार में" },
      meaning: {
        en: "Column (G) already shows \"First Nominee\", \"Second Nominee\", \"Third Nominee\" and \"Fourth Nominee\" against rows (i) to (iv).",
        hi: "कॉलम (G) में लाइन (i) से (iv) के सामने पहले से \"पहला नॉमिनी\", \"दूसरा नॉमिनी\", \"तीसरा नॉमिनी\" और \"चौथा नॉमिनी\" छपा है।"
      },
      write: {
        en: "Use this column only if you chose successive nomination. Put the nominees in rows in the order you want: the first row gets the money first. The instructions say a nominee lower in the order gets it only after the death of all nominees higher in the order. If you chose simultaneous nomination, leave this column and fill column (H) instead; if your bank's form wants you to strike it out, ask the branch.",
        hi: "यह कॉलम तभी इस्तेमाल करें जब आपने क्रमवार नॉमिनेशन चुना हो। नॉमिनी को उसी क्रम में लाइनों में लिखें जो आप चाहते हैं: पहली लाइन वाले को सबसे पहले मिलेगा। निर्देशों के अनुसार नीचे वाले नॉमिनी को तभी मिलता है जब उससे ऊपर वाले सभी नॉमिनी जीवित न हों। अगर आपने एक साथ नॉमिनेशन चुना है, तो यह कॉलम छोड़कर कॉलम (H) भरें; अगर आपके बैंक का फॉर्म इसे काटने को कहे, तो ब्रांच से पूछ लें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Writing the nominees in a different order from the priority you want"],
        hi: ["जो प्राथमिकता चाहिए उससे अलग क्रम में नॉमिनी लिख देना"]
      }
    },
    {
      label: { en: "Proportion of deposit in percentage (H)", hi: "डिपॉज़िट का प्रतिशत हिस्सा (H)" },
      quick: { en: "Each nominee's share in %; total must be exactly 100%", hi: "हर नॉमिनी का हिस्सा % में; कुल ठीक 100%" },
      meaning: {
        en: "The share of the deposit each nominee gets, in percent. Only for simultaneous nomination of a bank deposit.",
        hi: "हर नॉमिनी को डिपॉज़िट का कितना हिस्सा मिलेगा, प्रतिशत में। सिर्फ़ बैंक डिपॉज़िट के एक साथ नॉमिनेशन के लिए।"
      },
      write: {
        en: "Write a percentage against each nominee, for example 50, 30 and 20. Note (v) says the total across all nominees must equal 100%. Do not fill this column for a locker or safe custody article, or if you chose successive nomination.",
        hi: "हर नॉमिनी के सामने प्रतिशत लिखें, जैसे 50, 30 और 20। नोट (v) के अनुसार सभी नॉमिनी का कुल जोड़ 100% होना चाहिए। लॉकर या सेफ़ कस्टडी के लिए, या क्रमवार नॉमिनेशन चुनने पर यह कॉलम न भरें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Shares adding up to more or less than 100%", "Writing amounts in rupees instead of percentages"],
        hi: ["हिस्सों का जोड़ 100% से कम या ज़्यादा होना", "प्रतिशत की जगह रुपये में रक़म लिख देना"]
      }
    },
    {
      label: { en: "3. Cancellation of Nomination / Variation of Nomination", hi: "3. नॉमिनेशन रद्द करना / बदलना" },
      quick: { en: "Write your name(s) if this replaces an earlier nomination", hi: "अगर यह पुराने नॉमिनेशन की जगह है तो अपना नाम लिखें" },
      meaning: {
        en: "A declaration that this new nomination replaces (supersedes) all earlier nominations for the deposit, locker or article described above.",
        hi: "एक घोषणा कि यह नया नॉमिनेशन ऊपर लिखे डिपॉज़िट, लॉकर या सामान के सभी पुराने नॉमिनेशन की जगह लेता है।"
      },
      write: {
        en: "Write your name (all holders' names for a joint account) on the line after \"I/We\". The Rules say a nomination is cancelled or changed only by making a new nomination, and every new nomination cancels or varies the earlier one. For a joint account, a cancellation or change is valid only if all depositors make it. The Rules replaced the 1985 Rules except for things already done under them, so a nomination you made earlier on Form DA1 is not cancelled by the new Rules; to add nominees or change it, you fill this new form. Ask your branch if you are unsure whether you have an earlier nomination.",
        hi: "\"I/We\" के बाद वाली लाइन पर अपना नाम लिखें (जॉइंट खाते में सभी खाताधारकों के नाम)। नियमों के अनुसार नॉमिनेशन सिर्फ़ नया नॉमिनेशन करके ही रद्द होता या बदलता है, और हर नया नॉमिनेशन पुराने को रद्द कर देता है या बदल देता है। जॉइंट खाते में रद्द करना या बदलना तभी मान्य है जब सभी जमाकर्ता करें। नए नियमों ने 1985 के नियमों की जगह ली है, लेकिन उनके तहत पहले किए गए काम बने रहते हैं, इसलिए फॉर्म DA1 पर पहले किया गया नॉमिनेशन नए नियमों से अपने-आप रद्द नहीं होता; नॉमिनी जोड़ने या बदलने के लिए यह नया फॉर्म भरें। आपका पहले से नॉमिनेशन है या नहीं, यह पक्का न हो तो ब्रांच से पूछें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Only one joint holder signing a change", "Forgetting that the new nomination fully replaces the old one"],
        hi: ["जॉइंट खाते में बदलाव पर सिर्फ़ एक खाताधारक का साइन करना", "यह भूल जाना कि नया नॉमिनेशन पुराने की पूरी तरह जगह ले लेता है"]
      }
    },
    {
      label: { en: "4. Guardian Details (if any nominee is a minor)", hi: "4. अभिभावक (गार्डियन) की जानकारी (अगर कोई नॉमिनी नाबालिग है)" },
      quick: { en: "Only for a minor nominee: an adult guardian's details", hi: "सिर्फ़ नाबालिग नॉमिनी के लिए: किसी बालिग अभिभावक की जानकारी" },
      meaning: {
        en: "If a nominee is a minor, you can appoint an adult to receive the money on the minor's behalf if you die while the nominee is still a minor. The table has: Name of Nominee, Name of Guardian, Relationship with Nominee, Address, and Email/Mobile number of guardian (if any).",
        hi: "अगर कोई नॉमिनी नाबालिग है, तो आप किसी बालिग को नियुक्त कर सकते हैं जो आपकी मौत होने पर, नॉमिनी के नाबालिग रहते, उसकी ओर से पैसा ले। टेबल में: नॉमिनी का नाम, अभिभावक का नाम, नॉमिनी से रिश्ता, पता, और अभिभावक का ईमेल/मोबाइल (अगर हो)।"
      },
      write: {
        en: "Fill one row for each minor nominee. The Rules say the person you appoint must not be a minor. Leave this section blank if all nominees are adults.",
        hi: "हर नाबालिग नॉमिनी के लिए एक लाइन भरें। नियमों के अनुसार जिसे आप नियुक्त करें वह नाबालिग नहीं होना चाहिए। अगर सभी नॉमिनी बालिग हैं, तो यह भाग खाली छोड़ दें।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Appointing another minor as guardian", "Writing the nominee's name here differently from section 2"],
        hi: ["किसी दूसरे नाबालिग को अभिभावक बना देना", "यहाँ नॉमिनी का नाम भाग 2 से अलग लिखना"]
      }
    },
    {
      label: { en: "5. Declaration & Signature (Name of Depositor(s), Signature, Date)", hi: "5. घोषणा और हस्ताक्षर (जमाकर्ता का नाम, हस्ताक्षर, तारीख़)" },
      quick: { en: "All account holders write names, sign and date", hi: "सभी खाताधारक नाम लिखें, साइन करें, तारीख़ डालें" },
      meaning: {
        en: "You declare that the information is true and that this nomination replaces any earlier nominations for the accounts above.",
        hi: "आप घोषणा करते हैं कि जानकारी सही है और यह नॉमिनेशन ऊपर के खातों के सभी पुराने नॉमिनेशन की जगह लेता है।"
      },
      write: {
        en: "Write the name of each depositor, sign, and write the date. The form says that for a person who cannot read or write, the signature means a thumb impression, which must be attested by two witnesses. If the account is in a minor's name, the person lawfully entitled to act for the minor signs.",
        hi: "हर जमाकर्ता का नाम लिखें, साइन करें और तारीख़ डालें। फॉर्म के अनुसार जो व्यक्ति पढ़-लिख नहीं सकता, उसके लिए हस्ताक्षर का मतलब अँगूठे का निशान है, जिसे दो गवाहों से प्रमाणित करवाना होता है। अगर खाता नाबालिग के नाम है, तो नाबालिग की ओर से काम करने का क़ानूनी हक़ रखने वाला व्यक्ति साइन करता है।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Signature different from the one in the bank's records", "Thumb impression without two witnesses", "Missing date"],
        hi: ["बैंक के रिकॉर्ड से अलग हस्ताक्षर", "दो गवाहों के बिना अँगूठे का निशान", "तारीख़ न डालना"]
      }
    },
    {
      label: { en: "6. Acknowledgement (For Bank Use Only)", hi: "6. पावती (सिर्फ़ बैंक के लिए)" },
      quick: { en: "Leave blank; bank fills it and gives you acknowledgement", hi: "खाली छोड़ें; बैंक भरकर आपको पावती देगा" },
      meaning: {
        en: "The bank's record that it received your form: received from, customer ID/account number, date of receipt, whether recorded in the Core Banking System, reference number, and the official's signature, name, designation, seal and date.",
        hi: "बैंक का रिकॉर्ड कि उसे आपका फॉर्म मिला: किससे मिला, कस्टमर आईडी/खाता संख्या, मिलने की तारीख़, कोर बैंकिंग सिस्टम में दर्ज हुआ या नहीं, रेफ़रेंस नंबर, और अधिकारी के हस्ताक्षर, नाम, पद, मुहर और तारीख़।"
      },
      write: {
        en: "Do not write here. RBI's Directions say the bank must acknowledge your form within three working days, even if you do not ask, and if it rejects the nomination it must tell you the reasons in writing within three working days. After registration, the passbook / statement and fixed deposit receipt should show \"Nomination Registered\" with the nominee's name.",
        hi: "यहाँ कुछ न लिखें। RBI के निर्देशों के अनुसार बैंक को तीन कार्यदिवस के अंदर फॉर्म की पावती देनी होती है, चाहे आप माँगें या नहीं, और अगर नॉमिनेशन नामंज़ूर हो तो तीन कार्यदिवस के अंदर लिखकर कारण बताना होता है। दर्ज होने के बाद पासबुक / स्टेटमेंट और एफ़डी रसीद पर \"Nomination Registered\" और नॉमिनी का नाम दिखना चाहिए।"
      },
      documents: { en: [], hi: [] },
      mistakes: {
        en: ["Not collecting or keeping the acknowledgement", "Not checking the passbook for \"Nomination Registered\""],
        hi: ["पावती न लेना या संभालकर न रखना", "पासबुक में \"Nomination Registered\" दर्ज है या नहीं, यह न देखना"]
      }
    }
  ]
});
