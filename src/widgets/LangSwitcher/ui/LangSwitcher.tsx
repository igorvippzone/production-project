import {FC} from "react";

import {classNames} from "shared/lib/classNames";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {className} = props;

    const {t, i18n} = useTranslation();
    const isRu = i18n.language === 'ru';

    const toggle = () => i18n.changeLanguage(isRu ? 'en' : 'ru')

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t("Язык")}
        </Button>
    );
};
