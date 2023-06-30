// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later


function closeModal() {
    let modalElements = document.getElementsByClassName("modalClose");
  
    if (modalElements.length > 0) {
        let bootstrapModal = bootstrap.Modal.getInstance(modalElements[0]);
    
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
    }
}
  

function deActiveBiggerImages(){
        let windowWidth = window.innerWidth;
        let btns = document.querySelectorAll("#btn-img-open");

        if (windowWidth < 992) {
            console.log("Window width is less than 992px");
            btns.forEach((e) => {
                e.setAttribute("data-bs-toggle", "");
                e.style.cursor = "default";
            })
            closeModal();
        }else{
            console.log("Window width is equal or greater than 992px");
            btns.forEach((e) => {
                e.setAttribute("data-bs-toggle", "modal");
                e.style.cursor = "pointer";
            })
        }
}          
window.addEventListener('resize', function() {
    deActiveBiggerImages();
});

