import React, { useState } from 'react';
import {
  Answer,
  ProlificInfo,
  Question,
  completionCode,
  prolificRedirectLink,
  ActionLog,
  storyIndex,
} from '../utils/questionData';
import { Button } from '@mui/material';
import { addResponse, Response } from '../utils/firestore';

type Props = {
  question: Question;
  answers: Answer[];
  prolificInfo: ProlificInfo;
  startTime: Date;
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
  actionLogs: ActionLog[];
};

const QuestionSubmission = ({
  question,
  answers,
  prolificInfo,
  startTime,
  isSubmitted,
  setIsSubmitted,
  actionLogs,
}: Props) => {
  const { questionText: title } = question;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const submitData = async () => {
    setIsSubmitting(true);
    const filteredAnswers = answers.map((a) => {
      return {
        id: a.id,
        value: a.value != null ? a.value : '',
        questionText: a.questionText,
      };
    });

    const response: Response = {
      prolificInfo: prolificInfo,
      answers: filteredAnswers,
      startTime: startTime,
      endTime: new Date(),
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      actionLogs: actionLogs,
      storyIndex: storyIndex,
      firstStoryName: storyIndex ? 'KingsMusketeers' : 'TheLostTreasure',
      secondStoryName: storyIndex ? 'TheLostTreasure' : 'KingsMusketeers',
    };
    const submitted = await addResponse(response);
    setIsSubmitting(false);
    if (submitted) {
      setIsSubmitted(true);
      setSubmissionMessage(
        'Response submitted successfully. Thank you for your participation!',
      );
    } else {
      setSubmissionMessage('Error submitting response: please try again.');
    }
  };

  return (
    <div className="my-10">
      <p className="mb-5 text-xl">{title}</p>
      <div className="flex flex-col gap-10">
        <div className="text-lg">Prolific ID: {prolificInfo.prolificPid}</div>
        <Button
          variant="contained"
          color={isSubmitting ? 'secondary' : 'primary'}
          onClick={submitData}
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
        {submissionMessage && (
          <div className="mt-5 text-lg">{submissionMessage}</div>
        )}
        {isSubmitted && (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => (window.location.href = prolificRedirectLink)}
            >
              Return to Prolific
            </Button>
            <div>
              If the above link didn't work properly, the completion code is:{' '}
              {completionCode}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionSubmission;
