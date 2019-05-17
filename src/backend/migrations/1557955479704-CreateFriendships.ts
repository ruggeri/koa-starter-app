import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

/* prettier-ignore */
export class CreateFriendships1557955479704 implements MigrationInterface {
  /* eslint-disable-next-line class-methods-use-this */
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: "friendships",
      columns: [
        {
          name: "friend_id1",
          type: "int",
          isNullable: false,
          isPrimary: true,
        },
        {
          name: "friend_id2",
          type: "int",
          isNullable: false,
          isPrimary: true,
        },
      ],
    });

    table.addForeignKey(
      new TableForeignKey({
        columnNames: ["friend_id1"],
        referencedTableName: "cats",
        referencedColumnNames: ["id"],
      }),
    );

    table.addForeignKey(
      new TableForeignKey({
        columnNames: ["friend_id2"],
        referencedTableName: "cats",
        referencedColumnNames: ["id"],
      }),
    );

    await queryRunner.createTable(table);
  }

  /* eslint-disable-next-line class-methods-use-this */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("friendships");
  }
}
