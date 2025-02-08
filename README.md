<img src="https://i.ibb.co.com/cbw99fY/weatherium-amanillah-com.png" style="width: 100%;"/>

# **Project Overview**

**Weatherium** is a modern, responsive, and feature-rich weather forecasting web application designed to provide users with real-time weather updates for any location worldwide. Built using **React.js, Vite, and Tailwind CSS**, Weatherium delivers a sleek and intuitive user experience with dynamic weather data powered by the **OpenWeather API**.

## **Key Features**

-   **City Search & Current Location Detection:**  
    Users can search for weather updates by city name or automatically detect their current location using the **Geolocation API**.

-   **Real-Time Temperature & Weather Conditions:**

    -   Displays current temperature, high/low temperatures, and real-time weather conditions like "Clear", "Cloudy", etc.
    -   Option to toggle between **Celsius (°C) and Fahrenheit (°F)** units.

-   **Wind Details:**

    -   Shows **wind speed** (in meters per second) and **wind direction** (in degrees).

-   **Today's Highlights:**

    -   **Air Quality Index (AQI)** with pollutant breakdown for **SO₂, NO₂, O₃, and CO** levels, along with an air quality label (e.g., "Poor").
    -   Displays additional weather metrics such as **Humidity, Pressure, Visibility, and UV Index**.
    -   Provides **Sunrise and Sunset** timings.

-   **Hourly Forecast:**

    -   Provides **hourly temperature predictions** for the upcoming hours to help users plan their day.

-   **7-Day Forecast:**

    -   Displays a **7-day weather outlook** with daily high temperatures and conditions.

-   **Dark Mode:**

    -   Includes a **dark mode toggle** for an enhanced user experience, especially in low-light conditions.

-   **Responsive Design:**
    -   Fully responsive and optimized for **desktop, tablet, and mobile devices**.

---

## **Tech Stack & Dependencies**

### **Frontend Technologies:**

-   **React.js** – Frontend framework for building the UI.
-   **Vite** – Fast development and build tool.
-   **Tailwind CSS** – Utility-first CSS framework for styling.
-   **React Router DOM** – For handling client-side routing.
-   **React Icons** – For beautiful and modern icons.

### **API & Data Handling:**

-   **OpenWeather API** – Fetches real-time weather data, air quality, and forecasts.
-   **Geolocation API** – Detects the user’s current location for weather updates.

### **Development & Tooling:**

-   **ESLint & Prettier** – Linting and code formatting for maintainability.
-   **PostCSS & Autoprefixer** – For optimizing styles and adding browser prefixes.

### **Dependencies:**

```json
"dependencies": {
  "@tailwindcss/typography": "^0.5.15",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.3.0",
  "react-router-dom": "^6.28.0"
},
"devDependencies": {
  "@eslint/js": "^9.13.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.3",
  "autoprefixer": "^10.4.20",
  "eslint": "^9.13.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.11.0",
  "postcss": "^8.4.47",
  "tailwindcss": "^3.4.14",
  "vite": "^5.4.10"
}
```

---

## **Getting Started**

To run **Weatherium** locally, follow these steps:

### **Prerequisites:**

Ensure **Node.js** and **npm** are installed on your system.

### **Clone the Repository:**

```sh
git clone https://github.com/yourusername/weatherium.git
cd weatherium
```

### **Install Dependencies:**

```sh
npm install
```

### **Set Up Environment Variables:**

Create a `.env` file in the root directory and add your OpenWeather API Key:

```sh
VITE_API_KEY=your_api_key
```

### **Run the Application:**

```sh
npm run dev
```

Open your browser and go to: **http://localhost:5173**

---

## **Live Link**

🔗 [Weatherium Live Demo](https://weatherium.netlify.app/)

---

## **Key Learning Points**

-   **React Hooks:** Used **useState, useEffect, and useContext** for state management and API calls.
-   **Responsive Design:** Implemented using **Tailwind CSS** for a clean and adaptable UI.
-   **API Integration:** Integrated the **OpenWeather API** to fetch real-time weather data, air quality metrics, and forecasts.
-   **Dark Mode Feature:** Enhanced accessibility and user experience with a **dark mode toggle**.
