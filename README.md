<div align="center">

  <p><img width="200" height="200" alt="mirai" src="https://github.com/user-attachments/assets/45bf6a43-5009-4a68-8e18-afbd6131c879" />
    
  <b>The ultimate, high-performance hub for exploring the vast world of East Asian media.</b>

  <p>
    <img src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL" />
  </p>

  <p>
    <img src="https://img.shields.io/github/license/fannMotion/mirai-nime?style=flat-square&color=6366f1" alt="License" />
    <img src="https://img.shields.io/badge/Project_Status-Active-success?style=flat-square&color=10b981" alt="Status" />
    <img src="https://img.shields.io/github/stars/fannMotion/mirai-nime?style=flat-square&color=fbbf24" alt="Stars" />
  </p>

  <br />
</div>

---

### ✨ About The Project

**MiraiNime** is a high-performance, premium media explorer tailored for the modern East Asian pop culture enthusiast. Unlike traditional databases that focus solely on Japanese Anime, MiraiNime is engineered to be a **unified ecosystem**. It bridges the gap between various mediums—Anime, Donghua, Aeni, Manga, Manhwa, Manhua, and Novels—offering a seamless transition between watching and reading experiences in one cohesive platform.

#### 🎯 The Vision
The project was born out of a desire to create a "Distraction-Free Hub" for fans who consume diverse Asian media. Whether you are tracking the latest cultivation Donghua, a high-stakes Manhwa, or a seasonal Anime, MiraiNime provides a centralized, aesthetically pleasing environment to manage your interests without the clutter of traditional database sites.

#### 💎 Design Philosophy: "Clean, Premium, & Smooth"
At its core, MiraiNime prioritizes a **"UX-First"** approach. The interface utilizes:
- **Glassmorphism UI:** Subtle blurs and translucent layers that create depth and a modern "App-like" feel.
- **Bouncy & Tactile Interactions:** Every heart-toggle, tab-switch, and card-hover is calibrated with spring-physics animations to provide instant, satisfying feedback.
- **Visual Consistency:** A strictly enforced design system ensures that whether you are viewing a Seiyuu's biography or a Weekly Schedule, the experience remains uniform and premium.

#### ⚙️ Technical Excellence
To achieve elite performance, MiraiNime leverages a cutting-edge tech stack:
- **Astro & View Transitions:** By utilizing Astro's Multi-Page Application (MPA) architecture and the View Transitions API, the site achieves near-instant load times with fluid, native-app-like navigation.
- **GraphQL Data Layer:** Powered by the **AniList API**, the application performs precision data fetching. This ensures that only the necessary fields are requested, drastically reducing bandwidth and improving responsiveness.
- **Zero-Backend Architecture:** The robust Favorites system is built entirely on the client side using a safe, validated `localStorage` implementation. This allows for a private, lightning-fast bookmarking experience that works instantly without requiring a server-side account or login.
- **Resilient Layouts:** Every component is designed to prevent **Cumulative Layout Shift (CLS)** through strictly defined aspect ratios and sophisticated skeleton loading states.

---

### 🚀 Features

#### 🌐 Multi-Platform Media Discovery
* **Unified Database:** A massive library spanning across **Anime** (Japan), **Aeni** (Korea), and **Donghua** (China).
* **Comprehensive Readables:** Full support for **Manga**, **Manhwa**, **Manhua**, and **Novels** (Light & Web Novels).
* **Dynamic Metadata:** Real-time data including genres, scores, popularity rankings, and status from the AniList GraphQL API.

#### 📅 Smart Release Schedules
* **Broadcasting Hub:** Dedicated weekly schedules specifically for **Anime** and **Donghua**.
* **Dynamic Timezone Switcher:** Instant conversion between **WIB (ID)**, **JST (JP)**, **CST (CN)**, and **GMT/BST (UK)**.
* **Day-Based Filtering:** Intuitive horizontal tab navigation to check releases for every day of the week.
* **Responsive Grids:** Optimized layouts for mobile and desktop viewing with interactive airing countdowns.

#### 🏆 Top Characters Leaderboard
* **Premium Podium UI:** A specialized leaderboard featuring a 3D-effect podium for the Top 3 characters.
* **Massive Data Pool:** Fetches and manages the Top 300+ characters globally for accurate ranking.
* **Client-Side Filtering:** Blazing-fast gender-based filtering (**All, Male, Female**) using optimized JavaScript, eliminating unnecessary server requests.

