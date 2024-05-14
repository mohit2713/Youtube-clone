## Youtube Clone

## Notes:-

# Layout:-

1. HEAD COMPONENT
2. BODY COMPONENT
   HAMBURGER MENU
   FILTER BUTTONS
   VIDEO COMPONENT/ WATCH COMPONENT

# Teckstack

1. React
2. Tailwind
3. redux toolkit , react redux
4. react-router-dom

## Youtube Suggestion Search api

1. Every suggestion api uses `Debouncing`.

# if difference between 2 key strokes is <200ms - Decline api call.

# 200ms makes an api call

2.  typing slow = 200ms (flipcart)
    typing fast = 30ms (youyube)

3.  Performance
    iphone pro max = 14 letter _ 1000 = 14000
    with debouncing = 3 API calls _ 1000 = 3000

## Header Component/ Search suggestion/ Debouncing:-

- When search - i
- render the component
- useEffect();
- start timer => make api call after 200ms

- when search - ip
- destroy the component (useEffect return method) => after every re-render
- re-render the component
- useEffect()
- Start timer => make api call after 200ms

## ...action.payload => javascript es6 spread operator..

## Store search cache:-

1. We will store our all api results in redux store so that our api will not call again and again on every backspace.
