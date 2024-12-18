import { EnabledElements } from './CloneContext';
import { defaultEnabledElements, placeholderData } from './defaults';

export const completionCode = 'CJAHK33A';
export const prolificRedirectLink = `https://app.prolific.com/submissions/complete?cc=${completionCode}`;

const storyIndex = Math.random() < 0.5 ? 0 : 1;
export const stories = [placeholderData, placeholderData, placeholderData];

export type Question = {
  id: number;
  questionText: string;
  type: QuestionType;
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

export type Answer = {
  id: number;
  value?: string | number | EnabledElements;
  questionText: string;
};

export type QuestionGroup = {
  id: number;
  title: string;
  displayHidden: boolean;
  textHidden: boolean;
  questions: Question[];
  storyIndex: number;
};

const styling_questions = [
  {
    id: 16,
    questionText:
      'Please experiment with the customisation options and choose your preferred options.',
    type: QuestionType.ENABLED_ELEMENTS,
    defaultValue: defaultEnabledElements,
  },
  {
    id: 17,
    questionText: 'Font Size',
    type: QuestionType.SLIDER,
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
    id: 18,
    questionText: 'Content Width',
    type: QuestionType.SLIDER,
    min: 0.5,
    max: 3,
    step: 0.1,
    defaultValue: 1,
    options: ['content_width'],
  },
  {
    id: 19,
    questionText: 'Font Line Height',
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
    id: 20,
    questionText: 'Font Family',
    type: QuestionType.FONTS,
    defaultValue: 0,
    options: ['Arial', 'Source Sans Pro'],
  },
];

export const questionGroups: Array<QuestionGroup> = [
  {
    id: 0,
    title: 'Background questions',
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
        questionText:
          'How often do you read long form text (novels/textbooks) online?',

        type: QuestionType.CHECKBOX,
        options: [
          'Never',
          'Rarely',
          'Once a week',
          'Several times a week',
          'Daily',
        ],
      },
      {
        id: 3,
        questionText: 'Have you used Wattpad before?',
        type: QuestionType.CHECKBOX,
        options: ['Yes', 'No'],
      },
      {
        id: 4,
        questionText: 'What is your level of English?',
        type: QuestionType.CHECKBOX,
        options: [
          'Beginner',
          'Elementary',
          'Intermediate',
          'Advanced',
          'Native',
        ],
      },
      {
        id: 5,
        questionText: 'I feel comfortable using technology.',
        type: QuestionType.LIKERT,
      },
    ],
  },
  {
    id: 1,
    title: 'Reading comprehension',
    displayHidden: false,
    textHidden: true,
    storyIndex: storyIndex,
    questions: [
      {
        id: 6,
        questionText:
          "When you click start, a stopwatch will begin. Please take your time to read the chapter text at your normal pace. Then click stop when you're finished. The questions will then be revealed. You will not be able to try again.",
        type: QuestionType.TIMER,
      },
      {
        id: 7,
        questionText: 'Compreshension question 1',
        type: QuestionType.COMPREHENSION,
        dependentOn: 6,
        options: ['True', 'False'],
      },
    ],
  },
  {
    id: 2,
    title: 'Feedback of the original design',
    displayHidden: false,
    textHidden: false,
    storyIndex: 2,
    questions: [
      {
        id: 8,
        questionText: 'I like the layout of the webpage.',
        type: QuestionType.LIKERT,
      },
      {
        id: 9,
        questionText: 'The color scheme of the webpage is visually appealing.',
        type: QuestionType.LIKERT,
      },
      {
        id: 10,
        questionText: 'Navigating to the next chapter or section is easy.',
        type: QuestionType.LIKERT,
      },
      {
        id: 11,
        questionText:
          'The menu or navigation bar is intuitive for accessing content.',
        type: QuestionType.LIKERT,
      },
    ],
  },
  {
    id: 3,
    title: 'Feedback of the original design (continued)',
    displayHidden: false,
    textHidden: false,
    storyIndex: 2,
    questions: [
      {
        id: 12,
        questionText:
          'Searching for specific content within the e-book is easy.',
        type: QuestionType.LIKERT,
      },
      {
        id: 13,
        questionText: 'The webpage needs significant improvement.',
        type: QuestionType.LIKERT,
      },
      {
        id: 14,
        questionText:
          'The webpage is accessible for users with visual or physical impairments.',
        type: QuestionType.LIKERT,
      },
      {
        id: 15,
        questionText:
          'The amount of text displayed on a single page is appropriate.',
        type: QuestionType.LIKERT,
      },
    ],
  },
  {
    id: 4,
    title: 'Customisation',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[0]],
    storyIndex: 2,
  },
  {
    id: 5,
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[1]],
    storyIndex: 2,
  },
  {
    id: 6,
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[2]],
    storyIndex: 2,
  },
  {
    id: 7,
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[3]],
    storyIndex: 2,
  },
  {
    id: 8,
    title:
      'Focuing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[4]],
    storyIndex: 2,
  },
  {
    id: 9,
    title: 'Adjust your choices when they are all considered together',
    displayHidden: false,
    textHidden: false,
    questions: styling_questions,
    storyIndex: 2,
  },
  {
    id: 10,
    title: 'Reading comprehension 2',
    displayHidden: false,
    textHidden: true,
    storyIndex: Math.abs(storyIndex - 1),
    questions: [
      {
        id: 21,
        questionText:
          "When you click start, a stopwatch will begin. Please take your time to read the chapter text at your normal pace. Then click stop when you're finished. The questions will then be revealed. You will not be able to try again.",
        type: QuestionType.TIMER,
      },
      {
        id: 22,
        questionText: 'Compreshension question 1',
        type: QuestionType.COMPREHENSION,
        dependentOn: 21,
        options: ['True', 'False'],
      },
    ],
  },
  {
    id: 11,
    title: 'Submission',
    displayHidden: false,
    textHidden: false,
    storyIndex: 2,
    questions: [
      {
        id: 23,
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
