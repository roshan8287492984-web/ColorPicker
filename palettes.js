/* =====================================================
   THEME
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");

const themeIcon =
    document.getElementById("themeIcon");


function applyTheme(theme) {

    const isDark =
        theme === "dark";


    document.body.classList.toggle(
        "dark",
        isDark
    );
    document.documentElement.classList.remove("dark-loading");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";


    themeIcon.textContent =
        isDark ? "☀️" : "🌙";


    /* Remove temporary loading class */

}


/* Load saved theme */

const savedTheme =
    localStorage.getItem(
        "colorpick-theme"
    );


applyTheme(
    savedTheme === "dark"
        ? "dark"
        : "light"
);


/* Toggle */

themeBtn.addEventListener(
    "click",
    () => {

        const isDark =
            document.body.classList.contains(
                "dark"
            );


        const newTheme =
            isDark
                ? "light"
                : "dark";


        /* Save FIRST */

        localStorage.setItem(
            "colorpick-theme",
            newTheme
        );


        /* Then apply */

        applyTheme(
            newTheme
        );

    }
);


const palettes = [

/* ================= SUNSET ================= */

{
    name:"Sunset Dream",
    category:"Sunset",
    colors:["#FF6B6B","#FFD93D","#6BCB77"]
},

{
    name:"Golden Sunset",
    category:"Sunset",
    colors:["#FF7E5F","#FEB47B","#FFD166"]
},

{
    name:"Purple Sunset",
    category:"Sunset",
    colors:["#5F2C82","#A4508B","#F7B2D8"]
},

{
    name:"Desert Sunset",
    category:"Sunset",
    colors:["#E76F51","#F4A261","#E9C46A"]
},

{
    name:"Pink Horizon",
    category:"Sunset",
    colors:["#FF758C","#FF7EB3","#FFB6C1"]
},

{
    name:"Orange Sky",
    category:"Sunset",
    colors:["#FF512F","#F09819","#FFD194"]
},

{
    name:"Evening Glow",
    category:"Sunset",
    colors:["#6A0572","#AB83A1","#F4B942"]
},

{
    name:"Fire Sunset",
    category:"Sunset",
    colors:["#FF3D00","#FF9100","#FFD600"]
},

{
    name:"Rose Sunset",
    category:"Sunset",
    colors:["#C9184A","#FF4D6D","#FF758F"]
},

{
    name:"Soft Horizon",
    category:"Sunset",
    colors:["#FFCAD4","#F4ACB7","#9D8189"]
},


/* ================= OCEAN ================= */

{
    name:"Ocean Breeze",
    category:"Ocean",
    colors:["#0077B6","#00B4D8","#90E0EF"]
},

{
    name:"Deep Ocean",
    category:"Ocean",
    colors:["#03045E","#023E8A","#0077B6"]
},

{
    name:"Sea Glass",
    category:"Ocean",
    colors:["#2A9D8F","#8ED1C5","#E9F5DB"]
},

{
    name:"Tropical Water",
    category:"Ocean",
    colors:["#00B4D8","#48CAE4","#ADE8F4"]
},

{
    name:"Blue Lagoon",
    category:"Ocean",
    colors:["#006D77","#83C5BE","#EDF6F9"]
},

{
    name:"Coral Sea",
    category:"Ocean",
    colors:["#FF6B6B","#4ECDC4","#1A535C"]
},

{
    name:"Midnight Ocean",
    category:"Ocean",
    colors:["#03071E","#023047","#219EBC"]
},

{
    name:"Aqua Dream",
    category:"Ocean",
    colors:["#00F5D4","#00BBF9","#9B5DE5"]
},

{
    name:"Ocean Mist",
    category:"Ocean",
    colors:["#CAF0F8","#90E0EF","#0077B6"]
},

{
    name:"Blue Wave",
    category:"Ocean",
    colors:["#001219","#005F73","#0A9396"]
},


/* ================= PASTEL ================= */

{
    name:"Pastel Dream",
    category:"Pastel",
    colors:["#FFD6E0","#CDE7FF","#D8F3DC"]
},

{
    name:"Soft Pink",
    category:"Pastel",
    colors:["#FFC8DD","#FFAFCC","#BDE0FE"]
},

{
    name:"Pastel Candy",
    category:"Pastel",
    colors:["#FEC5BB","#FCD5CE","#FAE1DD"]
},

{
    name:"Lavender Milk",
    category:"Pastel",
    colors:["#E0BBE4","#957DAD","#D291BC"]
},

{
    name:"Mint Cream",
    category:"Pastel",
    colors:["#D8F3DC","#B7E4C7","#95D5B2"]
},

{
    name:"Pastel Sky",
    category:"Pastel",
    colors:["#BDE0FE","#A2D2FF","#CDB4DB"]
},

{
    name:"Peach Cream",
    category:"Pastel",
    colors:["#FFDAB9","#FFE5B4","#FFF1E6"]
},

{
    name:"Pastel Rainbow",
    category:"Pastel",
    colors:["#FFADAD","#FFD6A5","#CAFFBF"]
},

{
    name:"Lilac Dream",
    category:"Pastel",
    colors:["#E2CFEA","#D9B8C4","#B8B8FF"]
},

{
    name:"Baby Blue",
    category:"Pastel",
    colors:["#D0F4DE","#A9DEF9","#E4C1F9"]
},


/* ================= DARK ================= */

{
    name:"Midnight",
    category:"Dark",
    colors:["#0B132B","#1C2541","#3A506B"]
},

{
    name:"Dark Purple",
    category:"Dark",
    colors:["#10002B","#240046","#5A189A"]
},

{
    name:"Dark Forest",
    category:"Dark",
    colors:["#081C15","#1B4332","#2D6A4F"]
},

{
    name:"Dark Ocean",
    category:"Dark",
    colors:["#001219","#005F73","#0A9396"]
},

{
    name:"Dark Rose",
    category:"Dark",
    colors:["#370617","#6A040F","#9D0208"]
},

{
    name:"Dark Coffee",
    category:"Dark",
    colors:["#211510","#432818","#99582A"]
},

{
    name:"Dark Blue",
    category:"Dark",
    colors:["#03045E","#023E8A","#0077B6"]
},

{
    name:"Dark Neon",
    category:"Dark",
    colors:["#10002B","#7209B7","#F72585"]
},

{
    name:"Dark Emerald",
    category:"Dark",
    colors:["#001524","#15616D","#2A9D8F"]
},

{
    name:"Dark Fire",
    category:"Dark",
    colors:["#370617","#9D0208","#E85D04"]
},


/* ================= NATURE ================= */

{
    name:"Forest",
    category:"Nature",
    colors:["#1B4332","#2D6A4F","#40916C"]
},

{
    name:"Fresh Grass",
    category:"Nature",
    colors:["#70E000","#9EF01A","#CCFF33"]
},

{
    name:"Moss",
    category:"Nature",
    colors:["#606C38","#283618","#A3B18A"]
},

{
    name:"Earth",
    category:"Nature",
    colors:["#6B705C","#A5A58D","#B7B7A4"]
},

{
    name:"Garden",
    category:"Nature",
    colors:["#386641","#6A994E","#A7C957"]
},

{
    name:"Leaf",
    category:"Nature",
    colors:["#004B23","#006400","#38B000"]
},

{
    name:"Sage",
    category:"Nature",
    colors:["#A3B18A","#588157","#3A5A40"]
},

{
    name:"Jungle",
    category:"Nature",
    colors:["#081C15","#1B4332","#52B788"]
},

{
    name:"Cactus",
    category:"Nature",
    colors:["#386641","#6A994E","#A7C957"]
},

{
    name:"Autumn Forest",
    category:"Nature",
    colors:["#606C38","#BC6C25","#DDA15E"]
},


/* ================= NEON ================= */

{
    name:"Neon Pink",
    category:"Neon",
    colors:["#F72585","#B5179E","#7209B7"]
},

{
    name:"Neon Blue",
    category:"Neon",
    colors:["#00F5FF","#00BBF9","#4361EE"]
},

{
    name:"Neon Green",
    category:"Neon",
    colors:["#39FF14","#00FF85","#CCFF00"]
},

{
    name:"Cyberpunk",
    category:"Neon",
    colors:["#F72585","#7209B7","#4361EE"]
},

{
    name:"Electric Purple",
    category:"Neon",
    colors:["#7B2CBF","#9D4EDD","#C77DFF"]
},

{
    name:"Laser",
    category:"Neon",
    colors:["#00F5D4","#00BBF9","#F15BB5"]
},

{
    name:"Electric Lime",
    category:"Neon",
    colors:["#CCFF00","#7FFF00","#00FF41"]
},

{
    name:"Neon Sunset",
    category:"Neon",
    colors:["#FF006E","#FB5607","#FFBE0B"]
},

{
    name:"Cyber Blue",
    category:"Neon",
    colors:["#00FFFF","#0066FF","#6600FF"]
},

{
    name:"Future",
    category:"Neon",
    colors:["#00F5FF","#FF00FF","#FFFF00"]
},


/* ================= WARM ================= */

{
    name:"Warm Coffee",
    category:"Warm",
    colors:["#6F4E37","#A67B5B","#C4A484"]
},

{
    name:"Cinnamon",
    category:"Warm",
    colors:["#9A3412","#C2410C","#EA580C"]
},

{
    name:"Autumn",
    category:"Warm",
    colors:["#9C2C77","#F28F3B","#C8553D"]
},

{
    name:"Terracotta",
    category:"Warm",
    colors:["#E76F51","#F4A261","#E9C46A"]
},

{
    name:"Spice",
    category:"Warm",
    colors:["#7F1D1D","#B91C1C","#F97316"]
},

{
    name:"Honey",
    category:"Warm",
    colors:["#F59E0B","#FBBF24","#FDE68A"]
},

{
    name:"Chocolate",
    category:"Warm",
    colors:["#3E2723","#5D4037","#8D6E63"]
},

{
    name:"Caramel",
    category:"Warm",
    colors:["#99582A","#BB9457","#FFE6A7"]
},

{
    name:"Rust",
    category:"Warm",
    colors:["#7C2D12","#C2410C","#EA580C"]
},

{
    name:"Pumpkin",
    category:"Warm",
    colors:["#9A3412","#EA580C","#FDBA74"]
},


/* ================= COOL ================= */

{
    name:"Cool Breeze",
    category:"Cool",
    colors:["#4CC9F0","#4895EF","#4361EE"]
},

{
    name:"Winter",
    category:"Cool",
    colors:["#CAF0F8","#90E0EF","#48CAE4"]
},

{
    name:"Ice",
    category:"Cool",
    colors:["#E0FBFC","#98C1D9","#3D5A80"]
},

{
    name:"Arctic",
    category:"Cool",
    colors:["#DFF6FF","#47B5FF","#1363DF"]
},

{
    name:"Blueberry",
    category:"Cool",
    colors:["#3C096C","#5A189A","#7B2CBF"]
},

{
    name:"Lavender",
    category:"Cool",
    colors:["#C8B6FF","#B8C0FF","#BBD0FF"]
},

{
    name:"Frost",
    category:"Cool",
    colors:["#EDF6F9","#83C5BE","#006D77"]
},

{
    name:"Cool Mint",
    category:"Cool",
    colors:["#CCFBF1","#5EEAD4","#14B8A6"]
},

{
    name:"Blue Steel",
    category:"Cool",
    colors:["#334155","#64748B","#94A3B8"]
},

{
    name:"Rain",
    category:"Cool",
    colors:["#334155","#64748B","#CBD5E1"]
},


/* ================= MINIMAL ================= */

{
    name:"Minimal White",
    category:"Minimal",
    colors:["#FFFFFF","#F5F5F5","#E5E5E5"]
},

{
    name:"Minimal Gray",
    category:"Minimal",
    colors:["#111827","#6B7280","#D1D5DB"]
},

{
    name:"Minimal Black",
    category:"Minimal",
    colors:["#000000","#333333","#666666"]
},

{
    name:"Soft Gray",
    category:"Minimal",
    colors:["#F8F9FA","#DEE2E6","#ADB5BD"]
},

{
    name:"Modern",
    category:"Minimal",
    colors:["#212529","#495057","#ADB5BD"]
},

{
    name:"Clean Blue",
    category:"Minimal",
    colors:["#F8FAFC","#E0F2FE","#0284C7"]
},

{
    name:"Elegant",
    category:"Minimal",
    colors:["#212121","#757575","#BDBDBD"]
},

{
    name:"Neutral",
    category:"Minimal",
    colors:["#EDE0D4","#E6CCB2","#DDB892"]
},

{
    name:"Monochrome",
    category:"Minimal",
    colors:["#111111","#777777","#EEEEEE"]
},

{
    name:"Stone",
    category:"Minimal",
    colors:["#292524","#78716C","#D6D3D1"]
},


/* ================= EXTRA GENERAL PALETTES ================= */

{
    name:"Royal Purple",
    category:"Purple",
    colors:["#240046","#5A189A","#9D4EDD"]
},

{
    name:"Berry",
    category:"Purple",
    colors:["#4A1942","#893168","#C75C8A"]
},

{
    name:"Violet Sky",
    category:"Purple",
    colors:["#5F0F40","#9A031E","#FB8B24"]
},

{
    name:"Pink Magic",
    category:"Pink",
    colors:["#FF006E","#FF4D9D","#FF99C8"]
},

{
    name:"Rose",
    category:"Pink",
    colors:["#800F2F","#C9184A","#FF758F"]
},

{
    name:"Cherry",
    category:"Red",
    colors:["#641220","#A71E34","#D90429"]
},

{
    name:"Apple",
    category:"Red",
    colors:["#D00000","#DC2F02","#E85D04"]
},

{
    name:"Lemon",
    category:"Yellow",
    colors:["#FFD60A","#FFEA00","#FFFF3F"]
},

{
    name:"Sunshine",
    category:"Yellow",
    colors:["#F9C74F","#F9844A","#F8961E"]
},

{
    name:"Golden",
    category:"Yellow",
    colors:["#FFB703","#FB8500","#F48C06"]
},

{
    name:"Mint",
    category:"Green",
    colors:["#D8F3DC","#95D5B2","#52B788"]
},

{
    name:"Emerald",
    category:"Green",
    colors:["#064E3B","#059669","#34D399"]
},

{
    name:"Lime",
    category:"Green",
    colors:["#365314","#65A30D","#A3E635"]
},

{
    name:"Sky",
    category:"Blue",
    colors:["#E0F2FE","#38BDF8","#0284C7"]
},

{
    name:"Royal Blue",
    category:"Blue",
    colors:["#172554","#1D4ED8","#60A5FA"]
},

{
    name:"Sapphire",
    category:"Blue",
    colors:["#03045E","#4361EE","#4CC9F0"]
},

{
    name:"Coral",
    category:"Orange",
    colors:["#FF6B6B","#FF8C42","#FFB703"]
},

{
    name:"Peach",
    category:"Orange",
    colors:["#FFB5A7","#FCD5CE","#F8EDEB"]
},

{
    name:"Cream",
    category:"Brown",
    colors:["#FEFAE0","#FAEDCD","#D4A373"]
},

{
    name:"Coffee",
    category:"Brown",
    colors:["#432818","#6F4E37","#A67B5B"]
},

{
    name:"Earthy",
    category:"Brown",
    colors:["#7F5539","#9C6644","#B08968"]
},

{
    name:"Vintage",
    category:"Vintage",
    colors:["#264653","#2A9D8F","#E9C46A"]
},

{
    name:"Retro",
    category:"Vintage",
    colors:["#F4A261","#E76F51","#264653"]
},

{
    name:"70s",
    category:"Vintage",
    colors:["#6B705C","#CB997E","#A5A58D"]
},

{
    name:"Royal",
    category:"Luxury",
    colors:["#0B090A","#D4AF37","#F5F5DC"]
},

{
    name:"Luxury Gold",
    category:"Luxury",
    colors:["#171717","#B8860B","#F5DEB3"]
},

{
    name:"Luxury Black",
    category:"Luxury",
    colors:["#000000","#333333","#D4AF37"]
},

{
    name:"Elegant Gold",
    category:"Luxury",
    colors:["#1B1B1B","#C6A15B","#EFE7DA"]
},

{
    name:"Wedding",
    category:"Elegant",
    colors:["#FFF1E6","#FAD2E1","#CDE7F0"]
},

{
    name:"Romantic",
    category:"Romantic",
    colors:["#590D22","#A4133C","#FF4D6D"]
},

{
    name:"Love",
    category:"Romantic",
    colors:["#800F2F","#FF0A54","#FF477E"]
},

{
    name:"Soft Love",
    category:"Romantic",
    colors:["#FAD2E1","#FDE2E4","#F8EDEB"]
},

{
    name:"Floral",
    category:"Nature",
    colors:["#D8E2DC","#FFE5D9","#FFCAD4"]
},

{
    name:"Spring",
    category:"Nature",
    colors:["#D8F3DC","#B7E4C7","#FFE5D9"]
},

{
    name:"Summer",
    category:"Summer",
    colors:["#FFCA3A","#FF595E","#8AC926"]
},

{
    name:"Beach",
    category:"Summer",
    colors:["#00B4D8","#90E0EF","#FFD166"]
},

{
    name:"Tropical",
    category:"Summer",
    colors:["#06D6A0","#118AB2","#FFD166"]
},

{
    name:"Vacation",
    category:"Summer",
    colors:["#FF6B6B","#4ECDC4","#FFE66D"]
},

{
    name:"Christmas",
    category:"Holiday",
    colors:["#D90429","#008000","#FFFFFF"]
},

{
    name:"Halloween",
    category:"Holiday",
    colors:["#000000","#FF6D00","#6A0DAD"]
},

{
    name:"Easter",
    category:"Holiday",
    colors:["#FFADAD","#FFD6A5","#CAFFBF"]
},

{
    name:"Autumn Leaves",
    category:"Autumn",
    colors:["#7F1D1D","#C2410C","#F59E0B"]
},

{
    name:"Maple",
    category:"Autumn",
    colors:["#9B2226","#CA6702","#EE9B00"]
},

{
    name:"Rainforest",
    category:"Nature",
    colors:["#081C15","#1B4332","#74C69D"]
},

{
    name:"Mango",
    category:"Food",
    colors:["#FFB703","#FB8500","#F48C06"]
},

{
    name:"Strawberry",
    category:"Food",
    colors:["#FF0A54","#FF477E","#FF85A1"]
},

{
    name:"Blueberry Food",
    category:"Food",
    colors:["#240046","#5A189A","#7B2CBF"]
},

{
    name:"Chocolate Cake",
    category:"Food",
    colors:["#3E2723","#6D4C41","#D7CCC8"]
},

{
    name:"Matcha",
    category:"Food",
    colors:["#606C38","#A3B18A","#DAD7CD"]
},

{
    name:"Coffee Shop",
    category:"Food",
    colors:["#3E2723","#795548","#D7CCC8"]
},

{
    name:"Anime",
    category:"Creative",
    colors:["#7209B7","#F72585","#4CC9F0"]
},

{
    name:"Gaming",
    category:"Creative",
    colors:["#0F0F0F","#7B2CBF","#00F5D4"]
},

{
    name:"Cyber",
    category:"Creative",
    colors:["#00F5FF","#FF00FF","#0F0F0F"]
},

{
    name:"Creative",
    category:"Creative",
    colors:["#FF006E","#FB5607","#8338EC"]
},

{
    name:"Designer",
    category:"Creative",
    colors:["#03045E","#00B4D8","#FF006E"]
},

{
    name:"Startup",
    category:"Business",
    colors:["#1D4ED8","#38BDF8","#F8FAFC"]
},

{
    name:"Corporate",
    category:"Business",
    colors:["#0F172A","#334155","#3B82F6"]
},

{
    name:"Tech",
    category:"Business",
    colors:["#020617","#2563EB","#06B6D4"]
},

{
    name:"Finance",
    category:"Business",
    colors:["#052E16","#15803D","#86EFAC"]
},

{
    name:"Healthcare",
    category:"Business",
    colors:["#0C4A6E","#0284C7","#BAE6FD"]
}

];
/* =====================================================
   ELEMENTS
===================================================== */

