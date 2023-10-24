# Project Documentation

## Introduction

This is a comprehensive README for our React-based Single Page Application. The application has 6 main pages corresponding to Home, Faculty, Student, Project, Event, and Publication. This document will guide you through the folder structure, the reusable components, and how to run and download the code.

---

## Main `components` Folder

Each of these folders contains a `.js` and a `.css` file for the corresponding component and corresponds to one of the main pages on our website.

1. **Home**: The landing page of the application.
2. **Faculty**: Page displaying faculty members.
3. **Student**: Page displaying student profiles.
4. **Project**: Page showcasing ongoing and past projects.
5. **Event**: Page listing all events. It has a sub-folder for each event type, currently only containing `Hackathon`.
6. **Publication**: Page displaying all publications.

---

## Reusable Components in `components` Folder

These components are designed to be reusable across the application. Each has a `.js` and a `.css` file.

1. **Navbar**: Manages the navigation bar and logos across all pages. (search is not implemented yet)
2. **Footer**: A footer at the bottom of the page. (currently not optimised)
3. **FacultyMembers**: Used to display faculty members in a uniform format.
4. **ProjectDetails**: Displays project details, making it easy to add or update projects.
5. **PublicationMembers**: Customizable component for listing publications.
6. **StudentMembers**: Used for displaying student profiles in a consistent format.

---

## `public` Folder

This folder contains all static assets categorized into sub-folders.

1. **logos**: Contains the IIITH and CDS lab logo.
2. **faculty_image**: Houses images of faculty members.
3. **student_image**: Houses images of students.
4. **home_image**: Contains images used on the home page.

---

## App.js File

This is the main JavaScript file where we import and use the Navbar and Footer components. This file also sets up the routes for our SPA, guiding the navigation between different pages.

---

## How to Run the Code

Since the `node_modules` folder is deleted, you will need to reinstall the dependencies. 

1. Open your terminal and navigate to the `frontend` folder.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the development server.

Your application should now be running at `http://localhost:3000`.

---
