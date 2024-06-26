"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iterationDecorator_js_1 = __importDefault(require("./util/iterationDecorator.js"));
const AbbrRole_js_1 = __importDefault(require("./etc/objects/AbbrRole.js"));
const AlertDialogRole_js_1 = __importDefault(require("./etc/objects/AlertDialogRole.js"));
const AlertRole_js_1 = __importDefault(require("./etc/objects/AlertRole.js"));
const AnnotationRole_js_1 = __importDefault(require("./etc/objects/AnnotationRole.js"));
const ApplicationRole_js_1 = __importDefault(require("./etc/objects/ApplicationRole.js"));
const ArticleRole_js_1 = __importDefault(require("./etc/objects/ArticleRole.js"));
const AudioRole_js_1 = __importDefault(require("./etc/objects/AudioRole.js"));
const BannerRole_js_1 = __importDefault(require("./etc/objects/BannerRole.js"));
const BlockquoteRole_js_1 = __importDefault(require("./etc/objects/BlockquoteRole.js"));
const BusyIndicatorRole_js_1 = __importDefault(require("./etc/objects/BusyIndicatorRole.js"));
const ButtonRole_js_1 = __importDefault(require("./etc/objects/ButtonRole.js"));
const CanvasRole_js_1 = __importDefault(require("./etc/objects/CanvasRole.js"));
const CaptionRole_js_1 = __importDefault(require("./etc/objects/CaptionRole.js"));
const CellRole_js_1 = __importDefault(require("./etc/objects/CellRole.js"));
const CheckBoxRole_js_1 = __importDefault(require("./etc/objects/CheckBoxRole.js"));
const ColorWellRole_js_1 = __importDefault(require("./etc/objects/ColorWellRole.js"));
const ColumnHeaderRole_js_1 = __importDefault(require("./etc/objects/ColumnHeaderRole.js"));
const ColumnRole_js_1 = __importDefault(require("./etc/objects/ColumnRole.js"));
const ComboBoxRole_js_1 = __importDefault(require("./etc/objects/ComboBoxRole.js"));
const ComplementaryRole_js_1 = __importDefault(require("./etc/objects/ComplementaryRole.js"));
const ContentInfoRole_js_1 = __importDefault(require("./etc/objects/ContentInfoRole.js"));
const DateRole_js_1 = __importDefault(require("./etc/objects/DateRole.js"));
const DateTimeRole_js_1 = __importDefault(require("./etc/objects/DateTimeRole.js"));
const DefinitionRole_js_1 = __importDefault(require("./etc/objects/DefinitionRole.js"));
const DescriptionListDetailRole_js_1 = __importDefault(require("./etc/objects/DescriptionListDetailRole.js"));
const DescriptionListRole_js_1 = __importDefault(require("./etc/objects/DescriptionListRole.js"));
const DescriptionListTermRole_js_1 = __importDefault(require("./etc/objects/DescriptionListTermRole.js"));
const DetailsRole_js_1 = __importDefault(require("./etc/objects/DetailsRole.js"));
const DialogRole_js_1 = __importDefault(require("./etc/objects/DialogRole.js"));
const DirectoryRole_js_1 = __importDefault(require("./etc/objects/DirectoryRole.js"));
const DisclosureTriangleRole_js_1 = __importDefault(require("./etc/objects/DisclosureTriangleRole.js"));
const DivRole_js_1 = __importDefault(require("./etc/objects/DivRole.js"));
const DocumentRole_js_1 = __importDefault(require("./etc/objects/DocumentRole.js"));
const EmbeddedObjectRole_js_1 = __importDefault(require("./etc/objects/EmbeddedObjectRole.js"));
const FeedRole_js_1 = __importDefault(require("./etc/objects/FeedRole.js"));
const FigcaptionRole_js_1 = __importDefault(require("./etc/objects/FigcaptionRole.js"));
const FigureRole_js_1 = __importDefault(require("./etc/objects/FigureRole.js"));
const FooterRole_js_1 = __importDefault(require("./etc/objects/FooterRole.js"));
const FormRole_js_1 = __importDefault(require("./etc/objects/FormRole.js"));
const GridRole_js_1 = __importDefault(require("./etc/objects/GridRole.js"));
const GroupRole_js_1 = __importDefault(require("./etc/objects/GroupRole.js"));
const HeadingRole_js_1 = __importDefault(require("./etc/objects/HeadingRole.js"));
const IframePresentationalRole_js_1 = __importDefault(require("./etc/objects/IframePresentationalRole.js"));
const IframeRole_js_1 = __importDefault(require("./etc/objects/IframeRole.js"));
const IgnoredRole_js_1 = __importDefault(require("./etc/objects/IgnoredRole.js"));
const ImageMapLinkRole_js_1 = __importDefault(require("./etc/objects/ImageMapLinkRole.js"));
const ImageMapRole_js_1 = __importDefault(require("./etc/objects/ImageMapRole.js"));
const ImageRole_js_1 = __importDefault(require("./etc/objects/ImageRole.js"));
const InlineTextBoxRole_js_1 = __importDefault(require("./etc/objects/InlineTextBoxRole.js"));
const InputTimeRole_js_1 = __importDefault(require("./etc/objects/InputTimeRole.js"));
const LabelRole_js_1 = __importDefault(require("./etc/objects/LabelRole.js"));
const LegendRole_js_1 = __importDefault(require("./etc/objects/LegendRole.js"));
const LineBreakRole_js_1 = __importDefault(require("./etc/objects/LineBreakRole.js"));
const LinkRole_js_1 = __importDefault(require("./etc/objects/LinkRole.js"));
const ListBoxOptionRole_js_1 = __importDefault(require("./etc/objects/ListBoxOptionRole.js"));
const ListBoxRole_js_1 = __importDefault(require("./etc/objects/ListBoxRole.js"));
const ListItemRole_js_1 = __importDefault(require("./etc/objects/ListItemRole.js"));
const ListMarkerRole_js_1 = __importDefault(require("./etc/objects/ListMarkerRole.js"));
const ListRole_js_1 = __importDefault(require("./etc/objects/ListRole.js"));
const LogRole_js_1 = __importDefault(require("./etc/objects/LogRole.js"));
const MainRole_js_1 = __importDefault(require("./etc/objects/MainRole.js"));
const MarkRole_js_1 = __importDefault(require("./etc/objects/MarkRole.js"));
const MarqueeRole_js_1 = __importDefault(require("./etc/objects/MarqueeRole.js"));
const MathRole_js_1 = __importDefault(require("./etc/objects/MathRole.js"));
const MenuBarRole_js_1 = __importDefault(require("./etc/objects/MenuBarRole.js"));
const MenuButtonRole_js_1 = __importDefault(require("./etc/objects/MenuButtonRole.js"));
const MenuItemRole_js_1 = __importDefault(require("./etc/objects/MenuItemRole.js"));
const MenuItemCheckBoxRole_js_1 = __importDefault(require("./etc/objects/MenuItemCheckBoxRole.js"));
const MenuItemRadioRole_js_1 = __importDefault(require("./etc/objects/MenuItemRadioRole.js"));
const MenuListOptionRole_js_1 = __importDefault(require("./etc/objects/MenuListOptionRole.js"));
const MenuListPopupRole_js_1 = __importDefault(require("./etc/objects/MenuListPopupRole.js"));
const MenuRole_js_1 = __importDefault(require("./etc/objects/MenuRole.js"));
const MeterRole_js_1 = __importDefault(require("./etc/objects/MeterRole.js"));
const NavigationRole_js_1 = __importDefault(require("./etc/objects/NavigationRole.js"));
const NoneRole_js_1 = __importDefault(require("./etc/objects/NoneRole.js"));
const NoteRole_js_1 = __importDefault(require("./etc/objects/NoteRole.js"));
const OutlineRole_js_1 = __importDefault(require("./etc/objects/OutlineRole.js"));
const ParagraphRole_js_1 = __importDefault(require("./etc/objects/ParagraphRole.js"));
const PopUpButtonRole_js_1 = __importDefault(require("./etc/objects/PopUpButtonRole.js"));
const PreRole_js_1 = __importDefault(require("./etc/objects/PreRole.js"));
const PresentationalRole_js_1 = __importDefault(require("./etc/objects/PresentationalRole.js"));
const ProgressIndicatorRole_js_1 = __importDefault(require("./etc/objects/ProgressIndicatorRole.js"));
const RadioButtonRole_js_1 = __importDefault(require("./etc/objects/RadioButtonRole.js"));
const RadioGroupRole_js_1 = __importDefault(require("./etc/objects/RadioGroupRole.js"));
const RegionRole_js_1 = __importDefault(require("./etc/objects/RegionRole.js"));
const RootWebAreaRole_js_1 = __importDefault(require("./etc/objects/RootWebAreaRole.js"));
const RowHeaderRole_js_1 = __importDefault(require("./etc/objects/RowHeaderRole.js"));
const RowRole_js_1 = __importDefault(require("./etc/objects/RowRole.js"));
const RubyRole_js_1 = __importDefault(require("./etc/objects/RubyRole.js"));
const RulerRole_js_1 = __importDefault(require("./etc/objects/RulerRole.js"));
const ScrollAreaRole_js_1 = __importDefault(require("./etc/objects/ScrollAreaRole.js"));
const ScrollBarRole_js_1 = __importDefault(require("./etc/objects/ScrollBarRole.js"));
const SeamlessWebAreaRole_js_1 = __importDefault(require("./etc/objects/SeamlessWebAreaRole.js"));
const SearchRole_js_1 = __importDefault(require("./etc/objects/SearchRole.js"));
const SearchBoxRole_js_1 = __importDefault(require("./etc/objects/SearchBoxRole.js"));
const SliderRole_js_1 = __importDefault(require("./etc/objects/SliderRole.js"));
const SliderThumbRole_js_1 = __importDefault(require("./etc/objects/SliderThumbRole.js"));
const SpinButtonRole_js_1 = __importDefault(require("./etc/objects/SpinButtonRole.js"));
const SpinButtonPartRole_js_1 = __importDefault(require("./etc/objects/SpinButtonPartRole.js"));
const SplitterRole_js_1 = __importDefault(require("./etc/objects/SplitterRole.js"));
const StaticTextRole_js_1 = __importDefault(require("./etc/objects/StaticTextRole.js"));
const StatusRole_js_1 = __importDefault(require("./etc/objects/StatusRole.js"));
const SVGRootRole_js_1 = __importDefault(require("./etc/objects/SVGRootRole.js"));
const SwitchRole_js_1 = __importDefault(require("./etc/objects/SwitchRole.js"));
const TabGroupRole_js_1 = __importDefault(require("./etc/objects/TabGroupRole.js"));
const TabRole_js_1 = __importDefault(require("./etc/objects/TabRole.js"));
const TableHeaderContainerRole_js_1 = __importDefault(require("./etc/objects/TableHeaderContainerRole.js"));
const TableRole_js_1 = __importDefault(require("./etc/objects/TableRole.js"));
const TabListRole_js_1 = __importDefault(require("./etc/objects/TabListRole.js"));
const TabPanelRole_js_1 = __importDefault(require("./etc/objects/TabPanelRole.js"));
const TermRole_js_1 = __importDefault(require("./etc/objects/TermRole.js"));
const TextAreaRole_js_1 = __importDefault(require("./etc/objects/TextAreaRole.js"));
const TextFieldRole_js_1 = __importDefault(require("./etc/objects/TextFieldRole.js"));
const TimeRole_js_1 = __importDefault(require("./etc/objects/TimeRole.js"));
const TimerRole_js_1 = __importDefault(require("./etc/objects/TimerRole.js"));
const ToggleButtonRole_js_1 = __importDefault(require("./etc/objects/ToggleButtonRole.js"));
const ToolbarRole_js_1 = __importDefault(require("./etc/objects/ToolbarRole.js"));
const TreeRole_js_1 = __importDefault(require("./etc/objects/TreeRole.js"));
const TreeGridRole_js_1 = __importDefault(require("./etc/objects/TreeGridRole.js"));
const TreeItemRole_js_1 = __importDefault(require("./etc/objects/TreeItemRole.js"));
const UserInterfaceTooltipRole_js_1 = __importDefault(require("./etc/objects/UserInterfaceTooltipRole.js"));
const VideoRole_js_1 = __importDefault(require("./etc/objects/VideoRole.js"));
const WebAreaRole_js_1 = __importDefault(require("./etc/objects/WebAreaRole.js"));
const WindowRole_js_1 = __importDefault(require("./etc/objects/WindowRole.js"));
const AXObjects = [
    ["AbbrRole", AbbrRole_js_1.default],
    ["AlertDialogRole", AlertDialogRole_js_1.default],
    ["AlertRole", AlertRole_js_1.default],
    ["AnnotationRole", AnnotationRole_js_1.default],
    ["ApplicationRole", ApplicationRole_js_1.default],
    ["ArticleRole", ArticleRole_js_1.default],
    ["AudioRole", AudioRole_js_1.default],
    ["BannerRole", BannerRole_js_1.default],
    ["BlockquoteRole", BlockquoteRole_js_1.default],
    ["BusyIndicatorRole", BusyIndicatorRole_js_1.default],
    ["ButtonRole", ButtonRole_js_1.default],
    ["CanvasRole", CanvasRole_js_1.default],
    ["CaptionRole", CaptionRole_js_1.default],
    ["CellRole", CellRole_js_1.default],
    ["CheckBoxRole", CheckBoxRole_js_1.default],
    ["ColorWellRole", ColorWellRole_js_1.default],
    ["ColumnHeaderRole", ColumnHeaderRole_js_1.default],
    ["ColumnRole", ColumnRole_js_1.default],
    ["ComboBoxRole", ComboBoxRole_js_1.default],
    ["ComplementaryRole", ComplementaryRole_js_1.default],
    ["ContentInfoRole", ContentInfoRole_js_1.default],
    ["DateRole", DateRole_js_1.default],
    ["DateTimeRole", DateTimeRole_js_1.default],
    ["DefinitionRole", DefinitionRole_js_1.default],
    ["DescriptionListDetailRole", DescriptionListDetailRole_js_1.default],
    ["DescriptionListRole", DescriptionListRole_js_1.default],
    ["DescriptionListTermRole", DescriptionListTermRole_js_1.default],
    ["DetailsRole", DetailsRole_js_1.default],
    ["DialogRole", DialogRole_js_1.default],
    ["DirectoryRole", DirectoryRole_js_1.default],
    ["DisclosureTriangleRole", DisclosureTriangleRole_js_1.default],
    ["DivRole", DivRole_js_1.default],
    ["DocumentRole", DocumentRole_js_1.default],
    ["EmbeddedObjectRole", EmbeddedObjectRole_js_1.default],
    ["FeedRole", FeedRole_js_1.default],
    ["FigcaptionRole", FigcaptionRole_js_1.default],
    ["FigureRole", FigureRole_js_1.default],
    ["FooterRole", FooterRole_js_1.default],
    ["FormRole", FormRole_js_1.default],
    ["GridRole", GridRole_js_1.default],
    ["GroupRole", GroupRole_js_1.default],
    ["HeadingRole", HeadingRole_js_1.default],
    ["IframePresentationalRole", IframePresentationalRole_js_1.default],
    ["IframeRole", IframeRole_js_1.default],
    ["IgnoredRole", IgnoredRole_js_1.default],
    ["ImageMapLinkRole", ImageMapLinkRole_js_1.default],
    ["ImageMapRole", ImageMapRole_js_1.default],
    ["ImageRole", ImageRole_js_1.default],
    ["InlineTextBoxRole", InlineTextBoxRole_js_1.default],
    ["InputTimeRole", InputTimeRole_js_1.default],
    ["LabelRole", LabelRole_js_1.default],
    ["LegendRole", LegendRole_js_1.default],
    ["LineBreakRole", LineBreakRole_js_1.default],
    ["LinkRole", LinkRole_js_1.default],
    ["ListBoxOptionRole", ListBoxOptionRole_js_1.default],
    ["ListBoxRole", ListBoxRole_js_1.default],
    ["ListItemRole", ListItemRole_js_1.default],
    ["ListMarkerRole", ListMarkerRole_js_1.default],
    ["ListRole", ListRole_js_1.default],
    ["LogRole", LogRole_js_1.default],
    ["MainRole", MainRole_js_1.default],
    ["MarkRole", MarkRole_js_1.default],
    ["MarqueeRole", MarqueeRole_js_1.default],
    ["MathRole", MathRole_js_1.default],
    ["MenuBarRole", MenuBarRole_js_1.default],
    ["MenuButtonRole", MenuButtonRole_js_1.default],
    ["MenuItemRole", MenuItemRole_js_1.default],
    ["MenuItemCheckBoxRole", MenuItemCheckBoxRole_js_1.default],
    ["MenuItemRadioRole", MenuItemRadioRole_js_1.default],
    ["MenuListOptionRole", MenuListOptionRole_js_1.default],
    ["MenuListPopupRole", MenuListPopupRole_js_1.default],
    ["MenuRole", MenuRole_js_1.default],
    ["MeterRole", MeterRole_js_1.default],
    ["NavigationRole", NavigationRole_js_1.default],
    ["NoneRole", NoneRole_js_1.default],
    ["NoteRole", NoteRole_js_1.default],
    ["OutlineRole", OutlineRole_js_1.default],
    ["ParagraphRole", ParagraphRole_js_1.default],
    ["PopUpButtonRole", PopUpButtonRole_js_1.default],
    ["PreRole", PreRole_js_1.default],
    ["PresentationalRole", PresentationalRole_js_1.default],
    ["ProgressIndicatorRole", ProgressIndicatorRole_js_1.default],
    ["RadioButtonRole", RadioButtonRole_js_1.default],
    ["RadioGroupRole", RadioGroupRole_js_1.default],
    ["RegionRole", RegionRole_js_1.default],
    ["RootWebAreaRole", RootWebAreaRole_js_1.default],
    ["RowHeaderRole", RowHeaderRole_js_1.default],
    ["RowRole", RowRole_js_1.default],
    ["RubyRole", RubyRole_js_1.default],
    ["RulerRole", RulerRole_js_1.default],
    ["ScrollAreaRole", ScrollAreaRole_js_1.default],
    ["ScrollBarRole", ScrollBarRole_js_1.default],
    ["SeamlessWebAreaRole", SeamlessWebAreaRole_js_1.default],
    ["SearchRole", SearchRole_js_1.default],
    ["SearchBoxRole", SearchBoxRole_js_1.default],
    ["SliderRole", SliderRole_js_1.default],
    ["SliderThumbRole", SliderThumbRole_js_1.default],
    ["SpinButtonRole", SpinButtonRole_js_1.default],
    ["SpinButtonPartRole", SpinButtonPartRole_js_1.default],
    ["SplitterRole", SplitterRole_js_1.default],
    ["StaticTextRole", StaticTextRole_js_1.default],
    ["StatusRole", StatusRole_js_1.default],
    ["SVGRootRole", SVGRootRole_js_1.default],
    ["SwitchRole", SwitchRole_js_1.default],
    ["TabGroupRole", TabGroupRole_js_1.default],
    ["TabRole", TabRole_js_1.default],
    ["TableHeaderContainerRole", TableHeaderContainerRole_js_1.default],
    ["TableRole", TableRole_js_1.default],
    ["TabListRole", TabListRole_js_1.default],
    ["TabPanelRole", TabPanelRole_js_1.default],
    ["TermRole", TermRole_js_1.default],
    ["TextAreaRole", TextAreaRole_js_1.default],
    ["TextFieldRole", TextFieldRole_js_1.default],
    ["TimeRole", TimeRole_js_1.default],
    ["TimerRole", TimerRole_js_1.default],
    ["ToggleButtonRole", ToggleButtonRole_js_1.default],
    ["ToolbarRole", ToolbarRole_js_1.default],
    ["TreeRole", TreeRole_js_1.default],
    ["TreeGridRole", TreeGridRole_js_1.default],
    ["TreeItemRole", TreeItemRole_js_1.default],
    ["UserInterfaceTooltipRole", UserInterfaceTooltipRole_js_1.default],
    ["VideoRole", VideoRole_js_1.default],
    ["WebAreaRole", WebAreaRole_js_1.default],
    ["WindowRole", WindowRole_js_1.default],
];
const AXObjectsMap = {
    entries: function () {
        return AXObjects;
    },
    forEach: function (fn, thisArg = null) {
        for (let [key, values] of AXObjects) {
            fn.call(thisArg, values, key, AXObjects);
        }
    },
    get: function (key) {
        const item = AXObjects.find((tuple) => tuple[0] === key);
        return item && item[1];
    },
    has: function (key) {
        return !!AXObjectsMap.get(key);
    },
    keys: function () {
        return AXObjects.map(([key]) => key);
    },
    values: function () {
        return AXObjects.map(([, values]) => values);
    },
};
exports.default = (0, iterationDecorator_js_1.default)(AXObjectsMap, AXObjectsMap.entries());
