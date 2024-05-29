const refs = {
    menuBtn: document.querySelector('.open-menu-btn'),
}

refs.menuBtn.addEventListener('click', openModal);

function openModal() {
    const instance = basicLightbox.create(`
        <div class="modal">
                <button class="close-modal-btn">
                <svg class="open-menu-icon" width="24" height="24" aria-label="icon open menu">
                    <use href="./img/icon.svg#icon-open-menu"></use>
                </svg>
            </button>
            <ul class="menu-mobile">
                        <li class="menu-item-mobile">
                            <a  class="menu-link-mobile" href="#services">Послуги</a>
                        </li>
                        <li class="menu-item-mobile">
                            <a class="menu-link-mobile" href="#QandA">Питання відповіді</a>
                        </li>
                        <li class="menu-item-mobile">
                            <a class="menu-link-mobile" href="">Відгуки</a>
                        </li>
                    </ul>
                                    <div class="social-list-container">
                    <ul class="social-list">
                        <li class="social-list-item">
                            <a href="https://www.instagram.com/olga.semko_design/?igsh=MTA0bDc3eDJiZ2Nuag%3D%3D&utm_source=qr" target="_blank" class="social-link">
                                <svg class="social-icon" width="16" height="16" aria-label="instagram icon">
                                    <use href="./img/icon.svg#icon-instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social-list-item">
                            <a href="https://t.me/OlgaOSemko" target="_blank"
                                class="social-link">
                                <svg class="social-icon" width="16" height="16" aria-label="telegram icon">
                                    <use href="./img/icon.svg#icon-subscrybe"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social-list-item">
                            <a href="mailto:osemko13@gmail.com"
                                class="social-link">
                                <svg class="social-icon" width="28" height="28" aria-label="instagram icon">
                                    <use href="./img/icon.svg#icon-email"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>  
                </div>
            
        </div>
    `, {
        onShow: (instance) => {
            instance.element().querySelector('.close-modal-btn').onclick = instance.close;
            instance.element().onclick = (event) => {
                if (event.target === instance.element()) {
                    instance.close();
                }
            };
        }
    });

    instance.show();
}
