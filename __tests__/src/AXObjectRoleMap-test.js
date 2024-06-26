/* eslint-env mocha */
import { expect } from 'expect';
import AXObjectRoleMap from '../../dist/src/AXObjectRoleMap.js';

const entriesList = [
  ["AlertDialogRole", [{"name": "alertdialog"}]],
  ["AlertRole", [{"name": "alert"}]],
  ["ApplicationRole", [{"name": "application"}]],
  ["ArticleRole", [{"name": "article"}]],
  ["BannerRole", [{"name": "banner"}]],
  ["BusyIndicatorRole", [{"attributes": [{"name": "aria-busy", "value": "true"}]}]],
  ["ButtonRole", [{"name": "button"}]],
  ["CellRole", [{"name": "cell"}, {"name": "gridcell"}]],
  ["CheckBoxRole", [{"name": "checkbox"}]],
  ["ColumnHeaderRole", [{"name": "columnheader"}]],
  ["ComboBoxRole", [{"name": "combobox"}]],
  ["ComplementaryRole", [{"name": "complementary"}]],
  ["ContentInfoRole", [{"name": "structureinfo"}]],
  ["DialogRole", [{"name": "dialog"}]],
  ["DirectoryRole", [{"name": "directory"}]],
  ["DocumentRole", [{"name": "document"}]],
  ["FeedRole", [{"name": "feed"}]],
  ["FigureRole", [{"name": "figure"}]],
  ["FormRole", [{"name": "form"}]],
  ["GridRole", [{"name": "grid"}]],
  ["GroupRole", [{"name": "group"}]],
  ["HeadingRole", [{"name": "heading"}]],
  ["ImageRole", [{"name": "img"}]],
  ["LinkRole", [{"name": "link"}]],
  ["ListBoxOptionRole", [{"name": "option"}]],
  ["ListBoxRole", [{"name": "listbox"}]],
  ["ListItemRole", [{"name": "listitem"}]],
  ["ListRole", [{"name": "list"}]],
  ["LogRole", [{"name": "log"}]],
  ["MainRole", [{"name": "main"}]],
  ["MarqueeRole", [{"name": "marquee"}]],
  ["MathRole", [{"name": "math"}]],
  ["MenuBarRole", [{"name": "menubar"}]],
  ["MenuItemRole", [{"name": "menuitem"}]],
  ["MenuItemCheckBoxRole", [{"name": "menuitemcheckbox"}]],
  ["MenuItemRadioRole", [{"name": "menuitemradio"}]],
  ["MenuRole", [{"name": "menu"}]],
  ["NavigationRole", [{"name": "navigation"}]],
  ["NoneRole", [{"name": "none"}]],
  ["NoteRole", [{"name": "note"}]],
  ["PresentationalRole", [{"name": "presentation"}]],
  ["ProgressIndicatorRole", [{"name": "progressbar"}]],
  ["RadioButtonRole", [{"name": "radio"}]],
  ["RadioGroupRole", [{"name": "radiogroup"}]],
  ["RegionRole", [{"name": "region"}]],
  ["RowHeaderRole", [{"name": "rowheader"}]],
  ["RowRole", [{"name": "row"}]],
  ["ScrollBarRole", [{"name": "scrollbar"}]],
  ["SearchRole", [{"name": "search"}]],
  ["SearchBoxRole", [{"name": "searchbox"}]],
  ["SliderRole", [{"name": "slider"}]],
  ["SpinButtonRole", [{"name": "spinbutton"}]],
  ["SplitterRole", [{"name": "separator"}]],
  ["StatusRole", [{"name": "status"}]],
  ["SwitchRole", [{"name": "switch"}]],
  ["TabGroupRole", [{"name": "tablist"}]],
  ["TabRole", [{"name": "tab"}]],
  ["TableRole", [{"name": "table"}]],
  ["TabListRole", [{"name": "tablist"}]],
  ["TabPanelRole", [{"name": "tabpanel"}]],
  ["TermRole", [{"name": "term"}]],
  ["TextAreaRole", [{"attributes": [{"name": "aria-multiline", "value": "true"}], "name": "textbox"}]],
  ["TextFieldRole", [{"name": "textbox"}]],
  ["TimerRole", [{"name": "timer"}]],
  ["ToggleButtonRole", [{"attributes": [{"name": "aria-pressed"}]}]],
  ["ToolbarRole", [{"name": "toolbar"}]],
  ["TreeRole", [{"name": "tree"}]],
  ["TreeGridRole", [{"name": "treegrid"}]],
  ["TreeItemRole", [{"name": "treeitem"}]],
  ["UserInterfaceTooltipRole", [{"name": "tooltip"}]],
];

