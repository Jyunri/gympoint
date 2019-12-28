import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';
import AnswerOrderMail from '../jobs/AnswerOrderMail';
import Queue from '../../lib/Queue';

const LIMIT = 3;

class AnswerOrderController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const helpOrders = await HelpOrder.findAll({
      where: { answer_at: null },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name'],
        },
      ],
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const helpOrder = await HelpOrder.findByPk(req.params.id);

    const result = await helpOrder.update({
      ...req.body,
      answer_at: new Date(),
    });

    const { student_id } = helpOrder;

    const student = await Student.findByPk(student_id);

    await Queue.add(AnswerOrderMail.key, {
      student,
      result,
    });

    return res.json(result);
  }
}

export default new AnswerOrderController();
