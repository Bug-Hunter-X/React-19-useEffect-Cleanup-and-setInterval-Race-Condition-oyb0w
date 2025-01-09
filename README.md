# React 19 useEffect Cleanup and setInterval Race Condition

This repository demonstrates a common error involving `useEffect` cleanup and `setInterval` in React 19, leading to potential race conditions and memory leaks.  The example showcases the issue and provides a corrected solution.

## Problem

The original code incorrectly handles the clearing of a `setInterval`.  If the component unmounts before `clearInterval` is called, the interval continues to run, leading to potential memory leaks and unexpected behavior. 

## Solution

The solution uses `useRef` to store the interval ID, ensuring that the correct interval is cleared even if the component re-renders or unmounts quickly.

## How to run the example:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm start`.

Observe the behavior of both the buggy and the fixed versions of the component.