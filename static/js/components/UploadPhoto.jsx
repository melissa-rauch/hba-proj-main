
class UploadPhoto extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        imageUrl: null,
        imageAlt: null,
      }
    }  
    handleImageUpload = async () => {
      const { files } = document.querySelector('input[type="file"]')
      const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'user_img');

      const options = {
        method: 'POST',
        body: formData,
      };
    
      
      try {
        const res = await fetch('https://api.Cloudinary.com/v1_1/:mrauch/image/upload', options);
        const res_1 = await res.json();
        this.setState({
          imageUrl: res_1.secure_url,
          imageAlt: `An image of ${res_1.original_filename}`
        });
      }
      catch (err) {
        return console.log(err);
      }
    }

    openWidget = () => {
      const widget = window.Cloudinary.createUploadWidget(
        {
          cloudName: 'mrauch',
          uploadPreset: 'user_img',
        },
        (error, result) => {
          if (result.event === 'success') {
            this.setState({
              imageUrl: result.info.secure_url,
              imageAlt: `An image of ${result.info.original_filename}`
            })
          }
        },
      );
      widget.open(); 
    };

    render() {
      const { imageUrl, imageAlt } = this.state;
  
      return (
        <main className="App">
          <section className="left-side">
            <form>
              <div className="form-group">
                <input type="file"/>
              </div>
  
              <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
              <button type="button" className="btn widget-btn" onClick={this.openWidget}>Upload Via Widget</button>
            </form>
          </section>
          <section className="right-side">
            <p>The resulting image will be displayed here</p>
            {imageUrl && (
              <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
            )}
          </section>
        </main>
      );
    }
  }