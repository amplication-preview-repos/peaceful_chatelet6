import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContactTitle } from "../contact/ContactTitle";
import { OrderTitle } from "../order/OrderTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="mainContact.id"
          reference="Contact"
          label="Main Contact"
        >
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="orders.id" reference="Order" label="Orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
