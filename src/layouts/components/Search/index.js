import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import useDebounce from '~/hooks/useDebounce';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [resultResearch, setResultResearch] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedSearchValue = useDebounce(searchValue, 600);

    useEffect(() => {
        if (!debouncedSearchValue.trim()) {
            setResultResearch([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedSearchValue);
            setResultResearch(result);

            setLoading(false);
        };

        fetchApi();
    }, [debouncedSearchValue]);

    const handleClear = () => {
        setSearchValue('');
        setResultResearch([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value.trimStart());
    };
    return (
        <div>
            <HeadlessTippy
                interactive
                // appendTo={() => document.body}
                visible={showResult && resultResearch.length > 0}
                render={(attrs) => (
                    <div className={cx('header__inner--search__result')}>
                        <PopperWrapper>
                            <h4
                                className={cx('search-title')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                Tài khoản
                            </h4>
                            {resultResearch.map((item) => (
                                <AccountItem key={item.id} data={item} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('header__inner--search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        placeholder="Search  accounts and videos"
                        spellCheck="false"
                        className={cx('header__inner--search__input')}
                        onChange={handleSearchChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('header__inner--search__clear')}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('header__inner--search__loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('header__inner--search__search')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
{
}
