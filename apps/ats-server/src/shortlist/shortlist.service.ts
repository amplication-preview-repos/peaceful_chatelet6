import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShortlistServiceBase } from "./base/shortlist.service.base";

@Injectable()
export class ShortlistService extends ShortlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
