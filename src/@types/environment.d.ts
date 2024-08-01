namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        NODE_ENV: "development" | "production";
        PORT: number;
        MYSQL_HOST: string;
        MYSQL_DATABASE: string;
        MYSQL_USERNAME: string;
        MYSQL_PASSWORD: string;
        MYSQL_PORT: number;
    }
}