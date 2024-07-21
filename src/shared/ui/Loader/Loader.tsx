import {FC} from "react";

import {classNames} from "shared/lib/classNames";
import './Loader.scss'

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const {className} = props;

    return (
        <div className={classNames("lds-ripple", {}, [className])}>
            <div></div>
            <div></div>
        </div>
    );
};
