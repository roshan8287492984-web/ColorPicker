(function(){
  'use strict';
  const T={
    en:{
      back:'← Back', badge:'⚠️ ColorPick Error',
      e400:'Bad Request', e401:'Authentication Required', e403:'Access Forbidden', e404:'Page Not Found', e408:'Request Timeout', e429:'Too Many Requests', e500:'Server Error', e502:'Bad Gateway', e503:'Service Unavailable', e504:'Gateway Timeout',
      d400:'The request could not be understood. Please check the address and try again.',
      d401:'Authentication is required to access this resource.', d403:'You do not have permission to access this page.',
      d404:'The page you are looking for may have moved, been renamed, or no longer exists.', d408:'The request took too long to complete. Please try again.',
      d429:'Too many requests were received. Please wait a moment and try again.', d500:'Something went wrong on our server. Please try again in a moment.',
      d502:'The server received an invalid response from an upstream service.', d503:'The service is temporarily unavailable. Please try again shortly.', d504:'The upstream service took too long to respond.',
      home:'Go to Color Picker', tools:'Explore Color Tools', helpful:'Helpful links', errorCode:'Error code',
      about:'About Us', privacy:'Privacy Policy', terms:'Terms & Conditions', contact:'Contact Us'
    },
    hi:{
      back:'← वापस', badge:'⚠️ ColorPick त्रुटि',
      e400:'गलत अनुरोध', e401:'प्रमाणीकरण आवश्यक', e403:'पहुंच अस्वीकृत', e404:'पेज नहीं मिला', e408:'अनुरोध का समय समाप्त', e429:'बहुत अधिक अनुरोध', e500:'सर्वर त्रुटि', e502:'बैड गेटवे', e503:'सेवा उपलब्ध नहीं', e504:'गेटवे टाइमआउट',
      d400:'अनुरोध समझा नहीं जा सका। पता जाँचें और फिर प्रयास करें।', d401:'इस संसाधन के लिए प्रमाणीकरण आवश्यक है।', d403:'आपको इस पेज तक पहुँचने की अनुमति नहीं है।', d404:'आप जिस पेज को खोज रहे हैं वह स्थानांतरित, नाम बदला या हटा दिया गया हो सकता है।', d408:'अनुरोध पूरा होने में बहुत समय लगा। कृपया फिर प्रयास करें।', d429:'बहुत अधिक अनुरोध प्राप्त हुए हैं। कुछ क्षण प्रतीक्षा करके फिर प्रयास करें।', d500:'सर्वर पर कुछ गलत हो गया। कृपया कुछ देर बाद फिर प्रयास करें।', d502:'सर्वर को अपस्ट्रीम सेवा से अमान्य प्रतिक्रिया मिली।', d503:'सेवा अस्थायी रूप से उपलब्ध नहीं है। कृपया थोड़ी देर बाद फिर प्रयास करें।', d504:'अपस्ट्रीम सेवा ने प्रतिक्रिया देने में बहुत अधिक समय लिया।',
      home:'कलर पिकर पर जाएँ', tools:'कलर टूल्स देखें', helpful:'उपयोगी लिंक', errorCode:'त्रुटि कोड', about:'हमारे बारे में', privacy:'गोपनीयता नीति', terms:'नियम और शर्तें', contact:'संपर्क करें'
    },
    es:{
      back:'← Volver', badge:'⚠️ Error de ColorPick', e400:'Solicitud incorrecta', e401:'Autenticación requerida', e403:'Acceso prohibido', e404:'Página no encontrada', e408:'Tiempo de espera agotado', e429:'Demasiadas solicitudes', e500:'Error del servidor', e502:'Puerta de enlace incorrecta', e503:'Servicio no disponible', e504:'Tiempo de espera de la puerta de enlace',
      d400:'No se pudo entender la solicitud. Comprueba la dirección e inténtalo de nuevo.', d401:'Se requiere autenticación para acceder a este recurso.', d403:'No tienes permiso para acceder a esta página.', d404:'La página que buscas puede haberse movido, cambiado de nombre o eliminado.', d408:'La solicitud tardó demasiado. Inténtalo de nuevo.', d429:'Se recibieron demasiadas solicitudes. Espera un momento e inténtalo de nuevo.', d500:'Algo salió mal en nuestro servidor. Inténtalo de nuevo en unos instantes.', d502:'El servidor recibió una respuesta no válida de un servicio ascendente.', d503:'El servicio no está disponible temporalmente. Inténtalo de nuevo pronto.', d504:'El servicio ascendente tardó demasiado en responder.',
      home:'Ir al selector de color', tools:'Explorar herramientas de color', helpful:'Enlaces útiles', errorCode:'Código de error', about:'Sobre nosotros', privacy:'Política de privacidad', terms:'Términos y condiciones', contact:'Contacto'
    },
    fr:{
      back:'← Retour', badge:'⚠️ Erreur ColorPick', e400:'Requête incorrecte', e401:'Authentification requise', e403:'Accès interdit', e404:'Page introuvable', e408:'Délai de requête dépassé', e429:'Trop de requêtes', e500:'Erreur du serveur', e502:'Passerelle incorrecte', e503:'Service indisponible', e504:'Délai de la passerelle dépassé',
      d400:'La requête n’a pas pu être comprise. Vérifiez l’adresse et réessayez.', d401:'Une authentification est requise pour accéder à cette ressource.', d403:'Vous n’êtes pas autorisé à accéder à cette page.', d404:'La page recherchée a peut-être été déplacée, renommée ou supprimée.', d408:'La requête a pris trop de temps. Veuillez réessayer.', d429:'Trop de requêtes ont été reçues. Attendez un instant puis réessayez.', d500:'Une erreur est survenue sur notre serveur. Veuillez réessayer dans un instant.', d502:'Le serveur a reçu une réponse invalide d’un service en amont.', d503:'Le service est temporairement indisponible. Veuillez réessayer bientôt.', d504:'Le service en amont a mis trop de temps à répondre.',
      home:'Aller au sélecteur de couleurs', tools:'Explorer les outils couleur', helpful:'Liens utiles', errorCode:'Code d’erreur', about:'À propos', privacy:'Politique de confidentialité', terms:'Conditions générales', contact:'Contact'
    },
    de:{
      back:'← Zurück', badge:'⚠️ ColorPick-Fehler', e400:'Ungültige Anfrage', e401:'Authentifizierung erforderlich', e403:'Zugriff verweigert', e404:'Seite nicht gefunden', e408:'Zeitüberschreitung', e429:'Zu viele Anfragen', e500:'Serverfehler', e502:'Bad Gateway', e503:'Dienst nicht verfügbar', e504:'Gateway-Zeitüberschreitung',
      d400:'Die Anfrage konnte nicht verstanden werden. Bitte prüfen Sie die Adresse und versuchen Sie es erneut.', d401:'Für den Zugriff auf diese Ressource ist eine Authentifizierung erforderlich.', d403:'Sie haben keine Berechtigung für diese Seite.', d404:'Die gesuchte Seite wurde möglicherweise verschoben, umbenannt oder entfernt.', d408:'Die Anfrage hat zu lange gedauert. Bitte versuchen Sie es erneut.', d429:'Es wurden zu viele Anfragen empfangen. Warten Sie kurz und versuchen Sie es erneut.', d500:'Auf unserem Server ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.', d502:'Der Server erhielt eine ungültige Antwort von einem vorgelagerten Dienst.', d503:'Der Dienst ist vorübergehend nicht verfügbar. Bitte versuchen Sie es später erneut.', d504:'Der vorgelagerte Dienst hat zu lange für eine Antwort gebraucht.',
      home:'Zum Color Picker', tools:'Farbtools erkunden', helpful:'Nützliche Links', errorCode:'Fehlercode', about:'Über uns', privacy:'Datenschutz', terms:'Allgemeine Geschäftsbedingungen', contact:'Kontakt'
    },
    ja:{
      back:'← 戻る', badge:'⚠️ ColorPick エラー', e400:'不正なリクエスト', e401:'認証が必要です', e403:'アクセスが拒否されました', e404:'ページが見つかりません', e408:'リクエストがタイムアウトしました', e429:'リクエストが多すぎます', e500:'サーバーエラー', e502:'不正なゲートウェイ', e503:'サービス停止中', e504:'ゲートウェイがタイムアウトしました',
      d400:'リクエストを処理できませんでした。アドレスを確認してもう一度お試しください。', d401:'このリソースへのアクセスには認証が必要です。', d403:'このページへのアクセス権がありません。', d404:'お探しのページは移動、名前変更、または削除された可能性があります。', d408:'リクエストの処理に時間がかかりすぎました。もう一度お試しください。', d429:'リクエストが多すぎます。しばらく待ってからもう一度お試しください。', d500:'サーバーで問題が発生しました。しばらくしてからもう一度お試しください。', d502:'サーバーが上流サービスから無効な応答を受け取りました。', d503:'サービスは一時的に利用できません。しばらくしてからお試しください。', d504:'上流サービスからの応答に時間がかかりすぎました。',
      home:'カラーピッカーへ', tools:'カラー ツールを見る', helpful:'便利なリンク', errorCode:'エラーコード', about:'概要', privacy:'プライバシーポリシー', terms:'利用規約', contact:'お問い合わせ'
    }
  };
  const key=document.body.getAttribute('data-error-key')||'404';
  const lang=()=>window.ColorPickLanguage&&window.ColorPickLanguage.get?window.ColorPickLanguage.get():'en';
  function apply(){const l=lang();const t=T[l]||T.en;const set=(sel,val)=>{const el=document.querySelector(sel);if(el)el.textContent=val;};set('[data-error-badge]',t.badge);set('[data-error-title]',t['e'+key]);set('[data-error-desc]',t['d'+key]);set('[data-error-home]',t.home);set('[data-error-tools]',t.tools);set('[data-error-helpful]',t.helpful);set('[data-error-code-label]',t.errorCode);set('[data-error-back]',t.back);set('[data-error-about]',t.about);set('[data-error-privacy]',t.privacy);set('[data-error-terms]',t.terms);set('[data-error-contact]',t.contact);document.documentElement.lang=l;document.title=''+t['e'+key]+' - ColorPick';}
  document.addEventListener('click',e=>{if(e.target.closest('[data-language]'))setTimeout(apply,0);});
  document.addEventListener('DOMContentLoaded',apply); apply();
})();
