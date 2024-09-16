function updateImagesBasedOnWindowSize() {
    const
        headerBg = document.getElementById('header');
    nightCity1 = document.getElementById("night-city-1");
    nightCity2 = document.getElementById("night-city-2");
    nightCity3 = document.getElementById("night-city-3");
    saleTopLine = document.getElementById("sale-bg-top");
    hpTopLine = document.getElementById("hp-top-line");
    saleIcon = document.getElementById("sale");

    if (window.innerWidth <= 625) {
        const mobileImages = [
            "url(./images/mobile/main-bg-2.png)",
            "url(./images/mobile/main-bg-3.png)",
            "url(./images/mobile/main-bg-1.png)"
        ];

        let currentIndex = 0;

        function changeBackground() {
            headerBg.style.backgroundImage = mobileImages[currentIndex];
            currentIndex = (currentIndex + 1) % mobileImages.length;
        }

        setInterval(changeBackground, 4500);

        nightCity1.setAttribute("src", "images/mobile/night-city-1.png");
        nightCity2.setAttribute("src", "images/mobile/night-city-2.png");
        nightCity3.setAttribute("src", "images/mobile/night-city-3.png");
        saleTopLine.setAttribute("src", "images/mobile/sale-bg-top.png");
        hpTopLine.setAttribute("src", "images/mobile/hp-bg-top.png");
        saleIcon.setAttribute("src", "images/mobile/sale.png");


    }
    else if (window.innerWidth <= 1024) {
        const laptopImages = [
            "url(./images/laptop/main-bg-2.png)",
            "url(./images/laptop/main-bg-3.png)",
            "url(./images/laptop/main-bg-1.png)"
        ];

        let currentIndex = 0;

        function changeBackground() {
            headerBg.style.backgroundImage = laptopImages[currentIndex];
            currentIndex = (currentIndex + 1) % laptopImages.length;
        }

        setInterval(changeBackground, 4500);

        nightCity1.setAttribute("src", "images/laptop/night-city-1.png");
        nightCity2.setAttribute("src", "images/laptop/night-city-2.png");
        nightCity3.setAttribute("src", "images/laptop/night-city-3.png");
        saleTopLine.setAttribute("src", "images/desktop/sale-bg-top.png");
        hpTopLine.setAttribute("src", "images/desktop/hp-bg-top.png");
        saleIcon.setAttribute("src", "images/desktop/sale.png");

    }
    else {
        const desktopImages = [
            "url(./images/desktop/main-bg-2.jpg)",
            "url(./images/desktop/main-bg-3.jpg)",
            "url(./images/desktop/main-bg-1.jpg)"
        ];

        let currentIndex = 0;

        function changeBackground() {
            headerBg.style.backgroundImage = desktopImages[currentIndex];
            currentIndex = (currentIndex + 1) % desktopImages.length;
        }

        setInterval(changeBackground, 4500);

        nightCity1.setAttribute("src", "images/desktop/night-city-1.jpg");
        nightCity2.setAttribute("src", "images/desktop/night-city-2.jpg");
        nightCity3.setAttribute("src", "images/desktop/night-city-3.jpg");
        saleTopLine.setAttribute("src", "images/desktop/sale-bg-top.png");
        hpTopLine.setAttribute("src", "images/desktop/hp-bg-top.png");
        saleIcon.setAttribute("src", "images/desktop/sale.png");

    }
}

updateImagesBasedOnWindowSize();

window.addEventListener('resize', updateImagesBasedOnWindowSize);