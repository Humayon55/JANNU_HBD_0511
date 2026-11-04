# 💗 A Birthday Surprise for Jannu

A romantic, interactive birthday website: a 14-step love story in baby pink and white. She blows out a heart-powered candle, opens three gifts (a love letter, a bouquet and a diary), unlocks three promises with a secret code, picks your birthday date, takes a silly love quiz, gets a flower "with its gardener", shares her mood, listens to your song, chooses when to meet, and reaches the final forever question (where the NO button runs away 😂).

Built with **HTML5, CSS3 and vanilla JavaScript**. No frameworks and no build step. Fonts come from Google Fonts (Playfair Display, Poppins, Great Vibes, Dancing Script). Sounds and the soft background melody are generated in the browser, so there are no audio files to download.

## Project structure

```text
/                      ← the "birthday-surprise" folder (this repo's root)
├── index.html         Page 1 – Birthday welcome + candle cake
├── style.css          Every style (design tokens → shared → page sections)
├── script.js          Configuration + all interactions
├── netlify.toml       Tells Netlify to serve this folder as-is
├── pages/
│   ├── accept.html    Page 2 – "Will you accept your gift?"
│   ├── gifts.html     Page 3 – Three gifts
│   ├── letter.html    Gift 1 – Love letter
│   ├── flower.html    Gift 2 – Bouquet
│   ├── diary.html     Gift 3 – Romantic diary
│   ├── promises.html  Three promises + secret code
│   ├── date.html      Restaurant / date selection (+ email)
│   ├── quiz.html      Funny love quiz
│   ├── my-flower.html One last flower (glitch reveal)
│   ├── mood.html      Mood picker
│   ├── song.html      "Alfaaz" music player
│   ├── meet.html      Meeting time + clock
│   └── forever.html   The forever question 💍
└── assets/
    ├── her-photo.jpg     ← add yours
    ├── my-photo.jpg      ← add yours
    ├── couple-photo.jpg  ← add yours
    ├── funny-cat.gif     ← optional (a cute cat picture, funny-cat.jpg, is included)
    ├── flower.jpg        (included, replace if you like)
    ├── album-art.jpg     (included, replace if you like)
    ├── welcome-background.svg  (illustrated first-page background)
    └── stickers/
```

I added one extra page, `pages/accept.html`, so the "Accept your gift?" step from your brief gets its own screen.

Use the sun/moon button in the top bar on any page to switch between day and night themes. Your choice is saved and follows you throughout the birthday journey.

## Run it locally

Pick one of these:

1. **Double-click `index.html`** to open it in your browser. Everything works this way, except that some browsers block email sending from local files.
2. **Use a tiny local server** (recommended):
   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```
   Then open the address it prints, e.g. http://localhost:8080.

## Replace the photos

Put your photos in `assets/` with **exactly** these names:

| File | Where it appears |
| --- | --- |
| `assets/her-photo.jpg` | Welcome heart frame, love letter, diary |
| `assets/my-photo.jpg` | Inside the red rose ("the flower comes with its gardener") |
| `assets/couple-photo.jpg` | Final forever page |
| `assets/funny-cat.gif` | The "accept your gift" cat. If it's missing, the included `funny-cat.jpg` is shown |
| `assets/flower.jpg` | Bouquet page |
| `assets/album-art.jpg` | Song player artwork |
| `assets/Alfaaz.mp3` | Song player and background music |
| `assets/welcome-background.svg` | Illustrated background on the welcome page |
| `assets/assets/assets/restaurant-1.jpg` … `restaurant-4.jpg` | Restaurant photos (an emoji tile shows if a file is missing) |

Until a photo exists, a cute pink placeholder shows the file name to add. Square or portrait photos look best in the heart frames. To use different file names, change the paths in `birthdayConfig` at the top of `script.js`.

## Personalize the words

Open `script.js`. Everything at the top is the **central configuration**:

- `herName`, `nickname`, `secretCode` (case-insensitive, default `jannu`)
- photo paths
- `restaurants` (names) and `restaurantDetails` (emoji, photo, description)
- `song` (title, artists, YouTube link, and audio file at `assets/Alfaaz.mp3`)
- `text`: the welcome lines, gift messages, the full love letter, diary text, promises, quiz options and replies, moods and replies, meeting options, and the final page's messages

`{herName}` and `{nickname}` inside any text are filled in automatically, including in the headings of the HTML pages.

The song-page play button and the music button in the top bar use `assets/Alfaaz.mp3`. When music is playing, it resumes from its saved position as you move between pages. Browsers may block automatic playback after a page loads; if that happens, tap the music button in the top bar to resume.

## Email notifications (EmailJS)

When she picks a restaurant or writes a custom destination on the date page, the site can email you her choice.

1. Create a free account at <https://www.emailjs.com>.
2. **Email Services** → *Add New Service* (e.g. Gmail) → copy the **Service ID**.
3. **Email Templates** → *Create New Template*:
   - **To Email:** `{{to_email}}` (or just type your address)
   - **Subject:** `Birthday Date Selection 💗`
   - **Content:**
     ```
     Birthday Date Selection 💗

     She would like to go to: {{restaurant}}

     Date: {{date}}

     Time: {{time}}

     Message: She has chosen her birthday date!
     ```
     (`{{message}}` holds this whole text too, and `{{her_name}}` her name.)
   - Save and copy the **Template ID**.
4. **Account** → copy your **Public Key**.
5. In `script.js`, fill in the four constants at the very top:
   ```js
   const EMAILJS_SERVICE_ID = "service_xxx";
   const EMAILJS_TEMPLATE_ID = "template_xxx";
   const EMAILJS_PUBLIC_KEY = "your_public_key";
   const MY_EMAIL_ADDRESS = "you@example.com";
   ```
   If `MY_EMAIL_ADDRESS` is left as its placeholder, the site uses the address in `birthdayConfig.email`.

How it behaves:
- **Not configured:** her choice is saved on her device and she sees a friendly "saved here" message. No fake "email sent".
- **Configured:** it shows "Email sent" only after EmailJS confirms delivery.
- **Sending fails:** she sees a gentle note, the choice stays saved, and she can tap the restaurant again to retry.

The EmailJS public key is meant to be public. You can restrict it to your website's domain in the EmailJS dashboard.

## Sound & music

- 🔊 (top right) turns the small click, chime and celebration sounds on or off.
- 🎵 (top right) plays or pauses `assets/Alfaaz.mp3` as background music.
- **Song page:** the play button controls the same "Alfaaz" audio as the top-bar button. The song resumes from its saved position as you move between pages, subject to browser autoplay settings. No lyrics are reproduced.

## Good to know

- Her choices (date, mood, meeting time, gifts opened) are kept in the browser's local storage and summarized on the final page. "Restart the Birthday Journey" clears them.
- There's a back button on every page, a progress bar, and smooth fades between pages.
- Works on phones, tablets and desktops, and respects "reduce motion" settings.
- **Deploying:** this folder is ready for Netlify as-is (`netlify.toml` publishes the root). On Netlify, photos are automatically resized through the Netlify Image CDN so they load fast on her phone.