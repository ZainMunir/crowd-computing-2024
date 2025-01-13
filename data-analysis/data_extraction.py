import os
import json
import pandas as pd

# Define paths
base_dir = os.path.dirname(__file__)
resources_dir = os.path.join(base_dir, "resources")
json_file_path = os.path.join(resources_dir, "responses.json")
output_file_path = os.path.join(resources_dir, "parsed_responses.csv")

# Load the JSON file
with open(json_file_path, 'r') as file:
    json_data = json.load(file)

# Normalize JSON data
normalized_data = []
for record in json_data:
    flat_record = {key: record[key] for key in record if key not in ("actionLogs", "answers")}
    for answer in record["answers"]:
        if answer["id"] == 26:  # Special handling for question ID 26
            for key, value in answer["value"].items():
                flat_record["26-"+"Visible("+key+")"] = value  # Add each key-value pair as a separate column
        else:
            flat_record[str(answer["id"])+"-"+answer["questionText"]] = answer["value"]  # Add other answers normally
    normalized_data.append(flat_record)

# Convert the normalized JSON data into a DataFrame
data_df = pd.DataFrame(normalized_data)

# Save the DataFrame to a CSV file
data_df.to_csv(output_file_path, index=False)

# Display the DataFrame
print(f"DataFrame saved to: {output_file_path}")
