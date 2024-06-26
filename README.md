# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## CICD

We deploy the main branch directly to [https://signature.purpleapps.nl](https://signature.purpleapps.nl) using AWS Amplify. See the amplify config in [/amplify.yml`](./amplify.yml)

## Updating email signature image

Regularly we have to update the email signature image that is used in our Purple emails. We update the email signature by uploading **a new version** of our email signature in our S3 bucket `purple-generic` ([link](https://eu-central-1.console.aws.amazon.com/s3/buckets/purple-generic)) in the folder `signature`. 

### Step 1: upload new image 
In order to upload a new version, you must upload an object in folder `signature` with the name `email-sig-img.png`. You can validate whether a new version has been created by navigating to the object `email-sig-img.png` and viewing the `versions` tab.

<img width="1805" alt="Screenshot 2024-05-13 at 10 41 05" src="https://github.com/PurpleNL/purple-email-signature/assets/141142844/cbfbac03-14f4-43c5-b943-9c327031f0fa">

### Step 2: 
The email signature image needs to be publicly available. Unfortunately, It seems that when you update a new version, the previous set permissions are wiped. Therefore, we need to set the permissions every time we update the image. You do so by navigating to the object overview page and the Permissions tab. Here we click on edit. The object should have the following permissions configured:
<img width="1809" alt="Screenshot 2024-05-13 at 11 18 11" src="https://github.com/PurpleNL/purple-email-signature/assets/141142844/0889725c-2024-499e-96d4-7f040f4f300f">

### Step 3: validate whether the image is working as expected
You can verify whether image has been uploaded correctly by navigating to https://signature.purpleapps.nl/ and entering the form. The image should be there as expected. Another way to validate it is by creating a new email using your signature.
