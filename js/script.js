document.addEventListener('DOMContentLoaded', function () {

    const whatI = document.querySelector('.what_i');

    if (whatI) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    whatI.classList.add('on');
                } else {
                    whatI.classList.remove('on');
                }
            });
        }, {
            threshold: 0.35
        });

        observer.observe(whatI);
    }


    // 프로젝트 클릭 데이터

    const bread_btns = document.querySelectorAll(".bread_btn");

    const project_title = document.querySelector("#project_title");
    const project_img = document.querySelector("#project_img");
    const project_desc = document.querySelector("#project_desc");
    const project_link = document.querySelector("#project_link");
    const project_preview = document.querySelector("#project_preview");
    const project_screen_box = document.querySelector(".project_screen_box");

    bread_btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            project_title.textContent = btn.dataset.title;
            project_img.src = btn.dataset.img;
            project_desc.textContent = btn.dataset.desc;
            project_link.href = btn.dataset.link;
            project_screen_box.scrollTop = 0;

            project_preview.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

});