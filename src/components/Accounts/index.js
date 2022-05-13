import style from './Accounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

function Accounts() {
    return (
        <div className={cx('wrapper')}>
            <span>
                <img
                    src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/05/tiktoker-dao-le-phuong-hoa-dat-10-trieu-follow-lot-top-10-tai-khoan-nhieu-nguoi-theo-doi-nhat-1645685521-5.jpg"
                    alt="hoaaa"
                    className={cx('avatar')}
                />
            </span>
            <span className={cx('container-name')}>
                <div className={cx('df')}>
                    <h4 className={cx('usename')}>hoaasiluili</h4>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </div>
                <h5 className={cx('name')}>vu thi hoa</h5>
            </span>
        </div>
    );
}

export default Accounts;
