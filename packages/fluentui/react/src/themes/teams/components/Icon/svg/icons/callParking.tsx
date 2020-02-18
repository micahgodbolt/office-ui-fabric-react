import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M14.0936,10.4453c0.2446,0.2397,0.4814,0.5967,0.7109,1.0703c0.3174,0.6201,0.4766,1.1929,0.4766,1.7188
            c0,0.4116-0.1094,0.7812-0.3281,1.1094c-0.1094,0.1616-0.2334,0.3101-0.3711,0.4453c-0.1382,0.1357-0.2227,0.2188-0.2539,0.25
            c-0.1147,0.1094-0.1992,0.2031-0.2539,0.2812s-0.082,0.1538-0.082,0.2266c0,0.0366,0.0439,0.1279,0.1328,0.2734
            c0.208,0.3491,0.4609,0.7266,0.7578,1.1328c0.2812,0.4014,0.5674,0.7812,0.8594,1.1406c0.1094,0.1357,0.1899,0.2285,0.2422,0.2773
            c0.0518,0.0498,0.1143,0.0977,0.1875,0.1445c0.0674,0.042,0.1436,0.0625,0.2266,0.0625c0.1143,0,0.2266-0.0205,0.3359-0.0625
            c0.1094-0.041,0.2686-0.1094,0.4766-0.2031c0.1875-0.083,0.3506-0.1465,0.4883-0.1914c0.1377-0.0439,0.2822-0.0664,0.4336-0.0664
            c0.2031,0,0.4268,0.0371,0.6719,0.1094c0.2451,0.0732,0.4922,0.1777,0.7422,0.3125c0.2451,0.1357,0.4844,0.293,0.7188,0.4727
            s0.4424,0.3711,0.625,0.5742c0.4014,0.4531,0.6016,0.8877,0.6016,1.3047c0,0.2295-0.0674,0.4697-0.2031,0.7227
            s-0.3154,0.4912-0.5391,0.7148s-0.4639,0.4023-0.7188,0.5352S19.534,23,19.3045,23c-0.1768,0-0.3232-0.0205-0.4375-0.0625
            c-1.6045-0.4736-3.0342-1.2109-4.2891-2.2109c-1.2764-1.0156-2.2686-2.2207-2.9766-3.6172
            c-0.7397-1.4531-1.1094-3.0156-1.1094-4.6875c0-0.2969,0.0063-0.5259,0.0195-0.6875c0.0127-0.1611,0.0454-0.3071,0.0977-0.4375
            c0.0625-0.1455,0.1533-0.2822,0.2734-0.4102c0.1196-0.1274,0.2891-0.2588,0.5078-0.3945c0.2393-0.1406,0.4868-0.2549,0.7422-0.3438
            C12.4451,10.0498,12.7107,10,12.9295,10C13.3929,10,13.7811,10.1484,14.0936,10.4453z M12.3436,11.0703
            c-0.2397,0.0938-0.4219,0.1826-0.5469,0.2656c-0.1304,0.0991-0.2217,0.2109-0.2734,0.3359
            c-0.0366,0.0889-0.0547,0.2344-0.0547,0.4375c0,2.4741,0.6978,4.5679,2.0938,6.2812c1.2969,1.6045,3.1592,2.8252,5.5859,3.6641
            c0.0469,0.0156,0.0986,0.0234,0.1562,0.0234c0.0938,0,0.21-0.0439,0.3477-0.1328s0.2725-0.2031,0.4023-0.3438
            c0.1357-0.1455,0.2451-0.2861,0.3281-0.4219s0.125-0.2529,0.125-0.3516c0-0.2344-0.1533-0.5049-0.4609-0.8125
            c-0.2861-0.2812-0.6172-0.5205-0.9922-0.7188c-0.1768-0.0938-0.3477-0.168-0.5117-0.2227s-0.3037-0.082-0.418-0.082
            c-0.1406,0-0.2734,0.0215-0.3984,0.0625c-0.125,0.042-0.2783,0.1045-0.4609,0.1875c-0.1826,0.084-0.3369,0.1475-0.4648,0.1914
            C16.6727,19.4785,16.5389,19.5,16.3983,19.5c-0.2344,0-0.4609-0.0518-0.6797-0.1562c-0.2188-0.1035-0.3984-0.25-0.5391-0.4375
            l-1.8984-2.5547c-0.1772-0.2393-0.2656-0.5078-0.2656-0.8047c0-0.3071,0.1118-0.5908,0.3359-0.8516
            c0.0938-0.1143,0.1953-0.2236,0.3047-0.3281c0.2656-0.2446,0.4478-0.4736,0.5469-0.6875c0.0625-0.1353,0.0938-0.2891,0.0938-0.4609
            c0-0.2446-0.0601-0.5415-0.1797-0.8906c-0.146-0.4111-0.3047-0.7314-0.4766-0.9609c-0.2295-0.2969-0.4688-0.4453-0.7188-0.4453
            C12.7859,10.9219,12.5936,10.9717,12.3436,11.0703z M18.9998,15h-1V9h3c0.8037,0,2,0.5327,2,2s-1.1963,2-2,2h-2V15z M18.9998,12h2
            c0.2314-0.0039,1-0.0869,1-1c0-0.9517-0.833-1-1-1h-2V12z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M14.0936,10.4453c0.2446,0.2397,0.4814,0.5967,0.7109,1.0703c0.3174,0.6201,0.4766,1.1929,0.4766,1.7188
            c0,0.4116-0.1094,0.7812-0.3281,1.1094c-0.1094,0.1616-0.2334,0.3101-0.3711,0.4453c-0.1382,0.1357-0.2227,0.2188-0.2539,0.25
            c-0.1147,0.1094-0.1992,0.2031-0.2539,0.2812s-0.082,0.1538-0.082,0.2266c0,0.0366,0.0439,0.1279,0.1328,0.2734
            c0.208,0.3491,0.4609,0.7266,0.7578,1.1328c0.2812,0.4014,0.5674,0.7812,0.8594,1.1406c0.1094,0.1357,0.1899,0.2285,0.2422,0.2773
            c0.0518,0.0498,0.1143,0.0977,0.1875,0.1445c0.0674,0.042,0.1436,0.0625,0.2266,0.0625c0.1143,0,0.2266-0.0205,0.3359-0.0625
            c0.1094-0.041,0.2686-0.1094,0.4766-0.2031c0.1875-0.083,0.3506-0.1465,0.4883-0.1914c0.1377-0.0439,0.2822-0.0664,0.4336-0.0664
            c0.2031,0,0.4268,0.0371,0.6719,0.1094c0.2451,0.0732,0.4922,0.1777,0.7422,0.3125c0.2451,0.1357,0.4844,0.293,0.7188,0.4727
            s0.4424,0.3711,0.625,0.5742c0.4014,0.4531,0.6016,0.8877,0.6016,1.3047c0,0.2295-0.0674,0.4697-0.2031,0.7227
            s-0.3154,0.4912-0.5391,0.7148s-0.4639,0.4023-0.7188,0.5352S19.534,23,19.3045,23c-0.1768,0-0.3232-0.0205-0.4375-0.0625
            c-1.6045-0.4736-3.0342-1.2109-4.2891-2.2109c-1.2764-1.0156-2.2686-2.2207-2.9766-3.6172
            c-0.7397-1.4531-1.1094-3.0156-1.1094-4.6875c0-0.2969,0.0063-0.5259,0.0195-0.6875c0.0127-0.1611,0.0454-0.3071,0.0977-0.4375
            c0.0625-0.1455,0.1533-0.2822,0.2734-0.4102c0.1196-0.1274,0.2891-0.2588,0.5078-0.3945c0.2393-0.1406,0.4868-0.2549,0.7422-0.3438
            C12.4451,10.0498,12.7107,10,12.9295,10C13.3929,10,13.7811,10.1484,14.0936,10.4453z M18.9998,15h-1V9h3c0.8037,0,2,0.5327,2,2
            s-1.1963,2-2,2h-2V15z M18.9998,12h2c0.2314-0.0039,1-0.0869,1-1c0-0.9517-0.833-1-1-1h-2V12z"
      />
    </svg>
  ),
  styles: {}
} as TeamsSvgIconSpec;
