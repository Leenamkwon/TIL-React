import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translate, setTranslate] = useState('');
  const [term, setTerm] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTerm(text);
    }, 600);

    return () => {
      clearTimeout(timeOut);
    };
  }, [text]);

  useEffect(() => {
    const doTranslateion = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: term,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslate(data.data.translations[0]);
    };

    doTranslateion();
  }, [language, term]);

  return (
    <div>
      <h1 className='ui header'>{translate.translatedText}</h1>
    </div>
  );
};

export default Convert;
