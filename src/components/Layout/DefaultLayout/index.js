import Header from '~/components//Layout/component/Header';
import SideBar from './SideBar/SideBar';

function defaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default defaultLayout;
