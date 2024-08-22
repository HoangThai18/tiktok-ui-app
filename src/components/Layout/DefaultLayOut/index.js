import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayOut.module.scss';

const cx = classNames.bind(styles);
function DefaultLayOut({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayOut;
