# 💱 Currency Exchanger

A sleek and modern Currency Converter web app built with **React**, **Tailwind CSS**, and **Vite**. Instantly convert between 30+ currencies with live exchange rates via a user-friendly interface.

---

## 🚀 Features

- 🔄 Real-time currency exchange rates using **FreeCurrencyAPI**
- 🌍 Support for 30+ international currencies
- 💻 Clean, responsive UI with Tailwind CSS
- 🔁 Swap between currencies instantly
- ⚡ Fast loading with Vite

---

## 🧰 Tech Stack

- **Frontend**: React, Tailwind CSS
- **API**: [FreeCurrencyAPI](https://freecurrencyapi.com/)
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Samir-Azam/Basic-React-Projects.git
   cd 05-Currency-Converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**  
   Create a `.env` file in the root directory and add your FreeCurrencyAPI key:
   ```env
   VITE_CURRENCY_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 🖥 Usage

- Enter an amount in the **From** currency field.
- Choose the currencies to convert **From** and **To**.
- View the real-time converted amount.
- Use the 🔄 button to swap selected currencies.

---

## 📁 Project Structure

```
currency-exchanger/
│
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable Input component
│   ├── hooks/          # Custom hook for fetching exchange data
│   ├── App.jsx         # Main app logic
│   ├── main.jsx        # React DOM mount
│   └── index.css       # Tailwind styles
|
└── vite.config.js      # Vite configuration
```

---

## 🌐 Supported Currencies

`"EUR", "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "ISK", "NOK", "HRK", "RUB", "TRY", "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR"`

---

## 📸 Screenshot


![Currency Exchanger Screenshot](./public/Screenshot.png)


---

## 📝 License

This project is licensed under the **MIT License**.

> You don’t need to register or buy anything to include this section. It allows others to freely use, modify, and distribute your code with attribution. You can replace this with another license if you prefer.

---

## 🙌 Acknowledgements

- [FreeCurrencyAPI](https://freecurrencyapi.com)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pexels](https://pexels.com) for background image assets

---
