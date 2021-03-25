import React, { useState } from 'react';
import { StyledButton } from '../../../GlobalStyle.style';
import GiveRating from '../GiveRating';
import { FormFlex, InputField, TextareaField } from './ReviewForm.style';

export default function ReviewForm({ setIsReviewing }) {
  const [currentRating, setCurrentRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  return (
    <>
      <FormFlex style={{ marginBottom: '1rem' }}>
        <GiveRating
          currentRating={currentRating}
          setCurrentRating={setCurrentRating}
        />
        <InputField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Review title"
        />
      </FormFlex>
      <TextareaField
        onChange={(e) => setComment(e.target.value)}
        placeholder="Review text...">
        {comment}
      </TextareaField>
      <FormFlex justify="flex-end" style={{ marginTop: '1rem' }}>
        <StyledButton
          onClick={() => setIsReviewing(false)}
          width="auto"
          bgColor="f3f5f9"
          bgHover="d1d9e8"
          fontColor="4b566b">
          Cancel
        </StyledButton>
        <StyledButton width="auto">Save my review</StyledButton>
      </FormFlex>
    </>
  );
}
