document.addEventListener("DOMContentLoaded", () => {

    const container =
        document.querySelector(".popup-container");

    const shieldWrapper =
        document.getElementById("shield");

    const statusIndicator =
        document.getElementById("status-card");

    const statusMessage =
        document.getElementById("status-message");

    const protectionTitle =
        document.getElementById("protection-title");

    const toggleButton =
        document.getElementById("toggle-protection");

    const buttonText =
        document.getElementById("button-text");

    const refreshButton =
        document.getElementById("refresh-button");


    let isProtectionActive = true;


    /* =====================================================
       LOAD PROTECTION STATE
       ===================================================== */

    chrome.storage.local.get(
        ["protectionActive"],
        (result) => {

            isProtectionActive =
                result.protectionActive !== undefined
                    ? result.protectionActive
                    : true;

            updateUI();
        }
    );


    /* =====================================================
       UPDATE UI
       ===================================================== */

    function updateUI() {

        if (isProtectionActive) {

            container.classList.remove("inactive");

            protectionTitle.textContent =
                "PROTECTED";

            statusMessage.textContent =
                "Real-time web protection is active";

            statusIndicator.textContent =
                "SECURE";

            buttonText.textContent =
                "STOP PROTECTION";

        } else {

            container.classList.add("inactive");

            protectionTitle.textContent =
                "PROTECTION OFF";

            statusMessage.textContent =
                "Real-time web protection is inactive";

            statusIndicator.textContent =
                "PAUSED";

            buttonText.textContent =
                "START PROTECTION";
        }
    }


    /* =====================================================
       TOGGLE PROTECTION
       ===================================================== */

    toggleButton.addEventListener(
        "click",
        async () => {

            isProtectionActive =
                !isProtectionActive;

            await chrome.storage.local.set({
                protectionActive:
                    isProtectionActive
            });

            updateUI();

        }
    );


    /* =====================================================
       REFRESH
       ===================================================== */

    refreshButton.addEventListener(
        "click",
        () => {

            refreshButton.style.transform =
                "scale(0.96)";

            setTimeout(() => {

                refreshButton.style.transform =
                    "";

            }, 120);

            chrome.storage.local.get(
                ["protectionActive"],
                (result) => {

                    isProtectionActive =
                        result.protectionActive !== undefined
                            ? result.protectionActive
                            : true;

                    updateUI();
                }
            );
        }
    );


    /* =====================================================
       3D MOUSE TILT
       ===================================================== */

    document.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                container.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) / centerX) * 2.5;

            const rotateX =
                ((centerY - y) / centerY) * 2.5;


            container.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;


            const shieldX =
                ((x - centerX) / centerX) * 5;

            const shieldY =
                ((y - centerY) / centerY) * 5;


            shieldWrapper.style.transform =
                `translate(${shieldX}px, ${shieldY}px)`;
        }
    );


    /* =====================================================
       RESET 3D POSITION
       ===================================================== */

    document.addEventListener(
        "mouseleave",
        () => {

            container.style.transform =
                "perspective(900px) rotateX(0deg) rotateY(0deg)";

            shieldWrapper.style.transform =
                "translate(0, 0)";
        }
    );

});