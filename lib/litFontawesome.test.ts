import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { render } from 'lit-html';
import { litFontawesome, urlFontawesome } from './litFontawesome';

test('Should render from definition with simple path', () => {
    const mount: HTMLDivElement = window.document.createElement('div');
    render(
        litFontawesome({
            iconName: '500px',
            prefix: 'far',
            icon: [
                99001,
                90902,
                [],
                '',
                '__test_svgPathData__',
            ],
        }),
        mount,
    );

    // tslint:disable-next-line:ter-max-len
    expect(mount.innerHTML).toEqual('<!---->\n        <svg aria-hidden=\"true\" focusable=\"false\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" data-prefix=\"far\" data-icon=\"500px\" viewBox=\"0 0 99001 90902\" class=\" far_500px fa-500px\" fill=\"currentColor\">\n            <!----><path d=\"__test_svgPathData__\"></path><!---->\n        </svg>\n    <!---->');
});

test('Should render from definition with complex paths', () => {
    const mount: HTMLDivElement = window.document.createElement('div');
    render(
        litFontawesome({
            iconName: '500px',
            prefix: 'far',
            icon: [
                99001,
                90902,
                [],
                '',
                [
                    '__test_svgPathData_1__',
                    '__test_svgPathData_2__',
                    '__test_svgPathData_3__',
                ],
            ],
        }),
        mount,
    );

    // tslint:disable-next-line:ter-max-len
    expect(mount.innerHTML).toEqual('<!---->\n        <svg aria-hidden=\"true\" focusable=\"false\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" data-prefix=\"far\" data-icon=\"500px\" viewBox=\"0 0 99001 90902\" class=\" far_500px fa-500px\" fill=\"currentColor\">\n            <!----><path d=\"__test_svgPathData_1__"></path><!----><path d="__test_svgPathData_2__"></path><!----><path d="__test_svgPathData_3__\"></path><!---->\n        </svg>\n    <!---->');
});

test('Should render coffee', () => {
    const mount: HTMLDivElement = window.document.createElement('div');
    render(litFontawesome(faCoffee), mount);

    // tslint:disable-next-line:ter-max-len
    expect(mount.innerHTML).toEqual('<!---->\n        <svg aria-hidden=\"true\" focusable=\"false\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" data-prefix=\"fas\" data-icon=\"coffee\" viewBox=\"0 0 640 512\" class=\" fas_coffee fa-coffee\" fill=\"currentColor\">\n            <!----><path d=\"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z\"></path><!---->\n        </svg>\n    <!---->');
});

test('Should render coffee with custom color', () => {
    const mount: HTMLDivElement = window.document.createElement('div');
    render(litFontawesome(faCoffee, { color: 'palevioletred' }), mount);

    // tslint:disable-next-line:ter-max-len
    expect(mount.innerHTML).toEqual('<!---->\n        <svg aria-hidden=\"true\" focusable=\"false\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" data-prefix=\"fas\" data-icon=\"coffee\" viewBox=\"0 0 640 512\" class=\" fas_coffee fa-coffee\" fill=\"palevioletred\">\n            <!----><path d=\"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z\"></path><!---->\n        </svg>\n    <!---->');
});

test('Should render coffee with custom class', () => {
    const mount: HTMLDivElement = window.document.createElement('div');
    render(litFontawesome(faCoffee, { className: 'coffee-time' }), mount);

    // tslint:disable-next-line:ter-max-len
    expect(mount.innerHTML).toEqual('<!---->\n        <svg aria-hidden=\"true\" focusable=\"false\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" data-prefix=\"fas\" data-icon=\"coffee\" viewBox=\"0 0 640 512\" class=\"coffee-time fas_coffee fa-coffee\" fill=\"currentColor\">\n            <!----><path d=\"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z\"></path><!---->\n        </svg>\n    <!---->');
});

test('Should render coffee with custom class and color', () => {
    const mount: HTMLDivElement = window.document.createElement('div');
    render(litFontawesome(faCoffee, { color: 'palevioletred', className: 'coffee-time' }), mount);

    // tslint:disable-next-line:ter-max-len
    expect(mount.innerHTML).toEqual('<!---->\n        <svg aria-hidden=\"true\" focusable=\"false\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" data-prefix=\"fas\" data-icon=\"coffee\" viewBox=\"0 0 640 512\" class=\"coffee-time fas_coffee fa-coffee\" fill=\"palevioletred\">\n            <!----><path d=\"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z\"></path><!---->\n        </svg>\n    <!---->');
});

