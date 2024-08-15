import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlacementServiceBase } from "./base/placement.service.base";

@Injectable()
export class PlacementService extends PlacementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
