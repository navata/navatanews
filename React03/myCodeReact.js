'use strict';

class ReactO1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowWelcome: true
    };
  }

  render() {
    return (
      React.createElement(
        'div', 
        {},
        React.createElement(
          'h1',
          { 
            key: '1',
            style: {
              display: this.state.isShowWelcome ? 'block' : 'none'
            }
          },
          'Xin chào độc giả đến với bài viết Thêm React vào Website'
        ),
        React.createElement(        
          'button',
          { 
            key: '2',
            onClick: () => this.setState({ isShowWelcome: !this.state.isShowWelcome})
          },
          this.state.isShowWelcome ? 'Ẩn lời chào' : 'Hiển thị lời chào'
        )
      )
    )
    // return (
    //   <div>
    //     {this.state.isShowWelcome && <h1>Xin chào độc giả đến với bài viết Thêm React vào Website</h1>}
    //     <button onClick={() => this.setState({ isShowWelcome: !this.state.isShowWelcome})}>
    //       {this.state.isShowWelcome ? 'Ẩn lời chào' : 'Hiển thị lời chào'}
    //     </button>
    //   </div>
    // )
  }
}

const rootDiv = document.getElementById('root'); // Lấy element trong HTML DOM với id là root (đặt tên là rootDiv)
const root = ReactDOM.createRoot(rootDiv); // Tạo một node DOM trong react với vùng chứa là rootDiv
root.render(React.createElement(ReactO1)); // Tạo element trong React và hiển thị nó lên  