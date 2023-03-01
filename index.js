console.log('hello')
let file = ''
const copyCode = document.querySelector('.go-btn')
const imageContainer = document.querySelector('.image-container')
const fileUpload = document.getElementById('file')
const fileUploadBtn = document.querySelector('.label')
const img = document.querySelector('.person-img')
const textToCopy = 
    `
        ------------
            HTML
        ------------
        <!-- Change the image with your own -->

            <div class="person">
                <div class="person-container">
                    <div class="person-circle"></div>
                    <img class="person-img" src="your transparent image" alt="an image to be popped up">
                </div>
            </div>

        
        ------------
            CSS
        ------------

        
            .person {
                position: relative;
                max-width: 13rem;
            }
            .person-container {
                aspect-ratio: 1/1.15;
                display: grid;
                align-items: end;
                border-radius: 0 0 100vw 100vw;
                overflow: hidden;
                transition: transform 200ms ease-in-out;
            }
            .person-img {
                position: relative;
                z-index: 2;
                transform: scale(1.4);
                transition: transform 250ms ease-in-out;
            }
            .person-container:hover {
                transform: scale(1.05);
            }
            .person-container:hover .person-img {
                transform: scale(1.5) translateY(-1rem);
            }
            img {
                max-width: 100%;
                display: block;
            }
            .person-circle {
                position: absolute;
                background-color: rgb(255, 136, 0);
                display: inline-block;
                aspect-ratio: 1/1;
                width: 100%;
                bottom: 0;
                inset: auto 0 0;
                margin-inline: auto;
                border-radius: 50%;   
}
    `



    function copy() {
        
        navigator.clipboard.writeText(textToCopy);
      
        alert('The HTML & CSS of the hover effect is copied to your clipboard');
      }


    window.addEventListener('load', function() {
        fileUpload.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                
                img.onload = () => {
                    URL.revokeObjectURL(img.src);  // no longer needed, free memory
                }
      
                img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            }
        });
      });


copyCode.addEventListener('click', () => {
    copy()
})












