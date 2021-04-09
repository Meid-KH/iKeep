import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<Sidebar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
