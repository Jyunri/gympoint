import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import { Container, ConfirmButton, CancelButton } from './styles';
import history from '~/services/history';
import { updateStudentRequest } from '~/store/modules/students/actions';
import api from '~/services/api';

export default function EditStudent() {
  const dispatch = useDispatch();

  // let access route from everywhere retrieving user data
  const { id } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get(`students/${id}`);

      setStudent(response.data);
    }

    loadStudents();
  }, [id]);

  function handleSubmit(data) {
    dispatch(
      updateStudentRequest({
        ...data,
        id: student.id,
      })
    );
  }

  return (
    <Container>
      <header>
        <strong>Edição de aluno</strong>
        <div>
          <CancelButton type="button" onClick={() => history.push('/students')}>
            Voltar
          </CancelButton>
          <ConfirmButton type="submit" form="form">
            Salvar
          </ConfirmButton>
        </div>
      </header>
      <Form id="form" initialData={student} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <strong>NOME COMPLETO</strong>
          <Input name="name" placeholder={student.name} />
        </label>

        <label htmlFor="email">
          <strong>ENDEREÇO DE EMAIL</strong>
          <Input name="email" type="email" />
        </label>

        <div>
          <label htmlFor="age">
            <strong>IDADE</strong>
            <Input name="age" />
          </label>

          <label htmlFor="weight">
            <strong>PESO (em kg)</strong>
            <Input name="weight" />
          </label>

          <label htmlFor="height">
            <strong>ALTURA</strong>
            <Input name="height" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
