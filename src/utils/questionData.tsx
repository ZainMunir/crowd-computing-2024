import { EnabledElements } from './CloneContext';
import { defaultEnabledElements } from './defaults';
import { placeholderData } from './storyData';
import { timeAgo } from './util';

export const completionCode = 'CJAHK33A';
export const prolificRedirectLink = `https://app.prolific.com/submissions/complete?cc=${completionCode}`;

const storyIndex = Math.random() < 0.5 ? 0 : 1;
export const stories = [placeholderData, placeholderData, placeholderData];

export type Question = {
  id: number;
  questionText: string;
  type: QuestionType;
  styleType?: QuestionStyleType;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | string | EnabledElements;
  dependentOn?: number;
};

export enum QuestionType {
  CHECKBOX = 'CHECKBOX',
  SLIDER = 'SLIDER',
  LIKERT = 'LIKERT',
  TIMER = 'TIMER',
  COMPREHENSION = 'COMPREHENSION',
  ENABLED_ELEMENTS = 'ENABLED_ELEMENTS',
  SUBMISSION = 'SUBMISSION',
  NUMBER = 'NUMBER',
  FONTS = 'FONTS',
}

export enum QuestionStyleType {
  ENABLED_ELEMENTS = 'ENABLED_ELEMENTS',
  FONT_SIZE = 'FONT_SIZE',
  CONTENT_WIDTH = 'CONTENT_WIDTH',
  LINE_HEIGHT = 'LINE_HEIGHT',
  FONT_FAMILY = 'FONT_FAMILY',
}

export type Answer = {
  id: number;
  value?: string | number | EnabledElements;
  styleType?: QuestionStyleType;
  options?: string[];
  questionText: string;
};

export type QuestionGroup = {
  id: number;
  title: string;
  displayHidden: boolean;
  textHidden: boolean;
  questions: Question[];
  storyIndex: number;
  timerStyleType?: 'default' | 'custom';
};

const feedbackQuestions = [
  {
    title: 'Layout and Navigation',
    questions: [
      'The layout of the webpage is easy to understand and use.',
      'Navigating to the next chapter or section is simple and straightforward.',
      'The menu or navigation bar is intuitive and easy to use for accessing content.',
      'Searching for specific content within the e-book is easy.',
    ],
  },
  {
    title: 'Visual Appeal and Readability',
    questions: [
      'The color scheme of the webpage is visually appealing.',
      'The font size and style are easy to read.',
      'The amount of text displayed on a single page is appropriate and readable.',
      "For this question, please select 'Neutral' specifically.",
    ],
  },
  {
    title: 'Functionality and Accessibility',
    questions: [
      'The webpage loads quickly and performs smoothly.',
      'The webpage is accessible for users with visual or physical impairments.',
      'The design feels cluttered or overwhelming.',
      'The webpage needs significant improvement to meet user expectations.',
    ],
  },
  {
    title: 'Engagement and Customisation',
    questions: [
      'The interactive features (e.g., comments, reactions) improve my reading experience.',
      'I enjoy spending time browsing or reading on this webpage.',
      'The design keeps me engaged while reading.',
      'The images, icons, or visuals used enhance the reading experience.',
    ],
  },
  {
    title: 'Overall Satisfaction',
    questions: [
      'I am satisfied with the overall design of the webpage.',
      'I would recommend this webpage to others who enjoy reading online.',
    ],
  },
];

var groupID = 2;
var questionID = 8;

const returnAndIncrementQuestionID = () => {
  questionID += 1;
  return questionID;
};

const returnAndIncrementGroupID = () => {
  groupID += 1;
  return groupID;
};

const feedbacKGroups = feedbackQuestions.map((group, index) => {
  return {
    id: returnAndIncrementGroupID(),
    title: `Feedback of the original design - ${group.title}`,
    displayHidden: false,
    textHidden: false,
    storyIndex: 2,
    questions: group.questions.map((question, index) => {
      return {
        id: returnAndIncrementQuestionID(),
        questionText: question,
        type: QuestionType.LIKERT,
      };
    }),
  };
});

const styling_questions = [
  {
    id: returnAndIncrementQuestionID(),
    questionText:
      'Please experiment with the customisation options and choose your preferred options.',
    type: QuestionType.ENABLED_ELEMENTS,
    styleType: QuestionStyleType.ENABLED_ELEMENTS,
    defaultValue: defaultEnabledElements,
  },
  {
    id: returnAndIncrementQuestionID(),
    questionText: 'Font Size',
    type: QuestionType.SLIDER,
    styleType: QuestionStyleType.FONT_SIZE,
    min: 0.5,
    max: 2,
    step: 0.1,
    defaultValue: 1,
    options: [
      'text_small',
      'text_medium',
      'text_large',
      'text_xlarge',
      'text_2xlarge',
    ],
  },
  {
    id: returnAndIncrementQuestionID(),
    questionText: 'Content Width',
    styleType: QuestionStyleType.CONTENT_WIDTH,
    type: QuestionType.SLIDER,
    min: 0.5,
    max: 3,
    step: 0.1,
    defaultValue: 1,
    options: ['content_width'],
  },
  {
    id: returnAndIncrementQuestionID(),
    questionText: 'Font Line Height',
    styleType: QuestionStyleType.LINE_HEIGHT,
    type: QuestionType.SLIDER,
    min: 0.5,
    max: 2,
    step: 0.1,
    defaultValue: 1,
    options: [
      'description_line_height',
      'paragraph_line_height',
      'comment_line_height',
    ],
  },
  {
    id: returnAndIncrementQuestionID(),
    questionText: 'Font Family',
    styleType: QuestionStyleType.FONT_FAMILY,
    type: QuestionType.FONTS,
    defaultValue: 0,
    options: ['Arial', 'Source Sans Pro'],
  },
];

