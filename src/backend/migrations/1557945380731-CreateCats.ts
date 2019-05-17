import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCats1557945380731 implements MigrationInterface {
  /* eslint-disable-next-line class-methods-use-this */
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "cats",
        columns: [
          {
            name: "id",
            type: "serial",
            isNullable: false,
            isPrimary: true,
          },
          {
            name: "first_name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "last_name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "age",
            type: "int",
            isNullable: false,
          },
        ],
      }),
    );
  }

  /* eslint-disable-next-line class-methods-use-this */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cats");
  }
}
