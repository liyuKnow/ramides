/*
  Warnings:

  - You are about to alter the column `status` on the `request` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `request` MODIFY `status` BOOLEAN NOT NULL DEFAULT false;
