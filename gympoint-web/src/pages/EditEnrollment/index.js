import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { addMonths } from 'date-fns';
import { Container, ConfirmButton, CancelButton } from './styles';
import {
  ISOtoSlashDate,
  datetoSlashDate,
  datetoKebabDate,
} from '~/utils/formatters/date';
import history from '~/services/history';
import { updatePlanRequest } from '~/store/modules/plans/actions';
import api from '~/services/api';

export default function EditEnrollment() {
  const dispatch = useDispatch();

  // let access route from everywhere retrieving user data
  const { id } = useParams();

  const [enrollment, setEnrollment] = useState({});
  const [plan, setPlan] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    async function loadEnrollment() {
      const { data } = await api.get(`enrollments/${id}`);

      const responseEnrollment = {
        student: data.student.name,
        student_id: data.student.id,
        plan_id: data.plan.id,
        startDate: ISOtoSlashDate(data.start_date),
        endDate: ISOtoSlashDate(data.end_date),
      };

      const { plan } = data;

      const responsePlan = {
        id: plan.id,
        title: plan.title,
        duration: plan.duration,
        price: plan.price,
      };

      setEnrollment(responseEnrollment);
      setPlan(responsePlan);
      setStartDate(new Date(data.start_date));
    }

    loadEnrollment();
  }, [id]);

  useEffect(() => {
    if (plan.duration && startDate !== {}) {
      setEndDate(datetoSlashDate(addMonths(startDate, plan.duration)));
    }
  }, [plan, startDate]);

  function handleSubmit(data) {
    console.log(data);
    // dispatch(
    //   updateEnrollmentRequest({
    //     ...data,
    //     id: enrolllment.id,
    //   })
    // );
  }

  async function filterPlans(inputValue) {
    const response = await api.get('plans');

    const filteredPlans = response.data.filter(plan =>
      plan.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    return filteredPlans.map(plan => ({
      label: plan.title,
      value: plan.id,
      ...plan,
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
      const parsedDate = new Date(date);
      setStartDate(parsedDate);
    }
  }

  return (
    <Container>
      <header>
        <strong>Edição de matrícula</strong>
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
      <Form id="form" initialData={enrollment} onSubmit={handleSubmit}>
        <label htmlFor="student">
          <strong>ALUNO</strong>
          <Input readOnly name="student" placeholder="Buscar aluno" />
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
              value={{
                value: plan.id,
                label: plan.title,
                duration: plan.duration,
                price: plan.price,
              }}
              onChange={e => {
                setPlan({
                  id: e.value,
                  title: e.label,
                  duration: e.duration,
                  price: e.price,
                });
                setEndDate(
                  datetoSlashDate(addMonths(startDate, plan.duration))
                );
              }}
            />
          </label>

          <label htmlFor="startDate">
            <strong>DATA DE INÍCIO</strong>
            <Input
              name="startDate"
              type="date"
              value={datetoKebabDate(startDate)}
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
              value={String(plan.price * plan.duration)}
            />
          </label>
        </div>
      </Form>
    </Container>
  );
}
