const express = require('express');
const router = express.Router();

const Student = require('../db/models/student');
// path /students

router.get('/', (_, res) => {
  Student.find()
    .then(docs => res.send(docs))
    .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
  const { body } = req;

  const student = new Student(body);

  student.save()
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send({status: err._message, message: err.message}));
});

router.put('/:id', (req, res) => {
  const { body, params: { id } } = req;

  Student.findOneAndUpdate({ id }, body, { new: true })
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send({status: err._message, message: err.message}));
});

router.delete('/:id', (req, res) => {
  const { params: { id } } = req;

  Student.findOneAndDelete({ _id: id })
    .then(doc => {
      if (doc) return res.send(doc);
      res.status(404).send('Not found');
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;