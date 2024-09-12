Next.js Dashboard with Django Backend
This project consists of a Next.js frontend application that displays various charts, with data fetched from a Django backend API.
Prerequisites

Python 3.8+
Node.js 14+
npm or yarn

Run the backend in a seperate terminal before running the frontend.

Docker Setup (Incomplete):
I tried but it was my first time using docker
so I'm not sure if it works
Run docker-compose up --build
Frontend will now be running on 'http://localhost:3000'
Backend will now be running on 'http://localhost:8000'

Backend Setup (Django) (no docker):

Navigate to backend directory:
cd backend

Create a virtual environment and activate it:
'python -m venv venv'
source venv/bin/activate on mac or linux 
On Windows, use `venv\Scripts\activate`

Install the required packages:
pip install -r requirements.txt

Run migrations:
python manage.py migrate

Start the Django development server:
python manage.py runserver


The backend should now be running at http://localhost:8000.

Backend Setup (with Docker):

Frontend Setup (Next.js) (no docker):

Navigate to frontend directory:
cd frontend

Install the required packages:
npm install
# or
yarn install

Start the Next.js development server:
npm run dev
# or
yarn dev


The frontend should now be accessible at http://localhost:3000.
Libraries and Tools Used

Backend:

Django
Django REST Framework
django-cors-headers


Frontend:

Next.js
React
TypeScript
Chart.js
react-chartjs-2
lightweight-charts (for candlestick chart)



Approach and Thought Process

Backend:

Created simple Django views to serve hardcoded data for each chart type.
Used Django REST Framework for easy API creation.
Implemented CORS headers to allow the frontend to access the API.


Frontend:

Used Next.js with TypeScript for type safety and better developer experience.
Implemented a responsive layout using CSS Grid.
Fetched data from the Django backend using the useEffect hook.
Used Chart.js and react-chartjs-2 for Line, Bar, and Pie charts due to their ease of use and customization options.
Implemented a custom Candlestick chart using lightweight-charts for better performance with financial data.


Integration:

Ensured proper error handling when fetching data from the backend.
Used TypeScript interfaces to ensure type safety when working with API data.