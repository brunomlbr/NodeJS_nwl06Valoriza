import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    // let tags = await tagsRepositories.find();
    // Como adicionar alguma informação antes do nome da tag (exemplo)
    // tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }));
    // ...tag => pego tudo relacionado ao objeto tag
    // nameCustom: `#${tag.name}` => adiciono "#" ao nome
    // return tags;

    // classToPlain => cria novos objetos pelo entity a partir to typeorm
    return classToPlain(tags);
  }
}

export { ListTagsService };
