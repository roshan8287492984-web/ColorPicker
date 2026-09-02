/* =========================================================
   COLORPICK LANGUAGE SYSTEM
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       LANGUAGE / URL CONFIGURATION
    ===================================================== */

    const LANGUAGE_STORAGE_KEY = "colorpick-language";
    const DEFAULT_LANGUAGE = "en";

    // Resolve the website root from language.js itself. This makes the language
    // switcher work both when the site is deployed at the domain root and when
    // it is tested locally inside a project subfolder (for example /ColorPick/).
    const SCRIPT_BASE = (function () {
        try {
            const scripts = document.getElementsByTagName("script");
            for (let i = scripts.length - 1; i >= 0; i--) {
                const src = scripts[i].src || "";
                if (src.indexOf("language.js") !== -1) {
                    const url = new URL(src, window.location.href);
                    return url.pathname.substring(0, url.pathname.lastIndexOf("/") + 1);
                }
            }
        } catch (error) {}
        return "/";
    })();

    const LOCALE_PATHS = {
        en: "",
        hi: "hi",
        es: "es",
        fr: "fr",
        de: "de",
        ja: "ja",
        vi: "vi",
        fa: "fa",
        ru: "ru",
        "pt-BR": "pt-br",
        ko: "ko",
        sv: "sv",
        "zh-TW": "zh-tw",
        ro: "ro",
        fil: "fil",
        id: "id",
        "es-MX": "es-mx",
        tr: "tr"
    };

    function getPathRelativeToSiteRoot() {
        const path = window.location.pathname;
        let relative = path;
        if (SCRIPT_BASE !== "/" && path.indexOf(SCRIPT_BASE) === 0) {
            relative = path.slice(SCRIPT_BASE.length);
        } else if (SCRIPT_BASE === "/") {
            relative = path.replace(/^\/+/, "");
        }
        return relative.replace(/^\/+|\/+$/g, "");
    }

    function languageFromPath() {
        const relative = getPathRelativeToSiteRoot();
        const parts = relative.split("/").filter(Boolean);
        if (!parts.length) return null;
        const first = parts[0].toLowerCase();
        for (const language in LOCALE_PATHS) {
            const folder = LOCALE_PATHS[language];
            if (folder && folder.toLowerCase() === first) return language;
        }
        return null;
    }

    function getCurrentPageFile() {
        const relative = getPathRelativeToSiteRoot();
        const parts = relative.split("/").filter(Boolean);
        if (!parts.length) return "index.html";
        const first = parts[0].toLowerCase();
        let last = parts[parts.length - 1].toLowerCase();
        const isLocale = Object.values(LOCALE_PATHS).some(folder => folder && folder.toLowerCase() === first);
        if (isLocale) {
            if (parts.length === 1) return "index.html";
            last = parts[1].toLowerCase();
        }
        return last.endsWith(".html") ? last : "index.html";
    }

    // Root pages are always English. A translated page is represented by its
    // locale folder, e.g. /fr/palettes.html, so language state never needs to
    // override an English root URL.
    let currentLanguage = languageFromPath() || DEFAULT_LANGUAGE;

    function buildLanguageUrl(language) {
        const folder = LOCALE_PATHS[language] || "";
        const page = getCurrentPageFile();
        if (!folder) {
            return SCRIPT_BASE + (page === "index.html" ? "" : page);
        }
        return SCRIPT_BASE + folder + "/" + (page === "index.html" ? "" : page);
    }


    /* =====================================================
       LANGUAGE DATA
    ===================================================== */

    const translations = {

        en: {
            aboutUs:
                'About Us',

            privacyPolicy:
                'Privacy Policy',

            termsConditions:
                'Terms & Conditions',

            contactUs:
                'Contact Us',

            navSuggestions:
                'Color Suggestions',

            navWheel:
                'Color Wheel',

            navCode:
                'Color Code',


            brand: "ColorPick",

            navPicker: "Color Picker",

            navPalettes: "Explore Palettes",

            badge: "✨ Free Online Color Tool",

            heroTitle1: "Pick Any Color",

            heroTitle2: "From Any Image.",

            heroDescription:
                "Upload an image, click anywhere on it, and instantly get the exact HEX, RGB and HSL color values.",

            uploadTitle:
                "Upload Your Image",

            uploadDescription:
                "Drag & drop your image here",

            or: "or",

            browse:
                "Browse Image",

            imagePicker:
                "IMAGE COLOR PICKER",

            selectColor:
                "Select a Color",

            newImage:
                "↻ New Image",

            instruction:
                "🖱️ Move your mouse over the image and click to select a color.",

            selectedColor:
                "SELECTED COLOR",

            colorInformation:
                "Color Information",

            pickColor:
                "Pick a color",

            addPalette:
                "+ Add to My Palette",

            yourColors:
                "YOUR COLORS",

            myPalette:
                "My Palette",

            clearAll:
                "Clear All",

            emptyPalette:
                "Pick colors from your image to create your palette.",

            needInspiration:
                "NEED INSPIRATION?",

            exploreTitle:
                "Explore Beautiful Color Palettes",

            exploreDescription:
                "Discover 100+ carefully selected color combinations for your next project.",

            exploreButton:
                "Explore Palettes →",

            aboutTitleSmall:
                "ABOUT COLORPICK",

            aboutTitle:
                "A Simple Tool for Beautiful Colors",

            aboutDescription:
                "ColorPick helps designers, developers, artists and creators extract colors from images quickly. You can also explore beautiful ready-made palettes for your next creative project.",

            rights:
                "All rights reserved.",

            paletteBadge:
                "🎨 100+ Color Palettes",

            paletteHero1:
                "Explore Beautiful",

            paletteHero2:
                "Color Palettes.",

            paletteHeroDescription:
                "Find the perfect color combination for your website, logo, artwork or next creative project.",

            searchPalettes:
                "Search palettes...",

            loadMore:
                "Load More Palettes",

            howToUse:
                "HOW TO USE",

            findColor:
                "Find a Color You Love?",

            howToUseDescription:
                "Simply click on any color inside a palette and its HEX code will automatically be copied to your clipboard.",

            pickFromImage:
                "Pick Colors From Image →",
            colorDetails:
                "View Color Details →",


            colorCopied:
                "Color copied!"

        },


        /* =================================================
           HINDI
        ================================================= */

        hi: {
            aboutUs:
                'हमारे बारे में',

            privacyPolicy:
                'गोपनीयता नीति',

            termsConditions:
                'नियम और शर्तें',

            contactUs:
                'संपर्क करें',

            navSuggestions:
                'रंग सुझाव',

            navWheel:
                'कलर व्हील',

            navCode:
                'कलर कोड',


            brand: "ColorPick",

            navPicker:
                "कलर पिकर",

            navPalettes:
                "कलर पैलेट्स देखें",

            badge:
                "✨ मुफ्त ऑनलाइन कलर टूल",

            heroTitle1:
                "कोई भी रंग चुनें",

            heroTitle2:
                "किसी भी इमेज से।",

            heroDescription:
                "एक इमेज अपलोड करें, उस पर कहीं भी क्लिक करें और तुरंत HEX, RGB और HSL रंग प्राप्त करें।",

            uploadTitle:
                "अपनी इमेज अपलोड करें",

            uploadDescription:
                "अपनी इमेज यहाँ ड्रैग और ड्रॉप करें",

            or:
                "या",

            browse:
                "इमेज चुनें",

            imagePicker:
                "इमेज कलर पिकर",

            selectColor:
                "एक रंग चुनें",

            newImage:
                "↻ नई इमेज",

            instruction:
                "🖱️ इमेज पर माउस ले जाएँ और रंग चुनने के लिए क्लिक करें।",

            selectedColor:
                "चुना गया रंग",

            colorInformation:
                "रंग की जानकारी",

            pickColor:
                "एक रंग चुनें",

            addPalette:
                "+ मेरी पैलेट में जोड़ें",

            yourColors:
                "आपके रंग",

            myPalette:
                "मेरी पैलेट",

            clearAll:
                "सब हटाएँ",

            emptyPalette:
                "अपनी पैलेट बनाने के लिए इमेज से रंग चुनें।",

            needInspiration:
                "प्रेरणा चाहिए?",

            exploreTitle:
                "सुंदर कलर पैलेट्स देखें",

            exploreDescription:
                "अपने अगले प्रोजेक्ट के लिए 100+ चुने हुए रंग संयोजन खोजें।",

            exploreButton:
                "पैलेट्स देखें →",

            aboutTitleSmall:
                "COLORPICK के बारे में",

            aboutTitle:
                "सुंदर रंगों के लिए आसान टूल",

            aboutDescription:
                "ColorPick डिजाइनर, डेवलपर, कलाकार और क्रिएटर्स को इमेज से जल्दी रंग निकालने में मदद करता है। आप अपने अगले क्रिएटिव प्रोजेक्ट के लिए तैयार पैलेट्स भी देख सकते हैं।",

            rights:
                "सभी अधिकार सुरक्षित हैं।",

            paletteBadge:
                "🎨 100+ कलर पैलेट्स",

            paletteHero1:
                "सुंदर कलर पैलेट्स",

            paletteHero2:
                "देखें।",

            paletteHeroDescription:
                "अपनी वेबसाइट, लोगो, आर्टवर्क या अगले क्रिएटिव प्रोजेक्ट के लिए सही रंग संयोजन खोजें।",

            searchPalettes:
                "पैलेट्स खोजें...",

            loadMore:
                "और पैलेट्स लोड करें",

            howToUse:
                "कैसे उपयोग करें",

            findColor:
                "अपनी पसंद का रंग मिला?",

            howToUseDescription:
                "किसी भी पैलेट के रंग पर क्लिक करें और उसका HEX कोड अपने आप क्लिपबोर्ड पर कॉपी हो जाएगा।",

            pickFromImage:
                "इमेज से रंग चुनें →",
            colorDetails:
                "रंग की जानकारी देखें →",


            colorCopied:
                "रंग कॉपी हो गया!"

        },


        /* =================================================
           SPANISH
        ================================================= */

        es: {
            aboutUs:
                'Sobre nosotros',

            privacyPolicy:
                'Política de privacidad',

            termsConditions:
                'Términos y condiciones',

            contactUs:
                'Contacto',

            navSuggestions:
                'Sugerencias de color',

            navWheel:
                'Rueda de color',

            navCode:
                'Código de color',


            brand: "ColorPick",

            navPicker:
                "Selector de color",

            navPalettes:
                "Explorar paletas",

            badge:
                "✨ Herramienta de color online gratuita",

            heroTitle1:
                "Elige cualquier color",

            heroTitle2:
                "De cualquier imagen.",

            heroDescription:
                "Sube una imagen, haz clic en cualquier parte y obtén al instante los valores HEX, RGB y HSL exactos.",

            uploadTitle:
                "Sube tu imagen",

            uploadDescription:
                "Arrastra y suelta tu imagen aquí",

            or:
                "o",

            browse:
                "Buscar imagen",

            imagePicker:
                "SELECTOR DE COLOR DE IMAGEN",

            selectColor:
                "Selecciona un color",

            newImage:
                "↻ Nueva imagen",

            instruction:
                "🖱️ Mueve el ratón sobre la imagen y haz clic para seleccionar un color.",

            selectedColor:
                "COLOR SELECCIONADO",

            colorInformation:
                "Información del color",

            pickColor:
                "Selecciona un color",

            addPalette:
                "+ Añadir a mi paleta",

            yourColors:
                "TUS COLORES",

            myPalette:
                "Mi paleta",

            clearAll:
                "Borrar todo",

            emptyPalette:
                "Selecciona colores de tu imagen para crear tu paleta.",

            needInspiration:
                "¿NECESITAS INSPIRACIÓN?",

            exploreTitle:
                "Explora hermosas paletas de colores",

            exploreDescription:
                "Descubre más de 100 combinaciones de colores seleccionadas para tu próximo proyecto.",

            exploreButton:
                "Explorar paletas →",

            aboutTitleSmall:
                "SOBRE COLORPICK",

            aboutTitle:
                "Una herramienta sencilla para colores hermosos",

            aboutDescription:
                "ColorPick ayuda a diseñadores, desarrolladores, artistas y creadores a extraer colores de imágenes rápidamente.",

            rights:
                "Todos los derechos reservados.",

            paletteBadge:
                "🎨 Más de 100 paletas de colores",

            paletteHero1:
                "Explora hermosas",

            paletteHero2:
                "paletas de colores.",

            paletteHeroDescription:
                "Encuentra la combinación de colores perfecta para tu sitio web, logotipo, arte o próximo proyecto creativo.",

            searchPalettes:
                "Buscar paletas...",

            loadMore:
                "Cargar más paletas",

            howToUse:
                "CÓMO USAR",

            findColor:
                "¿Encontraste un color que te gusta?",

            howToUseDescription:
                "Haz clic en cualquier color dentro de una paleta y su código HEX se copiará automáticamente al portapapeles.",

            pickFromImage:
                "Elegir colores de una imagen →",
            colorDetails:
                "Ver detalles del color →",


            colorCopied:
                "¡Color copiado!"

        },


        /* =================================================
           FRENCH
        ================================================= */

        fr: {
            aboutUs:
                'À propos',

            privacyPolicy:
                'Politique de confidentialité',

            termsConditions:
                'Conditions générales',

            contactUs:
                'Contact',

            navSuggestions:
                'Suggestions de couleurs',

            navWheel:
                'Roue des couleurs',

            navCode:
                'Code couleur',


            brand: "ColorPick",

            navPicker:
                "Sélecteur de couleur",

            navPalettes:
                "Explorer les palettes",

            badge:
                "✨ Outil de couleur en ligne gratuit",

            heroTitle1:
                "Choisissez n'importe quelle couleur",

            heroTitle2:
                "Depuis n'importe quelle image.",

            heroDescription:
                "Téléchargez une image, cliquez n'importe où et obtenez instantanément les valeurs HEX, RGB et HSL exactes.",

            uploadTitle:
                "Téléchargez votre image",

            uploadDescription:
                "Glissez-déposez votre image ici",

            or:
                "ou",

            browse:
                "Parcourir l'image",

            imagePicker:
                "SÉLECTEUR DE COULEUR D'IMAGE",

            selectColor:
                "Sélectionnez une couleur",

            newImage:
                "↻ Nouvelle image",

            instruction:
                "🖱️ Déplacez votre souris sur l'image et cliquez pour sélectionner une couleur.",

            selectedColor:
                "COULEUR SÉLECTIONNÉE",

            colorInformation:
                "Informations sur la couleur",

            pickColor:
                "Choisissez une couleur",

            addPalette:
                "+ Ajouter à ma palette",

            yourColors:
                "VOS COULEURS",

            myPalette:
                "Ma palette",

            clearAll:
                "Tout effacer",

            emptyPalette:
                "Choisissez des couleurs dans votre image pour créer votre palette.",

            needInspiration:
                "BESOIN D'INSPIRATION ?",

            exploreTitle:
                "Explorez de magnifiques palettes de couleurs",

            exploreDescription:
                "Découvrez plus de 100 combinaisons de couleurs sélectionnées pour votre prochain projet.",

            exploreButton:
                "Explorer les palettes →",

            aboutTitleSmall:
                "À PROPOS DE COLORPICK",

            aboutTitle:
                "Un outil simple pour de belles couleurs",

            aboutDescription:
                "ColorPick aide les designers, développeurs, artistes et créateurs à extraire rapidement les couleurs des images.",

            rights:
                "Tous droits réservés.",

            paletteBadge:
                "🎨 Plus de 100 palettes de couleurs",

            paletteHero1:
                "Explorez de magnifiques",

            paletteHero2:
                "palettes de couleurs.",

            paletteHeroDescription:
                "Trouvez la combinaison de couleurs parfaite pour votre site web, logo, œuvre ou prochain projet créatif.",

            searchPalettes:
                "Rechercher des palettes...",

            loadMore:
                "Charger plus de palettes",

            howToUse:
                "COMMENT UTILISER",

            findColor:
                "Vous avez trouvé une couleur que vous aimez ?",

            howToUseDescription:
                "Cliquez sur n'importe quelle couleur d'une palette et son code HEX sera automatiquement copié dans votre presse-papiers.",

            pickFromImage:
                "Choisir des couleurs depuis une image →",
            colorDetails:
                "Voir les détails de la couleur →",


            colorCopied:
                "Couleur copiée !"

        },


        /* =================================================
           GERMAN
        ================================================= */

        de: {
            aboutUs:
                'Über uns',

            privacyPolicy:
                'Datenschutz',

            termsConditions:
                'Nutzungsbedingungen',

            contactUs:
                'Kontakt',

            navSuggestions:
                'Farbvorschläge',

            navWheel:
                'Farbkreis',

            navCode:
                'Farbcode',


            brand: "ColorPick",

            navPicker:
                "Farbwähler",

            navPalettes:
                "Paletten entdecken",

            badge:
                "✨ Kostenloses Online-Farbtool",

            heroTitle1:
                "Wähle jede Farbe",

            heroTitle2:
                "Aus jedem Bild.",

            heroDescription:
                "Lade ein Bild hoch, klicke irgendwo darauf und erhalte sofort die exakten HEX-, RGB- und HSL-Werte.",

            uploadTitle:
                "Bild hochladen",

            uploadDescription:
                "Ziehe dein Bild hierher",

            or:
                "oder",

            browse:
                "Bild auswählen",

            imagePicker:
                "BILDFARBWÄHLER",

            selectColor:
                "Farbe auswählen",

            newImage:
                "↻ Neues Bild",

            instruction:
                "🖱️ Bewege die Maus über das Bild und klicke, um eine Farbe auszuwählen.",

            selectedColor:
                "AUSGEWÄHLTE FARBE",

            colorInformation:
                "Farbinformationen",

            pickColor:
                "Farbe auswählen",

            addPalette:
                "+ Zu meiner Palette hinzufügen",

            yourColors:
                "DEINE FARBEN",

            myPalette:
                "Meine Palette",

            clearAll:
                "Alles löschen",

            emptyPalette:
                "Wähle Farben aus deinem Bild, um deine Palette zu erstellen.",

            needInspiration:
                "INSPIRATION GESUCHT?",

            exploreTitle:
                "Entdecke wunderschöne Farbpaletten",

            exploreDescription:
                "Entdecke über 100 sorgfältig ausgewählte Farbkombinationen für dein nächstes Projekt.",

            exploreButton:
                "Paletten entdecken →",

            aboutTitleSmall:
                "ÜBER COLORPICK",

            aboutTitle:
                "Ein einfaches Tool für wunderschöne Farben",

            aboutDescription:
                "ColorPick hilft Designern, Entwicklern, Künstlern und Kreativen, schnell Farben aus Bildern zu extrahieren.",

            rights:
                "Alle Rechte vorbehalten.",

            paletteBadge:
                "🎨 Über 100 Farbpaletten",

            paletteHero1:
                "Entdecke wunderschöne",

            paletteHero2:
                "Farbpaletten.",

            paletteHeroDescription:
                "Finde die perfekte Farbkombination für deine Website, dein Logo, deine Kunst oder dein nächstes kreatives Projekt.",

            searchPalettes:
                "Paletten suchen...",

            loadMore:
                "Weitere Paletten laden",

            howToUse:
                "ANLEITUNG",

            findColor:
                "Eine Farbe gefunden, die dir gefällt?",

            howToUseDescription:
                "Klicke auf eine beliebige Farbe in einer Palette und ihr HEX-Code wird automatisch in die Zwischenablage kopiert.",

            pickFromImage:
                "Farben aus Bild auswählen →",
            colorDetails:
                "Farbdétails anzeigen →",


            colorCopied:
                "Farbe kopiert!"

        },


        /* =================================================
           JAPANESE
        ================================================= */

        ja: {
            aboutUs:
                '私たちについて',

            privacyPolicy:
                'プライバシーポリシー',

            termsConditions:
                '利用規約',

            contactUs:
                'お問い合わせ',

            navSuggestions:
                'カラー提案',

            navWheel:
                'カラーホイール',

            navCode:
                'カラーコード',


            brand: "ColorPick",

            navPicker:
                "カラーピッカー",

            navPalettes:
                "カラーパレットを見る",

            badge:
                "✨ 無料オンラインカラーツール",

            heroTitle1:
                "好きな色を選択",

            heroTitle2:
                "どんな画像からでも。",

            heroDescription:
                "画像をアップロードして、画像上の好きな場所をクリックすると、HEX・RGB・HSLの正確なカラー値を取得できます。",

            uploadTitle:
                "画像をアップロード",

            uploadDescription:
                "ここに画像をドラッグ＆ドロップ",

            or:
                "または",

            browse:
                "画像を選択",

            imagePicker:
                "画像カラーピッカー",

            selectColor:
                "色を選択",

            newImage:
                "↻ 新しい画像",

            instruction:
                "🖱️ 画像の上にマウスを移動して、色を選択するためにクリックしてください。",

            selectedColor:
                "選択した色",

            colorInformation:
                "カラー情報",

            pickColor:
                "色を選択してください",

            addPalette:
                "+ マイパレットに追加",

            yourColors:
                "あなたの色",

            myPalette:
                "マイパレット",

            clearAll:
                "すべて削除",

            emptyPalette:
                "画像から色を選択してパレットを作成してください。",

            needInspiration:
                "インスピレーションが必要？",

            exploreTitle:
                "美しいカラーパレットを探索",

            exploreDescription:
                "次のプロジェクトに使える100以上の厳選されたカラーコンビネーションを見つけましょう。",

            exploreButton:
                "パレットを見る →",

            aboutTitleSmall:
                "COLORPICKについて",

            aboutTitle:
                "美しい色のためのシンプルなツール",

            aboutDescription:
                "ColorPickは、デザイナー、開発者、アーティスト、クリエイターが画像から素早く色を抽出できるツールです。",

            rights:
                "All rights reserved.",

            paletteBadge:
                "🎨 100以上のカラーパレット",

            paletteHero1:
                "美しい",

            paletteHero2:
                "カラーパレットを探索。",

            paletteHeroDescription:
                "ウェブサイト、ロゴ、アート作品、次のクリエイティブプロジェクトに最適な色の組み合わせを見つけましょう。",

            searchPalettes:
                "パレットを検索...",

            loadMore:
                "さらにパレットを読み込む",

            howToUse:
                "使い方",

            findColor:
                "お気に入りの色を見つけましたか？",

            howToUseDescription:
                "パレット内の色をクリックすると、そのHEXコードが自動的にクリップボードへコピーされます。",

            pickFromImage:
                "画像から色を選択 →",
            colorDetails:
                "カラー詳細を見る →",


            colorCopied:
                "色をコピーしました！"

        }

,


        "vi": {
                "aboutUs": "Giới thiệu",
                "privacyPolicy": "Chính sách bảo mật",
                "termsConditions": "Điều khoản & Điều kiện",
                "contactUs": "Liên hệ",
                "navSuggestions": "Gợi ý màu",
                "navWheel": "Bánh xe màu",
                "navCode": "Mã màu",
                "brand": "ColorPick",
                "navPicker": "Bộ chọn màu",
                "navPalettes": "Khám phá bảng màu",
                "badge": "✨ Công cụ màu trực tuyến miễn phí",
                "heroTitle1": "Chọn bất kỳ màu nào",
                "heroTitle2": "Từ bất kỳ hình ảnh nào.",
                "heroDescription": "Tải hình ảnh lên, nhấp vào bất kỳ vị trí nào và nhận ngay giá trị HEX, RGB và HSL chính xác.",
                "uploadTitle": "Tải hình ảnh của bạn",
                "uploadDescription": "Kéo và thả hình ảnh vào đây",
                "or": "hoặc",
                "browse": "Chọn hình ảnh",
                "imagePicker": "BỘ CHỌN MÀU TỪ HÌNH ẢNH",
                "selectColor": "Chọn một màu",
                "newImage": "↻ Hình ảnh mới",
                "instruction": "🖱️ Di chuyển chuột trên hình ảnh và nhấp để chọn màu.",
                "selectedColor": "MÀU ĐÃ CHỌN",
                "colorInformation": "Thông tin màu",
                "pickColor": "Chọn một màu",
                "addPalette": "+ Thêm vào bảng màu",
                "yourColors": "MÀU CỦA BẠN",
                "myPalette": "Bảng màu của tôi",
                "clearAll": "Xóa tất cả",
                "emptyPalette": "Chọn màu từ hình ảnh để tạo bảng màu của bạn.",
                "needInspiration": "CẦN CẢM HỨNG?",
                "exploreTitle": "Khám phá các bảng màu đẹp",
                "exploreDescription": "Khám phá hơn 100 kết hợp màu được tuyển chọn cho dự án tiếp theo của bạn.",
                "exploreButton": "Khám phá bảng màu →",
                "aboutTitleSmall": "VỀ COLORPICK",
                "aboutTitle": "Công cụ đơn giản cho những màu sắc đẹp",
                "aboutDescription": "ColorPick giúp nhà thiết kế, nhà phát triển, nghệ sĩ và người sáng tạo nhanh chóng lấy màu từ hình ảnh.",
                "rights": "Bảo lưu mọi quyền.",
                "paletteBadge": "🎨 Hơn 100 bảng màu",
                "paletteHero1": "Khám phá những",
                "paletteHero2": "bảng màu đẹp.",
                "paletteHeroDescription": "Tìm sự kết hợp màu hoàn hảo cho website, logo, tác phẩm nghệ thuật hoặc dự án sáng tạo tiếp theo.",
                "searchPalettes": "Tìm kiếm bảng màu...",
                "loadMore": "Tải thêm bảng màu",
                "howToUse": "CÁCH SỬ DỤNG",
                "findColor": "Đã tìm thấy màu bạn thích?",
                "howToUseDescription": "Chỉ cần nhấp vào bất kỳ màu nào trong bảng màu và mã HEX sẽ tự động được sao chép vào bộ nhớ tạm.",
                "pickFromImage": "Chọn màu từ hình ảnh →",
                "colorDetails": "Xem chi tiết màu →",
                "colorCopied": "Đã sao chép màu!"
        },
        "fa": {
                "aboutUs": "درباره ما",
                "privacyPolicy": "سیاست حفظ حریم خصوصی",
                "termsConditions": "شرایط و قوانین",
                "contactUs": "تماس با ما",
                "navSuggestions": "پیشنهادهای رنگ",
                "navWheel": "چرخه رنگ",
                "navCode": "کد رنگ",
                "brand": "ColorPick",
                "navPicker": "انتخابگر رنگ",
                "navPalettes": "کاوش پالت‌ها",
                "badge": "✨ ابزار آنلاین رایگان رنگ",
                "heroTitle1": "هر رنگی را انتخاب کنید",
                "heroTitle2": "از هر تصویری.",
                "heroDescription": "یک تصویر آپلود کنید، روی هر نقطه کلیک کنید و مقادیر دقیق HEX، RGB و HSL را فوراً دریافت کنید.",
                "uploadTitle": "تصویر خود را آپلود کنید",
                "uploadDescription": "تصویر را اینجا بکشید و رها کنید",
                "or": "یا",
                "browse": "انتخاب تصویر",
                "imagePicker": "انتخابگر رنگ تصویر",
                "selectColor": "یک رنگ انتخاب کنید",
                "newImage": "↻ تصویر جدید",
                "instruction": "🖱️ نشانگر را روی تصویر حرکت دهید و برای انتخاب رنگ کلیک کنید.",
                "selectedColor": "رنگ انتخاب‌شده",
                "colorInformation": "اطلاعات رنگ",
                "pickColor": "یک رنگ انتخاب کنید",
                "addPalette": "+ افزودن به پالت من",
                "yourColors": "رنگ‌های شما",
                "myPalette": "پالت من",
                "clearAll": "پاک کردن همه",
                "emptyPalette": "برای ساخت پالت، رنگ‌هایی از تصویر خود انتخاب کنید.",
                "needInspiration": "الهام می‌خواهید؟",
                "exploreTitle": "پالت‌های رنگی زیبا را کاوش کنید",
                "exploreDescription": "بیش از ۱۰۰ ترکیب رنگ منتخب برای پروژه بعدی خود پیدا کنید.",
                "exploreButton": "کاوش پالت‌ها ←",
                "aboutTitleSmall": "درباره COLORPICK",
                "aboutTitle": "ابزاری ساده برای رنگ‌های زیبا",
                "aboutDescription": "ColorPick به طراحان، توسعه‌دهندگان، هنرمندان و سازندگان کمک می‌کند رنگ‌ها را سریع از تصاویر استخراج کنند.",
                "rights": "تمام حقوق محفوظ است.",
                "paletteBadge": "🎨 بیش از ۱۰۰ پالت رنگ",
                "paletteHero1": "پالت‌های رنگی زیبا را",
                "paletteHero2": "کاوش کنید.",
                "paletteHeroDescription": "ترکیب رنگ مناسب برای وب‌سایت، لوگو، اثر هنری یا پروژه خلاقانه بعدی خود را پیدا کنید.",
                "searchPalettes": "جستجوی پالت‌ها...",
                "loadMore": "بارگذاری پالت‌های بیشتر",
                "howToUse": "نحوه استفاده",
                "findColor": "رنگی را که دوست دارید پیدا کردید؟",
                "howToUseDescription": "روی هر رنگ در یک پالت کلیک کنید تا کد HEX آن به‌طور خودکار در کلیپ‌بورد کپی شود.",
                "pickFromImage": "انتخاب رنگ از تصویر ←",
                "colorDetails": "مشاهده جزئیات رنگ ←",
                "colorCopied": "رنگ کپی شد!"
        },
        "ru": {
                "aboutUs": "О нас",
                "privacyPolicy": "Политика конфиденциальности",
                "termsConditions": "Условия использования",
                "contactUs": "Контакты",
                "navSuggestions": "Подбор цветов",
                "navWheel": "Цветовой круг",
                "navCode": "Код цвета",
                "brand": "ColorPick",
                "navPicker": "Пипетка цвета",
                "navPalettes": "Исследовать палитры",
                "badge": "✨ Бесплатный онлайн-инструмент для работы с цветом",
                "heroTitle1": "Выберите любой цвет",
                "heroTitle2": "Из любого изображения.",
                "heroDescription": "Загрузите изображение, нажмите в любом месте и мгновенно получите точные значения HEX, RGB и HSL.",
                "uploadTitle": "Загрузите изображение",
                "uploadDescription": "Перетащите изображение сюда",
                "or": "или",
                "browse": "Выбрать изображение",
                "imagePicker": "ПИПЕТКА ЦВЕТА ИЗ ИЗОБРАЖЕНИЯ",
                "selectColor": "Выберите цвет",
                "newImage": "↻ Новое изображение",
                "instruction": "🖱️ Наведите курсор на изображение и нажмите, чтобы выбрать цвет.",
                "selectedColor": "ВЫБРАННЫЙ ЦВЕТ",
                "colorInformation": "Информация о цвете",
                "pickColor": "Выберите цвет",
                "addPalette": "+ Добавить в мою палитру",
                "yourColors": "ВАШИ ЦВЕТА",
                "myPalette": "Моя палитра",
                "clearAll": "Очистить всё",
                "emptyPalette": "Выбирайте цвета из изображения, чтобы создать свою палитру.",
                "needInspiration": "НУЖНО ВДОХНОВЕНИЕ?",
                "exploreTitle": "Исследуйте красивые цветовые палитры",
                "exploreDescription": "Откройте более 100 тщательно подобранных цветовых сочетаний для следующего проекта.",
                "exploreButton": "Исследовать палитры →",
                "aboutTitleSmall": "О COLORPICK",
                "aboutTitle": "Простой инструмент для красивых цветов",
                "aboutDescription": "ColorPick помогает дизайнерам, разработчикам, художникам и создателям быстро извлекать цвета из изображений.",
                "rights": "Все права защищены.",
                "paletteBadge": "🎨 Более 100 цветовых палитр",
                "paletteHero1": "Исследуйте красивые",
                "paletteHero2": "цветовые палитры.",
                "paletteHeroDescription": "Найдите идеальное сочетание цветов для сайта, логотипа, иллюстрации или следующего творческого проекта.",
                "searchPalettes": "Поиск палитр...",
                "loadMore": "Загрузить ещё палитры",
                "howToUse": "КАК ИСПОЛЬЗОВАТЬ",
                "findColor": "Нашли понравившийся цвет?",
                "howToUseDescription": "Нажмите на любой цвет в палитре, и его HEX-код автоматически скопируется в буфер обмена.",
                "pickFromImage": "Выбрать цвета из изображения →",
                "colorDetails": "Посмотреть информацию о цвете →",
                "colorCopied": "Цвет скопирован!"
        },
        "pt-BR": {
                "aboutUs": "Sobre nós",
                "privacyPolicy": "Política de privacidade",
                "termsConditions": "Termos e condições",
                "contactUs": "Contato",
                "navSuggestions": "Sugestões de cores",
                "navWheel": "Roda de cores",
                "navCode": "Código de cor",
                "brand": "ColorPick",
                "navPicker": "Seletor de cores",
                "navPalettes": "Explorar paletas",
                "badge": "✨ Ferramenta de cores online grátis",
                "heroTitle1": "Escolha qualquer cor",
                "heroTitle2": "De qualquer imagem.",
                "heroDescription": "Envie uma imagem, clique em qualquer ponto e obtenha instantaneamente os valores exatos HEX, RGB e HSL.",
                "uploadTitle": "Envie sua imagem",
                "uploadDescription": "Arraste e solte sua imagem aqui",
                "or": "ou",
                "browse": "Escolher imagem",
                "imagePicker": "SELETOR DE CORES DE IMAGEM",
                "selectColor": "Selecione uma cor",
                "newImage": "↻ Nova imagem",
                "instruction": "🖱️ Mova o mouse sobre a imagem e clique para selecionar uma cor.",
                "selectedColor": "COR SELECIONADA",
                "colorInformation": "Informações da cor",
                "pickColor": "Escolha uma cor",
                "addPalette": "+ Adicionar à minha paleta",
                "yourColors": "SUAS CORES",
                "myPalette": "Minha paleta",
                "clearAll": "Limpar tudo",
                "emptyPalette": "Escolha cores da sua imagem para criar sua paleta.",
                "needInspiration": "PRECISA DE INSPIRAÇÃO?",
                "exploreTitle": "Explore lindas paletas de cores",
                "exploreDescription": "Descubra mais de 100 combinações de cores selecionadas para seu próximo projeto.",
                "exploreButton": "Explorar paletas →",
                "aboutTitleSmall": "SOBRE O COLORPICK",
                "aboutTitle": "Uma ferramenta simples para cores incríveis",
                "aboutDescription": "O ColorPick ajuda designers, desenvolvedores, artistas e criadores a extrair cores de imagens rapidamente.",
                "rights": "Todos os direitos reservados.",
                "paletteBadge": "🎨 Mais de 100 paletas de cores",
                "paletteHero1": "Explore lindas",
                "paletteHero2": "paletas de cores.",
                "paletteHeroDescription": "Encontre a combinação de cores perfeita para seu site, logotipo, arte ou próximo projeto criativo.",
                "searchPalettes": "Pesquisar paletas...",
                "loadMore": "Carregar mais paletas",
                "howToUse": "COMO USAR",
                "findColor": "Encontrou uma cor que gostou?",
                "howToUseDescription": "Clique em qualquer cor dentro de uma paleta e seu código HEX será copiado automaticamente para a área de transferência.",
                "pickFromImage": "Escolher cores de uma imagem →",
                "colorDetails": "Ver detalhes da cor →",
                "colorCopied": "Cor copiada!"
        },
        "ko": {
                "aboutUs": "소개",
                "privacyPolicy": "개인정보처리방침",
                "termsConditions": "이용약관",
                "contactUs": "문의하기",
                "navSuggestions": "색상 추천",
                "navWheel": "컬러 휠",
                "navCode": "색상 코드",
                "brand": "ColorPick",
                "navPicker": "컬러 피커",
                "navPalettes": "팔레트 탐색",
                "badge": "✨ 무료 온라인 색상 도구",
                "heroTitle1": "어떤 색이든 선택하세요",
                "heroTitle2": "어떤 이미지에서든.",
                "heroDescription": "이미지를 업로드하고 원하는 곳을 클릭하면 정확한 HEX, RGB, HSL 색상 값을 즉시 확인할 수 있습니다.",
                "uploadTitle": "이미지 업로드",
                "uploadDescription": "여기에 이미지를 드래그 앤 드롭하세요",
                "or": "또는",
                "browse": "이미지 선택",
                "imagePicker": "이미지 컬러 피커",
                "selectColor": "색상 선택",
                "newImage": "↻ 새 이미지",
                "instruction": "🖱️ 이미지 위로 마우스를 움직이고 클릭하여 색상을 선택하세요.",
                "selectedColor": "선택한 색상",
                "colorInformation": "색상 정보",
                "pickColor": "색상을 선택하세요",
                "addPalette": "+ 내 팔레트에 추가",
                "yourColors": "내 색상",
                "myPalette": "내 팔레트",
                "clearAll": "모두 지우기",
                "emptyPalette": "이미지에서 색상을 선택하여 나만의 팔레트를 만들어 보세요.",
                "needInspiration": "영감이 필요하신가요?",
                "exploreTitle": "아름다운 색상 팔레트 탐색",
                "exploreDescription": "다음 프로젝트를 위한 100개 이상의 엄선된 색상 조합을 찾아보세요.",
                "exploreButton": "팔레트 탐색 →",
                "aboutTitleSmall": "COLORPICK 소개",
                "aboutTitle": "아름다운 색상을 위한 간단한 도구",
                "aboutDescription": "ColorPick은 디자이너, 개발자, 아티스트 및 크리에이터가 이미지에서 색상을 빠르게 추출하도록 도와줍니다.",
                "rights": "모든 권리 보유.",
                "paletteBadge": "🎨 100개 이상의 색상 팔레트",
                "paletteHero1": "아름다운",
                "paletteHero2": "색상 팔레트를 탐색하세요.",
                "paletteHeroDescription": "웹사이트, 로고, 작품 또는 다음 창작 프로젝트에 어울리는 완벽한 색상 조합을 찾아보세요.",
                "searchPalettes": "팔레트 검색...",
                "loadMore": "더 많은 팔레트 불러오기",
                "howToUse": "사용 방법",
                "findColor": "마음에 드는 색상을 찾으셨나요?",
                "howToUseDescription": "팔레트의 색상을 클릭하면 HEX 코드가 자동으로 클립보드에 복사됩니다.",
                "pickFromImage": "이미지에서 색상 선택 →",
                "colorDetails": "색상 세부정보 보기 →",
                "colorCopied": "색상이 복사되었습니다!"
        },
        "sv": {
                "aboutUs": "Om oss",
                "privacyPolicy": "Integritetspolicy",
                "termsConditions": "Villkor",
                "contactUs": "Kontakt",
                "navSuggestions": "Färgtips",
                "navWheel": "Färghjul",
                "navCode": "Färgkod",
                "brand": "ColorPick",
                "navPicker": "Färgväljare",
                "navPalettes": "Utforska paletter",
                "badge": "✨ Gratis färgverktyg online",
                "heroTitle1": "Välj valfri färg",
                "heroTitle2": "Från vilken bild som helst.",
                "heroDescription": "Ladda upp en bild, klicka var som helst och få exakta HEX-, RGB- och HSL-värden direkt.",
                "uploadTitle": "Ladda upp din bild",
                "uploadDescription": "Dra och släpp din bild här",
                "or": "eller",
                "browse": "Välj bild",
                "imagePicker": "FÄRGVÄLJARE FRÅN BILD",
                "selectColor": "Välj en färg",
                "newImage": "↻ Ny bild",
                "instruction": "🖱️ Flytta muspekaren över bilden och klicka för att välja en färg.",
                "selectedColor": "VALD FÄRG",
                "colorInformation": "Färginformation",
                "pickColor": "Välj en färg",
                "addPalette": "+ Lägg till i min palett",
                "yourColors": "DINA FÄRGER",
                "myPalette": "Min palett",
                "clearAll": "Rensa allt",
                "emptyPalette": "Välj färger från din bild för att skapa din palett.",
                "needInspiration": "BEHÖVER DU INSPIRATION?",
                "exploreTitle": "Utforska vackra färgpaletter",
                "exploreDescription": "Upptäck över 100 noggrant utvalda färgkombinationer för ditt nästa projekt.",
                "exploreButton": "Utforska paletter →",
                "aboutTitleSmall": "OM COLORPICK",
                "aboutTitle": "Ett enkelt verktyg för vackra färger",
                "aboutDescription": "ColorPick hjälper designers, utvecklare, konstnärer och kreatörer att snabbt hämta färger från bilder.",
                "rights": "Med ensamrätt.",
                "paletteBadge": "🎨 Över 100 färgpaletter",
                "paletteHero1": "Utforska vackra",
                "paletteHero2": "färgpaletter.",
                "paletteHeroDescription": "Hitta den perfekta färgkombinationen för din webbplats, logotyp, konst eller nästa kreativa projekt.",
                "searchPalettes": "Sök paletter...",
                "loadMore": "Ladda fler paletter",
                "howToUse": "SÅ HÄR GÖR DU",
                "findColor": "Hittade du en färg du gillar?",
                "howToUseDescription": "Klicka på valfri färg i en palett så kopieras HEX-koden automatiskt till urklipp.",
                "pickFromImage": "Välj färger från bild →",
                "colorDetails": "Visa färginformation →",
                "colorCopied": "Färgen har kopierats!"
        },
        "zh-TW": {
                "aboutUs": "關於我們",
                "privacyPolicy": "隱私權政策",
                "termsConditions": "條款與條件",
                "contactUs": "聯絡我們",
                "navSuggestions": "色彩建議",
                "navWheel": "色輪",
                "navCode": "色碼",
                "brand": "ColorPick",
                "navPicker": "取色器",
                "navPalettes": "探索配色",
                "badge": "✨ 免費線上色彩工具",
                "heroTitle1": "選擇任何顏色",
                "heroTitle2": "從任何圖片中。",
                "heroDescription": "上傳圖片、點擊任意位置，即時取得精確的 HEX、RGB 與 HSL 色彩值。",
                "uploadTitle": "上傳圖片",
                "uploadDescription": "將圖片拖曳到這裡",
                "or": "或",
                "browse": "選擇圖片",
                "imagePicker": "圖片取色器",
                "selectColor": "選擇顏色",
                "newImage": "↻ 新圖片",
                "instruction": "🖱️ 將滑鼠移到圖片上並點擊即可選擇顏色。",
                "selectedColor": "已選顏色",
                "colorInformation": "色彩資訊",
                "pickColor": "選擇顏色",
                "addPalette": "+ 加入我的配色",
                "yourColors": "你的顏色",
                "myPalette": "我的配色",
                "clearAll": "全部清除",
                "emptyPalette": "從圖片中選擇顏色來建立你的配色。",
                "needInspiration": "需要靈感嗎？",
                "exploreTitle": "探索美麗的色彩配色",
                "exploreDescription": "探索 100+ 組精選配色，為你的下一個專案尋找靈感。",
                "exploreButton": "探索配色 →",
                "aboutTitleSmall": "關於 COLORPICK",
                "aboutTitle": "簡單好用的美麗色彩工具",
                "aboutDescription": "ColorPick 協助設計師、開發者、藝術家與創作者快速從圖片擷取顏色。",
                "rights": "版權所有。",
                "paletteBadge": "🎨 100+ 組色彩配色",
                "paletteHero1": "探索美麗的",
                "paletteHero2": "色彩配色。",
                "paletteHeroDescription": "為網站、Logo、藝術作品或下一個創意專案找到完美的色彩組合。",
                "searchPalettes": "搜尋配色...",
                "loadMore": "載入更多配色",
                "howToUse": "使用方式",
                "findColor": "找到喜歡的顏色了嗎？",
                "howToUseDescription": "點擊配色中的任何顏色，其 HEX 色碼會自動複製到剪貼簿。",
                "pickFromImage": "從圖片選擇顏色 →",
                "colorDetails": "查看色彩詳細資訊 →",
                "colorCopied": "顏色已複製！"
        },
        "ro": {
                "aboutUs": "Despre noi",
                "privacyPolicy": "Politica de confidențialitate",
                "termsConditions": "Termeni și condiții",
                "contactUs": "Contact",
                "navSuggestions": "Sugestii de culori",
                "navWheel": "Roata culorilor",
                "navCode": "Cod de culoare",
                "brand": "ColorPick",
                "navPicker": "Selector de culori",
                "navPalettes": "Explorează paletele",
                "badge": "✨ Instrument online gratuit pentru culori",
                "heroTitle1": "Alege orice culoare",
                "heroTitle2": "Din orice imagine.",
                "heroDescription": "Încarcă o imagine, fă clic oriunde și obține instantaneu valorile exacte HEX, RGB și HSL.",
                "uploadTitle": "Încarcă imaginea",
                "uploadDescription": "Trage și plasează imaginea aici",
                "or": "sau",
                "browse": "Alege imaginea",
                "imagePicker": "SELECTOR DE CULORI DIN IMAGINE",
                "selectColor": "Alege o culoare",
                "newImage": "↻ Imagine nouă",
                "instruction": "🖱️ Mută mouse-ul peste imagine și fă clic pentru a selecta o culoare.",
                "selectedColor": "CULOAREA SELECTATĂ",
                "colorInformation": "Informații despre culoare",
                "pickColor": "Alege o culoare",
                "addPalette": "+ Adaugă la paleta mea",
                "yourColors": "CULORILE TALE",
                "myPalette": "Paleta mea",
                "clearAll": "Șterge tot",
                "emptyPalette": "Alege culori din imagine pentru a crea paleta ta.",
                "needInspiration": "AI NEVOIE DE INSPIRAȚIE?",
                "exploreTitle": "Explorează palete de culori frumoase",
                "exploreDescription": "Descoperă peste 100 de combinații de culori alese cu grijă pentru următorul tău proiect.",
                "exploreButton": "Explorează paletele →",
                "aboutTitleSmall": "DESPRE COLORPICK",
                "aboutTitle": "Un instrument simplu pentru culori frumoase",
                "aboutDescription": "ColorPick ajută designerii, dezvoltatorii, artiștii și creatorii să extragă rapid culori din imagini.",
                "rights": "Toate drepturile rezervate.",
                "paletteBadge": "🎨 Peste 100 de palete de culori",
                "paletteHero1": "Explorează palete",
                "paletteHero2": "de culori frumoase.",
                "paletteHeroDescription": "Găsește combinația perfectă de culori pentru site-ul, logo-ul, lucrarea sau următorul proiect creativ.",
                "searchPalettes": "Caută palete...",
                "loadMore": "Încarcă mai multe palete",
                "howToUse": "CUM SE FOLOSEȘTE",
                "findColor": "Ai găsit o culoare care îți place?",
                "howToUseDescription": "Fă clic pe orice culoare dintr-o paletă, iar codul HEX va fi copiat automat în clipboard.",
                "pickFromImage": "Alege culori din imagine →",
                "colorDetails": "Vezi detaliile culorii →",
                "colorCopied": "Culoarea a fost copiată!"
        },
        "fil": {
                "aboutUs": "Tungkol sa amin",
                "privacyPolicy": "Patakaran sa privacy",
                "termsConditions": "Mga tuntunin at kondisyon",
                "contactUs": "Makipag-ugnayan",
                "navSuggestions": "Mga mungkahi sa kulay",
                "navWheel": "Color wheel",
                "navCode": "Color code",
                "brand": "ColorPick",
                "navPicker": "Color Picker",
                "navPalettes": "Tuklasin ang mga palette",
                "badge": "✨ Libreng online color tool",
                "heroTitle1": "Pumili ng kahit anong kulay",
                "heroTitle2": "Mula sa kahit anong larawan.",
                "heroDescription": "Mag-upload ng larawan, mag-click kahit saan, at agad makuha ang eksaktong HEX, RGB at HSL values.",
                "uploadTitle": "I-upload ang iyong larawan",
                "uploadDescription": "I-drag at i-drop ang larawan dito",
                "or": "o",
                "browse": "Pumili ng larawan",
                "imagePicker": "IMAGE COLOR PICKER",
                "selectColor": "Pumili ng kulay",
                "newImage": "↻ Bagong larawan",
                "instruction": "🖱️ Igalaw ang mouse sa larawan at mag-click para pumili ng kulay.",
                "selectedColor": "NAPILING KULAY",
                "colorInformation": "Impormasyon ng kulay",
                "pickColor": "Pumili ng kulay",
                "addPalette": "+ Idagdag sa aking palette",
                "yourColors": "IYONG MGA KULAY",
                "myPalette": "Aking palette",
                "clearAll": "I-clear lahat",
                "emptyPalette": "Pumili ng mga kulay mula sa larawan para gumawa ng palette.",
                "needInspiration": "KAILANGAN NG INSPIRASYON?",
                "exploreTitle": "Tuklasin ang magagandang color palette",
                "exploreDescription": "Tuklasin ang 100+ piling kombinasyon ng kulay para sa iyong susunod na proyekto.",
                "exploreButton": "Tuklasin ang mga palette →",
                "aboutTitleSmall": "TUNGKOL SA COLORPICK",
                "aboutTitle": "Simpleng tool para sa magagandang kulay",
                "aboutDescription": "Tinutulungan ng ColorPick ang mga designer, developer, artist at creator na mabilis kumuha ng mga kulay mula sa larawan.",
                "rights": "Nakalaan ang lahat ng karapatan.",
                "paletteBadge": "🎨 100+ color palette",
                "paletteHero1": "Tuklasin ang magagandang",
                "paletteHero2": "color palette.",
                "paletteHeroDescription": "Hanapin ang perpektong kombinasyon ng kulay para sa website, logo, artwork o susunod mong creative project.",
                "searchPalettes": "Maghanap ng palette...",
                "loadMore": "Mag-load ng higit pang palette",
                "howToUse": "PAANO GAMITIN",
                "findColor": "May nakita kang kulay na gusto mo?",
                "howToUseDescription": "I-click ang anumang kulay sa palette at awtomatikong makokopya ang HEX code nito sa clipboard.",
                "pickFromImage": "Pumili ng mga kulay mula sa larawan →",
                "colorDetails": "Tingnan ang detalye ng kulay →",
                "colorCopied": "Nakopya ang kulay!"
        },
        "id": {
                "aboutUs": "Tentang kami",
                "privacyPolicy": "Kebijakan privasi",
                "termsConditions": "Syarat & ketentuan",
                "contactUs": "Kontak",
                "navSuggestions": "Saran warna",
                "navWheel": "Roda warna",
                "navCode": "Kode warna",
                "brand": "ColorPick",
                "navPicker": "Pemilih warna",
                "navPalettes": "Jelajahi palet",
                "badge": "✨ Alat warna online gratis",
                "heroTitle1": "Pilih warna apa pun",
                "heroTitle2": "Dari gambar apa pun.",
                "heroDescription": "Unggah gambar, klik di mana saja, dan dapatkan nilai HEX, RGB, dan HSL yang tepat secara instan.",
                "uploadTitle": "Unggah gambar Anda",
                "uploadDescription": "Seret dan lepas gambar Anda di sini",
                "or": "atau",
                "browse": "Pilih gambar",
                "imagePicker": "PEMILIH WARNA DARI GAMBAR",
                "selectColor": "Pilih warna",
                "newImage": "↻ Gambar baru",
                "instruction": "🖱️ Gerakkan mouse di atas gambar lalu klik untuk memilih warna.",
                "selectedColor": "WARNA TERPILIH",
                "colorInformation": "Informasi warna",
                "pickColor": "Pilih warna",
                "addPalette": "+ Tambahkan ke palet saya",
                "yourColors": "WARNA ANDA",
                "myPalette": "Palet saya",
                "clearAll": "Hapus semua",
                "emptyPalette": "Pilih warna dari gambar untuk membuat palet Anda.",
                "needInspiration": "BUTUH INSPIRASI?",
                "exploreTitle": "Jelajahi palet warna yang indah",
                "exploreDescription": "Temukan 100+ kombinasi warna pilihan untuk proyek Anda berikutnya.",
                "exploreButton": "Jelajahi palet →",
                "aboutTitleSmall": "TENTANG COLORPICK",
                "aboutTitle": "Alat sederhana untuk warna yang indah",
                "aboutDescription": "ColorPick membantu desainer, developer, seniman, dan kreator mengekstrak warna dari gambar dengan cepat.",
                "rights": "Hak cipta dilindungi.",
                "paletteBadge": "🎨 100+ palet warna",
                "paletteHero1": "Jelajahi",
                "paletteHero2": "palet warna yang indah.",
                "paletteHeroDescription": "Temukan kombinasi warna yang sempurna untuk situs web, logo, karya seni, atau proyek kreatif Anda berikutnya.",
                "searchPalettes": "Cari palet...",
                "loadMore": "Muat lebih banyak palet",
                "howToUse": "CARA MENGGUNAKAN",
                "findColor": "Menemukan warna yang Anda suka?",
                "howToUseDescription": "Klik warna apa pun dalam palet dan kode HEX-nya akan otomatis disalin ke clipboard.",
                "pickFromImage": "Pilih warna dari gambar →",
                "colorDetails": "Lihat detail warna →",
                "colorCopied": "Warna disalin!"
        },
        "es-MX": {
                "aboutUs": "Acerca de nosotros",
                "privacyPolicy": "Política de privacidad",
                "termsConditions": "Términos y condiciones",
                "contactUs": "Contacto",
                "navSuggestions": "Sugerencias de color",
                "navWheel": "Rueda de color",
                "navCode": "Código de color",
                "brand": "ColorPick",
                "navPicker": "Selector de color",
                "navPalettes": "Explorar paletas",
                "badge": "✨ Herramienta de color en línea gratis",
                "heroTitle1": "Elige cualquier color",
                "heroTitle2": "De cualquier imagen.",
                "heroDescription": "Sube una imagen, haz clic en cualquier parte y obtén al instante los valores exactos HEX, RGB y HSL.",
                "uploadTitle": "Sube tu imagen",
                "uploadDescription": "Arrastra y suelta tu imagen aquí",
                "or": "o",
                "browse": "Buscar imagen",
                "imagePicker": "SELECTOR DE COLOR DE IMAGEN",
                "selectColor": "Selecciona un color",
                "newImage": "↻ Nueva imagen",
                "instruction": "🖱️ Mueve el mouse sobre la imagen y haz clic para seleccionar un color.",
                "selectedColor": "COLOR SELECCIONADO",
                "colorInformation": "Información del color",
                "pickColor": "Selecciona un color",
                "addPalette": "+ Agregar a mi paleta",
                "yourColors": "TUS COLORES",
                "myPalette": "Mi paleta",
                "clearAll": "Borrar todo",
                "emptyPalette": "Selecciona colores de tu imagen para crear tu paleta.",
                "needInspiration": "¿NECESITAS INSPIRACIÓN?",
                "exploreTitle": "Explora hermosas paletas de colores",
                "exploreDescription": "Descubre más de 100 combinaciones de colores seleccionadas para tu próximo proyecto.",
                "exploreButton": "Explorar paletas →",
                "aboutTitleSmall": "ACERCA DE COLORPICK",
                "aboutTitle": "Una herramienta sencilla para colores increíbles",
                "aboutDescription": "ColorPick ayuda a diseñadores, desarrolladores, artistas y creadores a extraer colores de imágenes rápidamente.",
                "rights": "Todos los derechos reservados.",
                "paletteBadge": "🎨 Más de 100 paletas de colores",
                "paletteHero1": "Explora hermosas",
                "paletteHero2": "paletas de colores.",
                "paletteHeroDescription": "Encuentra la combinación de colores perfecta para tu sitio web, logotipo, arte o próximo proyecto creativo.",
                "searchPalettes": "Buscar paletas...",
                "loadMore": "Cargar más paletas",
                "howToUse": "CÓMO USAR",
                "findColor": "¿Encontraste un color que te gusta?",
                "howToUseDescription": "Haz clic en cualquier color dentro de una paleta y su código HEX se copiará automáticamente al portapapeles.",
                "pickFromImage": "Elegir colores de una imagen →",
                "colorDetails": "Ver detalles del color →",
                "colorCopied": "¡Color copiado!"
        },
        "tr": {
                "aboutUs": "Hakkımızda",
                "privacyPolicy": "Gizlilik politikası",
                "termsConditions": "Şartlar ve koşullar",
                "contactUs": "İletişim",
                "navSuggestions": "Renk önerileri",
                "navWheel": "Renk çarkı",
                "navCode": "Renk kodu",
                "brand": "ColorPick",
                "navPicker": "Renk seçici",
                "navPalettes": "Paletleri keşfet",
                "badge": "✨ Ücretsiz çevrimiçi renk aracı",
                "heroTitle1": "Herhangi bir rengi seçin",
                "heroTitle2": "Herhangi bir görselden.",
                "heroDescription": "Bir görsel yükleyin, herhangi bir noktaya tıklayın ve doğru HEX, RGB ve HSL renk değerlerini anında alın.",
                "uploadTitle": "Görselinizi yükleyin",
                "uploadDescription": "Görselinizi buraya sürükleyip bırakın",
                "or": "veya",
                "browse": "Görsel seç",
                "imagePicker": "GÖRSEL RENK SEÇİCİ",
                "selectColor": "Bir renk seçin",
                "newImage": "↻ Yeni görsel",
                "instruction": "🖱️ Renk seçmek için fareyi görsel üzerinde hareket ettirin ve tıklayın.",
                "selectedColor": "SEÇİLEN RENK",
                "colorInformation": "Renk bilgisi",
                "pickColor": "Bir renk seçin",
                "addPalette": "+ Paletime ekle",
                "yourColors": "RENKLERİNİZ",
                "myPalette": "Paletim",
                "clearAll": "Tümünü temizle",
                "emptyPalette": "Paletinizi oluşturmak için görselinizden renkler seçin.",
                "needInspiration": "İLHAM MI ARIYORSUNUZ?",
                "exploreTitle": "Güzel renk paletlerini keşfedin",
                "exploreDescription": "Sonraki projeniz için özenle seçilmiş 100'den fazla renk kombinasyonunu keşfedin.",
                "exploreButton": "Paletleri keşfet →",
                "aboutTitleSmall": "COLORPICK HAKKINDA",
                "aboutTitle": "Güzel renkler için basit bir araç",
                "aboutDescription": "ColorPick; tasarımcıların, geliştiricilerin, sanatçıların ve içerik üreticilerinin görsellerden hızlıca renk çıkarmasına yardımcı olur.",
                "rights": "Tüm hakları saklıdır.",
                "paletteBadge": "🎨 100+ renk paleti",
                "paletteHero1": "Güzel renk",
                "paletteHero2": "paletlerini keşfedin.",
                "paletteHeroDescription": "Web siteniz, logonuz, sanat eseriniz veya sonraki yaratıcı projeniz için mükemmel renk kombinasyonunu bulun.",
                "searchPalettes": "Paletlerde ara...",
                "loadMore": "Daha fazla palet yükle",
                "howToUse": "NASIL KULLANILIR",
                "findColor": "Beğendiğiniz bir renk buldunuz mu?",
                "howToUseDescription": "Bir paletteki herhangi bir renge tıklayın; HEX kodu otomatik olarak panoya kopyalanır.",
                "pickFromImage": "Görselden renk seç →",
                "colorDetails": "Renk ayrıntılarını görüntüle →",
                "colorCopied": "Renk kopyalandı!"
        }


    };



    /* =====================================================
       LANGUAGE NAMES
    ===================================================== */

    const languageNames = {
        en: "English",
        hi: "हिंदी",
        es: "Español",
        fr: "Français",
        de: "Deutsch",
        ja: "日本語",
        vi: "Tiếng Việt",
        fa: "فارسی",
        ru: "Русский",
        "pt-BR": "Português (Brasil)",
        ko: "한국어",
        sv: "Svenska",
        "zh-TW": "繁體中文",
        ro: "Română",
        fil: "Filipino",
        id: "Bahasa Indonesia",
        "es-MX": "Español (México)",
        tr: "Türkçe",
    };



    /* =====================================================
       TRANSLATE PAGE
    ===================================================== */

    function translatePage(language) {

        if (!translations[language]) {
            language = "en";
        }

        currentLanguage = language;

        try {
            localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
        } catch (error) {
            // Continue without persistence if storage is unavailable.
        }

        const dictionary = translations[currentLanguage];


        /* ================================================
           TEXT ELEMENTS
        ================================================ */

        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.dataset.i18n;


                    if (
                        dictionary[key] !== undefined
                    ) {

                        element.textContent =
                            dictionary[key];

                    }

                }
            );



        /* ================================================
           PLACEHOLDERS
        ================================================ */

        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.dataset.i18nPlaceholder;


                    if (
                        dictionary[key] !== undefined
                    ) {

                        element.placeholder =
                            dictionary[key];

                    }

                }
            );



        /* ================================================
           LANGUAGE BUTTON
        ================================================ */

        const languageCurrent =
            document.getElementById(
                "languageCurrent"
            );


        if (languageCurrent) {

            languageCurrent.textContent =
                languageNames[
                    currentLanguage
                ];

        }



        /* ================================================
           HTML LANGUAGE ATTRIBUTE
        ================================================ */

        document.documentElement.lang =
            currentLanguage;



        /* ================================================
           UPDATE PAGE TITLE
        ================================================ */

        updateDocumentTitle(
            currentLanguage
        );

        applyPageTranslations(currentLanguage);
        applyLegalTranslations(currentLanguage);

        if (languageMenu && languageMenu._updateLanguageOptions) {
            languageMenu._updateLanguageOptions();
        }

    }



    /* =====================================================
       PAGE TITLE
    ===================================================== */

    function updateDocumentTitle(language) {
        const path = window.location.pathname.toLowerCase();
        const titles = {
            en: {
                index: "ColorPick - Image Color Picker",
                palettes: "Explore Color Palettes - ColorPick",
                suggestions: "Color Suggestions - ColorPick",
                wheel: "Color Wheel - ColorPick",
                code: "Color Information - ColorPick"
            },
            hi: {
                index: "ColorPick - इमेज कलर पिकर",
                palettes: "कलर पैलेट्स देखें - ColorPick",
                suggestions: "कलर सुझाव - ColorPick",
                wheel: "कलर व्हील - ColorPick",
                code: "कलर जानकारी - ColorPick"
            },
            es: {
                index: "ColorPick - Selector de color de imagen",
                palettes: "Explorar paletas - ColorPick",
                suggestions: "Sugerencias de color - ColorPick",
                wheel: "Rueda de color - ColorPick",
                code: "Información de color - ColorPick"
            },
            fr: {
                index: "ColorPick - Sélecteur de couleur d'image",
                palettes: "Explorer les palettes - ColorPick",
                suggestions: "Suggestions de couleurs - ColorPick",
                wheel: "Roue des couleurs - ColorPick",
                code: "Informations sur la couleur - ColorPick"
            },
            de: {
                index: "ColorPick - Bild-Farbwähler",
                palettes: "Farbpaletten entdecken - ColorPick",
                suggestions: "Farbvorschläge - ColorPick",
                wheel: "Farbrad - ColorPick",
                code: "Farbinformationen - ColorPick"
            },
            ja: {
                index: "ColorPick - 画像カラーピッカー",
                palettes: "カラーパレット - ColorPick",
                suggestions: "カラー提案 - ColorPick",
                wheel: "カラーホイール - ColorPick",
                code: "カラー情報 - ColorPick"
            }
        };
        let page = "index";
        if (path.includes("palettes")) page = "palettes";
        else if (path.includes("color-suggestions")) page = "suggestions";
        else if (path.includes("color-wheel")) page = "wheel";
        else if (path.includes("color-code")) page = "code";
        else if (path.includes("about.html")) { document.title = (language === "hi" ? "ColorPick के बारे में" : language === "es" ? "Sobre ColorPick" : language === "fr" ? "À propos de ColorPick" : language === "de" ? "Über ColorPick" : language === "ja" ? "ColorPickについて" : "About ColorPick") + " - ColorPick"; return; }
        else if (path.includes("privacy-policy.html")) { document.title = (language === "hi" ? "गोपनीयता नीति" : language === "es" ? "Política de privacidad" : language === "fr" ? "Politique de confidentialité" : language === "de" ? "Datenschutzerklärung" : language === "ja" ? "プライバシーポリシー" : "Privacy Policy") + " - ColorPick"; return; }
        else if (path.includes("terms.html")) { document.title = (language === "hi" ? "नियम और शर्तें" : language === "es" ? "Términos y condiciones" : language === "fr" ? "Conditions générales" : language === "de" ? "Allgemeine Geschäftsbedingungen" : language === "ja" ? "利用規約" : "Terms & Conditions") + " - ColorPick"; return; }
        else if (path.includes("contact.html")) { document.title = (language === "hi" ? "संपर्क करें" : language === "es" ? "Contacto" : language === "fr" ? "Nous contacter" : language === "de" ? "Kontakt" : language === "ja" ? "お問い合わせ" : "Contact Us") + " - ColorPick"; return; }
        document.title = (titles[language] && titles[language][page]) || titles.en[page];
    }

    /* =====================================================
       SHARED PAGE TRANSLATIONS
       The original language system only translated elements
       carrying data-i18n. The other pages did not have those
       attributes, so their menu worked but their content stayed
       English. This layer translates those pages too.
    ===================================================== */
    const pageTranslations = {
        en: {
            navPicker: "Color Picker", navPalettes: "Explore Palettes", navSuggestions: "Color Suggestions", navWheel: "Color Wheel",
            suggestionsBadge: "🎨 COLOR COMBINATION TOOL", suggestionsTitle: "Find 3 Colors That Work Together.", suggestionsDesc: "Paste a HEX color code and ColorPick will generate three visually compatible colors with strong contrast for websites, UI, branding and design.", enterColor: "Enter your color code", generate: "Generate Colors", supported: "Supported: HEX (#RGB or #RRGGBB), RGB and HSL.", yourColor: "Your Color", recommended: "3 Recommended Contrasting Colors", clickCopy: "Click any color to copy its HEX code.", howChosen: "💡 How these colors are chosen",
            wheelBadge: "🎨 Color Harmony Tool", wheelTitle: "Create Your Perfect Color Palette", wheelDesc: "Choose a base color, select a harmony, and build a balanced palette with the interactive color wheel.", baseColor: "Base Color", harmony: "Color Harmony", analogous: "Analogous", monochromatic: "Monochromatic", complementary: "Complementary", triadic: "Triadic", split: "Split Complementary", square: "Square", double: "Double Complementary", custom: "Custom", saturation: "Saturation", lightness: "Lightness", wheelTip: "Click or drag any point on the wheel to change hue and saturation together. You can rotate and change the color in one continuous movement.", paletteTitle: "Your Color Palette", paletteDesc: "Colors next to each other create a harmonious, cohesive palette.", copyPalette: "Copy Palette",
            codeBadge: "🎨 COLOR INFORMATION", codeDesc: "Explore color formats, shades, tints and harmonious combinations for your selected color.", backPicker: "← Back to Color Picker", copyHex: "Copy HEX", conversion: "Color Conversion", shadesTints: "Shades & Tints", shadesDesc: "Shades are created by mixing the selected color with black. Tints are created by mixing it with white.", shades: "Shades", tints: "Tints", combinations: "Color Combinations", combinationsDesc: "Use these simple color harmonies to build balanced palettes around your selected color."
        },
        hi: {
            navPicker: "कलर पिकर", navPalettes: "कलर पैलेट्स", navSuggestions: "कलर सुझाव", navWheel: "कलर व्हील",
            suggestionsBadge: "🎨 कलर कॉम्बिनेशन टूल", suggestionsTitle: "ऐसे 3 रंग खोजें जो साथ में अच्छे लगें।", suggestionsDesc: "HEX रंग कोड डालें और ColorPick वेबसाइट, UI, ब्रांडिंग और डिज़ाइन के लिए अच्छे कॉन्ट्रास्ट वाले तीन रंग बनाएगा।", enterColor: "अपना रंग कोड डालें", generate: "रंग बनाएं", supported: "समर्थित: HEX (#RGB या #RRGGBB), RGB और HSL।", yourColor: "आपका रंग", recommended: "3 सुझाए गए कॉन्ट्रास्टिंग रंग", clickCopy: "HEX कोड कॉपी करने के लिए किसी भी रंग पर क्लिक करें।", howChosen: "💡 ये रंग कैसे चुने जाते हैं",
            wheelBadge: "🎨 कलर हार्मनी टूल", wheelTitle: "अपना परफेक्ट कलर पैलेट बनाएं", wheelDesc: "एक बेस रंग चुनें, हार्मनी चुनें और इंटरैक्टिव कलर व्हील से संतुलित पैलेट बनाएं।", baseColor: "बेस रंग", harmony: "कलर हार्मनी", analogous: "एनालॉगस", monochromatic: "मोनोक्रोमैटिक", complementary: "कॉम्प्लीमेंटरी", triadic: "ट्रायडिक", split: "स्प्लिट कॉम्प्लीमेंटरी", square: "स्क्वेयर", double: "डबल कॉम्प्लीमेंटरी", custom: "कस्टम", saturation: "सैचुरेशन", lightness: "लाइटनेस", wheelTip: "ह्यू और सैचुरेशन बदलने के लिए व्हील पर किसी बिंदु को क्लिक या ड्रैग करें।", paletteTitle: "आपका कलर पैलेट", paletteDesc: "एक-दूसरे के पास के रंग एक सामंजस्यपूर्ण पैलेट बनाते हैं।", copyPalette: "पैलेट कॉपी करें",
            codeBadge: "🎨 कलर जानकारी", codeDesc: "चुने गए रंग के फॉर्मेट, शेड्स, टिंट्स और हार्मोनियस संयोजन देखें।", backPicker: "← कलर पिकर पर वापस जाएं", copyHex: "HEX कॉपी करें", conversion: "कलर कन्वर्ज़न", shadesTints: "शेड्स और टिंट्स", shadesDesc: "शेड्स में चुने गए रंग को काले रंग के साथ मिलाया जाता है। टिंट्स में उसे सफेद रंग के साथ मिलाया जाता है।", shades: "शेड्स", tints: "टिंट्स", combinations: "कलर संयोजन", combinationsDesc: "अपने चुने हुए रंग के आसपास संतुलित पैलेट बनाने के लिए इन सरल कलर हार्मनी का उपयोग करें।"
        },
        es: {
            navPicker: "Selector de color", navPalettes: "Explorar paletas", navSuggestions: "Sugerencias de color", navWheel: "Rueda de color",
            suggestionsBadge: "🎨 HERRAMIENTA DE COMBINACIÓN DE COLORES", suggestionsTitle: "Encuentra 3 colores que funcionen juntos.", suggestionsDesc: "Introduce un código HEX y ColorPick generará tres colores visualmente compatibles con buen contraste para sitios web, UI, branding y diseño.", enterColor: "Introduce tu código de color", generate: "Generar colores", supported: "Compatible: HEX (#RGB o #RRGGBB), RGB y HSL.", yourColor: "Tu color", recommended: "3 colores recomendados con contraste", clickCopy: "Haz clic en cualquier color para copiar su código HEX.", howChosen: "💡 Cómo se eligen estos colores",
            wheelBadge: "🎨 HERRAMIENTA DE ARMONÍA DE COLOR", wheelTitle: "Crea tu paleta de colores perfecta", wheelDesc: "Elige un color base, selecciona una armonía y crea una paleta equilibrada con la rueda de color interactiva.", baseColor: "Color base", harmony: "Armonía de color", analogous: "Análogos", monochromatic: "Monocromático", complementary: "Complementario", triadic: "Triádico", split: "Complementario dividido", square: "Cuadrado", double: "Complementario doble", custom: "Personalizado", saturation: "Saturación", lightness: "Luminosidad", wheelTip: "Haz clic o arrastra cualquier punto de la rueda para cambiar el tono y la saturación.", paletteTitle: "Tu paleta de colores", paletteDesc: "Los colores cercanos forman una paleta armoniosa y cohesiva.", copyPalette: "Copiar paleta",
            codeBadge: "🎨 INFORMACIÓN DEL COLOR", codeDesc: "Explora formatos, sombras, tintes y combinaciones armoniosas para el color seleccionado.", backPicker: "← Volver al selector de color", copyHex: "Copiar HEX", conversion: "Conversión de color", shadesTints: "Sombras y tintes", shadesDesc: "Las sombras se crean mezclando el color seleccionado con negro. Los tintes se crean mezclándolo con blanco.", shades: "Sombras", tints: "Tintes", combinations: "Combinaciones de colores", combinationsDesc: "Usa estas armonías para crear paletas equilibradas alrededor del color seleccionado."
        },
        fr: {
            navPicker: "Sélecteur de couleur", navPalettes: "Explorer les palettes", navSuggestions: "Suggestions de couleurs", navWheel: "Roue des couleurs",
            suggestionsBadge: "🎨 OUTIL DE COMBINAISON DE COULEURS", suggestionsTitle: "Trouvez 3 couleurs qui vont ensemble.", suggestionsDesc: "Entrez un code HEX et ColorPick générera trois couleurs compatibles avec un contraste adapté aux sites web, à l’UI, au branding et au design.", enterColor: "Entrez votre code couleur", generate: "Générer les couleurs", supported: "Pris en charge : HEX (#RGB ou #RRGGBB), RGB et HSL.", yourColor: "Votre couleur", recommended: "3 couleurs contrastées recommandées", clickCopy: "Cliquez sur une couleur pour copier son code HEX.", howChosen: "💡 Comment ces couleurs sont choisies",
            wheelBadge: "🎨 OUTIL D’HARMONIE DES COULEURS", wheelTitle: "Créez votre palette de couleurs parfaite", wheelDesc: "Choisissez une couleur de base, une harmonie et construisez une palette équilibrée avec la roue interactive.", baseColor: "Couleur de base", harmony: "Harmonie des couleurs", analogous: "Analogues", monochromatic: "Monochromatique", complementary: "Complémentaire", triadic: "Triadique", split: "Complémentaire scindée", square: "Carré", double: "Double complémentaire", custom: "Personnalisée", saturation: "Saturation", lightness: "Luminosité", wheelTip: "Cliquez ou faites glisser un point de la roue pour modifier la teinte et la saturation.", paletteTitle: "Votre palette de couleurs", paletteDesc: "Les couleurs voisines créent une palette harmonieuse et cohérente.", copyPalette: "Copier la palette",
            codeBadge: "🎨 INFORMATIONS SUR LA COULEUR", codeDesc: "Explorez les formats, nuances, teintes et combinaisons harmonieuses de la couleur sélectionnée.", backPicker: "← Retour au sélecteur de couleur", copyHex: "Copier le HEX", conversion: "Conversion de couleur", shadesTints: "Nuances et teintes", shadesDesc: "Les nuances sont créées en mélangeant la couleur sélectionnée avec du noir. Les teintes avec du blanc.", shades: "Nuances", tints: "Teintes", combinations: "Combinaisons de couleurs", combinationsDesc: "Utilisez ces harmonies pour créer des palettes équilibrées autour de la couleur sélectionnée."
        },
        de: {
            navPicker: "Farbwähler", navPalettes: "Paletten entdecken", navSuggestions: "Farbvorschläge", navWheel: "Farbrad",
            suggestionsBadge: "🎨 FARBKOMBINATIONSTOOL", suggestionsTitle: "Finde 3 Farben, die zusammenpassen.", suggestionsDesc: "Gib einen HEX-Farbcode ein und ColorPick erstellt drei visuell passende Farben mit starkem Kontrast für Websites, UI, Branding und Design.", enterColor: "Farbcode eingeben", generate: "Farben erzeugen", supported: "Unterstützt: HEX (#RGB oder #RRGGBB), RGB und HSL.", yourColor: "Deine Farbe", recommended: "3 empfohlene kontrastreiche Farben", clickCopy: "Klicke auf eine Farbe, um den HEX-Code zu kopieren.", howChosen: "💡 So werden diese Farben ausgewählt",
            wheelBadge: "🎨 FARBHARMONIE-TOOL", wheelTitle: "Erstelle deine perfekte Farbpalette", wheelDesc: "Wähle eine Grundfarbe und Harmonie und erstelle mit dem interaktiven Farbrad eine ausgewogene Palette.", baseColor: "Grundfarbe", harmony: "Farbharmonie", analogous: "Analog", monochromatic: "Monochrom", complementary: "Komplementär", triadic: "Triadisch", split: "Geteilt-komplementär", square: "Quadrat", double: "Doppelt-komplementär", custom: "Benutzerdefiniert", saturation: "Sättigung", lightness: "Helligkeit", wheelTip: "Klicke oder ziehe einen Punkt auf dem Rad, um Farbton und Sättigung zu ändern.", paletteTitle: "Deine Farbpalette", paletteDesc: "Benachbarte Farben ergeben eine harmonische, zusammenhängende Palette.", copyPalette: "Palette kopieren",
            codeBadge: "🎨 FARBINFORMATIONEN", codeDesc: "Erkunde Formate, Schattierungen, Tönungen und harmonische Kombinationen für deine ausgewählte Farbe.", backPicker: "← Zurück zum Farbwähler", copyHex: "HEX kopieren", conversion: "Farbkonvertierung", shadesTints: "Schattierungen & Tönungen", shadesDesc: "Schattierungen entstehen durch Mischen der Farbe mit Schwarz, Tönungen durch Mischen mit Weiß.", shades: "Schattierungen", tints: "Tönungen", combinations: "Farbkombinationen", combinationsDesc: "Nutze diese Farbharmonien, um ausgewogene Paletten rund um deine ausgewählte Farbe zu erstellen."
        },
        ja: {
            navPicker: "カラーピッカー", navPalettes: "パレットを探索", navSuggestions: "カラー提案", navWheel: "カラーホイール",
            suggestionsBadge: "🎨 カラーコンビネーションツール", suggestionsTitle: "一緒に使える3色を見つけよう。", suggestionsDesc: "HEXカラーコードを入力すると、Webサイト、UI、ブランディング、デザインに使えるコントラストの強い3色を生成します。", enterColor: "カラーコードを入力", generate: "カラーを生成", supported: "対応: HEX (#RGB / #RRGGBB)、RGB、HSL。", yourColor: "あなたの色", recommended: "おすすめのコントラストカラー3色", clickCopy: "色をクリックするとHEXコードをコピーできます。", howChosen: "💡 色の選び方",
            wheelBadge: "🎨 カラーハーモニーツール", wheelTitle: "理想のカラーパレットを作成", wheelDesc: "ベースカラーとハーモニーを選び、インタラクティブなカラーホイールでバランスの良いパレットを作ります。", baseColor: "ベースカラー", harmony: "カラーハーモニー", analogous: "類似色", monochromatic: "モノクロマティック", complementary: "補色", triadic: "トライアド", split: "分割補色", square: "スクエア", double: "ダブル補色", custom: "カスタム", saturation: "彩度", lightness: "明度", wheelTip: "ホイール上の点をクリックまたはドラッグして色相と彩度を変更できます。", paletteTitle: "あなたのカラーパレット", paletteDesc: "隣り合う色は調和のとれた一体感のあるパレットを作ります。", copyPalette: "パレットをコピー",
            codeBadge: "🎨 カラー情報", codeDesc: "選択した色の形式、シェード、ティント、調和のとれた組み合わせを確認できます。", backPicker: "← カラーピッカーに戻る", copyHex: "HEXをコピー", conversion: "カラー変換", shadesTints: "シェードとティント", shadesDesc: "シェードは選択色に黒を混ぜ、ティントは白を混ぜて作ります。", shades: "シェード", tints: "ティント", combinations: "カラーコンビネーション", combinationsDesc: "これらのハーモニーを使って、選択した色を中心にバランスの良いパレットを作成できます。"
        }
    };

    /* =====================================================
       LEGAL / INFORMATION PAGES
       These pages are part of the same MPA and use the same
       language preference as the color tools.
    ===================================================== */
    const legalTranslations = {
      en: {
        about:{badge:'🎨 About ColorPick',title:'About ColorPick',desc:'Simple browser-based color tools for discovering, understanding and using colors with confidence.',h:['Our purpose','What we build','Designed for practical work','Browser-first experience','Our approach to improvement','Independent use','Get in touch']},
        privacy:{badge:'Privacy Policy',title:'Privacy Policy',desc:'A clear overview of the information ColorPick may process when you use the website.',h:['Effective date','Information processed in your browser','Images and color picking','Contact information','Cookies and similar technologies','Third-party services','Data retention and security','Your choices','Changes to this policy','Contact']},
        terms:{badge:'Terms & Conditions',title:'Terms & Conditions',desc:'Rules and guidelines for using ColorPick and its browser-based color tools.',h:['Acceptance of these terms','The service','Color information','Acceptable use','Intellectual property','Your content','Availability','No professional advice','Limitation of liability','Changes','Contact']},
        contact:{badge:'Contact Us',title:'Contact Us',desc:'Have a question, found a bug, or have an idea that could make ColorPick better? Get in touch.',h:['We would like to hear from you','Email','What to include in a bug report','Feature requests','Accessibility feedback','Business and collaboration','Response expectations','Related pages']}
      },
      hi: {
        about:{badge:'🎨 ColorPick के बारे में',title:'ColorPick के बारे में',desc:'रंगों को खोजने, समझने और आत्मविश्वास से उपयोग करने के लिए सरल ब्राउज़र-आधारित रंग टूल।',h:['हमारा उद्देश्य','हम क्या बनाते हैं','व्यावहारिक काम के लिए डिज़ाइन','ब्राउज़र-आधारित अनुभव','हमारा सुधार दृष्टिकोण','सामान्य उपयोग','संपर्क करें']},
        privacy:{badge:'गोपनीयता नीति',title:'गोपनीयता नीति',desc:'वेबसाइट का उपयोग करते समय ColorPick द्वारा संसाधित की जा सकने वाली जानकारी का स्पष्ट विवरण।',h:['प्रभावी तिथि','आपके ब्राउज़र में संसाधित जानकारी','इमेज और कलर पिकिंग','संपर्क जानकारी','कुकीज़ और समान तकनीकें','तृतीय-पक्ष सेवाएँ','डेटा संग्रह और सुरक्षा','आपके विकल्प','इस नीति में बदलाव','संपर्क']},
        terms:{badge:'नियम और शर्तें',title:'नियम और शर्तें',desc:'ColorPick और इसके ब्राउज़र-आधारित रंग टूल का उपयोग करने के नियम और दिशानिर्देश।',h:['इन शर्तों की स्वीकृति','सेवा','रंग जानकारी','स्वीकार्य उपयोग','बौद्धिक संपदा','आपकी सामग्री','उपलब्धता','पेशेवर सलाह नहीं','दायित्व की सीमा','बदलाव','संपर्क']},
        contact:{badge:'संपर्क करें',title:'संपर्क करें',desc:'कोई सवाल है, बग मिला है या ColorPick को बेहतर बनाने का विचार है? हमसे संपर्क करें।',h:['हम आपसे सुनना चाहते हैं','ईमेल','बग रिपोर्ट में क्या शामिल करें','फीचर अनुरोध','एक्सेसिबिलिटी फीडबैक','व्यवसाय और सहयोग','उत्तर की अपेक्षाएँ','संबंधित पेज']}
      },
      es: {
        about:{badge:'🎨 Sobre ColorPick',title:'Sobre ColorPick',desc:'Herramientas de color sencillas basadas en el navegador para descubrir, comprender y usar colores con confianza.',h:['Nuestro propósito','Lo que creamos','Diseñado para el trabajo práctico','Experiencia basada en el navegador','Nuestro enfoque de mejora','Uso general','Ponte en contacto']},
        privacy:{badge:'Política de privacidad',title:'Política de privacidad',desc:'Una descripción clara de la información que ColorPick puede procesar cuando utilizas el sitio web.',h:['Fecha de vigencia','Información procesada en tu navegador','Imágenes y selección de color','Información de contacto','Cookies y tecnologías similares','Servicios de terceros','Conservación y seguridad de datos','Tus opciones','Cambios en esta política','Contacto']},
        terms:{badge:'Términos y condiciones',title:'Términos y condiciones',desc:'Reglas y pautas para usar ColorPick y sus herramientas de color basadas en el navegador.',h:['Aceptación de estos términos','El servicio','Información de color','Uso aceptable','Propiedad intelectual','Tu contenido','Disponibilidad','No es asesoramiento profesional','Limitación de responsabilidad','Cambios','Contacto']},
        contact:{badge:'Contacto',title:'Contacto',desc:'¿Tienes una pregunta, encontraste un error o tienes una idea para mejorar ColorPick? Escríbenos.',h:['Nos gustaría saber de ti','Correo electrónico','Qué incluir en un informe de errores','Solicitudes de funciones','Comentarios de accesibilidad','Negocios y colaboración','Expectativas de respuesta','Páginas relacionadas']}
      },
      fr: {
        about:{badge:'🎨 À propos de ColorPick',title:'À propos de ColorPick',desc:'Des outils de couleur simples dans le navigateur pour découvrir, comprendre et utiliser les couleurs en toute confiance.',h:['Notre objectif','Ce que nous créons','Conçu pour un travail pratique','Expérience dans le navigateur','Notre approche d’amélioration','Utilisation générale','Nous contacter']},
        privacy:{badge:'Politique de confidentialité',title:'Politique de confidentialité',desc:'Un aperçu clair des informations que ColorPick peut traiter lorsque vous utilisez le site.',h:['Date d’entrée en vigueur','Informations traitées dans votre navigateur','Images et sélection de couleurs','Informations de contact','Cookies et technologies similaires','Services tiers','Conservation et sécurité des données','Vos choix','Modifications de cette politique','Contact']},
        terms:{badge:'Conditions générales',title:'Conditions générales',desc:'Règles et directives pour utiliser ColorPick et ses outils de couleur dans le navigateur.',h:['Acceptation de ces conditions','Le service','Informations sur les couleurs','Utilisation acceptable','Propriété intellectuelle','Votre contenu','Disponibilité','Aucun conseil professionnel','Limitation de responsabilité','Modifications','Contact']},
        contact:{badge:'Nous contacter',title:'Nous contacter',desc:'Une question, un bug ou une idée pour améliorer ColorPick ? Contactez-nous.',h:['Nous aimerions vous entendre','E-mail','Que mettre dans un rapport de bug','Demandes de fonctionnalités','Retour sur l’accessibilité','Entreprise et collaboration','Délai de réponse','Pages associées']}
      },
      de: {
        about:{badge:'🎨 Über ColorPick',title:'Über ColorPick',desc:'Einfache browserbasierte Farbtools zum Entdecken, Verstehen und sicheren Verwenden von Farben.',h:['Unser Zweck','Was wir entwickeln','Für praktische Arbeit entwickelt','Browserbasiertes Erlebnis','Unser Verbesserungsansatz','Allgemeine Nutzung','Kontakt aufnehmen']},
        privacy:{badge:'Datenschutzerklärung',title:'Datenschutzerklärung',desc:'Ein klarer Überblick über Informationen, die ColorPick bei der Nutzung der Website verarbeiten kann.',h:['Gültigkeitsdatum','In Ihrem Browser verarbeitete Informationen','Bilder und Farbauswahl','Kontaktinformationen','Cookies und ähnliche Technologien','Drittanbieterdienste','Datenspeicherung und Sicherheit','Ihre Möglichkeiten','Änderungen dieser Richtlinie','Kontakt']},
        terms:{badge:'Allgemeine Geschäftsbedingungen',title:'Allgemeine Geschäftsbedingungen',desc:'Regeln und Richtlinien für die Nutzung von ColorPick und seinen browserbasierten Farbtools.',h:['Akzeptanz dieser Bedingungen','Der Dienst','Farbinformationen','Zulässige Nutzung','Geistiges Eigentum','Ihre Inhalte','Verfügbarkeit','Keine professionelle Beratung','Haftungsbeschränkung','Änderungen','Kontakt']},
        contact:{badge:'Kontakt',title:'Kontakt',desc:'Eine Frage, ein Fehler oder eine Idee, die ColorPick verbessern könnte? Kontaktieren Sie uns.',h:['Wir möchten von Ihnen hören','E-Mail','Was in einen Fehlerbericht gehört','Funktionswünsche','Feedback zur Barrierefreiheit','Geschäft und Zusammenarbeit','Antworterwartungen','Verwandte Seiten']}
      },
      ja: {
        about:{badge:'🎨 ColorPickについて',title:'ColorPickについて',desc:'色を見つけ、理解し、自信を持って使うためのシンプルなブラウザベースのカラー ツールです。',h:['私たちの目的','私たちが作るもの','実用的な作業のための設計','ブラウザベースの体験','改善への取り組み','一般的な利用','お問い合わせ']},
        privacy:{badge:'プライバシーポリシー',title:'プライバシーポリシー',desc:'ColorPickのウェブサイト利用時に処理する可能性のある情報について説明します。',h:['発効日','ブラウザで処理される情報','画像とカラー選択','連絡先情報','Cookieと類似技術','第三者サービス','データの保存と安全性','ユーザーの選択','ポリシーの変更','お問い合わせ']},
        terms:{badge:'利用規約',title:'利用規約',desc:'ColorPickとブラウザベースのカラー ツールを利用するためのルールとガイドラインです。',h:['規約への同意','サービス','カラー情報','許可される利用','知的財産','ユーザーのコンテンツ','提供状況','専門的助言ではありません','責任の制限','変更','お問い合わせ']},
        contact:{badge:'お問い合わせ',title:'お問い合わせ',desc:'質問、バグ報告、ColorPickを改善するアイデアがあれば、ぜひご連絡ください。',h:['ご意見をお聞かせください','メール','バグ報告に含める内容','機能リクエスト','アクセシビリティに関するご意見','ビジネスと協業','返信について','関連ページ']}
      }
    };

    const WEB3FORMS_ACCESS_KEY = window.COLORPICK_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
    const contactFormTranslations = {
      en:{formTitle:'Send us your feedback',formDesc:'Use this form to ask a question, report a bug, suggest an improvement, or share feedback about ColorPick.',nameLabel:'Name',namePlaceholder:'Your name (optional)',emailLabel:'Email',emailPlaceholder:'you@example.com (optional)',typeLabel:'Feedback type',typeBug:'Bug report',typeFeature:'Feature suggestion',typeAccessibility:'Accessibility feedback',typeQuestion:'Question',typeOther:'Other feedback',messageLabel:'Your feedback',messagePlaceholder:'Tell us what you would like us to know...',submit:'Send Feedback',note:'Please do not include passwords, payment information, or other sensitive information.',tipsTitle:'Helpful feedback gets a faster response',bugTitle:'Reporting a bug',bugText:'Tell us which ColorPick page you used, what device and browser you were using, what you expected, and what happened instead.',featureTitle:'Suggesting a feature',featureText:'Describe the problem you are trying to solve and how a new feature would make the color workflow easier.',accessTitle:'Accessibility',accessText:'If a control, menu, contrast choice, or layout is difficult to use with a keyboard, screen reader, zoom, or mobile device, let us know.',sending:'Sending...',success:'Thank you for submitting your feedback!',error:'Sorry, your message could not be sent. Please try again.'},
      hi:{formTitle:'अपना फीडबैक भेजें',formDesc:'सवाल पूछने, बग रिपोर्ट करने, सुधार सुझाने या ColorPick के बारे में फीडबैक साझा करने के लिए इस फॉर्म का उपयोग करें।',nameLabel:'नाम',namePlaceholder:'आपका नाम (वैकल्पिक)',emailLabel:'ईमेल',emailPlaceholder:'you@example.com (वैकल्पिक)',typeLabel:'फीडबैक प्रकार',typeBug:'बग रिपोर्ट',typeFeature:'फीचर सुझाव',typeAccessibility:'एक्सेसिबिलिटी फीडबैक',typeQuestion:'सवाल',typeOther:'अन्य फीडबैक',messageLabel:'आपका फीडबैक',messagePlaceholder:'हमें बताएं कि आप क्या साझा करना चाहते हैं...',submit:'फीडबैक भेजें',note:'पासवर्ड, भुगतान जानकारी या अन्य संवेदनशील जानकारी न भेजें।',tipsTitle:'स्पष्ट फीडबैक से बेहतर जवाब मिलता है',bugTitle:'बग रिपोर्ट करना',bugText:'बताएं कि आपने ColorPick का कौन सा पेज इस्तेमाल किया, कौन सा डिवाइस और ब्राउज़र था, क्या होना चाहिए था और वास्तव में क्या हुआ।',featureTitle:'फीचर सुझाएं',featureText:'बताएं कि आप किस समस्या को हल करना चाहते हैं और नया फीचर आपके काम को कैसे आसान बनाएगा।',accessTitle:'एक्सेसिबिलिटी',accessText:'अगर कोई बटन, मेनू, कंट्रास्ट या लेआउट कीबोर्ड, स्क्रीन रीडर, ज़ूम या मोबाइल पर कठिन है, तो हमें बताएं।',sending:'भेजा जा रहा है...',success:'फीडबैक भेजने के लिए धन्यवाद!',error:'माफ़ कीजिए, आपका संदेश नहीं भेजा जा सका। कृपया फिर कोशिश करें।'},
      es:{formTitle:'Envíanos tus comentarios',formDesc:'Usa este formulario para hacer una pregunta, informar de un error, sugerir una mejora o compartir comentarios sobre ColorPick.',nameLabel:'Nombre',namePlaceholder:'Tu nombre (opcional)',emailLabel:'Correo electrónico',emailPlaceholder:'you@example.com (opcional)',typeLabel:'Tipo de comentario',typeBug:'Informe de error',typeFeature:'Sugerencia de función',typeAccessibility:'Comentarios de accesibilidad',typeQuestion:'Pregunta',typeOther:'Otros comentarios',messageLabel:'Tus comentarios',messagePlaceholder:'Cuéntanos qué te gustaría compartir...',submit:'Enviar comentarios',note:'No incluyas contraseñas, información de pago ni otros datos sensibles.',tipsTitle:'Los comentarios claros ayudan a responder mejor',bugTitle:'Informar de un error',bugText:'Indica qué página de ColorPick usabas, qué dispositivo y navegador tenías, qué esperabas y qué ocurrió.',featureTitle:'Sugerir una función',featureText:'Describe el problema que quieres resolver y cómo una nueva función haría más fácil tu flujo de trabajo.',accessTitle:'Accesibilidad',accessText:'Si un control, menú, contraste o diseño es difícil de usar con teclado, lector de pantalla, zoom o móvil, cuéntanoslo.',sending:'Enviando...',success:'¡Gracias por enviar tus comentarios!',error:'No se pudo enviar el mensaje. Inténtalo de nuevo.'},
      fr:{formTitle:'Envoyez-nous vos commentaires',formDesc:'Utilisez ce formulaire pour poser une question, signaler un bug, suggérer une amélioration ou partager vos commentaires sur ColorPick.',nameLabel:'Nom',namePlaceholder:'Votre nom (facultatif)',emailLabel:'E-mail',emailPlaceholder:'you@example.com (facultatif)',typeLabel:'Type de commentaire',typeBug:'Signaler un bug',typeFeature:'Suggestion de fonctionnalité',typeAccessibility:'Retour sur l’accessibilité',typeQuestion:'Question',typeOther:'Autre commentaire',messageLabel:'Votre commentaire',messagePlaceholder:'Dites-nous ce que vous souhaitez partager...',submit:'Envoyer le commentaire',note:'N’incluez pas de mots de passe, d’informations de paiement ou d’autres données sensibles.',tipsTitle:'Des commentaires précis facilitent la réponse',bugTitle:'Signaler un bug',bugText:'Indiquez la page ColorPick utilisée, votre appareil et navigateur, ce que vous attendiez et ce qui s’est produit.',featureTitle:'Suggérer une fonctionnalité',featureText:'Décrivez le problème à résoudre et expliquez comment une nouvelle fonctionnalité faciliterait votre travail.',accessTitle:'Accessibilité',accessText:'Si un contrôle, un menu, un contraste ou une mise en page est difficile à utiliser au clavier, avec un lecteur d’écran, le zoom ou un mobile, dites-le-nous.',sending:'Envoi...',success:'Merci d’avoir envoyé vos commentaires !',error:'Impossible d’envoyer le message. Veuillez réessayer.'},
      de:{formTitle:'Feedback senden',formDesc:'Nutzen Sie dieses Formular für Fragen, Fehlerberichte, Verbesserungsvorschläge oder Feedback zu ColorPick.',nameLabel:'Name',namePlaceholder:'Ihr Name (optional)',emailLabel:'E-Mail',emailPlaceholder:'you@example.com (optional)',typeLabel:'Feedback-Typ',typeBug:'Fehlerbericht',typeFeature:'Funktionsvorschlag',typeAccessibility:'Feedback zur Barrierefreiheit',typeQuestion:'Frage',typeOther:'Sonstiges',messageLabel:'Ihr Feedback',messagePlaceholder:'Teilen Sie uns mit, was Sie uns mitteilen möchten...',submit:'Feedback senden',note:'Bitte senden Sie keine Passwörter, Zahlungsdaten oder andere vertrauliche Informationen.',tipsTitle:'Klare Rückmeldungen helfen bei einer schnellen Antwort',bugTitle:'Fehler melden',bugText:'Nennen Sie die verwendete ColorPick-Seite, Gerät und Browser, das erwartete Verhalten und was tatsächlich passiert ist.',featureTitle:'Funktion vorschlagen',featureText:'Beschreiben Sie das Problem und wie eine neue Funktion Ihren Farb-Workflow verbessern würde.',accessTitle:'Barrierefreiheit',accessText:'Wenn ein Bedienelement, Menü, Kontrast oder Layout mit Tastatur, Screenreader, Zoom oder Mobilgerät schwer nutzbar ist, teilen Sie es uns mit.',sending:'Wird gesendet...',success:'Vielen Dank für Ihr Feedback!',error:'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'},
      ja:{formTitle:'フィードバックを送る',formDesc:'質問、バグ報告、改善提案、ColorPickへのご意見をこのフォームからお送りください。',nameLabel:'名前',namePlaceholder:'お名前（任意）',emailLabel:'メール',emailPlaceholder:'you@example.com（任意）',typeLabel:'フィードバックの種類',typeBug:'バグ報告',typeFeature:'機能提案',typeAccessibility:'アクセシビリティ',typeQuestion:'質問',typeOther:'その他',messageLabel:'フィードバック',messagePlaceholder:'お知らせになりたい内容を入力してください...',submit:'フィードバックを送信',note:'パスワード、支払い情報、その他の機密情報は入力しないでください。',tipsTitle:'具体的なフィードバックは確認しやすくなります',bugTitle:'バグを報告する',bugText:'使用したColorPickのページ、端末とブラウザ、期待した結果、実際に起きたことを教えてください。',featureTitle:'機能を提案する',featureText:'解決したい問題と、新機能によって作業がどう楽になるかを説明してください。',accessTitle:'アクセシビリティ',accessText:'キーボード、スクリーンリーダー、ズーム、モバイル端末などで操作しにくい部分があればお知らせください。',sending:'送信中...',success:'フィードバックを送信していただきありがとうございます！',error:'メッセージを送信できませんでした。もう一度お試しください。'}
    };
    const contactFallback = contactFormTranslations.en;
    const contactOther = {
      vi:['Gửi phản hồi','Sử dụng biểu mẫu này để đặt câu hỏi, báo lỗi, đề xuất cải tiến hoặc chia sẻ ý kiến về ColorPick.','Tên','Tên của bạn (tùy chọn)','Email','you@example.com (tùy chọn)','Loại phản hồi','Báo lỗi','Đề xuất tính năng','Phản hồi về khả năng tiếp cận','Câu hỏi','Phản hồi khác','Phản hồi của bạn','Hãy cho chúng tôi biết điều bạn muốn chia sẻ...','Gửi phản hồi','Vui lòng không gửi mật khẩu, thông tin thanh toán hoặc dữ liệu nhạy cảm khác.','Gửi...','Cảm ơn bạn đã gửi phản hồi!','Không thể gửi tin nhắn. Vui lòng thử lại.'],
      fa:['ارسال بازخورد','برای پرسش، گزارش خطا، پیشنهاد بهبود یا ارسال نظر درباره ColorPick از این فرم استفاده کنید.','نام','نام شما (اختیاری)','ایمیل','you@example.com (اختیاری)','نوع بازخورد','گزارش خطا','پیشنهاد قابلیت','بازخورد دسترس‌پذیری','سؤال','بازخورد دیگر','بازخورد شما','پیام خود را بنویسید...','ارسال بازخورد','لطفاً رمز عبور، اطلاعات پرداخت یا اطلاعات حساس دیگر را ارسال نکنید.','در حال ارسال...','از ارسال بازخورد شما متشکریم!','ارسال پیام ممکن نشد. دوباره تلاش کنید.'],
      ru:['Отправить отзыв','Используйте форму, чтобы задать вопрос, сообщить об ошибке, предложить улучшение или оставить отзыв о ColorPick.','Имя','Ваше имя (необязательно)','Эл. почта','you@example.com (необязательно)','Тип отзыва','Сообщение об ошибке','Предложение функции','Доступность','Вопрос','Другое','Ваш отзыв','Расскажите, что вы хотите сообщить...','Отправить отзыв','Не указывайте пароли, платёжные данные или другую конфиденциальную информацию.','Отправка...','Спасибо за ваш отзыв!','Не удалось отправить сообщение. Попробуйте ещё раз.'],
      'pt-BR':['Envie seu feedback','Use este formulário para fazer uma pergunta, relatar um erro, sugerir uma melhoria ou enviar comentários sobre o ColorPick.','Nome','Seu nome (opcional)','E-mail','you@example.com (opcional)','Tipo de feedback','Relatório de erro','Sugestão de recurso','Acessibilidade','Pergunta','Outro feedback','Seu feedback','Conte o que você gostaria de compartilhar...','Enviar feedback','Não inclua senhas, informações de pagamento ou outros dados sensíveis.','Enviando...','Obrigado por enviar seu feedback!','Não foi possível enviar a mensagem. Tente novamente.'],
      ko:['피드백 보내기','질문, 버그 신고, 개선 제안 또는 ColorPick에 대한 의견을 이 양식으로 보내주세요.','이름','이름 (선택 사항)','이메일','you@example.com (선택 사항)','피드백 유형','버그 신고','기능 제안','접근성 의견','질문','기타 의견','피드백','알리고 싶은 내용을 입력하세요...','피드백 보내기','비밀번호, 결제 정보 또는 기타 민감한 정보를 입력하지 마세요.','전송 중...','피드백을 보내주셔서 감사합니다!','메시지를 보내지 못했습니다. 다시 시도해 주세요.'],
      sv:['Skicka feedback','Använd formuläret för frågor, felrapporter, förbättringsförslag eller feedback om ColorPick.','Namn','Ditt namn (valfritt)','E-post','you@example.com (valfritt)','Typ av feedback','Felrapport','Funktionsförslag','Tillgänglighetsfeedback','Fråga','Övrig feedback','Din feedback','Berätta vad du vill dela med oss...','Skicka feedback','Skicka inte lösenord, betalningsuppgifter eller annan känslig information.','Skickar...','Tack för din feedback!','Meddelandet kunde inte skickas. Försök igen.'],
      'zh-TW':['送出意見','使用此表單提問、回報錯誤、提出改進建議或分享對 ColorPick 的意見。','姓名','您的姓名（選填）','電子郵件','you@example.com（選填）','意見類型','錯誤回報','功能建議','無障礙意見','問題','其他意見','您的意見','請告訴我們您想分享的內容...','送出意見','請勿提供密碼、付款資訊或其他敏感資料。','傳送中...','感謝您提交意見！','訊息無法送出，請再試一次。'],
      ro:['Trimite feedback','Folosește formularul pentru întrebări, raportarea erorilor, sugestii sau feedback despre ColorPick.','Nume','Numele dvs. (opțional)','E-mail','you@example.com (opțional)','Tip feedback','Raport de eroare','Sugestie de funcție','Feedback despre accesibilitate','Întrebare','Alt feedback','Feedbackul dvs.','Spuneți-ne ce doriți să transmiteți...','Trimite feedback','Nu includeți parole, informații de plată sau alte date sensibile.','Se trimite...','Vă mulțumim pentru feedback!','Mesajul nu a putut fi trimis. Încercați din nou.'],
      fil:['Ipadala ang feedback','Gamitin ang form para magtanong, mag-ulat ng bug, magmungkahi ng pagpapabuti, o magbigay ng feedback tungkol sa ColorPick.','Pangalan','Iyong pangalan (opsyonal)','Email','you@example.com (opsyonal)','Uri ng feedback','Ulat ng bug','Mungkahi ng feature','Feedback sa accessibility','Tanong','Iba pang feedback','Iyong feedback','Sabihin sa amin kung ano ang gusto mong ibahagi...','Ipadala ang feedback','Huwag magsama ng password, impormasyon sa pagbabayad, o iba pang sensitibong impormasyon.','Ipinapadala...','Salamat sa iyong feedback!','Hindi naipadala ang mensahe. Subukan muli.'],
      id:['Kirim masukan','Gunakan formulir ini untuk bertanya, melaporkan bug, menyarankan perbaikan, atau memberi masukan tentang ColorPick.','Nama','Nama Anda (opsional)','Email','you@example.com (opsional)','Jenis masukan','Laporan bug','Saran fitur','Masukan aksesibilitas','Pertanyaan','Masukan lainnya','Masukan Anda','Beri tahu kami apa yang ingin Anda sampaikan...','Kirim masukan','Jangan sertakan kata sandi, informasi pembayaran, atau data sensitif lainnya.','Mengirim...','Terima kasih telah mengirim masukan!','Pesan tidak dapat dikirim. Silakan coba lagi.'],
      'es-MX':['Envíanos tus comentarios','Usa este formulario para hacer una pregunta, reportar un error, sugerir una mejora o compartir comentarios sobre ColorPick.','Nombre','Tu nombre (opcional)','Correo electrónico','you@example.com (opcional)','Tipo de comentario','Reporte de error','Sugerencia de función','Comentarios de accesibilidad','Pregunta','Otro comentario','Tus comentarios','Cuéntanos qué quieres compartir...','Enviar comentarios','No incluyas contraseñas, información de pago ni otros datos sensibles.','Enviando...','¡Gracias por enviar tus comentarios!','No se pudo enviar el mensaje. Inténtalo de nuevo.'],
      tr:['Geri bildirim gönder','Soru sormak, hata bildirmek, iyileştirme önermek veya ColorPick hakkında görüş paylaşmak için bu formu kullanın.','Ad','Adınız (isteğe bağlı)','E-posta','you@example.com (isteğe bağlı)','Geri bildirim türü','Hata bildirimi','Özellik önerisi','Erişilebilirlik geri bildirimi','Soru','Diğer geri bildirim','Geri bildiriminiz','Paylaşmak istediğiniz şeyi yazın...','Geri bildirim gönder','Lütfen şifre, ödeme bilgileri veya diğer hassas bilgileri göndermeyin.','Gönderiliyor...','Geri bildiriminizi gönderdiğiniz için teşekkürler!','Mesaj gönderilemedi. Lütfen tekrar deneyin.']
    };
    Object.entries(contactOther).forEach(([lang,a])=>{contactFormTranslations[lang]={formTitle:a[0],formDesc:a[1],nameLabel:a[2],namePlaceholder:a[3],emailLabel:a[4],emailPlaceholder:a[5],typeLabel:a[6],typeBug:a[7],typeFeature:a[8],typeAccessibility:a[9],typeQuestion:a[10],typeOther:a[11],messageLabel:a[12],messagePlaceholder:a[13],submit:a[14],note:a[15],tipsTitle:contactFallback.tipsTitle,bugTitle:contactFallback.bugTitle,bugText:contactFallback.bugText,featureTitle:contactFallback.featureTitle,featureText:contactFallback.featureText,accessTitle:contactFallback.accessTitle,accessText:contactFallback.accessText,sending:a[16],success:a[17],error:a[18]};});

    function applyContactFormTranslations(language){
      const t=contactFormTranslations[language]||contactFallback;
      document.querySelectorAll('[data-contact-i18n]').forEach(el=>{const key=el.getAttribute('data-contact-i18n');if(t[key]!==undefined)el.textContent=t[key];});
      document.querySelectorAll('[data-contact-placeholder]').forEach(el=>{const key=el.getAttribute('data-contact-placeholder');if(t[key]!==undefined)el.setAttribute('placeholder',t[key]);});
      const keyInput=document.querySelector('[data-web3-access-key]'); if(keyInput) keyInput.value=WEB3FORMS_ACCESS_KEY;
      const status=document.getElementById('contactStatus'); if(status) status.textContent='';
    }

    function initContactForm(language){
      const form=document.getElementById('colorpickContactForm'); if(!form) return;
      applyContactFormTranslations(language);
      const hero={
        en:['Contact Us','Contact Us','Have a question, found a bug, or have an idea that could make ColorPick better? Get in touch.'],
        hi:['संपर्क करें','संपर्क करें','कोई सवाल है, बग मिला है या ColorPick को बेहतर बनाने का विचार है? हमसे संपर्क करें।'],
        es:['Contacto','Contacto','¿Tienes una pregunta, encontraste un error o tienes una idea para mejorar ColorPick? Escríbenos.'],
        fr:['Nous contacter','Nous contacter','Une question, un bug ou une idée pour améliorer ColorPick ? Contactez-nous.'],
        de:['Kontakt','Kontakt','Eine Frage, ein Fehler oder eine Idee, die ColorPick verbessern könnte? Kontaktieren Sie uns.'],
        ja:['お問い合わせ','お問い合わせ','質問、バグ報告、ColorPickを改善するアイデアがあれば、ぜひご連絡ください。'],
        vi:['Liên hệ','Liên hệ','Bạn có câu hỏi, phát hiện lỗi hoặc ý tưởng giúp ColorPick tốt hơn? Hãy liên hệ với chúng tôi.'],
        fa:['تماس با ما','تماس با ما','سؤال، گزارش خطا یا ایده‌ای برای بهتر شدن ColorPick دارید؟ با ما در تماس باشید.'],
        ru:['Контакты','Контакты','Есть вопрос, ошибка или идея, которая поможет улучшить ColorPick? Напишите нам.'],
        'pt-BR':['Contato','Contato','Tem uma pergunta, encontrou um erro ou tem uma ideia para melhorar o ColorPick? Fale conosco.'],
        ko:['문의하기','문의하기','질문, 버그 신고 또는 ColorPick을 개선할 아이디어가 있다면 알려주세요.'],
        sv:['Kontakt','Kontakt','Har du en fråga, hittat ett fel eller en idé som kan förbättra ColorPick? Hör av dig.'],
        'zh-TW':['聯絡我們','聯絡我們','如果您有問題、發現錯誤或有改善 ColorPick 的想法，歡迎與我們聯絡。'],
        ro:['Contact','Contact','Ai o întrebare, ai găsit o eroare sau ai o idee pentru îmbunătățirea ColorPick? Scrie-ne.'],
        fil:['Makipag-ugnayan','Makipag-ugnayan','May tanong, nakakita ng bug, o may ideya para mapahusay ang ColorPick? Makipag-ugnayan sa amin.'],
        id:['Kontak','Kontak','Punya pertanyaan, menemukan bug, atau punya ide untuk meningkatkan ColorPick? Hubungi kami.'],
        'es-MX':['Contacto','Contacto','¿Tienes una pregunta, encontraste un error o tienes una idea para mejorar ColorPick? Escríbenos.'],
        tr:['İletişim','İletişim','Bir sorunuz, hata bildiriminiz veya ColorPick’i geliştirmek için bir fikriniz mi var? Bize ulaşın.']
      }[language]||['Contact Us','Contact Us','Have a question, found a bug, or have an idea that could make ColorPick better? Get in touch.'];
      setText('.legal-hero .eyebrow',hero[0]);setText('.legal-hero h1',hero[1]);setText('.legal-hero p',hero[2]);
      const t=contactFormTranslations[language]||contactFallback;
      const msg=document.getElementById('contactMessage'), count=document.getElementById('contactCount'), submit=document.getElementById('contactSubmit'), status=document.getElementById('contactStatus');
      const updateCount=()=>{if(msg&&count)count.textContent=String(msg.value.length);}; updateCount(); msg?.addEventListener('input',updateCount);
      form.addEventListener('submit',async(e)=>{e.preventDefault(); if(!form.reportValidity()) return; const access=form.querySelector('[name="access_key"]')?.value; if(!access || access==='YOUR_WEB3FORMS_ACCESS_KEY'){status.textContent='Add your Web3Forms access key in language.js before testing this form.';status.classList.add('error');return;} submit.disabled=true;status.classList.remove('error');status.textContent=t.sending;
        try{const data=Object.fromEntries(new FormData(form).entries()); const response=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)}); const result=await response.json(); if(response.ok && result.success!==false){form.reset();updateCount();status.textContent=t.success;} else {throw new Error(result.message||'Submission failed');}}
        catch(err){status.textContent=t.error;status.classList.add('error');}
        finally{submit.disabled=false;}
      });
    }

    function applyLegalTranslations(language) {
      const path = window.location.pathname.toLowerCase();
      let page = null;
      if (path.includes('about.html')) page = 'about';
      else if (path.includes('privacy-policy.html')) page = 'privacy';
      else if (path.includes('terms.html')) page = 'terms';
      else if (path.includes('contact.html')) page = 'contact';
      if (!page) return;
      const t = (legalTranslations[language] || legalTranslations.en)[page];
      const backLabels={en:'← Back',hi:'← वापस',es:'← Volver',fr:'← Retour',de:'← Zurück',ja:'← 戻る',vi:'← Quay lại',fa:'← بازگشت',ru:'← Назад','pt-BR':'← Voltar',ko:'← 뒤로',sv:'← Tillbaka','zh-TW':'← 返回',ro:'← Înapoi',fil:'← Bumalik',id:'← Kembali','es-MX':'← Volver',tr:'← Geri'}; setText('.legal-back', backLabels[language] || backLabels.en);
      setText('.legal-hero .eyebrow', t.badge);
      setText('.legal-hero h1', t.title);
      setText('.legal-hero p', t.desc);
      document.querySelectorAll('.legal-content h2').forEach((el,i)=>{ if(t.h[i]) el.textContent=t.h[i]; });
      if(page==='contact') initContactForm(language);
    }

    function setText(selector, text) {
        const el = document.querySelector(selector);
        if (el && text !== undefined) el.textContent = text;
    }

    function applyPageTranslations(language) {
        const t = Object.assign({}, pageTranslations.en, pageTranslations[language] || {}, {
            navPicker: (translations[language] || translations.en).navPicker,
            navPalettes: (translations[language] || translations.en).navPalettes,
            navSuggestions: (translations[language] || translations.en).navSuggestions,
            navWheel: (translations[language] || translations.en).navWheel
        });
        const path = window.location.pathname.toLowerCase();
        const isSuggestions = path.includes("color-suggestions");
        const isWheel = path.includes("color-wheel");
        const isCode = path.includes("color-code");

        // Shared navigation on every page.
        document.querySelectorAll('a[href="index.html"]').forEach(a => {
            const span = a.querySelector('[data-i18n="navPicker"]');
            if (span) span.textContent = t.navPicker;
            else if (a.classList.contains('logo')) return;
            else a.textContent = t.navPicker;
        });
        document.querySelectorAll('a[href="palettes.html"]').forEach(a => {
            const span = a.querySelector('[data-i18n="navPalettes"]');
            if (span) span.textContent = t.navPalettes;
            else a.textContent = t.navPalettes;
        });
        document.querySelectorAll('a[href="color-suggestions.html"]').forEach(a => a.textContent = t.navSuggestions);
        document.querySelectorAll('a[href="color-wheel.html"]').forEach(a => a.textContent = t.navWheel);

        if (isSuggestions) {
            setText('.combo-hero .badge', t.suggestionsBadge);
            setText('.combo-hero h1', t.suggestionsTitle);
            setText('.combo-hero p', t.suggestionsDesc);
            setText('label[for="colorInput"]', t.enterColor);
            setText('#generateBtn', t.generate);
            setText('#inputHelp', t.supported);
            setText('#result .base-card h2', t.yourColor);
            setText('.results-heading h2', t.recommended);
            setText('.results-heading p', t.clickCopy);
            setText('.tips h3', t.howChosen);
        }

        if (isWheel) {
            setText('.wheel-badge', t.wheelBadge);
            setText('.wheel-hero h1', t.wheelTitle);
            setText('.wheel-hero p', t.wheelDesc);
            setText('.wheel-controls .control-card:first-child label', t.baseColor);
            setText('.wheel-controls .control-card:nth-child(2) label', t.harmony);
            const harmonyMap = { analogous:t.analogous, monochromatic:t.monochromatic, complementary:t.complementary, triadic:t.triadic, split:t.split, square:t.square, double:t.double, custom:t.custom };
            document.querySelectorAll('[data-harmony]').forEach(btn => {
                const key = btn.dataset.harmony;
                if (harmonyMap[key]) btn.textContent = harmonyMap[key];
            });
            const labels = document.querySelectorAll('.wheel-controls .sliders label');
            if (labels[0]) labels[0].childNodes[0].textContent = t.saturation + ' ';
            if (labels[1]) labels[1].childNodes[0].textContent = t.lightness + ' ';
            setText('.wheel-tip', t.wheelTip);
            setText('.output-heading h2', t.paletteTitle);
            setText('#harmonyDescription', t.paletteDesc);
            setText('#copyPalette', t.copyPalette);
        }

        if (isCode) {
            setText('.color-page-hero .badge', t.codeBadge);
            setText('.color-page-hero p', t.codeDesc);
            setText('.back-link', t.backPicker);
            setText('#copyHex', t.copyHex);
            setText('.info-card h2', t.conversion);
            setText('.section-card:nth-of-type(2) h2', t.shadesTints);
            setText('.section-card:nth-of-type(2) .faq', t.shadesDesc);
            setText('.section-card:nth-of-type(2) h3:nth-of-type(1)', t.shades);
            setText('.section-card:nth-of-type(2) h3:nth-of-type(2)', t.tints);
            setText('.section-card:nth-of-type(3) h2', t.combinations);
            setText('.section-card:nth-of-type(3) .faq', t.combinationsDesc);
        }
    }

    // Make the page-specific translator available to other page scripts.
    window.ColorPickLanguage = {
        get: () => currentLanguage,
        translate: () => applyPageTranslations(currentLanguage)
    };



    /* =====================================================
       LANGUAGE DROPDOWN
    ===================================================== */

    const languageBtn =
        document.getElementById(
            "languageBtn"
        );


    const languageMenu =
        document.getElementById(
            "languageMenu"
        );



    /* =====================================================
       LANGUAGE SEARCH / COMPACT MENU
    ===================================================== */

    const INITIAL_LANGUAGE_COUNT = 6;

    function setupLanguageSearch() {

        if (!languageMenu || languageMenu.dataset.searchReady === "true") {
            return;
        }

        const buttons = Array.from(
            languageMenu.querySelectorAll("[data-language]")
        );

        const searchWrap = document.createElement("div");
        searchWrap.className = "language-search-wrap";

        const searchInput = document.createElement("input");
        searchInput.type = "search";
        searchInput.className = "language-search";
        searchInput.placeholder = "Search language...";
        searchInput.setAttribute("aria-label", "Search language");
        searchInput.setAttribute("autocomplete", "off");

        searchWrap.appendChild(searchInput);
        languageMenu.insertBefore(searchWrap, languageMenu.firstChild);

        // Keep the search field fixed while only the language options scroll.
        // This prevents language items from sliding underneath/over the search bar.
        const optionsWrap = document.createElement("div");
        optionsWrap.className = "language-options";
        buttons.forEach(function(button) {
            optionsWrap.appendChild(button);
        });
        languageMenu.appendChild(optionsWrap);

        function updateLanguageOptions() {
            const query = searchInput.value.trim().toLowerCase();
            const selected = currentLanguage;

            buttons.forEach(function(button, index) {
                const language = button.dataset.language || "";
                const label = button.textContent.trim().toLowerCase();
                const matches = !query || language.toLowerCase().includes(query) || label.includes(query);
                const isSelected = language === selected;
                // Keep every language in the scrollable list when there is no search query.
                // The menu's max-height + overflow-y:auto makes only a few visible at once,
                // while still allowing the user to scroll through all 18 languages.
                const shouldShow = query ? matches : true;

                button.hidden = !shouldShow;
                button.setAttribute("aria-hidden", shouldShow ? "false" : "true");
            });
        }

        searchInput.addEventListener("input", updateLanguageOptions);
        searchInput.addEventListener("click", function(event) {
            event.stopPropagation();
        });
        searchInput.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                closeLanguageMenu();
            }
        });

        languageMenu.dataset.searchReady = "true";
        languageMenu._updateLanguageOptions = updateLanguageOptions;
        languageMenu._languageSearchInput = searchInput;
        languageMenu._languageOptions = optionsWrap;
        updateLanguageOptions();
    }


    /* =====================================================
       OPEN / CLOSE MENU
    ===================================================== */

    function closeLanguageMenu() {

        if (!languageMenu) {

            return;

        }


        languageMenu.classList.remove(
            "show"
        );


        if (languageBtn) {

            languageBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }



    function openLanguageMenu() {

        if (!languageMenu) {

            return;

        }

        setupLanguageSearch();

        if (languageMenu._languageSearchInput) {
            languageMenu._languageSearchInput.value = "";
        }

        if (languageMenu._updateLanguageOptions) {
            languageMenu._updateLanguageOptions();
        }

        languageMenu.classList.add(
            "show"
        );

        // Always start at the top when the menu is opened.
        if (languageMenu._languageOptions) {
            languageMenu._languageOptions.scrollTop = 0;
        }

        if (languageBtn) {

            languageBtn.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    }



    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                const isOpen =
                    languageMenu &&
                    languageMenu.classList.contains(
                        "show"
                    );


                if (isOpen) {

                    closeLanguageMenu();

                }

                else {

                    openLanguageMenu();

                }

            }
        );

    }



    /* =====================================================
       LANGUAGE OPTIONS
    ===================================================== */

    document
        .querySelectorAll(
            "[data-language]"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();


                        const language =
                            button.dataset.language;


                        if (
                            !translations[language]
                        ) {

                            return;

                        }


                        try {
                            localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
                        } catch (error) {
                            // Continue without persistence.
                        }

                        // Every language switch now uses a crawlable URL for the
                        // same page. Example: /palettes.html -> /fr/palettes.html.
                        // English returns to the root page URL.
                        const targetUrl = buildLanguageUrl(language);
                        window.location.href = targetUrl;
                        return;

                        /*
                         * Mark selected language.
                         */

                        document
                            .querySelectorAll(
                                "[data-language]"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.toggle(
                                        "selected-language",
                                        item.dataset.language ===
                                        language
                                    );

                                }
                            );


                        closeLanguageMenu();

                    }
                );

            }
        );



    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !event.target.closest(
                    ".language-selector"
                )
            ) {

                closeLanguageMenu();

            }

        }
    );



    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeLanguageMenu();

            }

        }
    );





    /* COLORPICK SEO/LANGUAGE OVERRIDES */
    // Keep the existing translation system, but correct shared navigation labels
    // that must remain consistent across every localized page.
    const sharedLabelOverrides = {
      en:{navSuggestions:'Color Suggestions',navWheel:'Color Wheel',navCode:'Color Code'},
      hi:{navSuggestions:'कलर सुझाव',navWheel:'कलर व्हील',navCode:'कलर कोड'},
      es:{navSuggestions:'Sugerencias de color',navWheel:'Rueda de color',navCode:'Código de color'},
      fr:{navSuggestions:'Suggestions de couleur',navWheel:'Roue chromatique',navCode:'Code couleur'},
      de:{navSuggestions:'Farbvorschläge',navWheel:'Farbrad',navCode:'Farbcode'},
      ja:{navSuggestions:'カラー提案',navWheel:'カラーホイール',navCode:'カラーコード'},
      vi:{navSuggestions:'Gợi ý màu',navWheel:'Bánh xe màu',navCode:'Mã màu'},
      fa:{navSuggestions:'پیشنهاد رنگ',navWheel:'چرخ رنگ',navCode:'کد رنگ'},
      ru:{navSuggestions:'Подбор цветов',navWheel:'Цветовое колесо',navCode:'Код цвета'},
      'pt-BR':{navSuggestions:'Sugestões de cores',navWheel:'Roda de cores',navCode:'Código de cor'},
      ko:{navSuggestions:'색상 추천',navWheel:'컬러 휠',navCode:'색상 코드'},
      sv:{navSuggestions:'Färgtips',navWheel:'Färghjul',navCode:'Färgkod'},
      'zh-TW':{navSuggestions:'色彩建議',navWheel:'色輪',navCode:'色碼'},
      ro:{navSuggestions:'Sugestii de culori',navWheel:'Roata culorilor',navCode:'Cod de culoare'},
      fil:{navSuggestions:'Mga mungkahi ng kulay',navWheel:'Color wheel',navCode:'Color code'},
      id:{navSuggestions:'Saran warna',navWheel:'Roda warna',navCode:'Kode warna'},
      'es-MX':{navSuggestions:'Sugerencias de color',navWheel:'Rueda de color',navCode:'Código de color'},
      tr:{navSuggestions:'Renk önerileri',navWheel:'Renk çarkı',navCode:'Renk kodu'}
    };
    Object.keys(sharedLabelOverrides).forEach(function(lang){
      if (translations[lang]) Object.assign(translations[lang], sharedLabelOverrides[lang]);
    });

    /* =====================================================
       INITIALIZE
    ===================================================== */

    translatePage(
        currentLanguage
    );


    document
        .querySelectorAll(
            "[data-language]"
        )
        .forEach(
            function (button) {

                button.classList.toggle(
                    "selected-language",
                    button.dataset.language ===
                    currentLanguage
                );

            }
        );


    console.log(
        "ColorPick language system initialized:",
        currentLanguage
    );

})();
/* =========================================================
   MOBILE NAVIGATION MENU
   Turns the desktop navigation into a compact dropdown on
   phones and small tablets.
========================================================= */
(function () {
    "use strict";

    function initMobileNavigation() {
        const navbar = document.querySelector(".navbar");
        const toggle = document.getElementById("mobileMenuToggle");
        const navLinks = document.getElementById("siteNavLinks");

        if (!navbar || !toggle || !navLinks) return;

        function closeMenu() {
            navbar.classList.remove("nav-menu-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open navigation menu");
        }

        function openMenu() {
            navbar.classList.add("nav-menu-open");
            toggle.setAttribute("aria-expanded", "true");
            toggle.setAttribute("aria-label", "Close navigation menu");
        }

        toggle.addEventListener("click", function (event) {
            event.stopPropagation();
            const isOpen = navbar.classList.contains("nav-menu-open");
            if (isOpen) closeMenu();
            else openMenu();
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", function (event) {
            if (!navbar.contains(event.target)) closeMenu();
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") closeMenu();
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 700) closeMenu();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initMobileNavigation);
    } else {
        initMobileNavigation();
    }
})();
