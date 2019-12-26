import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import { Container, ConfirmButton, CancelButton } from './styles';
import { ISOtoSlashDate } from '~/utils/formatters/date';
import history from '~/services/history';
import { updatePlanRequest } from '~/store/modules/plans/actions';
import api from '~/services/api';

export default function EditEnrollment() {
  const dispatch = useDispatch();

  // let access route from everywhere retrieving user data
  const { id } = useParams();

  const [enrollment, setEnrollment] = useState({});

  useEffect(() => {
    async function loadEnrollment() {
      const { data } = await api.get(`enrollments/${id}`);

      const responseEnrollment = {
        student: data.student.name,
        plan: data.plan.title,
        startDate: ISOtoSlashDate(data.start_date),
        endDate: ISOtoSlashDate(data.end_date),
      };

      setEnrollment(responseEnrollment);
    }

    loadEnrollment();
  }, [id]);

  function handleSubmit(data) {
    // dispatch(
    //   updateEnrollmentRequest({
    //     ...data,
    //     id: enrolllment.id,
    //   })
    // );
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
          <Input name="student" placeholder="Buscar aluno" />
        </label>

        <div>
          <label htmlFor="plan">
            <strong>PLANO</strong>
            <Input name="plan" placeholder="Buscar plano" />
          </label>

          <label htmlFor="startDate">
            <strong>DATA DE INÍCIO</strong>
            <Input name="startDate" />
          </label>

          <label htmlFor="endDate">
            <strong>DATA DE TÉRMINO</strong>
            <Input name="endDate" />
          </label>

          <label htmlFor="totalPrice">
            <strong>VALOR FINAL</strong>
            <Input name="totalPrice" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
