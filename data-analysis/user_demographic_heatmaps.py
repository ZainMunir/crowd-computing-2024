import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the data from a CSV file
data_path = "resources/parsed_responses.csv"  # Replace with your actual file path
data = pd.read_csv(data_path)

# Select columns of interest (demographics and value changes)
columns_of_interest = [
    "2- What is your level of English proficiency?",
    "3-Which most accurately describes you?",
    "4-What is the highest level of education you have completed?",
    "5-How often do you read long form (novels/textbooks) text online?",
    "27-Font Size",
    "28-Content Width",
    "29-Font Line Height",
    "30-Letter spacing",
    "31-Font Family",
    "32-Theme"
]



# Filter the dataset for the selected columns
data_filtered = data[columns_of_interest]

# Convert categorical columns to numeric if necessary
data_filtered = data_filtered.apply(lambda col: pd.factorize(col)[0] if col.dtypes == 'object' else col)

# Calculate the correlation matrix
correlation_matrix = data_filtered.corr()

# Create a heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(
    correlation_matrix,
    annot=True,
    fmt=".2f",
    cmap="coolwarm",
    cbar=True,
    xticklabels=columns_of_interest,
    yticklabels=columns_of_interest
)

# Add titles and labels
plt.title("Correlation Heatmap: User Demographics vs. Preferred Changes", fontsize=16)
plt.xticks(rotation=45, ha="right")
plt.yticks(rotation=0)
plt.tight_layout()

# Show the heatmap
plt.show()
