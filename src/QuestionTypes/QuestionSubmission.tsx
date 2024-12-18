import React, { useState } from 'react';
import {
  Answer,
  ProlificInfo,
  Question,
  completionCode,
  prolificRedirectLink,
} from '../utils/questions';
import { Button, TextField } from '@mui/material';
import { addResponse, Response } from '../utils/firestore';

type Props = {
  question: Question;
  answer: Answer;
  updateAnswer: (value: number | string) => void;
  answers: Answer[];
  prolificInfo: ProlificInfo;
  startTime: Date;
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
};

const QuestionSubmission = ({
  question,
  answer,
  updateAnswer,
  answers,
  prolificInfo,
  startTime,
  isSubmitted,
  setIsSubmitted,
}: Props) => {
  const { questionText: title } = question;
  const { value } = answer;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (newValue) => {
    updateAnswer(newValue);
  };

  const submitData = async () => {
    setIsSubmitting(true);
    const response: Response = {
      prolificInfo: prolificInfo,
      answers: answers,
      startTime: startTime,
      endTime: new Date(),
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

        <TextField
          id="issues"
          label="Issues (only fill if necessary)"
          variant="outlined"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
        />
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
