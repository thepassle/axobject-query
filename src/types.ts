export interface AXObjectModelDefinition {
  relatedConcepts: AXObjectModelRelation[];
  type: "window" | "structure" | "widget" | "generic";
}

export interface AXObjectModelRelation {
  module?: "HTML" | "ARIA";
  concept?: AXObjectModelRelationConcept;
}

export interface AXObjectModelRelationConcept {
  name?: string;
  attributes?: AXObjectModelRelationConceptAttribute[];
  constraints?: Array<"scoped to a details element">;
}

export interface AXObjectModelRelationConceptAttribute {
  name: string;
  value?: string;
}

export type AXObjectName =
  | "AbbrRole"
  | "AlertDialogRole"
  | "AlertRole"
  | "AnnotationRole"
  | "ApplicationRole"
  | "ArticleRole"
  | "AudioRole"
  | "BannerRole"
  | "BlockquoteRole"
  | "BusyIndicatorRole"
  | "ButtonRole"
  | "CanvasRole"
  | "CaptionRole"
  | "CellRole"
  | "CheckBoxRole"
  | "ColorWellRole"
  | "ColumnHeaderRole"
  | "ColumnRole"
  | "ComboBoxRole"
  | "ComplementaryRole"
  | "ContentInfoRole"
  | "DateRole"
  | "DateTimeRole"
  | "DefinitionRole"
  | "DescriptionListDetailRole"
  | "DescriptionListRole"
  | "DescriptionListTermRole"
  | "DetailsRole"
  | "DialogRole"
  | "DirectoryRole"
  | "DisclosureTriangleRole"
  | "DivRole"
  | "DocumentRole"
  | "EmbeddedObjectRole"
  | "FeedRole"
  | "FigcaptionRole"
  | "FigureRole"
  | "FooterRole"
  | "FormRole"
  | "GridRole"
  | "GroupRole"
  | "HeadingRole"
  | "IframePresentationalRole"
  | "IframeRole"
  | "IgnoredRole"
  | "ImageMapLinkRole"
  | "ImageMapRole"
  | "ImageRole"
  | "InlineTextBoxRole"
  | "InputTimeRole"
  | "LabelRole"
  | "LegendRole"
  | "LineBreakRole"
  | "LinkRole"
  | "ListBoxOptionRole"
  | "ListBoxRole"
  | "ListItemRole"
  | "ListMarkerRole"
  | "ListRole"
  | "LogRole"
  | "MainRole"
  | "MarkRole"
  | "MarqueeRole"
  | "MathRole"
  | "MenuBarRole"
  | "MenuButtonRole"
  | "MenuItemRole"
  | "MenuItemCheckBoxRole"
  | "MenuItemRadioRole"
  | "MenuListOptionRole"
  | "MenuListPopupRole"
  | "MenuRole"
  | "MeterRole"
  | "NavigationRole"
  | "NoneRole"
  | "NoteRole"
  | "OutlineRole"
  | "ParagraphRole"
  | "PopUpButtonRole"
  | "PreRole"
  | "PresentationalRole"
  | "ProgressIndicatorRole"
  | "RadioButtonRole"
  | "RadioGroupRole"
  | "RegionRole"
  | "RootWebAreaRole"
  | "RowHeaderRole"
  | "RowRole"
  | "RubyRole"
  | "RulerRole"
  | "ScrollAreaRole"
  | "ScrollBarRole"
  | "SeamlessWebAreaRole"
  | "SearchRole"
  | "SearchBoxRole"
  | "SliderRole"
  | "SliderThumbRole"
  | "SpinButtonRole"
  | "SpinButtonPartRole"
  | "SplitterRole"
  | "StaticTextRole"
  | "StatusRole"
  | "SVGRootRole"
  | "SwitchRole"
  | "TabGroupRole"
  | "TabRole"
  | "TableHeaderContainerRole"
  | "TableRole"
  | "TabListRole"
  | "TabPanelRole"
  | "TermRole"
  | "TextAreaRole"
  | "TextFieldRole"
  | "TimeRole"
  | "TimerRole"
  | "ToggleButtonRole"
  | "ToolbarRole"
  | "TreeRole"
  | "TreeGridRole"
  | "TreeItemRole"
  | "UserInterfaceTooltipRole"
  | "VideoRole"
  | "WebAreaRole"
  | "WindowRole";

export interface TAXObjectQueryMap<E, K, V> {
  entries: () => E;
  forEach: (callback: (value: V, key: K, map: E) => void) => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
  keys: () => Array<K>;
  values: () => Array<V>;
  [Symbol.iterator]?: () => Iterator<E>;
}

declare module "dequal/lite" {
  export function dequal(foo: any, bar: any): boolean;
}
