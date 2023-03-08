import React, {Component} from 'react';

class Content extends Component {
    // return (
    //     <p>함수 컴포넌트 만들기</p>
    // );

    return React.createElement('p', null, '함수 컴포넌트 만들기');
}

export default Content;