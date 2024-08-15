import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";
import { OrderTitle } from "../order/OrderTitle";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="clients.id" reference="Client" label="Clients">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="Company" source="company" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="orders.id" reference="Order" label="Orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
