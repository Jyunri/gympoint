import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  async handle({ data }) {
    const { student, start_date, end_date, price } = data;

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Bem vindo ao Gympoint!',
      text: `
        Detalhes da sua matrícula
        Início: ${start_date}
        Fim: ${end_date}
        Valor: R$ ${price}

        Bons treinos!
      `,
    });
  }
}

export default new EnrollmentMail();
