class WorkerService {
    constructor() {
        this.url = 'localhost:4000/getAllWorkers';
    }
    login = (values) => {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then((res) => {
            if (res.status !== 202) {
                res.send(`error login`);
            }
            return res.json()
        }).then(json => json.token);
    }
}
export default new WorkerService();