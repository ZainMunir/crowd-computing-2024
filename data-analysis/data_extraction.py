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


# rename reading time column
first_time_col = [col for col in data_df.columns if col.startswith("8-")][0]
second_time_col = [col for col in data_df.columns if col.startswith("33-")][0]
data_df.rename(columns={first_time_col: '8-First Story Time(ms)'}, inplace=True)
data_df.rename(columns={second_time_col: '33-Second Story Time(ms)'}, inplace=True)



# Assign word counts based on the story names
word_counts = {'TheLostTreasure': 175, 'KingsMusketeers': 160}

# Map word counts to the story names
data_df['first_story_word_count'] = data_df['firstStoryName'].map(word_counts)
data_df['second_story_word_count'] = data_df['secondStoryName'].map(word_counts)

# Convert reading times from milliseconds to minutes
data_df['first_story_time_minutes'] = data_df['8-First Story Time(ms)'] / (1000 * 60)  # Convert ms to minutes
data_df['second_story_time_minutes'] = data_df['33-Second Story Time(ms)'] / (1000 * 60)  # Convert ms to minutes

# Calculate reading speed (words per minute) for each story
data_df['first_story_reading_speed'] = data_df['first_story_word_count'] / data_df['first_story_time_minutes']
data_df['second_story_reading_speed'] = data_df['second_story_word_count'] / data_df['second_story_time_minutes']



# remove row that failed the questions
failed_condition = (
    ((data_df['storyIndex'] == 0) & 
     ((data_df['9-How does Edmond react to his betrayal?'] != 0) | 
      (data_df['34-What decision do the four men make when the guards appear?'] != 2))) |
    ((data_df['storyIndex'] == 1) & 
     ((data_df['9-What decision do the four men make when the guards appear?'] != 2) | 
      (data_df['34-How does Edmond react to his betrayal?'] != 0)))
)

# Filter the data_df for failed surveys
data_df = data_df[~failed_condition]


# Save the DataFrame to a CSV file
data_df.to_csv(output_file_path, index=False)

# Display the DataFrame
print(f"DataFrame saved to: {output_file_path}")
