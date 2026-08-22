/* =========================================================
   COLORPICK
   MAIN COLOR PICKER SCRIPT
   =========================================================

   Features:
   - Light / Dark mode
   - Image upload
   - Drag & Drop
   - Image preview
   - Canvas color picker
   - Magnifier
   - HEX / RGB / HSL
   - Copy color values
   - My Palette
   - Remove colors
   - Clear palette
   - New Image
   - Safe file validation
   - Safe initialization
========================================================= */


/* =========================================================
   WAIT UNTIL THE PAGE IS READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeColorPick();

    }
);



/* =========================================================
   MAIN INITIALIZATION
========================================================= */

function initializeColorPick() {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const themeBtn =
        document.getElementById(
            "themeBtn"
        );


    const themeIcon =
        document.getElementById(
            "themeIcon"
        );


    const imageInput =
        document.getElementById(
            "imageInput"
        );


    const uploadBox =
        document.getElementById(
            "uploadBox"
        );


    const pickerSection =
        document.getElementById(
            "picker"
        );


    const canvas =
        document.getElementById(
            "canvas"
        );


    const colorPreview =
        document.getElementById(
            "colorPreview"
        );


    const hexValue =
        document.getElementById(
            "hexValue"
        );


    const rgbValue =
        document.getElementById(
            "rgbValue"
        );


    const hslValue =
        document.getElementById(
            "hslValue"
        );


    const magnifier =
        document.getElementById(
            "magnifier"
        );


    const magnifierColor =
        document.getElementById(
            "magnifierColor"
        );


    const addColorBtn =
        document.getElementById(
            "addColorBtn"
        );

    const colorDetailsBtn =
        document.getElementById(
            "colorDetailsBtn"
        );


    const palette =
        document.getElementById(
            "palette"
        );


    const clearPaletteBtn =
        document.getElementById(
            "clearPaletteBtn"
        );


    const newImageBtn =
        document.getElementById(
            "newImageBtn"
        );



    /* =====================================================
       CANVAS CONTEXT
    ===================================================== */

    let ctx = null;


    if (canvas) {

        ctx =
            canvas.getContext(
                "2d",
                {
                    willReadFrequently: true
                }
            );

    }



    /* =====================================================
       STATE
    ===================================================== */

    let selectedColor =
        "#FFFFFF";


    let myColors = [];


    let toastTimer =
        null;


    let currentImageLoaded =
        false;



    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!imageInput) {

        console.error(
            "ColorPick: #imageInput was not found."
        );

    }


    if (!uploadBox) {

        console.error(
            "ColorPick: #uploadBox was not found."
        );

    }


    if (!canvas) {

        console.error(
            "ColorPick: #canvas was not found."
        );

    }



    /* =====================================================
       THEME
    ===================================================== */

    function applyTheme(theme) {

        const isDark =
            theme === "dark";


        document.body.classList.toggle(
            "dark",
            isDark
        );

        document.documentElement.classList.remove(
            "dark-loading"
        );

        document.documentElement.style.colorScheme = isDark ? "dark" : "light";


        if (themeIcon) {

            themeIcon.textContent =
                isDark
                    ? "☀️"
                    : "🌙";

        }


        if (themeBtn) {

            themeBtn.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );


            themeBtn.setAttribute(
                "aria-pressed",
                isDark
                    ? "true"
                    : "false"
            );

        }

    }



    /* =====================================================
       LOAD SAVED THEME
    ===================================================== */

    let savedTheme =
        "light";


    try {

        savedTheme =
            localStorage.getItem(
                "colorpick-theme"
            ) || "light";

    }

    catch (error) {

        savedTheme =
            "light";

    }


    applyTheme(
        savedTheme === "dark"
            ? "dark"
            : "light"
    );



    /* =====================================================
       THEME BUTTON
    ===================================================== */

    if (themeBtn) {

        themeBtn.addEventListener(
            "click",
            function () {

                const isDark =
                    document.body.classList.contains(
                        "dark"
                    );


                const newTheme =
                    isDark
                        ? "light"
                        : "dark";


                try {

                    localStorage.setItem(
                        "colorpick-theme",
                        newTheme
                    );

                }

                catch (error) {

                    console.warn(
                        "Could not save theme.",
                        error
                    );

                }


                applyTheme(
                    newTheme
                );

            }
        );

    }



    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(
        message,
        color = null
    ) {

        let toast =
            document.getElementById(
                "colorToast"
            );


        if (!toast) {

            toast =
                document.createElement(
                    "div"
                );


            toast.id =
                "colorToast";


            toast.className =
                "color-toast";


            document.body.appendChild(
                toast
            );

        }


        toast.innerHTML = `

            <div class="toast-check">
                ✓
            </div>

            <div class="toast-content">

                <strong>
                    ${escapeHtml(message)}
                </strong>

                ${
                    color
                    ? `
                        <span>
                            ${escapeHtml(color)}
                        </span>
                      `
                    : ""
                }

            </div>

        `;


        toast.classList.remove(
            "show"
        );


        void toast.offsetWidth;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                2200
            );

    }



    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHtml(
        value
    ) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }



    /* =====================================================
       COPY TEXT
    ===================================================== */

    async function copyText(
        text,
        button = null
    ) {

        let copied =
            false;


        try {

            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {

                await navigator.clipboard.writeText(
                    text
                );


                copied =
                    true;

            }

        }

        catch (error) {

            copied =
                false;

        }


        if (!copied) {

            try {

                const textarea =
                    document.createElement(
                        "textarea"
                    );


                textarea.value =
                    text;


                textarea.style.position =
                    "fixed";


                textarea.style.left =
                    "-9999px";


                textarea.style.top =
                    "0";


                textarea.style.opacity =
                    "0";


                document.body.appendChild(
                    textarea
                );


                textarea.focus();


                textarea.select();


                copied =
                    document.execCommand(
                        "copy"
                    );


                textarea.remove();

            }

            catch (error) {

                copied =
                    false;

            }

        }


        if (copied) {

            if (button) {

                button.classList.add(
                    "copy-success"
                );


                button.innerHTML =
                    "✓";


                setTimeout(
                    function () {

                        button.classList.remove(
                            "copy-success"
                        );


                        button.innerHTML =
                            "📋";

                    },
                    1000
                );

            }


            showToast(
                "Your color is copied!",
                text
            );

        }

        else {

            showToast(
                "Could not copy the color."
            );

        }

    }



    /* =====================================================
       IMAGE INPUT
    ===================================================== */

    if (imageInput) {

        imageInput.addEventListener(
            "change",
            function (event) {

                const files =
                    event.target.files;


                if (
                    !files ||
                    files.length === 0
                ) {

                    return;

                }


                const file =
                    files[0];


                handleImageFile(
                    file
                );

            }
        );

    }



    /* =====================================================
       UPLOAD BOX CLICK
       
       This is intentionally explicit.
       It makes the entire upload area clickable
       even if the HTML label behavior is affected
       by another element/CSS rule.
    ===================================================== */

    if (uploadBox && imageInput) {

        uploadBox.addEventListener(
            "click",
            function (event) {

                /*
                 * If the user clicked a button/link
                 * inside the upload area, don't interfere.
                 */

                const target =
                    event.target;


                if (
                    target &&
                    (
                        target.tagName === "BUTTON" ||
                        target.tagName === "A"
                    )
                ) {

                    return;

                }


                imageInput.click();

            }
        );

    }



    /* =====================================================
       KEYBOARD ACCESS FOR UPLOAD BOX
    ===================================================== */

    if (uploadBox && imageInput) {

        uploadBox.setAttribute(
            "role",
            "button"
        );


        uploadBox.setAttribute(
            "tabindex",
            "0"
        );


        uploadBox.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();


                    imageInput.click();

                }

            }
        );

    }



    /* =====================================================
       HANDLE IMAGE FILE
    ===================================================== */

    function handleImageFile(
        file
    ) {

        if (!file) {

            return;

        }


        /*
         * Check MIME type.
         */

        if (
            !file.type ||
            !file.type.startsWith(
                "image/"
            )
        ) {

            showToast(
                "Please select an image file."
            );


            resetImageInput();


            return;

        }


        /*
         * Check file size.
         *
         * 50 MB maximum.
         */

        const maxFileSize =
            50 * 1024 * 1024;


        if (
            file.size >
            maxFileSize
        ) {

            showToast(
                "Image is too large. Maximum size is 50 MB."
            );


            resetImageInput();


            return;

        }


        showToast(
            "Loading image..."
        );


        loadImage(
            file
        );

    }



    /* =====================================================
       LOAD IMAGE
    ===================================================== */

    function loadImage(
        file
    ) {

        if (
            !file ||
            !canvas ||
            !ctx
        ) {

            return;

        }


        const reader =
            new FileReader();


        reader.onerror =
            function () {

                console.error(
                    "FileReader error:",
                    reader.error
                );


                showToast(
                    "Could not read this image."
                );

            };


        reader.onabort =
            function () {

                showToast(
                    "Image loading was cancelled."
                );

            };


        reader.onload =
            function (event) {

                const dataUrl =
                    event.target.result;


                if (!dataUrl) {

                    showToast(
                        "Could not load this image."
                    );


                    return;

                }


                const img =
                    new Image();


                img.onload =
                    function () {

                        try {

                            drawImageToCanvas(
                                img
                            );


                            currentImageLoaded =
                                true;


                            if (pickerSection) {

                                pickerSection.style.display =
                                    "block";

                            }


                            /*
                             * Clear the old magnifier.
                             */

                            if (magnifier) {

                                magnifier.style.display =
                                    "none";

                            }


                            /*
                             * Scroll to picker.
                             */

                            if (pickerSection) {

                                setTimeout(
                                    function () {

                                        pickerSection.scrollIntoView(
                                            {
                                                behavior:
                                                    "smooth",
                                                block:
                                                    "start"
                                            }
                                        );

                                    },
                                    100
                                );

                            }


                            showToast(
                                "Image loaded successfully."
                            );

                        }

                        catch (error) {

                            console.error(
                                "Error drawing image:",
                                error
                            );


                            showToast(
                                "Could not display this image."
                            );

                        }

                    };


                img.onerror =
                    function () {

                        console.error(
                            "Image decoding failed."
                        );


                        showToast(
                            "This image could not be opened."
                        );

                    };


                img.src =
                    dataUrl;

            };


        try {

            reader.readAsDataURL(
                file
            );

        }

        catch (error) {

            console.error(
                "Could not read image:",
                error
            );


            showToast(
                "Could not read this image."
            );

        }

    }



    /* =====================================================
       DRAW IMAGE TO CANVAS
    ===================================================== */

    function drawImageToCanvas(
        img
    ) {

        if (
            !canvas ||
            !ctx
        ) {

            return;

        }


        const maxWidth =
            1200;


        const maxHeight =
            900;


        let width =
            img.naturalWidth ||
            img.width;


        let height =
            img.naturalHeight ||
            img.height;


        if (
            !width ||
            !height
        ) {

            throw new Error(
                "Invalid image dimensions."
            );

        }


        /*
         * Keep the original ratio.
         */

        const widthRatio =
            maxWidth /
            width;


        const heightRatio =
            maxHeight /
            height;


        const ratio =
            Math.min(
                1,
                widthRatio,
                heightRatio
            );


        width =
            Math.round(
                width * ratio
            );


        height =
            Math.round(
                height * ratio
            );


        /*
         * Reset canvas completely.
         */

        canvas.width =
            width;


        canvas.height =
            height;


        /*
         * Clear previous image.
         */

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        /*
         * Draw image.
         */

        ctx.drawImage(
            img,
            0,
            0,
            width,
            height
        );

    }



    /* =====================================================
       DRAG OVER
    ===================================================== */

    if (uploadBox) {

        uploadBox.addEventListener(
            "dragover",
            function (event) {

                event.preventDefault();


                event.stopPropagation();


                uploadBox.classList.add(
                    "drag-active"
                );


                if (
                    event.dataTransfer
                ) {

                    event.dataTransfer.dropEffect =
                        "copy";

                }

            }
        );

    }



    /* =====================================================
       DRAG ENTER
    ===================================================== */

    if (uploadBox) {

        uploadBox.addEventListener(
            "dragenter",
            function (event) {

                event.preventDefault();


                event.stopPropagation();


                uploadBox.classList.add(
                    "drag-active"
                );

            }
        );

    }



    /* =====================================================
       DRAG LEAVE
    ===================================================== */

    if (uploadBox) {

        uploadBox.addEventListener(
            "dragleave",
            function (event) {

                event.preventDefault();


                /*
                 * Only remove when actually leaving
                 * the upload box.
                 */

                if (
                    event.relatedTarget &&
                    uploadBox.contains(
                        event.relatedTarget
                    )
                ) {

                    return;

                }


                uploadBox.classList.remove(
                    "drag-active"
                );

            }
        );

    }



    /* =====================================================
       DROP
    ===================================================== */

    if (uploadBox) {

        uploadBox.addEventListener(
            "drop",
            function (event) {

                event.preventDefault();


                event.stopPropagation();


                uploadBox.classList.remove(
                    "drag-active"
                );


                const files =
                    event.dataTransfer
                        ? event.dataTransfer.files
                        : null;


                if (
                    !files ||
                    files.length === 0
                ) {

                    return;

                }


                handleImageFile(
                    files[0]
                );

            }
        );

    }



    /* =====================================================
       CANVAS POSITION
    ===================================================== */

    function getCanvasPosition(
        event
    ) {

        if (!canvas) {

            return {
                x: 0,
                y: 0
            };

        }


        const rect =
            canvas.getBoundingClientRect();


        if (
            rect.width <= 0 ||
            rect.height <= 0 ||
            canvas.width <= 0 ||
            canvas.height <= 0
        ) {

            return {
                x: 0,
                y: 0
            };

        }


        const scaleX =
            canvas.width /
            rect.width;


        const scaleY =
            canvas.height /
            rect.height;


        let x =
            (
                event.clientX -
                rect.left
            ) * scaleX;


        let y =
            (
                event.clientY -
                rect.top
            ) * scaleY;


        x =
            Math.max(
                0,
                Math.min(
                    canvas.width - 1,
                    Math.floor(x)
                )
            );


        y =
            Math.max(
                0,
                Math.min(
                    canvas.height - 1,
                    Math.floor(y)
                )
            );


        return {
            x,
            y
        };

    }



    /* =====================================================
       PICK COLOR
    ===================================================== */

    if (canvas) {

        canvas.addEventListener(
            "click",
            function (event) {

                if (
                    !currentImageLoaded
                ) {

                    return;

                }


                if (!ctx) {

                    return;

                }


                const position =
                    getCanvasPosition(
                        event
                    );


                try {

                    const pixel =
                        ctx.getImageData(
                            position.x,
                            position.y,
                            1,
                            1
                        ).data;


                    updateColor(
                        pixel[0],
                        pixel[1],
                        pixel[2]
                    );

                }

                catch (error) {

                    console.error(
                        "Could not read canvas pixel:",
                        error
                    );

                }

            }
        );

    }



    /* =====================================================
       MAGNIFIER
    ===================================================== */

    if (canvas) {

        canvas.addEventListener(
            "mousemove",
            function (event) {

                if (
                    !currentImageLoaded ||
                    !ctx ||
                    !magnifier
                ) {

                    return;

                }


                const position =
                    getCanvasPosition(
                        event
                    );


                try {

                    const pixel =
                        ctx.getImageData(
                            position.x,
                            position.y,
                            1,
                            1
                        ).data;


                    const hex =
                        rgbToHex(
                            pixel[0],
                            pixel[1],
                            pixel[2]
                        );


                    magnifier.style.display =
                        "block";


                    /*
                     * Position relative to the
                     * canvas.
                     */

                    const rect =
                        canvas.getBoundingClientRect();


                    const mouseX =
                        event.clientX -
                        rect.left;


                    const mouseY =
                        event.clientY -
                        rect.top;


                    magnifier.style.left =
                        `${mouseX - 45}px`;


                    magnifier.style.top =
                        `${mouseY - 110}px`;


                    if (
                        magnifierColor
                    ) {

                        magnifierColor.style.background =
                            hex;

                    }

                }

                catch (error) {

                    /*
                     * Ignore temporary pixel
                     * read errors.
                     */

                }

            }
        );

    }



    /* =====================================================
       MAGNIFIER LEAVE
    ===================================================== */

    if (
        canvas &&
        magnifier
    ) {

        canvas.addEventListener(
            "mouseleave",
            function () {

                magnifier.style.display =
                    "none";

            }
        );

    }



    /* =====================================================
       UPDATE COLOR
    ===================================================== */

    function updateColor(
        r,
        g,
        b
    ) {

        const hex =
            rgbToHex(
                r,
                g,
                b
            );


        selectedColor =
            hex;


        if (colorPreview) {

            colorPreview.style.background =
                hex;


            colorPreview.innerHTML =
                "";

        }


        if (hexValue) {

            hexValue.value =
                hex;

        }


        if (rgbValue) {

            rgbValue.value =
                `rgb(${r}, ${g}, ${b})`;

        }


        if (hslValue) {

            hslValue.value =
                rgbToHsl(
                    r,
                    g,
                    b
                );

        }

        // Open a dedicated, shareable color-detail page.
        if (colorDetailsBtn) {
            colorDetailsBtn.href =
                "color-code.html?color=" +
                encodeURIComponent(hex.replace("#", ""));
        }

    }



    /* =====================================================
       RGB TO HEX
    ===================================================== */

    function rgbToHex(
        r,
        g,
        b
    ) {

        return (
            "#" +
            [r, g, b]
                .map(
                    function (value) {

                        return Math
                            .max(
                                0,
                                Math.min(
                                    255,
                                    Math.round(
                                        value
                                    )
                                )
                            )
                            .toString(16)
                            .padStart(
                                2,
                                "0"
                            );

                    }
                )
                .join("")
                .toUpperCase()
        );

    }



    /* =====================================================
       RGB TO HSL
    ===================================================== */

    function rgbToHsl(
        r,
        g,
        b
    ) {

        r /= 255;
        g /= 255;
        b /= 255;


        const max =
            Math.max(
                r,
                g,
                b
            );


        const min =
            Math.min(
                r,
                g,
                b
            );


        let h =
            0;


        let s =
            0;


        const l =
            (
                max +
                min
            ) / 2;


        if (
            max !== min
        ) {

            const d =
                max -
                min;


            s =
                l > 0.5
                    ? d /
                      (
                          2 -
                          max -
                          min
                      )
                    : d /
                      (
                          max +
                          min
                      );


            switch (max) {

                case r:

                    h =
                        (
                            g -
                            b
                        ) / d +
                        (
                            g < b
                                ? 6
                                : 0
                        );

                    break;


                case g:

                    h =
                        (
                            b -
                            r
                        ) / d +
                        2;

                    break;


                case b:

                    h =
                        (
                            r -
                            g
                        ) / d +
                        4;

                    break;

            }


            h /= 6;

        }


        return (
            `hsl(${Math.round(h * 360)}, ` +
            `${Math.round(s * 100)}%, ` +
            `${Math.round(l * 100)}%)`
        );

    }



    /* =====================================================
       COPY BUTTONS
    ===================================================== */

    document
        .querySelectorAll(
            ".copy-btn"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const inputId =
                            button.dataset.copy;


                        if (!inputId) {

                            return;

                        }


                        const input =
                            document.getElementById(
                                inputId
                            );


                        if (!input) {

                            return;

                        }


                        copyText(
                            input.value,
                            button
                        );

                    }
                );

            }
        );



    /* =====================================================
       ADD TO MY PALETTE
    ===================================================== */

    if (addColorBtn) {

        addColorBtn.addEventListener(
            "click",
            function () {

                if (
                    !selectedColor
                ) {

                    showToast(
                        "Please pick a color first."
                    );


                    return;

                }


                /*
                 * Prevent duplicate colors.
                 */

                if (
                    myColors.includes(
                        selectedColor
                    )
                ) {

                    showToast(
                        "This color is already in your palette.",
                        selectedColor
                    );


                    return;

                }


                myColors.push(
                    selectedColor
                );


                renderMyPalette();


                addColorBtn.classList.add(
                    "button-success"
                );


                addColorBtn.innerHTML =
                    "✓ Color Added";


                setTimeout(
                    function () {

                        addColorBtn.classList.remove(
                            "button-success"
                        );


                        addColorBtn.innerHTML =
                            "+ Add to My Palette";

                    },
                    1200
                );


                showToast(
                    "Color added to your palette!",
                    selectedColor
                );

            }
        );

    }



    /* =====================================================
       RENDER MY PALETTE
    ===================================================== */

    function renderMyPalette() {

        if (!palette) {

            return;

        }


        palette.innerHTML =
            "";


        if (
            myColors.length === 0
        ) {

            palette.innerHTML = `

                <div class="empty-palette">

                    Pick colors from your image
                    to create your palette.

                </div>

            `;


            return;

        }


        myColors.forEach(
            function (
                color,
                index
            ) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "palette-color";


                item.innerHTML = `

                    <div
                        class="palette-preview"
                        style="background:${escapeHtml(color)}"
                    ></div>


                    <div class="palette-info">

                        <span>
                            ${escapeHtml(color)}
                        </span>


                        <div class="my-color-actions">

                            <button
                                class="palette-copy-btn"
                                type="button"
                                title="Copy ${escapeHtml(color)}"
                            >
                                📋
                            </button>


                            <button
                                class="palette-remove-btn"
                                type="button"
                                title="Remove ${escapeHtml(color)}"
                            >
                                ×
                            </button>

                        </div>

                    </div>

                `;


                /*
                 * Copy button.
                 */

                const copyButton =
                    item.querySelector(
                        ".palette-copy-btn"
                    );


                if (copyButton) {

                    copyButton.addEventListener(
                        "click",
                        function () {

                            copyText(
                                color,
                                copyButton
                            );

                        }
                    );

                }


                /*
                 * Remove button.
                 */

                const removeButton =
                    item.querySelector(
                        ".palette-remove-btn"
                    );


                if (removeButton) {

                    removeButton.addEventListener(
                        "click",
                        function () {

                            removeColor(
                                index
                            );

                        }
                    );

                }


                palette.appendChild(
                    item
                );

            }
        );

    }



    /* =====================================================
       REMOVE COLOR
    ===================================================== */

    function removeColor(
        index
    ) {

        if (
            index < 0 ||
            index >= myColors.length
        ) {

            return;

        }


        const removedColor =
            myColors[index];


        myColors.splice(
            index,
            1
        );


        renderMyPalette();


        showToast(
            "Color removed.",
            removedColor
        );

    }



    /* =====================================================
       CLEAR ALL
    ===================================================== */

    if (clearPaletteBtn) {

        clearPaletteBtn.addEventListener(
            "click",
            function () {

                if (
                    myColors.length === 0
                ) {

                    showToast(
                        "Your palette is already empty."
                    );


                    return;

                }


                myColors =
                    [];


                renderMyPalette();


                showToast(
                    "All colors removed."
                );

            }
        );

    }



    /* =====================================================
       NEW IMAGE
    ===================================================== */

    if (newImageBtn) {

        newImageBtn.addEventListener(
            "click",
            function () {

                /*
                 * Reset file input.
                 */

                resetImageInput();


                /*
                 * Clear canvas.
                 */

                if (
                    canvas &&
                    ctx
                ) {

                    ctx.clearRect(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );

                }


                currentImageLoaded =
                    false;


                /*
                 * Hide picker.
                 */

                if (pickerSection) {

                    pickerSection.style.display =
                        "none";

                }


                /*
                 * Hide magnifier.
                 */

                if (magnifier) {

                    magnifier.style.display =
                        "none";

                }


                /*
                 * Scroll back to upload.
                 */

                if (uploadBox) {

                    uploadBox.scrollIntoView(
                        {
                            behavior:
                                "smooth",
                            block:
                                "center"
                        }
                    );

                }

                else {

                    window.scrollTo(
                        {
                            top: 0,
                            behavior:
                                "smooth"
                        }
                    );

                }

            }
        );

    }



    /* =====================================================
       RESET IMAGE INPUT
    ===================================================== */

    function resetImageInput() {

        if (imageInput) {

            /*
             * Clearing the value allows the user
             * to select the SAME image again.
             */

            imageInput.value =
                "";

        }

    }



    /* =====================================================
       INITIAL PALETTE
    ===================================================== */

    renderMyPalette();



    /* =====================================================
       DEBUG MESSAGE
    ===================================================== */

    console.log(
        "ColorPick initialized successfully."
    );

}