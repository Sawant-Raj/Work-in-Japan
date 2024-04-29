import React, { useEffect } from 'react';

function Translate() {

  // useEffect(() => {
  //   function googleTranslateElementInit() {
  //       new window.google.translate.TranslateElement({
  //       //   pageLanguage: 'en', // Change 'en' to the default language of your page
  //         includedLanguages: 'en,ja', // Add Japanese ('ja') along with existing languages
  //         layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
  //         autoDisplay: false
  //       }, 'google_translate_element');
  //     }
      

  //   // Attach googleTranslateElementInit function to the window
  //   window.googleTranslateElementInit = googleTranslateElementInit;

  //   // Load the Google Translate script dynamically
  //   const script = document.createElement('script');
  //   script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //     delete window.googleTranslateElementInit;
  //   };
  // }, []);


  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
  //  }
   
  //  useEffect(() => {
  //    var addScript = document.createElement('script');
  //    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
  //    document.body.appendChild(addScript);
  //    window.googleTranslateElementInit = googleTranslateElementInit;
  //  }, [])

  return (
    <div id="google_translate_element"></div>
  );
}

export default Translate;
