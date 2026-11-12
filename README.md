# V. Rajeshwari & D. Gowtham — Wedding Invitation

A responsive, single-page digital wedding invitation built with HTML, CSS and vanilla JavaScript. No build step or package installation is required.

## Preview locally

1. Unzip the project.
2. Open `index.html` in a modern browser, or run a local static server from this folder (recommended):
   - Python: `python -m http.server 8000`
   - Visit `http://localhost:8000`
3. Test on a phone by opening the deployed URL or using your local network server.

## Add the real photographs

Copy your photographs into `assets/photos/` using these exact filenames:

- `bride.jpg` — bride portrait
- `groom.jpg` — groom portrait
- `couple.jpg` — reserved couple photograph (currently a decorative placeholder)
- `family.jpg` — reserved family photograph (currently a decorative placeholder)

All four photograph areas automatically replace their placeholders when the matching files are present.

Use compressed JPEG or WebP images, ideally under 500 KB each, and crop portraits vertically.

## Add licensed background music

Place a music file you own or are licensed to use at `assets/music/instrumental.mp3`. The music button starts playback only after a visitor taps it. If no file is present, the player remains silent and the control indicates that a music file should be added.

## Update details / translations

Wedding content is in `index.html`. English/Tamil paired interface text uses `data-en` and `data-ta` attributes. The language button switches these strings and loads Noto Serif Tamil from Google Fonts (a network connection is needed for the web font; system fallback fonts remain available).

The countdown target is set in `script.js` to `2026-11-22T07:30:00+05:30` (India Standard Time).

## Publish with Vercel

### Easiest: Vercel website
1. Create or sign in to a Vercel account.
2. Create a Git repository and upload the contents of this folder, or use Vercel's dashboard to deploy the folder as a static site.
3. Select **Other** / static site if prompted; no build command is needed and the output directory is `.` (the project root).
4. Deploy. Vercel will provide the public URL after a successful deployment.

### Vercel CLI
1. Install Node.js, then run `npm i -g vercel`.
2. In this folder run `vercel` and follow the prompts.
3. For production deployment run `vercel --prod`.

No public URL is included here because deployment requires your Vercel account and has not been performed from this workspace.

## Notes

- The venue button opens a Google Maps search for the exact supplied venue name and area; it does not assert an unverified map pin.
- The WhatsApp share action uses the native share sheet when supported; browsers without Web Share fall back to a WhatsApp share link.
- `design-reference.jpg` is the supplied screenshot for visual reference only.
- Test the final live URL on Android and iPhone after adding photographs/music. The included project has not been deployed to a public host from this workspace.
