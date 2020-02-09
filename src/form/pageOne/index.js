import React from "react";
import Label from "../label";
import inputs from "../inputs";
import ui from "../../ui";
import storeTypes from "../storeTypes";

const { space: Space } = ui;
const { text: Text, select: Select, hint: Hint } = inputs;

export default ({
  storeType,
  setStoreType,
  metroDetails,
  setMetroDetails,
  users,
  user,
  setUser,
  hint
}) => (
  <>
    <Label asterisk={hint}>Store type</Label>
    <Select
      value={storeType}
      handleChange={value => {
        setStoreType(value);
        setMetroDetails(null);
      }}
      options={storeTypes}
    />
    <Hint show={hint && storeType === null}>
      You forgot to select a store type!
    </Hint>
    <Space />
    {storeTypes[storeType] === "Metro" && (
      <>
        <Label asterisk={hint}>Provide details</Label>
        <Text value={metroDetails} handleChange={setMetroDetails} />
        <Hint show={hint && storeType === 1 && !metroDetails}>
          You forgot give details!
        </Hint>
        <Space />
      </>
    )}
    <Label asterisk={hint}>User lookup</Label>
    <Select
      value={user}
      handleChange={setUser}
      options={users.map(user => `${user.name.first} ${user.name.last}`)}
    />
    <Hint show={hint && user === null}>You forgot select a user!</Hint>
    <Space />
    <Label>First name</Label>
    <Text
      value={typeof user === "number" ? users[user].name.first : ""}
      disabled
    />
    <Space />
    <Label>Last name</Label>
    <Text
      value={typeof user === "number" ? users[user].name.last : ""}
      disabled
    />
    <Space />
  </>
);
