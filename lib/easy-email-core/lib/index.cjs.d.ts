declare var k: any;
declare var _: any;
declare class K {
    static setAutoCompletePath(): {};
    static getBlocks(): any[];
    static registerBlocks(r: any): void;
    static getBlockByType(r: any, i: any): any;
    static getBlocksByType(r: any): any;
    static getAutoCompleteFullPath(): {} | undefined;
    static getAutoCompletePath(r: any, i: any): any;
}
declare const Pt: "email-block";
declare class we {
    static setLocaleData(r: any): void;
    static translate(r: any, i: any): any;
}
declare class le {
    static add(r: any): void;
    static get(r: any): any;
    static getOverrideMap(): any;
}
declare function Cu(e: any): any;
declare const cu: "easy-email-merge-tag-container";
declare var Be: any;
declare var Yt: any;
declare class ke {
    static setTag(r: any): void;
    static generateTagTemplate(r: any): any;
}
declare const ru: {
    [x: number]: any;
};
declare function eu(e: any, r: any): any;
declare const or: Readonly<{
    __proto__: null;
    Accordion: typeof Ju;
    AccordionElement: typeof Zu;
    AccordionText: typeof tr;
    AccordionTitle: typeof er;
    BasicBlock: typeof G;
    BlockRenderer: (e: any) => x.FunctionComponentElement<{
        children?: x.ReactNode;
    }> | null;
    Button: typeof Ku;
    Carousel: typeof ur;
    Column: typeof Zt;
    Divider: typeof Xu;
    Group: typeof Wu;
    Hero: typeof rr;
    Image: typeof Hu;
    MjmlBlock: typeof V;
    Navbar: typeof ir;
    Page: typeof zu;
    Raw: typeof ce;
    Section: typeof Jt;
    Social: typeof ar;
    Spacer: typeof Yu;
    Table: typeof sr;
    Template: typeof nr;
    Text: typeof $u;
    Wrapper: typeof Qu;
}>;
declare function It(e: any): any;
declare function qr(e: any, r: any, i: any): any;
declare function Xt(e: any): any;
declare function Fe(e: any): string;
declare function Oe(e: any, r: any): string;
declare function X(e: any): any;
declare function tu(e: any): number;
declare function st(e: any): string;
declare function lr(e: any): any;
declare function Te(e: any): string;
declare function cr(e: any): any;
declare function at(): string;
declare function dr(e: any, r: any, i: any): {
    insertIndex: number;
    parentIdx: any;
    parent: any;
} | null;
declare function uu(e: any, r: any): any;
declare function hr(e: any, r: any, i: any): any;
declare function ie(e: any): string | undefined;
declare function nt(e: any, r: any): string;
declare function fr(e: any, r: any, i: any): {
    parent: any;
    parentIdx: any;
} | null;
declare function _r(e: any, r: any): any;
declare function gr(e: any): any[];
declare function pr(e: any, r: any): any;
declare function Lr(e: any): boolean;
declare function Rr(e: any): boolean;
declare function ae(e: any, r: any): any;
declare function Or(e: any): any;
declare const it: {
    [x: number]: {
        readonly name: any;
        type: any;
        create: (e: any) => any;
        validParentType: any[];
        render(e: any): x.FunctionComponentElement<any>;
    } | {
        readonly name: any;
        type: any;
        create: (e: any) => any;
        validParentType: never[];
        render(e: any): x.FunctionComponentElement<{
            children?: x.ReactNode;
        }>;
    };
};
declare function U(r: any, i: any): any;
declare function Ju(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Zu(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function tr(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function er(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function G(e: any): x.FunctionComponentElement<{
    children?: x.ReactNode;
}>;
import x = require("react");
declare function Ku(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function ur(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Zt(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Xu(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Wu(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function rr(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Hu(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function V({ idx: e, value: r, type: i, attributes: t, children: a }: {
    idx: any;
    value: any;
    type: any;
    attributes: any;
    children: any;
}): x.FunctionComponentElement<{
    children?: x.ReactNode;
}>;
declare function ir(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function zu(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function ce(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Jt(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function ar(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Yu(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function sr(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function nr(e: any): any;
declare function $u(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Qu(e: any): x.DetailedReactHTMLElement<x.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export { k as AdvancedType, _ as BasicType, K as BlockManager, Pt as EMAIL_BLOCK_CLASS_NAME, we as I18nManager, le as ImageManager, Cu as JsonToMjml, cu as MERGE_TAG_CLASS_NAME, Be as Operator, Yt as OperatorSymbol, ke as TemplateEngineManager, ru as advancedBlocks, eu as ancestorOf, or as components, It as createBlock, qr as createBlockDataByType, Xt as createCustomBlock, Fe as getAdapterAttributesString, Oe as getChildIdx, X as getImg, tu as getIndexByIdx, st as getNodeIdxClassName, lr as getNodeIdxFromClassName, Te as getNodeTypeClassName, cr as getNodeTypeFromClassName, at as getPageIdx, dr as getParenRelativeByType, uu as getParentByIdx, hr as getParentByType, ie as getParentIdx, nt as getPreviewClassName, fr as getSameParent, _r as getSiblingIdx, gr as getValidChildBlocks, pr as getValueByIdx, Lr as isAdvancedBlock, Rr as isValidBlockData, ae as mergeBlock, Or as parseReactBlockToBlockData, it as standardBlocks, U as t };
