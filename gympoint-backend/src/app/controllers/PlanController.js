import * as Yup from 'yup';
import Plan from '../models/Plan';

const LIMIT = 3;

class PlanController {
  async index(req, res) {
    if (req.params.id) {
      const plan = await Plan.findByPk(req.params.id);
      return res.json(plan);
    }

    const { page = 1, paginate = 'true' } = req.query;
    const paginateScope = paginate === 'true'
      ? { limit: LIMIT, offset: (page - 1) * LIMIT, }
      : {}

    const plans = await Plan.findAll(paginateScope);

    return res.json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const planExists = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exists' });
    }

    const { id, title, duration, price } = await Plan.create(req.body);
    return res.json({ id, title, duration, price });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title } = req.body;

    const plan = await Plan.findByPk(req.params.id);

    if (title !== plan.title) {
      const titleExists = await Plan.findOne({ where: { title } });

      if (titleExists) {
        return res.status(401).json({ message: 'Plan already exists' });
      }
    }

    const result = await plan.update(req.body);

    return res.json(result);
  }

  async delete(req, res) {
    await Plan.destroy({ where: { id: req.params.id } });

    return res.json({ message: 'ok' });
  }
}

export default new PlanController();
