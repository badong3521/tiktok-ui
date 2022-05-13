import classNames from 'classnames/bind';
import style from '../menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ item }) {
    return (
        <div className={cx('item-menu')}>
            <span className={cx('icon')}>{item.icon}</span>
            <span className={cx('titles')}>{item.title}</span>
        </div>
    );
}

export default MenuItem;
