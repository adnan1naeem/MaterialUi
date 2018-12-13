"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Table_1 = __importDefault(require("@material-ui/core/Table"));
const TableBody_1 = require("../../TableBody");
const TableCell_1 = require("../../TableCell");
const TableHead_1 = require("../../TableHead");
const TablePagination_1 = require("../../TablePagination");
const TableRow_1 = require("../../TableRow");
const TableSortLabel_1 = require("../../TableSortLabel");
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
const Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
const FilterList_1 = __importDefault(require("@material-ui/icons/FilterList"));
let counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}
function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0)
            return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}
const rows = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];
;
class EnhancedTableHead extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.createSortHandler = (property) => (event) => {
            this.props.onRequestSort(event, property);
        };
    }
    render() {
        const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
        return (react_1.default.createElement(TableHead_1.TableHead, null,
            react_1.default.createElement(TableRow_1.TableRow, null,
                react_1.default.createElement(TableCell_1.TableCell, { padding: "checkbox" },
                    react_1.default.createElement(Checkbox_1.default, { indeterminate: numSelected > 0 && numSelected < rowCount, checked: numSelected === rowCount, onChange: onSelectAllClick })),
                rows.map(row => {
                    return (react_1.default.createElement(TableCell_1.TableCell, { key: row.id, numeric: row.numeric, padding: row.disablePadding ? 'none' : 'default', sortDirection: orderBy === row.id ? order : false },
                        react_1.default.createElement(Tooltip_1.default, { title: "Sort", placement: row.numeric ? 'bottom-end' : 'bottom-start', enterDelay: 300 },
                            react_1.default.createElement(TableSortLabel_1.TableSortLabel, { active: orderBy === row.id, direction: order, onClick: this.createSortHandler(row.id) }, row.label))));
                }, this))));
    }
}
const toolbarStyles = {
    root: {
        paddingRight: 8,
    },
    spacer: {
        flex: '1 1 100%',
    },
    title: {
        flex: '0 0 auto',
    },
};
let EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
    return (react_1.default.createElement(Toolbar_1.default, null,
        react_1.default.createElement("div", { style: toolbarStyles.title }, numSelected > 0 ? (react_1.default.createElement(Typography_1.default, { color: "inherit", variant: "subtitle1" },
            numSelected,
            " selected")) : (react_1.default.createElement(Typography_1.default, { variant: "h6", id: "tableTitle" }, "Nutrition"))),
        react_1.default.createElement("div", { style: toolbarStyles.spacer }),
        react_1.default.createElement("div", null, numSelected > 0 ? (react_1.default.createElement(Tooltip_1.default, { title: "Delete" },
            react_1.default.createElement(IconButton_1.default, { "aria-label": "Delete" },
                react_1.default.createElement(Delete_1.default, null)))) : (react_1.default.createElement(Tooltip_1.default, { title: "Filter list" },
            react_1.default.createElement(IconButton_1.default, { "aria-label": "Filter list" },
                react_1.default.createElement(FilterList_1.default, null)))))));
};
const styles = {
    root: {
        width: '100%',
        marginTop: 24,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
};
;
class EnhancedTable extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.handleRequestSort = (event, property) => {
            const orderBy = property;
            let order = 'desc';
            console.log(event);
            if (this.state.orderBy === property && this.state.order === 'desc') {
                order = 'asc';
            }
            this.setState({ order, orderBy });
        };
        this.handleSelectAllClick = (event) => {
            if (event.target.checked) {
                this.setState((state) => ({ selected: state.data.map((n) => n.id) }));
                return;
            }
            this.setState({ selected: [] });
        };
        this.handleClick = (event, id) => {
            const { selected } = this.state;
            const selectedIndex = selected.indexOf(id);
            let newSelected = [];
            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selected, id);
            }
            else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selected.slice(1));
            }
            else if (selectedIndex === selected.length - 1) {
                newSelected = newSelected.concat(selected.slice(0, -1));
            }
            else if (selectedIndex > 0) {
                newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
            }
            this.setState({ selected: newSelected });
        };
        this.handleChangePage = (event, page) => {
            this.setState({ page });
        };
        this.handleChangeRowsPerPage = (event) => {
            this.setState({ rowsPerPage: event.target.value });
        };
        this.isSelected = (id) => this.state.selected.indexOf(id) !== -1;
        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            data: [
                createData('Cupcake', 305, 3.7, 67, 4.3),
                createData('Donut', 452, 25.0, 51, 4.9),
                createData('Eclair', 262, 16.0, 24, 6.0),
                createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                createData('Gingerbread', 356, 16.0, 49, 3.9),
                createData('Honeycomb', 408, 3.2, 87, 6.5),
                createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                createData('Jelly Bean', 375, 0.0, 94, 0.0),
                createData('KitKat', 518, 26.0, 65, 7.0),
                createData('Lollipop', 392, 0.2, 98, 0.0),
                createData('Marshmallow', 318, 0, 81, 2.0),
                createData('Nougat', 360, 19.0, 9, 37.0),
                createData('Oreo', 437, 18.0, 63, 4.0),
            ],
            page: 0,
            rowsPerPage: 5,
        };
    }
    render() {
        const { classes } = this.props;
        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
        return (react_1.default.createElement(Paper_1.default, { style: styles.root },
            react_1.default.createElement(EnhancedTableToolbar, { numSelected: selected.length }),
            react_1.default.createElement("div", { style: { overflowX: 'auto' } },
                react_1.default.createElement(Table_1.default, { style: styles.table, "aria-labelledby": "tableTitle" },
                    react_1.default.createElement(EnhancedTableHead, { numSelected: selected.length, order: order, orderBy: orderBy, onSelectAllClick: this.handleSelectAllClick, onRequestSort: this.handleRequestSort, rowCount: data.length }),
                    react_1.default.createElement(TableBody_1.TableBody, null,
                        stableSort(data, getSorting(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((n) => {
                            const isSelected = this.isSelected(n.id);
                            return (react_1.default.createElement(TableRow_1.TableRow, { hover: true, onClick: (event) => this.handleClick(event, n.id), role: "checkbox", "aria-checked": isSelected, 
                                // tabIndex={-1}
                                key: n.id, selected: isSelected },
                                react_1.default.createElement(TableCell_1.TableCell, { padding: "checkbox" },
                                    react_1.default.createElement(Checkbox_1.default, { checked: isSelected })),
                                react_1.default.createElement(TableCell_1.TableCell, { component: "th", scope: "row", padding: "none" }, n.name),
                                react_1.default.createElement(TableCell_1.TableCell, { numeric: true }, n.calories),
                                react_1.default.createElement(TableCell_1.TableCell, { numeric: true }, n.fat),
                                react_1.default.createElement(TableCell_1.TableCell, { numeric: true }, n.carbs),
                                react_1.default.createElement(TableCell_1.TableCell, { numeric: true }, n.protein)));
                        }),
                        emptyRows > 0 && (react_1.default.createElement(TableRow_1.TableRow, null,
                            react_1.default.createElement(TableCell_1.TableCell, { colSpan: 6 })))))),
            react_1.default.createElement(TablePagination_1.TablePagination, { rowsPerPageOptions: [5, 10, 25], component: "div", count: data.length, rowsPerPage: rowsPerPage, page: page, backIconButtonProps: {
                    'aria-label': 'Previous Page',
                }, nextIconButtonProps: {
                    'aria-label': 'Next Page',
                }, onChangePage: this.handleChangePage, onChangeRowsPerPage: this.handleChangeRowsPerPage })));
    }
}
exports.default = EnhancedTable;
//# sourceMappingURL=Table.container.js.map