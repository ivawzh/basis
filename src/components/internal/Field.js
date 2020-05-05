import React from "react";
import PropTypes from "prop-types";
import Grid from "../Grid";
import Text from "../Text";
import VisuallyHidden from "../VisuallyHidden";
import useTheme from "../../hooks/useTheme";

function Field({
  fullWidth = true,
  optional,
  disabled,
  label,
  hideLabel = false,
  labelId,
  labelFor,
  auxId,
  helpText,
  errors,
  children,
  testId,
}) {
  const theme = useTheme();
  const labelElement = (
    <label css={theme["field.label"]} id={labelId} htmlFor={labelFor}>
      {label}
      {optional && <span css={theme["field.label.optional"]}>Optional</span>}
    </label>
  );
  const labelToRender = hideLabel ? (
    <VisuallyHidden>{labelElement}</VisuallyHidden>
  ) : (
    labelElement
  );

  return (
    <div
      css={{
        ...theme.field,
        ...(fullWidth && theme["field.fullWidth"]),
        ...(disabled && theme["field.disabled"]),
      }}
      data-testid={testId}
    >
      {labelToRender}
      {children}
      {Array.isArray(errors) && errors.length > 0 ? (
        <div css={theme["field.errors"]} id={auxId}>
          <Grid cols={1} rowsGap={1}>
            {errors.map((error, index) => (
              <Text
                textStyle="body2"
                color="conditional.negative.text"
                key={index}
              >
                {error}
              </Text>
            ))}
          </Grid>
        </div>
      ) : helpText ? (
        <div css={theme["field.helpText"]} id={auxId}>
          <Text textStyle="body2">{helpText}</Text>
        </div>
      ) : null}
    </div>
  );
}

Field.propTypes = {
  fullWidth: PropTypes.bool,
  optional: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  labelId: PropTypes.string,
  labelFor: PropTypes.string,
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  auxId: PropTypes.string.isRequired,
  helpText: PropTypes.node,
  errors: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
};

export default Field;
