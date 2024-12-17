export type Question = {
  id: number;
  title: string;
  type: QuestionType;
  options?: string[];
  min?: number;
  max?: number;
  defaultValue?: number | string;
};

export enum QuestionType {
  CHECKBOX = 'CHECKBOX',
  SLIDER = 'SLIDER',
  LIKERT = 'LIKERT',
}

export type Answer = {
  id: number;
  value?: string | number;
};

export type QuestionGroup = {
  id: number;
  title: string;
  displayHidden: boolean;
  questions: Question[];
};

export const questionGroups: Array<QuestionGroup> = [
  {
    id: 0,
    title: 'General Questions',
    displayHidden: true,
    questions: [
      {
        id: 1,
        title: 'What is your experience with Wattpad?',
        type: QuestionType.CHECKBOX,
        options: [
          'I never used wattpad',
          'I have heard of it and wanted to use it',
          'I did use wattpad before',
        ],
      },
      {
        id: 2,
        title: 'Choose a font size:',
        type: QuestionType.SLIDER,
        min: 10,
        max: 20,
        defaultValue: 14,
      },
      {
        id: 3,
        title: 'Likert test',
        type: QuestionType.LIKERT,
      },
    ],
  },
  {
    id: 1,
    title: 'Feedback',
    displayHidden: false,
    questions: [
      {
        id: 4,
        title: 'What do you think of the new design?',
        type: QuestionType.CHECKBOX,
        options: ['I love it', 'I hate it', 'I am indifferent'],
      },
      {
        id: 5,
        title: 'How likely are you to recommend Wattpad to a friend?',
        type: QuestionType.LIKERT,
      },
    ],
  },
];
