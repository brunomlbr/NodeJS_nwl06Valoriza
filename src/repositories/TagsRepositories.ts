import { EntityRepository, Repository } from "typeorm";

import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
// eslint-disable-next-line prettier/prettier
class TagsRepositories extends Repository<Tag> { }

export { TagsRepositories };
