const ratings = document.querySelectorAll(".ratings div");
const submit = document.querySelector(".submit button");

ratings.forEach(rating => {
    rating.addEventListener('click', () => {

        ratings.forEach(rating => {
            rating.classList.remove("active");
        });

        rating.classList.add("active");

        submit.addEventListener('click', () => {
            document.querySelector('.rating-container').classList.add("none");
            document.querySelector('.thanks-container').classList.remove("none");
            document.querySelector("#selection").innerHTML = rating.innerHTML;
        });
        
    });
});
