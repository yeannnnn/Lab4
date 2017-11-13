// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
'use strict';
const showImages = () => {

    const ele = document.querySelector("#pictures");

    fetch("images.html").then((response) => {

        return response.text();

    }).then((data) => {

        ele.innerHTML = data;
        console.log(data);

    }).catch(err => {
        console.log(err);
    });
};

showImages();