import Bee from 'bee-queue';
import EnrollmentMail from '../app/jobs/EnrollmentMail';
import redisConfig from '../config/redis';
import AnswerOrderMail from '../app/jobs/AnswerOrderMail';

const jobs = [EnrollmentMail, AnswerOrderMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    // Criamos uma fila para cada bg job
    jobs.forEach(({ key, handle }) => {
      const beeConfig = new Bee(key, {
        redis: redisConfig,
      });

      this.queues[key] = {
        bee: beeConfig,
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.process(handle);
    });
  }
}

export default new Queue();
