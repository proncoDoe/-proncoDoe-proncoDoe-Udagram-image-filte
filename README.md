# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

# Elastic BeanStalk URL
- http://udagram-proncode-dev-dev.us-east-2.elasticbeanstalk.com

Example: `http://udagram-proncode-dev-dev.us-east-2.elasticbeanstalk.com/filteredimage`

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

## Deplopy Overview Preview

![Store List](https://i.ibb.co/XD0Zn7j/deploment-screennap.png)

Deplopyment Screenshots

![Product Detail View](https://i.ibb.co/hmjrM2P/ice-screenshot-20220619-225002.png)

![Product Detail View](https://i.ibb.co/BBTbTd9/ice-screenshot-20220619-231736.png)

![Product Detail View](https://i.ibb.co/wNjcdx9/ice-screenshot-20220619-231759.png)

![Product Detail View](https://i.ibb.co/mSx7J3x/ice-screenshot-20220619-234713.png)


![Product Detail View](https://i.ibb.co/ZLy2Cb3/ice-screenshot-20220619-233556.png)

## Credit

Gabriel Ruttner instructor of udagram image filter.
 Udacity.
<https://www.sc.com/>
