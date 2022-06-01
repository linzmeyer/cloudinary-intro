require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});


// upload an image
cloudinary.uploader.upload('./images/test1-org.png', (err, result) => {
  console.log(err);
  console.log(result);
});


/* RESULT:
{
  asset_id: 'aa46d5151222f9f1176c0c609b7c2f75',
  public_id: 'jjzmctfzgrjrjdwldeeo',
  version: 1654042778,
  version_id: '6932fdb589217197ae0eb744e789c0ad',
  signature: 'bea77aee27974cdf32e19ed6af226b4e25adbb9f',
  width: 1034,
  height: 488,
  format: 'png',
  resource_type: 'image',
  created_at: '2022-06-01T00:19:38Z',
  tags: [],
  bytes: 70038,
  type: 'upload',
  etag: '9f4cf2e202ca061e6bc7f7622c3da17d',
  placeholder: false,
  url: 'http://res.cloudinary.com/tru-misfit/image/upload/v1654042778/jjzmctfzgrjrjdwldeeo.png',
  secure_url: 'https://res.cloudinary.com/tru-misfit/image/upload/v1654042778/jjzmctfzgrjrjdwldeeo.png',
  original_filename: 'test1-org',
  api_key: '••••••••'
}
*/