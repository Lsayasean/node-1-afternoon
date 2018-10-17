let mes = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        let newMes = {
            text: text,
            time: time,
            id: id
        }
        id++;
        mes.push(newMes)
        res.status(200).send(mes)
    },
    read: (req, res) => {
        res.status(200).send(mes)
    },
    update: (req, res) => {
        for (let i = 0; i < mes.length; i++) {
            if (mes[i].id == req.params.id) {
                mes[i].text = req.body.text;
            }
        }
        res.sendStatus(200);
    },
    delete: (req, res) => {
        for (let i = 0; i < mes.length; i++) {
            if (mes[i].id == req.params.id) {
                delete mes[i]
            }
        }
        res.sendStatus(200);
    }
}