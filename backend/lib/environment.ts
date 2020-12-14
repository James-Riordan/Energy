import * as dotenv from 'dotenv';

dotenv.config();

enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod',
    qa_environment = 'qa'
}

const db_name = process.env.DB_NAME

class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else if (this.environment === Environments.dev_environment) {
            return 8082;
        } else if (this.environment === Environments.qa_environment) {
            return 8083;
        } else {
            return 3000;
        }
    }

    getDBName(): String {
        if (this.environment === Environments.prod_environment) {
            return db_name;
        } else if (this.environment === Environments.dev_environment) {
            return db_name;
        } else if (this.environment === Environments.qa_environment) {
            return db_name;
        } else {
            return db_name;
        }
    }

    getDBUsername(): String {
        return process.env.DB_USERNAME
    }

    getDBPassword(): String {
        return process.env.DB_PASSWORD
    }
}


export default new Environment(Environments.local_environment);
