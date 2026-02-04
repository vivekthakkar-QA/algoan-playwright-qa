# Algoan – Playwright QA Automation Tests 🚀

This repository contains **QA automation tests built with Playwright** for the **Algoan banking connection flow**, focusing on **Bank Selection** and **Branch Selection** user interfaces.

The goal of this project is **not** to fully automate Open Banking authentication, but to **reliably validate that critical user interfaces are available and usable** at each step of the flow.

---

## 📌 Project Context

The Algoan application allows users to:
1. Select their bank
2. Authenticate via a secure Open Banking flow
3. Select a bank branch
4. Continue with account validation

Because banking authentication relies on **external third-party systems**, these tests intentionally focus on **UI availability and flow readiness**, which is the correct scope for stable QA automation.

---

## 🧪 What Is Tested

### ✅ Bank Selection Page
- Verifies that the **bank selection page loads correctly**
- Ensures a **search component** is visible so users can find their bank
- Confirms the user can start the banking journey

### ✅ Branch Selection UI
- Verifies that **branch-related UI elements appear after bank selection**
- Ensures the flow progresses beyond the bank selection step
- Confirms the branch selection interface is available to the user

---

## ❌ What Is NOT Tested (by design)

- Real bank authentication
- Login with real credentials
- Selecting real bank accounts
- Third-party Open Banking redirects

These steps are intentionally excluded to keep tests:
- Stable
- Fast
- Environment-independent
- Free from flaky external dependencies

---

## 🛠 Tech Stack

- **Playwright**
- **Node.js**
- **JavaScript**
- **Git & GitHub**

---

## 📂 Project Structure

```text
algoan-playwright/
├── tests/
│   ├── bank-selection.spec.js
│   └── branch-selection.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore
