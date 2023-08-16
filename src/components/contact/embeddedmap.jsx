import React from "react";

const EmbeddedMap = () => {
	return (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3423308239553!2d5.653181374231048!3d6.349703825160154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d54b13f42cd1%3A0x220d1bbd38785192!2sTory%20M.%20Basic%20School!5e0!3m2!1sen!2sng!4v1691905929132!5m2!1sen!2sng'
			width='90%'
			height='500'
			style={{ border: 0 }}
			allowFullScreen=''
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade' 
            className=" mt-24 p-4 border rounded-2xl object-contain bg-gray-800"
		></iframe>
	);
};

export default EmbeddedMap;
