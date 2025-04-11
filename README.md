# Smart Student ID Card Generator

A ReactJS application that dynamically generates student ID cards. The app allows users to input student details, preview an ID card with a QR code, switch between design templates, and save cards persistently using localStorage.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Design Decisions and Thought Process](#design-decisions-and-thought-process)

## Overview

The **Smart Student ID Card Generator** is designed as a miniature version of Unity’s Student ID module. It demonstrates proficiency in ReactJS, component-based architecture, and integration of external libraries while emphasizing UI/UX polish. The app captures student data, generates an ID card preview (including a QR code with essential student data), and offers a downloadable PNG of the ID card. Additionally, saved cards are maintained in localStorage for later retrieval.

## Features

1. **Student Data Form**
   - Captures essential fields:
     - Name, Roll Number
     - Class & Division (dropdown)
     - Allergies (multi-select)
     - Photo Upload (with preview)
     - Rack Number
     - Bus Route Number (dropdown)
     - Submit Button

2. **Smart ID Card Preview**
   - Displays student details including:
     - Uploaded Photo
     - Allergies (if any)
     - Rack Number and Bus Route details
     - QR Code generated from student data *(excluding the photo to optimize QR readability)*
     - Download as PNG functionality

3. **Template Switching**
   - A dropdown/toggle allowing users to switch between two design templates to change the look of the ID card.

4. **Persistent Data (Bonus)**
   - Saves student entries to localStorage.
   - Displays saved cards in a dynamic, responsive grid that covers the whole width.
   - Allows users to view and download older cards.

## Technology Stack

- **ReactJS (18+)**: Core framework for building the user interface.
- **TailwindCSS**: For rapid and responsive styling.
- **QRCodeSVG (qrcode.react)**: For generating QR codes.
- **html-to-image**: Converts the ID card DOM element into a downloadable PNG.
- **React Icons**: Provides visual enhancements via icons.
- **localStorage API**: For persistent data storage.


## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/smart-student-id-card-generator.git
   cd smart-student-id-card-generator

2. **Clone the Repository:**
   ```bash
   npm install

3. **Clone the Repository:**
   ```bash
   npm start

3. **Access the Application: Open your browser at http://localhost:3000.**

## Usage

1. **Fill in the Student Data Form:**
    - Enter all required details and upload a photo.

2. **Generate ID Card:**
    - Click on the "Generate ID Card" button to view the preview.

3. **Template Switching:**
    - Use the dropdown to switch between available card templates.

4. **Download and Manage Saved Cards:**
    - Click the "Download as PNG" button to save the card.
    - View saved cards in the dynamic grid (cards will persist thanks to localStorage).

## Design Decisions and Thought Process

1. **Component-Based Architecture:**
    - Separation of Concerns: The app is divided into distinct components—StudentForm, IDCardPreview, TemplateSwitcher, and SavedCardsList—which makes it modular, easier to maintain, and reusable.

    - State Management: The global state (current student data, saved cards, selected template) is managed in App.jsx, allowing components to focus on rendering and interactions.

2. **UI/UX Enhancements:**
    - TailwindCSS: Selected for its utility-first styling, ensuring a consistent and responsive design.

    - Responsive Design: The dynamic grid in SavedCardsList and overall layout ensure the application looks great across various screen sizes.

    - Visual Feedback: Icons (using React Icons) and well-styled input fields provide clarity and a modern feel.

3. **QR Code Optimization:**
    - Data Management: To avoid issues like data overload, only essential student details (excluding the photo) are encoded in the QR code.

    - Download Functionality: The use of html-to-image allows for a simple and efficient download of the rendered ID card.

4. **Persistence:**
    - localStorage: Implemented for bonus functionality, ensuring that user entries remain available even after a page refresh. This enhances usability by allowing users to retrieve and manage past entries.



