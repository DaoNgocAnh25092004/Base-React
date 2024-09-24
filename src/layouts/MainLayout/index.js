import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './MainLayout.module.scss';
import Header from '~/layouts/components/Header';
import Siderbar from './Sidebar';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
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

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
