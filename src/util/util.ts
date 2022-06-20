import fs from "fs";
import Jimp from 'jimp';
import axios, { AxiosResponse } from "axios";

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {

      
      const imageData: AxiosResponse = await axios({
        method: "get",
        url: inputURL,
        responseType: "arraybuffer",
      });
      const photo = await Jimp.read(imageData.data);

      console.log(inputURL)
     
    } catch (error) {
      reject(error);
    }
  });
}


// axios({
//   method: 'get',
//   url: filterImageFromURL,
//   responseType: 'arraybuffer'
// })
// .then(function ({data: imageBuffer}) {
//   return Jimp.read(imageBuffer)
// })


// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files: Array<string>) {
  for (let file of files) {
    fs.unlinkSync(file);
  }
}
