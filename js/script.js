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

// 처음 화면이 MUJI라서, VIEW PROJECT 기본 링크도 MUJI로 연결


bread_btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        project_title.textContent = btn.dataset.title;
        project_img.src = btn.dataset.img;
        project_desc.textContent = btn.dataset.desc;
        project_link.href = btn.dataset.link;
        project_screen_box.scrollTop = 0;

        setTimeout(function () {
            const projectTop = project_preview.offsetTop;

            window.scrollTo({
                top: projectTop,
                behavior: "smooth"
            });
        }, 100);
    });
});
    /* footer */

    /* footer */

    const footerItems = document.querySelectorAll('footer .bread, footer .ccamdoll_king');

    footerItems.forEach(function (item) {
        let moveX = 0;
        let moveY = 0;
        let isDragging = false;

        item.addEventListener('click', function (e) {
            e.preventDefault();
        });

        item.addEventListener('pointerdown', function (e) {
            e.preventDefault();

            isDragging = true;
            item.classList.add('is_dragging');

            const startMouseX = e.clientX;
            const startMouseY = e.clientY;

            const startMoveX = moveX;
            const startMoveY = moveY;

            item.setPointerCapture(e.pointerId);

            item.addEventListener('pointermove', dragMove);
            item.addEventListener('pointerup', dragEnd);
            item.addEventListener('pointercancel', dragEnd);

            function dragMove(e) {
                if (!isDragging) return;

                moveX = startMoveX + e.clientX - startMouseX;
                moveY = startMoveY + e.clientY - startMouseY;

                item.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }

            function dragEnd() {
                isDragging = false;
                item.classList.remove('is_dragging');

                /* 놓으면 아래로 툭 떨어짐 */
                moveY = moveY + 80;

                item.style.transform = `translate(${moveX}px, ${moveY}px)`;

                item.removeEventListener('pointermove', dragMove);
                item.removeEventListener('pointerup', dragEnd);
                item.removeEventListener('pointercancel', dragEnd);
            }
        });
    });




















});