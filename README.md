# link:- https://666858b723191d0412c8b699--admirable-gumdrop-c8ea72.netlify.app/#

# Description: \textbf{YouTube Web App} is a feature-rich, dynamic application built with \textbf{React and Redux}, leveraging the power of\textbf{ YouTube APIs}. Providing a seamless user experience for browsing, searching, and watching YouTube videos. With a responsive design and intuitive interface, the app enables users to easily explore \textbf{trending videos}, manage their \\ \textbf{live chat , Performant Search Bar and nested comments}. Enhanced with Redux for efficient state management, it ensures fast, reliable performance and a smooth, engaging user experience..#



## Notes:-


# Layout:-
0. MAIN CONTAINER => HEAD + BODY
1. HEAD COMPONENT
2. BODY COMPONENT 
    HAMBURGER MENU
    FILTER BUTTONS
    VIDEO COMPONENT/ WATCH COMPONENT/ SEARCH VIDEO COMPONENT
3. DEMO 1 AND DEMO 2 AS INFFOMATION OF HOOKS.


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

3. Performance 
    iphone pro max = 14 letter * 1000 = 14000
    with debouncing = 3 API calls * 1000 = 3000 



## Header Component/ Search suggestion/ Debouncing:-

* When search - i
* render the component
* useEffect();
* start timer => make api call after 200ms

* when search - ip
* destroy the component (useEffect return method) => after every re-render
* re-render the component
* useEffect()
* Start timer => make api call after 200ms


## ...action.payload => javascript es6 spread operator..


## Store search cache:-
1. We will store our all api results in redux store so that our api will not call again and again on every backspace.





## All Features of in this app :-
1. Dynamic Search Videos
2. Live Search Suggestion
3. Live Youtube Videos API
4. Redux Store/ Redux Toolkit
5. Infinite Video Scrolling
6. Video Playing
7. Nested Comments
8. Live Chat Messages in Live Video.
9. React Router Dom
10. Tailwind css
11. Api Polling



## useMemo
1. Used to cache the result of calculations between the re-render to increase th performance of our app.
2. IF our compoent has some heavy operations and our component performing the heavy operations on very re-render then it will slow down our app.
3. synatx const prime = useMemo(()=>{},dependencies)
4. It takes an call back function and a dependencies and returns a value.
5. example see demo1.js
6. on every re-render the function in useMemo will not be called untill its dependency changes.


## useCallBack
1. Used to cache the function definition between the re-render to increase th performance of our app.
2. IF our compoent has some heavy functions definition and our component calling that the heavy functions definition on very re-render then it will slow down our app.
3. synatx const prime = useCallb(function,dependencies)
4. It takes function and  a dependencies and it returns a function.

## useRef
1. useRef is a React Hook that lets you reference a value that’s not needed for rendering.

2. syntax : const ref = useRef(initialValue)

3. returns an ref object with single property.
        eg ref {
            current:initialvalue
           }
4. On the next renders, useRef will return the same object. 
