
# 🎯 Guessing Game

A simple and fun number guessing game built with HTML, CSS, and JavaScript.
Players can choose a difficulty level — Easy, Medium, Hard, or Custom — and try to guess a randomly generated number.
Hints guide players toward the correct answer while tracking correct and incorrect guesses.


# Value
The **Guessing Game** is designed to provide users with a quick and engaging way to test their logic, intuition, and attention to patterns.  
It’s a lightweight web app that demonstrates how core JavaScript concepts like random number generation, conditionals, and event handling can be used to build an interactive and responsive game.  

**Value to users:**
- 🎮 Simple, intuitive gameplay for all ages.  
- 🧠 Encourages logical thinking and strategic guessing.  
- 💻 Works seamlessly across desktop and mobile devices.  


# Table of Contents


1. [Features](#features)  
2. [Project Structure](#project-structure)  
3. [How to play](#how-to-play)  
4. [Technology used](#technologies-used)  
5. [Preview](#preview)  
6. [Validation Testing](#validation-testing)  
7. [Deployment](#deployment)  
8. [Accessibility](#accessibility)
9. [Credits](#credits)  


# Features

🎚️ Multiple difficulty levels:

This feature allows players of all skill levels to find a suitable challenge, ensuring the game is always engaging and accessible.

- Easy: Guess a number between 1–5

- Medium: Guess a number between 1–15

- Hard: Guess a number between 1–25

- Custom: Set your own maximum number

# Interactive hints

 The interactive hints provide real-time, actionable feedback based on the difference between the guess and the target number. This helps users develop a logical approach to quickly narrow the range of guesses.

| Hint | Description | Example |
|------|--------------|----------|
| 🔥 **Super Close!** (±2) | You’re almost there — just a bit off! | <img src="assets/images/super hot guess snip.png" alt="Super close guess" width="600"/> |
| 🌡️ **Warm!** (±5) | Getting closer — keep guessing! | <img src="assets/images/warm guess.png" alt="Warm guess" width="600"/> |
| 🧊 **Cold!** (±10) | Quite far — adjust your range. | <img src="assets/images/cold guess snip.png" alt="Cold guess" width="600"/> |
| 🥶 **Very Cold!** (> ±10) | Way off — try a different approach. | <img src="assets/images/very cold guess.png" alt="Very cold guess" width="600"/> |

# Score tracking:

The game keeps a running score of your attempts, which motivates players by showing their immediate progress and number of attempts. This encourages them to beat their personal best or try to win in fewer guesses next time.




| Hint | Description | Example |
|------|--------------|----------|
| 
| 🧊 **Correct Guess**  | Correct! you guessed the number    | <img src="assets/images/correct guess snip.png" alt="Correct guess snip" width="600"/> |
| 🥶 **Incorrect Guess**  | Displays Incorrect guess counter at bottom of screen | <img src="assets/images/guess tracker snip.png" alt="Incorrect guess tracker" width="600"/> |


# Responsive design

The application adapts seamlessly to all screen sizes (desktop, tablet, and mobile). This ensures the game is accessible and fully playable on any device, so you can enjoy it anywhere without loss of functionality.

# Project Structure

Guessing game
  - index.html 
  - assets
    - CSS
      - styles.css
    - js
      - scripts.js
    - images
      - Qmark-pic.png
      - guessing-game-pic.png 
      - project 2 css snip.png
      - cold guess snip.png
      - correct guess snip.png
      - custom input snip.png
      - guess tracker snip.png
      - lighthouse snip.png
      - project 2 HTML snip.png
      - project 2 js snip.png
      - super hot guess snip.png
      - very cold guess.png

  - README.md

# How to Play

Open index.html in your web browser.

Choose a difficulty level — Easy, Medium, Hard, or Custom.(G)

Enter your guess in the input box.

Click "Submit Answer" to see if you’re correct.

Follow the hints to adjust your guess.

The game keeps track of your correct and incorrect guesses.

# Technologies Used

HTML5 — Structure of the game

CSS3 — Styling and responsive layout

JavaScript (Vanilla) — Game logic and interactivity

Font Awesome — For button icons

# Preview

![Guessing Game Screenshot](assets/images/guessing-game-pic.png)




# Validation Testing


| Hint | Description | Example |
|------|--------------|----------|
|  **HTML**  | - No errors when passed through wc3 validator| <img src="assets/images/project 2 HTML snip.png" alt="Super close guess" width="600"/> |
|  **CSS**  | - No errors when passed through wc3 validator | <img src="assets/images/project 2 css snip.png" alt="Warm guess" width="600"/> |
|  **Javascript** | - No errors when passed through Js hint. | <img src="assets/images/project 2 js snip.png" alt="Cold guess" width="600"/> |


# Deployment 

Play the game online here: https://kb1537.github.io/second-project/

The site was deployed to github pages, steps to deploy are outlined below:

1 Go to your GitHub repo → Settings → Pages.

2 Under Build and deployment, choose:
 * Source: Deploy from a branch, 
 * Branch: main (or master) → /root


# Accessibility 
Lighthouse report attached below:

![Lighthouse report screenshot](<assets/images/lighthouse snip.png>)

# Credits 
Content

the code for the framework and css globaly styleswas taken from the loves maths games project.
