import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import style from './search.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accounts from '~/components/Accounts';

const cx = classNames.bind(style);
function Search() {
    // HANDLE KHI CÓ AIP TRẢ VỀ HIỂN THỊ RA KẾT QUẢ
    const [searchResults, setSearch] = useState([]);

    const [stateValue, setValue] = useState('');

    const [stateShow, setShow] = useState(true);

    // STATE CỦA LOADING
    const [stateLoading, setLoading] = useState(false);
    // XỬ LÝ KHI ONLICK DELETE => AUTO FOCUS()
    const inputElement = useRef();

    const API = `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        stateValue,
    )}&type=less`;
    useEffect(() => {
        if (!stateValue.trim()) {
            setSearch([]);
            return;
        }
        setLoading(true);
        fetch(API)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                return setSearch(res.data);
            });
    }, [API, stateValue]);

    // XỬ LÝ KHI NGƯỜI DÙNG TÌM KIẾM KẾT QUẢ STATE THAY ĐỔI VÀ GÁN stateValue VÀO INPUT VALUE
    const handleSearch = (e) => {
        if (e.nativeEvent.data === ' ' && stateValue === '') {
            return false;
        }
        setValue(e.target.value);
    };

    //XỬ LÝ KHI ẤN VÀO ICON DELETE TRONG Ô INPUT
    const handleDeleteResult = () => {
        setValue('');
        setSearch([]);
        //xử lý onClick DELETE thì focus vào ô input
        inputElement.current.focus();
    };

    // XỬ LÝ SHOW RESULT AND HIDEN
    const handleBlur = () => {
        setShow(false);
    };
    // XỬ LÝ KHI FOCUS LẠI VÀO INPUT THÌ SHOW RESULT
    const handleFocusShow = () => {
        setShow(true);
    };

    return (
        <>
            <HeadlessTippy
                //THUỘC TÍNH CỦA TIPPY KHI BLUER RA NGOÀI CONTENT CỦA TIPPY SẼ ẨN
                onClickOutside={handleBlur}
                // KHI CÓ CẢ 2 ĐIỀU KIỆN THOẢ MÃN THÌ SHOW RESULT MỚI ĐC HIỆN         1:SHOW = TRUE , 2: AIP TRẢ VỀ
                visible={stateShow && searchResults.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('accounts')}>Accounts</h3>
                            {searchResults.map((data) => (
                                <Accounts data={data} key={data.id} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        // KHI FOCUS LẠI VÀO Ô INPUT SẼ HIỆN CONTENT
                        onFocus={handleFocusShow}
                        ref={inputElement}
                        value={stateValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleSearch}
                    />
                    <span className={cx('clear')}>
                        {!!stateValue && !stateLoading && (
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                onClick={handleDeleteResult}
                            />
                        )}
                        {stateLoading && (
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        )}
                    </span>

                    <span className={cx('search-btn')}>
                        <i>
                            <FontAwesomeIcon
                                className={cx('faMagnifyingGlass')}
                                icon={faMagnifyingGlass}
                            />
                        </i>
                    </span>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
