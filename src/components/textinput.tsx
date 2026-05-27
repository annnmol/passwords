import { Host, OutlinedTextField, Text } from "@expo/ui/jetpack-compose";
import { useState } from "react";

export default function OutlinedTextFieldExample() {
  const [value, setValue] = useState("");

  return (
    <Host matchContents>
      <OutlinedTextField onValueChange={setValue}>
        <OutlinedTextField.Label>
          <Text>Email</Text>
        </OutlinedTextField.Label>
        <OutlinedTextField.Placeholder>
          <Text>you@example.com</Text>
        </OutlinedTextField.Placeholder>
      </OutlinedTextField>
    </Host>
  );
}
