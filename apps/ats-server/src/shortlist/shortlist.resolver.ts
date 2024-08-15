import * as graphql from "@nestjs/graphql";
import { ShortlistResolverBase } from "./base/shortlist.resolver.base";
import { Shortlist } from "./base/Shortlist";
import { ShortlistService } from "./shortlist.service";

@graphql.Resolver(() => Shortlist)
export class ShortlistResolver extends ShortlistResolverBase {
  constructor(protected readonly service: ShortlistService) {
    super(service);
  }
}
