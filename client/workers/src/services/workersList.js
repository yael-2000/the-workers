class WorkersList {
    constructor() {
        this.url = 'localhost:4000/getAllWorkers';
    }
    fetchWorkers = (token) => {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((res) => {
            if (res.status !== 200) {
                res.send(`error login`);
            }
            return res.json();
        })
    }
}
export default new WorkerService();