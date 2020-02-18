import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M4.6484 1.1914c0.1367 0 0.2539 0.0483 0.3516 0.1445c0.0996 0.0967 0.1484 0.2124 0.1484 0.3477 c0 0.146-0.0469 0.2656-0.1406 0.3594l-2.125 2.1172C2.7842 4.2593 2.667 4.3086 2.5312 4.3086 c-0.1406 0-0.2607-0.0493-0.3594-0.1484L0.7578 2.7461C0.7109 2.6992 0.6758 2.6445 0.6523 2.582S0.6172 2.457 0.6172 2.3945 c0-0.1353 0.0498-0.2524 0.1484-0.3516c0.0986-0.0986 0.2158-0.1484 0.3516-0.1484S1.3701 1.9443 1.4688 2.043l1.0625 1.0547 L4.2969 1.332C4.3906 1.2383 4.5078 1.1914 4.6484 1.1914z M4.6484 8.6914c0.1367 0 0.2539 0.0483 0.3516 0.1445 c0.0996 0.0967 0.1484 0.2124 0.1484 0.3477c0 0.146-0.0469 0.2656-0.1406 0.3594l-2.125 2.1172 c-0.0986 0.0996-0.2158 0.1484-0.3516 0.1484c-0.1406 0-0.2607-0.0488-0.3594-0.1484l-1.4141-1.4141 c-0.0469-0.0469-0.082-0.1016-0.1055-0.1641S0.6172 9.957 0.6172 9.8945c0-0.1353 0.0498-0.2524 0.1484-0.3516 c0.0986-0.0986 0.2158-0.1484 0.3516-0.1484S1.3701 9.4443 1.4688 9.543l1.0625 1.0547L4.2969 8.832 C4.3906 8.7383 4.5078 8.6914 4.6484 8.6914z M14.8828 1.8086c0.1367 0 0.2539 0.0498 0.3516 0.1484 c0.0996 0.0991 0.1484 0.2163 0.1484 0.3516c0 0.1357-0.0488 0.2529-0.1484 0.3516c-0.0977 0.0991-0.2148 0.1484-0.3516 0.1484h-8 c-0.1348 0-0.252-0.0493-0.3516-0.1484C6.4336 2.5615 6.3828 2.4443 6.3828 2.3086c0-0.1353 0.0508-0.2524 0.1484-0.3516 C6.6309 1.8584 6.748 1.8086 6.8828 1.8086H14.8828z M14.8828 5.8086c0.1367 0 0.2539 0.0498 0.3516 0.1484 c0.0996 0.0991 0.1484 0.2163 0.1484 0.3516c0 0.1357-0.0488 0.2529-0.1484 0.3516c-0.0977 0.0991-0.2148 0.1484-0.3516 0.1484h-8 c-0.1348 0-0.252-0.0493-0.3516-0.1484C6.4336 6.5615 6.3828 6.4443 6.3828 6.3086c0-0.1353 0.0508-0.2524 0.1484-0.3516 C6.6309 5.8584 6.748 5.8086 6.8828 5.8086H14.8828z M14.8828 9.8086c0.1367 0 0.2539 0.0498 0.3516 0.1484 c0.0996 0.0996 0.1484 0.2168 0.1484 0.3516c0 0.1357-0.0488 0.2529-0.1484 0.3516c-0.0977 0.0996-0.2148 0.1484-0.3516 0.1484h-8 c-0.1348 0-0.252-0.0488-0.3516-0.1484c-0.0977-0.0986-0.1484-0.2158-0.1484-0.3516c0-0.1348 0.0508-0.252 0.1484-0.3516 C6.6309 9.8584 6.748 9.8086 6.8828 9.8086H14.8828z M14.8828 13.8086c0.1367 0 0.2539 0.0498 0.3516 0.1484 c0.0996 0.0996 0.1484 0.2168 0.1484 0.3516c0 0.1357-0.0488 0.2529-0.1484 0.3516c-0.0977 0.0996-0.2148 0.1484-0.3516 0.1484h-8 c-0.1348 0-0.252-0.0488-0.3516-0.1484c-0.0977-0.0986-0.1484-0.2158-0.1484-0.3516c0-0.1348 0.0508-0.252 0.1484-0.3516 c0.0996-0.0986 0.2168-0.1484 0.3516-0.1484H14.8828z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M4.3984 1.3828c0.1367 0 0.2539 0.0483 0.3516 0.1445C4.8496 1.624 4.8984 1.7397 4.8984 1.875 c0 0.146-0.0469 0.2656-0.1406 0.3594l-2.125 2.1172C2.5342 4.4507 2.417 4.5 2.2812 4.5c-0.1406 0-0.2607-0.0493-0.3594-0.1484 L0.5078 2.9375C0.4141 2.8438 0.3672 2.7266 0.3672 2.5859c0-0.1353 0.0498-0.2524 0.1484-0.3516 c0.0986-0.0986 0.2158-0.1484 0.3516-0.1484s0.2529 0.0498 0.3516 0.1484l1.0625 1.0547l1.7656-1.7656 C4.1406 1.4297 4.2578 1.3828 4.3984 1.3828z M4.3984 8.8828c0.1367 0 0.2539 0.0488 0.3516 0.1445 C4.8496 9.124 4.8984 9.2402 4.8984 9.375c0 0.1465-0.0469 0.2656-0.1406 0.3594l-2.125 2.1172C2.5342 11.9512 2.417 12 2.2812 12 c-0.1406 0-0.2607-0.0488-0.3594-0.1484l-1.4141-1.4141c-0.0938-0.0938-0.1406-0.2109-0.1406-0.3516 c0-0.1348 0.0498-0.252 0.1484-0.3516c0.0986-0.0986 0.2158-0.1484 0.3516-0.1484s0.2529 0.0498 0.3516 0.1484l1.0625 1.0547 l1.7656-1.7656C4.1406 8.9297 4.2578 8.8828 4.3984 8.8828z M14.6328 1c0.1406 0 0.2734 0.0264 0.3945 0.0781 c0.123 0.0522 0.2285 0.1226 0.3164 0.2109c0.0898 0.0889 0.1602 0.1943 0.2109 0.3164C15.6074 1.728 15.6328 1.8594 15.6328 2 s-0.0254 0.271-0.0781 0.3906c-0.0508 0.1201-0.123 0.2256-0.2148 0.3164c-0.0898 0.0913-0.1953 0.1631-0.3164 0.2148 C14.9043 2.9741 14.7734 3 14.6328 3h-8C6.498 3 6.3691 2.9741 6.2461 2.9219C6.125 2.8701 6.0176 2.7983 5.9258 2.707 C5.8359 2.6162 5.7637 2.5093 5.7109 2.3867C5.6602 2.2646 5.6328 2.1357 5.6328 2c0-0.1406 0.0273-0.2705 0.0781-0.3906 c0.0527-0.1196 0.125-0.2251 0.2148-0.3164C6.0176 1.2021 6.123 1.1304 6.2422 1.0781C6.3633 1.0264 6.4922 1 6.6328 1H14.6328z M14.6328 5c0.1406 0 0.2734 0.0264 0.3945 0.0781c0.123 0.0522 0.2285 0.1226 0.3164 0.2109 c0.0898 0.0889 0.1602 0.1943 0.2109 0.3164C15.6074 5.728 15.6328 5.8594 15.6328 6s-0.0254 0.271-0.0781 0.3906 c-0.0508 0.1201-0.123 0.2256-0.2148 0.3164c-0.0898 0.0913-0.1953 0.1631-0.3164 0.2148C14.9043 6.9741 14.7734 7 14.6328 7h-8 C6.498 7 6.3691 6.9741 6.2461 6.9219C6.125 6.8701 6.0176 6.7983 5.9258 6.707C5.8359 6.6162 5.7637 6.5093 5.7109 6.3867 C5.6602 6.2646 5.6328 6.1357 5.6328 6c0-0.1406 0.0273-0.2705 0.0781-0.3906c0.0527-0.1196 0.125-0.2251 0.2148-0.3164 C6.0176 5.2021 6.123 5.1304 6.2422 5.0781C6.3633 5.0264 6.4922 5 6.6328 5H14.6328z M14.6328 9 c0.1406 0 0.2734 0.0264 0.3945 0.0781c0.123 0.0527 0.2285 0.123 0.3164 0.2109c0.0898 0.0889 0.1602 0.1943 0.2109 0.3164 c0.0527 0.123 0.0781 0.2539 0.0781 0.3945s-0.0254 0.2715-0.0781 0.3906c-0.0508 0.1201-0.123 0.2256-0.2148 0.3164 c-0.0898 0.0918-0.1953 0.1631-0.3164 0.2148C14.9043 10.9746 14.7734 11 14.6328 11h-8c-0.1348 0-0.2637-0.0254-0.3867-0.0781 c-0.1211-0.0518-0.2285-0.123-0.3203-0.2148c-0.0898-0.0908-0.1621-0.1973-0.2148-0.3203C5.6602 10.2646 5.6328 10.1357 5.6328 10 c0-0.1406 0.0273-0.2705 0.0781-0.3906c0.0527-0.1191 0.125-0.2246 0.2148-0.3164C6.0176 9.2021 6.123 9.1309 6.2422 9.0781 C6.3633 9.0264 6.4922 9 6.6328 9H14.6328z M14.6328 13c0.1406 0 0.2734 0.0264 0.3945 0.0781 c0.123 0.0527 0.2285 0.123 0.3164 0.2109c0.0898 0.0889 0.1602 0.1943 0.2109 0.3164c0.0527 0.123 0.0781 0.2539 0.0781 0.3945 s-0.0254 0.2715-0.0781 0.3906c-0.0508 0.1201-0.123 0.2256-0.2148 0.3164c-0.0898 0.0918-0.1953 0.1631-0.3164 0.2148 C14.9043 14.9746 14.7734 15 14.6328 15h-8c-0.1348 0-0.2637-0.0254-0.3867-0.0781c-0.1211-0.0518-0.2285-0.123-0.3203-0.2148 c-0.0898-0.0908-0.1621-0.1973-0.2148-0.3203C5.6602 14.2646 5.6328 14.1357 5.6328 14c0-0.1406 0.0273-0.2705 0.0781-0.3906 c0.0527-0.1191 0.125-0.2246 0.2148-0.3164c0.0918-0.0908 0.1973-0.1621 0.3164-0.2148C6.3633 13.0264 6.4922 13 6.6328 13H14.6328 z"
        />
      </g>
    </svg>
  ),
  styles: {}
} as TeamsSvgIconSpec;
