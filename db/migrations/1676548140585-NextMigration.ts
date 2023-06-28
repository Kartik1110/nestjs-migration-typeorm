import { MigrationInterface, QueryRunner } from "typeorm";

export class NextMigration1676548140585 implements MigrationInterface {
    name = 'NextMigration1676548140585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
