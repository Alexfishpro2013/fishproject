function preloader(){
    setTimeout(() => {
    const block1 = document.getElementById("preloader")
    const block2 = document.getElementById("veryscared")

    block1.style.display = "none";
    block2.style.display = "block";

    setTimeout(() => {
        const block1 = document.getElementById("veryscared")
        const block2 = document.getElementById("main")

        block1.style.display = "none";
        block2.style.display = "block";       
    }, 1000)
    },5000)
}