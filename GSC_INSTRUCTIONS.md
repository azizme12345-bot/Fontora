# Google Search Console (GSC) Verification & URL Guide for Vercel

اس گائیڈ میں آپ کو بالکل واضح طور پر سمجھایا گیا ہے کہ آپ اپنی ویب سائٹ کو ورسل (Vercel) پر ڈپلائی کرنے کے بعد **URL Prefix** اور **Domain** دونوں طریقوں سے گوگل سرچ کنسول پر کیسے سو فیصد (100%) ویریفائی کر سکتے ہیں۔

---

### 1. آپ کو ورسل پر کون سے دو قسم کے URLs ملتے ہیں؟
جب آپ گिटہب سے ورسل پر پراجیکٹ ڈپلائی کرتے ہیں، تو ورسل آپ کو دو طرح کے لنکس دیتا ہے:
1. **Production Domain:** `https://all-fonts.vercel.app` (یہ آپ کا مین مستقل ڈومین ہوتا ہے)
2. **Unique Deployment URL:** `https://all-fonts-xxxxxx.vercel.app` (یہ ہر نئے گिट پش پر ایک نیا یونیک پرسنل یو آر ایل ہوتا ہے)

---

### 2. گوگل سرچ کنسول (GSC) پر ویریفیکیشن کے 2 طریقے:

#### طریقہ الف: URL Prefix Property (پرسنल یو آر ایل یا ڈومین کے لیے)
اگر آپ سرچ کنسول میں **URL prefix** میں جا کر اپنا یو آر ایل (مثلاً `https://all-fonts.vercel.app` یا اپنا یونیک ڈپلائمنٹ یو آر ایل) درج کرتے ہیں، تو گوگل آپ سے کہتا ہے کہ ان میں سے کوئی ایک کام کریں:
* **HTML Tag Verification (میٹا ٹیگ):** 
  آپ کی پراجیکٹ کی `index.html` فائل میں پہلے ہی یہ ٹیگ موجود ہے:
  ```html
  <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
  ```
  آپ کو صرف `YOUR_GOOGLE_VERIFICATION_CODE_HERE` کی جگہ گوگل کا دیا ہوا اصل کوڈ لکھنا ہے (مثلاً `content="abc123xyz..."`)، کوڈ سیو کر کے گٹہب پر پش کر دینا ہے۔ ورسل خودکار طریقے سے اسے لائیو کر دے گا اور گوگل اسے ایک سیکنڈ میں ویریفائی کر لے گا۔
* **HTML File Verification (فائل ویریفیکیشن):**
  اگر گوگل آپ کو کوئی فائل دے (مثلاً `google123455.html`)، تو اسے ڈاؤن لوڈ کر کے پراجیکٹ کے `public/` فولڈر میں رکھ دیں۔ ورسل اسے براہِ راست `https://all-fonts.vercel.app/google123455.html` پر دکھا دے گا، اور گوگل فورا ویریفائی کر لے گا۔

#### طریقہ ب: Domain Property (مین ڈومین کے لیے)
اگر آپ سرچ کنسول میں **Domain** پراپرٹی بناتے ہیں (صرف `all-fonts.vercel.app`)، تو گوگل آپ کو **DNS TXT record** دیتا ہے۔ وہ DNS ریکارڈ آپ کو ورسل ڈیش بورڈ میں جا کر **Domains -> DNS Records** میں ایڈ کرنا ہوتا ہے۔

---

### 3. سائیٹ میپ (Sitemap) اور روبوٹس (Robots)
آپ کی ویب سائٹ کے لیے سائیٹ میپ اور روبوٹس فائلیں پہلے سے موجود ہیں اور بلڈ کے وقت خود بخود `dist/` میں بن جاتی ہیں:
* سائیٹ میپ: `https://all-fonts.vercel.app/sitemap.xml`
* روبوٹس: `https://all-fonts.vercel.app/robots.txt`

جب آپ سرچ کنسول میں سائیٹ میپ سبمٹ کریں گے، تو وہ فوراً **Success** ہو جائے گا!
