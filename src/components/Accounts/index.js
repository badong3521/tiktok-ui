import style from './Accounts.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

function Accounts({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <span>
                <img src={data.avatar} alt="avatar" className={cx('avatar')} />
            </span>
            <span className={cx('container-name')}>
                <div className={cx('df')}>
                    <h4 className={cx('usename')}>{data.nickname}</h4>
                    {data.tick && (
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    )}
                </div>
                <h5 className={cx('name')}>{data.full_name}</h5>
            </span>
        </Link>
    );
}

export default Accounts;
