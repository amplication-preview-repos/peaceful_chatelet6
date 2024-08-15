/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Shortlist as PrismaShortlist } from "@prisma/client";

export class ShortlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ShortlistCountArgs, "select">
  ): Promise<number> {
    return this.prisma.shortlist.count(args);
  }

  async shortlists(
    args: Prisma.ShortlistFindManyArgs
  ): Promise<PrismaShortlist[]> {
    return this.prisma.shortlist.findMany(args);
  }
  async shortlist(
    args: Prisma.ShortlistFindUniqueArgs
  ): Promise<PrismaShortlist | null> {
    return this.prisma.shortlist.findUnique(args);
  }
  async createShortlist(
    args: Prisma.ShortlistCreateArgs
  ): Promise<PrismaShortlist> {
    return this.prisma.shortlist.create(args);
  }
  async updateShortlist(
    args: Prisma.ShortlistUpdateArgs
  ): Promise<PrismaShortlist> {
    return this.prisma.shortlist.update(args);
  }
  async deleteShortlist(
    args: Prisma.ShortlistDeleteArgs
  ): Promise<PrismaShortlist> {
    return this.prisma.shortlist.delete(args);
  }
}
