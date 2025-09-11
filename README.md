# rai-pos-backoffice
  install => open terminal type these commands:
  ```bash
  cd pos_management
  npm install
  # to run =>
  npm run dev
  ```
   
    

# POS Backoffice – Git Workflow Guide

This document explains how to work on this repository using **branches, rebase workflow, and SSH setup**.

---

## 🔑 1. Setup SSH Access

### Step 1.1 – Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
- Press `Enter` for default path  
- Optionally set a passphrase  

This creates a key in `~/.ssh/id_ed25519.pub`.

### Step 1.2 – Add SSH Key to GitHub
- Copy the key:
  ```bash
  cat ~/.ssh/id_ed25519.pub
  ```
- Go to **GitHub > Settings > SSH and GPG Keys > Add new key**  
- Paste the public key  

### Step 1.3 – Test Connection
```bash
ssh -T git@github.com
```
Expected result:
```
Hi username! You've successfully authenticated
```

---

## 🌱 2. Clone Repo with SSH
```bash
git clone git@github.com:rightappsinc/rai-pos-backoffice.git
cd pos-backoffice
```

---

## 🌳 3. Branching Workflow

1. Always sync main first:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a new branch from main:
   ```bash
   git checkout -b feature/branch-management
   ```

3. Work and commit changes:
   ```bash
   git add .
   git commit -m "feat: add branch management UI"
   ```

---

## 🔄 4. Keeping Branch Up-to-date (Rebase Workflow)

1. Fetch the latest main:
   ```bash
   git fetch origin main
   ```

2. Rebase your branch on top of main:
   ```bash
   git rebase origin/main
   ```

3. If conflicts appear:
   - Fix them in your code  
   - Run:
     ```bash
     git add <file>
     git rebase --continue
     ```

4. Once rebased, push with `--force-with-lease` (safe force push):
   ```bash
   git push origin feature/branch-management --force-with-lease
   ```

---

## 📌 5. Making a Pull Request (PR)

1. Go to GitHub → Create PR from `feature/branch-management → main`.  
2. Review, get approvals, and merge (fast-forward preferred).  

---

## ✅ Quick Cheatsheet

```bash
# Setup
ssh-keygen -t ed25519 -C "email@example.com"
ssh -T git@github.com

# Workflow
git checkout main
git pull origin main
git checkout -b feature/my-task

# Work
git add .
git commit -m "feat: my change"

# Rebase
git fetch origin main
git rebase origin/main
git push origin feature/my-task --force-with-lease
```

---

### 🚀 Rules of Thumb
- **Never commit directly to `main`**  
- Always **rebase before pushing**  
- Use `--force-with-lease` instead of `--force`  
- Write clear commit messages (`feat:`, `fix:`, `docs:`)  

  
