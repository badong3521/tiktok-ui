import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import style from './HeaderMenu.module.scss';
const cx = classNames.bind(style);

function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx('header-menu')}>
            <span>
                <FontAwesomeIcon
                    className={cx('chevronLeft')}
                    onClick={onBack}
                    icon={faChevronLeft}
                />
            </span>
            <span className={cx('title')}>{title}</span>
        </header>
    );
}

export default HeaderMenu;
