function openPage(pageID){


    let pages = document.querySelectorAll(".page");


    pages.forEach(page=>{

        page.classList.remove("active");

    });



    let target =
    document.getElementById(pageID);


    if(target){

        target.classList.add("active");

    }


}