const paletteGrid =
    document.getElementById(
        "paletteGrid"
    );


const paletteSearch =
    document.getElementById(
        "paletteSearch"
    );


const categoryButtons =
    document.getElementById(
        "categoryButtons"
    );


const loadMoreBtn =
    document.getElementById(
        "loadMoreBtn"
    );


const toast =
    document.getElementById(
        "toast"
    );


const toastColor =
    document.getElementById(
        "toastColor"
    );


let selectedCategory =
    "All";


let visibleCount =
    24;


/* =====================================================
   CATEGORIES
===================================================== */

const categories = [
    "All",
    ...new Set(
        palettes.map(
            palette =>
                palette.category
        )
    )
];


categories.forEach(
    category => {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "category-btn";


        if (
            category === "All"
        ) {

            button.classList.add(
                "active"
            );

        }


        button.textContent =
            category;


        button.addEventListener(
            "click",
            () => {

                selectedCategory =
                    category;


                visibleCount =
                    24;


                document
                .querySelectorAll(
                    ".category-btn"
                )
                .forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                renderPalettes();

            }
        );


        categoryButtons.appendChild(
            button
        );

    }
);


/* =====================================================
   SEARCH
===================================================== */

paletteSearch.addEventListener(
    "input",
    () => {

        visibleCount =
            24;

        renderPalettes();

    }
);


