import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

/** 装饰器实践 */
import './decorator';


/** 引入高阶组件 */
import UseHoc from './hoc/useHoc'
import BeClone from './temp'


/** hooks 实践 */
import Hooks from './hooks/hooks.js'

const FunComponent = () => {
    return  <h3>这是创建的函数组件</h3>
}

const GetParams = () => {
    const { id } = useParams();
    return  <h3>router param id: { id }</h3>
}

class ReactComponent extends Component{
    render() {
        const CeFunction = React.createElement(FunComponent, null);
        const CeClass = React.createElement(BeClone, null);
        const b = <b>this is b</b>
        const ClEle = React.cloneElement(b);
        const ClReactEle = React.cloneElement(CeClass);

        return (<div>
            <div style={{ border: '1px solid #fff',margin: '10px',padding:'10px'}}>
                <h3>使用初始props：{ this.props.name }</h3>
                <GetParams></GetParams>
            </div>

            <div style={{ border: '1px solid #fff',margin: '10px',padding:'10px'}}>
                <h2>以下是create</h2>
                { CeClass}  { CeFunction } 
                <h2>以下是克隆</h2>
                { ClEle } { ClReactEle }
            </div>
     
            <div style={{ border: '1px solid #fff',margin: '10px',padding:'10px'}}>
                <UseHoc/>
            </div>
           
            <div className="custom-part">
                装饰器示例，查看控制台输出
            </div>
            <div className="custom-part">
                <hr/>
                <h2>Hooks 实践</h2>
                <Hooks/>
            </div>
        </div>);
    }
}  

ReactComponent.defaultProps = {
    name: 'hew-prop'
};

export default ReactComponent;
