function UploadImage({
  onRequestSave,
  onRequestClear,
  defaultFiles = []
}) {
  const[files,setFiles] = React.useState(defaultFiles)

  return (
    <FilePond
    files={files}
    allowMultiple={false}
    maxFiles={1}
    onupdatefiles={filesItems => {
      if (filesItems.length === 0) {
        onRequestClear()
      }

      setFiles(fileItems.map(fileItem => fileItem.file))
    }}
    server={server}
    />
  )
}
const server = {
  // this uploads the image using firebase
  process: (fieldName, file, metadata, load, error, progress, abort) => {
    // create a unique id for the file
    const id = shortid.generate()

    // upload the image to firebase
    const task = storage.child('images/' + id).put(file, {
      contentType: 'image/jpeg',
    })

    // monitor the task to provide updates to FilePond
    task.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snap => {
        // provide progress updates
        progress(true, snap.bytesTransferred, snap.totalBytes)
      },
      err => {
        // provide errors
        error(err.message)
      },
      () => {
        // the file has been uploaded
        load(id)
        onRequestSave(id)
      }
    )
  },

  // this loads an already uploaded image to firebase
  load: (source, load, error, progress, abort) => {
    // reset our progress
    progress(true, 0, 1024)

    // fetch the download URL from firebase
    storage
      .child('images/' + source)
      .getDownloadURL()
      .then(url => {
        // fetch the actual image using the download URL
        // and provide the blob to FilePond using the load callback
        let xhr = new XMLHttpRequest()
        xhr.responseType = 'blob'
        xhr.onload = function(event) {
          let blob = xhr.response
          load(blob)
        }
        xhr.open('GET', url)
        xhr.send()
      })
      .catch(err => {
        error(err.message)
        abort()
      })
  },
}
export default UploadPhoto