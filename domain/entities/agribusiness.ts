import { Entity, UniqueEntityID } from "@shared/core/Entity";
import { Optional } from "@shared/core/types/Optional";

interface AgribusinessProps {
  name: string;
  caf: string;
  created_at: Date;
  updated_at?: Date | null;
}

export class Agribusiness extends Entity<AgribusinessProps> {
  get name() {
    return this.props.name;
  }

  get caf() {
    return this.props.caf;
  }

  get created_at() {
    return this.props.created_at;
  }

  get updated_at() {
    return this.props.updated_at;
  }

  static create(
    props: Optional<AgribusinessProps, "created_at">,
    id?: UniqueEntityID
  ) {
    const agribusiness = new Agribusiness(
      {
        ...props,
        created_at: props.created_at ?? new Date(),
      },
      id
    );

    return agribusiness;
  }
}
