# Manideep & Kusumakumari — GitHub Pages Wedding Invitation

This package is prepared for GitHub Pages and automatically generates a **new QR code that points to the exact final GitHub Pages URL** during deployment.

## What is included
- `index.html` — mobile-first invitation page
- `styles.css` — maroon / gold wedding theme
- `script.js` — live wedding countdown + Share button
- `assets/Veldandi-Wedding-Invitation.pdf` — original printed invitation
- Wedding and reception `.ics` calendar files
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
- `.github/scripts/generate_qr.py` — generates the final QR automatically

## Publish on GitHub
1. Create a new **public GitHub repository**, for example `manideep-wedding`.
2. Upload the **contents of this folder** to the repository root and commit to `main`.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Open the **Actions** tab and allow the `Deploy Manideep Wedding Invitation` workflow to complete.
6. GitHub Pages will show the final public URL.

During the deployment, GitHub's own Pages configuration provides the exact base URL. The workflow then creates:
- `assets/wedding-qr.png` — QR pointing to that exact Pages URL
- `assets/invitation-url.txt` — the exact URL encoded in the QR

The live invitation displays the newly generated QR and includes a **Download QR** link.

## Important
Do not reuse the old supplied QR for the final invitation, because it may point to a different website. The deployment workflow replaces it with the correct GitHub Pages QR.

## Wedding countdown
The countdown is set to **27 August 2026, 11:05 AM IST**.
