import pandas as pd
import matplotlib.pyplot as plt
import os
import seaborn as sns

# Load the dataset
base_dir = os.path.dirname(__file__)
figures_dir = os.path.join(base_dir, "figures")
resources_dir = os.path.join(base_dir, "resources")
file_path = os.path.join(resources_dir, "parsed_responses.csv")
df = pd.read_csv(file_path)

columns_of_interest = [
    '27-Font Size', 
    '28-Content Width', 
    '29-Font Line Height', 
    '30-Letter spacing',
    '31-Font Family', 
    '32-Theme',
]


# Calculate the correlation matrix
correlation_matrix = df[columns_of_interest].corr()

# Visualize the correlation matrix
plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix, annot=True, fmt=".2f", cmap="coolwarm", cbar=True)
plt.title("Correlation Matrix of Selected Columns")
plt.savefig(os.path.join(figures_dir, f"Correlation.png"), dpi=300, bbox_inches="tight")  # Save the plot

# Define mappings for Font Family and Theme
font_family_mapping = {
    0: "Arial", 
    1: "Georgia", 
    2: "Helvetica", 
    3: "Monospace", 
    4: "OpenDyslexic"
}

theme_mapping = {
    0: "Light", 
    1: "Dark", 
    2: "Light Grayscale", 
    3: "Dark Grayscale", 
    4: "Light Sepia", 
    5: "Dark Sepia"
}

# Map the values in the columns to their respective categories
df['31-Font Family'] = df['31-Font Family'].map(font_family_mapping)
df['32-Theme'] = df['32-Theme'].map(theme_mapping)

# Calculate the frequency distribution for each column
value_counts = {col: df[col].value_counts() for col in columns_of_interest}

# Plotting the value distributions
for col, counts in value_counts.items():
    plt.figure(figsize=(10, 6))
    counts.sort_index().plot(kind='bar')  # Sort index for logical order
    plt.title(f"Value Distribution for {col}")
    plt.xlabel("Value")
    plt.ylabel("Frequency")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig(os.path.join(figures_dir, f"{col}.png"), dpi=300, bbox_inches="tight")  # Save the plot
    

