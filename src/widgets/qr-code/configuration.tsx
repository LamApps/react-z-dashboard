import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/input";

const Configuration = ({ id, options, setOptions }: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={value => setOptions({ headline: value })}
        value={options.headline}
        label={t("common.headline")}
        className="mb-6"
      />
      {/* TODO: Create and use TextArea */}
      <Input
        setValue={value => setOptions({ content: value })}
        value={options.content}
        label={t("widget.qr-code.configuration.content")}
      />
    </>
  );
};

export default Configuration;
