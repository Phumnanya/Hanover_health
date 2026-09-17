Hanover Healthcare

Hanover Healthcare is a React + TypeScript public-health information and data-visualization application focused on communicable diseases.

The project uses a two-part architecture:

World Health Organization (WHO) GHO API
                    ↓
          Python / Flask Backend
                    ↓
        Data fetching + filtering
                    ↓
             REST API endpoint
                    ↓
        React / TypeScript Frontend
                    ↓
          TanStack React Query
                    ↓
       Tables + Plotly visualizations

The frontend and backend are contained in this project, with the backend located in Hanover_backend-main/.

Features

Responsive communicable-disease information website

Dynamic disease information pages

Disease descriptions displayed according to the selected disease

WHO disease statistics for:

Hepatitis B

HIV

Malaria

Yellow Fever

Tuberculosis

Reported-case data for:

Uganda (UGA)

Kenya (KEN)

Democratic Republic of the Congo (COD)

Data displayed in both:

Tables

Interactive Plotly bar charts

Dynamic year filtering in the backend through query parameters

Loading and error states using Chakra UI

Responsive desktop/mobile navigation

Reusable React components

Flask REST API

CORS-enabled communication between frontend and backend

Architecture

1. WHO Data API

The Python backend communicates directly with the World Health Organization Global Health Observatory (WHO GHO) API.

The base API is:

https://ghoapi.azureedge.net/api

The backend uses WHO indicator codes to retrieve data for each disease.

Indicator mapping

Disease

WHO Indicator

Hepatitis B

SDGHEPHBSAGPRV

HIV

HIV_0000000026

Malaria

MALARIA_EST_INCIDENCE

Yellow Fever

WHS3_50

Tuberculosis

MDG_0000000020

2. Python / Flask Backend

The backend is located at:

Hanover_backend-main/

Its main file is:

Hanover_backend-main/app.py

The backend is responsible for communicating with the WHO API instead of having the React application call the WHO API directly.

It:

Receives a request from the frontend.

Determines the requested year range.

Loops through the configured disease indicators.

Requests WHO data for each configured country.

Collects the responses.

Packages the data into a consistent JSON structure.

Returns the data to the React frontend.

The backend currently focuses on:

UGA → Uganda
KEN → Kenya
COD → Democratic Republic of the Congo

Backend endpoint

GET /fetch-data

The deployed backend is currently:

https://hanover-backend.onrender.com

Therefore the frontend requests:

https://hanover-backend.onrender.com/fetch-data

Backend query parameters

The /fetch-data endpoint accepts optional query parameters:

start_year
end_year

For example:

/fetch-data?start_year=2020&end_year=2024

If they are not provided, the backend defaults to:

start_year = 2020
end_year   = 2024

The backend then constructs WHO API requests similar to:

https://ghoapi.azureedge.net/api/{indicator}?$filter=SpatialDim eq '{country}' and TimeDim ge {start_year} and TimeDim le {end_year}

Backend Response Structure

The Flask backend transforms the individual WHO responses into a structure that is easier for the frontend to consume.

A simplified response looks like:

[
  {
    "disease": "malaria",
    "country": "UGA",
    "start_year": 2020,
    "end_year": 2024,
    "cases": [
      {
        "TimeDim": 2020,
        "NumericValue": 123
      }
    ]
  }
]

This abstraction means the frontend does not need to understand the complete structure of the WHO API.

Frontend

The frontend is built with:

React

TypeScript

Vite

React Router

TanStack React Query

Chakra UI

Tailwind CSS

Plotly

Splide

Framer Motion

AOS

The frontend communicates with the Flask backend through the fetchDiseaseData() function.

Located in:

src/views/Disease.tsx

The function currently requests:

https://hanover-backend.onrender.com/fetch-data

and returns the JSON response to React Query.

Data Flow in the Frontend

The disease information page uses TanStack React Query:

const { data, isLoading, error } = useQuery<DiseaseEntry[]>({
    queryKey: ["diseaseData"],
    queryFn: fetchDiseaseData,
});

The resulting data is then filtered according to the disease contained in the URL.

For example:

/info/malaria

produces:

diseaseName = "malaria"

The frontend then searches the API response for the corresponding disease.

The selected data is subsequently used to generate:

Disease-specific statistics

The reported-cases table

The Plotly bar chart

Disease Descriptions

Disease descriptions are maintained separately from the statistical data.

They are located in:

src/views/description.ts

This file currently contains descriptions for:

Hepatitis B

HIV

Malaria

Yellow Fever

Tuberculosis

The information page imports these descriptions and selects the appropriate description using the disease name from the URL.

For example:

const description =
    diseaseDescriptions[diseaseName?.toLowerCase() || ""];

This means the application has two separate sources of disease information:

WHO API
   ↓
Statistical data
   ↓
Cases / years / countries


description.ts
   ↓
Human-readable disease information
   ↓
Disease summary

This separation keeps the statistical data and editorial content independent.

Interactive Disease Pages

Disease pages use a dynamic React Router route:

<Route
    path="/info/:diseaseName"
    element={<InfoPage />}
/>

Examples include:

/info/hepatitis_b
/info/hiv
/info/malaria
/info/yellow_fever
/info/tuberculosis

The InfoPage component retrieves the route parameter with:

const { diseaseName } = useParams();

It then uses that value to determine which disease data and description should be displayed.

Data Visualization

The project uses Plotly through:

react-plotly.js

The information page creates a bar chart showing reported cases across the supported countries and years.

The chart uses:

X-axis → Country
Y-axis → Reported cases
Groups → Year