describe('AXObjectRoleMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(AXObjectRoleMap[Symbol.iterator]).not.toBeUndefined();
    });
    it('should have a specific length', function () {
      expect([...AXObjectRoleMap].length).toEqual(70);
    });
    describe('should support the spread operator', function () {
      test.each([...AXObjectRoleMap])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    describe('should support the for..of pattern', function () {
      const output = [];
      for (const [key, value] of AXObjectRoleMap) {
        output.push([key, value]);
      }
      test.each(output)(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
  });
  describe('content', function () {
    describe('entries(), iteration', function () {
      test.each([...AXObjectRoleMap.entries()])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
      test.each([...AXObjectRoleMap.entries()])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    describe('forEach()', function () {
      const output = [];
      let context;
      AXObjectRoleMap.forEach((value, key, map) => {
        output.push([key, value]);
        if (!context) {
          context = map;
        }
      });
      test.each(output)(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
      test.each(context)(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    it('get()', function () {
      expect(AXObjectRoleMap.get("AlertDialogRole")).toEqual([{"name": "alertdialog"}]);
      expect(AXObjectRoleMap.get("AlertRole")).toEqual([{"name": "alert"}]);
      expect(AXObjectRoleMap.get("ApplicationRole")).toEqual([{"name": "application"}]);
      expect(AXObjectRoleMap.get("ArticleRole")).toEqual([{"name": "article"}]);
      expect(AXObjectRoleMap.get("BannerRole")).toEqual([{"name": "banner"}]);
      expect(AXObjectRoleMap.get("BusyIndicatorRole")).toEqual([{"attributes": [{"name": "aria-busy", "value": "true"}]}]);
      expect(AXObjectRoleMap.get("ButtonRole")).toEqual([{"name": "button"}]);
      expect(AXObjectRoleMap.get("CellRole")).toEqual([{"name": "cell"}, {"name": "gridcell"}]);
      expect(AXObjectRoleMap.get("CheckBoxRole")).toEqual([{"name": "checkbox"}]);
      expect(AXObjectRoleMap.get("ColumnHeaderRole")).toEqual([{"name": "columnheader"}]);
      expect(AXObjectRoleMap.get("ComboBoxRole")).toEqual([{"name": "combobox"}]);
      expect(AXObjectRoleMap.get("ComplementaryRole")).toEqual([{"name": "complementary"}]);
      expect(AXObjectRoleMap.get("ContentInfoRole")).toEqual([{"name": "structureinfo"}]);
      expect(AXObjectRoleMap.get("DialogRole")).toEqual([{"name": "dialog"}]);
      expect(AXObjectRoleMap.get("DirectoryRole")).toEqual([{"name": "directory"}]);
      expect(AXObjectRoleMap.get("DocumentRole")).toEqual([{"name": "document"}]);
      expect(AXObjectRoleMap.get("FeedRole")).toEqual([{"name": "feed"}]);
      expect(AXObjectRoleMap.get("FigureRole")).toEqual([{"name": "figure"}]);
      expect(AXObjectRoleMap.get("FormRole")).toEqual([{"name": "form"}]);
      expect(AXObjectRoleMap.get("GridRole")).toEqual([{"name": "grid"}]);
      expect(AXObjectRoleMap.get("GroupRole")).toEqual([{"name": "group"}]);
      expect(AXObjectRoleMap.get("HeadingRole")).toEqual([{"name": "heading"}]);
      expect(AXObjectRoleMap.get("ImageRole")).toEqual([{"name": "img"}]);
      expect(AXObjectRoleMap.get("LinkRole")).toEqual([{"name": "link"}]);
      expect(AXObjectRoleMap.get("ListBoxOptionRole")).toEqual([{"name": "option"}]);
      expect(AXObjectRoleMap.get("ListBoxRole")).toEqual([{"name": "listbox"}]);
      expect(AXObjectRoleMap.get("ListItemRole")).toEqual([{"name": "listitem"}]);
      expect(AXObjectRoleMap.get("ListRole")).toEqual([{"name": "list"}]);
      expect(AXObjectRoleMap.get("LogRole")).toEqual([{"name": "log"}]);
      expect(AXObjectRoleMap.get("MainRole")).toEqual([{"name": "main"}]);
      expect(AXObjectRoleMap.get("MarqueeRole")).toEqual([{"name": "marquee"}]);
      expect(AXObjectRoleMap.get("MathRole")).toEqual([{"name": "math"}]);
      expect(AXObjectRoleMap.get("MenuBarRole")).toEqual([{"name": "menubar"}]);
      expect(AXObjectRoleMap.get("MenuItemRole")).toEqual([{"name": "menuitem"}]);
      expect(AXObjectRoleMap.get("MenuItemCheckBoxRole")).toEqual([{"name": "menuitemcheckbox"}]);
      expect(AXObjectRoleMap.get("MenuItemRadioRole")).toEqual([{"name": "menuitemradio"}]);
      expect(AXObjectRoleMap.get("MenuRole")).toEqual([{"name": "menu"}]);
      expect(AXObjectRoleMap.get("NavigationRole")).toEqual([{"name": "navigation"}]);
      expect(AXObjectRoleMap.get("NoneRole")).toEqual([{"name": "none"}]);
      expect(AXObjectRoleMap.get("NoteRole")).toEqual([{"name": "note"}]);
      expect(AXObjectRoleMap.get("PresentationalRole")).toEqual([{"name": "presentation"}]);
      expect(AXObjectRoleMap.get("ProgressIndicatorRole")).toEqual([{"name": "progressbar"}]);
      expect(AXObjectRoleMap.get("RadioButtonRole")).toEqual([{"name": "radio"}]);
      expect(AXObjectRoleMap.get("RadioGroupRole")).toEqual([{"name": "radiogroup"}]);
      expect(AXObjectRoleMap.get("RegionRole")).toEqual([{"name": "region"}]);
      expect(AXObjectRoleMap.get("RowHeaderRole")).toEqual([{"name": "rowheader"}]);
      expect(AXObjectRoleMap.get("RowRole")).toEqual([{"name": "row"}]);
      expect(AXObjectRoleMap.get("ScrollBarRole")).toEqual([{"name": "scrollbar"}]);
      expect(AXObjectRoleMap.get("SearchRole")).toEqual([{"name": "search"}]);
      expect(AXObjectRoleMap.get("SearchBoxRole")).toEqual([{"name": "searchbox"}]);
      expect(AXObjectRoleMap.get("SliderRole")).toEqual([{"name": "slider"}]);
      expect(AXObjectRoleMap.get("SpinButtonRole")).toEqual([{"name": "spinbutton"}]);
      expect(AXObjectRoleMap.get("SplitterRole")).toEqual([{"name": "separator"}]);
      expect(AXObjectRoleMap.get("StatusRole")).toEqual([{"name": "status"}]);
      expect(AXObjectRoleMap.get("SwitchRole")).toEqual([{"name": "switch"}]);
      expect(AXObjectRoleMap.get("TabGroupRole")).toEqual([{"name": "tablist"}]);
      expect(AXObjectRoleMap.get("TabRole")).toEqual([{"name": "tab"}]);
      expect(AXObjectRoleMap.get("TableRole")).toEqual([{"name": "table"}]);
      expect(AXObjectRoleMap.get("TabListRole")).toEqual([{"name": "tablist"}]);
      expect(AXObjectRoleMap.get("TabPanelRole")).toEqual([{"name": "tabpanel"}]);
      expect(AXObjectRoleMap.get("TermRole")).toEqual([{"name": "term"}]);
      expect(AXObjectRoleMap.get("TextAreaRole")).toEqual([{"attributes": [{"name": "aria-multiline", "value": "true"}], "name": "textbox"}]);
      expect(AXObjectRoleMap.get("TextFieldRole")).toEqual([{"name": "textbox"}]);
      expect(AXObjectRoleMap.get("TimerRole")).toEqual([{"name": "timer"}]);
      expect(AXObjectRoleMap.get("ToggleButtonRole")).toEqual([{"attributes": [{"name": "aria-pressed"}]}]);
      expect(AXObjectRoleMap.get("ToolbarRole")).toEqual([{"name": "toolbar"}]);
      expect(AXObjectRoleMap.get("TreeRole")).toEqual([{"name": "tree"}]);
      expect(AXObjectRoleMap.get("TreeGridRole")).toEqual([{"name": "treegrid"}]);
      expect(AXObjectRoleMap.get("TreeItemRole")).toEqual([{"name": "treeitem"}]);
      expect(AXObjectRoleMap.get("UserInterfaceTooltipRole")).toEqual([{"name": "tooltip"}]);
    });
    it('has()', function () {
      expect(AXObjectRoleMap.has('DialogRole')).toEqual(true);
      expect(AXObjectRoleMap.has('DoveRole')).toEqual(false);
    });
    describe('keys(), iteration', function () {
      const entriesKeys = entriesList.map(entry => entry[0]);
      test.each(AXObjectRoleMap.keys())('Testing key: %o', (key) => {
        expect(entriesKeys).toEqual(
          expect.arrayContaining([key]),
        );
      });
      test.each([...AXObjectRoleMap.keys()])('Testing key: %o', (key) => {
        expect(entriesKeys).toEqual(
          expect.arrayContaining([key]),
        );
      });
    });
    describe('values(), iteration', function () {
      const entriesValues = entriesList.map(entry => entry[1]);
      test.each(AXObjectRoleMap.values().map(value => [value]))('Testing value: %o', (value) => {
        expect(entriesValues).toEqual(
          expect.arrayContaining([value]),
        );
      });
      test.each([...AXObjectRoleMap.values()].map(value => [value]))('Testing value: %o', (value) => {
        expect(entriesValues).toEqual(
          expect.arrayContaining([value]),
        );
      });
    });
  });
});
