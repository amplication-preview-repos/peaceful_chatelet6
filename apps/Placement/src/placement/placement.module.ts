import { Module } from "@nestjs/common";
import { PlacementModuleBase } from "./base/placement.module.base";
import { PlacementService } from "./placement.service";
import { PlacementController } from "./placement.controller";
import { PlacementResolver } from "./placement.resolver";

@Module({
  imports: [PlacementModuleBase],
  controllers: [PlacementController],
  providers: [PlacementService, PlacementResolver],
  exports: [PlacementService],
})
export class PlacementModule {}
