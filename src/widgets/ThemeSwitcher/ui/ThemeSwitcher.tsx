import {FC} from "react";

import {classNames} from "shared/lib/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {theme as IconTheme} from 'shared/assets/icons'
import {Button} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {className} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            <IconTheme fill={theme === Theme.DARK ? 'black' : '#FFC700'}/>
        </Button>
    );
};