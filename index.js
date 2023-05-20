const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.post('/sync', (req, res) => {
    let parent = req.body.parent;
    let desired = {status: {}, children: []};
    desired.children.push({
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
            "name": parent.metadata.name,
            "labels": {
                "name": parent.metadata.name,
            },
            "namespace": parent.metadata.namespace,
        },
        "spec": -{
            "containers": [
                {
                    "name": "nginx",
                    "image": parent.spec.image
                }
            ]
        }
    });
    res.json(desired);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
