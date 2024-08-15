import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";
import { OrderTitle } from "../order/OrderTitle";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
