import data_extraction
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

df = data_extraction.data_df

# ----------------------------------Figures For Likert Scale Questions---------------------------

original_design_columns = ["10-The layout of the webpage is easy to understand and use.",
                           "11-Navigating to the next chapter or section is simple and straightforward.",
                           "12-The color scheme of the webpage is visually appealing.",
                           "13-The font size and style are easy to read.",
                           "14-The amount of text displayed on a single page is appropriate and readable.",
                           "16-The webpage loads quickly and performs smoothly.",
                           "17-The webpage is accessible for users with visual or physical impairments.",
                           "18-The design feels cluttered or overwhelming.",
                           "19-The webpage needs significant improvement to meet user expectations.",
                           "20-The interactive features (e.g., comments, reactions) improve my reading experience.",
                           "21-I enjoy spending time browsing or reading on this webpage.",
                           "22-The design keeps me engaged while reading.",
                           "23-The images, icons, or visuals used enhance the reading experience.",
                           ]

# Mapping of categories
category_mapping = {
    1: "Strongly Disagree",
    2: "Disagree",
    3: "Neutral",
    4: "Agree",
    5: "Strongly Agree"
}

def plot_pie_chart(df, column_name, category_mapping=None):
    """
    Plot a pie chart for the proportions of unique categories in a specific column of a DataFrame.

    Parameters:
        df (pd.DataFrame): The DataFrame containing the data.
        column_name (str): The name of the column to analyze.
        category_mapping (dict, optional): A dictionary mapping categories to descriptions. Defaults to None.
    """
    if column_name not in df.columns:
        print(f"Column '{column_name}' not found in the DataFrame.")
        return

    # Map categories if a mapping is provided
    data = df[column_name].map(category_mapping) if category_mapping else df[column_name]

    if data.isnull().any():
        print("Warning: Some categories in the data are not mapped.")

    # Calculate proportions
    category_ratios = data.value_counts(normalize=True)

    # Plot the pie chart
    plt.figure(figsize=(8, 8))
    category_ratios.plot(
        kind='pie',
        autopct='%1.1f%%',
        startangle=90,
        textprops={'fontsize': 10},
        labels=["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
        colors=["#427EBA", "#7598D0", "#949599", "#F59273", "#F37151"],
        pctdistance = 0.8,
        wedgeprops={'edgecolor': 'white'}
    )
    plt.title(f"Proportion of Answers of Question: '{column_name[3:]}'", fontsize=7)
    plt.ylabel("")
    plt.tight_layout()
    plt.savefig("figures/" + column_name + ".png", format='png')
    plt.show()

for column in original_design_columns:
    plot_pie_chart(df, column, category_mapping)

# ----------------------------------Figures For Header, and Body---------------------------

header_nav_columns = ["26-Visible(headerNavLogo)",
                      "26-Visible(headerNavBrowse)",
                      "26-Visible(headerNavCommunity)",
                      "26-Visible(headerNavSearch)",
                      "26-Visible(headerNavWrite)",
                      "26-Visible(headerNavPremium)",
                      "26-Visible(headerNavLogin)",
                      "26-Visible(headerNavSignup)"]

header_nav_x_labels = ["Logo", "Browse", "Community", "Search", "Write", "Premium", "Login", "Signup"]

header_nav_title = "Header Navigation"

header_story_columns = ["26-Visible(headerStoryChapterPicker)",
                        "26-Visible(headerStoryAdd)",
                        "26-Visible(headerStoryVote)"]

header_story_x_labels = ["Chapter", "Story", "Vote"]

header_story_title = "Header Story"

header_progress_columns = ["26-Visible(headerProgressBar)"]

header_progress_x_labels = ["Progress"]

header_progress_title = "Header Progress"

body_columns = ["26-Visible(bodyStoryDetails)",
                "26-Visible(bodyChapterHeader)",
                "26-Visible(bodyChapterStats)",
                "26-Visible(bodySidebar)",
                "26-Visible(bodyChapterContent)",
                "26-Visible(bodyChapterNavigation)",
                "26-Visible(bodyChapterInteractions)",
                "26-Visible(bodyInlineComments)",
                "26-Visible(bodyCommentSection)",
                "26-Visible(bodyRelatedStories)"]

body_x_labels = ["Story Details", "Chapter Header", "Chapter Stats", "Sidebar", "Chapter Content",
                 "Chapter Navigation","Chapter Interactions", "Inline Comments", "Comment Section",
                 "Related Stories"]

body_title = "Body"

footer_columns = ["26-Visible(footer)"]

footer_x_labels = ["Footer"]

footer_title = "Footer"


def plot_true_false_ratios_combined(df, columns, title, x_labels):
    """
    Plot a single bar chart showing the True/False ratios for multiple columns in a DataFrame.

    Parameters:
        df (pd.DataFrame): The DataFrame containing the data.
        columns (list): List of column names to analyze.
    """
    # Validate input columns
    valid_columns = [col for col in columns if col in df.columns]
    if not valid_columns:
        print("No valid columns found in the DataFrame.")
        return

    true_ratios = []
    false_ratios = []

    for column in valid_columns:
        # Calculate True and False ratios
        true_count = df[column].value_counts(normalize=True).get(True, 0)
        false_count = df[column].value_counts(normalize=True).get(False, 0)
        true_ratios.append(true_count)
        false_ratios.append(false_count)

    # Bar chart settings
    x = np.arange(len(valid_columns))  # X positions for groups
    bar_width = 0.4

    plt.figure(figsize=(10, 6))
    # True bars
    plt.bar(x - bar_width / 2, true_ratios, bar_width, label='Display', color='#48C0AA', edgecolor='black')
    # False bars
    plt.bar(x + bar_width / 2, false_ratios, bar_width, label='Hide', color='#EF767A', edgecolor='black')

    # Add labels and formatting
    plt.xticks(x, x_labels, fontsize=10, rotation=45)
    plt.ylabel("Ratio", fontsize=12)
    plt.title(title + " - Display/Hide Proportions of Each Feature", fontsize=14)
    plt.ylim(0, 1)
    plt.legend(fontsize=12)
    plt.tight_layout()
    plt.savefig("figures/" + title + ".png", format='png')
    plt.show()


plot_true_false_ratios_combined(df, header_nav_columns, header_nav_title, header_nav_x_labels)

plot_true_false_ratios_combined(df, header_story_columns, header_story_title, header_story_x_labels)

plot_true_false_ratios_combined(df, header_progress_columns, header_progress_title, header_progress_x_labels)

plot_true_false_ratios_combined(df, body_columns, body_title, body_x_labels)

plot_true_false_ratios_combined(df, footer_columns, footer_title, footer_x_labels)

# ----------------------------------Figures For Font Size, Content Width, Font Line Height, and Letter spacing---------------------------

feature_columns = ["27-Font Size", "28-Content Width", "29-Font Line Height", "30-Letter spacing"]

features = ["Font Size", "Content Width", "Font Line Height", "Letter spacing"]

def plot_category_proportions(df, column_name, x_label):
    # Calculate the proportion of each category (frequency / total count)
    category_counts = df[column_name].value_counts(normalize=True)

    # Create a bar plot for the proportions
    plt.figure(figsize=(8, 6))
    category_counts.plot(kind='bar', color='skyblue', edgecolor='black')

    # Set the title and labels for the plot
    plt.title(f"Proportion of User-Selected {x_label} Most Suitable for Reading", fontsize=10)
    plt.xlabel(x_label + " (px)", fontsize=8)
    plt.ylabel('Proportion', fontsize=8)
    plt.xticks(rotation=0)
    plt.savefig("figures/" + x_label + ".png", format='png')
    # Display the plot
    plt.show()

for column in feature_columns:
    plot_category_proportions(df, column, features[feature_columns.index(column)])

# ----------------------------------Figures For Font Family and Theme---------------------------

other_features_columns = ["31-Font Family", "32-Theme"]

other_features = ["Font Family", "Theme"]

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
    5: "Dark Sepia",
}

list_of_mappings = [font_family_mapping, theme_mapping]

def plot_category_proportions_with_mapping(df, column_name, x_label, x_mapping=None):
    # Calculate the proportion of each category (frequency / total count)
    category_counts = df[column_name].value_counts(normalize=True)

    # If x_mapping is provided, map the x-axis values to new values
    if x_mapping:
        category_counts.index = category_counts.index.map(x_mapping)

    # Create a bar plot for the proportions
    plt.figure(figsize=(8, 6))
    category_counts.plot(kind='bar', color='skyblue', edgecolor='black')

    # Set the title and labels for the plot
    plt.title(f"Proportion of User-Selected {x_label} Most Suitable for Reading", fontsize=10)
    plt.xlabel(x_label, fontsize=8)
    plt.ylabel('Proportion', fontsize=8)
    plt.xticks(rotation=0)

    # Save the plot to a file
    plt.savefig("figures/" + x_label + ".png", format='png')

    # Display the plot
    plt.show()

for column in other_features_columns:
    plot_category_proportions_with_mapping(df, column, other_features[other_features_columns.index(column)],
                                           list_of_mappings[other_features_columns.index(column)])

