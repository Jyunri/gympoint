import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { grey, coralRed } from '~/styles/colors';
import { Container } from './styles';

export default function Pagination({ currentPage, onNext, onPrev }) {
  return (
    <Container>
      <button type="button" onClick={onPrev} disabled={currentPage === 1}>
        <MdChevronLeft size={36} color={currentPage === 1 ? grey : coralRed} />
      </button>
      <strong>{`pág ${currentPage}`}</strong>
      <button type="button" onClick={onNext}>
        <MdChevronRight size={36} color={coralRed} />
      </button>
    </Container>
  );
}
