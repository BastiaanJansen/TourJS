# TourJS
Tour.JS is a javascript library for guiding users through your app.

Go for documentation and feature list to my [website](https://bastiaan225.github.io/TourJS/)

**Install**
---
To get started with Tour.JS, you just need to include Tour.JS, jQuery and a tour theme to your project.
```javascript
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

```javascript
<script src="https://Bastiaan225.github.io/TourJS/frameworks/Tour/tour.js"></script>
```

**Themes**

After you have included the library, you must include one of the tour themes.

*Default*
```html
<link rel="stylesheet" href="https://Bastiaan225.github.io/TourJS/frameworks/Tour/tour-default.css">
```

*Dark*
```html
<link rel="stylesheet" href="https://Bastiaan225.github.io/TourJS/frameworks/Tour/tour-dark.css">           
```

**Usage**
---
```javascript
const tour = new Tour("Name");
```

```javascript
tour.addStep("first", {
    title: "The Beginning",
    text: "Hello, welcome to the tour! In this container you can explain the user what he or she can do.",
    hook: ".container",
    buttons: [
        {
            text: "Stop",
            action: "tour.stop()"
        },
        {
            text: "Start",
            action: "tour.next()"
        }
    ]
});
           
```

[Full Documentation](https://bastiaan225.github.io/TourJS/documentation.html)

[Website](https://bastiaan225.github.io/TourJS/)

**Licence**
---
[MIT Licence](https://github.com/Bastiaan225/TourJS/blob/master/LICENSE)
