import { v2 as cloudinary } from 'cloudinary';
import config from '../app/config';
import multer from 'multer';
import fs from 'fs';

// Configuration
cloudinary.config({
	cloud_name: config.Clourdinary_cloud_name,
	api_key: config.Clourdinary_api_key,
	api_secret: config.Clourdinary_api_secret,
});
export const sendImageToCloudinary = (imageName: string, path: string) => {
	return new Promise((resolve, reject) => {
	  cloudinary.uploader.upload(path,{ public_id: imageName },function (error, result) {
		  if (error) {
			reject(error);
		  }
		  resolve(result);
		  fs.unlink(path, (err) => {
			if (err) {
			reject(err)
			} else {
			  console.log('File is deleted.');
			}
		  });
		},
	  );
	 
	});
  };
  

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, process.cwd() + '/uploads/')
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		cb(null, file.fieldname + '-' + uniqueSuffix)
	}
})
export const upload = multer({ storage: storage })