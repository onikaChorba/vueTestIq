# 👩‍💻 Vue IQ Test Website

This website is a Vue-based application that includes a homepage, a test page, and a form with questions to determine the IQ level.

## 🛠️ Description of functionality

The website includes three main pages:

### Homepage

The homepage includes general information about the IQ test and a button to start the test.

### About

The test information page has detailed information about the IQ test.

### Test Page

The test page includes a set of questions to determine the IQ level. The questions are presented one at a time, and the user must select an answer before proceeding to the next question.

### Results Page

The results page displays the IQ level based on the user's answers to the questions. The page also includes a timer that counts down from 10 minutes.

## Project structure

    */public - external resources that will be available on the website
    */src
        */assets - resources for display (images, fonts, etc.)
        */components - Vue components used on pages
        */router - routing settings between pages
        */views - components that are responsible for displaying pages
    *App.vue is the main component that connects other components and is responsible for rendering pages
    *main.js is the file that initializes Vue and sets the main components and other settings
