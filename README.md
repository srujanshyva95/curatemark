# CURATEMARK™ — LUXURY ESSENTIALS AT DIRECT FACTORY PRICING
### Zero-Inventory Virtual D2C Merchant Architecture & Digital Storefront
**Official Domain:** `curatemark.in` | **Defensive Mirror:** `curatemark.com`  
**Business Model:** Direct OEM Private Label ("The Quince of India")  
**Target Market:** Urban Indian Gen Z & Millennials (Tier 1 & Tier 2 Metros)  
**Year 1 Base Case:** ₹1.12 Crore GMV | ₹25.1 Lakhs EBITDA Net Profit (22.3% Net Operating Margin)

---

## 💎 About CurateMark

CurateMark bridges the gap between hyper-inflated luxury fashion houses and questionable counterfeit replicas. 

Traditional fashion brands price their items at **8x to 12x production costs** to cover brick-and-mortar mall leases, distributor margins, and celebrity endorsement fees. CurateMark establishes direct contracts with certified OEM (Original Equipment Manufacturer) export facilities across India:

* **Tirupur & Chennai (Tamil Nadu):** 300 GSM French Terry and 450 GSM brushed fleece streetwear blanks.
* **Kannauj & Mumbai (Uttar Pradesh & Maharashtra):** 30%–32% pure oil concentration *Extrait de Parfum* formulations.
* **Rajkot (Gujarat):** Surgical-grade 316L stainless steel & titanium jewelry with 18K Real Gold Physical Vapor Deposition (PVD) vacuum coating (100% waterproof & sweatproof).
* **Agra & Kanpur (Uttar Pradesh):** Handcrafted minimalist court sneakers and boots in full-grain cowhide nappa leather with stitched Margom rubber cup soles.

Every parcel is **blind-dropshipped** directly from the manufacturing cluster to the customer's doorstep with zero inventory holding costs.

---

## 🚀 Quick Start (Local Prototype Preview)

To run and test the digital storefront immediately:

1. Double-click or open `index.html` in any web browser (Chrome, Edge, Safari, Firefox).
2. Or spin up a lightweight local server:
   ```bash
   # Using Python
   python -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```

### ⚡ Key Interactive Features in the Prototype:
* **Multi-Category Filtered Catalog:** Instant switching between Heavyweight Streetwear, Extrait de Parfum (30%), Waterproof 316L Jewelry, and Handcrafted Leather Footwear.
* **Category-Aware Variant Selectors:**
  * Streetwear: Apparel sizes (S, M, L, XL, XXL)
  * Fragrance: Volume options (50ml Extrait, 100ml Extrait)
  * Jewelry: Luxury finishes (18K Gold PVD, Brushed Silver, Obsidian Black)
  * Footwear: Standard Indian sizing (UK 7, UK 8, UK 9, UK 10, UK 11)
* **Mandatory Anti-RTO Verification Gate:** Simulated 4-digit SMS/WhatsApp OTP verification required before order placement. Includes a 1-click **Auto-Fill** testing helper.
* **Dual Payment System with Real Economic Incentives:**
  * **Prepaid UPI / QR:** Auto-applies an instant **₹150 discount** to drive 60%+ prepaid conversion and eliminate RTO risk.
  * **Cash on Delivery (COD):** Enforces a **₹200 advance commitment token** deposit via UPI to eliminate package rejection at doorstep.
* **Automated Multi-Hub Split-Dispatch Routing Engine:** When a cart contains items from multiple manufacturing clusters (e.g. Tirupur streetwear + Kannauj fragrance), the engine automatically splits the order into dedicated hub packages, assigning specialized couriers (e.g. hazmat surface for fragrances, air express for apparel) and distinct regional AWBs.
* **Founder Operations & Profit Cockpit:** Click **"Founder Hub & Profit"** in the top navigation bar to view real-time Gross Merchandise Value (GMV), total orders, verified member CRM, multi-hub routing status, and **live founder net profit** (calculated from actual landed OEM margins).
* **Customer Profile & Courier Tracking Drawer:** Slide-out drawer displaying verified member status and real-time courier AWB tracking across all dispatched hub packages.
* **Multi-Category Specifications & Size Guide:** Modal detailing shoe size conversions (UK vs US vs EU vs CM), apparel boxy dimensions (chest, length, shoulder drop in inches), fragrance oil concentrations, and jewelry metallurgical specs.

---

## 📂 Master Strategic Documentation Suite

Complete institutional-grade blueprints are located in the `docs/` directory:

