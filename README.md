Hanover Healthcare

A responsive communicable-disease information and data visualization web application built with React and TypeScript.

Hanover Healthcare is designed to make public-health information easier to explore by combining disease summaries with reported-case data, interactive visualizations, and a simple responsive interface.

Features

Communicable disease information

Disease summaries for Hepatitis B, HIV/AIDS, Malaria, Yellow Fever, and Tuberculosis.

Disease-specific pages accessed through dynamic routes.

Dynamic disease data

Fetches disease data from a deployed backend API.

Displays reported cases by country and year.

Uses React Query for asynchronous data fetching and loading/error states.

Interactive data visualization

Bar-chart visualization of reported cases using Plotly.

Tabular presentation of the same case data.

Responsive design

Responsive layouts for desktop and mobile screens.

Mobile disease carousel using Splide.

Desktop/mobile search components.

Reusable UI components

Navigation, footer, headings, disease cards, carousel, subscription section, and other interface elements are separated into reusable components.

Tech Stack

Frontend

React 18

TypeScript

Vite

React Router

TanStack React Query

Chakra UI

Tailwind CSS

Plotly / React Plotly

Splide

Framer Motion

AOS

Data

The application consumes disease data through a deployed backend endpoint:

https://hanover-backend.onrender.com/fetch-data

The project was developed around public-health data from sources such as the World Health Organization (WHO).

The backend service itself is not included in this repository/archive.

Project Structure

src/
├── assets/
│   ├── components/
│   │   ├── Carousel.tsx
│   │   ├── Designed-heading.tsx
│   │   ├── Desktop-search-icon.tsx
│   │   ├── Footer-links.tsx
│   │   ├── Footer-logo.tsx
│   │   ├── Head.tsx
│   │   ├── Mission-img.tsx
│   │   ├── Nav_logo.tsx
│   │   ├── Overview-Flexbox.tsx
│   │   ├── Search-icon-mobile.tsx
│   │   ├── Subscribe.tsx
│   │   └── Tiles-contents.tsx
│   │
│   └── plotly_data/
│       ├── BarChart.tsx
│       ├── PieChart.tsx
│       ├── Sunburst.tsx
│       └── Table.tsx
│
├── theme/
│   └── MyTheme.tsx
│
├── views/
│   ├── Data.tsx
│   ├── description.ts
│   ├── Disease.tsx
│   ├── InfoPage.tsx
│   ├── LandingPage.tsx
│   ├── OverviewPage.tsx
│   └── Test.tsx
│
├── App.tsx
├── main.tsx
├── App.css
├── base.css
└── index.css

public/
└── Descriptions.json

Application Routes

The application currently contains the following routes:

Route

Purpose

/

Landing page

/overviewpage

Communicable disease overview

/info/:diseaseName

Dynamic disease information and statistics page

/test

Development/testing page

Dynamic Disease Route

Disease pages use React Router's URL parameter:

<Route path="/info/:diseaseName" element={<InfoPage />} />

For example:

/info/malaria
/info/hiv
/info/yellow_fever
/info/tuberculosis

InfoPage.tsx reads the disease name with useParams() and uses it to filter the data returned by the backend.

Data Flow

The main disease-data flow is:

WHO/public-health data
        ↓
Backend API
        ↓
https://hanover-backend.onrender.com/fetch-data
        ↓
fetchDiseaseData()
        ↓
TanStack React Query
        ↓
InfoPage
        ↓
Filter data by disease
        ↓
Table + Plotly chart

Disease descriptions are currently maintained separately in:

src/views/description.ts

This keeps descriptive content separate from the statistical data returned by the API.

Getting Started

Prerequisites

Make sure you have:

Node.js

npm

You can check your versions with:

node -v
npm -v

Installation

Clone the repository:

git clone <your-repository-url>
cd Hanover_health

Install dependencies:

npm install

Run the development server

npm run dev

Vite will provide a local development URL, normally similar to:

http://localhost:5173

Build for production

npm run build

Preview the production build

npm run preview

Lint the project

npm run lint

Adding a Disease Description

Disease descriptions are stored in:

src/views/description.ts

The object uses the disease's URL-friendly name as its key:

const diseaseDescriptions: Record<string, string> = {
    malaria: `Malaria is a life-threatening disease...`,
    hiv: `Human immunodeficiency virus (HIV) is...`,
    yellow_fever: `Yellow fever is a viral disease...`,
};

The key should match the value used in the disease URL.

For example:

/info/yellow_fever

should use:

yellow_fever: `...`

Adding a Disease to the Overview

Disease cards are currently defined in the landing and overview pages and link to the dynamic disease route.

Example:

<Link to="/info/malaria">
    <Diseases
        pic="malaria.jpg"
        alt="Malaria"
        topic="Malaria"
        desc="..."
    />
</Link>

When adding a new disease, make sure the route name, description key, and disease name returned by the API are consistent.

Deployment

The project is a Vite frontend and can be deployed to platforms such as Vercel.

For Vercel deployment:

Push the project to GitHub.

Import the repository into Vercel.

Vercel should detect the Vite project automatically.

Use the standard build command:

npm run build

Deploy.

The frontend depends on the deployed backend API being available at:

https://hanover-backend.onrender.com/fetch-data

Important Notes

Backend dependency

The backend is external to this frontend repository. If the backend service is unavailable, disease statistics on the information pages will not load.

Disease descriptions

Disease descriptions are currently static frontend content rather than being retrieved from the backend.

Images

Several components reference images from the /public/img/ directory, for example:

/img/malaria.jpg
/img/hiv.jpg
/img/hepatitis.jpg
/img/yellow_fever.jpg
/img/tuberculosis.jpg

Make sure these assets exist in the deployed project under:

public/img/

Future Improvements

Some potential improvements for the project include:

Move disease information into a structured JSON/API data source.

Add more communicable diseases.

Add prevention and treatment information to disease pages.

Add more detailed data visualizations.

Add date/year filters for the statistics.

Improve accessibility across interactive components.

Add proper search functionality for diseases.

Add automated tests.

Add a dedicated backend repository and documentation.

Add environment variables for configurable API endpoints.

Author

Eustace Mbanefo

Frontend Developer

Built as a public-health information and data visualization project using React, TypeScript, and modern frontend technologies.
