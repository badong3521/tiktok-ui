import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
// Css Tippy
import 'tippy.js/dist/tippy.css'; // optional

//import Image
import { images } from '~/assets/image/images';
//thêm thư viện classnames
import classNames from 'classnames/bind';
import style from './Header.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    MENU_ITEMS,
    MENU_ITEMS_USER,
} from '~/components/Popper/Menu/MenuItem/MenuItem.js';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Accounts from '~/components/Accounts';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(style);
function Header() {
    //Feedback, title and icon

    const [searchResults, setSearch] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setSearch('result');
        }, 0);
    }, []);

    // Fake user
    const currentUser = true;

    // Xử lý khi không có IMG
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImg);
    };
    console.log(images.noImg);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <svg height="42" width="118" alt="TikTok">
                        <g clipPath="url(#clip0)">
                            <path
                                d="M9.87537 16.842V15.7233C9.49211 15.6721 9.10246 15.6401 8.70003 15.6401C3.90288 15.6338 0 19.5399 0 24.3475C0 27.2947 1.46917 29.9031 3.71764 31.4822C2.26763 29.9287 1.37974 27.8381 1.37974 25.5494C1.37974 20.8121 5.17403 16.9507 9.87537 16.842Z"
                                fill="#25F4EE"
                            ></path>
                            <path
                                d="M10.0862 29.5259C12.2261 29.5259 13.9763 27.819 14.053 25.6965L14.0594 6.72822H17.5215C17.4512 6.33824 17.4129 5.93548 17.4129 5.52632H12.686L12.6796 24.4946C12.603 26.6171 10.8527 28.324 8.71286 28.324C8.04854 28.324 7.42255 28.1578 6.86682 27.8637C7.58224 28.8674 8.75758 29.5259 10.0862 29.5259Z"
                                fill="#25F4EE"
                            ></path>
                            <path
                                d="M23.9923 13.166V12.1112C22.6701 12.1112 21.4436 11.7212 20.4088 11.0435C21.3286 12.0984 22.5742 12.8656 23.9923 13.166Z"
                                fill="#25F4EE"
                            ></path>
                            <path
                                d="M20.4088 11.0435C19.3995 9.88639 18.7927 8.37762 18.7927 6.72821H17.528C17.8537 8.53106 18.9269 10.0782 20.4088 11.0435Z"
                                fill="#FE2C55"
                            ></path>
                            <path
                                d="M8.70642 20.3646C6.51544 20.3646 4.73328 22.1483 4.73328 24.3411C4.73328 25.8691 5.602 27.1988 6.86676 27.8637C6.39408 27.2116 6.11302 26.4125 6.11302 25.543C6.11302 23.3502 7.89518 21.5665 10.0862 21.5665C10.495 21.5665 10.891 21.6368 11.2615 21.7519V16.9188C10.8782 16.8676 10.4886 16.8356 10.0862 16.8356C10.0159 16.8356 9.95202 16.842 9.88175 16.842V20.55C9.50488 20.4349 9.11523 20.3646 8.70642 20.3646Z"
                                fill="#FE2C55"
                            ></path>
                            <path
                                d="M23.9921 13.166V16.842C21.5392 16.842 19.2652 16.0557 17.4127 14.7259V24.3475C17.4127 29.1487 13.5099 33.0613 8.70631 33.0613C6.85388 33.0613 5.12921 32.4731 3.71753 31.4822C5.30806 33.1891 7.57569 34.2632 10.0861 34.2632C14.8832 34.2632 18.7925 30.357 18.7925 25.5494V15.9278C20.6449 17.2576 22.9189 18.0439 25.3718 18.0439V13.3131C24.8927 13.3131 24.4328 13.2619 23.9921 13.166Z"
                                fill="#FE2C55"
                            ></path>
                            <path
                                d="M17.4127 24.3475V14.7259C19.2652 16.0557 21.5392 16.842 23.9921 16.842V13.166C22.574 12.8656 21.3284 12.0984 20.4086 11.0435C18.9266 10.0782 17.8599 8.53106 17.5213 6.72821H14.0592L14.0528 25.6964C13.9762 27.8189 12.2259 29.5259 10.0861 29.5259C8.75742 29.5259 7.58847 28.8674 6.86028 27.8701C5.59551 27.1988 4.72679 25.8755 4.72679 24.3475C4.72679 22.1547 6.50895 20.371 8.69993 20.371C9.10874 20.371 9.50478 20.4413 9.87527 20.5564V16.8484C5.17393 16.9507 1.37964 20.8121 1.37964 25.5494C1.37964 27.8381 2.26753 29.9223 3.71753 31.4822C5.12921 32.4731 6.85389 33.0613 8.70632 33.0613C13.5035 33.0613 17.4127 29.1487 17.4127 24.3475Z"
                                fill="black"
                            ></path>
                            <path
                                d="M30.0477 13.1787H44.8225L43.4683 17.411H39.6357V33.0548H34.8577V17.411L30.0541 17.4173L30.0477 13.1787Z"
                                fill="black"
                            ></path>
                            <path
                                d="M69.0317 13.1787H84.1514L82.7972 17.411H78.6261V33.0548H73.8417V17.411L69.0381 17.4173L69.0317 13.1787Z"
                                fill="black"
                            ></path>
                            <path
                                d="M45.7295 19.5015H50.4628V33.0548H45.755L45.7295 19.5015Z"
                                fill="black"
                            ></path>
                            <path
                                d="M52.347 13.1277H57.0802V22.3848L61.7688 17.7754H67.4155L61.4814 23.5356L68.1246 33.0548H62.9122L58.4791 26.4572L57.0739 27.8189V33.0548H52.3406V13.1277H52.347Z"
                                fill="black"
                            ></path>
                            <path
                                d="M102.49 13.1277H107.224V22.3848L111.912 17.7754H117.559L111.625 23.5356L118.268 33.0548H113.062L108.629 26.4572L107.224 27.8189V33.0548H102.49V13.1277Z"
                                fill="black"
                            ></path>
                            <path
                                d="M48.0929 17.9544C49.4088 17.9544 50.4755 16.8867 50.4755 15.5697C50.4755 14.2528 49.4088 13.1851 48.0929 13.1851C46.7771 13.1851 45.7103 14.2528 45.7103 15.5697C45.7103 16.8867 46.7771 17.9544 48.0929 17.9544Z"
                                fill="black"
                            ></path>
                            <path
                                d="M83.5445 24.942C83.5445 20.6779 86.8342 17.1808 91.0181 16.8548C90.8073 16.8356 90.5199 16.8292 90.3091 16.8292C85.8313 16.8292 82.2031 20.4605 82.2031 24.942C82.2031 29.4236 85.8313 33.0548 90.3091 33.0548C90.5199 33.0548 90.8073 33.042 91.0181 33.0293C86.8406 32.7032 83.5445 29.2062 83.5445 24.942Z"
                                fill="#25F4EE"
                            ></path>
                            <path
                                d="M92.8579 16.8292C92.6407 16.8292 92.3532 16.842 92.1425 16.8548C96.32 17.1808 99.6097 20.6779 99.6097 24.942C99.6097 29.2062 96.32 32.7032 92.1425 33.0293C92.3532 33.0484 92.6407 33.0548 92.8579 33.0548C97.3356 33.0548 100.964 29.4236 100.964 24.942C100.964 20.4605 97.3356 16.8292 92.8579 16.8292Z"
                                fill="#FE2C55"
                            ></path>
                            <path
                                d="M91.5803 28.8866C89.4021 28.8866 87.6391 27.1221 87.6391 24.942C87.6391 22.762 89.4021 20.9975 91.5803 20.9975C93.7585 20.9975 95.5215 22.762 95.5215 24.942C95.5215 27.1221 93.7522 28.8866 91.5803 28.8866ZM91.5803 16.8292C87.1026 16.8292 83.4744 20.4605 83.4744 24.942C83.4744 29.4236 87.1026 33.0548 91.5803 33.0548C96.0581 33.0548 99.6863 29.4236 99.6863 24.942C99.6863 20.4605 96.0581 16.8292 91.5803 16.8292Z"
                                fill="black"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="118" height="42" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <HeadlessTippy
                        // visible={searchResults.length > 0}
                        interactive
                        render={(attrs) => (
                            <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h3 className={cx('accounts')}>Accounts</h3>
                                    <Accounts />
                                    <Accounts />
                                    <Accounts />
                                    <Accounts />
                                    <Accounts />
                                    <Accounts />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input
                                placeholder="Search accounts and videos"
                                spellCheck={false}
                            />
                            <span className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                                <FontAwesomeIcon
                                    className={cx('loading')}
                                    icon={faSpinner}
                                />
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
                </div>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <HeadlessTippy
                                delay={[0, 50]}
                                interactive
                                render={(attrs) => (
                                    <div className="tooltip" tabIndex="-1" {...attrs}>
                                        Upload
                                    </div>
                                )}
                            >
                                <button>
                                    <span>
                                        <svg
                                            className={cx('upload')}
                                            viewBox="0 0 32 32"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M22.1571 13.8359L21.9247 12.3786C21.4686 9.51917 18.9876 7.3335 16 7.3335C12.6863 7.3335 10 10.0197 9.99996 13.3334L10.0011 15.2304L8.11578 15.3398C6.19293 15.4513 4.66663 17.0482 4.66663 19.0002C4.66663 21.0252 6.30825 22.6668 8.33329 22.6668H15.3333V17.0813L14.1785 18.236C13.9182 18.4964 13.4961 18.4964 13.2357 18.236L12.7643 17.7646C12.504 17.5043 12.504 17.0822 12.7643 16.8218L15.862 13.7242C16.1223 13.4638 16.5444 13.4638 16.8048 13.7242L19.9024 16.8218C20.1628 17.0822 20.1628 17.5043 19.9024 17.7646L19.431 18.236C19.1706 18.4964 18.7485 18.4964 18.4882 18.236L17.3333 17.0811V22.6668H23C25.3932 22.6668 27.3333 20.7267 27.3333 18.3335C27.3333 16.151 25.7179 14.3423 23.6181 14.0437L22.1571 13.8359ZM8.33329 24.6668H15.3333H17.3333H23C26.4978 24.6668 29.3333 21.8313 29.3333 18.3335C29.3333 15.1411 26.9714 12.5005 23.8997 12.0636C23.2913 8.24881 19.9861 5.3335 16 5.3335C11.5817 5.3335 7.99996 8.91522 7.99996 13.3335L7.99996 13.3431C5.0255 13.5157 2.66663 15.9824 2.66663 19.0002C2.66663 22.1298 5.20368 24.6668 8.33329 24.6668Z"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </HeadlessTippy>
                            <>
                                <HeadlessTippy
                                    interactive
                                    delay={[0, 50]}
                                    render={(attrs) => (
                                        <div className="tooltip" tabIndex="-1" {...attrs}>
                                            Message
                                        </div>
                                    )}
                                >
                                    <button>
                                        <svg
                                            className={cx('messager')}
                                            viewBox="0 0 48 48"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
                                            ></path>
                                        </svg>
                                    </button>
                                </HeadlessTippy>
                            </>
                            <>
                                <HeadlessTippy
                                    delay={[0, 50]}
                                    interactive
                                    render={(attrs) => (
                                        <div className="tooltip" tabIndex="-1" {...attrs}>
                                            Inbox
                                        </div>
                                    )}
                                >
                                    <button>
                                        <svg
                                            className={cx('inbox')}
                                            viewBox="0 0 32 32"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                                            ></path>
                                        </svg>
                                    </button>
                                </HeadlessTippy>
                            </>
                        </>
                    ) : (
                        <>
                            <Button buttonUpload>
                                <span>Upload</span>
                            </Button>

                            <Button
                                // buttonSmall
                                buttonPrimary
                                // buttonLarge
                                // href="https://fullstack.edu.vn/learning/reactjs?id=5437f73d-b1ba-46d7-8ceb-85e13f7e447e"
                                // onClick={() => console.log('dongba')}
                                // target="_blank"
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_ITEMS_USER : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                src={
                                    fallback ||
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0prvKSkZ0dUOY1Idg2x-KrQN4noUB1CI5g&usqp=CAU'
                                }
                                alt="avatar"
                                className={cx('avatar')}
                                onError={handleError}
                            />
                        ) : (
                            <i>
                                <FontAwesomeIcon
                                    className={cx('icon-menu')}
                                    icon={faEllipsisVertical}
                                />
                            </i>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
