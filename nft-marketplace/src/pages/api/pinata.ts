const axios = require('axios')
const FormData = require('form-data')

const PINATA_JWT = process.env.REACT_APP_PINATA_JWT

const JWT = `Bearer ${PINATA_JWT}`
export const pinFileToIPFS = async (file:File, fileName: string, keys: object) => {
    const formData = new FormData();
    formData.append('file', file)
    
    const metadata = JSON.stringify({
      name: fileName,
      keyvalues: keys,
    });
    formData.append('pinataMetadata', metadata);
    
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      return res.data.IpfsHash
    } catch (error) {
      console.log(error);
    }
}

export const viewFilesInIPFS = async (keys : object) => {
    var config = {
        method: 'get',
        url: 'https://api.pinata.cloud/data/pinList',
        headers: { 
          'Authorization': JWT
        },
        params: { "metadata[keyvalues]": keys}
      };
      try{
        const res = await axios(config)
        return res.data
      } catch (err){
        console.log(err)
      }
};

// const fs = require('fs')
// const file = fs.createReadStream('./test.jpg')
// const keys = {"key": "value"}
// pinFileToIPFS(file, "test", keys)
// viewFilesInIPFS({
//     "key": {"value": "value", "op": "eq"}
// })
