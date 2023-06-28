import { MigrationInterface, QueryRunner } from "typeorm";

export class roleColumn1677137039128 implements MigrationInterface {
    name = 'roleColumn1677137039128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    }

}
