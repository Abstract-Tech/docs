---
title: How to Create and Configure Course Certificates in Open edX Studio
sidebar_position: 6
---
Follow this step-by-step guide to set up, configure, and issue digital completion certificates for your course in Open edX Studio and the Django administration panel.

## Part 1: Accessing Certificate Settings in Studio

1. **Open Your Course:**  
   Log in to Open edX Studio and navigate to the course where you want to add a certificate.
2. **Access Settings:**  
   Click on the **"Settings"** dropdown menu in the top navigation bar.
3. **Check for the Certificates Option:**  
   * If **"Certificates"** is visible in the dropdown, click it and proceed directly to **Part 4**.
   * If **"Certificates"** is **not** visible, proceed to **Part 2** to enable the required advanced setting.

---

## Part 2: Enabling Deprecated Certificate Settings

1. **Navigate to Advanced Settings:**  
   From the **"Settings"** dropdown menu, select **"Advanced Settings"**.
2. **Show Deprecated Settings:**  
   Scroll down or click the **"Show deprecated settings"** button in the top-right corner of the panel.
3. **Enable HTML/Web View:**  
   Locate the setting for **Certificate Web/HTML View Enabled** and change its value from `false` to `true`.
4. **Save Changes:**  
   Click the **"Save Changes"** button at the bottom of the page. The **"Certificates"** option will now appear under your course's **Settings** menu.

---

## Part 3: Creating a Course Mode (Django Admin, if required)

*Note: If you receive a notice stating that the course does not use a mode offering certificates, you must configure a course mode via the Django Administration backend.*

1. **Open Django Admin:**  
   In a new browser tab, go to your platform's admin URL (e.g., `https://yourdomain.com/admin/`) and log in with your administrator credentials.
2. **Navigate to Course Modes:**  
   Scroll down to the **COURSE MODES** section and click on **"Course modes"**.
3. **Add a New Course Mode:**  
   Click the **"Add a Course mode +"** button in the top-right corner.
4. **Configure Course Mode Details:**  
   * **Course:** Select your specific course from the dropdown list.
   * **Mode:** Choose the certificate type (e.g., `audit`, `verified`, `no-id-professional`, `credit`, `professional`, or `honor`).
   * **Price & Currency:** Set the price and currency if applicable (leave default or zero for free courses).
5. **Save:**  
   Click **"Save"** at the bottom right. Once saved, return to Studio > Settings > Certificates.

---

## Part 4: Setting Up Your Certificate

1. **Initialize Certificate Setup:**  
   In Studio, go to **Settings > Certificates** and click the green **"+ Set up your certificate"** button.
2. **Configure Certificate Details:**  
   * **Course Title:** Enter a custom title if your official course title is too long to fit well on the certificate layout.
3. **Add Signatories:**  
   * Enter the **Name**, **Title** (e.g., *Teacher* or *Instructor*), and **Organization** (e.g., *Abstract-Technology*) for up to four signatories.
4. **Upload Signature Images:**  
   * Click **"Upload Signature Image"**, browse for your signature file (must be in **PNG format**), and click **Upload**.
5. **Create and Preview:**  
   * Click **"Create"** at the bottom left to save the certificate configuration.
   * Click **"Preview"** at the top right to review how the final PDF certificate will look.

---

## Part 5: Enabling Auto-Generation for Learners

To allow learners to automatically generate and download their certificates once they pass the course:

1. **Via the Instructor Dashboard:**  
   Go to your live course LMS, open the **Instructor** tab, navigate to **Certificates**, and activate the automated generation settings.
2. **Via Django Admin (Alternative):**  
   Log into `/admin`, locate **Certificates > Certificate generation course settings**, add your course entry, and check the box to enable self-generation.

*Need help? If you experience any issues during registration or login, please reach out to support@abstract-technology.de.*

