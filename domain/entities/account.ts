import { Entity, UniqueEntityID } from "@shared/core/Entity";
import { Optional } from "@shared/core/types/Optional";

interface AccountProps {
  email: string;
  password: string;
  cellphone: string;
  created_at: Date;
  updated_at?: Date | null;
}

export class Account extends Entity<AccountProps> {
  get email() {
    return this.props.email;
  }

  get cellphone() {
    return this.props.cellphone;
  }

  get password() {
    return this.props.password;
  }

  get created_at() {
    return this.props.created_at;
  }

  get updated_at() {
    return this.props.updated_at;
  }

  static create(
    props: Optional<AccountProps, "created_at">,
    id?: UniqueEntityID
  ) {
    return new Account(
      {
        ...props,
        created_at: props.created_at ?? new Date(),
      },
      id
    );
  }
}
