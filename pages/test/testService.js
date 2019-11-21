export default class TestService {
    abc = '';
    constructor(params) {
        this.abc = params
    }

    append(str) {
        this.abc += '+'+str;
    }
}