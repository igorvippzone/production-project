import {FC, useState} from "react";

import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {classNames} from "shared/lib/classNames";
import {LangSwitcher} from "widgets/LangSwitcher";
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};
