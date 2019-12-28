import Mail from '../../lib/Mail';

class AnswerOrderMail {
  get key() {
    return 'AnswerOrderMail';
  }

  async handle({ data }) {
    const { student, result } = data;

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: `Resposta a pergunta ${result.id}`,
      text: `
        Pergunta: ${result.question}
        Resposta: ${result.answer}
        Respondida em: ${result.answer_at}

        Bons treinos!
      `,
    });
  }
}

export default new AnswerOrderMail();
