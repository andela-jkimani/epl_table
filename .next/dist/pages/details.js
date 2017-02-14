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

var _link = require('/Users/Jacky/Documents/Code/epl_table/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('/Users/Jacky/Documents/Code/epl_table/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Cache data in localStorage if not already cached
      if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
    }
  }, {
    key: 'render',
    value: function render() {
      var detailStyle = {
        ul: {
          marginTop: '100px'
        }
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
            'League Table'
          ),
          _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement('div', { className: 'pure-u-8-24' }),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-4-24' },
            _react2.default.createElement(
              'h2',
              null,
              this.props.standing[0].teamName
            ),
            _react2.default.createElement('img', { src: this.props.standing[0].crestURI, className: 'pure-img' }),
            _react2.default.createElement(
              'h3',
              null,
              'Points: ',
              this.props.standing[0].points
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-12-24' },
            _react2.default.createElement(
              'ul',
              { style: detailStyle.ul },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Goals'
                ),
                ': ',
                this.props.standing[0].goals
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Wins'
                ),
                ': ',
                this.props.standing[0].wins
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Losses'
                ),
                ': ',
                this.props.standing[0].losses
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Draws'
                ),
                ': ',
                this.props.standing[0].draws
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Goals Against'
                ),
                ': ',
                this.props.standing[0].goalsAgainst
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Goal Difference'
                ),
                ': ',
                this.props.standing[0].goalDifference
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Played'
                ),
                ': ',
                this.props.standing[0].playedGames
              )
            ),
            _react2.default.createElement(
              _link2.default,
              { href: '/' },
              'Home'
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var query = _ref2.query;
        var id, res, bplData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Get id from query
                id = query.id;

                if (process.browser) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

              case 4:
                res = _context.sent;
                return _context.abrupt('return', {
                  data: res.data,
                  // Filter and return data based on query
                  standing: res.data.standing.filter(function (s) {
                    return s.position == id;
                  })
                });

              case 8:
                // Not on the server just navigating to use the cache
                bplData = JSON.parse(sessionStorage.getItem('bpl'));
                // Filter and return data based on query

                return _context.abrupt('return', { standing: bplData.standing.filter(function (s) {
                    return s.position == id;
                  }) });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RldGFpbHMuanMiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInByb3BzIiwiZGF0YSIsImRldGFpbFN0eWxlIiwidWwiLCJtYXJnaW5Ub3AiLCJzdGFuZGluZyIsInRlYW1OYW1lIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJsb3NzZXMiLCJkcmF3cyIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicGxheWVkR2FtZXMiLCJxdWVyeSIsImlkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJnZXQiLCJyZXMiLCJmaWx0ZXIiLCJzIiwicG9zaXRpb24iLCJicGxEYXRhIiwiSlNPTiIsInBhcnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O3dDQXNCdUI7QUFDbkI7QUFDQSxVQUFHLENBQUNBLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBSixFQUFtQ0QsZUFBZUUsT0FBZixDQUF1QixLQUF2QixFQUE4Qix5QkFBZSxLQUFLQyxLQUFMLENBQVdDLElBQTFCLENBQTlCO0FBQ3BDOzs7NkJBRVE7QUFDUCxVQUFNQyxjQUFjO0FBQ2xCQyxZQUFJO0FBQ0ZDLHFCQUFXO0FBRFQ7QUFEYyxPQUFwQjs7QUFNQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLGtEQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHVDQUE5QixHQUZGO0FBR0Usa0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssb0RBQTVCO0FBSEYsU0FERjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFLGlEQUFLLFdBQVUsYUFBZixHQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssbUJBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1QkM7QUFBNUIsYUFERjtBQUVFLG1EQUFLLEtBQUssS0FBS04sS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCRSxRQUFqQyxFQUEyQyxXQUFVLFVBQXJELEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFhLG1CQUFLUCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJHO0FBQXBDO0FBSEYsV0FGRjtBQU9FO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUNJO0FBQUE7QUFBQSxnQkFBSSxPQUFPTixZQUFZQyxFQUF2QjtBQUNJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQTtBQUE2QixxQkFBS0gsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCSTtBQUFwRCxlQURKO0FBRUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBO0FBQTRCLHFCQUFLVCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJLO0FBQW5ELGVBRko7QUFHSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUE7QUFBOEIscUJBQUtWLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1Qk07QUFBckQsZUFISjtBQUlJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQTtBQUE2QixxQkFBS1gsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCTztBQUFwRCxlQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBO0FBQXFDLHFCQUFLWixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJRO0FBQTVELGVBTEo7QUFNSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUE7QUFBdUMscUJBQUtiLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1QlM7QUFBOUQsZUFOSjtBQU9JO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQTtBQUE4QixxQkFBS2QsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCVTtBQUFyRDtBQVBKLGFBREo7QUFVSTtBQUFBO0FBQUEsZ0JBQU0sTUFBSyxHQUFYO0FBQUE7QUFBQTtBQVZKO0FBUEY7QUFQRixPQURGO0FBOEJEOzs7OztZQTdEOEJDLEssU0FBQUEsSzs7Ozs7O0FBQzdCO0FBQ01DLGtCLEdBQUtELE1BQU1DLEU7O29CQUNiQyxRQUFRQyxPOzs7Ozs7dUJBRVEsZ0JBQU1DLEdBQU4sQ0FBVSw4REFBVixDOzs7QUFBWkMsbUI7aURBQ0M7QUFDTHBCLHdCQUFNb0IsSUFBSXBCLElBREw7QUFFTDtBQUNBSSw0QkFBVWdCLElBQUlwQixJQUFKLENBQVNJLFFBQVQsQ0FBa0JpQixNQUFsQixDQUF5QjtBQUFBLDJCQUFLQyxFQUFFQyxRQUFGLElBQWNQLEVBQW5CO0FBQUEsbUJBQXpCO0FBSEwsaUI7OztBQU1QO0FBQ01RLHVCLEdBQVVDLEtBQUtDLEtBQUwsQ0FBVzlCLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBWCxDO0FBQ2hCOztpREFDTyxFQUFDTyxVQUFVb0IsUUFBUXBCLFFBQVIsQ0FBaUJpQixNQUFqQixDQUF3QjtBQUFBLDJCQUFLQyxFQUFFQyxRQUFGLElBQWNQLEVBQW5CO0FBQUEsbUJBQXhCLENBQVgsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEJnQixnQkFBTVcsUyIsImZpbGUiOiJkZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KYWNreS9Eb2N1bWVudHMvQ29kZS9lcGxfdGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtxdWVyeX0pIHtcbiAgICAvLyBHZXQgaWQgZnJvbSBxdWVyeVxuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQ7XG4gICAgaWYoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgLy8gU3RpbGwgb24gdGhlIHNlcnZlciBzbyBtYWtlIGEgcmVxdWVzdFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgICAgICAvLyBGaWx0ZXIgYW5kIHJldHVybiBkYXRhIGJhc2VkIG9uIHF1ZXJ5XG4gICAgICAgIHN0YW5kaW5nOiByZXMuZGF0YS5zdGFuZGluZy5maWx0ZXIocyA9PiBzLnBvc2l0aW9uID09IGlkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3Qgb24gdGhlIHNlcnZlciBqdXN0IG5hdmlnYXRpbmcgdG8gdXNlIHRoZSBjYWNoZVxuICAgICAgY29uc3QgYnBsRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpO1xuICAgICAgLy8gRmlsdGVyIGFuZCByZXR1cm4gZGF0YSBiYXNlZCBvbiBxdWVyeVxuICAgICAgcmV0dXJuIHtzdGFuZGluZzogYnBsRGF0YS5zdGFuZGluZy5maWx0ZXIocyA9PiBzLnBvc2l0aW9uID09IGlkKX1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gQ2FjaGUgZGF0YSBpbiBsb2NhbFN0b3JhZ2UgaWYgbm90IGFscmVhZHkgY2FjaGVkXG4gICAgaWYoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdicGwnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRhdGEpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRldGFpbFN0eWxlID0ge1xuICAgICAgdWw6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMC42LjEvYnVpbGQvcHVyZS1taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtOC0yNFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTQtMjRcIj5cbiAgICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy5zdGFuZGluZ1swXS50ZWFtTmFtZX08L2gyPlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuc3RhbmRpbmdbMF0uY3Jlc3RVUkl9IGNsYXNzTmFtZT1cInB1cmUtaW1nXCIvPlxuICAgICAgICAgICAgPGgzPlBvaW50czoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0ucG9pbnRzfTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMTItMjRcIj5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXtkZXRhaWxTdHlsZS51bH0+XG4gICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2Fsczwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0uZ29hbHN9PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPldpbnM8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLndpbnN9PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkxvc3Nlczwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0ubG9zc2VzfTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5EcmF3czwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0uZHJhd3N9PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkdvYWxzIEFnYWluc3Q8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmdvYWxzQWdhaW5zdH08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+R29hbCBEaWZmZXJlbmNlPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2FsRGlmZmVyZW5jZX08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UGxheWVkPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5wbGF5ZWRHYW1lc308L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=