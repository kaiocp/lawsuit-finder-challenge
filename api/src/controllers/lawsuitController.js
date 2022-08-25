import lawsuits from '../models/Lawsuit.js';

class LawsuitController {
    static getLawsuits = (req, res) => {
        lawsuits.find((err, lawsuits) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).json(lawsuits);
            }
        });
    }

    static getLawsuitByCourtAndCnjNumber = (req, res) => {
        lawsuits.find(({ court: req.params.court }, { cnj_number: req.params.number }), (err, lawsuits) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(lawsuits);
            }
        });
    }

    static postLawsuit = (req, res) => {
        let lawsuit = new lawsuits(req.body);

        lawsuit.save((err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).send(lawsuit.toJSON());
            }
        });
    }

}

export default LawsuitController;