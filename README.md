BroncoHacks Project: Restroom Rater - A web application where Cal Poly Pomona students can rate campus restrooms through an upvote/downvote system. 
Tech Stack: React Frontend, Django Backend w/ SQL_Lite3 DB

# RateMyRestroom
![Untitled_drawing](https://github.com/larrylaa/BroncoHacks24_Project/assets/137100338/05fa1638-49f8-4db1-8fcd-fc0a8731f008)

Welcome to RateMyRestroom! This repository contains both the frontend and backend code for our application.

## Getting Started

To get started with development, follow the instructions below to set up and run both the frontend and backend servers locally.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (https://nodejs.org/) - JavaScript runtime environment
- npm (comes with Node.js) - package manager for Node.js
- Python (https://www.python.org/) - programming language used by Django
- pip (Python package installer) - typically installed with Python

### Installation
1.) Clone project
git clone <repository-url>

2.) Navigate to the frontend directory:
cd frontend

3.) Install frontend dependencies:
npm install

4.) Navigate to the backend directory:
cd backend

5.) Create a virtual environment (optional but recommended):
python -m venv venv
Activate the virtual environment:
On Windows:
venv\Scripts\activate

On macOS/Linux:
source venv/bin/activate

6.) Install backend dependencies:
pip install -r requirements.txt (NOT SETUP YET)

7.) Running the Servers
Frontend Server
To start the frontend development server, run the following command inside the frontend directory:
npm start
This will start the frontend server, and you can access the application at http://localhost:3000 in your browser.

Backend Server
To start the backend development server, run the following command inside the backend directory:
python manage.py runserver
This will start the Django development server, and it will be accessible at http://localhost:8000

License
This project is licensed under the MIT License.
