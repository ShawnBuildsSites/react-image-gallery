import React, { useState } from "react";
import axios from 'axios';

const AddImageForm = ({ categories, gallery }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('addedCategories', e.target.addedCategories.value);
    formData.append('gallery', e.target.gallery.value);
    if (selectedFile) { formData.append('file', selectedFile); }

    axios.post('https://shawngraydesign.com/nuexpr/add-image', formData).then(response => {
      console.log(response.data);
      //Add stuff after successful add
    }).catch(error => {
      console.error(error);
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      alert('Not a valid image. Try again.');
      e.target.value = null;
    }
  }

  return (
    <div popover id="addImagePopover" className="addForm">
      <h2>Add new image to {gallery} gallery</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={gallery} name="gallery" readOnly />
        <input type="text" placeholder="title" name="title" />
        <input type="file" placeholder="Image" name="src" onChange={handleFileChange} />
        <input type="text" placeholder="Categories (CSV)" name="addedCategories" list="categories" multiple />
        <datalist id="categories">
          {categories.length > 0 ? (
            categories.map((category, i) => (
              <option key={i} value={category} />
            ))
          ) : ''}
        </datalist>
        {previewImage && <img className="preview-image" src={previewImage} alt="Preview" />}
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
}

export default AddImageForm;