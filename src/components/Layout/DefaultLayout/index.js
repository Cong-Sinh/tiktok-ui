import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components//Layout/component/Header';
import SideBar from './SideBar/SideBar';

const cx = classNames.bind(styles);

function defaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default defaultLayout;
