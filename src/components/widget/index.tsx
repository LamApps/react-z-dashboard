import React, { memo, Suspense } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import withErrorHandling, {
  State as ErrorProps
} from "common/hoc/withErrorHandling";
import Button, { ButtonVariant, ButtonSize } from "components/button";
import Icon from "components/icon";
import widgets, { ValueUpdateAction } from "widgets/index";

import Loading from "../loading";

import makeSelectWidget from "./selectors";
import { actionCreators } from "./duck";

export interface Props {
  id: string;
  type: string;
  options: { [key: string]: any };
  data: { [key: string]: any };
  setOptionValue: ValueUpdateAction;
  setDataValue: ValueUpdateAction;
  removeWidgetFromLayout: (id: string) => void;
  isLayoutEditable: boolean;
  className?: string;
  children?: React.ReactNode;
}

/** Single widget within the dashboard */
export const Widget = memo((props: Props & ErrorProps) => {
  const {
    id,
    type,
    options,
    data,
    hasError,
    setOptionValue,
    setDataValue,
    removeWidgetFromLayout,
    isLayoutEditable,
    className,
    children,
    ...rest
  } = props;
  const Component = widgets[type].component;

  const { t } = useTranslation();
  const headline = t(`widget.${type}.headline`, options);

  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "border",
        "rounded",
        "overflow-hidden",
        "text-color-widget",
        "bg-color-widget",
        {
          error: hasError
        },
        className
      )}
      {...rest}
    >
      {headline && (
        <h3
          id={`widget-${id}-headline`}
          className="m-0 py-1 px-2 text-1 font-normal"
        >
          {headline}
        </h3>
      )}

      {hasError && "» Error «"}
      {isLayoutEditable && (
        <>
          <div className="absolute inset-0 bg-color-widget-dim" />
          <div className="absolute right-0 top-0 m-2">
            <Button
              size={ButtonSize.Small}
              variant={ButtonVariant.Unstyled}
              className="text-color-default"
              aria-label={t(`widget.common.remove`, {
                widget: t(`widget.${type}.name`)
              })}
              onClick={() => removeWidgetFromLayout(id)}
            >
              <Icon name="times" />
            </Button>
          </div>
        </>
      )}
      {!hasError && (
        <div className="flex flex-col items-center justify-center h-100">
          <Suspense fallback={<Loading />}>
            {React.createElement(Component, {
              id,
              setOptionValue,
              setDataValue,
              ...options,
              ...data
            })}
          </Suspense>
        </div>
      )}
      {children}
    </div>
  );
});

const mapStateToProps = (id: string) => makeSelectWidget(id);

export default (id: string) =>
  connect(
    mapStateToProps(id),
    actionCreators // NICE: bind id to action creators
  )(withErrorHandling(Widget));
