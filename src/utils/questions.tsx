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
  questions: Question[];
};

export const questionGroups: Array<QuestionGroup> = [
  {
    id: 0,
    title: 'General Questions',
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
];
