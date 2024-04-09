"use client";
import { LuEye } from "react-icons/lu";

import { maskCellphone } from "@shared/utils";
import { Tooltip } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";

import Input from "../components/Input";
import { registerStep1FieldsSchema } from "../schemas";

export default function RegisterStep1() {
  const unparsedFormData = localStorage.getItem("register-form-data");
  const formData = unparsedFormData ? JSON.parse(unparsedFormData) : null;

  const passwordRequirements = "Sua senha deve ter pelo menos 8 caracteres.";

  return (
    <>
      <Input
        name="email"
        placeholder="suporte@ecoo.org.br"
        label="Email"
        type="email"
        initialValue={formData?.email || null}
        validationSchema={registerStep1FieldsSchema.email}
        localStorageFormKey="register-form-data"
      />
      <Input
        name="cellphone"
        placeholder="(xx) xxxxx-xxxx"
        label="Celular"
        type="text"
        mask={maskCellphone}
        initialValue={formData?.cellphone || null}
        validationSchema={registerStep1FieldsSchema.cellphone}
        localStorageFormKey="register-form-data"
      />
      <Input
        name="password"
        placeholder="******"
        label={
          (<>
            Senha
            <Tooltip title={passwordRequirements}>
              <InfoCircleOutlined
                style={{ color: "rgba(0,0,0,.45)", marginLeft: 10 }}
              />
            </Tooltip>
          </>)as unknown as Element
        }
        type="password"
        initialValue={formData?.password || null}
        validationSchema={registerStep1FieldsSchema.password}
        icon={<LuEye size={24} />}
        localStorageFormKey="register-form-data"
      />
    </>
  );
}
