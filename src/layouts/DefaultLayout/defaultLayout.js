import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/component/Header';
import SideBar from '~/layouts/component/SideBar';

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
defaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default defaultLayout;
