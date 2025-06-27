# Weather App

A responsive weather app built using **TypeScript**, **React**, and **Tailwind CSS**, powered by the [OpenWeatherMap API](https://openweathermap.org/api). Users can search for weather by city and view results in both desktop and mobile layouts.

**Website Deployed to https://weather-shanyi.netlify.app/**

---

## Features
- Search for weather by city
- Weather results with temperature, icon, and description
- Search history tracking
- Dark-themed UI matching provided Figma design

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/syliow/weather.git
cd weather
```
### 2. Install dependencies
```npm install```

### 3. Set up environment variables
Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```VITE_OPEN_WEATHER_MAP_API_KEY=your_api_key_here```

### 4. Run the development server
`npm run dev`

### 5. Open in browser
Visit `http://localhost:5173` to use the app

UI Screenshots (Mobile View)

![image](https://github.com/user-attachments/assets/93e1c69a-60f0-48c1-82ac-1d916595a346)

(Desktop View)
![image](https://github.com/user-attachments/assets/4d0738db-1dbb-406c-9dfb-cbf510870768)

### Thought Process 

If you're curious about how I approached the task, you can explore the pull requests below. They include progress updates, challenges, and decisions made along the way:
- https://github.com/syliow/weather/pull/1
- https://github.com/syliow/weather/pull/2
- https://github.com/syliow/weather/pull/3


**Known Issues**
- Minor differences from Figma design (e.g., button sizing, spacing, alignment)
- Weather image is currently hardcoded and not dynamically rendered based on weather condition
- Theme switcher was not implemented

(Spacing issue for user input)<br>
![image](https://github.com/user-attachments/assets/76a2ae3f-002e-428d-91f3-6f457a84d17e) <br>
(Different Icon color)<br>
![image](https://github.com/user-attachments/assets/28aec580-8506-470a-bf60-e9ed54eb0ef7)

