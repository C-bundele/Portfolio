# FastAPI Code
```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np

# Load the trained model, imputer, and scaler
def load_artifacts():
    try:
        model = joblib.load('logistic_regression_model.pkl')
        imputer = joblib.load('imputer.pkl')
        scaler = joblib.load('scaler.pkl')
        return model, imputer, scaler
    except FileNotFoundError as e:
        raise Exception(f"Required file not found: {e}")

# Load artifacts at startup
app = FastAPI()
try:
    model_ready, imputer, scaler = load_artifacts()
except Exception as e:
    model_ready, imputer, scaler = None, None, None
    print(f"Error loading artifacts: {e}")

# Define the input schema
class DiabetesInput(BaseModel):
    pregnancies: int
    glucose: float
    blood_pressure: float
    skin_thickness: float
    insulin: float
    bmi: float
    dpf: float  # Diabetes Pedigree Function
    age: int

@app.get("/")
def root():
    return {"message": "Welcome to the Diabetes Prediction API!"}

@app.post("/predict")
def predict(data: DiabetesInput):
    if not model_ready or not imputer or not scaler:
        raise HTTPException(
            status_code=500,
            detail="Model, imputer, or scaler not loaded. Please ensure all files are available."
        )
    
    try:
        # Convert input data to numpy array
        user_input = np.array([
            data.pregnancies,
            data.glucose,
            data.blood_pressure,
            data.skin_thickness,
            data.insulin,
            data.bmi,
            data.dpf,
            data.age
        ]).reshape(1, -1)
        
        # Preprocess: impute missing values, scale, and predict
        user_input_imputed = imputer.transform(user_input)
        user_input_scaled = scaler.transform(user_input_imputed)
        prediction = model_ready.predict(user_input_scaled)
        
        result = "Diabetic" if prediction[0] == 1 else "Non-Diabetic"

        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during prediction: {e}")
