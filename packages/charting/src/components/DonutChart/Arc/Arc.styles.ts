import { IArcProps, IArcStyles } from './Arc.types';
import { DefaultPalette, FontSizes } from 'office-ui-fabric-react/lib/Styling';

export const getStyles = (props: IArcProps): IArcStyles => {
  const { color, href } = props;
  return {
    root: {
      fill: color,
      cursor: href ? 'pointer' : 'default',
      stroke: DefaultPalette.white,
      strokeWidth: 2,
    },
    insideDonutString: {
      fontSize: FontSizes.large,
    },
  };
};
