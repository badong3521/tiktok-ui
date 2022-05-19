import classNames from 'classnames/bind';
import style from '../menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ item, onClick }) {
    const classes = cx('item-menu', {
        separate: item.separate,
    });

    return (
        <div onClick={onClick} className={classes}>
            <span className={cx('icon')}>{item.icon}</span>
            <span className={cx('titles')}>{item.title}</span>
        </div>
    );
}

export default MenuItem;
