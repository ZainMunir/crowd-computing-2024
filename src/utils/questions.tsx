export type Question = {
  id: number;
  group: number;
  title: string;
  type: QuestionType;
  options?: string[];
  min?: number;
  max?: number;
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
  questions: Question[];
};

export const questionGroups: Array<QuestionGroup> = [
  {
    id: 0,
    title: 'General Questions',
    questions: [
      {
        id: 1,
        group: 0,
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
        group: 0,
        title: 'Choose a font size:',
        type: QuestionType.SLIDER,
        min: 10,
        max: 20,
      },
    ],
  },
  {
    id: 1,
    title: 'General Questions',
    questions: [
      {
        id: 3,
        group: 0,
        title: 'What is your experience with Wattpad?',
        type: QuestionType.CHECKBOX,
        options: [
          'I never used wattpad',
          'I have heard of it and wanted to use it',
          'I did use wattpad before',
        ],
      },
      {
        id: 4,
        group: 0,
        title: 'Choose a font size:',
        type: QuestionType.SLIDER,
        min: 10,
        max: 20,
      },
    ],
  },
];
