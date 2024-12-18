import { EnabledElements } from './CloneContext';
import { defaultEnabledElements } from './defaults';

export const completionCode = 'CJAHK33A';
export const prolificRedirectLink = `https://app.prolific.com/submissions/complete?cc=${completionCode}`;

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
};

const styling_questions = [
  {
    id: 15,
    questionText:
      'Please experiment with the customisation options and choose your preferred options.',
    type: QuestionType.ENABLED_ELEMENTS,
    defaultValue: defaultEnabledElements,
  },
  {
    id: 16,
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
    id: 17,
    questionText: 'Content Width',
    type: QuestionType.SLIDER,
    min: 0.5,
    max: 3,
    step: 0.1,
    defaultValue: 1,
    options: ['content_width'],
  },
  {
    id: 18,
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
];

export const questionGroups: Array<QuestionGroup> = [
  {
    id: 0,
    title: 'Background questions',
    displayHidden: true,
    textHidden: true,
    questions: [
      {
        id: 1,
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
        id: 2,
        questionText: 'Have you used Wattpad before?',
        type: QuestionType.CHECKBOX,
        options: ['Yes', 'No'],
      },
      {
        id: 3,
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
        id: 4,
        questionText: 'I feel comfortable using technology.',
        type: QuestionType.LIKERT,
      },
    ],
  },
  {
    id: 1,
    title: 'Feedback of the original design',
    displayHidden: false,
    textHidden: true,
    questions: [
      {
        id: 5,
        questionText: 'I like the layout of the webpage.',
        type: QuestionType.LIKERT,
      },
      {
        id: 6,
        questionText: 'The color scheme of the webpage is visually appealing.',
        type: QuestionType.LIKERT,
      },
      {
        id: 7,
        questionText: 'Navigating to the next chapter or section is easy.',
        type: QuestionType.LIKERT,
      },
      {
        id: 8,
        questionText:
          'The menu or navigation bar is intuitive for accessing content.',
        type: QuestionType.LIKERT,
      },
    ],
  },
  {
    id: 2,
    title: 'Feedback of the original design (continued)',
    displayHidden: false,
    textHidden: true,
    questions: [
      {
        id: 9,
        questionText:
          'Searching for specific content within the e-book is easy.',
        type: QuestionType.LIKERT,
      },
      {
        id: 10,
        questionText: 'The webpage needs significant improvement.',
        type: QuestionType.LIKERT,
      },
      {
        id: 11,
        questionText:
          'The webpage is accessible for users with visual or physical impairments.',
        type: QuestionType.LIKERT,
      },
      {
        id: 12,
        questionText:
          'The amount of text displayed on a single page is appropriate.',
        type: QuestionType.LIKERT,
      },
    ],
  },
  {
    id: 3,
    title: 'Reading comprehension',
    displayHidden: false,
    textHidden: true,
    questions: [
      {
        id: 13,
        questionText:
          "When you click start, a stopwatch will begin. Please take your time to read the chapter text at your normal pace. Then click stop when you're finished. The questions will then be revealed. You will not be able to try again.",
        type: QuestionType.TIMER,
      },
      {
        id: 14,
        questionText: 'Compreshension question 1',
        type: QuestionType.COMPREHENSION,
        dependentOn: 13,
        options: ['True', 'False'],
      },
    ],
  },
  {
    id: 4,
    title: 'Customisation',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[0]],
  },
  {
    id: 5,
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[1]],
  },
  {
    id: 6,
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[2]],
  },
  {
    id: 7,
    title:
      'Focusing primarily on the main content, style the following elements to your preference',
    displayHidden: false,
    textHidden: false,
    questions: [styling_questions[3]],
  },
  {
    id: 8,
    title: 'Adjust your choices when they are all considered together',
    displayHidden: false,
    textHidden: false,
    questions: styling_questions,
  },
  {
    id: 9,
    title: 'Submission',
    displayHidden: false,
    textHidden: false,
    questions: [
      {
        id: 19,
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
