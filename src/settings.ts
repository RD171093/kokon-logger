import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";

const { FormSection, FormButton } = Forms;

export default () => (
  <FormSection title="Message Logger">
    <FormButton
      onPress={() => {
        storage.deletedMessages = {}; // Clear saved messages
      }}
      text="Clear Saved Messages"
    />
  </FormSection>
);
