import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import { addMonths } from 'date-fns';
import { Container, ConfirmButton, CancelButton } from './styles';
import history from '~/services/history';
import { registerEnrollmentRequest } from '~/store/modules/enrollments/actions';
import api from '~/services/api';
import { kebabToSlashDate, datetoSlashDate } from '~/utils/formatters/date';

export default function RegisterEnrollment() {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({});
  const [plan, setPlan] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(datetoSlashDate(new Date()));

  useEffect(() => {
    if (plan.duration && startDate !== {}) {
      setEndDate(datetoSlashDate(addMonths(startDate, plan.duration)));
    }
  }, [plan, startDate]);

  function handleSubmit(_data) {
    dispatch(
      registerEnrollmentRequest({
        plan_id: plan.id,
        start_date: startDate,
        student_id: student.student_id,
      })
    );
  }

  async function filterStudents(inputValue) {
    const response = await api.get('students');

    const filteredStudents = response.data.filter(s =>
      s.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    return filteredStudents.map(fs => ({
      label: fs.name,
      value: fs.id,
      ...fs,
    }));
  }

  function studentsOptions(inputValue) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(filterStudents(inputValue));
      }, 1000);
    });
  }

  async function filterPlans(inputValue) {
    const response = await api.get('plans');

    const filteredPlans = response.data.filter(p =>
      p.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    return filteredPlans.map(fp => ({
      label: fp.title,
      value: fp.id,
      ...fp,
    }));
  }

  function plansOptions(inputValue) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(filterPlans(inputValue));
      }, 1000);
    });
  }

  function handleSetStartDate(date) {
    if (date) {
      const parsedDate = new Date(kebabToSlashDate(date));
      setStartDate(parsedDate);
    }
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de matrícula</strong>
        <div>
          <CancelButton
            type="button"
            onClick={() => history.push('/enrollments')}
          >
            Voltar
          </CancelButton>
          <ConfirmButton type="submit" form="form">
            Salvar
          </ConfirmButton>
        </div>
      </header>
      <Form id="form" onSubmit={handleSubmit}>
        <label htmlFor="student">
          <strong>ALUNO</strong>
          <AsyncSelect
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder="Buscar aluno"
            cacheOptions
            defaultOptions
            loadOptions={studentsOptions}
            onChange={e => setStudent({ student_id: e.value })}
          />
        </label>

        <div>
          <label htmlFor="plan">
            <strong>PLANO</strong>
            <AsyncSelect
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder="Buscar plano"
              cacheOptions
              defaultOptions
              loadOptions={plansOptions}
              onChange={e => {
                setPlan({
                  id: e.value,
                  title: e.label,
                  duration: e.duration,
                  price: e.price,
                });
              }}
            />
          </label>

          <label htmlFor="startDate">
            <strong>DATA DE INÍCIO</strong>
            <Input
              name="startDate"
              type="date"
              onChange={e => handleSetStartDate(e.target.value)}
            />
          </label>

          <label htmlFor="endDate">
            <strong>DATA DE TÉRMINO</strong>
            <Input readOnly name="endDate" value={endDate} />
          </label>

          <label htmlFor="totalPrice">
            <strong>VALOR FINAL</strong>
            <Input
              readOnly
              name="totalPrice"
              value={plan.price && plan.price * plan.duration}
            />
          </label>
        </div>
      </Form>
    </Container>
  );
}
