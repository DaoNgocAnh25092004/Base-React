import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="container">{children}</div>
        </>
    );
}

export default HeaderOnly;
