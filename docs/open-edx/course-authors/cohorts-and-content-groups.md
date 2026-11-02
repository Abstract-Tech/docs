---
title: How to Create and Manage Cohorts and Content Groups in Open edX
sidebar_position: 5
---
Open edX allows you to divide your student body into different groups (cohorts) and deliver tailored course materials to specific groups using content groups. Follow this guide to set up and manage cohorts and content groups in your course.

## Part 1: Enabling Cohorts in Your Course

Before creating groups, you must enable the cohort feature in your course settings.

1. **Open Your Course in Studio:**
   Log in to Open edX Studio and navigate to your course.

2. **Access Advanced Settings:**
   Click on the **"Settings"** dropdown menu in the top navigation bar and select **"Advanced Settings"**.

3. **Enable Cohorts:**
   Scroll down to find the field **Enable Cohorts**. Change its value from `false` to `true`.

4. **Save Changes:**
   Click the **"Save Changes"** button at the bottom of the page.

## Part 2: Creating and Managing Cohorts

Cohorts allow you to group learners (for example, by region, organization, or learning track) and optionally assign them to different discussion forums or content schedules.

1. **Access Group Configurations:**
   In Studio, click on the **"Settings"** dropdown menu and select **"Group Configurations"**.

2. **Add a Cohort Group Configuration:**
   Click on **"Add Cohort Group Configuration"** (or create a new group set). Give your configuration a descriptive name (e.g., *Regional Chapters*).

3. **Define Cohorts:**
   Add individual cohorts within the configuration (e.g., *Madrid Group*, *Berlin Group*, *Remote Learners*).

4. **Assign Learners:**

   * You can manually assign learners to cohorts via the **Instructor Dashboard** in the live LMS under **Student Management > Cohorts**.

   * Alternatively, you can configure automated enrollment rules so learners are automatically assigned to specific cohorts based on their registration track or sign-up code.

## Part 3: Creating and Managing Content Groups

Content groups allow you to deliver different versions of specific course components (such as a targeted assignment or region-specific reading) to different groups of learners.

1. **Access Group Configurations:**
   Go to **Settings > Group Configurations** in Studio.

2. **Add a Content Group:**
   Click **"Add Content Group"**. Enter a name for the group (e.g., *Advanced Track* or *Enterprise Clients*) and save.

3. **Apply Content Groups to Courseware:**

   * Open your **Course Outline** in Studio and navigate to the unit where you want to restrict or customize content.

   * Click the **Configure (gear)** icon on a specific component or subsection.

   * Select the **VISIBILITY** tab.

   * Under **Accessability / Hide/Show to specific groups**, select the content group that should have access to this component.

   * Save and publish your changes. Learners outside the assigned content group will not see this specific component.

*Need help? If you experience any issues during registration or login, please reach out to support@abstract-technology.de.*

