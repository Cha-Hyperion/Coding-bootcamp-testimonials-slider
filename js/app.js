import customers from './data.js';
var app = {
    previous: document.querySelector('.previous'),
    next: document.querySelector('.next'),
    number: 0,
    text: document.querySelector('.author__testimonial'),
    name: document.querySelector('.author__name'),
    job: document.querySelector('.author__job'),
    image: document.querySelector('.image'),


    init: function() {
        app.addActionsEventListeners();
    },

    addActionsEventListeners: function() {
            app.previous.addEventListener('click', app.numberAfterPrevious);
            app.next.addEventListener('click', app.numberAfterNext);  
    },

    numberAfterPrevious: function() {
        if (app.number > 0 ) {
            app.number -= 1;
            app.showTestimonial();
        }   
    },

    numberAfterNext: function() {
        if ( app.number < (customers.length - 1)) {
            app.number += 1;
            app.showTestimonial();
        }
    },

    showTestimonial: function() {
            let currentTestimonial = customers[app.number];
            app.text.innerHTML = currentTestimonial['testimonial'];
            app.name.innerHTML = currentTestimonial['name'];
            app.job.innerHTML = currentTestimonial['job'];
            let srcdata = customers[app.number]['image'];
            app.image.setAttribute("src", srcdata);
    },
};
  
export default app;