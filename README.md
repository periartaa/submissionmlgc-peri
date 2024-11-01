# submissionmlgc-peri

"submissionmlgc-peri" is a machine learning submission by Peri, focused on deploying a cancer prediction model API using Google Cloud services. The project includes a backend API for model inference, processes image inputs to deliver predictions with suggestions, and stores structured data to optimize accuracy in cancer detection results.

# Contoh

MODEL_URL='https://storage.googleapis.com/submissionmlgc-wijaya/model.json'

GOOGLE_CLOUD_PROJECT=submissionmlgc-wijaya

# install

npm init --y

npm install @hapi/hapi @tensorflow/tfjs-node@4.14.0 @google-cloud/firestore dotenv

npm install nodemon --save-dev
