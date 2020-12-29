import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { svg, SVGTemplateResult } from 'lit-html';

export interface LitFontawesomeOptions {
    className?: string;
    color?: string;
}

export function litFontawesome(definition: IconDefinition, { className, color }: LitFontawesomeOptions = {}): SVGTemplateResult {
    return svg`
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="${definition.prefix}"
            data-icon="${definition.iconName}"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 ${definition.icon[0]} ${definition.icon[1]}"
            class="${className || ''} ${definition.prefix}_${definition.iconName} fa-${definition.iconName}"
        >
            <g fill="${color || 'currentColor'}">
                ${
                    (Array.isArray(definition.icon[4]) ? definition.icon[4] : [definition.icon[4]]).map(
                        (icon: string): SVGTemplateResult => svg`<path d="${icon}"></path>`,
                    )
                }
            </g>
        </svg>
    `;
}
