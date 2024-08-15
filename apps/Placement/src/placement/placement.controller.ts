import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlacementService } from "./placement.service";
import { PlacementControllerBase } from "./base/placement.controller.base";

@swagger.ApiTags("placements")
@common.Controller("placements")
export class PlacementController extends PlacementControllerBase {
  constructor(protected readonly service: PlacementService) {
    super(service);
  }
}
