import { IMenuButtonBaseStyleProps, IMenuButtonBaseStyles } from '../_Base/MenuButton.Base.Props';

export const getStyles = (props: IMenuButtonBaseStyleProps): IMenuButtonBaseStyles => {
  const { theme, checked, disabled, expanded } = props;
  const { palette, fonts } = theme;

  return ({
    root: [
      'ms-TestButton',
      {
        background: expanded ? 'Blue' : 'red'
      },
      props.className
    ],
    description: [
      {
        color: checked ? 'pink' : 'white',
        selectors: {
          ':hover': {
            color: checked ? 'red' : '',
          }
        }
      },
      disabled && {
        color: 'green'
      }
    ]
  });
};
