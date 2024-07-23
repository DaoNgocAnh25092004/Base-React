import Header from '~/components/Layout/components/Header';
import Siderbar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />

            <div className="container">
                <Siderbar />
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
