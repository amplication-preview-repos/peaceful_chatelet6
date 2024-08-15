import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShortlistService } from "./shortlist.service";
import { ShortlistControllerBase } from "./base/shortlist.controller.base";

@swagger.ApiTags("shortlists")
@common.Controller("shortlists")
export class ShortlistController extends ShortlistControllerBase {
  constructor(protected readonly service: ShortlistService) {
    super(service);
  }
}
