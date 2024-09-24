import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Siderbar() {
    return <aside className={cx('sidebar')}>Sidebar</aside>;
}

export default Siderbar;
