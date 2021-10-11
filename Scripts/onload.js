function loadFunction(){
    setTimeout(revealBody(), 3000);
};

function revealBody(){
    let loader = document.querySelector(".loader");
    loader.className += " hidden";
}