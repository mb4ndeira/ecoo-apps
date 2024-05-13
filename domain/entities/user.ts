import { Entity, UniqueEntityID } from "@shared/core/Entity";
import { Optional } from "@shared/core/types/Optional";

export interface UserProps {
  email: string;
  password: string;
  cellphone: string;
  first_name: string;
  last_name: string;
  cpf: string;
  created_at: Date;
  updated_at?: Date | null;
}

export class User extends Entity<UserProps> {
  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get cellphone() {
    return this.props.cellphone;
  }

  get first_name() {
    return this.props.first_name;
  }

  get last_name() {
    return this.props.last_name;
  }

  get cpf() {
    return this.props.cpf;
  }

  get created_at() {
    return this.props.created_at;
  }

  get updated_at() {
    return this.props.updated_at;
  }

  get me() {
    return {
      email: this.email,
      name: `${this.first_name} ${this.last_name}`,
    };
  }

  static create(props: Optional<UserProps, "created_at">, id?: UniqueEntityID) {
    return new User(
      {
        ...props,
        created_at: props.created_at ?? new Date(),
      },
      id
    );
  }
}
