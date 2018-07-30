class Tour {
    constructor(name) {
        this.name = name;
        this.steps = [];
        this.box;
        
        this.titleBackground = "#E0E0E0";
        this.background = "#F3F3F3";
        this.accentColor = "#0EA3C4";
        this.borderRadius = "5px";
        
    }
    
    style(info = {}) {
        if (info.titleBackground != undefined) {
            this.titleBackground = info.titleBackground;   
        }
        if (info.background != undefined) {
            this.background = info.background;   
        }
        if (info.accentColor != undefined) {
            this.accentColor = info.accentColor;   
        }
        if (info.borderRadius != undefined) {
            this.borderRadius = info.borderRadius;   
        }
    }
    
    addStep(name, info = {}) {
        var step = new Step(name, info.title, info.text, info.hook, info.timer, info.onShow, info.onHide, info.buttons, info.links);
        this.steps.push(step);
        
//        alert(this.steps[0].name);
    }
    
    start() {
        var length = this.steps.length;
        this.show(0);
    }
    
    next() {
        this.remove();
        this.show(this.currentStep + 1);
    }
    
    previous() {
        this.remove();
        this.show(this.currentStep - 1);
    }
    
    stop() {
        this.remove();
        this.currentStep = 0;
    }
    
    pause() {
        this.remove();
    }
    
    resume() {
        this.show(this.currentStep);
    }
    
    remove() {
        // Animation
        var box = this.box;
        var self = this;
        $(this.box).animate({
            marginTop: "50px",
            opacity: "0"
        }, 300, function() {
            box.remove();
        });
        
        if (this.steps[this.currentStep].onHide != undefined) {
            this.steps[this.currentStep].onHide();
        }
    }
    
    show(stepIndex) {
        
        $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        };
        
        if (!$(this.steps[stepIndex].hook).isInViewport()) {
            $('html,body').animate({scrollTop: $(this.steps[stepIndex].hook).offset().top},'slow');
        };
        
        this.currentStep = stepIndex;
        var hook = this.steps[stepIndex].hook;
        
        this.box = $("<div class='tour'></div>");
        var titleContainer = $("<div class='titleContainer'></div>");
        var mainContainer = $("<div class='mainContainer'></div>");
        var actionContainer = $("<div class='actionContainer'></div>");
        var arrow = $("<div class='tour-arrow'></div>");
        
        $(hook).append(this.box);
        $(this.box).append(arrow);
        $(this.box).append(titleContainer);
        $(titleContainer).append("<h3>" + this.steps[stepIndex].title + "</h3>");
        $(this.box).append(mainContainer);
        $(mainContainer).append("<p>" + this.steps[stepIndex].text + "</p>");
        $(this.box).append(actionContainer);
        
        for (var i = 0; i < this.steps[stepIndex].links.length; i++) {
            $(actionContainer).append("<a href='" + this.steps[stepIndex].links[i].href + "'>" + this.steps[stepIndex].links[i].text + "</a>");
        }
        
        for (var i = 0; i < this.steps[stepIndex].buttons.length; i++) {
            $(actionContainer).append("<button onclick='" + this.steps[stepIndex].buttons[i].action + "'>" + this.steps[stepIndex].buttons[i].text + "</button>");
        }
        
        // Set custom styles
        document.body.style.setProperty('--TourTitleBackground', this.titleBackground);
        
        document.body.style.setProperty('--TourBackground', this.background);
        
        document.body.style.setProperty('--TourAccent', this.accentColor);
        
        document.body.style.setProperty('--TourBorderRadius', this.borderRadius);

        // Animation
        $(this.box).animate({
            marginTop: "15px",
            opacity: "1"
        }, 300);
        
        var self = this;
        
        if (this.steps[stepIndex].timer != undefined) {
            setTimeout(function() {
                self.next();
            }, this.steps[stepIndex].timer);
        }
        
        if (this.steps[stepIndex].onShow != undefined) {
            this.steps[stepIndex].onShow();
        }
    }
    
}

class Step {
    constructor(name, title, text, hook, timer, onShow, onHide, buttons, links) {
        this.name = name;
        this.title = title;
        this.text = text;
        this.hook = hook;
        this.timer = timer;
        this.onShow = onShow;
        this.onHide = onHide;
        this.buttons = buttons;
        this.links = links;
    }
}