/* =====================================================
   FILTER
===================================================== */

function getFilteredPalettes() {

    const search =
        paletteSearch.value
        .toLowerCase()
        .trim();


    return palettes.filter(
        palette => {

            const categoryMatch =
                selectedCategory ===
                    "All" ||
                palette.category ===
                    selectedCategory;


            const searchMatch =
                palette.name
                    .toLowerCase()
                    .includes(search) ||

                palette.category
                    .toLowerCase()
                    .includes(search);


            return (
                categoryMatch &&
                searchMatch
            );

        }
    );

}


/* =====================================================
   RENDER
===================================================== */

function renderPalettes() {

    const filtered =
        getFilteredPalettes();


    paletteGrid.innerHTML =
        "";


    const visible =
        filtered.slice(
            0,
            visibleCount
        );


    visible.forEach(
        paletteData => {

            createPaletteCard(
                paletteData
            );

        }
    );


    if (
        visibleCount >=
        filtered.length
    ) {

        loadMoreBtn.style.display =
            "none";

    } else {

        loadMoreBtn.style.display =
            "block";

    }


    if (
        filtered.length === 0
    ) {

        paletteGrid.innerHTML = `

            <div class="empty-palette">

                No palettes found.

                <br><br>

                Try another search.

            </div>

        `;

        loadMoreBtn.style.display =
            "none";

    }

}


