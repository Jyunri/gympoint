import HelpOrder from '../models/HelpOrder';

const LIMIT = 5;

class HelpOrderController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const helpOrders = await HelpOrder.findAll({
      where: { student_id: req.params.id },
      order: [['createdAt', 'DESC']],
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const student_id = req.params.id;

    const helpOrder = await HelpOrder.create({
      student_id,
      question: req.body.question,
    });

    return res.json(helpOrder);
  }
}

export default new HelpOrderController();
