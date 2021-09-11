const body = document.querySelector("body");
const profilePic = document.querySelector(".nav-user-icon");
const settingMenu = document.querySelector(".setting-menu");
const darkBtn = document.querySelector("#dark-btn");
const activityLike = document.querySelector(".activity-icons .like");
const activitySave = document.querySelector(".post-row .save");
const postLike = document.querySelector(".likes i");
const post = document.querySelector(".likes img");

profilePic.addEventListener("click",()=>{
    settingMenu.classList.toggle("active");
});

darkBtn.addEventListener("click", ()=>{
    darkBtn.classList.toggle("active-mode");
    body.classList.toggle(
        "dark-theme"
    );
})

activityLike.addEventListener("click", ()=>{
    if(activityLike.classList.contains("far")) {
        activityLike.classList.remove("far");
        activityLike.classList.add("fas");
        postLike.classList.add("like");
        setTimeout(function(){
            postLike.style.visibility= "hidden"; 
           }, 500);
    }
    else{
        activityLike.classList.remove("fas");
        activityLike.classList.add("far");
        postLike.classList.remove("like");
    } 
})

activitySave.addEventListener("click",()=>{
    if(activitySave.classList.contains("far")) {
        activitySave.classList.remove("far");
        activitySave.classList.add("fas");
    }
    else{
        activitySave.classList.remove("fas");
        activitySave.classList.add("far");
    }
})

post.addEventListener("dblclick",()=>{
    if(activityLike.classList.contains("far")) {
        activityLike.classList.remove("far");
        activityLike.classList.add("fas");
        postLike.classList.add("like");
        setTimeout(function(){
            postLike.style.visibility= "hidden"; 
           }, 500);
    }
    else{
        activityLike.classList.remove("fas");
        activityLike.classList.add("far");
        postLike.classList.remove("like");
    }
})