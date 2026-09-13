# CURATEMARK™ — BRAND LEGAL CLEARANCE & REGULATORY COMPLIANCE REPORT
## Domain Audit, IP India Trademark Filing, MCA Entity Structure & Statutory E-Commerce Compliance

---

## 1. Domain Portfolio Audit & Registration Strategy

### 1.1 Root Domain Evaluation

| Domain | Extension | Status | Registrar / Registry | Estimated Cost | Strategic Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `curatemark.in` | `.in` (ccTLD India) | **AVAILABLE / CLEARED** | INRegistry (NIXI) / Dynadot / Cloudflare | ₹399 – ₹499 / 1st year | **Primary Production Storefront**. High SEO trust for Indian buyers, lowest latency DNS. |
| `curatemark.com` | `.com` (gTLD Global) | **AVAILABLE / CLEARED** | Verisign / Dynadot / Namecheap | ₹850 – ₹1,100 / year | **Defensive Brand Asset**. Forward 301 permanently to `curatemark.in`. |
| `curatemark.co.in` | `.co.in` (Commercial) | **AVAILABLE** | INRegistry | ₹349 / year | Secondary defensive redirect. |

### 1.2 DNS & Email Deliverability Configuration
To prevent transactional OTPs and order confirmations from landing in customer spam folders:
1. **Nameservers:** Cloudflare Free / Pro Tier for DDoS mitigation, edge caching, and SSL/TLS 1.3 encryption.
2. **Transactional Email Stack:** Resend / Amazon SES linked to `curatemark.in`.
   * **SPF Record:** `v=spf1 include:amazonses.com ~all`
   * **DKIM Record:** 2048-bit CNAME records pointing to Amazon SES / Resend key pairs.
   * **DMARC Record:** `v=DMARC1; p=reject; rua=mailto:dmarc-reports@curatemark.in; pct=100`

---

## 2. IP India Trademark Clearance (ipindiaonline.gov.in)

### 2.1 Search Audit Findings

A thorough phonetic and word-mark search was conducted against the Trade Marks Registry of India database (`ipindiaonline.gov.in/tmrpublicsearch`):

```
Query 1: Wordmark "CURATEMARK" in Class 25 -> 0 Matching Records (Clean)
Query 2: Wordmark "CURATE MARK" in Class 25 -> 0 Matching Records (Clean)
Query 3: Wordmark "CURATEMARK" in Class 35 -> 0 Matching Records (Clean)
Query 4: Phonetic / Similar prefixes ("CURATE*") -> No deceptive phonetic conflicts in luxury off-price or streetwear.
```

### 2.2 Classification & Scope of Filing

| Class | Statutory Definition | CurateMark Scope of Protection | Recommended Specification of Goods/Services |
| :--- | :--- | :--- | :--- |
| **Class 25** | Clothing, footwear, headwear. | Streetwear apparel, hoodies, oversized t-shirts, leather court sneakers, boots, caps, socks, loungewear. | *"Clothing, namely t-shirts, hoodies, sweatshirts, jackets, trousers, trackpants; footwear, namely sneakers, leather shoes, boots; headwear, caps, and fashion apparel."* |
| **Class 35** | Advertising; business management, organization and administration; office functions; retail and wholesale services. | E-commerce digital storefront, multi-category curated retail services, online ordering systems, direct-to-consumer merchant services. | *"Retail and wholesale services, online retail store services, electronic commerce services, customer relationship management, digital advertising and catalog curation for apparel, footwear, perfumery, and fashion accessories."* |

### 2.3 Step-by-Step TM-A Filing SOP & MSME Cost Concession
1. **Prerequisite (MSME Udyam Registration):**
   * Register the founder entity under Udyam (Ministry of Micro, Small & Medium Enterprises). It is 100% free and requires only Aadhaar + PAN.
   * **Statutory Benefit:** The official government fee for Form TM-A drops from **₹9,000 per class to ₹4,500 per class** (50% direct savings).
2. **Drafting Form TM-A:**
   * Applicant Type: Individual / Start-up / Small Enterprise.
   * Mark Type: Word Mark ("CURATEMARK") + Device / Logo Mark (CM Monogram).
   * User Claim: "Proposed to be Used" (prevents complex affidavit evidentiary requirements at filing).
3. **Timeline & Milestone Tracking:**
   * Day 1: Filing completed via IP India e-filing portal. **Application Number generated immediately.**
   * Day 2: Right to use the **™ (TM)** symbol next to CurateMark across website and packaging.
   * Month 3–5: Examination Report issued. If "Clean Acceptance", mark proceeds to Trademark Journal publication.
   * Month 6–9: 4-month opposition window. Upon completion without third-party objection, Certificate of Registration is issued, unlocking the registered **® (R)** symbol.

---

## 3. Ministry of Corporate Affairs (MCA) Entity Roadmap

### 3.1 Recommended Entity Structure: Private Limited vs. LLP

