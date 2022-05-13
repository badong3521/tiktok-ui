import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './menu.module.scss';
import { Wrapper as PopperWrapperMenu } from '~/components/Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(style);

function Menu({ items = [], children }) {
    const [searchResults, setSearch] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setSearch('result');
        }, 0);
    });

    const renderItemMenu = () => {
        return items.map(function (item, index) {
            return <MenuItem key={index} item={item} />;
        });
    };

    return (
        <Tippy
            // visible={searchResults.length > 0}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapperMenu>{renderItemMenu()}</PopperWrapperMenu>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
