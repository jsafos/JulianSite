let topButton = document.getElementById("to-top-button")

//show button once user scrolls past 20px from top of document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


function navClickOpen(){
    let buttonCode = document.querySelector(".nav-bar2");
    buttonCode.innerHTML = `
    
        <ul class="nav-bar-list">

        <button class="js-nav-button nav-x fa-solid fa-x" onclick="navClickClose()"></button>

        <li class="active">
            <a href="#intro" >
                <span class="nav-bar-option"> Home </span>
            </a>
        </li>

                        
        <li class="active">
            <a href="#about" >
                <span class="nav-bar-option"> About </span>
            </a>
        </li>

                        
        <li class="active">
            <a href="#resume" >
                <span class="nav-bar-option"> Resume </span>
            </a>
        </li>


                        
        <li class="active">
            <a href="#projects" >
                <span class="nav-bar-option"> Portfolio </span>
            </a>
        </li>

                        
        <li class="active">
            <a href="#footer" >
                <span class="nav-bar-option"> Contact </span>
            </a>
        </li>

        </ul>    
    `;

    console.log("CLicked Hamburger")
}


function navClickClose(){
    let buttonCode = document.querySelector(".nav-bar2");
    buttonCode.innerHTML = `<button class="js-nav-button nav-hambuger fa-solid fa-bars" onclick="navClickOpen()"></button>`;
}



function popup2(d){
    let project = d.getAttribute('data-name');

    console.log(project);


    let previewContainer = document.querySelector('.modals');
    let previewBox = previewContainer.querySelectorAll('.modal-project');
    console.log("ALL modal", previewBox)

    previewContainer.style.display = 'flex';


    previewBox.forEach(preview => {
        console.log("Each modal", preview);

        let target = preview.getAttribute('data-target');
        console.log(target);
        if (project == target){
            preview.classList.add('active')
        }

     });
}

function closepopup(){
    let previewContainer = document.querySelector('.modals');
    let previewBox = previewContainer.querySelectorAll('.modal-project');
    previewContainer.style.display = 'none';
    previewBox.forEach(preview => {
        preview.classList.remove('active');
    });
}