#### ❤️ Advanced "Zero-Backend" Favorites
* **9-Category Segmentation:** Organized bookmarking system for Anime, Aeni, Donghua, Manga, Manhwa, Manhua, Novels, Characters, and Seiyuu.
* **Cross-Tab Synchronization:** Utilizes `window` event listeners and `localStorage` to ensure your favorites are updated instantly across all open browser tabs.
* **State Management:** Built with resilient logic including `try/catch` fallbacks and automatic data validation to prevent storage corruption.
* **Custom Favorites Manager:** A dedicated page to manage your collection, featuring a custom-built **Clear All Modal** and smooth **fade-out animations** when removing items.

#### 🎙️ Talent & Legacy Exploration
* **Character Profiles:** Detailed biographies, personal data (age, blood type, birthday), and extensive media appearances.
* **Seiyuu Hub:** High-fidelity detail pages for Voice Actors including their full portfolio of voiced characters and primary occupations.
* **Interactive Grids:** Seamlessly navigate between characters and the series they originate from.

#### ⚡ Technical & Visual Excellence
* **Astro View Transitions:** Native-app feel with fluid, non-blocking page transitions across the entire platform.
* **Skeleton Loading System:** Custom shimmer-effect placeholders for every card and content block to eliminate **Cumulative Layout Shift (CLS)**.
* **Bouncy UI Interaction:** Custom spring-physics animations (`cubic-bezier`) for toggles, buttons, and hover states.
* **Responsive Design:** A mobile-first approach ensuring a premium experience on everything from small smartphones to ultrawide monitors.

---

### 🛠️ Tech Stack

<div align="center">

**Languages & Core** <br /> 
[![My Skills](https://skillicons.dev/icons?i=ts,js,html,css)](https://skillicons.dev)

**Frameworks & Styling** <br /> 
[![My Skills](https://skillicons.dev/icons?i=astro,tailwind)](https://skillicons.dev)

**Tools & Infrastructure** <br /> 
[![My Skills](https://skillicons.dev/icons?i=graphql,vite,vercel,github,vscode)](https://skillicons.dev)

</div>

---

### 📂 Project Structure

```text
mirai-nime/
├── public/                
├── src/
│   ├── assets/
│   │   ├── mirai.png               
│   ├── components/
│   │   ├── cards/         
│   │   ├── content/         
│   │   ├── detail/         
│   │   ├── layout/       
│   │   ├── schedule/     
│   │   ├── skeleton/     
│   │   └── ui/           
│   ├── layouts/          
│   │   └── AppLayout.astro           
│   ├── lib/               
│   │   └── anilist.ts           
│   │   └── favorites.js           
│   │   └── utils.ts           
│   └── pages/             
│   │   ├── aeni/     
│   │   ├── anime/     
│   │   ├── character/     
│   │   ├── donghua/     
│   │   ├── manga/     
│   │   ├── manhua/     
│   │   ├── manhwa/     
│   │   ├── novel/     
│   │   ├── seiyuu/     
│   │   └── favoites.astro           
│   │   └── index.astro           
│   └── styles/             
│   │   └── global.css           
└── astro.config.mjs       
└── ts.config.json
```

### ⚡ Performance & UX

- **Zero Layout Shift:** Rigidly defined aspect ratios and skeleton screens prevent annoying jumps while loading.
- **Smooth View Transitions:** Utilizes Astro’s View Transitions API for a native-app feel between navigations.
- **Safe Storage Handling:** Robust `localStorage` parsing with `try/catch` fallbacks to ensure the app never crashes from corrupt data.
- **Optimal Fetching:** Efficient GraphQL queries that fetch only necessary fields, significantly reducing data usage.

---

### 📦 Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/nyomangedewisaya/mirainime.git
   ```

2. **Install NPM Packages**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

### 🔮 Future Improvements

- [ ] **Authentication:** Cloud sync for favorites via Supabase or Firebase.
- [ ] **Watchlist/Readlist System:** Status tracking (Plan to watch, Watching, Completed).
- [ ] **Global Search:** Advanced debounced search for all media types.
- [ ] **PWA Support:** Installable app for mobile and desktop access.

---

### 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<br />

<div align="center">
  <i>"The future belongs to those who believe in the beauty of their dreams."</i>
  <br />
  <b>— MiraiNime</b>
</div>
