import { v2 as cloudinary } from 'cloudinary';
import config from '../app/config';
import multer from 'multer';
export const sendImageToCloudinary = () => {

	(async function () {

		// Configuration
		cloudinary.config({
			cloud_name: config.Clourdinary_cloud_name,
			api_key: config.Clourdinary_api_key,
			api_secret: config.Clourdinary_api_secret,
		});

		// // Upload an image
		// const uploadResult = await cloudinary.uploader
		// 	.upload(
		// 		'https://i.ibb.co.com/bv8rNBZ/burger-hamburger-cheeseburger.jpg', {
		// 		public_id: 'shoes',
		// 	}
		// 	)
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// console.log(uploadResult);

		// // Optimize delivery by resizing and applying auto-format and auto-quality
		// const optimizeUrl = cloudinary.url('shoes', {
		// 	fetch_format: 'auto',
		// 	quality: 'auto'
		// });

		// console.log(optimizeUrl);

		// // Transform the image: auto-crop to square aspect_ratio
		// const autoCropUrl = cloudinary.url('shoes', {
		// 	crop: 'auto',
		// 	gravity: 'auto',
		// 	width: 500,
		// 	height: 500,
		// });

		// console.log(autoCropUrl);


	})();
}

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, process.cwd() + '/uploads/')
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		cb(null,file.originalname)
	}
})
export const upload = multer({ storage: storage })