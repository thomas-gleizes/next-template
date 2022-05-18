import { Page } from "next/app";
import Button from "components/common/Button";
import React from "react";
import { useDialog } from "hooks";

const DialogPage: Page = () => {
  const handleClick = async () => {};

  const { confirm, alert, prompt } = useDialog();

  const handleAlert = async () => {
    console.log("Alert");
    const result = await alert("Opération réussie !");
    console.log("Alert", result);
  };

  const handleConfirm = async () => {
    console.log("Confirm");
    const result = await confirm("Are you sure ?");
    console.log("confirm", result);
  };

  const handlePrompt = async () => {
    console.log("Prompt");
    const result = await prompt("Quelle age avez vous ?");
    console.log("prompt", result);
  };

  return (
    <div className="p-10 border bg-gray-200 flex space-x-5">
      <Button color="blue" onClick={handleAlert}>
        Alert
      </Button>
      <Button color="emerald" onClick={handleConfirm}>
        Confirm
      </Button>
      <Button color="red" onClick={handlePrompt}>
        Prompt
      </Button>
    </div>
  );
};

export default DialogPage;
