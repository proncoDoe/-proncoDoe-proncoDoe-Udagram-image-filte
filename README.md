# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

# Elastic BeanStalk URL
- http://udagram-dev-proncodoe-dev.us-east-2.elasticbeanstalk.com/filteredimage

Example: `http://udagram-dev-proncodoe-dev.us-east-2.elasticbeanstalk.com/filteredimage?image_url=https://cdn1.vectorstock.com/i/1000x1000/37/90/close-up-of-colorful-eyes-cat-vector-23633790.jpg`

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

## Screenshots to prove: The project was deployed!

### Project review

GitHub link https://github.com/proncoDoe/Udagram-image-filter.git

## Deplopment Overview

### Before

![Store List](https://i.ibb.co/fFmp8z2/before.png)

### After

![Store List](https://i.ibb.co/wcdQm6J/after.png)

### Postman preview

![Store List](https://i.ibb.co/Wvwr1G5/postman.png)

![Store List](https://i.ibb.co/FYvMGVg/deploy-to-elasticbean.png)

Deplopyment Screenshots

![eb deployment](https://i.ibb.co/dGJ8XHj/eb-1.png)

![eb deployment](https://i.ibb.co/Z2k29tR/eb-2.png)

## Credit

Gabriel Ruttner instructor of udagram image filter.
 Udacity.
<https://www.sc.com/>
