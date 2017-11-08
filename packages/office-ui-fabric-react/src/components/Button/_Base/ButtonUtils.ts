import { IButtonProps } from '../Button.Props';

export function getAriaProps(props: IButtonProps, nativeProps: {}) {
  let ariaDescribedBy: string | null = null;
  let ariaLabeledBy: string | null = null;
  let nativeAriaDescribedBy: string | null = (nativeProps as any)['aria-describedby'];
  let nativeAriaLabeledBy: string | null = (nativeProps as any)['aria-labelledby'];

  if (props.ariaDescription) {
    ariaDescribedBy = this._ariaDescriptionId;
  } else if (props.description) {
    ariaDescribedBy = this._descriptionId;
  } else if (nativeAriaDescribedBy) {
    ariaDescribedBy = nativeAriaDescribedBy;
  }

  if (!props.ariaLabel) {
    if (nativeAriaLabeledBy) {
      ariaLabeledBy = nativeAriaLabeledBy;
    } else if (ariaDescribedBy) {
      ariaLabeledBy = props.text ? this._labelId : null;
    }
  }

  return {
    ariaDescribedBy,
    ariaLabeledBy,
    ariaLabel: props.ariaLabel,
    ariaHidden: props.ariaHidden,
    ariaDescription: props.ariaDescription
  };
}