/* =====================================================
   CREATE CARD
===================================================== */

function createPaletteCard(
    paletteData
) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "explore-card";


    let colorsHTML = "";


    paletteData.colors.forEach(
        color => {

            colorsHTML += `

                <div
                    class="color-block"
                    style="background:${color}"
                    data-color="${color}">

                    <span class="color-code">
                        ${color}
                    </span>

                </div>

            `;

        }
    );


    card.innerHTML = `

        <div class="color-strip">

            ${colorsHTML}

        </div>


        <div class="explore-info">

            <div class="explore-top">

                <h3>
                    ${paletteData.name}
                </h3>


                <button
                    class="favorite-btn">

                    ♡

                </button>

            </div>


            <div class="explore-category">

                ${paletteData.category}

            </div>


            <div class="palette-actions">

                <button
                    class="copy-palette">

                    📋 Copy Palette

                </button>


                <button
                    class="add-color">

                    + My Palette

                </button>

            </div>

        </div>

    `;


    /* =================================================
       CLICK INDIVIDUAL COLOR
    ================================================= */

    card
    .querySelectorAll(
        ".color-block"
    )
    .forEach(
        block => {

            block.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    const color =
                        block.dataset.color;


                    copyColor(
                        color
                    );

                    if (window.colorPickTrack) window.colorPickTrack("palette_page_color_copied");

                }
            );

        }
    );


    /* =================================================
       COPY ENTIRE PALETTE
    ================================================= */

    card
    .querySelector(
        ".copy-palette"
    )
    .addEventListener(
        "click",
        () => {

            const colors =
                paletteData.colors
                .join(", ");


            navigator.clipboard.writeText(
                colors
            );


            if (window.colorPickTrack) window.colorPickTrack("palette_copied");

            showToast(
                "Palette copied!",
                colors
            );

        }
    );


    /* =================================================
       FAVORITE
    ================================================= */

    card
    .querySelector(
        ".favorite-btn"
    )
    .addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const button =
                event.currentTarget;


            if (
                button.textContent
                .trim() === "♡"
            ) {

                button.textContent =
                    "♥";

            } else {

                button.textContent =
                    "♡";

            }

            if (window.colorPickTrack) window.colorPickTrack("palette_favorite_toggled");

        }
    );


    /* =================================================
       ADD PALETTE
    ================================================= */

    card
    .querySelector(
        ".add-color"
    )
    .addEventListener(
        "click",
        () => {

            const colors =
                paletteData.colors
                .join(", ");


            navigator.clipboard.writeText(
                colors
            );

            if (window.colorPickTrack) window.colorPickTrack("palette_added_to_my_palette");


            showToast(
                "Palette copied!",
                colors
            );

        }
    );


    paletteGrid.appendChild(
        card
    );

}


/* =====================================================
   COPY COLOR
===================================================== */

function copyColor(color) {

    navigator.clipboard.writeText(
        color
    );


    showToast(
        "Color copied!",
        color
    );

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(
    title,
    color
) {

    const strong =
        toast.querySelector(
            "strong"
        );


    strong.textContent =
        title;


    toastColor.textContent =
        color;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2000
        );

}


/* =====================================================
   LOAD MORE
===================================================== */

loadMoreBtn.addEventListener(
    "click",
    () => {

        visibleCount +=
            24;

        renderPalettes();

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

renderPalettes();