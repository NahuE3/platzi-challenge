import { useTranslation } from 'react-i18next';
import { useStateValue } from '../context';
import { changeLanguage as changer } from '../context/actions';

const useLanguage = () => {
  const { language, dispatch } = useStateValue();
  const [text, i18n] = useTranslation('global');

  const getText = (t) => {
    return text(t);
  }

  const changeLanguage = ({ language }) => {
    i18n.changeLanguage(language);
    changer({ language, dispatch });
  }

  return { language, getText, changeLanguage };
}

export default useLanguage;