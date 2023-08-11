import Item from './Item';
import { FOOTER_ITEMS } from '../../../utils/const';
const FooterItems = () => {
	return (
		<div className=' grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
			{FOOTER_ITEMS.map((footerItem, i) => (
				<Item
					key={i}
					links={footerItem.links}
					title={footerItem.title}
				/>
			))}
		</div>
	);
};

export default FooterItems;
