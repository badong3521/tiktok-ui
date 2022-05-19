import { useState, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './menu.module.scss';
import { Wrapper as PopperWrapperMenu } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
const cx = classNames.bind(style);

function Menu({ items, children }) {
    const [searchResults, setSearch] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setSearch('result');
        }, 0);
    });

    // Xử lý Item đa cấp khác nhau
    const [historyLever, setHistoryLever] = useState([{ data: items }]);

    // vị trí index của historylevels cuối cùng trong mảng
    const currentLever = historyLever[historyLever.length - 1];
    // console.log('historyLever', historyLever);
    // console.log('currentLever', currentLever);
    // console.log('historyLeverLength', historyLever.length);

    //TEST

    //FUNCTION HANDLE RETURN RA MENU_ITEM
    const renderItemMenu = () => {
        // currentLever.data.map lấy ra item và index có thằng chidlren
        return currentLever.data.map(function (item, index) {
            //Chuyển sang kiểu Boleans
            const isParent = Boolean(item.children);
            // console.log(isParent);

            return (
                <MenuItem
                    onClick={() => {
                        if (isParent) {
                            // Push thằng có children vào mảng cũ ...per
                            setHistoryLever((prev) => [...prev, item.children]);
                        }
                    }}
                    key={index}
                    item={item}
                />
            );
        });
    };

    return (
        <>
            <HeadlessTippy
                onHide={() => {
                    return setHistoryLever((pre) => pre.slice(0, 1));
                }}
                delay={[0, 300]}
                // visible={searchResults.length > 0}
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapperMenu>
                            {/* Check nếu có (historyLever.length > 1) thì mới hiện HeaderMenu title:Language */}
                            {historyLever.length > 1 && (
                                <HeaderMenu
                                    //onClick khi Back về
                                    onBack={() => {
                                        setHistoryLever((prev) =>
                                            prev.slice(0, prev.length - 1),
                                        );
                                    }}
                                    title="Languages"
                                />
                            )}
                            {renderItemMenu()}
                        </PopperWrapperMenu>
                    </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </>
    );
}

export default Menu;
