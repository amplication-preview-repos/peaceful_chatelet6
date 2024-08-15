import { Module } from "@nestjs/common";
import { ShortlistModuleBase } from "./base/shortlist.module.base";
import { ShortlistService } from "./shortlist.service";
import { ShortlistController } from "./shortlist.controller";
import { ShortlistResolver } from "./shortlist.resolver";

@Module({
  imports: [ShortlistModuleBase],
  controllers: [ShortlistController],
  providers: [ShortlistService, ShortlistResolver],
  exports: [ShortlistService],
})
export class ShortlistModule {}
