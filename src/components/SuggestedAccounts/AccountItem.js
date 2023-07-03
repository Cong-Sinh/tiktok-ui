// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWraper } from '~/components/Popper';
const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWraper></PopperWraper>
      </div>
    );
  };
  return (
    <div>
      <Tippy visible interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://down-vn.img.susercontent.com/file/7ab6c7018371864602b34ed36e351b9b_tn"
            alt=""
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>quocnguyenphu</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Quốc Nguyễn Phú</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
