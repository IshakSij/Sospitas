const   forms = document.querySelector('.forms'),
    pwShowHide = document.querySelector('.eye-icon'),
    links = document.querySelector('.eye-icon');

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.text = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide")
        })
    })

})

links.forEach(link => {
    link.addEventListener("click", e =>{
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup")
    })
})