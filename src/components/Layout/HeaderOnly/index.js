import Header from '~/components//Layout/component/Header';

function defaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default defaultLayout;
