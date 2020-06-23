
class UploadPhoto extends React.Component {
    constructor(props) {
        super(props)

    }
      render() {
  
        return (
          <div>
            Photo widget goes here
            <button id="upload_widget" class="cloudinary-button">Upload files</button>

              <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>  

              <script type="text/javascript">  

                const myWidget = cloudinary.createUploadWidget({
                  {cloudName: 'mrauch', 
                  uploadPreset: 'user_image'}, (error, result) => { 
                    if (!error && result && result.event === "success") { 
                    console.log('Done! Here is the image info: ', result.info); 
                  }
                }
              })
                document.getElementById("upload_widget").addEventListener("click", function(){
                  myWidget.open()
                }, false);
              </script>
          </div>
        )
      }
    }
