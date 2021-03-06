import { Op } from 'sequelize';
import { addDays, subDays, startOfDay, endOfDay } from 'date-fns';
import Checkin from '../models/Checkin';

const LIMIT = 5;

class CheckinController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const checkins = await Checkin.findAll({
      where: { student_id: req.params.id },
      order: [['createdAt', 'DESC']],
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const student_id = req.params.id;

    const today = new Date();
    const startDate = subDays(today, 6);
    const endDate = addDays(today, 6);

    const checkins = await Checkin.findAll({
      where: {
        student_id: req.params.id,
        created_at: {
          [Op.between]: [startOfDay(startDate), endOfDay(endDate)],
        },
      },
    });

    if (checkins.length >= 5) {
      return res.status(400).json({
        error: 'Checkin count exceeded',
      });
    }

    const checkin = await Checkin.create({ student_id });

    return res.json(checkin);
  }
}

export default new CheckinController();
