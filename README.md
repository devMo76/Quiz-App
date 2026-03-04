# ReactQuiz

A timed multiple-choice quiz app built with React. Users answer 7 React-related questions under a countdown timer, get instant visual feedback on each answer, and see a full results summary at the end.

## Technologies

- **React 19** — UI components, state management with `useState`, side effects with `useEffect`, performance optimization with `useCallback` and `useRef`
- **Vite** — Development server and build tool
- **ESLint** — Code linting with React-specific plugins
- **CSS** — Custom styling with animations, gradients, and progress bar theming

## Project Structure

```
src/
├── main.jsx              # App entry point, renders into #root
├── App.jsx               # Root component, renders Header + Quiz
├── index.css             # Global styles for all components
├── question.js           # Array of quiz questions and answers
├── assets/
│   └── quiz-complete.png # Image shown on the summary screen
└── components/
    ├── Header.jsx        # App logo and title
    ├── Quiz.jsx          # Main quiz logic, tracks user answers
    ├── Question.jsx      # Single question with timer and answer state
    ├── QuizTimer.jsx     # Countdown progress bar using setTimeout/setInterval
    ├── Answers.jsx       # Shuffled answer buttons with visual feedback
    └── Summary.jsx       # Results screen with stats and answer breakdown
```

## How It Works

1. `Quiz` manages the array of user answers — its length determines the current question
2. `Question` renders a `QuizTimer` and `Answers` for the active question, handling a three-phase answer flow: selected → correct/wrong → next question
3. `QuizTimer` runs a countdown and triggers a skip when time runs out
4. `Answers` shuffles the options once and highlights the selected answer with color-coded feedback
5. `Summary` displays percentages for skipped/correct/wrong answers and lists each question with the user's response

## Getting Started

```bash
npm install
npm run dev
```
