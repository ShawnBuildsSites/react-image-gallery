/**Posts AddImageForm to server */
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();

const storage = (gallery) => multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads', gallery);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const dynamicUpload = (gallery) => multer({
  storage: storage(gallery)
}).single('file');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/add-the-image', (req, res) => {
  const gallery = req.body.gallery === 'images' ? 'images/' : 'images/models/';
  dynamicUpload(gallery)(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error uploading file');
    } else {
      const destinationPath = path.join(__dirname, gallery, req.file.originalname);
      const newImage = {
        src: destinationPath,
        categories: req.body.addedCategories,
        title: req.body.title
      };

      const rawData = fs.readFileSync(gallery + '.json');
      const data = JSON.parse(rawData);
      data.push(newImage);
      fs.writeFileSync(gallery + '.json', JSON.stringify(data, null, 2));
      res.status(200).send('Image uploaded successfully!');
    }
  });
});