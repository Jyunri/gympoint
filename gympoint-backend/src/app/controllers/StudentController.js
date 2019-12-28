import * as Yup from 'yup';
import { Op } from 'sequelize';
import Student from '../models/Student';
import Enrollment from '../models/Enrollment';

const LIMIT = 3;

class StudentController {
  async index(req, res) {
    // if route param is provided
    if (req.params.id) {
      const student = await Student.findByPk(req.params.id);
      return res.json(student);
    }

    const { page = 1 } = req.query;
    const filter = req.query.q;
    let students;

    if (filter) {
      students = await Student.findAll({
        where: {
          name: {
            [Op.iLike]: `%${filter}%`,
          },
        },
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
      });
    } else {
      students = await Student.findAll({
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
      });
    }

    return res.json(students);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const { id, name, email } = await Student.create(req.body);
    return res.json({ id, name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    const student = await Student.findByPk(req.params.id);

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(401).json({ message: 'Email already exists' });
      }
    }

    const result = await student.update(req.body);

    return res.json(result);
  }

  async delete(req, res) {
    await Student.destroy({ where: { id: req.params.id } });
    await Enrollment.destroy({ where: { stundent_id: req.params.id } });

    return res.json({ message: 'ok' });
  }
}

export default new StudentController();
