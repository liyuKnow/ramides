/*
  Warnings:

  - You are about to drop the column `tarif` on the `request` table. All the data in the column will be lost.
  - Added the required column `status` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tariff` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `request` DROP COLUMN `tarif`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `tariff` VARCHAR(191) NOT NULL,
    MODIFY `remark` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `username` VARCHAR(191) NOT NULL;
