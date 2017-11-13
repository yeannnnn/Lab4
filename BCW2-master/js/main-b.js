// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.
'use strict';
const showImages = (ele,url) =>{
    const ul = document.querySelector(ele);
    fetch(url).then(response =>{
        return response.json();
    }).then(json =>{
        let content = "";
        json.forEach((image) => {
            content +=
                `<li>
                    <figure>
                        <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
                    <figcaption>
                        <h3>${image.mediaTitle}</h3>
                    </figcaption>
                  </figure>
                </li>`
        });
        ul.innerHTML = content;
    });
};
showImages("#pictures","images.json");