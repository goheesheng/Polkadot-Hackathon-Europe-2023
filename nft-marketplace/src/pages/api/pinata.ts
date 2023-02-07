const axios = require('axios')
const FormData = require('form-data')

// const PINATA_JWT = process.env.REACT_APP_PINATA_JWT
const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5NDA3ZTI1MC05YWY5LTQyNjUtYWE1ZS1kNjU1YzVhNWU0NWIiLCJlbWFpbCI6InRlc3RpbmdueXA1MzNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImE3NzYwOTBmNGI2MzNhMzVkZTU3Iiwic2NvcGVkS2V5U2VjcmV0IjoiM2U1NDNhMDE3ZjNlMjBjMTViMGM5ZjNmYTczNTBlZTA2NmY3ODRmMWE1NzZhZThhNTA4MDE3MTU1MDA0NGJiYiIsImlhdCI6MTY3NTYwOTE0MX0.qpT6PefndubArdHKmBt2iBDwy2LZysbjjKd_tM5Icag"

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
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}

