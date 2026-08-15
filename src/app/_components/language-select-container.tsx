"use client";

import { SelectField, type SelectFieldOption } from "@/components/shared/select-field";
import {
  LanguageCircleIcon,
  LanguageSquareIcon,
  TranslateIcon,
} from "@hugeicons/core-free-icons";

const languages: SelectFieldOption[] = [
  { value: "persian", label: "فارسی", icon: TranslateIcon },
  { value: "english", label: "English", icon: LanguageCircleIcon },
  { value: "deutsch", label: "Deutsch", icon: LanguageSquareIcon },
];

const LanguageSelectContainer = () => {
  return (
    <SelectField
      label={"زبان"}
      groupLabel={"Languages"}
      placeholder={"زبان را انتخاب کنید"}
      options={languages}
    />
  );
};

export default LanguageSelectContainer;
