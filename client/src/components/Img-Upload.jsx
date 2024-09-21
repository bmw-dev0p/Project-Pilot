import React, { Component } from "react";

// Ensure environment variables are set
// const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
// const apiKey = process.env.CLOUDINARY_API_KEY;
// const apiSecret = process.env.CLOUDINARY_API_SECRET;

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'df3imidez',
        api_key: '958823327518173',
        api_secret: 'sOszwurbeBe97yB3S-eyydtnzL8',
        uploadPreset: 'default',
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          const imgURL = result.info.secure_url;
          // Call the passed setImageUrl function to update signUpData
          this.props.setImageUrl(imgURL);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
