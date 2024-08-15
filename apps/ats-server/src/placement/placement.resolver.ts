import * as graphql from "@nestjs/graphql";
import { PlacementResolverBase } from "./base/placement.resolver.base";
import { Placement } from "./base/Placement";
import { PlacementService } from "./placement.service";

@graphql.Resolver(() => Placement)
export class PlacementResolver extends PlacementResolverBase {
  constructor(protected readonly service: PlacementService) {
    super(service);
  }
}
