import {MigrationInterface, QueryRunner} from "typeorm";

export class Post1642441301138 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS post (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo VARCHAR,
                autor VARCHAR,
                texto VARCHAR
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS post;`);
    }

}
