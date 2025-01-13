import pandas as pd
import os

# Load the dataset
base_dir = os.path.dirname(__file__)
resources_dir = os.path.join(base_dir, "resources")
file_path = os.path.join(resources_dir, "parsed_responses.csv")
df = pd.read_csv(file_path)

# Clean column names: strip leading/trailing spaces
df.columns = df.columns.str.strip()

# Identify columns for FirstTextTime and SecondTextTime based on their prefixes
first_time_col = [col for col in df.columns if col.startswith("8-")][0]  # First text time
second_time_col = [col for col in df.columns if col.startswith("33-")][0]  # Second text time

# Define relevant columns for text names
first_text_col = "firstStoryName"  # Column indicating the first text
second_text_col = "secondStoryName"  # Column indicating the second text

# Clean text columns
df[first_text_col] = df[first_text_col].str.strip()
df[second_text_col] = df[second_text_col].str.strip()

# Ensure the required columns exist
required_columns = [first_text_col, second_text_col, first_time_col, second_time_col]
missing_columns = [col for col in required_columns if col not in df.columns]
if missing_columns:
    raise KeyError(f"Missing columns in dataset: {missing_columns}")

# Calculate average reading times for each text
avg_time_kings_as_first = df[df[first_text_col] == "KingsMusketeers"][first_time_col].mean()
avg_time_kings_as_second = df[df[second_text_col] == "KingsMusketeers"][second_time_col].mean()

avg_time_treasure_as_first = df[df[first_text_col] == "TheLostTreasure"][first_time_col].mean()
avg_time_treasure_as_second = df[df[second_text_col] == "TheLostTreasure"][second_time_col].mean()

# Display results
print(f"Average reading time for KingsMusketeers as the first text: {avg_time_kings_as_first/1000:.2f} seconds")
print(f"Average reading time for KingsMusketeers as the second text: {avg_time_kings_as_second/1000:.2f} seconds")
print(f"Average reading time for TheLostTreasure as the first text: {avg_time_treasure_as_first/1000:.2f} seconds")
print(f"Average reading time for TheLostTreasure as the second text: {avg_time_treasure_as_second/1000:.2f} seconds")