# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install

`yarn install` (project create with node v18, via nvm)

### Start

`yarn start`

### Specs

Login box (/login)
- select user
- user is authed
(- signup ?)

Homepage (/)
- authed user info
- toggle answered / unanswered polls
- polls ordered most recently created
- unanswered questions shown by default

Question (/questions/:question_id)
- details of that poll
  - Unanswered :
    - 1. Text “Would You Rather”
    - 2. Avatar of the user who posted the polling question
    - 3. Two options
  - Answered
    - 1. Text of the option
    - 2. Number of people who voted for that option
    - 3. Percentage of people who voted for that option
    - 4. The user answered option is clearly marked

Business rules
- user cannot change his answer
- only one answer per question per user

Add a question (/add)
- text "Would you rather
- input for two options
- submit form
- redirect to /
- a new question is created

Leaderboard
- Contains :
  - 1. User’s name
  - 2. User’s picture
  - 3. Number of questions the user asked
  - 4. Number of questions the user answered
- Sorted by descending order based on:
  - 1. the sum of the number of questions
  - 2. the number of questions they’ve answered

Other
- if we navigated without being authed => redirection to login box
- 404 - page or question that does not exist
- Navigation Bar