export const questionGroups: Array<QuestionGroup> = [
  {
    id: 0,
    title: 'Background - Demographics',
    displayHidden: true,
    textHidden: false,
    storyIndex: 2,
    questions: [
      {
        id: 1,
        questionText: 'What is your age? (in years)',
        type: QuestionType.NUMBER,
        defaultValue: 0,
      },
      {
        id: 2,
        questionText: ' What is your level of English proficiency?',

        type: QuestionType.CHECKBOX,
        options: [
          'Beginner',
          'Elementary',
          'Intermediate',
          'Advanced',
          'Native/Fluent',
        ],
      },
      {
        id: 3,
        questionText: 'Which most accurately describes you?',
        type: QuestionType.CHECKBOX,
        options: ['Woman', 'Man', 'Non-binary', 'I prefer not to say'],
      },
      {
        id: 4,
        questionText:
          'What is the highest level of education you have completed?',
        type: QuestionType.CHECKBOX,
        options: [
          'Did not complete high school',
          'High school diploma or equivalent',
          "Bachelor's degree",
          "Master's degree",
          'Doctorate or higher',
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'Background - Technology',
    displayHidden: true,
    textHidden: false,
    storyIndex: 2,
    questions: [
      {
        id: 5,
        questionText:
          'How often do you read long form (novels/textbooks) text online?',
        type: QuestionType.CHECKBOX,
        options: ['Never', 'Rarely', 'Monthly', 'Weekly', 'Daily'],
      },
      {
        id: 6,
        questionText: 'I feel comfortable using technology.',
        type: QuestionType.LIKERT,
      },
    ],
  },
  {
    id: 2,
    title: 'Reading comprehension',
    displayHidden: false,
    textHidden: true,
    storyIndex: storyIndex,
    timerStyleType: 'default',
    questions: [
      {
        id: 7,
        questionText:
          "When you click start, a stopwatch will begin. Please take your time to read the chapter text at your normal pace. Then click stop when you're finished. The questions will then be revealed. You will not be able to try again.",
        type: QuestionType.TIMER,
      },
      {
        id: 8,
        questionText: 'Compreshension question 1',
        type: QuestionType.COMPREHENSION,
        dependentOn: 7,
        options: ['True', 'False'],
      },
    ],
  },
  ...feedbacKGroups,
  {
    id: returnAndIncrementGroupID(),
    title: 'Customisation',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[0]],
    storyIndex: 2,
  },
  {
    id: returnAndIncrementGroupID(),
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[1]],
    storyIndex: 2,
  },
  {
    id: returnAndIncrementGroupID(),
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[2]],
    storyIndex: 2,
  },
  {
    id: returnAndIncrementGroupID(),
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[3]],
    storyIndex: 2,
  },
  {
    id: returnAndIncrementGroupID(),
    title:
      'Focuing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[4]],
    storyIndex: 2,
  },
  {
    id: returnAndIncrementGroupID(),
    title: 'Adjust your choices when they are all considered together',
    displayHidden: false,
    textHidden: false,
    questions: styling_questions,
    storyIndex: 2,
  },
  {
    id: returnAndIncrementGroupID(),
    title: 'Reading comprehension 2',
    displayHidden: false,
    textHidden: true,
    storyIndex: Math.abs(storyIndex - 1),
    timerStyleType: 'custom',
    questions: [
      {
        id: returnAndIncrementQuestionID(),
        questionText:
          "When you click start, a stopwatch will begin. Please take your time to read the chapter text at your normal pace. Then click stop when you're finished. The questions will then be revealed. You will not be able to try again.",
        type: QuestionType.TIMER,
      },
      {
        id: returnAndIncrementQuestionID(),
        questionText: 'Compreshension question 1',
        type: QuestionType.COMPREHENSION,
        dependentOn: questionID - 1,
        options: ['True', 'False'],
      },
    ],
  },
  {
    id: returnAndIncrementGroupID(),
    title: 'Submission',
    displayHidden: false,
    textHidden: false,
    storyIndex: 2,
    questions: [
      {
        id: returnAndIncrementQuestionID(),
        questionText:
          'Please verify the below details before submitting. If something has gone wrong, let us know in the textbox below.',
        type: QuestionType.SUBMISSION,
      },
    ],
  },
];

export type ProlificInfo = {
  prolificPid: string | null;
  studyId: string | null;
  sessionId: string | null;
};