The same processed data is also displayed in a table.

This provides both a visual overview and a detailed numerical representation of the data.

Project Structure

Hanover_health-main/
│
├── Hanover_backend-main/
│   ├── app.py
│   ├── requirements.txt
│   └── render.yaml
│
├── public/
│   ├── Descriptions.json
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── Carousel.tsx
│   │   │   ├── Designed-heading.tsx
│   │   │   ├── Desktop-search-icon.tsx
│   │   │   ├── Footer-links.tsx
│   │   │   ├── Footer-logo.tsx
│   │   │   ├── Head.tsx
│   │   │   ├── Mission-img.tsx
│   │   │   ├── Nav_logo.tsx
│   │   │   ├── Overview-Flexbox.tsx
│   │   │   ├── Search-icon-mobile.tsx
│   │   │   ├── Subscribe.tsx
│   │   │   └── Tiles-contents.tsx
│   │   │
│   │   └── plotly_data/
│   │       ├── BarChart.tsx
│   │       ├── PieChart.tsx
│   │       ├── Sunburst.tsx
│   │       └── Table.tsx
│   │
│   ├── theme/
│   │   └── MyTheme.tsx
│   │
│   ├── views/
│   │   ├── Data.tsx
│   │   ├── description.ts
│   │   ├── Disease.tsx
│   │   ├── InfoPage.tsx
│   │   ├── LandingPage.tsx
│   │   ├── OverviewPage.tsx
│   │   └── Test.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   ├── base.css
│   └── index.css
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.js
└── index.html

Getting Started

Prerequisites

You need:

Node.js

npm

Python 3

pip

Check Node and npm:

node -v
npm -v

Check Python:

python --version

or:

python3 --version

Running the Frontend

From the project root:

npm install

Start the Vite development server:

npm run dev

The frontend will normally be available at:

http://localhost:5173

Running the Backend Locally

Navigate into the backend:

cd Hanover_backend-main

Install the Python dependencies:

pip install -r requirements.txt

Start Flask:

python app.py

The backend will normally run at:

http://127.0.0.1:5000

The local endpoint is:

http://127.0.0.1:5000/fetch-data

The current frontend fetch function points to the deployed Render backend. If you want to use the local Flask server during development, update the frontend API URL accordingly.

Python Backend Dependencies

The backend uses:

Flask==2.3.3
gunicorn==21.2.0
requests==2.31.0
Flask-Cors==4.0.0

Flask

Provides the REST API.

Requests

Makes HTTP requests from the Python backend to the WHO GHO API.

Flask-CORS

Allows the React frontend and Flask backend to communicate across different origins.

Gunicorn

Runs the Flask application in production.

Backend Deployment

The backend is configured for deployment on Render.

The deployment configuration is:

Hanover_backend-main/render.yaml

The service uses:

env: python

and starts with:

gunicorn app:app

The deployed backend currently uses:

https://hanover-backend.onrender.com

Frontend Deployment

The frontend is a Vite application and can be deployed to platforms such as Vercel.

Build the project with:

npm run build

Preview the production build locally with:

npm run preview

For Vercel, connect the GitHub repository and use:

Build Command: npm run build

Available Frontend Scripts

npm run dev

Starts the development server.

npm run build

Creates the production build.

npm run preview

Previews the production build.

npm run lint

Runs ESLint.

Why the Backend Exists

Instead of having the React application communicate directly with the WHO API, the project introduces a Flask backend between the frontend and WHO.

This provides a useful separation of responsibilities:

Frontend

Responsible for:

User interface

Routing

Disease selection

Data presentation

Tables

Charts

Responsive design

Backend

Responsible for:

Communicating with WHO

Selecting the required WHO indicators

Selecting the required countries

Applying the year range

Collecting data

Returning a simplified response

WHO API

Responsible for:

Providing the underlying public-health data

The architecture can therefore be summarized as:

                  ┌──────────────────────┐
                  │   WHO GHO API        │
                  │ Public Health Data    │
                  └──────────┬───────────┘
                             │
                             │ HTTP
                             ↓
                  ┌──────────────────────┐
                  │ Python / Flask API   │
                  │                      │
                  │ • Fetches WHO data   │
                  │ • Filters countries   │
                  │ • Filters years      │
                  │ • Structures JSON    │
                  └──────────┬───────────┘
                             │
                             │ REST API
                             ↓
                  ┌──────────────────────┐
                  │ React + TypeScript   │
                  │                      │
                  │ • React Query        │
                  │ • React Router       │
                  │ • Disease pages      │
                  │ • Tables             │
                  │ • Plotly charts      │
                  └──────────────────────┘

Current Scope

The backend currently retrieves data for five configured indicators and three countries.

The year range defaults to:

2020–2024

The frontend currently presents the resulting information as disease-specific pages.

The project can be extended by adding additional WHO indicators and countries to the backend configuration.

Future Improvements

Potential improvements include:

Move the backend URL into a frontend environment variable.

Add environment-specific API configuration for local and production environments.

Add more diseases and WHO indicators.

Add more countries.

Allow users to select countries and year ranges from the UI.

Add additional Plotly visualizations.

Add disease prevention and treatment sections.

Move disease descriptions into a centralized data source.

Add backend caching to reduce repeated WHO API requests.

Add backend error handling and API response validation.

Add automated frontend and backend tests.

Add API documentation.

Improve accessibility.

Add proper search functionality.

Author

Eustace Mbanefo

Frontend Developer

Hanover Healthcare was developed as a public-health information and data-visualization project combining a React/TypeScript frontend with a Python/Flask data-processing backend and WHO public-health data.
