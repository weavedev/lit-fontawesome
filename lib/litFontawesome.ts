import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { render, svg, SVGTemplateResult } from 'lit-html';

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
            fill="${color || 'currentColor'}"
        >
            ${
                (Array.isArray(definition.icon[4]) ? definition.icon[4] : [definition.icon[4]]).map(
                    (icon: string): SVGTemplateResult => svg`<path d="${icon}"></path>`,
                )
            }
        </svg>
    `;
}

function uncachedUrlFontawesome(definition: IconDefinition, options?: LitFontawesomeOptions): string {
    const mount: HTMLDivElement = window.document.createElement('div');
    render(litFontawesome(definition, options), mount);

    return `data:image/svg+xml;base64,${btoa(mount.innerHTML.replace(/ {4}|<!---->|\n/g, ''))}`;
}

const cachedURL: Map<IconDefinition, Map<string | undefined, Map<string | undefined, string>>> = new Map();

export function urlFontawesome(definition: IconDefinition, options: LitFontawesomeOptions = {}): string {
    let dataUrl: string | undefined;

    const foundDefinition: Map<string | undefined, Map<string | undefined, string>> | undefined = cachedURL.get(definition);
    let foundClassName: Map<string | undefined, string> | undefined;
    if (foundDefinition !== undefined) {
        foundClassName = foundDefinition.get(options.className);
        if (foundClassName !== undefined) {
            const foundColor: string | undefined = foundClassName.get(options.color);
            if (foundColor !== undefined) {
                dataUrl = foundColor;
            }
        }
    }

    if (dataUrl === undefined) {
        dataUrl = uncachedUrlFontawesome(definition, options);

        if (foundDefinition === undefined) {
            cachedURL.set(definition, new Map([[options.className, new Map([[options.color, dataUrl]])]]));
        } else if (foundClassName === undefined) {
            foundDefinition.set(options.className, new Map([[options.color, dataUrl]]));
        } else {
            foundClassName.set(options.color, dataUrl);
        }
    }

    return dataUrl;
}
