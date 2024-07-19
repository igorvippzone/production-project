import {FC} from "react";

import {classNames} from "shared/lib/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "../../ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {className} = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>

            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                >Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>

        </div>
    );
};
