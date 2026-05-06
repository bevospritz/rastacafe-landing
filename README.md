# Landing Page — React + Vite + Tailwind CSS

## 🚀 Avvio rapido

```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo
npm run dev
```

Apri il browser su **http://localhost:5173**

---

## 📁 Struttura del progetto

```
landing-page/
├── public/                 # Asset statici
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Barra di navigazione (responsive + hamburger)
│   │   ├── Hero.jsx        # Sezione principale con CTA
│   │   ├── Features.jsx    # Griglia vantaggi/servizi
│   │   ├── CTA.jsx         # Form di contatto / call to action
│   │   └── Footer.jsx      # Piè di pagina
│   ├── App.jsx             # Componente radice
│   ├── main.jsx            # Entry point React
│   └── index.css           # Tailwind CSS
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## ✏️ Come personalizzare

| Cosa modificare | File |
|---|---|
| Nome/logo del sito | `Navbar.jsx` e `Footer.jsx` |
| Titolo e testo principale | `Hero.jsx` |
| Card con i vantaggi | `Features.jsx` → array `features` |
| Sezione contatti / email | `CTA.jsx` |
| Colori principali | `tailwind.config.js` → `theme.extend.colors` |

---

## 🛠️ Build per produzione

```bash
npm run build     # Genera la cartella /dist
npm run preview   # Anteprima locale del build
```

---

## 🤖 Usare con Claude Code

Apri il progetto in VSCode e avvia Claude Code nel terminale:

```bash
claude
```

Esempi di prompt utili:
- *"Aggiungi una sezione Testimonianze dopo Features"*
- *"Cambia il colore principale da indigo a emerald"*
- *"Aggiungi animazioni di entrata alle card Features"*
- *"Crea una pagina Chi siamo separata"*