test('Should generate data-url from svg', () => {
    // tslint:disable-next-line:ter-max-len
    expect(urlFontawesome(faCoffee)).toEqual('data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY29mZmVlIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiIgY2xhc3M9IiBmYXNfY29mZmVlIGZhLWNvZmZlZSIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTkyIDM4NGgxOTJjNTMgMCA5Ni00MyA5Ni05NmgzMmM3MC42IDAgMTI4LTU3LjQgMTI4LTEyOFM1ODIuNiAzMiA1MTIgMzJIMTIwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHYyMzJjMCA1MyA0MyA5NiA5NiA5NnpNNTEyIDk2YzM1LjMgMCA2NCAyOC43IDY0IDY0cy0yOC43IDY0LTY0IDY0aC0zMlY5NmgzMnptNDcuNyAzODRINDguM2MtNDcuNiAwLTYxLTY0LTM2LTY0aDU4My4zYzI1IDAgMTEuOCA2NC0zNS45IDY0eiI+PC9wYXRoPjwvc3ZnPg==');
});

test('Should generate data-url from svg with custom class', () => {
    // tslint:disable-next-line:ter-max-len
    expect(urlFontawesome(faCoffee, { className: 'coffee-time' })).toEqual('data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY29mZmVlIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiIgY2xhc3M9ImNvZmZlZS10aW1lIGZhc19jb2ZmZWUgZmEtY29mZmVlIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xOTIgMzg0aDE5MmM1MyAwIDk2LTQzIDk2LTk2aDMyYzcwLjYgMCAxMjgtNTcuNCAxMjgtMTI4UzU4Mi42IDMyIDUxMiAzMkgxMjBjLTEzLjMgMC0yNCAxMC43LTI0IDI0djIzMmMwIDUzIDQzIDk2IDk2IDk2ek01MTIgOTZjMzUuMyAwIDY0IDI4LjcgNjQgNjRzLTI4LjcgNjQtNjQgNjRoLTMyVjk2aDMyem00Ny43IDM4NEg0OC4zYy00Ny42IDAtNjEtNjQtMzYtNjRoNTgzLjNjMjUgMCAxMS44IDY0LTM1LjkgNjR6Ij48L3BhdGg+PC9zdmc+');
});

test('Should generate data-url from svg with custom color', () => {
    // tslint:disable-next-line:ter-max-len
    expect(urlFontawesome(faCoffee, { color: 'palevioletred' })).toEqual('data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY29mZmVlIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiIgY2xhc3M9IiBmYXNfY29mZmVlIGZhLWNvZmZlZSIgZmlsbD0icGFsZXZpb2xldHJlZCI+PHBhdGggZD0iTTE5MiAzODRoMTkyYzUzIDAgOTYtNDMgOTYtOTZoMzJjNzAuNiAwIDEyOC01Ny40IDEyOC0xMjhTNTgyLjYgMzIgNTEyIDMySDEyMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR2MjMyYzAgNTMgNDMgOTYgOTYgOTZ6TTUxMiA5NmMzNS4zIDAgNjQgMjguNyA2NCA2NHMtMjguNyA2NC02NCA2NGgtMzJWOTZoMzJ6bTQ3LjcgMzg0SDQ4LjNjLTQ3LjYgMC02MS02NC0zNi02NGg1ODMuM2MyNSAwIDExLjggNjQtMzUuOSA2NHoiPjwvcGF0aD48L3N2Zz4=');
});

test('Should generate data-url from svg with custom class and color', () => {
    // tslint:disable-next-line:ter-max-len
    expect(urlFontawesome(faCoffee, { className: 'coffee-time', color: 'palevioletred' })).toEqual('data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY29mZmVlIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiIgY2xhc3M9ImNvZmZlZS10aW1lIGZhc19jb2ZmZWUgZmEtY29mZmVlIiBmaWxsPSJwYWxldmlvbGV0cmVkIj48cGF0aCBkPSJNMTkyIDM4NGgxOTJjNTMgMCA5Ni00MyA5Ni05NmgzMmM3MC42IDAgMTI4LTU3LjQgMTI4LTEyOFM1ODIuNiAzMiA1MTIgMzJIMTIwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHYyMzJjMCA1MyA0MyA5NiA5NiA5NnpNNTEyIDk2YzM1LjMgMCA2NCAyOC43IDY0IDY0cy0yOC43IDY0LTY0IDY0aC0zMlY5NmgzMnptNDcuNyAzODRINDguM2MtNDcuNiAwLTYxLTY0LTM2LTY0aDU4My4zYzI1IDAgMTEuOCA2NC0zNS45IDY0eiI+PC9wYXRoPjwvc3ZnPg==');
});

test('Should generate data-url from svg consistantly', () => {
    // tslint:disable-next-line:ter-max-len
    expect(urlFontawesome(faCoffee)).toEqual(urlFontawesome(faCoffee));
    expect(urlFontawesome(faCoffee, { className: 'someClassName' })).toEqual(urlFontawesome(faCoffee, { className: 'someClassName' }));
    expect(urlFontawesome(faCoffee, { color: 'palevioletred' })).toEqual(urlFontawesome(faCoffee, { color: 'palevioletred' }));
    expect(
        urlFontawesome(faCoffee, { className: 'someClassName', color: 'palevioletred' }),
    ).toEqual(
        urlFontawesome(faCoffee, { className: 'someClassName', color: 'palevioletred' }),
    );
});
