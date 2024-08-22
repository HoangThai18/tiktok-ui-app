import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assset/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    {' '}
                    <img src={images.logo} alt="Titok"></img>{' '}
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search" spellCheck={false}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>{' '}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        {' '}
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
