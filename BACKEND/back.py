from flask import Flask, request, jsonify
import torch

app = Flask(__name__)

# Load the PyTorch model
model = torch.load('/content/drive/MyDrive/Colab Notebooks/MRI_Attention_UNet_ResNet.hdf5', map_location=torch.device('cpu'))
model.eval()  # Mettre le modèle en mode évaluation


# Dictionary to store user attempts (replace with a proper database in production)
user_attempts = {}

# Define maximum upload limit for non-signed-in users and maximum daily tries
MAX_UPLOAD_LIMIT = 3
MAX_TRIES_PER_DAY = 2

# Function to process image with your model
def process_image(image):
    # Convert the image to tensor, preprocess it if needed
    # Pass the image tensor through your model
    # Return the mask and prediction (0 or 1)

    # For example (pseudo code):
    mask = model(image)
    return mask

l
@app.route('/predict', methods=['POST'])
def predict():
    if 'user_id' in request.headers:
        user_id = request.headers['user_id']
        if user_id not in user_attempts:
            user_attempts[user_id] = {'uploads': 0, 'tries': MAX_TRIES_PER_DAY}

        if user_attempts[user_id]['tries'] <= 0:
            return jsonify({'message': 'You have exceeded your daily attempts limit.'}), 403

        if user_attempts[user_id]['uploads'] >= MAX_UPLOAD_LIMIT:
            return jsonify({'message': f'You have reached the maximum upload limit of {MAX_UPLOAD_LIMIT}.'}), 403

        # Process the image and get mask and prediction
        # Assuming the image is sent as 'image' in the POST request
        image = request.files['image']
        # Use the 'process_image' function with your model
        mask = process_image(image)
        prediction  = 1
        # Update user attempts
        user_attempts[user_id]['uploads'] += 1
        user_attempts[user_id]['tries'] -= 1

        return jsonify({'mask': mask, 'prediction': prediction})

    else:
        # Non-signed in user
        if 'image' not in request.files:
            return jsonify({'message': 'No image provided.'}), 400

        if len(request.files.getlist('image')) > MAX_UPLOAD_LIMIT:
            return jsonify({'message': f'You can upload a maximum of {MAX_UPLOAD_LIMIT} images.'}), 403

        # Process multiple images for non-signed-in user
        results = []
        for image in request.files.getlist('image'):
            mask, prediction = process_image(image)
            results.append({'mask': mask, 'prediction': prediction})

        return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app
