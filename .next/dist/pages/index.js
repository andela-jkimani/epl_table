'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/Users/Jacky/Documents/Code/epl_table/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/Jacky/Documents/Code/epl_table/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('/Users/Jacky/Documents/Code/epl_table/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('/Users/Jacky/Documents/Code/epl_table/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/Jacky/Documents/Code/epl_table/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/Jacky/Documents/Code/epl_table/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/Jacky/Documents/Code/epl_table/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/Jacky/Documents/Code/epl_table/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/Jacky/Documents/Code/epl_table/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/Jacky/Documents/Code/epl_table/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('/Users/Jacky/Documents/Code/epl_table/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export an anonymous arrow function that returns the template
var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
    }
  }, {
    key: 'render',
    value: function render() {
      var logoStyle = {
        width: '30px'
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'EPL League Table'
          ),
          _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement('div', { className: 'pure-u-1-3' }),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-1-3' },
            _react2.default.createElement(
              'h1',
              null,
              'Barclays Premier League'
            ),
            _react2.default.createElement(
              'table',
              { className: 'pure-table' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Position'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Team'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'P'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'GL'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'W'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'D'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    ':'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                this.props.data.standing.map(function (standing, i) {
                  var oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
                  return _react2.default.createElement(
                    'tr',
                    { key: i, className: oddOrNot },
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.position
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI, style: logoStyle })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.points
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.goals
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.wins
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.draws
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.losses
                    )
                  );
                })
              )
            )
          ),
          _react2.default.createElement('div', { className: 'pure-u-1-3' })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (process.browser) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

              case 3:
                res = _context.sent;
                return _context.abrupt('return', { data: res.data });

              case 7:
                return _context.abrupt('return', { data: JSON.parse(sessionStorage.getItem('bpl')) });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return _class;
}(_react2.default.Component);
// import the Head Component


exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJwcm9wcyIsImRhdGEiLCJsb2dvU3R5bGUiLCJ3aWR0aCIsInN0YW5kaW5nIiwibWFwIiwiaSIsIm9kZE9yTm90IiwicG9zaXRpb24iLCJjcmVzdFVSSSIsInBvaW50cyIsImdvYWxzIiwid2lucyIsImRyYXdzIiwibG9zc2VzIiwicHJvY2VzcyIsImJyb3dzZXIiLCJnZXQiLCJyZXMiLCJKU09OIiwicGFyc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozt3Q0FXdUI7QUFDbkIsVUFBRyxDQUFDQSxlQUFlQyxPQUFmLENBQXVCLEtBQXZCLENBQUosRUFBbUNELGVBQWVFLE9BQWYsQ0FBdUIsS0FBdkIsRUFBOEIseUJBQWUsS0FBS0MsS0FBTCxDQUFXQyxJQUExQixDQUE5QjtBQUNwQzs7OzZCQUVRO0FBQ1AsVUFBTUMsWUFBWTtBQUNoQkMsZUFBTztBQURTLE9BQWxCOztBQUlBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsa0RBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsdUNBQTlCLEdBRkY7QUFHRSxrREFBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxvREFBNUI7QUFIRixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0UsaURBQUssV0FBVSxZQUFmLEdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxZQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQURBLGVBREY7QUFZRTtBQUFBO0FBQUE7QUFDRyxxQkFBS0gsS0FBTCxDQUFXQyxJQUFYLENBQWdCRyxRQUFoQixDQUF5QkMsR0FBekIsQ0FBNkIsVUFBQ0QsUUFBRCxFQUFXRSxDQUFYLEVBQWlCO0FBQzdDLHNCQUFNQyxXQUFXRCxJQUFJLENBQUosSUFBUyxDQUFULEdBQWEsZ0JBQWIsR0FBZ0MsRUFBakQ7QUFDQSx5QkFDRTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsQ0FBVCxFQUFZLFdBQVdDLFFBQXZCO0FBQ0E7QUFBQTtBQUFBO0FBQUtILCtCQUFTSTtBQUFkLHFCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUksNkRBQUssV0FBVSxlQUFmLEVBQStCLEtBQUtKLFNBQVNLLFFBQTdDLEVBQXVELE9BQU9QLFNBQTlEO0FBQUoscUJBRkE7QUFHQTtBQUFBO0FBQUE7QUFBS0UsK0JBQVNNO0FBQWQscUJBSEE7QUFJQTtBQUFBO0FBQUE7QUFBS04sK0JBQVNPO0FBQWQscUJBSkE7QUFLQTtBQUFBO0FBQUE7QUFBS1AsK0JBQVNRO0FBQWQscUJBTEE7QUFNQTtBQUFBO0FBQUE7QUFBS1IsK0JBQVNTO0FBQWQscUJBTkE7QUFPQTtBQUFBO0FBQUE7QUFBS1QsK0JBQVNVO0FBQWQ7QUFQQSxtQkFERjtBQVdELGlCQWJBO0FBREg7QUFaRjtBQUZGLFdBRkY7QUFrQ0UsaURBQUssV0FBVSxZQUFmO0FBbENGO0FBTkYsT0FERjtBQTZDRDs7Ozs7Ozs7OztvQkE5REtDLFFBQVFDLE87Ozs7Ozt1QkFDUSxnQkFBTUMsR0FBTixDQUFVLDhEQUFWLEM7OztBQUFaQyxtQjtpREFDQyxFQUFDakIsTUFBTWlCLElBQUlqQixJQUFYLEU7OztpREFFQSxFQUFDQSxNQUFNa0IsS0FBS0MsS0FBTCxDQUFXdkIsZUFBZUMsT0FBZixDQUF1QixLQUF2QixDQUFYLENBQVAsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBTmdCLGdCQUFNdUIsUztBQU5uQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmFja3kvRG9jdW1lbnRzL0NvZGUvZXBsX3RhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB0aGUgSGVhZCBDb21wb25lbnRcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gZXhwb3J0IGFuIGFub255bW91cyBhcnJvdyBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHRlbXBsYXRlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgaWYoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKTtcbiAgICAgIHJldHVybiB7ZGF0YTogcmVzLmRhdGF9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7ZGF0YTogSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdicGwnKSl9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdicGwnKSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYnBsJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5kYXRhKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsb2dvU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzMwcHgnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5FUEwgTGVhZ3VlIFRhYmxlPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDAuNi4xL2J1aWxkL3B1cmUtbWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj5cbiAgICAgICAgICAgIDxoMT5CYXJjbGF5cyBQcmVtaWVyIExlYWd1ZTwvaDE+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+UG9zaXRpb248L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5UZWFtPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkdMPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+VzwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD46PC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEuc3RhbmRpbmcubWFwKChzdGFuZGluZywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgb2RkT3JOb3QgPSBpICUgMiA9PSAxID8gXCJwdXJlLXRhYmxlLW9kZFwiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT17b2RkT3JOb3R9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLnBvc2l0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT1cInB1cmUtaW1nIGxvZ29cIiBzcmM9e3N0YW5kaW5nLmNyZXN0VVJJfSBzdHlsZT17bG9nb1N0eWxlfS8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5nb2Fsc308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLndpbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5kcmF3c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLmxvc3Nlc308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19