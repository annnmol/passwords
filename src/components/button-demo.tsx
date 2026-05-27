import { Button, Host } from "@expo/ui/jetpack-compose";

export function SaveButton() {
  return (
    <Host matchContents>
      <Button onClick={() => alert("Saved!")}>Save changes</Button>
    </Host>
  );
}
