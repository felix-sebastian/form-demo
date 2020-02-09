import React from "react";
import Label from "../label";
import inputs from "../inputs";
import ui from "../../ui";
import roles from "../roles";

const { space: Space } = ui;

const {
  text: Text,
  select: Select,
  date: Date,
  radio: Radio,
  hint: Hint
} = inputs;

export default ({
  role,
  setRole,
  date,
  setDate,
  victoria,
  setVictoria,
  suburb,
  setSuburb,
  hint
}) => (
  <>
    <Label>What is the user's role?</Label>
    <Select
      value={role}
      handleChange={setRole}
      options={roles}
      required={false}
    />
    <Space />
    <Label asterisk={hint}>When did the user first join?</Label>
    <Date value={date} handleChange={setDate} />
    <Space />
    <Label asterisk={hint}>Is the person located in Victoria?</Label>
    <Radio
      value={victoria}
      handleChange={value => {
        setVictoria(value);
        setSuburb(null);
      }}
      options={["Yes", "No"]}
    />
    <Space />
    {victoria === 0 && (
      <>
        <Label asterisk={hint}>Where in Victoria?</Label>
        <Text value={suburb} handleChange={setSuburb} />
        <Hint show={hint && !suburb}>
          You forgot specify where in Victoria!
        </Hint>
        <Space />
      </>
    )}
  </>
);
