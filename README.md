[website]: https://bastiaan225.github.io/TourJS/

# TourJS
Tour.JS is a javascript library for guiding users through your app.

Go for documentation, feature list and demp to my [website][website].

<p align="center">
    <a href="https://bastiaan225.github.io/TourJS/">
        <img src="https://github.com/Bastiaan225/TourJS/blob/master/IMAGES/tour-container-grouped.png">
    </a>
</p>

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

*Default:*
```html
<link rel="stylesheet" href="https://Bastiaan225.github.io/TourJS/frameworks/Tour/tour-default.css">
```
![Default Theme](https://github.com/Bastiaan225/TourJS/blob/master/IMAGES/tour-default.png)

*Dark:*
```html
<link rel="stylesheet" href="https://Bastiaan225.github.io/TourJS/frameworks/Tour/tour-dark.css">           
```
![Default Theme](https://github.com/Bastiaan225/TourJS/blob/master/IMAGES/tour-dark.png)

You can also create your own theme, edit a theme via Javascript and edit specific steps via CSS with the step name!

**Usage**
---
```javascript
const tour = new Tour("Name");
```

*Simple Step:*
```javascript
tour.addStep("first", {
    title: "The Beginning",
    text: "Hello, welcome to the tour! In this container you can explain the user what he or she can do.",
    hook: ".container",
    buttons: [
        {
            text: "Previous",
            action: "tour.previous()"
        },
        {
            text: "Start",
            action: "tour.next()"
        }
    ]
});
           
```

*Advanced Step:*
```javascript
tour.addStep('userInfo', {
    title: "User Info",
    text: "In this container you can explain the user what he or she can do.",
    hook: ".user_info",
    timer: 5000,
    onShow: function() {
        // Custom Function
    },
    onHide: function() {
        // Custom Function
    },
    buttons: [
        {
            text: "Previous",
            action: "tour.previous()"
        },
        {
            text: "Next",
            action: "tour.next()"
        }
    ],
    links: [
        {
            text: "More info?",
            href: "info.html"
        }
    ]
});
```

**Styling**
---
```javascript
tour.style({
    titleBackground: "#E0E0E0",
    background: "#F3F3F3",
    accentColor: "#0EA3C4",
    borderRadius: "5px"
});
```

[Full Documentation](https://bastiaan225.github.io/TourJS/documentation.html)

[Website and Demo][website]

**Licence**
---
[MIT Licence](https://github.com/Bastiaan225/TourJS/blob/master/LICENSE)
