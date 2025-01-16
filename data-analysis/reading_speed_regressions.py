import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score


# Load the dataset (replace with your actual file path)
data_path = "resources/parsed_responses.csv"  # Update with the path to your dataset
data = pd.read_csv(data_path)

# Variables of interest
reading_speed_columns = ["first_story_reading_speed", "second_story_reading_speed"]
value_columns = [
    "13-The font size and style are easy to read.",
    "14-The amount of text displayed on a single page is appropriate and readable.",
    "24-I am satisfied with the overall design of the webpage."
]

changeable_values = [
    "27-Font Size",
    "28-Content Width",
    "29-Font Line Height",
    "30-Letter spacing",
    "31-Font Family",
    "32-Theme"
]

demographic_values = [
    "2- What is your level of English proficiency?",
    "3-Which most accurately describes you?",
    "4-What is the highest level of education you have completed?",
    "5-How often do you read long form (novels/textbooks) text online?"
]

def remove_outliers(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    return df[(df[column] >= lower_bound) & (df[column] <= upper_bound)]

# Prepare data for regression
for speed_col in reading_speed_columns:
    for value_col in changeable_values:
        # Drop rows with missing values
        regression_data = data[[speed_col, value_col]].dropna()

        # Remove outliers in the reading speed column
        regression_data = remove_outliers(regression_data, speed_col)


        # Independent and dependent variables
        X = regression_data[[speed_col]]  # Independent variable: Reading speed
        y = regression_data[value_col]  # Dependent variable: Value change/satisfaction score

        # Convert X to a NumPy array
        X_array = X.values

        # Fit a linear regression model
        model = LinearRegression()
        model.fit(X, y)

        # Make predictions
        y_pred = model.predict(X)

        # Calculate metrics
        r2 = r2_score(y, y_pred)
        mse = mean_squared_error(y, y_pred)

        # Plot regression results
        plt.figure(figsize=(8, 6))
        sns.scatterplot(x=speed_col, y=value_col, data=regression_data, label="Data")
        #plt.plot(X, y, color="red", label=f"Fit: R²={r2:.2f}, MSE={mse:.2f}")
        plt.plot(X_array, y_pred, color="red", label=f"Fit: R²={r2:.2f}, MSE={mse:.2f}")
        plt.xlabel(f"Reading Speed ({speed_col})")
        plt.ylabel(value_col)
        plt.title(f"Linear Regression: {speed_col} vs {value_col}")
        plt.legend()
        plt.tight_layout()
        plt.show()

        # Print regression details
        print(f"Regression: {speed_col} vs {value_col}")
        print(f"  Coefficient: {model.coef_[0]:.4f}")
        print(f"  Intercept: {model.intercept_:.4f}")
        print(f"  R²: {r2:.4f}")
        print(f"  MSE: {mse:.4f}\n")
