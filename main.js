const signinBtnlink = document.querySelector(".signinBtn-link");
const signupBtnlink = document.querySelector(".signupBtn-link");
const wrapper = document.querySelector(".wrapper");

signinBtnlink.addEventListener("click" , () => {
    wrapper.classList.toggle("active");
});
signupBtnlink.addEventListener("click" , () => {
    wrapper.classList.toggle("active");
});