| Document | Key Highlights & Purpose |
| :--- | :--- |
| ⚡ **[Lean Bootstrap Launch Playbook](docs/LEAN_BOOTSTRAP_LAUNCH.md)** | **Start Today with Zero Government Docs**: How to collect money into your personal bank account via personal UPI, onboard Printrove/Qikink on individual PAN/Aadhaar, use Shiprocket non-GST KYC, report zero-tax ITR under Section 44AD, and the exact revenue triggers for formal registration. |
| 📦 **[Daily Order Fulfillment Playbook](docs/DAILY_ORDER_FULFILLMENT_PLAYBOOK.md)** | **Step-by-Step Daily Fulfillment SOP**: How to fulfill incoming customer orders in 3 minutes via your Printrove, Qikink, Kannauj Fragrance Labs, and Shiprocket accounts with copy-paste WhatsApp templates and zero supplier markup leakage. |
| 📄 **[Master Strategic Report](docs/MASTER_STRATEGIC_REPORT.md)** | Full executive blueprint: brand clearance, direct OEM supply chain, category expansion, virtual D2C merchant tax model, 5-layer anti-RTO defense, and 3-year financial roadmap. |
| 🏭 **[Supplier Vetting Directory](docs/SUPPLIER_VETTING_DIRECTORY.md)** | Vetted partner profiles, direct factory contacts, MOQs, dispatch SLAs, laboratory QC testing SOPs, and blind-dropship packaging procedures for Printrove, Qikink, Kannauj distillers, Rajkot PVD labs, and Agra leathercrafters. |
| ⚖️ **[Brand Legal Clearance](docs/BRAND_LEGAL_CLEARANCE.md)** | Domain portfolio audit (`curatemark.in` & `curatemark.com`), IP India Trademark Classes 25 & 35 search results and filing instructions, MCA company incorporation roadmap, Consumer Protection E-Commerce Rules 2020 compliance, and Legal Metrology rules. |
| 💰 **[Unit Economics & Financials](docs/UNIT_ECONOMICS_AND_FINANCIALS.md)** | Granular per-unit cost breakdowns across all 4 verticals, cross-sell basket bundle modeling, Year 1 month-by-month revenue ramp (M1 to M12), and 3-year P&L forecasts. |
| 🛡️ **[Anti-RTO & Dispatch Pipeline](docs/ANTI_RTO_AND_DISPATCH_PIPELINE.md)** | 5-layer anti-RTO defense architecture, automated multi-hub routing engine schema (Shiprocket/Delhivery API), and WhatsApp Cloud API notification templates. |

---

## 🧪 Automated & Manual Testing Suite

### Run Automated 10-Phase Regression Suite:
```bash
node test_curatemark.js
```
Validates catalog BOM integrity, category filters, variant mechanics, anti-RTO math, order creation, full decoupling audit, 100% DOM element ID & handler consistency, multi-hub split dispatch routing, customer privacy isolation, and live founder credentials/zero-gateway payout configuration.

### Manual End-to-End Storefront Workflow:
1. **Browse & Select Variants:** Filter by category (e.g. "Extrait de Parfum"), click a product card, and choose a variant (e.g. "50ml Extrait").
2. **Add to Bag:** Observe the bag count increment and slide out the cart drawer.
3. **Apply Voucher:** Enter promo code `FIRSTDROP` or `VIP200` to apply an instant ₹200 factory credit.
4. **Trigger Checkout:** If unauthenticated, the **Anti-RTO Buyer Verification Gate** opens. Enter your name, mobile number, and email.
5. **Verify OTP:** Click **"Auto-Fill"** on the simulated OTP banner and submit. Your verified member profile is saved in browser storage.
6. **Complete Checkout:** Select **Prepaid UPI** (to see the instant -₹150 discount) or **COD** (with ₹200 advance deposit). Click confirm to generate your unique `CM-XXXXX` order ID.
7. **View Multi-Hub Packages & Receipt:** Observe the receipt displaying individual factory dispatch packages and click WhatsApp confirmation (notice zero backend margin leaks).
8. **View Founder Cockpit:** Open the **"Founder Hub & Profit"** panel in the header to see your order recorded in the live ledger with multi-hub badges and calculated net founder profit!

---

## 🌐 Production Deployment Guide (Free & Instant)

You can host CurateMark live online in under 60 seconds:

1. **Vercel / Netlify:**
   * Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub to [Vercel](https://vercel.com).
   * It deploys instantly as a fast, globally-distributed static web app.
2. **Connect Custom Domain:**
   * Register `curatemark.in` on Dynadot / INRegistry for ₹399–₹499/year.
   * Add a CNAME record in your registrar DNS pointing `@` and `www` to your Vercel or Netlify deployment URL.
   * Free SSL certificate auto-provisions within 5 minutes.
