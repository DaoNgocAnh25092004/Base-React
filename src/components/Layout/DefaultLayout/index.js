import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Siderbar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />

            <div className={cx('container')}>
                <div className={cx('container--box', 'width-pc')}>
                    <Siderbar />
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
