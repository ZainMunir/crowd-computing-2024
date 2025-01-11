import os
import json
import pandas as pd

# Define paths
base_dir = os.path.dirname(__file__)  # Path to the current script directory
resources_dir = os.path.join(base_dir, "resources")  # Path to the resources folder
json_file_path = os.path.join(resources_dir, "responses.json")  # Path to the JSON file
output_file_path = os.path.join(resources_dir, "parsed_responses.csv")  # Output CSV path

# Load the JSON file
with open(json_file_path, 'r') as file:
    data = json.load(file)

# Parse the data into a list of dictionaries
parsed_data = []

for record in data:
    prolific_info = record["prolificInfo"]
    answers = record["answers"]
    start_time = record.get("startTime", {}).get("seconds", None)
    end_time = record.get("endTime", {}).get("seconds", None)
    response_time = None
    
    # Calculate response time if start and end times are present
    if start_time and end_time:
        response_time = end_time - start_time

    # Flatten answers
    for answer in answers:
        parsed_data.append({
            "prolific_pid": prolific_info["prolificPid"],
            "study_id": prolific_info["studyId"],
            "session_id": prolific_info["sessionId"],
            "question_id": answer["id"],
            "question_text": answer["questionText"],
            "answer_value": answer["value"],
            "start_time": start_time,
            "end_time": end_time,
            "response_time": response_time
        })

# Convert the parsed data to a DataFrame
df = pd.DataFrame(parsed_data)

# Save to a CSV file for further analysis
df.to_csv(output_file_path, index=False)

# Display the DataFrame
print(df.head())