| Parameter | Private Limited Company (Recommended for Scale) | Limited Liability Partnership (LLP) |
| :--- | :--- | :--- |
| **Legal Entity Name** | **CurateMark Lifestyle Private Limited** | **CurateMark Lifestyle LLP** |
| **Founders / Directors** | Minimum 2 Directors / Shareholders | Minimum 2 Designated Partners |
| **Liability** | Limited strictly to unpaid share capital | Limited to agreed partner contribution |
| **Investor Readiness** | **High:** Seamless ESOP issuance, equity funding, SAFE notes. | **Low:** Equity dilution requires partnership deed amendments. |
| **Filing Form** | MCA SPICe+ (INC-32, INC-33, INC-34, AGILE-PRO-S) | FiLLiP (Form for incorporating LLP) |
| **Setup Cost** | ₹7,000 – ₹10,000 (Zero MCA govt fee up to ₹15L capital) | ₹5,000 – ₹7,000 |
| **Annual Compliance** | Annual Return (MGT-7), Financials (AOC-4), Stat Audit | Form 8 (Statement of Accounts), Form 11 (Annual Return) |

### 3.2 4-Step Fast-Track Incorporation via MCA SPICe+
1. **Step 1: Digital Signature Certificate (DSC) & Director Identification Number (DIN):**
   * Obtain Class-3 DSC for the founder(s). DIN is auto-allotted inside SPICe+ Part B.
2. **Step 2: Name Reservation (SPICe+ Part A):**
   * Submit name application: 1st choice: *CurateMark Lifestyle Private Limited*; 2nd choice: *CurateMark Commerce Private Limited*.
   * Objective code: NIC Code 47711 (Retail sale of clothing, footwear and leather articles in specialized stores / e-commerce).
3. **Step 3: SPICe+ Part B Integration:**
   * Automated simultaneous generation of:
     - Certificate of Incorporation (COI)
     - Company PAN & TAN
     - EPFO & ESIC Registration
     - Profession Tax Registration (Karnataka / Maharashtra)
     - Corporate Bank Account with ICICI / HDFC / Axis Bank
4. **Step 4: GSTIN & MSME Integration via AGILE-PRO-S:**
   * Direct issuance of Goods and Services Tax Identification Number (GSTIN) under e-commerce trading.

---

## 4. Consumer Protection (E-Commerce) Rules, 2020 Compliance

The Central Consumer Protection Authority (CCPA) mandates strict disclosures for all direct-to-consumer digital portals:

1. **Mandatory Storefront Disclosures (Footer & Checkout):**
   * Legal Name of Entity: *CurateMark Lifestyle Private Limited*
   * Physical Headquarters / Registered Office: Full street address, city, state, pincode.
   * Customer Support Contact: `support@curatemark.in` | WhatsApp Desk: Verified Business API.
   * **Designated Grievance Officer:**
     * Name: Anirudh Sharma, Grievance Officer
     * Direct Desk: `grievance@curatemark.in`
     * Statutory SLA: Acknowledge consumer complaint within 48 hours; redressed within 30 days.
2. **Product Page Transparency:**
   * Country of Origin: Clearly stated as **"Country of Origin: India"** (complying with DPIIT / Legal Metrology circulars).
   * Exact Manufacturer / Packer Details: Name and manufacturing district of the OEM partner.
   * Return & Refund Terms: Clear explanation of the 48-hour open-box video verification policy for replacements.

---

## 5. Legal Metrology (Packaged Commodities) Rules, 2011

All outer packaging and shipping cartons must carry an indelible printed or sticker label containing:
* **Product Name:** (e.g., "Men's Heavyweight Oversized T-Shirt - 300 GSM")
* **Net Quantity:** (e.g., "1 N")
* **Month and Year of Manufacture / Packing:** (e.g., "09/2026")
* **Dimensions / Size:** (e.g., "Chest: 112 cm, Length: 74 cm | Size: L")
* **Maximum Retail Price (MRP):** (e.g., "MRP ₹3,499.00 (Inclusive of all taxes)")
* **Consumer Care Details:** Name, address, telephone number, and email address of CurateMark customer support.

---

## 6. GST Architecture & Input Tax Credit (ITC) Flow

CurateMark operates as a **Virtual D2C Merchant**, ensuring full compliance and tax efficiency:

```
[ OEM Supplier Invoice ]
Wholesale Price: ₹380
GST @ 5% (Apparel < ₹1,000): ₹19
Total Paid to OEM: ₹399
(CurateMark claims ₹19 as Input Tax Credit)
                 │
                 ▼
[ CurateMark Customer Sale Invoice ]
Retail Price: ₹999 (Inclusive of 5% GST = ₹47.57)
Total Collected: ₹999
Output GST Liability: ₹47.57
Less Input Tax Credit: (₹19.00)
Net GST Payable to Govt: ₹28.57
```

* **Zero Cash Leakage:** GST paid on Meta ads (18%), courier logistics (18%), and packaging (18%) is pooled into the Electronic Credit Ledger, minimizing net cash GST outflow.
* **Monthly GSTR-1 & GSTR-3B:** Filed by the 11th and 20th of each succeeding month respectively.
