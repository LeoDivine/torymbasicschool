import Item from "./Item";
import {
	ContactInformation,
	SchoolHours,
	QuickLinks,
	Location,
} from "../../../utils/const";
const ItemsContainer = () => {
	return (
		<div className=' grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
			<Item Links={ContactInformation} title='Contact Information' />
			<Item Links={SchoolHours} title='School Hours' />
			<Item Links={QuickLinks} title='QuickLinks' />
			<Item Links={Location} title='location' />
		</div>
	);
};

export default ItemsContainer;
