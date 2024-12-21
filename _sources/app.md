# Streamlit Application Code
```python
import streamlit as st
import numpy as np
import requests

# Initialize the Streamlit app
st.title("Diabetes Prediction App")

# Input fields for user data
st.sidebar.header("Enter Patient Data")
pregnancies = st.sidebar.number_input("Pregnancies", min_value=0, max_value=20, value=0)
glucose = st.sidebar.number_input("Glucose Level", min_value=0.0, max_value=300.0, value=0.0)
blood_pressure = st.sidebar.number_input("Blood Pressure", min_value=0.0, max_value=200.0, value=80.0)
skin_thickness = st.sidebar.number_input("Skin Thickness", min_value=0.0, max_value=100.0, value=21.0)
insulin = st.sidebar.number_input("Insulin Level", min_value=0.0, max_value=900.0, value=90.0)
bmi = st.sidebar.number_input("BMI", min_value=0.0, max_value=100.0, value=0.0)
dpf = st.sidebar.number_input("Diabetes Pedigree Function (DPF)", min_value=0.0, max_value=3.0, value=0.2)
age = st.sidebar.number_input("Age", min_value=1, max_value=120, value=2)

# Create user input as a dictionary
user_input = {
    "pregnancies": pregnancies,
    "glucose": glucose,
    "blood_pressure": blood_pressure,
    "skin_thickness": skin_thickness,
    "insulin": insulin,
    "bmi": bmi,
    "dpf": dpf,
    "age": age
}

# Prediction button
if st.button("Predict"):
    try:
        # Define the API URL
        url = "http://18.220.58.196:8000/predict"

        # Send the POST request with the dictionary as JSON
        response = requests.post(url, json=user_input)  # Send the input as JSON

        # Check the response status and output
        if response.status_code == 200:
            prediction = response.json()["prediction"]
            print(prediction)
            st.success(prediction)
        else:
            st.error(f"Error: {response.status_code}, {response.text}")

    except Exception as e:
        st.error(f"An error occurred during prediction: {e}")
